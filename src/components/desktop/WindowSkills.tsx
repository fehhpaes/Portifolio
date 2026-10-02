'use client';

import React from 'react';
import { Settings, Server, Cloud, Database, Globe } from 'lucide-react';

interface SkillCategory {
  title: string;
  code: string;
  description: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level: string;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend & Mobile Applets',
    code: 'MOD.01',
    description: 'Interfaces interativas, navegação fluida e precisão de layout.',
    icon: <Globe className="w-4 h-4 text-blue-800" />,
    skills: [
      { name: 'React', level: 'RANK: AVANÇADO' },
      { name: 'Next.js (App Router)', level: 'RANK: AVANÇADO' },
      { name: 'TypeScript', level: 'RANK: AVANÇADO' },
      { name: 'Tailwind CSS', level: 'RANK: AVANÇADO' },
      { name: 'React Native & Expo', level: 'RANK: INTERMEDIÁRIO' },
      { name: 'NativeWind', level: 'RANK: INTERMEDIÁRIO' },
    ],
  },
  {
    title: 'Serviços de Rede & Backend',
    code: 'MOD.02',
    description: 'Microsserviços, lógica de negócios resiliente e endpoints estruturados.',
    icon: <Server className="w-4 h-4 text-emerald-800" />,
    skills: [
      { name: 'Node.js', level: 'RANK: AVANÇADO' },
      { name: 'Express', level: 'RANK: AVANÇADO' },
      { name: 'REST APIs & Endpoints', level: 'RANK: AVANÇADO' },
      { name: 'JWT & Autenticação', level: 'RANK: AVANÇADO' },
      { name: 'Nodemailer & Webhooks', level: 'RANK: AVANÇADO' },
      { name: 'Playwright & Scraping', level: 'RANK: AVANÇADO' },
    ],
  },
  {
    title: 'Infraestrutura & DevOps',
    code: 'MOD.03',
    description: 'Conteinerização, esteiras automatizadas de entrega e servidores Linux.',
    icon: <Cloud className="w-4 h-4 text-blue-600" />,
    skills: [
      { name: 'Docker & Containers', level: 'RANK: INTERMEDIÁRIO' },
      { name: 'GitHub Actions (CI/CD)', level: 'RANK: INTERMEDIÁRIO' },
      { name: 'DigitalOcean Droplets', level: 'RANK: INTERMEDIÁRIO' },
      { name: 'Linux / Bash Scripting', level: 'RANK: INTERMEDIÁRIO' },
      { name: 'Git & Versionamento', level: 'RANK: AVANÇADO' },
      { name: 'Electron (Desktop Apps)', level: 'RANK: INTERMEDIÁRIO' },
    ],
  },
  {
    title: 'Gerenciador de Bancos de Dados',
    code: 'MOD.04',
    description: 'Modelagem persistente, integridade de dados e consultas estruturadas.',
    icon: <Database className="w-4 h-4 text-amber-800" />,
    skills: [
      { name: 'MongoDB & Mongoose', level: 'RANK: AVANÇADO' },
      { name: 'PostgreSQL', level: 'RANK: INTERMEDIÁRIO' },
      { name: 'MySQL', level: 'RANK: INTERMEDIÁRIO' },
      { name: 'AsyncStorage & Local Data', level: 'RANK: AVANÇADO' },
      { name: 'Modelagem NoSQL & Relacional', level: 'RANK: AVANÇADO' },
      { name: 'Consultas & Indexação', level: 'RANK: INTERMEDIÁRIO' },
    ],
  },
];

export const WindowSkills: React.FC = () => {
  return (
    <section id="habilidades" className="my-6">
      {/* Control Panel Window Container */}
      <div className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-black border-b-black p-1 shadow-[3px_3px_0px_#000]">
        
        {/* Title Bar */}
        <div className="bg-[#000080] text-white px-2 py-1 flex items-center justify-between font-sans text-xs font-bold select-none">
          <div className="flex items-center gap-1.5">
            <Settings className="w-3.5 h-3.5 text-white" />
            <span>Painel de Controle - Configurações Técnicas</span>
          </div>
          {/* Window Buttons */}
          <div className="flex items-center gap-1">
            <button className="w-4 h-3.5 bg-[#c0c0c0] border border-t-white border-l-white border-r-black border-b-black text-black text-[9px] flex items-center justify-center font-mono font-bold leading-none">
              _
            </button>
            <button className="w-4 h-3.5 bg-[#c0c0c0] border border-t-white border-l-white border-r-black border-b-black text-black text-[9px] flex items-center justify-center font-mono font-bold leading-none">
              □
            </button>
            <button className="w-4 h-3.5 bg-[#c0c0c0] border border-t-white border-l-white border-r-black border-b-black text-black text-[9px] flex items-center justify-center font-mono font-bold leading-none">
              ×
            </button>
          </div>
        </div>

        {/* Header Ribbon */}
        <div className="p-3 bg-[#c0c0c0] border-b border-b-slate-400 text-xs font-sans text-black">
          <p>
            Selecione uma categoria de componentes para verificar os módulos instalados e níveis de proficiência técnica:
          </p>
        </div>

        {/* Categories Grid */}
        <div className="p-4 bg-white border-2 border-t-black border-l-black border-r-white border-b-white grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-3 bg-[#f0f0f0] border border-slate-400"
            >
              <div className="flex items-center justify-between pb-2 border-b border-slate-300 mb-2">
                <div className="flex items-center gap-2">
                  {category.icon}
                  <h4 className="font-bold text-xs text-black font-sans">
                    {category.title}
                  </h4>
                </div>
                <span className="text-[10px] font-mono text-slate-500 font-bold">
                  {category.code}
                </span>
              </div>

              <p className="text-[11px] text-slate-600 font-sans mb-3 leading-normal">
                {category.description}
              </p>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-1.5 px-2 py-0.5 bg-white border border-slate-400 text-black text-[11px] font-sans"
                  >
                    <span>{skill.name}</span>
                    <span className="text-[10px] font-mono font-bold text-blue-900 border-l border-slate-300 pl-1">
                      [{skill.level}]
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Status Bar */}
        <div className="px-2 py-0.5 bg-[#c0c0c0] text-[11px] font-sans text-slate-700 select-none">
          4 objeto(s) no painel de controle
        </div>

      </div>
    </section>
  );
};

export default WindowSkills;
