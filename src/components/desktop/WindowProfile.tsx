'use client';

import React from 'react';
import { Monitor, MapPin, Globe, GraduationCap, X, Minus, Square } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export const WindowProfile: React.FC = () => {
  return (
    <section id="perfil" className="my-6">
      {/* Win95 Window Container */}
      <div className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-black border-b-black p-1 shadow-[3px_3px_0px_#000]">
        
        {/* Title Bar */}
        <div className="bg-[#000080] text-white px-2 py-1 flex items-center justify-between font-sans text-xs font-bold select-none">
          <div className="flex items-center gap-1.5">
            <Monitor className="w-3.5 h-3.5 text-white" />
            <span>Propriedades do Sistema: Felipe Paes da Silva</span>
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

        {/* Tab Headers */}
        <div className="flex items-center gap-1 px-2 pt-2 border-b border-b-black">
          <div className="px-3 py-1 bg-[#c0c0c0] border-t-2 border-l-2 border-r-2 border-t-white border-l-white border-r-black text-xs font-sans font-bold text-black -mb-px bg-white">
            Geral
          </div>
          <div className="px-3 py-1 bg-[#c0c0c0] border-t-2 border-l-2 border-r-2 border-t-white border-l-white border-r-black text-xs font-sans text-slate-700">
            Hardware
          </div>
          <div className="px-3 py-1 bg-[#c0c0c0] border-t-2 border-l-2 border-r-2 border-t-white border-l-white border-r-black text-xs font-sans text-slate-700">
            Desempenho
          </div>
        </div>

        {/* Tab Content Body */}
        <div className="p-4 bg-[#c0c0c0] border-2 border-t-black border-l-black border-r-white border-b-white text-xs font-sans text-black space-y-4">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Left Computer Icon */}
            <div className="md:col-span-3 flex flex-col items-center justify-center p-3 bg-white border-2 border-t-black border-l-black border-r-white border-b-white text-center">
              <Monitor className="w-16 h-16 text-blue-900 mb-1" />
              <span className="font-bold text-xs text-black">FELIPE-OS 95</span>
              <span className="text-[10px] text-slate-600">v4.0.1995</span>
            </div>

            {/* Right System Info Specs */}
            <div className="md:col-span-9 space-y-2">
              <div>
                <span className="font-bold text-sm block">Sistema:</span>
                <p className="text-slate-800 text-xs">Felipe Paes da Silva • Desenvolvedor Multiplataforma</p>
                <p className="text-slate-600 text-[11px]">JavaScript, TypeScript, Next.js, Node.js & React Native</p>
              </div>

              <div className="border-t border-slate-400 pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div className="p-2 bg-white border border-slate-400">
                  <span className="font-bold text-slate-900 block flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-red-700" /> [ BASE ]
                  </span>
                  <span className="text-slate-800 text-xs font-medium">Sorocaba, SP</span>
                </div>

                <div className="p-2 bg-white border border-slate-400">
                  <span className="font-bold text-slate-900 block flex items-center gap-1">
                    <Globe className="w-3 h-3 text-blue-700" /> [ IDIOMAS ]
                  </span>
                  <span className="text-slate-800 text-xs font-medium">Inglês</span>
                </div>

                <div className="p-2 bg-white border border-slate-400">
                  <span className="font-bold text-slate-900 block flex items-center gap-1">
                    <GraduationCap className="w-3 h-3 text-amber-700" /> [ FORMAÇÃO ]
                  </span>
                  <span className="text-slate-800 text-xs font-medium">Uniso, Uninter, Fatec & Etec</span>
                </div>
              </div>
            </div>

          </div>

          {/* Synopsis Paragraph */}
          <div className="p-3 bg-white border border-slate-400 leading-relaxed text-justify text-slate-900">
            <p>
              Desenvolvedor focado no ecossistema JavaScript e TypeScript. A minha trajetória é um pouco diferente: formei-me em História e Geografia, o que me deu uma base analítica forte para entender os problemas de negócio a fundo. Atualmente, curso Desenvolvimento de Software Multiplataforma na Fatec e atuo na gestão da infraestrutura de TI da Etec Armando Pannunzio.
            </p>
          </div>

          {/* Dialog Action Buttons */}
          <div className="flex flex-wrap items-center justify-end gap-2 pt-2 border-t border-slate-400">
            <a
              href="#projetos"
              className="px-5 py-1 bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-black border-b-black font-bold text-black hover:bg-[#d0d0d0] active:border-t-black active:border-l-black active:border-r-white active:border-b-white"
            >
              OK (Ver Projetos)
            </a>
            <a
              href="https://github.com/fehhpaes"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1 bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-black border-b-black text-black hover:bg-[#d0d0d0]"
            >
              GitHub.exe
            </a>
            <a
              href="https://www.linkedin.com/in/felipe-paes-da-silva-44b461318"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1 bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-black border-b-black text-black hover:bg-[#d0d0d0]"
            >
              LinkedIn.lnk
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WindowProfile;
