'use client';

import React from 'react';
import { Server, Cloud, Database, Globe, Cpu, Zap, Shield } from 'lucide-react';

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
    title: 'Client Tier • Frontend & Mobile',
    code: 'MATERIA 01',
    description: 'Interfaces interativas, navegação fluida e controle de componentes.',
    icon: <Globe className="w-5 h-5 text-cyan-300" />,
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
    title: 'Server Tier • Backend & APIs',
    code: 'MATERIA 02',
    description: 'Microsserviços, lógica de negócios resiliente e endpoints estruturados.',
    icon: <Server className="w-5 h-5 text-yellow-300" />,
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
    title: 'Cloud Runes • DevOps & Infra',
    code: 'MATERIA 03',
    description: 'Conteinerização, esteiras automatizadas de entrega e servidores Linux.',
    icon: <Cloud className="w-5 h-5 text-blue-300" />,
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
    title: 'Data Archives • Bancos de Dados',
    code: 'MATERIA 04',
    description: 'Modelagem persistente, integridade de dados e consultas estruturadas.',
    icon: <Database className="w-5 h-5 text-red-300" />,
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

export const ConsoleSkills: React.FC = () => {
  return (
    <section id="habilidades" className="py-12 border-b-4 border-slate-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8 flex items-center justify-between pb-2 border-b-2 border-blue-400/40 text-yellow-300 font-pixel text-xl drop-shadow-[2px_2px_0px_#000]">
          <span className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-yellow-300" /> CHARACTER STATUS • EQUIP & SKILLS
          </span>
          <span className="text-cyan-300 text-sm">[ LEVEL UP // READY ]</span>
        </div>

        {/* 4 Materia / Skill Panes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gradient-to-b from-[#0a256b] via-[#081b4f] to-[#040d2b] border-4 border-t-white border-l-white border-r-slate-500 border-b-slate-600 p-5 shadow-[6px_6px_0px_#000]"
            >
              <div className="flex items-center justify-between pb-2 border-b border-blue-400/30 mb-3 font-pixel">
                <div className="flex items-center gap-2 text-white">
                  {category.icon}
                  <h3 className="text-xl font-bold drop-shadow-[1px_1px_0px_#000]">
                    {category.title}
                  </h3>
                </div>
                <span className="text-xs text-yellow-300 bg-blue-950 px-2 py-0.5 border border-blue-400">
                  {category.code}
                </span>
              </div>

              <p className="text-xs text-slate-300 font-sans mb-4">
                {category.description}
              </p>

              {/* Skills Slots */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-2.5 py-1 bg-[#091533] border-2 border-t-blue-400 border-l-blue-400 border-r-blue-950 border-b-blue-950 text-white font-pixel text-sm shadow-[2px_2px_0px_#000]"
                  >
                    <span>{skill.name}</span>
                    <span className="text-[11px] text-yellow-300 bg-blue-950 px-1 py-0.2 border border-blue-500">
                      [{skill.level}]
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ConsoleSkills;
