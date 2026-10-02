'use client';

import React from 'react';
import Link from 'next/link';
import { Disc, Gamepad2, Sparkles, Compass } from 'lucide-react';

export const ConsoleNavbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-40 bg-[#06102b] border-b-4 border-t-white border-l-white border-r-slate-500 border-b-slate-700 py-3 shadow-2xl">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-3">
        
        {/* Console Brand Monogram */}
        <a href="#inicio" className="flex items-center gap-2 text-white font-pixel text-2xl tracking-wide drop-shadow-[2px_2px_0px_#000]">
          <div className="w-8 h-8 bg-blue-700 border-2 border-t-white border-l-white border-r-blue-900 border-b-blue-950 flex items-center justify-center text-white">
            <Gamepad2 className="w-5 h-5" />
          </div>
          <span>
            FELIPE PAES DA SILVA <span className="text-yellow-300 text-lg">[32-BIT SYSTEM]</span>
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

        {/* Alternative Theme Links */}
        <div className="flex items-center gap-1.5 text-xs font-pixel">
          <Link
            href="/"
            className="px-2 py-1 bg-neutral-900 text-white border border-neutral-700 hover:bg-neutral-800 transition-none"
            title="Versão Modern Bento"
          >
            [ Modern ]
          </Link>
          <Link
            href="/16bit"
            className="px-2 py-1 bg-amber-700 text-white border border-amber-500 hover:bg-amber-600 transition-none"
            title="Versão 16-Bit SNES"
          >
            [ 16-Bit ]
          </Link>
          <Link
            href="/atlas"
            className="px-2 py-1 bg-stone-200 text-stone-900 border border-stone-400 hover:bg-stone-300 transition-none"
            title="Versão Atlas Editorial"
          >
            [ Atlas ]
          </Link>
          <Link
            href="/desktop"
            className="px-2 py-1 bg-[#008080] text-white border border-teal-500 hover:brightness-110 transition-none"
            title="Versão Windows 95 Desktop"
          >
            [ Win95 ]
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default ConsoleNavbar;
