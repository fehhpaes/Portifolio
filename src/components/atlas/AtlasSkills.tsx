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
    title: 'Desenvolvimento Frontend & Mobile',
    code: 'TOMO I',
    description: 'Interfaces interativas, navegação fluida e precisão de layout.',
    icon: <Globe className="w-4 h-4 text-amber-900" />,
    skills: [
      { name: 'React', level: 'Avançado' },
      { name: 'Next.js (App Router)', level: 'Avançado' },
      { name: 'TypeScript', level: 'Avançado' },
      { name: 'Tailwind CSS', level: 'Avançado' },
      { name: 'React Native & Expo', level: 'Intermediário' },
      { name: 'NativeWind', level: 'Intermediário' },
    ],
  },
  {
    title: 'Engenharia Backend & APIs',
    code: 'TOMO II',
    description: 'Microsserviços, lógica de negócios resiliente e endpoints estruturados.',
    icon: <Server className="w-4 h-4 text-amber-900" />,
    skills: [
      { name: 'Node.js', level: 'Avançado' },
      { name: 'Express', level: 'Avançado' },
      { name: 'REST APIs & Endpoints', level: 'Avançado' },
      { name: 'JWT & Autenticação', level: 'Avançado' },
      { name: 'Nodemailer & Webhooks', level: 'Avançado' },
      { name: 'Playwright & Scraping', level: 'Avançado' },
    ],
  },
  {
    title: 'DevOps & Infraestrutura em Nuvem',
    code: 'TOMO III',
    description: 'Conteinerização, esteiras automatizadas de entrega e servidores Linux.',
    icon: <Cloud className="w-4 h-4 text-amber-900" />,
    skills: [
      { name: 'Docker & Containers', level: 'Intermediário' },
      { name: 'GitHub Actions (CI/CD)', level: 'Intermediário' },
      { name: 'DigitalOcean Droplets', level: 'Intermediário' },
      { name: 'Linux / Bash Scripting', level: 'Intermediário' },
      { name: 'Git & Versionamento', level: 'Avançado' },
      { name: 'Electron (Desktop Apps)', level: 'Intermediário' },
    ],
  },
  {
    title: 'Persistência & Bancos de Dados',
    code: 'TOMO IV',
    description: 'Modelagem relacional e documental, integridade e consultas.',
    icon: <Database className="w-4 h-4 text-amber-900" />,
    skills: [
      { name: 'MongoDB & Mongoose', level: 'Avançado' },
      { name: 'PostgreSQL', level: 'Intermediário' },
      { name: 'MySQL', level: 'Intermediário' },
      { name: 'AsyncStorage & Local Data', level: 'Avançado' },
      { name: 'Modelagem NoSQL & Relacional', level: 'Avançado' },
      { name: 'Consultas & Indexação', level: 'Intermediário' },
    ],
  },
];

export const AtlasSkills: React.FC = () => {
  return (
    <section id="habilidades" className="py-16 border-b border-stone-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-serif uppercase tracking-widest text-amber-900 font-semibold block mb-1">
            // SEÇÃO II
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 font-normal">
            Índice Técnico de Competências
          </h2>
          <p className="font-serif italic text-stone-600 text-sm mt-1">
            Compêndio de linguagens, ecossistemas e infraestrutura
          </p>
          <div className="w-16 h-px bg-amber-900/60 mx-auto mt-3" />
        </div>

        {/* Clean Columns Index */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 bg-stone-100/70 border border-stone-300"
            >
              <div className="flex items-center justify-between pb-3 border-b border-stone-300 mb-3">
                <div className="flex items-center gap-2">
                  {category.icon}
                  <h3 className="font-serif text-lg font-medium text-stone-900">
                    {category.title}
                  </h3>
                </div>
                <span className="text-xs font-serif uppercase tracking-wider text-amber-900">
                  {category.code}
                </span>
              </div>

              <p className="text-xs text-stone-600 font-sans mb-4 leading-relaxed">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-1.5 px-2.5 py-1 bg-stone-50 border border-stone-300 text-stone-800 text-xs font-sans"
                  >
                    <span>{skill.name}</span>
                    <span className="text-[10px] text-amber-900 font-serif italic border-l border-stone-300 pl-1.5">
                      {skill.level}
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

export default AtlasSkills;
