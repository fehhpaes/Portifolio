'use client';

import React from 'react';
import { MapPin, Globe, GraduationCap, BookOpen } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { profileData } from '@/data/profile';

export const AtlasHero: React.FC = () => {
  const { personal, bio, contact } = profileData;

  return (
    <header className="relative pt-12 pb-16 border-b border-stone-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Document Header Marker */}
        <div className="flex items-center justify-between text-xs text-stone-500 font-serif tracking-widest uppercase mb-8 pb-3 border-b border-stone-200">
          <span>ATLAS BIOGRÁFICO & DOCUMENTAL</span>
          <span>VOLUME I • MMXXVI</span>
        </div>

        {/* Thesis Author Title */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-10 text-center md:text-left">
          <img
            src="/profile.jpeg"
            alt="Felipe Paes da Silva"
            className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full grayscale sepia-[.4] border-4 border-double border-[#8b7355] shadow-lg mb-6 md:mb-0 md:mr-8 shrink-0"
          />
          <div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-stone-900 font-normal tracking-tight mb-3">
              {personal.name}
            </h1>
            <p className="font-serif italic text-xl sm:text-2xl text-amber-900">
              {personal.shortRole}
            </p>
          </div>
        </div>

        {/* Metadata Grid (Historical Thesis Format) */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-300 border-y border-stone-300 py-4 my-8 bg-stone-100/60">
          <div className="flex items-center gap-3 p-3 sm:px-4">
            <MapPin className="w-4 h-4 text-amber-900 shrink-0" />
            <div>
              <span className="block text-[11px] font-serif uppercase tracking-wider text-stone-500">Localização</span>
              <span className="text-sm font-sans font-medium text-stone-800">{personal.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 sm:px-4">
            <Globe className="w-4 h-4 text-amber-900 shrink-0" />
            <div>
              <span className="block text-[11px] font-serif uppercase tracking-wider text-stone-500">Idiomas</span>
              <span className="text-sm font-sans font-medium text-stone-800">{personal.languages}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 sm:px-4">
            <GraduationCap className="w-4 h-4 text-amber-900 shrink-0" />
            <div>
              <span className="block text-[11px] font-serif uppercase tracking-wider text-stone-500">Instituições (XP)</span>
              <span className="text-sm font-sans font-medium text-stone-800">{personal.education}</span>
            </div>
          </div>
        </div>

        {/* Synopsis Narrative */}
        <div className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-3xl mx-auto font-sans text-justify mb-8">
          <p>
            {bio.fullSynopsis}
          </p>
        </div>

        {/* Document Action Seals */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-serif">
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-900 text-stone-50 hover:bg-amber-800 border border-amber-950 transition-colors shadow-sm"
          >
            <BookOpen className="w-4 h-4" />
            <span>Consultar Capítulos (Projetos)</span>
          </a>

          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-stone-100 text-stone-800 hover:bg-stone-200 border border-stone-300 transition-colors"
          >
            <GithubIcon className="w-4 h-4 text-stone-700" />
            <span>Repositórios</span>
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-stone-100 text-stone-800 hover:bg-stone-200 border border-stone-300 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4 text-amber-800" />
            <span>Currículo (LinkedIn)</span>
          </a>
        </div>

      </div>
    </header>
  );
};

export default AtlasHero;
