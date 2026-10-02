'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, BookMarked, Sparkles } from 'lucide-react';

export const AtlasNavbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-40 bg-[#F4F1EA]/90 backdrop-blur-sm border-b border-stone-300 py-3">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 text-stone-900 font-serif text-lg tracking-tight">
          <Compass className="w-4 h-4 text-amber-900" />
          <span className="font-medium">Felipe Paes da Silva</span>
        </a>

        {/* Section Links & Mode Switch */}
        <div className="flex items-center gap-4 text-xs font-serif">
          <a href="#sobre" className="text-stone-700 hover:text-amber-900 transition-colors">
            Prefácio
          </a>
          <a href="#habilidades" className="text-stone-700 hover:text-amber-900 transition-colors">
            Índice
          </a>
          <a href="#projetos" className="text-stone-700 hover:text-amber-900 transition-colors">
            Capítulos
          </a>
          <a href="#contato" className="text-stone-700 hover:text-amber-900 transition-colors">
            Correspondência
          </a>

          {/* Theme Switchers */}
          <div className="flex items-center gap-1.5 ml-2">
            <Link
              href="/"
              className="inline-flex items-center px-2 py-0.5 bg-stone-900 text-stone-100 hover:bg-black transition-colors border border-stone-800"
              title="Ver versão Moderna (Bento Box)"
            >
              <span>Modern</span>
            </Link>
            <Link
              href="/16bit"
              className="inline-flex items-center gap-1 px-2 py-0.5 bg-stone-200 text-stone-800 hover:bg-amber-900 hover:text-stone-50 transition-colors border border-stone-300"
              title="Ver versão RPG 16-Bit"
            >
              <span>16-Bit</span>
            </Link>
            <Link
              href="/32bit"
              className="inline-flex items-center px-2 py-0.5 bg-blue-900 text-stone-100 hover:bg-blue-950 transition-colors border border-blue-800"
              title="Ver versão Console 32-Bit"
            >
              <span>32-Bit</span>
            </Link>
            <Link
              href="/desktop"
              className="inline-flex items-center px-2 py-0.5 bg-[#008080] text-stone-100 hover:brightness-110 transition-colors border border-teal-800"
              title="Ver versão Windows 95 Desktop"
            >
              <span>Win95</span>
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default AtlasNavbar;
