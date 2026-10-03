'use client';

import React from 'react';
import { Server, Cloud, Database, Globe, Cpu } from 'lucide-react';
import { skillsData, SkillCategory } from '@/data/profile';

const categoryIconMap: Record<string, React.ReactNode> = {
  frontend: <Globe className="w-5 h-5 text-cyan-300" />,
  backend: <Server className="w-5 h-5 text-yellow-300" />,
  devops: <Cloud className="w-5 h-5 text-blue-300" />,
  database: <Database className="w-5 h-5 text-red-300" />,
};

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
          {skillsData.filter((c) => ['frontend', 'backend', 'devops', 'database'].includes(c.id)).map((category) => (
            <div
              key={category.id}
              className="bg-gradient-to-b from-[#0a256b] via-[#081b4f] to-[#040d2b] border-4 border-t-white border-l-white border-r-slate-500 border-b-slate-600 p-5 shadow-[6px_6px_0px_#000]"
            >
              <div className="flex items-center justify-between pb-2 border-b border-blue-400/30 mb-3 font-pixel">
                <div className="flex items-center gap-2 text-white">
                  {categoryIconMap[category.id] || <Globe className="w-5 h-5 text-cyan-300" />}
                  <h3 className="text-xl font-bold drop-shadow-[1px_1px_0px_#000]">
                    {category.themeTitles.console}
                  </h3>
                </div>
                <span className="text-xs text-yellow-300 bg-blue-950 px-2 py-0.5 border border-blue-400">
                  {category.themeCodes.console}
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
                      [RANK: {skill.level.toUpperCase()}]
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
