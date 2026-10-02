import React from 'react';
import { Code2, Server, Database, Wrench } from 'lucide-react';

interface Skill {
  name: string;
  level: 'Avançado' | 'Intermediário';
}

interface SkillGroup {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
}

export default function BentoSkills() {
  const skillGroups: SkillGroup[] = [
    {
      title: 'Frontend Architecture',
      icon: Code2,
      skills: [
        { name: 'React', level: 'Avançado' },
        { name: 'Next.js', level: 'Avançado' },
        { name: 'TypeScript', level: 'Avançado' },
        { name: 'Tailwind CSS', level: 'Avançado' },
        { name: 'HTML5 & CSS3', level: 'Avançado' },
      ],
    },
    {
      title: 'Backend & APIs',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 'Avançado' },
        { name: 'Express', level: 'Avançado' },
        { name: 'RESTful APIs', level: 'Avançado' },
        { name: 'Autenticação JWT', level: 'Intermediário' },
      ],
    },
    {
      title: 'Database & Cloud',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 'Avançado' },
        { name: 'PostgreSQL', level: 'Intermediário' },
        { name: 'Docker', level: 'Intermediário' },
        { name: 'DigitalOcean', level: 'Intermediário' },
      ],
    },
    {
      title: 'Workflow & Tools',
      icon: Wrench,
      skills: [
        { name: 'Git & GitHub', level: 'Avançado' },
        { name: 'Pair Programming c/ IA', level: 'Avançado' },
        { name: 'Linux', level: 'Intermediário' },
        { name: 'Scrum / Kanban', level: 'Avançado' },
      ],
    },
  ];

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900 border border-white/10 hover:bg-neutral-800/80 transition-colors shadow-xl flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <Code2 className="w-5 h-5 text-indigo-400" />
              Stack & Competências
            </h2>
            <p className="text-xs text-neutral-400 mt-0.5">
              Proficiência técnica mapeada para padrões corporativos
            </p>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-neutral-400">
            <span className="inline-flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
              Avançado
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-neutral-500"></span>
              Intermediário
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skillGroups.map((group, idx) => {
            const GroupIcon = group.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3"
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-300">
                  <GroupIcon className="w-4 h-4 text-neutral-400" />
                  {group.title}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill, sIdx) => {
                    const isAdvanced = skill.level === 'Avançado';
                    return (
                      <span
                        key={sIdx}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs transition-colors ${
                          isAdvanced
                            ? 'bg-neutral-800 text-neutral-200 border border-white/10 hover:border-indigo-500/30'
                            : 'bg-neutral-800/60 text-neutral-400 border border-white/5'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isAdvanced ? 'bg-indigo-400' : 'bg-neutral-500'
                          }`}
                        />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
        <span>Foco contínuo em Clean Code, Arquitetura Limpa e Acessibilidade</span>
      </div>
    </div>
  );
}
