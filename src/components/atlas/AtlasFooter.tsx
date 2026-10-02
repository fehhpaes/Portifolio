'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, Compass, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export const AtlasFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-stone-100 border-t border-stone-300 text-stone-600 text-xs font-serif">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Colophon */}
          <div className="flex items-center gap-3">
            <Compass className="w-5 h-5 text-amber-900 shrink-0" />
            <div>
              <p className="font-medium text-stone-900">Felipe Paes da Silva</p>
              <p className="text-stone-500 italic">Atlas Biográfico & Documental de Software</p>
            </div>
          </div>

          {/* Colophon Note */}
          <div className="text-center md:text-right text-stone-500">
            <p>Composto em Next.js, TypeScript & Tailwind CSS</p>
            <p className="text-[11px] mt-0.5">Tipografia: Playfair Display & Nunito</p>
          </div>

          {/* Actions & Theme Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2">
            <Link
              href="/"
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-stone-900 text-stone-100 hover:bg-black transition-colors border border-stone-800"
              title="Modern Bento"
            >
              <span>Modern</span>
            </Link>

            <Link
              href="/16bit"
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-stone-200 text-stone-800 hover:bg-amber-900 hover:text-stone-50 transition-colors border border-stone-300"
              title="RPG 16-Bit"
            >
              <Sparkles className="w-3 h-3" />
              <span>16-Bit</span>
            </Link>

            <Link
              href="/32bit"
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-900 text-stone-100 hover:bg-blue-950 transition-colors border border-blue-800"
              title="Console 32-Bit"
            >
              <span>32-Bit</span>
            </Link>

            <Link
              href="/desktop"
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#008080] text-stone-100 hover:brightness-110 transition-colors border border-teal-800"
              title="Desktop 95"
            >
              <span>Win95</span>
            </Link>

            <button
              onClick={scrollToTop}
              className="p-1.5 bg-stone-200 text-stone-700 hover:bg-stone-300 border border-stone-300 transition-colors cursor-pointer ml-1"
              aria-label="Voltar ao início da página"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default AtlasFooter;
