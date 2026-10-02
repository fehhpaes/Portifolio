'use client';

import React, { useState } from 'react';
import { Shield, Menu, X, Sword } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Status', href: '#inicio' },
    { name: 'Lore', href: '#sobre' },
    { name: 'Skill Tree', href: '#habilidades' },
    { name: 'Quest Log', href: '#projetos' },
    { name: 'Correio do Aventureiro', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-slate-950 border-b-4 border-amber-600 py-3 shadow-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* RPG Brand Character Title */}
          <a
            href="#inicio"
            className="flex items-center gap-2.5 text-amber-400 font-pixel text-2xl sm:text-3xl tracking-wide group"
          >
            <div className="w-8 h-8 rounded-none bg-slate-900 border-2 border-amber-500 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-none">
              <Shield className="w-5 h-5" />
            </div>
            <span>
              FELIPE PAES DA SILVA <span className="text-emerald-400 text-lg sm:text-xl">[ EM BUSCA DE XP ]</span>
            </span>
          </a>

          {/* Desktop Nav Links - RPG Menu Options */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-pixel text-xl uppercase px-3 py-1 text-slate-300 border-2 border-transparent hover:border-amber-500 hover:bg-amber-500 hover:text-black transition-none cursor-pointer"
              >
                &gt; {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Icons & Theme Switchers */}
          <div className="hidden lg:flex items-center gap-1.5 font-pixel text-base">
            <a
              href="/"
              className="px-2 py-0.5 bg-neutral-900 border-2 border-neutral-700 text-white hover:bg-neutral-800 transition-none"
              title="Modern Bento"
            >
              [ MODERN ]
            </a>
            <a
              href="/atlas"
              className="px-2 py-0.5 bg-stone-200 border-2 border-stone-400 text-stone-900 hover:bg-stone-300 transition-none"
              title="Atlas Histórico"
            >
              [ ATLAS ]
            </a>
            <a
              href="/32bit"
              className="px-2 py-0.5 bg-blue-900 border-2 border-blue-500 text-white hover:bg-blue-800 transition-none"
              title="Console 32-Bit"
            >
              [ 32-BIT ]
            </a>
            <a
              href="/desktop"
              className="px-2 py-0.5 bg-[#008080] border-2 border-teal-400 text-white hover:brightness-110 transition-none"
              title="Desktop Windows 95"
            >
              [ WIN95 ]
            </a>
          </div>

          {/* Social Icons */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="https://github.com/fehhpaes"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-none bg-slate-900 border-2 border-amber-600 text-slate-300 hover:bg-amber-500 hover:text-black transition-none"
              aria-label="GitHub de Felipe"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/felipe-paes-da-silva-44b461318"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-none bg-slate-900 border-2 border-amber-600 text-amber-400 hover:bg-amber-500 hover:text-black transition-none"
              aria-label="LinkedIn de Felipe"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-none bg-slate-900 border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black transition-none"
              aria-label="Menu RPG"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-slate-900 border-4 border-amber-600 shadow-2xl space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-slate-200 hover:bg-amber-500 hover:text-black font-pixel text-xl uppercase border border-transparent hover:border-amber-400 transition-none"
              >
                &gt; {link.name}
              </a>
            ))}

            <div className="pt-2 border-t-2 border-amber-600/60">
              <span className="text-amber-400 text-xs font-pixel block mb-1">MUDAR EXPERIÊNCIA:</span>
              <div className="grid grid-cols-2 gap-1.5 font-pixel text-sm">
                <a href="/" className="px-2 py-1 bg-neutral-900 border border-neutral-700 text-white text-center">
                  MODERN BENTO
                </a>
                <a href="/atlas" className="px-2 py-1 bg-stone-200 border border-stone-400 text-stone-900 text-center">
                  ATLAS
                </a>
                <a href="/32bit" className="px-2 py-1 bg-blue-900 border border-blue-500 text-white text-center">
                  32-BIT
                </a>
                <a href="/desktop" className="px-2 py-1 bg-[#008080] border border-teal-400 text-white text-center">
                  WIN95
                </a>
              </div>
            </div>

            <div className="pt-3 border-t-2 border-amber-600/60 flex items-center gap-3">
              <a
                href="https://github.com/fehhpaes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 bg-slate-950 border-2 border-slate-700 text-slate-300 hover:bg-amber-500 hover:text-black font-pixel text-lg"
              >
                <GithubIcon className="w-4 h-4" /> GITHUB
              </a>
              <a
                href="https://www.linkedin.com/in/felipe-paes-da-silva-44b461318"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 bg-slate-950 border-2 border-amber-600 text-amber-400 hover:bg-amber-500 hover:text-black font-pixel text-lg"
              >
                <LinkedinIcon className="w-4 h-4" /> LINKEDIN
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};

export default Navbar;
