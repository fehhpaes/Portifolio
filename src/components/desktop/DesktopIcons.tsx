'use client';

import React from 'react';
import { Monitor, Folder, FileText, Settings, Trash2, Globe, Mail } from 'lucide-react';

export const DesktopIcons: React.FC = () => {
  return (
    <div className="hidden lg:flex flex-col gap-6 p-4 absolute left-2 top-4 z-10 select-none">
      
      {/* Icon 1: Meu Computador */}
      <a
        href="#perfil"
        className="flex flex-col items-center gap-1 w-20 group text-center p-1 rounded hover:bg-blue-800/40 cursor-pointer focus:bg-blue-800/60"
      >
        <div className="w-10 h-10 bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-black border-b-black flex items-center justify-center text-blue-900 shadow-sm">
          <Monitor className="w-6 h-6 text-slate-800" />
        </div>
        <span className="text-white text-xs font-sans drop-shadow-[1px_1px_1px_#000] leading-tight group-hover:bg-blue-900 px-1">
          Meu Computador
        </span>
      </a>

      {/* Icon 2: Bloco de Notas / Bio */}
      <a
        href="#sobre"
        className="flex flex-col items-center gap-1 w-20 group text-center p-1 rounded hover:bg-blue-800/40 cursor-pointer focus:bg-blue-800/60"
      >
        <div className="w-10 h-10 bg-white border-2 border-t-white border-l-white border-r-black border-b-black flex items-center justify-center text-blue-900 shadow-sm">
          <FileText className="w-6 h-6 text-blue-700" />
        </div>
        <span className="text-white text-xs font-sans drop-shadow-[1px_1px_1px_#000] leading-tight group-hover:bg-blue-900 px-1">
          Bio_Felipe.txt
        </span>
      </a>

      {/* Icon 3: Meus Projetos */}
      <a
        href="#projetos"
        className="flex flex-col items-center gap-1 w-20 group text-center p-1 rounded hover:bg-blue-800/40 cursor-pointer focus:bg-blue-800/60"
      >
        <div className="w-10 h-10 bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-black border-b-black flex items-center justify-center text-yellow-600 shadow-sm">
          <Folder className="w-6 h-6 fill-yellow-500 text-yellow-700" />
        </div>
        <span className="text-white text-xs font-sans drop-shadow-[1px_1px_1px_#000] leading-tight group-hover:bg-blue-900 px-1">
          Projetos.exe
        </span>
      </a>

      {/* Icon 4: Painel de Controle */}
      <a
        href="#habilidades"
        className="flex flex-col items-center gap-1 w-20 group text-center p-1 rounded hover:bg-blue-800/40 cursor-pointer focus:bg-blue-800/60"
      >
        <div className="w-10 h-10 bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-black border-b-black flex items-center justify-center text-slate-800 shadow-sm">
          <Settings className="w-6 h-6 text-slate-800" />
        </div>
        <span className="text-white text-xs font-sans drop-shadow-[1px_1px_1px_#000] leading-tight group-hover:bg-blue-900 px-1">
          Painel Controle
        </span>
      </a>

      {/* Icon 5: Correio */}
      <a
        href="#contato"
        className="flex flex-col items-center gap-1 w-20 group text-center p-1 rounded hover:bg-blue-800/40 cursor-pointer focus:bg-blue-800/60"
      >
        <div className="w-10 h-10 bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-black border-b-black flex items-center justify-center text-amber-700 shadow-sm">
          <Mail className="w-6 h-6 text-amber-700" />
        </div>
        <span className="text-white text-xs font-sans drop-shadow-[1px_1px_1px_#000] leading-tight group-hover:bg-blue-900 px-1">
          Outlook Mail
        </span>
      </a>

      {/* Icon 6: Lixeira */}
      <div className="flex flex-col items-center gap-1 w-20 group text-center p-1 rounded hover:bg-blue-800/40 cursor-pointer">
        <div className="w-10 h-10 bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-black border-b-black flex items-center justify-center text-slate-600 shadow-sm">
          <Trash2 className="w-6 h-6 text-slate-600" />
        </div>
        <span className="text-white text-xs font-sans drop-shadow-[1px_1px_1px_#000] leading-tight px-1">
          Lixeira (Cheia)
        </span>
      </div>

    </div>
  );
};

export default DesktopIcons;
