'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Shield, Menu, X, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { profileData } from '@/data/profile';

export const Navbar: React.FC = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personal, contact } = profileData;

  const navLinks = [
    { name: 'Status', href: '#inicio' },
    { name: 'Lore', href: '#sobre' },
    { name: 'Skill Tree', href: '#habilidades' },
    { name: 'Quest Log', href: '#projetos' },
    { name: 'Correio do Aventureiro', href: '#contato' },
  ];

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(e.target.value);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-slate-950 border-b-4 border-amber-600 py-3 shadow-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          
          {/* RPG Brand Character Title */}
          <a
            href="#inicio"
            className="flex items-center gap-2.5 text-amber-400 font-pixel text-2xl sm:text-3xl tracking-wide group shrink-0"
          >
            <div className="w-8 h-8 rounded-none bg-slate-900 border-2 border-amber-500 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-none">
              <Shield className="w-5 h-5" />
            </div>
            <span className="hidden sm:inline">
              {personal.name.toUpperCase()} <span className="text-emerald-400 text-lg sm:text-xl">[ EM BUSCA DE XP ]</span>
            </span>
            <span className="sm:hidden">
              {personal.shortName.toUpperCase()}
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

          {/* Theme Selector Dropdown & Socials */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* 16-Bit Retro Select Dropdown */}
            <div className="flex items-center gap-1.5 font-pixel">
              <span className="hidden lg:inline text-amber-400 text-lg uppercase tracking-wider">&gt; TEMA:</span>
              <select
                value="/16bit"
                onChange={handleThemeChange}
                aria-label="Selecionar Tema do Portfólio"
                className="bg-slate-900 text-amber-400 border-2 border-amber-500 px-2.5 py-1 font-pixel text-lg sm:text-xl uppercase cursor-pointer focus:outline-none focus:bg-amber-500 focus:text-black transition-none"
              >
                <option value="/" className="bg-slate-900 text-amber-400">Modern</option>
                <option value="/16bit" className="bg-slate-900 text-amber-400">16-Bit</option>
                <option value="/32bit" className="bg-slate-900 text-amber-400">32-Bit</option>
                <option value="/desktop" className="bg-slate-900 text-amber-400">Win95</option>
                <option value="/atlas" className="bg-slate-900 text-amber-400">Atlas</option>
              </select>
            </div>

            {/* Social Icons */}
            <div className="hidden sm:flex items-center gap-2">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-none bg-slate-900 border-2 border-amber-600 text-slate-300 hover:bg-amber-500 hover:text-black transition-none"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-none bg-slate-900 border-2 border-amber-600 text-amber-400 hover:bg-amber-500 hover:text-black transition-none"
                aria-label="LinkedIn"
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
              <label htmlFor="mobile-theme-select-16bit" className="text-amber-400 text-sm font-pixel block mb-1">
                &gt; ALTERNAR EXPERIÊNCIA:
              </label>
              <select
                id="mobile-theme-select-16bit"
                value="/16bit"
                onChange={handleThemeChange}
                className="w-full bg-slate-950 text-amber-400 border-2 border-amber-500 px-3 py-2 font-pixel text-xl uppercase cursor-pointer focus:outline-none"
              >
                <option value="/" className="bg-slate-950 text-amber-400">Modern</option>
                <option value="/16bit" className="bg-slate-950 text-amber-400">16-Bit</option>
                <option value="/32bit" className="bg-slate-950 text-amber-400">32-Bit</option>
                <option value="/desktop" className="bg-slate-950 text-amber-400">Win95</option>
                <option value="/atlas" className="bg-slate-950 text-amber-400">Atlas</option>
              </select>
            </div>

            <div className="pt-3 border-t-2 border-amber-600/60 flex items-center gap-3">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 bg-slate-950 border-2 border-slate-700 text-slate-300 hover:bg-amber-500 hover:text-black font-pixel text-lg"
              >
                <GithubIcon className="w-4 h-4" /> GITHUB
              </a>
              <a
                href={contact.linkedin}
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
