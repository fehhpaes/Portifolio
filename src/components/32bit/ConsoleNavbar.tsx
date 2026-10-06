'use client';

import React from 'react';
import { Gamepad2 } from 'lucide-react';
import { profileData } from '@/data/profile';

export const ConsoleNavbar: React.FC = () => {
  const { personal } = profileData;

  return (
    <nav className="sticky top-0 z-40 bg-[#06102b] border-b-4 border-t-white border-l-white border-r-slate-500 border-b-slate-700 py-3 shadow-2xl">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-3">
        
        {/* Console Brand Monogram */}
        <a href="#inicio" className="flex items-center gap-2 text-white font-pixel text-2xl tracking-wide drop-shadow-[2px_2px_0px_#000]">
          <div className="w-8 h-8 bg-blue-700 border-2 border-t-white border-l-white border-r-blue-900 border-b-blue-950 flex items-center justify-center text-white">
            <Gamepad2 className="w-5 h-5" />
          </div>
          <span>
            {personal.name.toUpperCase()} <span className="text-yellow-300 text-lg">[32-BIT SYSTEM]</span>
          </span>
        </a>

        {/* L1 / R1 Navigation Tabs */}
        <div className="flex items-center gap-1.5 text-sm font-pixel">
          <span className="px-2 py-0.5 bg-slate-800 text-slate-300 border border-slate-600 text-xs shadow-inner">
            L1
          </span>
          <a
            href="#sobre"
            className="px-3 py-1 bg-blue-800 text-white border-2 border-t-blue-400 border-l-blue-400 border-r-blue-950 border-b-blue-950 hover:bg-blue-600 transition-none drop-shadow-[1px_1px_0px_#000]"
          >
            STATUS
          </a>
          <a
            href="#habilidades"
            className="px-3 py-1 bg-blue-800 text-white border-2 border-t-blue-400 border-l-blue-400 border-r-blue-950 border-b-blue-950 hover:bg-blue-600 transition-none drop-shadow-[1px_1px_0px_#000]"
          >
            EQUIP
          </a>
          <a
            href="#projetos"
            className="px-3 py-1 bg-blue-800 text-white border-2 border-t-blue-400 border-l-blue-400 border-r-blue-950 border-b-blue-950 hover:bg-blue-600 transition-none drop-shadow-[1px_1px_0px_#000]"
          >
            DISCS
          </a>
          <a
            href="#contato"
            className="px-3 py-1 bg-blue-800 text-white border-2 border-t-blue-400 border-l-blue-400 border-r-blue-950 border-b-blue-950 hover:bg-blue-600 transition-none drop-shadow-[1px_1px_0px_#000]"
          >
            MEMORY
          </a>
          <span className="px-2 py-0.5 bg-slate-800 text-slate-300 border border-slate-600 text-xs shadow-inner">
            R1
          </span>
        </div>

        {/* 32-Bit Console Theme Selector Dropdown */}
        <div className="mt-4 md:mt-0">
          <select
            value="/32bit"
            onChange={(e) => (window.location.href = e.target.value)}
            aria-label="Selecionar Modo de Exibição 32-bit"
            className="bg-[#050f2c] text-white font-pixel border-2 border-t-white border-l-white border-r-blue-900 border-b-blue-900 p-2 cursor-pointer outline-none"
          >
            <option value="/">[ Modern ]</option>
            <option value="/16bit">[ 16-Bit ]</option>
            <option value="/32bit">[ 32-Bit ]</option>
            <option value="/desktop">[ Win95 ]</option>
            <option value="/atlas">[ Atlas ]</option>
          </select>
        </div>

      </div>
    </nav>
  );
};

export default ConsoleNavbar;
