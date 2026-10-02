'use client';

import React from 'react';
import { Server, Cloud, Database, Globe } from 'lucide-react';

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
    title: 'Frontend & Mobile Magic',
    code: 'TREE.01 // CLIENT_TIER',
    description: 'Magias visuais, interfaces responsivas e controle ágil de componentes.',
    icon: <Globe className="w-5 h-5 text-emerald-400" />,
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
    title: 'Backend & Core Engines',
    code: 'TREE.02 // SERVER_TIER',
    description: 'Encantamentos de microsserviços, endpoints estruturados e lógica de negócios.',
    icon: <Server className="w-5 h-5 text-amber-400" />,
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
    title: 'DevOps & Cloud Runes',
    code: 'TREE.03 // CLOUD_TERRAIN',
    description: 'Conteinerização, esteiras automatizadas de entrega e servidores Linux.',
    icon: <Cloud className="w-5 h-5 text-blue-400" />,
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
    title: 'Database & Grimoires',
    code: 'TREE.04 // ARCHIVE_DATA',
    description: 'Modelagem persistente, integridade de dados e consultas refinadas.',
    icon: <Database className="w-5 h-5 text-red-400" />,
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

export const Skills: React.FC = () => {
  return (
    <section id="habilidades" className="py-20 relative bg-[#0c0c14] border-b-4 border-amber-600/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-3 py-1 bg-slate-900 border-2 border-amber-500 text-amber-400 font-pixel text-xl uppercase mb-2">
            // HABILIDADES DESBLOQUEADAS
          </div>
          <h2 className="text-5xl sm:text-6xl font-pixel font-bold text-amber-400 tracking-wider">
            Skill Tree / Inventário
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl mx-auto font-sans">
            Grimórios de tecnologia e feitiços computacionais empregados em jornadas de desenvolvimento.
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-3" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 bg-slate-900 border-4 border-amber-600 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)]"
            >
              {/* Category Header */}
              <div className="flex items-start justify-between gap-4 mb-3 pb-3 border-b-2 border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-slate-950 border-2 border-amber-500">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-pixel font-bold text-amber-300 uppercase">
                      {category.title}
                    </h3>
                    <span className="text-xs font-pixel text-slate-400">
                      {category.code}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-300 mb-6 font-sans">
                {category.description}
              </p>

              {/* Skills list as Item Slots */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-1.5 bg-slate-950 border-2 border-slate-700 text-slate-200 hover:border-amber-500 transition-none"
                  >
                    <span className="font-pixel text-lg text-slate-100">{skill.name}</span>
                    <span className="text-xs font-pixel text-amber-400 bg-slate-900 px-1.5 py-0.5 border border-amber-600">
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

export default Skills;
