'use client';

import React from 'react';
import { Mail, BookUser, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { profileData } from '@/data/profile';

export const WindowContact: React.FC = () => {
  const { personal, contact } = profileData;

  return (
    <section id="contato" className="my-6">
      {/* Address Book Window Container */}
      <div className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-black border-b-black p-1 shadow-[3px_3px_0px_#000]">
        
        {/* Title Bar */}
        <div className="bg-[#000080] text-white px-2 py-1 flex items-center justify-between font-sans text-xs font-bold select-none">
          <div className="flex items-center gap-1.5">
            <BookUser className="w-3.5 h-3.5 text-white" />
            <span>Catálogo de Endereços - Cartão de Contato</span>
          </div>
          {/* Window Buttons */}
          <div className="flex items-center gap-1">
            <button className="w-4 h-3.5 bg-[#c0c0c0] border border-t-white border-l-white border-r-black border-b-black text-black text-[9px] flex items-center justify-center font-mono font-bold leading-none">
              _
            </button>
            <button className="w-4 h-3.5 bg-[#c0c0c0] border border-t-white border-l-white border-r-black border-b-black text-black text-[9px] flex items-center justify-center font-mono font-bold leading-none">
              □
            </button>
            <button className="w-4 h-3.5 bg-[#c0c0c0] border border-t-white border-l-white border-r-black border-b-black text-black text-[9px] flex items-center justify-center font-mono font-bold leading-none">
              ×
            </button>
          </div>
        </div>

        {/* Window Content */}
        <div className="p-4 bg-[#c0c0c0] border-2 border-t-black border-l-black border-r-white border-b-white text-xs font-sans text-black">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
            
            {/* Address Card Main Info */}
            <div className="lg:col-span-8 space-y-3">
              <div className="bg-white border border-t-black border-l-black border-r-white border-b-white p-3 space-y-2">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                  <div className="w-10 h-10 bg-[#000080] text-white font-bold text-sm flex items-center justify-center border border-t-white border-l-white border-r-black border-b-black">
                    FP
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 leading-tight">{personal.name}</h3>
                    <p className="text-[11px] text-slate-600">{personal.role} • {personal.location}</p>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-800 pt-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="font-bold text-slate-700 min-w-[90px]">E-mail Principal:</span>
                    <span className="font-mono bg-slate-100 px-2 py-0.5 border border-slate-300 select-all">{contact.email}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="font-bold text-slate-700 min-w-[90px]">Telefone / Celular:</span>
                    <span className="font-mono bg-slate-100 px-2 py-0.5 border border-slate-300 select-all">{contact.phone}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="font-bold text-slate-700 min-w-[90px]">Disponibilidade:</span>
                    <span className="text-emerald-800 font-medium">{personal.availability}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 pt-1">
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-black border-b-black font-bold text-black hover:bg-[#d0d0d0] active:border-t-black active:border-l-black active:border-r-white active:border-b-white cursor-pointer shadow-sm"
                >
                  <Mail className="w-4 h-4 text-[#000080]" />
                  <span>Enviar E-mail Direto</span>
                </a>

                <a
                  href={contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-black border-b-black font-bold text-black hover:bg-[#d0d0d0] active:border-t-black active:border-l-black active:border-r-white active:border-b-white cursor-pointer shadow-sm"
                >
                  <svg className="w-4 h-4 text-emerald-700 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.45 1.03 2.62.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z" />
                  </svg>
                  <span>Chamar no WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Direct Links Column */}
            <div className="lg:col-span-4 p-3 bg-white border border-slate-400 space-y-2">
              <span className="font-bold text-slate-900 block border-b border-slate-300 pb-1">
                Atalhos Rápidos:
              </span>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-1.5 bg-[#f0f0f0] border border-slate-300 text-black hover:bg-[#e0e0e0]"
              >
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4 text-blue-800" />
                  <span>Perfil no LinkedIn</span>
                </div>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-1.5 bg-[#f0f0f0] border border-slate-300 text-black hover:bg-[#e0e0e0]"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-slate-800" />
                  <span>Repositórios GitHub</span>
                </div>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WindowContact;
