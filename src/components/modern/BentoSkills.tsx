import React from 'react';
import { Code2, Server, Database, Wrench, Cloud } from 'lucide-react';
import { skillsData, SkillCategory } from '@/data/profile';

const categoryIconMap: Record<string, React.ElementType> = {
  frontend: Code2,
  backend: Server,
  devops: Cloud,
  database: Database,
  workflow: Wrench,
};

export default function BentoSkills() {
  const displayCategories = skillsData.filter((c) =>
    ['frontend', 'backend', 'database', 'workflow'].includes(c.id)
  );

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
          {displayCategories.map((group) => {
            const GroupIcon = categoryIconMap[group.id] || Code2;
            return (
              <div
                key={group.id}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3"
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-300">
                  <GroupIcon className="w-4 h-4 text-neutral-400" />
                  {group.themeTitles.modern}
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
