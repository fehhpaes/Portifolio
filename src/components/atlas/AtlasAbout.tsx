'use client';

import React from 'react';
import { Compass, GraduationCap, Server, Layers, Feather } from 'lucide-react';

export const AtlasAbout: React.FC = () => {
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
              Sou o Felipe, um desenvolvedor que gosta de entender o &apos;porquê&apos; antes de construir o &apos;como&apos;. Minha jornada na tecnologia tem um background um pouco diferente: vim de uma base sólida em Ciências Humanas, com licenciaturas em <strong className="font-serif text-stone-900 font-medium">História (Uniso)</strong> e <strong className="font-serif text-stone-900 font-medium">Geografia (Uninter)</strong>. Essa trajetória me deu uma capacidade investigativa forte para entender o contexto real e as regras de negócio antes de escrever qualquer linha de código.
            </p>

            <p>
              Atualmente, curso Desenvolvimento de Software Multiplataforma na <strong className="font-serif text-stone-900 font-medium">Fatec</strong> e atuo como Auxiliar Docente em Informática na <strong className="font-serif text-stone-900 font-medium">Etec Armando Pannunzio</strong>. O dia a dia gerenciando a infraestrutura dos laboratórios me ensina constantemente a traduzir problemas técnicos complexos para uma comunicação clara com os alunos e professores.
            </p>

            <p>
              No ecossistema de desenvolvimento, meu foco está em <strong className="text-amber-900 font-serif">JavaScript</strong> e <strong className="text-amber-900 font-serif">TypeScript</strong>, criando desde interfaces até APIs e automações. Utilizo inteligência artificial como uma ferramenta diária de &apos;pair-programming&apos; para acelerar a codificação, o que me permite focar no que realmente importa: a arquitetura do software e a resolução do problema. Fora do código, mantenho o foco no aprimoramento do meu Inglês e, para descontrair, minha principal missão secundária é tirar novas músicas no violão e no cavaquinho.
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
