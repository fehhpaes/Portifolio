'use client';

import React from 'react';
import Link from 'next/link';
import { Gamepad2, ArrowUp, Sparkles, BookOpen } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { profileData } from '@/data/profile';

export const ConsoleFooter: React.FC = () => {
  const { personal } = profileData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-[#04091a] border-t-4 border-slate-700 text-slate-300 font-pixel text-base">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* BIOS Info */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-blue-800 border-2 border-t-white border-l-white border-r-blue-950 border-b-blue-950 flex items-center justify-center text-white">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white text-lg font-bold drop-shadow-[1px_1px_0px_#000]">
                {personal.name.toUpperCase()} // 32-BIT ENGINE
              </p>
              <p className="text-xs text-yellow-300">SONY PS1 & N64 RETRO HARDWARE SIMULATION</p>
            </div>
          </div>

          {/* Alternative Themes */}
          <div className="flex items-center gap-2 text-xs">
            <Link
              href="/"
              className="inline-flex items-center gap-1 px-3 py-1 bg-neutral-900 text-white border border-neutral-700 hover:bg-neutral-800 transition-none"
            >
              <span>Ver no estilo Modern</span>
            </Link>

            <Link
              href="/16bit"
              className="inline-flex items-center gap-1 px-3 py-1 bg-amber-700 text-white border border-amber-500 hover:bg-amber-600 transition-none"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ver no estilo 16-Bit</span>
            </Link>

            <Link
              href="/atlas"
              className="inline-flex items-center gap-1 px-3 py-1 bg-stone-200 text-stone-900 border border-stone-400 hover:bg-stone-300 transition-none"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Ver no estilo Atlas</span>
            </Link>

            <Link
              href="/desktop"
              className="inline-flex items-center gap-1 px-3 py-1 bg-[#008080] text-white border border-teal-500 hover:brightness-110 transition-none"
            >
              <span>Ver no estilo Win95</span>
            </Link>

            <button
              onClick={scrollToTop}
              className="p-1.5 bg-blue-700 text-white border-2 border-t-white border-l-white border-r-blue-950 border-b-blue-950 hover:bg-blue-600 transition-none cursor-pointer"
              aria-label="Voltar ao início"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default ConsoleFooter;
