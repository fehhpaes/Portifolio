import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Mail, Phone, MapPin, Globe, Database, FileText } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '@/components/Icons';
import { connectToDatabase } from '@/lib/db';
import { Curriculum, ICurriculumData } from '@/models/Curriculum';
import { defaultCurriculums } from '@/lib/defaultCurriculums';
import PrintButton from '@/components/cv/PrintButton';

interface PageProps {
  params: Promise<{ perfil: string }>;
}

export interface ProfileNavItem {
  slug: string;
  title: string;
  headline?: string;
}

async function getAllProfiles(): Promise<ProfileNavItem[]> {
  try {
    const db = await connectToDatabase();
    if (db) {
      const docs = await Curriculum.find({}, 'slug title headline').sort({ slug: 1 }).lean<ProfileNavItem[]>();
      if (docs && docs.length > 0) {
        return docs.map((d) => ({
          slug: d.slug,
          title: d.title,
          headline: d.headline,
        }));
      }
    }
  } catch (error) {
    console.warn('[CV] Erro ao buscar lista de perfis para navegação:', error);
  }

  // Fallback caso MongoDB não esteja disponível ou sem registros
  return Object.keys(defaultCurriculums).map((slug) => ({
    slug,
    title: defaultCurriculums[slug].title,
    headline: defaultCurriculums[slug].headline,
  }));
}

