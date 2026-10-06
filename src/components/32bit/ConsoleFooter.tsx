'use client';

import React from 'react';
import { Gamepad2, ArrowUp } from 'lucide-react';
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

          {/* Controls & Scroll to Top */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              className="px-3 py-1 bg-blue-700 text-white border-2 border-t-white border-l-white border-r-blue-950 border-b-blue-950 hover:bg-blue-600 transition-none cursor-pointer flex items-center gap-1 text-sm"
              aria-label="Voltar ao início"
            >
              <ArrowUp className="w-4 h-4" />
              <span>TOPO</span>
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default ConsoleFooter;
