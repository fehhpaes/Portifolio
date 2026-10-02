import React from 'react';
import type { Metadata } from 'next';
import BentoNav from '@/components/modern/BentoNav';
import BentoProfile from '@/components/modern/BentoProfile';
import BentoStats from '@/components/modern/BentoStats';
import BentoSkills from '@/components/modern/BentoSkills';
import BentoProjects from '@/components/modern/BentoProjects';
import BentoContact from '@/components/modern/BentoContact';

export const metadata: Metadata = {
  title: 'Felipe Paes da Silva | Modern Corporate & Recruiter Edition',
  description:
    'Portfólio moderno em Bento Box de Felipe Paes da Silva: Desenvolvedor Full Stack & Multiplataforma (Next.js, React, Node.js, TypeScript).',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-neutral-800 selection:text-white pb-16">
      {/* Subtle Background Glow Accent */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent blur-3xl opacity-60 rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {/* Navigation Bar */}
        <BentoNav />

        {/* Bento Grid */}
        <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
          {/* BentoProfile: 2 columns on tablet and desktop */}
          <div className="md:col-span-2 xl:col-span-2">
            <BentoProfile />
          </div>

          {/* BentoStats: 2 columns on desktop */}
          <div className="md:col-span-2 xl:col-span-2">
            <BentoStats />
          </div>

          {/* BentoSkills: 2 columns */}
          <div className="md:col-span-2 xl:col-span-2">
            <BentoSkills />
          </div>

          {/* BentoContact: 2 columns */}
          <div className="md:col-span-2 xl:col-span-2">
            <BentoContact />
          </div>

          {/* BentoProjects: Full width (all columns) */}
          <div className="md:col-span-2 xl:col-span-4">
            <BentoProjects />
          </div>
        </main>

        {/* Minimalist Footer */}
        <footer className="mt-12 text-center text-xs text-neutral-500 py-6 border-t border-white/5">
          <p>© {new Date().getFullYear()} Felipe Paes da Silva. Desenvolvido com Next.js & Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
}