async function getCurriculumData(perfil: string): Promise<{ data: ICurriculumData; source: 'atlas' | 'local' } | null> {
  const normalizedSlug = perfil.toLowerCase().trim();

  try {
    const db = await connectToDatabase();
    if (db) {
      const cvFromMongo = await Curriculum.findOne({ slug: normalizedSlug }).lean<ICurriculumData>();
      if (cvFromMongo) {
        return { data: cvFromMongo, source: 'atlas' };
      }
    }
  } catch (error) {
    console.warn('[CV] MongoDB indisponível, alternando para dados padrão:', error);
  }

  // Fallback caso MongoDB não esteja configurado ou slug ainda não cadastrado no banco
  if (defaultCurriculums[normalizedSlug]) {
    return { data: defaultCurriculums[normalizedSlug], source: 'local' };
  }

  return null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { perfil } = await params;
  const result = await getCurriculumData(perfil);

  if (!result) {
    return { title: 'Currículo não encontrado' };
  }

  const { data } = result;

  return {
    title: `${data.title} | ${data.headline}`,
    description: data.customSummary.slice(0, 160),
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function CurriculumPage({ params }: PageProps) {
  const { perfil } = await params;
  const currentSlug = perfil.toLowerCase().trim();

  // Executa busca paralela do perfil ativo e da lista de navegação
  const [result, allProfiles] = await Promise.all([
    getCurriculumData(currentSlug),
    getAllProfiles(),
  ]);

  if (!result) {
    notFound();
  }

  const { data: cv, source } = result;

  const experiences = [...(cv.experiences || [])].sort((a, b) => a.order - b.order);
  const projects = [...(cv.projects || [])].sort((a, b) => a.order - b.order);

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 font-sans print:bg-white print:text-black print:min-h-0 antialiased selection:bg-amber-500/30">
      
      {/* ========================================================
          BARRA DE FERRAMENTAS DO TOPO (Oculta ao imprimir / PDF)
         ======================================================== */}
      <aside className="print:hidden sticky top-0 z-50 bg-neutral-900 text-white py-2.5 px-4 shadow-lg border-b border-neutral-800">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          
          {/* Navegação Dinâmica entre Perfis */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mr-1">
              Perfis:
            </span>

            <nav className="flex items-center gap-1.5 flex-wrap">
              {allProfiles.map((item) => {
                const isActive = item.slug === currentSlug;
                return (
                  <Link
                    key={item.slug}
                    href={`/cv/${item.slug}`}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all capitalize ${
                      isActive
                        ? 'bg-amber-500 text-neutral-950 font-bold shadow-sm'
                        : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white'
                    }`}
                  >
                    {item.slug}
                  </Link>
                );
              })}
            </nav>

            <span className="text-neutral-700 mx-1 hidden sm:inline">|</span>

            {/* Indicador de Origem de Dados */}
            {source === 'atlas' ? (
              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                <Database className="w-3 h-3" /> Atlas
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[11px] text-neutral-400 font-mono" title="Para carregar diretamente do banco, defina MONGODB_URI no .env.local">
                <FileText className="w-3 h-3" /> Local
              </span>
            )}
          </div>

          {/* Botões de Ação */}
          <div className="flex items-center gap-2 shrink-0">
            <PrintButton />
          </div>
        </div>
      </aside>

      {/* ========================================================
          FOLHA A4 - ESTRUTURA DO DOCUMENTO
         ======================================================== */}
      <main className="max-w-4xl mx-auto p-4 sm:p-8 print:p-0 print:max-w-none">
        <article 
          className="bg-white shadow-xl print:shadow-none rounded-2xl print:rounded-none p-8 sm:p-12 print:p-0 border border-neutral-200/80 print:border-none"
          style={{ minHeight: '297mm' }}
        >
          
          {/* CABEÇALHO */}
          <header className="border-b-2 border-neutral-900 pb-5 mb-5">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
              <div>
                <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-950">
                  {cv.title}
                </h1>
                <p className="text-base sm:text-lg font-semibold text-amber-800 print:text-neutral-800 mt-0.5">
                  {cv.headline}
                </p>
              </div>

              {/* CONTATOS & LINKS */}
              <div className="text-xs text-neutral-600 print:text-neutral-700 space-y-1 sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                  <span>{cv.location}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                  <span>{cv.phone}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                  <a href={`mailto:${cv.email}`} className="hover:underline">
                    {cv.email}
                  </a>
                </div>
                {cv.portfolioUrl && (
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                    <a
                      href={cv.portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      <span>{cv.portfolioUrl.replace(/^https?:\/\//, '')}</span>
                    </a>
                  </div>
                )}
                {cv.linkedinUrl && (
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <LinkedinIcon className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                    <a
                      href={cv.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      <span>{cv.linkedinUrl.replace('https://www.', '')}</span>
                    </a>
                  </div>
                )}
                {cv.githubUrl && (
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <GithubIcon className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                    <a
                      href={cv.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      <span>{cv.githubUrl.replace('https://', '')}</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* RESUMO DIRECIONADO */}
          <section className="mb-5 print:break-inside-avoid">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 print:text-neutral-900 border-b border-neutral-200 pb-1 mb-2">
              Perfil Profissional
            </h2>
            <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed text-justify">
              {cv.customSummary}
            </p>
          </section>

          {/* EXPERIÊNCIAS PROFISSIONAIS */}
          <section className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 print:text-neutral-900 border-b border-neutral-200 pb-1 mb-3">
              Experiência Profissional
            </h2>
            
            <div className="space-y-4">
              {experiences.map((exp, idx) => (
                <div key={idx} className="print:break-inside-avoid">
                  <div className="flex justify-between items-baseline gap-2">
                    <h3 className="text-xs sm:text-sm font-bold text-neutral-950">
                      {exp.role} <span className="font-semibold text-neutral-600">· {exp.company}</span>
                    </h3>
                    <span className="text-[11px] text-neutral-500 font-medium whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="mt-1.5 space-y-1 list-disc list-outside ml-4 text-xs text-neutral-700 leading-normal">
                    {exp.description.map((item, dIdx) => (
                      <li key={dIdx} className="text-justify">{item}</li>
                    ))}
                  </ul>

                  {exp.skillsUsed && exp.skillsUsed.length > 0 && (
                    <div className="mt-1.5 flex flex-wrap gap-1">
                      {exp.skillsUsed.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] bg-neutral-100 print:bg-transparent print:border print:border-neutral-300 text-neutral-700 px-1.5 py-0.5 rounded font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* PROJETOS DE DESTAQUE */}
          {projects.length > 0 && (
            <section className="mb-5 print:break-inside-avoid">
              <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 print:text-neutral-900 border-b border-neutral-200 pb-1 mb-3">
                Projetos & Aplicações em Produção
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projects.map((proj, idx) => (
                  <div key={idx} className="p-3 bg-neutral-50 print:bg-transparent print:border print:border-neutral-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-neutral-900">{proj.title}</span>
                      {proj.subtitle && (
                        <span className="text-[10px] text-neutral-500">{proj.subtitle}</span>
                      )}
                    </div>
                    <p className="text-[11px] text-neutral-700 mt-1 leading-snug text-justify">
                      {proj.description}
                    </p>
                    <div className="mt-2 text-[10px] text-neutral-500 font-mono">
                      {proj.technologies.join(' • ')}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* FORMAÇÃO, CERTIFICAÇÕES & COMPETÊNCIAS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 print:break-inside-avoid pt-2 border-t border-neutral-200">
            {/* Coluna Esquerda: Educação e Certificações */}
            <div className="space-y-4">
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 print:text-neutral-900 border-b border-neutral-200 pb-1 mb-2">
                  Formação Acadêmica
                </h2>
                <div className="space-y-2">
                  {cv.education.map((edu, idx) => (
                    <div key={idx}>
                      <p className="text-xs font-bold text-neutral-900">{edu.course}</p>
                      <p className="text-[11px] text-neutral-600">
                        {edu.institution} <span className="text-neutral-400">{edu.statusOrYear}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {cv.certifications && cv.certifications.length > 0 && (
                <section>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 print:text-neutral-900 border-b border-neutral-200 pb-1 mb-2">
                    Certificações & Cursos
                  </h2>
                  <div className="space-y-1.5">
                    {cv.certifications.map((cert, idx) => (
                      <div key={idx} className="flex justify-between items-baseline gap-2">
                        <p className="text-xs font-semibold text-neutral-900 leading-snug">
                          {cert.name} <span className="font-normal text-[11px] text-neutral-500">· {cert.institution}</span>
                        </p>
                        <span className="text-[10px] text-neutral-400 font-mono shrink-0">
                          {cert.year}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Coluna Direita: Competências e Idiomas */}
            <div className="space-y-4">
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 print:text-neutral-900 border-b border-neutral-200 pb-1 mb-2">
                  Competências Técnicas
                </h2>
                <div>
                  <p className="text-xs text-neutral-800 leading-relaxed">
                    {cv.coreSkills.join(' • ')}
                  </p>
                </div>
              </section>

              {cv.languages && cv.languages.length > 0 && (
                <section>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 print:text-neutral-900 border-b border-neutral-200 pb-1 mb-2">
                    Idiomas
                  </h2>
                  <p className="text-xs text-neutral-800">
                    {cv.languages.join(' • ')}
                  </p>
                </section>
              )}
            </div>
          </div>

        </article>
      </main>

      {/* Regras CSS de Impressão A4 */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page {
            size: A4 portrait;
            margin: 10mm 12mm 10mm 12mm;
          }
          body {
            background-color: #ffffff !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}} />
    </div>
  );
}
