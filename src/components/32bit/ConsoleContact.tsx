import React from 'react';
import { Mail, HardDrive, MessageSquare, Send, Radio } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { profileData } from '@/data/profile';

export const ConsoleContact: React.FC = () => {
  const { personal, contact } = profileData;

  return (
    <section id="contato" className="py-12 border-b-4 border-slate-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-6 flex items-center justify-between pb-2 border-b-2 border-blue-400/40 text-yellow-300 font-pixel text-xl drop-shadow-[2px_2px_0px_#000]">
          <span className="flex items-center gap-2">
            <HardDrive className="w-5 h-5 text-yellow-300" /> MEMORY TRANSMITTER • COMMS HUB
          </span>
          <span className="text-cyan-300 text-sm">[ STATUS: ONLINE ]</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Official Channels Column */}
          <div className="lg:col-span-5 space-y-3 font-pixel">
            <div className="bg-gradient-to-b from-[#0a256b] via-[#081b4f] to-[#040d2b] border-4 border-t-white border-l-white border-r-slate-500 border-b-slate-600 p-5 shadow-[6px_6px_0px_#000]">
              <h3 className="text-xl text-yellow-300 font-bold mb-3 flex items-center gap-2 drop-shadow-[1px_1px_0px_#000]">
                <MessageSquare className="w-5 h-5 text-yellow-300" />
                <span>Canais do Aventureiro</span>
              </h3>
              <p className="text-xs text-slate-200 font-sans leading-relaxed mb-4">
                Redes oficiais de comunicação e acompanhamento de código-fonte.
              </p>

              <div className="space-y-2.5">
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-[#091533] border-2 border-t-blue-400 border-l-blue-400 border-r-blue-950 border-b-blue-950 text-white hover:bg-blue-800 transition-none"
                >
                  <div className="p-1.5 bg-blue-950 border border-blue-400 text-yellow-300">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-yellow-300 uppercase">[ PERFIL PROFISSIONAL ]</div>
                    <div className="text-sm font-bold text-white">{personal.name}</div>
                  </div>
                </a>

                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-[#091533] border-2 border-t-slate-500 border-l-slate-500 border-r-slate-950 border-b-slate-950 text-white hover:bg-slate-800 transition-none"
                >
                  <div className="p-1.5 bg-slate-950 border border-slate-600 text-slate-200">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase">[ REPOSITÓRIOS ]</div>
                    <div className="text-sm font-bold text-white">{contact.githubUsername}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Direct Transmission Action Cards */}
          <div className="lg:col-span-7">
            <div className="bg-gradient-to-b from-[#0a256b] via-[#081b4f] to-[#040d2b] border-4 border-t-white border-l-white border-r-slate-500 border-b-slate-600 p-6 shadow-[6px_6px_0px_#000] space-y-4">
              
              <div className="border-b-2 border-blue-400/40 pb-3">
                <h4 className="font-pixel text-xl text-yellow-300 uppercase flex items-center gap-2 drop-shadow-[1px_1px_0px_#000]">
                  <Radio className="w-5 h-5 text-cyan-300" />
                  <span>Canais de Transmissão Direta</span>
                </h4>
                <p className="text-xs font-sans text-slate-200 mt-1">
                  Selecione um canal para estabelecer conexão de alta velocidade:
                </p>
              </div>

              {/* Direct Mail Action */}
              <a
                href={`mailto:${contact.email}`}
                className="group block p-4 bg-[#050b1c] border-2 border-t-emerald-400 border-l-emerald-400 border-r-emerald-950 border-b-emerald-950 hover:bg-emerald-950/50 transition-none shadow-[4px_4px_0px_#000]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-emerald-950 border border-emerald-400 text-emerald-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-pixel text-xs text-emerald-300 uppercase tracking-wider">[ FREQUÊNCIA: E-MAIL ]</div>
                      <div className="font-pixel text-xl text-white group-hover:text-yellow-300">{contact.email}</div>
                    </div>
                  </div>
                  <Send className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              {/* Direct WhatsApp Action */}
              <a
                href={contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-4 bg-[#050b1c] border-2 border-t-emerald-400 border-l-emerald-400 border-r-emerald-950 border-b-emerald-950 hover:bg-emerald-950/50 transition-none shadow-[4px_4px_0px_#000]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-emerald-950 border border-emerald-400 text-emerald-300">
                      <svg className="w-5 h-5 text-emerald-300" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.45 1.03 2.62.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-pixel text-xs text-emerald-300 uppercase tracking-wider">[ FREQUÊNCIA: WHATSAPP ]</div>
                      <div className="font-pixel text-xl text-white group-hover:text-yellow-300">{contact.phone}</div>
                    </div>
                  </div>
                  <Send className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              <div className="p-2.5 bg-[#050b1c] border border-blue-950 text-[11px] text-slate-300 font-sans text-center">
                Base: {personal.location} • Disponibilidade Imediata para Contratação.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ConsoleContact;
