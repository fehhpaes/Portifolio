'use client';

import React, { useState } from 'react';
import { projectsData, ProjectItem } from '@/data/profile';
import { ExternalLink, BookOpen, Bookmark } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

export const AtlasProjects: React.FC = () => {
  const [filter, setFilter] = useState<string>('Todos');

  const categories = ['Todos', 'Full-Stack', 'Web App'];

  const filteredProjects =
    filter === 'Todos'
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  const getRomanNumeral = (num: number) => {
    const romans = ['I', 'II', 'III', 'IV', 'V', 'VI'];
    return romans[num] || String(num + 1);
  };

  return (
    <section id="projetos" className="py-16 border-b border-stone-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-serif uppercase tracking-widest text-amber-900 font-semibold block mb-1">
            // SEÇÃO III
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 font-normal">
            Capítulos & Estudos de Caso
          </h2>
          <p className="font-serif italic text-stone-600 text-sm mt-1">
            Registros práticos de arquitetura e desenvolvimento de software
          </p>
          <div className="w-16 h-px bg-amber-900/60 mx-auto mt-3" />
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1 font-serif text-sm transition-colors cursor-pointer border ${
                filter === cat
                  ? 'bg-amber-900 text-stone-50 border-amber-950 font-medium'
                  : 'bg-stone-100/80 text-stone-700 border-stone-300 hover:bg-stone-200'
              }`}
            >
              [ {cat} ]
            </button>
          ))}
        </div>

        {/* Chapters Grid */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="p-6 sm:p-8 bg-stone-100/60 border border-stone-300 transition-all hover:bg-stone-100"
            >
              {/* Chapter Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-stone-300 mb-4">
                <div className="flex items-center gap-2">
                  <Bookmark className="w-4 h-4 text-amber-900" />
                  <span className="text-xs font-serif uppercase tracking-widest text-amber-900 font-semibold">
                    Capítulo {getRomanNumeral(index)} • {project.category}
                  </span>
                </div>

                {project.subtitle && (
                  <span className="text-xs font-serif italic text-stone-600">
                    {project.subtitle}
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="font-serif text-2xl text-stone-900 font-medium mb-3">
                {project.title}
              </h3>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-sans mb-6 text-justify">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs font-sans bg-stone-50 border border-stone-300 text-stone-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions & Reference Links */}
              <div className="pt-3 border-t border-stone-300 flex items-center justify-between gap-4 text-sm font-serif">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-amber-900 hover:text-amber-950 hover:underline"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>// Repositório de Código</span>
                </a>

                {project.liveUrl && project.liveUrl !== '#' ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-amber-900 font-medium hover:text-amber-950 hover:underline"
                  >
                    <span>Acessar Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className={`text-xs font-serif italic ${project.status === 'Missão em Andamento' ? 'text-amber-800' : 'text-stone-500'}`}>
                    [ {project.status || 'Missão Concluída'} ]
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

export default AtlasProjects;
