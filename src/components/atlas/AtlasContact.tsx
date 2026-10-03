import React from 'react';
import { Mail, Compass, Send, Feather } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { profileData } from '@/data/profile';

export const AtlasContact: React.FC = () => {
  const { personal, contact } = profileData;

  return (
    <section id="contato" className="py-16 border-b border-stone-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-serif uppercase tracking-widest text-amber-900 font-semibold block mb-1">
            // SEÇÃO IV
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 font-normal">
            Correspondência & Contato
          </h2>
          <p className="font-serif italic text-stone-600 text-sm mt-1">
            Para propostas técnicas, oportunidades corporativas e projetos de engenharia de software
          </p>
          <div className="w-16 h-px bg-amber-900/60 mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Channels Column */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif text-xl text-stone-900 font-medium mb-3 flex items-center gap-2">
              <Compass className="w-5 h-5 text-amber-900" />
              <span>Canais Oficiais</span>
            </h3>
            <p className="text-sm text-stone-600 font-sans leading-relaxed mb-6">
              Acompanhe a trajetória profissional e os repositórios abertos de engenharia.
            </p>

            <div className="space-y-3">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 bg-stone-100/80 border border-stone-300 text-stone-800 hover:bg-stone-200 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-amber-900" />
                <div>
                  <div className="text-[10px] font-serif uppercase tracking-wider text-stone-500">Rede Profissional</div>
                  <div className="text-sm font-sans font-medium text-stone-900">{personal.name}</div>
                </div>
              </a>

              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 bg-stone-100/80 border border-stone-300 text-stone-800 hover:bg-stone-200 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-stone-700" />
                <div>
                  <div className="text-[10px] font-serif uppercase tracking-wider text-stone-500">Repositórios de Código</div>
                  <div className="text-sm font-sans font-medium text-stone-900">{contact.githubUsername}</div>
                </div>
              </a>
            </div>
          </div>

          {/* Direct Communication Cards */}
          <div className="lg:col-span-7">
            <div className="p-6 bg-stone-100/80 border border-stone-300 space-y-4">
              
              <div className="border-b border-stone-300 pb-3">
                <h4 className="font-serif text-lg text-stone-900 flex items-center gap-2">
                  <Feather className="w-4 h-4 text-amber-900" />
                  <span>Despacho de Mensagem Direta</span>
                </h4>
                <p className="text-xs font-sans text-stone-600 mt-1">
                  Selecione o canal para envio instantâneo sem intermediários:
                </p>
              </div>

              {/* Direct Mail Card */}
              <a
                href={`mailto:${contact.email}`}
                className="group block p-4 bg-stone-50 border border-amber-900/30 hover:border-amber-900 hover:bg-stone-100 transition-all shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-amber-900/10 border border-amber-900/20 text-amber-900">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-serif uppercase tracking-wider text-stone-500">Endereço de Correio Eletrônico</div>
                      <div className="font-serif text-base text-stone-900 font-medium group-hover:text-amber-900">{contact.email}</div>
                    </div>
                  </div>
                  <Send className="w-4 h-4 text-amber-900 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              {/* Direct WhatsApp Card */}
              <a
                href={contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-4 bg-stone-50 border border-amber-900/30 hover:border-amber-900 hover:bg-stone-100 transition-all shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-emerald-900/10 border border-emerald-900/20 text-emerald-800">
                      <svg className="w-5 h-5 text-emerald-800" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.45 1.03 2.62.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-serif uppercase tracking-wider text-stone-500">Telefone / WhatsApp</div>
                      <div className="font-serif text-base text-stone-900 font-medium group-hover:text-amber-900">{contact.phone}</div>
                    </div>
                  </div>
                  <Send className="w-4 h-4 text-emerald-800 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              <div className="p-3 bg-stone-50 border border-stone-200 text-[11px] text-stone-600 font-serif italic text-center">
                Localidade: {personal.location} • Disponível para novas oportunidades de contratação e projetos.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AtlasContact;
