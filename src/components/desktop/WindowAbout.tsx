'use client';

import React from 'react';
import { FileText } from 'lucide-react';
import { profileData } from '@/data/profile';

export const WindowAbout: React.FC = () => {
  const { bio } = profileData;

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
            {bio.storyNarrative}
          </p>

          <p>
            {bio.experience}
          </p>

          <p>
            {bio.techFocus}
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
