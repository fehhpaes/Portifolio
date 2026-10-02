'use client';

import React from 'react';
import { Disc, Save, MapPin, Globe, GraduationCap, Play, HardDrive } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export const ConsoleHero: React.FC = () => {
  return (
    <header id="inicio" className="py-12 border-b-4 border-slate-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* PS1 / 32-Bit Load Game Window Container */}
        <div className="bg-gradient-to-b from-[#0a256b] via-[#081b4f] to-[#040d2b] border-4 border-t-white border-l-white border-r-slate-500 border-b-slate-600 p-6 sm:p-8 shadow-[8px_8px_0px_#000]">
          
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-3 border-b-2 border-blue-400/40 text-yellow-300 font-pixel text-lg sm:text-xl drop-shadow-[2px_2px_0px_#000] mb-6">
            <span className="flex items-center gap-2">
              <Save className="w-5 h-5 text-yellow-300" /> MEMORY CARD MANAGER • LOAD GAME
            </span>
            <span className="text-white text-xs sm:text-sm bg-blue-950 px-2 py-0.5 border border-blue-400">
              FREE BLOCKS: 12 / 15
            </span>
          </div>

          {/* Main Character Header */}
          <div className="text-center mb-6">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-pixel font-bold text-white tracking-wide drop-shadow-[3px_3px_0px_#000] mb-2">
              Felipe Paes da Silva
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-2 font-pixel text-lg sm:text-xl">
              <span className="px-2.5 py-0.5 bg-blue-950 text-cyan-300 border border-cyan-400 drop-shadow-[1px_1px_0px_#000]">
                [ CLASSE: DESENVOLVEDOR MULTIPLATAFORMA ]
              </span>
              <span className="px-2.5 py-0.5 bg-blue-950 text-yellow-300 border border-yellow-400 drop-shadow-[1px_1px_0px_#000]">
                [ ORIGEM: CIÊNCIAS HUMANAS ]
              </span>
            </div>
          </div>

          {/* 3 Memory Card Slots (Beveled Retro 3D Blocks) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-6 font-pixel">
            
            {/* Slot 1: Base */}
            <div className="p-3 bg-gradient-to-b from-[#101b3b] to-[#090e1f] border-2 border-t-red-400 border-l-red-400 border-r-red-950 border-b-red-950 text-center shadow-[3px_3px_0px_#000]">
              <div className="text-xs text-red-400 uppercase flex items-center justify-center gap-1 mb-1">
                <MapPin className="w-3.5 h-3.5" /> [ MEMORY SLOT 1 ]
              </div>
              <div className="text-lg text-white font-bold drop-shadow-[1px_1px_0px_#000]">Sorocaba, SP</div>
              <div className="text-[10px] text-slate-400 mt-1">1 BLOCK • BASE SYSTEM</div>
            </div>

            {/* Slot 2: Idiomas */}
            <div className="p-3 bg-gradient-to-b from-[#101b3b] to-[#090e1f] border-2 border-t-blue-400 border-l-blue-400 border-r-blue-950 border-b-blue-950 text-center shadow-[3px_3px_0px_#000]">
              <div className="text-xs text-cyan-300 uppercase flex items-center justify-center gap-1 mb-1">
                <Globe className="w-3.5 h-3.5" /> [ MEMORY SLOT 2 ]
              </div>
              <div className="text-lg text-white font-bold drop-shadow-[1px_1px_0px_#000]">Inglês</div>
              <div className="text-[10px] text-slate-400 mt-1">1 BLOCK • COMMS MODULE</div>
            </div>

            {/* Slot 3: XP */}
            <div className="p-3 bg-gradient-to-b from-[#101b3b] to-[#090e1f] border-2 border-t-yellow-400 border-l-yellow-400 border-r-yellow-950 border-b-yellow-950 text-center shadow-[3px_3px_0px_#000]">
              <div className="text-xs text-yellow-300 uppercase flex items-center justify-center gap-1 mb-1">
                <GraduationCap className="w-3.5 h-3.5" /> [ MEMORY SLOT 3 ]
              </div>
              <div className="text-lg text-white font-bold drop-shadow-[1px_1px_0px_#000]">Uniso, Uninter, Fatec & Etec</div>
              <div className="text-[10px] text-slate-400 mt-1">1 BLOCK • EXPERIÊNCIA</div>
            </div>

          </div>

          {/* Narrative Text Box */}
          <div className="p-4 bg-[#050b1c]/80 border-2 border-blue-400/40 text-slate-200 text-sm sm:text-base font-sans leading-relaxed text-justify mb-6">
            <p>
              Desenvolvedor focado no ecossistema JavaScript e TypeScript. A minha trajetória é um pouco diferente: formei-me em História e Geografia, o que me deu uma base analítica forte para entender os problemas de negócio a fundo. Atualmente, curso Desenvolvimento de Software Multiplataforma na Fatec e atuo na gestão da infraestrutura de TI da Etec Armando Pannunzio.
            </p>
          </div>

          {/* Beveled 3D Action Controls */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 font-pixel">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white text-xl uppercase border-2 border-t-blue-300 border-l-blue-300 border-r-blue-950 border-b-blue-950 hover:bg-blue-500 active:translate-y-0.5 drop-shadow-[2px_2px_0px_#000] transition-none"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>START GAME (PROJETOS)</span>
            </a>

            <a
              href="https://github.com/fehhpaes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 text-slate-200 text-xl uppercase border-2 border-t-slate-500 border-l-slate-500 border-r-slate-950 border-b-slate-950 hover:bg-slate-700 active:translate-y-0.5 drop-shadow-[2px_2px_0px_#000] transition-none"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GITHUB</span>
            </a>

            <a
              href="https://www.linkedin.com/in/felipe-paes-da-silva-44b461318"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-900 text-yellow-300 text-xl uppercase border-2 border-t-blue-400 border-l-blue-400 border-r-blue-950 border-b-blue-950 hover:bg-blue-800 active:translate-y-0.5 drop-shadow-[2px_2px_0px_#000] transition-none"
            >
              <LinkedinIcon className="w-4 h-4 text-yellow-300" />
              <span>LINKEDIN</span>
            </a>
          </div>

        </div>

      </div>
    </header>
  );
};

export default ConsoleHero;
