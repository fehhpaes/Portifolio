import React from 'react';
import { Server, Cloud, Database, Globe } from 'lucide-react';
import { skillsData, SkillCategory } from '@/data/profile';

const categoryIconMap: Record<string, React.ReactNode> = {
  frontend: <Globe className="w-5 h-5 text-emerald-400" />,
  backend: <Server className="w-5 h-5 text-amber-400" />,
  devops: <Cloud className="w-5 h-5 text-blue-400" />,
  database: <Database className="w-5 h-5 text-red-400" />,
};

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
          {skillsData.filter((c) => ['frontend', 'backend', 'devops', 'database'].includes(c.id)).map((category) => (
            <div
              key={category.id}
              className="p-6 bg-slate-900 border-4 border-amber-600 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)]"
            >
              {/* Category Header */}
              <div className="flex items-start justify-between gap-4 mb-3 pb-3 border-b-2 border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-slate-950 border-2 border-amber-500">
                    {categoryIconMap[category.id] || <Globe className="w-5 h-5 text-emerald-400" />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-pixel font-bold text-amber-300 uppercase">
                      {category.themeTitles.snes}
                    </h3>
                    <span className="text-xs font-pixel text-slate-400">
                      {category.themeCodes.snes}
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

export default Skills;
