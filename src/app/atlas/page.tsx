import React from 'react';
import type { Metadata } from 'next';
import AtlasNavbar from '@/components/atlas/AtlasNavbar';
import AtlasHero from '@/components/atlas/AtlasHero';
import AtlasAbout from '@/components/atlas/AtlasAbout';
import AtlasSkills from '@/components/atlas/AtlasSkills';
import AtlasProjects from '@/components/atlas/AtlasProjects';
import AtlasContact from '@/components/atlas/AtlasContact';
import AtlasFooter from '@/components/atlas/AtlasFooter';

export const metadata: Metadata = {
  title: 'Felipe Paes da Silva | Atlas Histórico & Documental',
  description:
    'Versão Atlas Histórico do portfólio de Felipe Paes da Silva: Engenharia de software, compêndio de competências técnicas e estudos de caso.',
};

export default function AtlasPage() {
  return (
    <div className="relative min-h-screen bg-[#F4F1EA] text-stone-800 font-sans selection:bg-amber-900/20 selection:text-amber-950">
      
      {/* Super Subtle Millimeter/Topographic Paper Pattern (3% opacity) */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000000 1px, transparent 1px),
            linear-gradient(to bottom, #000000 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Navigation */}
      <AtlasNavbar />

      {/* Main Historical Document Sections */}
      <main className="relative z-10">
        <AtlasHero />
        <AtlasAbout />
        <AtlasSkills />
        <AtlasProjects />
        <AtlasContact />
      </main>

      {/* Colophon & Footer */}
      <AtlasFooter />

    </div>
  );
}
