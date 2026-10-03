import React from 'react';
import { Mail, Beer, Scroll, Send, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { profileData } from '@/data/profile';

export const Contact: React.FC = () => {
  const { personal, contact } = profileData;

  return (
    <section id="contato" className="py-20 relative bg-[#0c0c14] border-b-4 border-amber-600/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-3 py-1 bg-slate-900 border-2 border-amber-500 text-amber-400 font-pixel text-xl uppercase mb-2">
            // PONTO DE ENCONTRO
          </div>
          <h2 className="text-5xl sm:text-6xl font-pixel font-bold text-amber-400 tracking-wider">
            Correio do Aventureiro
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl mx-auto font-sans">
            Despache uma missiva direta para novas alianças, propostas técnicas de engenharia de software e projetos corporativos.
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-3" />
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Info Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 bg-slate-900 border-4 border-amber-600/80 shadow-[6px_6px_0px_#000]">
              <h3 className="text-2xl font-pixel font-bold text-amber-300 mb-3 flex items-center gap-2">
                <Beer className="w-5 h-5 text-amber-400" />
                <span>Canais da Taverna</span>
              </h3>
              <p className="text-slate-300 text-xs font-sans leading-relaxed mb-4">
                Comunicação rápida para contratação, projetos sob medida e parcerias em tecnologia.
              </p>

              <div className="space-y-3">
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-slate-950 border-2 border-amber-600/60 text-slate-200 hover:bg-amber-500 hover:text-black transition-none shadow-[3px_3px_0px_#000]"
                >
                  <div className="p-1.5 bg-slate-900 border border-amber-500 text-amber-400">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-amber-400 font-pixel uppercase">[ PERFIL PROFISSIONAL ]</div>
                    <div className="text-sm font-pixel text-slate-100">{personal.name}</div>
                  </div>
                </a>

                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-slate-950 border-2 border-slate-700 text-slate-200 hover:bg-slate-800 transition-none shadow-[3px_3px_0px_#000]"
                >
                  <div className="p-1.5 bg-slate-900 border border-slate-700 text-slate-300">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-pixel uppercase">[ FORJA & CÓDIGOS ]</div>
                    <div className="text-sm font-pixel text-slate-100">{contact.githubUsername}</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-3.5 bg-slate-900 border-2 border-slate-800 text-xs font-pixel text-amber-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>STATUS: {personal.status.toUpperCase()}</span>
            </div>
          </div>

          {/* Action Dispatcher Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 bg-slate-900 border-4 border-amber-500 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] space-y-5">
              
              <div className="border-b-2 border-amber-500/40 pb-3">
                <h4 className="font-pixel text-2xl text-amber-400 uppercase flex items-center gap-2">
                  <Scroll className="w-5 h-5 text-amber-400" />
                  <span>Despacho Direto de Missivas</span>
                </h4>
                <p className="text-xs font-sans text-slate-300 mt-1">
                  Escolha seu pergaminho de comunicação favorito para envio imediato:
                </p>
              </div>

              {/* Direct Mail Action Card */}
              <a
                href={`mailto:${contact.email}`}
                className="group block p-4 bg-slate-950 border-2 border-emerald-500 hover:bg-emerald-950/40 transition-none shadow-[4px_4px_0px_#000]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-emerald-900/50 border border-emerald-400 text-emerald-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-pixel text-xs text-emerald-400 uppercase tracking-wider">[ CORREIO ELETRÔNICO ]</div>
                      <div className="font-pixel text-xl text-white group-hover:text-amber-300">{contact.email}</div>
                    </div>
                  </div>
                  <Send className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              {/* Direct WhatsApp Action Card */}
              <a
                href={contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-4 bg-slate-950 border-2 border-emerald-500 hover:bg-emerald-950/40 transition-none shadow-[4px_4px_0px_#000]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-emerald-900/50 border border-emerald-400 text-emerald-300">
                      <svg className="w-5 h-5 text-emerald-300" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.45 1.03 2.62.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-pixel text-xs text-emerald-400 uppercase tracking-wider">[ COMUNICADOR WHATSAPP ]</div>
                      <div className="font-pixel text-xl text-white group-hover:text-amber-300">{contact.phone}</div>
                    </div>
                  </div>
                  <Send className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              <div className="p-3 bg-slate-950 border border-slate-800 text-[11px] text-slate-400 font-sans text-center">
                Localidade: {personal.location} • {personal.availability}.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
