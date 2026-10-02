import React from 'react';
import type { Metadata } from 'next';
import DesktopIcons from '@/components/desktop/DesktopIcons';
import WindowProfile from '@/components/desktop/WindowProfile';
import WindowAbout from '@/components/desktop/WindowAbout';
import WindowSkills from '@/components/desktop/WindowSkills';
import WindowProjects from '@/components/desktop/WindowProjects';
import WindowContact from '@/components/desktop/WindowContact';
import Taskbar from '@/components/desktop/Taskbar';

export const metadata: Metadata = {
  title: 'Felipe Paes da Silva | Windows 95 Desktop Edition',
  description:
    'Versão Desktop Retro Windows 95 do portfólio de Felipe Paes da Silva: Propriedades do Sistema, Bloco de Notas, Painel de Controle e Explorador de Arquivos.',
};

export default function DesktopPage() {
  return (
    <div className="relative min-h-screen bg-[#008080] text-black font-sans pb-16 selection:bg-[#000080] selection:text-white">
      
      {/* Desktop Left Icons */}
      <DesktopIcons />

      {/* Main Desktop Work Area */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 relative z-10 lg:pl-28">
        
        {/* System Windows */}
        <WindowProfile />
        <WindowAbout />
        <WindowSkills />
        <WindowProjects />
        <WindowContact />

      </main>

      {/* Classic Win95 Taskbar */}
      <Taskbar />

    </div>
  );
}
