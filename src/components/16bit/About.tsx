'use client';

import React from 'react';
import { BookOpen, Compass, GraduationCap, Server, Layers } from 'lucide-react';
import { profileData } from '@/data/profile';

export const About: React.FC = () => {
  const { personal, bio } = profileData;

  return (
    <section id="sobre" className="py-20 relative bg-[#09090e] border-b-4 border-amber-600/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-3 py-1 bg-slate-900 border-2 border-amber-500 text-amber-400 font-pixel text-xl uppercase mb-2">
            // ARQUIVOS DO REINO
          </div>
          <h2 className="text-5xl sm:text-6xl font-pixel font-bold text-amber-400 tracking-wider">
            Lore / Backstory
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Main Dialogue Box (NPC / Dialogue Window) */}
          <div className="lg:col-span-7 bg-slate-900 border-4 border-amber-500 p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] relative">
            
            {/* Dialogue Header */}
            <div className="flex items-center justify-between pb-3 border-b-2 border-amber-600/60 font-pixel text-lg text-amber-400 mb-4">
              <span className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-400" /> DIÁLOGO DO PERSONAGEM
              </span>
              <span className="text-emerald-400">[ REGISTRO: ATIVO ]</span>
            </div>

            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
              <p>
                {bio.storyNarrative}
              </p>

              <p>
                Minha trajetória inclui a experiência como Auxiliar Docente em Informática na <strong className="text-slate-100">Etec Armando Pannunzio</strong>, onde o gerenciamento da infraestrutura dos laboratórios me ensinou a traduzir problemas técnicos complexos para uma comunicação clara. Atualmente, dedico-me à graduação na <strong className="text-slate-100">Fatec</strong> e busco novas oportunidades focadas em desenvolvimento de software.
              </p>

              <p>
                {bio.techFocus}
              </p>
            </div>

            {/* Retro Dialogue Prompt Cursor */}
            <div className="mt-4 flex justify-end">
              <span className="font-pixel text-amber-400 text-xl animate-pulse">▼ [PRESS START]</span>
            </div>
          </div>

          {/* Character Perks & Attributes (4 Cards) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            {/* Perk 1: Backend & Cloud */}
            <div className="p-4 bg-slate-900 border-2 border-emerald-500 hover:border-emerald-400 transition-none shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-slate-950 border-2 border-emerald-500 text-emerald-400">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-pixel text-emerald-400 block">[ PERK: ENGENHARIA ]</span>
                  <h4 className="text-xl font-pixel font-bold text-slate-100">Backend & Nuvem</h4>
                </div>
              </div>
              <p className="text-slate-300 text-sm font-sans leading-relaxed">
                APIs RESTful, Docker, bancos relacionais e conteinerização escalável.
              </p>
            </div>

            {/* Perk 2: Analytical Vision */}
            <div className="p-4 bg-slate-900 border-2 border-amber-500 hover:border-amber-400 transition-none shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-slate-950 border-2 border-amber-500 text-amber-400">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-pixel text-amber-400 block">[ PERK: DISCIPLINA ]</span>
                  <h4 className="text-xl font-pixel font-bold text-slate-100">Visão Analítica</h4>
                </div>
              </div>
              <p className="text-slate-300 text-sm font-sans leading-relaxed">
                Interpretação crítica de cenários, resolução metódica e raciocínio geográfico.
              </p>
            </div>

            {/* Perk 3: Teaching & Mentoring */}
            <div className="p-4 bg-slate-900 border-2 border-blue-500 hover:border-blue-400 transition-none shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-slate-950 border-2 border-blue-500 text-blue-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-pixel text-blue-400 block">[ PERK: DIDÁTICA ]</span>
                  <h4 className="text-xl font-pixel font-bold text-slate-100">Didática & Comunicação</h4>
                </div>
              </div>
              <p className="text-slate-300 text-sm font-sans leading-relaxed">
                Experiência prévia em TI e laboratórios: clareza técnica, documentação e tutoria.
              </p>
            </div>

            {/* Perk 4: Multiplatform */}
            <div className="p-4 bg-slate-900 border-2 border-red-500 hover:border-red-400 transition-none shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-slate-950 border-2 border-red-500 text-red-400">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-pixel text-red-400 block">[ PERK: ADAPTABILIDADE ]</span>
                  <h4 className="text-xl font-pixel font-bold text-slate-100">Multiplataforma</h4>
                </div>
              </div>
              <p className="text-slate-300 text-sm font-sans leading-relaxed">
                Integração harmoniosa entre ecossistemas Web, Mobile e utilitários.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
