import React from 'react';
import type { Metadata } from 'next';
import ConsoleNavbar from '@/components/32bit/ConsoleNavbar';
import ConsoleHero from '@/components/32bit/ConsoleHero';
import ConsoleAbout from '@/components/32bit/ConsoleAbout';
import ConsoleSkills from '@/components/32bit/ConsoleSkills';
import ConsoleProjects from '@/components/32bit/ConsoleProjects';
import ConsoleContact from '@/components/32bit/ConsoleContact';
import ConsoleFooter from '@/components/32bit/ConsoleFooter';

export const metadata: Metadata = {
  title: 'Felipe Paes da Silva | Console 32-Bit System (PS1/N64 Edition)',
  description:
    'Versão Console 32-bits do portfólio de Felipe Paes da Silva: Load Game, Memory Card Manager, Equip Status e Project Discs.',
};

export default function ConsolePage() {
  return (
    <div className="relative min-h-screen bg-[#080d1e] text-white font-sans selection:bg-yellow-400 selection:text-black">
      
      {/* CRT Scanline Overlay Effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.4) 0px,
            rgba(0, 0, 0, 0.4) 1px,
            transparent 1px,
            transparent 2px
          )`
        }}
      />

      {/* Navigation */}
      <ConsoleNavbar />

      {/* Main Console Screens */}
      <main className="relative z-10">
        <ConsoleHero />
        <ConsoleAbout />
        <ConsoleSkills />
        <ConsoleProjects />
        <ConsoleContact />
      </main>

      {/* Console System BIOS Footer */}
      <ConsoleFooter />

    </div>
  );
}
