'use client';

import React, { useState } from 'react';
import { projectsData, ProjectItem } from '@/data/profile';
import { ExternalLink, Scroll, ShieldCheck, Sparkles, Sword } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

const getCategoryIcon = (category: ProjectItem['category']) => {
  switch (category) {
    case 'Full-Stack':
      return <Sword className="w-4 h-4 text-emerald-400" />;
    case 'Web App':
      return <Sparkles className="w-4 h-4 text-amber-400" />;
    default:
      return <Scroll className="w-4 h-4 text-slate-400" />;
  }
};

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('Todos');

  const categories = ['Todos', 'Full-Stack', 'Web App'];

  const filteredProjects =
    filter === 'Todos'
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projetos" className="py-20 relative bg-[#09090e] border-b-4 border-amber-600/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 bg-slate-900 border-2 border-amber-500 text-amber-400 font-pixel text-xl uppercase mb-2">
            // REGISTRO DE AVENTURAS
          </div>
          <h2 className="text-5xl sm:text-6xl font-pixel font-bold text-amber-400 tracking-wider">
            Quest Log
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 font-sans max-w-xl mx-auto">
            Missões concluídas, artefatos de software desenvolvidos e sistemas implementados.
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-3" />
        </div>

        {/* Filter Buttons in 16-bit Menu Style */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 font-pixel text-xl uppercase cursor-pointer transition-none border-2 ${
                filter === cat
                  ? 'bg-blue-600 text-white border-blue-400 shadow-[2px_2px_0px_#000]'
                  : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-amber-500 hover:bg-amber-500 hover:text-black'
              }`}
            >
              &gt; {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid: Quest Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="flex flex-col justify-between p-6 bg-slate-900 border-4 border-amber-500 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)]"
            >
              <div>
                {/* Header with Quest ID, Category & Subtitle */}
                <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b-2 border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-pixel text-amber-400 font-bold">
                      QUEST #{index + 1}
                    </span>
                    <span className="text-slate-600 font-pixel">|</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-pixel text-slate-200">
                      {getCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </span>
                  </div>

                  {project.subtitle && (
                    <span className="text-xs font-pixel text-emerald-400 truncate max-w-[180px]">
                      [{project.subtitle}]
                    </span>
                  )}
                </div>

                {/* Quest Title */}
                <h3 className="text-3xl font-pixel font-bold text-amber-300 mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                  {project.description}
                </p>

                {/* Tech Runes / Items */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-pixel bg-slate-950 text-slate-200 border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions & Rewards */}
              <div className="pt-3 border-t-2 border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2 items-center">
                  {project.repositories.map((repo, rIdx) => (
                    <a
                      key={rIdx}
                      href={repo.url || 'https://github.com/fehhpaes'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-pixel text-lg text-slate-200 hover:text-amber-400 transition-none py-1"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>{project.repositories.length > 1 ? `// REPO (${repo.label.toUpperCase()})` : '// REPOSITÓRIO'}</span>
                    </a>
                  ))}
                </div>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-pixel text-lg text-emerald-400 hover:text-emerald-300 transition-none"
                  >
                    <span>ENTRAR NO PORTAL</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-pixel ${
                      project.status === 'Missão em Andamento'
                        ? 'text-amber-400'
                        : 'text-stone-400'
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    [ {project.status?.toUpperCase() || 'MISSÃO CONCLUÍDA'} ]
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
