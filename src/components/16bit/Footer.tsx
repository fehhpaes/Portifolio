'use client';

import React from 'react';
import { Shield, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { profileData } from '@/data/profile';

export const Footer: React.FC = () => {
  const { personal, contact } = profileData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-slate-950 border-t-4 border-amber-600 text-slate-400 font-pixel text-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Brand Info */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-slate-900 border-2 border-amber-500 flex items-center justify-center text-amber-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <p className="text-amber-400 text-xl font-bold">{personal.name.toUpperCase()} // {personal.shortRole.toUpperCase()}</p>
              <p className="text-xs text-slate-400">[ RPG QUEST LOG ENGINE - 16-BIT EDITION ]</p>
            </div>
          </div>

          {/* System Tech Stack & Theme Switchers */}
          <div className="flex flex-col items-center gap-2 text-center text-slate-400 text-sm">
            <span>NEXT.JS • TYPESCRIPT • TAILWIND CSS • REACT</span>
            <div className="flex items-center gap-2 text-xs font-pixel">
              <a
                href="/"
                className="px-2 py-0.5 bg-neutral-900 border border-neutral-700 text-white hover:bg-neutral-800"
              >
                [ MODERN BENTO ]
              </a>
              <a
                href="/atlas"
                className="px-2 py-0.5 bg-stone-200 border border-stone-400 text-stone-900 hover:bg-stone-300"
              >
                [ ATLAS ]
              </a>
              <a
                href="/32bit"
                className="px-2 py-0.5 bg-blue-900 border border-blue-500 text-white hover:bg-blue-800"
              >
                [ 32-BIT ]
              </a>
              <a
                href="/desktop"
                className="px-2 py-0.5 bg-[#c0c0c0] border border-black text-black hover:bg-[#d0d0d0]"
              >
                [ WIN 95 ]
              </a>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-2.5">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-900 border-2 border-slate-700 hover:bg-slate-800 text-slate-300 transition-none"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-900 border-2 border-amber-600 text-amber-400 hover:bg-amber-500 hover:text-black transition-none"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-900 border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black transition-none cursor-pointer"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
