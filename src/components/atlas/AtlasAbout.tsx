'use client';

import React from 'react';
import { Compass, GraduationCap, Server, Layers, Feather } from 'lucide-react';
import { profileData } from '@/data/profile';

export const AtlasAbout: React.FC = () => {
  const { bio } = profileData;

  return (
    <section id="sobre" className="py-16 border-b border-stone-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-serif uppercase tracking-widest text-amber-900 font-semibold block mb-1">
            // SEÇÃO I
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 font-normal">
            Prefácio & Fundamentos
          </h2>
          <div className="w-16 h-px bg-amber-900/60 mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Book Preface */}
          <div className="lg:col-span-8 space-y-5 text-stone-700 text-base sm:text-lg leading-relaxed font-sans text-justify">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-amber-900 first-letter:float-left first-letter:mr-3 first-letter:leading-none">
              {bio.storyNarrative}
            </p>

            <p>
              {bio.experience}
            </p>

            <p>
              {bio.techFocus}
            </p>
          </div>

          {/* Pillars Column */}
          <div className="lg:col-span-4 space-y-4 border-l border-stone-300 pl-6">
            <div>
              <span className="text-xs font-serif uppercase tracking-wider text-amber-900 block mb-1">01. Engenharia</span>
              <h4 className="font-serif text-base text-stone-900 font-medium">Backend & Nuvem</h4>
              <p className="text-xs text-stone-600 font-sans mt-0.5 leading-normal">
                APIs RESTful, Docker, modelagem de dados e deploy de microsserviços.
              </p>
            </div>

            <div className="pt-3 border-t border-stone-200">
              <span className="text-xs font-serif uppercase tracking-wider text-amber-900 block mb-1">02. Metodologia</span>
              <h4 className="font-serif text-base text-stone-900 font-medium">Visão Analítica</h4>
              <p className="text-xs text-stone-600 font-sans mt-0.5 leading-normal">
                Interpretação crítica de cenários, resolução metódica e raciocínio sistêmico.
              </p>
            </div>

            <div className="pt-3 border-t border-stone-200">
              <span className="text-xs font-serif uppercase tracking-wider text-amber-900 block mb-1">03. Pedagogia</span>
              <h4 className="font-serif text-base text-stone-900 font-medium">Docência & Mentoria</h4>
              <p className="text-xs text-stone-600 font-sans mt-0.5 leading-normal">
                Comunicação assertiva, didática técnica e síntese de conceitos.
              </p>
            </div>

            <div className="pt-3 border-t border-stone-200">
              <span className="text-xs font-serif uppercase tracking-wider text-amber-900 block mb-1">04. Plataformas</span>
              <h4 className="font-serif text-base text-stone-900 font-medium">Ecossistema Web & Mobile</h4>
              <p className="text-xs text-stone-600 font-sans mt-0.5 leading-normal">
                Desenvolvimento integrado com React, Next.js e React Native.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AtlasAbout;
