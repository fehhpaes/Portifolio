import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/16bit/Navbar';
import Hero from '@/components/16bit/Hero';
import About from '@/components/16bit/About';
import Skills from '@/components/16bit/Skills';
import Projects from '@/components/16bit/Projects';
import Contact from '@/components/16bit/Contact';
import Footer from '@/components/16bit/Footer';

export const metadata: Metadata = {
  title: 'Felipe Paes da Silva | 16-Bit RPG Edition',
  description:
    'Versão RPG Clássico 16-bit do portfólio de Felipe Paes da Silva: Desenvolvedor Full Stack & Multiplataforma.',
};

export default function Page16Bit() {
  return (
    <div className="flex min-h-screen flex-col bg-[#09090e] text-slate-200 selection:bg-amber-600 selection:text-black font-sans">
      {/* RPG Menu Navigation */}
      <Navbar />

      {/* Main Quests & Character Panes */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Game System Footer */}
      <Footer />
    </div>
  );
}
