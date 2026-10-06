import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, FolderGit2, CheckCircle2, Clock } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import { projectsData } from '@/data/profile';

export default function BentoProjects() {
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900 border border-white/10 hover:bg-neutral-800/80 transition-colors shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <FolderGit2 className="w-5 h-5 text-emerald-400" />
            Projetos Selecionados
          </h2>
          <p className="text-xs text-neutral-400 mt-0.5">
            Soluções full-stack em produção, aplicações web e ferramentas corporativas
          </p>
        </div>

        <a
          href="https://github.com/fehhpaes"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-neutral-300 transition-colors self-start sm:self-auto"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>Ver todos no GitHub</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData.map((proj) => {
          const isCompleted = proj.status === 'Missão Concluída';

          return (
            <div
              key={proj.id}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between group/card"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-neutral-400 tracking-wider">
                      {proj.category}
                    </span>
                    <h3 className="text-lg font-bold text-white tracking-tight group-hover/card:text-indigo-300 transition-colors">
                      {proj.title}
                    </h3>
                  </div>

                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium border ${
                      isCompleted
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                    }`}
                  >
                    {isCompleted ? (
                      <>
                        <CheckCircle2 className="w-3 h-3" />
                        Concluído
                      </>
                    ) : (
                      <>
                        <Clock className="w-3 h-3" />
                        Em Desenvolvimento
                      </>
                    )}
                  </span>
                </div>

                <p className="text-xs text-neutral-300 line-clamp-3 mb-4 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md text-[11px] bg-neutral-800 text-neutral-400 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {proj.technologies.length > 4 && (
                    <span className="px-2 py-0.5 rounded-md text-[11px] bg-neutral-800 text-neutral-500">
                      +{proj.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/5">
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-neutral-950 hover:bg-neutral-200 text-xs font-semibold transition-colors"
                    >
                      <span>Acessar Produção</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {proj.repositories.map((repo, rIdx) => (
                    <a
                      key={rIdx}
                      href={repo.url || 'https://github.com/fehhpaes'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white border border-white/10 text-xs font-medium transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>{proj.repositories.length > 1 ? `GitHub (${repo.label})` : 'Código Fonte'}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
