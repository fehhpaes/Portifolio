'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Volume2, ShieldCheck } from 'lucide-react';

export const Taskbar: React.FC = () => {
  const [time, setTime] = useState('12:00 PM');
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#c0c0c0] border-t-2 border-t-white border-b-2 border-b-black py-1 px-2 flex items-center justify-between gap-2 select-none shadow-[0_-2px_0_#808080]">
      
      {/* Left side: Start Button & Running Tasks */}
      <div className="flex items-center gap-2">
        
        {/* Iniciar Button (Win95 3D Bevel) */}
        <div className="relative">
          <button
            onClick={() => setStartMenuOpen(!startMenuOpen)}
            className={`flex items-center gap-1.5 px-3 py-1 text-sm font-sans font-black border-2 transition-none cursor-pointer ${
              startMenuOpen
                ? 'bg-[#a0a0a0] border-t-black border-l-black border-r-white border-b-white'
                : 'bg-[#c0c0c0] border-t-white border-l-white border-r-black border-b-black active:border-t-black active:border-l-black active:border-r-white active:border-b-white'
            }`}
          >
            {/* Windows 95 4-Color Flag Icon */}
            <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5 mr-0.5">
              <span className="bg-red-600 block"></span>
              <span className="bg-green-600 block"></span>
              <span className="bg-blue-600 block"></span>
              <span className="bg-yellow-500 block"></span>
            </div>
            <span className="text-black font-bold">Iniciar</span>
          </button>

          {/* Start Menu Dropdown */}
          {startMenuOpen && (
            <div className="absolute bottom-10 left-0 w-64 bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-black border-b-black shadow-[4px_4px_0px_#000] z-50">
              <div className="flex">
                {/* Left Blue Vertical Banner */}
                <div className="w-8 bg-gradient-to-t from-[#000080] to-[#1084d0] flex items-end justify-center pb-3">
                  <span className="text-white font-sans font-black text-xs tracking-widest -rotate-90 origin-bottom whitespace-nowrap">
                    FELIPE 95
                  </span>
                </div>

                {/* Menu Items */}
                <div className="flex-1 py-1 text-xs text-black font-sans">
                  <a
                    href="#perfil"
                    onClick={() => setStartMenuOpen(false)}
                    className="block px-3 py-2 hover:bg-[#000080] hover:text-white"
                  >
                    💻 Propriedades do Sistema
                  </a>
                  <a
                    href="#sobre"
                    onClick={() => setStartMenuOpen(false)}
                    className="block px-3 py-2 hover:bg-[#000080] hover:text-white"
                  >
                    📝 Bloco de Notas (Bio)
                  </a>
                  <a
                    href="#habilidades"
                    onClick={() => setStartMenuOpen(false)}
                    className="block px-3 py-2 hover:bg-[#000080] hover:text-white"
                  >
                    ⚙️ Painel de Controle
                  </a>
                  <a
                    href="#projetos"
                    onClick={() => setStartMenuOpen(false)}
                    className="block px-3 py-2 hover:bg-[#000080] hover:text-white"
                  >
                    📁 Explorador de Projetos
                  </a>
                  <a
                    href="#contato"
                    onClick={() => setStartMenuOpen(false)}
                    className="block px-3 py-2 hover:bg-[#000080] hover:text-white"
                  >
                    ✉️ Enviar Correio
                  </a>

                  <div className="border-t border-t-[#808080] border-b border-b-white my-1" />

                  <Link
                    href="/"
                    className="block px-3 py-1.5 hover:bg-[#000080] hover:text-white text-stone-700"
                  >
                    ✨ Alternar para Modern (Bento)
                  </Link>
                  <Link
                    href="/16bit"
                    className="block px-3 py-1.5 hover:bg-[#000080] hover:text-white text-stone-700"
                  >
                    🎮 Alternar para 16-Bit SNES
                  </Link>
                  <Link
                    href="/atlas"
                    className="block px-3 py-1.5 hover:bg-[#000080] hover:text-white text-stone-700"
                  >
                    📜 Alternar para Atlas Histórico
                  </Link>
                  <Link
                    href="/32bit"
                    className="block px-3 py-1.5 hover:bg-[#000080] hover:text-white text-stone-700"
                  >
                    🕹️ Alternar para 32-Bit PS1
                  </Link>
                  <Link
                    href="/desktop"
                    className="block px-3 py-1.5 bg-[#000080] text-white font-bold"
                  >
                    🪟 Windows 95 Desktop [Atual]
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Task Windows Badges */}
        <div className="hidden sm:flex items-center gap-1.5 text-xs text-black">
          <a
            href="#perfil"
            className="px-2.5 py-1 bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-black border-b-black font-sans font-bold flex items-center gap-1 hover:bg-[#d0d0d0]"
          >
            <span>💻</span> <span>Sistema</span>
          </a>
          <a
            href="#sobre"
            className="px-2.5 py-1 bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-black border-b-black font-sans font-bold flex items-center gap-1 hover:bg-[#d0d0d0]"
          >
            <span>📝</span> <span>Bio.txt</span>
          </a>
          <a
            href="#projetos"
            className="px-2.5 py-1 bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-black border-b-black font-sans font-bold flex items-center gap-1 hover:bg-[#d0d0d0]"
          >
            <span>📁</span> <span>Projetos</span>
          </a>
        </div>

      </div>

      {/* Right side: Win95 Dropdown & System Tray & Clock */}
      <div className="flex items-center gap-2">
        
        {/* Win95 Theme Selector Dropdown */}
        <select
          value="/desktop"
          onChange={(e) => (window.location.href = e.target.value)}
          aria-label="Selecionar Tema do Sistema"
          className="bg-gray-200 text-black font-sans border-2 border-t-white border-l-white border-b-gray-800 border-r-gray-800 px-2 py-1 h-full cursor-pointer outline-none mx-2 font-bold"
        >
          <option value="/">Modern</option>
          <option value="/16bit">16-Bit</option>
          <option value="/32bit">32-Bit</option>
          <option value="/desktop">Win95</option>
          <option value="/atlas">Atlas</option>
        </select>

        {/* System Tray (Sunken Border) */}
        <div className="flex items-center gap-2 px-2.5 py-1 bg-[#c0c0c0] border-2 border-t-black border-l-black border-r-white border-b-white text-xs text-black font-mono">
          <Volume2 className="w-3.5 h-3.5 text-slate-700" />
          <ShieldCheck className="w-3.5 h-3.5 text-blue-900" />
          <span className="font-bold">{time}</span>
        </div>

      </div>

    </div>
  );
};

export default Taskbar;
