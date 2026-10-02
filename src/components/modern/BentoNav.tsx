'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Layers, ChevronDown } from 'lucide-react';

export default function BentoNav() {
  const [isOpen, setIsOpen] = useState(false);

  const versions = [
    { name: 'Modern Bento', href: '/', badge: 'Principal', current: true },
    { name: '16-bit RPG', href: '/16bit', badge: 'Pixel Art' },
    { name: 'Atlas Histórico', href: '/atlas', badge: 'Editorial' },
    { name: 'Console 32-bit', href: '/32bit', badge: 'CRT / PS1' },
    { name: 'Desktop 95', href: '/desktop', badge: 'Windows 95' },
  ];

  return (
    <header className="w-full max-w-7xl mx-auto mb-6">
      <div className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-neutral-900/80 backdrop-blur-md border border-white/10 shadow-2xl">
        {/* Left: Name & Status */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </div>
          <div>
            <span className="font-semibold tracking-tight text-white text-sm sm:text-base">
              Felipe Paes da Silva
            </span>
            <span className="hidden sm:inline-block text-neutral-400 text-xs ml-2 border-l border-white/10 pl-2">
              Software Developer • Multiplataforma
            </span>
          </div>
        </div>

        {/* Right: Version Switcher */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700/80 border border-white/10 text-xs text-neutral-200 transition-colors"
          >
            <Layers className="w-3.5 h-3.5 text-neutral-400" />
            <span className="font-medium">Temas do Portfólio</span>
            <ChevronDown className={`w-3 h-3 text-neutral-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-neutral-900 border border-white/10 p-2 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-100">
              <div className="text-[10px] uppercase font-semibold text-neutral-500 px-3 py-1 tracking-wider">
                Alternar Experiência
              </div>
              <div className="space-y-1">
                {versions.map((ver) => (
                  <Link
                    key={ver.href}
                    href={ver.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors ${
                      ver.current
                        ? 'bg-white/10 text-white font-medium'
                        : 'text-neutral-300 hover:bg-neutral-800 hover:text-white'
                    }`}
                  >
                    <span>{ver.name}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-neutral-800 text-neutral-400 border border-white/5">
                      {ver.badge}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
