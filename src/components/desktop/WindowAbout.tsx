'use client';

import React from 'react';
import { FileText } from 'lucide-react';

export const WindowAbout: React.FC = () => {
  return (
    <section id="sobre" className="my-6">
      {/* Notepad Window Container */}
      <div className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-black border-b-black p-1 shadow-[3px_3px_0px_#000]">
        
        {/* Title Bar */}
        <div className="bg-[#000080] text-white px-2 py-1 flex items-center justify-between font-sans text-xs font-bold select-none">
          <div className="flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-white" />
            <span>Bloco de Notas - BIO_FELIPE.TXT</span>
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

        {/* Notepad Classic Menu Bar */}
        <div className="flex items-center gap-3 px-2 py-0.5 bg-[#c0c0c0] text-xs font-sans text-black border-b border-b-slate-400 select-none">
          <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>A</u>rquivo</span>
          <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>E</u>ditar</span>
          <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>F</u>ormatar</span>
          <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer">E<u>x</u>ibir</span>
          <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer">A<u>j</u>uda</span>
        </div>

        {/* Notepad White Document Body */}
        <div className="p-5 bg-white border-2 border-t-black border-l-black border-r-white border-b-white text-xs sm:text-sm font-sans text-black leading-relaxed space-y-4 text-justify min-h-[220px]">
          <p>
            Sou o <strong>Felipe</strong>, um desenvolvedor que gosta de entender o &apos;porquê&apos; antes de construir o &apos;como&apos;. Minha jornada na tecnologia tem um background um pouco diferente: vim de uma base sólida em Ciências Humanas, com licenciaturas em <strong>História (Uniso)</strong> e <strong>Geografia (Uninter)</strong>. Essa trajetória me deu uma capacidade investigativa forte para entender o contexto real e as regras de negócio antes de escrever qualquer linha de código.
          </p>

          <p>
            Atualmente, curso Desenvolvimento de Software Multiplataforma na <strong>Fatec</strong> e atuo como Auxiliar Docente em Informática na <strong>Etec Armando Pannunzio</strong>. O dia a dia gerenciando a infraestrutura dos laboratórios me ensina constantemente a traduzir problemas técnicos complexos para uma comunicação clara com os alunos e professores.
          </p>

          <p>
            No ecossistema de desenvolvimento, meu foco está em <strong>JavaScript</strong> e <strong>TypeScript</strong>, criando desde interfaces até APIs e automações. Utilizo inteligência artificial como uma ferramenta diária de &apos;pair-programming&apos; para acelerar a codificação, o que me permite focar no que realmente importa: a arquitetura do software e a resolução do problema. Fora do código, mantenho o foco no aprimoramento do meu Inglês e, para descontrair, minha principal missão secundária é tirar novas músicas no violão e no cavaquinho.
          </p>
        </div>

        {/* Notepad Status Bar */}
        <div className="flex items-center justify-between px-2 py-0.5 bg-[#c0c0c0] text-[11px] font-sans text-slate-700 border-t border-t-slate-400 select-none">
          <span>Pronto para edição</span>
          <div className="flex items-center gap-4">
            <span>Lin 1, Col 1</span>
            <span>100%</span>
            <span>Windows (CRLF)</span>
            <span>UTF-8</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WindowAbout;
