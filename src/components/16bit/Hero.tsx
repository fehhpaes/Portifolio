'use client';

import React from 'react';
import { Scroll, MapPin, Globe, GraduationCap, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { profileData } from '@/data/profile';

export const Hero: React.FC = () => {
  const { personal, bio, contact } = profileData;

  return (
    <section
      id="inicio"
      className="relative min-h-[85vh] flex items-center justify-center pt-20 pb-16 border-b-4 border-amber-600/80 bg-[#0c0c14]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Character Status Window (Retro RPG Dialog Box) */}
          <div className="bg-slate-900 border-4 border-amber-500 p-6 sm:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] text-center relative">
            
            {/* Window Header Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-amber-600 text-black font-pixel text-lg sm:text-xl font-bold uppercase tracking-wider mb-6">
              <Award className="w-5 h-5" />
              <span>PAINEL DE STATUS DO PERSONAGEM</span>
            </div>

            {/* Character Main Name & Avatar */}
            <div className="flex flex-col md:flex-row items-center justify-center mb-6 text-center md:text-left">
              <img
                src="/profile.jpeg"
                alt="Felipe Paes da Silva"
                className="w-20 h-20 md:w-24 md:h-24 object-cover border-4 border-double border-white rounded-none mb-4 md:mb-0 md:mr-6 shrink-0 shadow-[4px_4px_0px_#000]"
              />
              <div>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-pixel font-bold tracking-wider text-amber-400 mb-2 drop-shadow-[3px_3px_0px_#000]">
                  {personal.name}
                </h1>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 font-pixel text-xl sm:text-2xl">
                  <span className="px-3 py-1 bg-slate-950 border-2 border-emerald-500 text-emerald-400">
                    [ Classe: {personal.shortRole} ]
                  </span>
                  <span className="px-3 py-1 bg-slate-950 border-2 border-amber-500 text-amber-300">
                    [ Background: História & Geografia ]
                  </span>
                </div>
              </div>
            </div>

            {/* Real Character Attributes: Base, Idiomas & XP */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mx-auto mb-8 font-pixel">
              {/* Caixa 1: Base */}
              <div className="flex flex-col items-center justify-center p-4 border-2 border-red-600 bg-slate-950 text-center shadow-[4px_4px_0px_#000]">
                <span className="text-red-500 text-base sm:text-lg mb-1 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" /> » [ BASE ] «
                </span>
                <span className="text-slate-200 text-xl sm:text-2xl font-bold">{personal.location}</span>
              </div>

              {/* Caixa 2: Idiomas */}
              <div className="flex flex-col items-center justify-center p-4 border-2 border-blue-600 bg-slate-950 text-center shadow-[4px_4px_0px_#000]">
                <span className="text-blue-500 text-base sm:text-lg mb-1 flex items-center gap-1.5">
                  <Globe className="w-4 h-4" /> » [ IDIOMAS ] «
                </span>
                <span className="text-slate-200 text-xl sm:text-2xl font-bold">{personal.languages}</span>
              </div>

              {/* Caixa 3: XP */}
              <div className="flex flex-col items-center justify-center p-4 border-2 border-amber-600 bg-slate-950 text-center shadow-[4px_4px_0px_#000]">
                <span className="text-amber-500 text-base sm:text-lg mb-1 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" /> » [ XP ] «
                </span>
                <span className="text-slate-200 text-xl sm:text-2xl font-bold">{personal.education}</span>
              </div>
            </div>

            {/* Direct & Authentic Narrative */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8 font-sans">
              {bio.fullSynopsis}
            </p>

            {/* Action Buttons (Menu Seletores) */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 mb-8">
              {/* Action: Quest Log */}
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-700 text-white font-pixel text-2xl uppercase border-2 border-red-500 hover:bg-red-600 hover:text-amber-200 transition-none cursor-pointer active:translate-y-0.5"
              >
                <Scroll className="w-5 h-5" />
                <span>ABRIR QUEST LOG</span>
              </a>

              {/* Action: GitHub */}
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-slate-950 text-slate-200 font-pixel text-2xl uppercase border-2 border-slate-700 hover:bg-slate-800 hover:border-slate-500 transition-none"
              >
                <GithubIcon className="w-5 h-5" />
                <span>GITHUB</span>
              </a>

              {/* Action: LinkedIn */}
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-slate-950 text-amber-400 font-pixel text-2xl uppercase border-2 border-amber-600 hover:bg-amber-500 hover:text-black transition-none"
              >
                <LinkedinIcon className="w-5 h-5" />
                <span>LINKEDIN</span>
              </a>
            </div>

            {/* Equipped Runes / Main Weapons */}
            <div className="pt-6 border-t-2 border-slate-800 flex flex-wrap items-center justify-center gap-2 text-sm font-pixel text-slate-300">
              <span className="px-3 py-1 bg-slate-950 border-2 border-amber-600/70 text-amber-300">
                [ ITEM: NEXT.JS & TYPESCRIPT ]
              </span>
              <span className="px-3 py-1 bg-slate-950 border-2 border-emerald-600/70 text-emerald-300">
                [ ITEM: NODE.JS & APIS ]
              </span>
              <span className="px-3 py-1 bg-slate-950 border-2 border-blue-600/70 text-blue-300">
                [ ITEM: REACT NATIVE & EXPO ]
              </span>
              <span className="px-3 py-1 bg-slate-950 border-2 border-red-600/70 text-red-300">
                [ ITEM: DOCKER & NUVEM ]
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
