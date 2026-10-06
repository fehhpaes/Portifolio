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

          {/* System Tech Stack */}
          <div className="flex flex-col items-center gap-1 text-center text-slate-400 text-sm">
            <span>NEXT.JS • TYPESCRIPT • TAILWIND CSS • REACT</span>
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
