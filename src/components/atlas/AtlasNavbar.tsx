'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Compass } from 'lucide-react';
import { profileData } from '@/data/profile';

export const AtlasNavbar: React.FC = () => {
  const router = useRouter();
  const { personal } = profileData;

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(e.target.value);
  };

  return (
    <nav className="sticky top-0 z-40 bg-[#F4F1EA]/95 backdrop-blur-sm border-b border-stone-300 py-3 shadow-xs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-3">
        
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 text-stone-900 font-serif text-lg tracking-tight">
          <Compass className="w-4 h-4 text-amber-900" />
          <span className="font-medium">{personal.name}</span>
        </a>

        {/* Section Links & Mode Switch */}
        <div className="flex items-center gap-3 sm:gap-4 text-xs font-serif">
          <div className="hidden sm:flex items-center gap-3 sm:gap-4">
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
          </div>

          {/* Atlas Editorial Theme Selector */}
          <div className="flex items-center gap-1.5 ml-1">
            <label htmlFor="atlas-theme-select" className="text-stone-600 font-serif text-[11px] hidden sm:inline">
              Edição:
            </label>
            <select
              id="atlas-theme-select"
              value="/atlas"
              onChange={handleThemeChange}
              aria-label="Selecionar Edição do Portfólio"
              className="bg-[#EFECE6] text-stone-900 font-serif text-xs px-2.5 py-1 border border-stone-400 rounded-none cursor-pointer focus:outline-none focus:border-amber-900 focus:bg-[#E7E2D6] transition-colors"
            >
              <option value="/" className="bg-[#F4F1EA] text-stone-900">Modern</option>
              <option value="/16bit" className="bg-[#F4F1EA] text-stone-900">16-Bit</option>
              <option value="/32bit" className="bg-[#F4F1EA] text-stone-900">32-Bit</option>
              <option value="/desktop" className="bg-[#F4F1EA] text-stone-900">Win95</option>
              <option value="/atlas" className="bg-[#F4F1EA] text-stone-900">Atlas</option>
            </select>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default AtlasNavbar;
