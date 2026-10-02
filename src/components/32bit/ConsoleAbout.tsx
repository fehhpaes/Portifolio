'use client';

import React from 'react';
import { Terminal, Shield, Cpu, Layers, Server, Compass, GraduationCap } from 'lucide-react';

export const ConsoleAbout: React.FC = () => {
  return (
    <section id="sobre" className="py-12 border-b-4 border-slate-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-6 flex items-center justify-between pb-2 border-b-2 border-blue-400/40 text-yellow-300 font-pixel text-xl drop-shadow-[2px_2px_0px_#000]">
          <span className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-yellow-300" /> BIO SYSTEM • DIALOGUE PROMPT
          </span>
          <span className="text-cyan-300 text-sm">[ DISC 1 // ARCHIVES ]</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main JRPG 32-bit Dialogue Window */}
          <div className="lg:col-span-8 bg-gradient-to-b from-[#0a256b] via-[#081b4f] to-[#040d2b] border-4 border-t-white border-l-white border-r-slate-500 border-b-slate-600 p-6 shadow-[6px_6px_0px_#000]">
            
            <div className="space-y-4 text-white text-sm sm:text-base font-sans leading-relaxed text-justify drop-shadow-[1px_1px_0px_#000]">
              <p>
                Sou o <strong className="text-yellow-300 font-pixel text-lg">Felipe</strong>, um desenvolvedor que gosta de entender o &apos;porquê&apos; antes de construir o &apos;como&apos;. Minha jornada na tecnologia tem um background um pouco diferente: vim de uma base sólida em Ciências Humanas, com licenciaturas em <strong className="text-cyan-200">História (Uniso)</strong> e <strong className="text-cyan-200">Geografia (Uninter)</strong>. Essa trajetória me deu uma capacidade investigativa forte para entender o contexto real e as regras de negócio antes de escrever qualquer linha de código.
              </p>

              <p>
                Atualmente, curso Desenvolvimento de Software Multiplataforma na <strong className="text-cyan-200">Fatec</strong> e atuo como Auxiliar Docente em Informática na <strong className="text-cyan-200">Etec Armando Pannunzio</strong>. O dia a dia gerenciando a infraestrutura dos laboratórios me ensina constantemente a traduzir problemas técnicos complexos para uma comunicação clara com os alunos e professores.
              </p>

              <p>
                No ecossistema de desenvolvimento, meu foco está em <strong className="text-yellow-300">JavaScript</strong> e <strong className="text-yellow-300">TypeScript</strong>, criando desde interfaces até APIs e automações. Utilizo inteligência artificial como uma ferramenta diária de &apos;pair-programming&apos; para acelerar a codificação, o que me permite focar no que realmente importa: a arquitetura do software e a resolução do problema. Fora do código, mantenho o foco no aprimoramento do meu Inglês e, para descontrair, minha principal missão secundária é tirar novas músicas no violão e no cavaquinho.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-blue-400/30 flex justify-end font-pixel text-yellow-300 text-lg">
              <span className="animate-pulse">▶ PRESS [O] TO CONTINUE</span>
            </div>
          </div>

          {/* Side Attributes / Perks in 32-bit Beveled Boxes */}
          <div className="lg:col-span-4 space-y-3 font-pixel">
            
            <div className="p-3 bg-gradient-to-b from-[#101b3b] to-[#090e1f] border-2 border-t-cyan-300 border-l-cyan-300 border-r-cyan-950 border-b-cyan-950 shadow-[3px_3px_0px_#000]">
              <div className="flex items-center gap-2 text-cyan-300 mb-1">
                <Server className="w-4 h-4" />
                <h4 className="text-lg text-white font-bold drop-shadow-[1px_1px_0px_#000]">Backend & Nuvem</h4>
              </div>
              <p className="text-xs text-slate-300 font-sans">
                APIs RESTful, Docker, modelagem de dados e deploy de microsserviços.
              </p>
            </div>

            <div className="p-3 bg-gradient-to-b from-[#101b3b] to-[#090e1f] border-2 border-t-yellow-300 border-l-yellow-300 border-r-yellow-950 border-b-yellow-950 shadow-[3px_3px_0px_#000]">
              <div className="flex items-center gap-2 text-yellow-300 mb-1">
                <Compass className="w-4 h-4" />
                <h4 className="text-lg text-white font-bold drop-shadow-[1px_1px_0px_#000]">Visão Analítica</h4>
              </div>
              <p className="text-xs text-slate-300 font-sans">
                Interpretação crítica de cenários, resolução metódica e raciocínio sistêmico.
              </p>
            </div>

            <div className="p-3 bg-gradient-to-b from-[#101b3b] to-[#090e1f] border-2 border-t-blue-300 border-l-blue-300 border-r-blue-950 border-b-blue-950 shadow-[3px_3px_0px_#000]">
              <div className="flex items-center gap-2 text-blue-300 mb-1">
                <GraduationCap className="w-4 h-4" />
                <h4 className="text-lg text-white font-bold drop-shadow-[1px_1px_0px_#000]">Docência & Mentoria</h4>
              </div>
              <p className="text-xs text-slate-300 font-sans">
                Comunicação assertiva, didática técnica e síntese de conceitos.
              </p>
            </div>

            <div className="p-3 bg-gradient-to-b from-[#101b3b] to-[#090e1f] border-2 border-t-red-300 border-l-red-300 border-r-red-950 border-b-red-950 shadow-[3px_3px_0px_#000]">
              <div className="flex items-center gap-2 text-red-300 mb-1">
                <Layers className="w-4 h-4" />
                <h4 className="text-lg text-white font-bold drop-shadow-[1px_1px_0px_#000]">Multiplataforma</h4>
              </div>
              <p className="text-xs text-slate-300 font-sans">
                Desenvolvimento integrado com React, Next.js e React Native.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ConsoleAbout;
