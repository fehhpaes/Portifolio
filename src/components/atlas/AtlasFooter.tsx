'use client';

import React from 'react';
import { ArrowUp, Compass } from 'lucide-react';
import { profileData } from '@/data/profile';

export const AtlasFooter: React.FC = () => {
  const { personal } = profileData;

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
              <p className="font-medium text-stone-900">{personal.name}</p>
              <p className="text-stone-500 italic">Atlas Biográfico & Documental de Software</p>
            </div>
          </div>

          {/* Colophon Note */}
          <div className="text-center md:text-right text-stone-500">
            <p>Composto em Next.js, TypeScript & Tailwind CSS</p>
            <p className="text-[11px] mt-0.5">Tipografia: Playfair Display & Nunito</p>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-center md:justify-end">
            <button
              onClick={scrollToTop}
              className="p-1.5 bg-stone-200 text-stone-700 hover:bg-stone-300 border border-stone-300 transition-colors cursor-pointer"
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
