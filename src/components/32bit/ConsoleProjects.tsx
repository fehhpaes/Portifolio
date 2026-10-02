'use client';

import React, { useState } from 'react';
import { projects, Project } from '@/data/projects';
import { Disc, ExternalLink, Play, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

export const ConsoleProjects: React.FC = () => {
  const [filter, setFilter] = useState<string>('Todos');

  const categories = ['Todos', 'Full-Stack', 'Web App'];

  const filteredProjects =
    filter === 'Todos'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projetos" className="py-12 border-b-4 border-slate-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-6 flex items-center justify-between pb-2 border-b-2 border-blue-400/40 text-yellow-300 font-pixel text-xl drop-shadow-[2px_2px_0px_#000]">
          <span className="flex items-center gap-2">
            <Disc className="w-5 h-5 text-yellow-300" /> CD-ROM TRAY • PROJECT DISCS & SAVES
          </span>
          <span className="text-cyan-300 text-sm">[ OPTICAL DRIVE: READY ]</span>
        </div>

        {/* 32-bit Beveled Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8 font-pixel">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 text-lg uppercase cursor-pointer border-2 transition-none ${
                filter === cat
                  ? 'bg-blue-600 text-white border-t-white border-l-white border-r-blue-950 border-b-blue-950 drop-shadow-[2px_2px_0px_#000]'
                  : 'bg-[#091533] text-slate-300 border-t-blue-400 border-l-blue-400 border-r-blue-950 border-b-blue-950 hover:bg-blue-800'
              }`}
            >
              [ {cat} ]
            </button>
          ))}
        </div>

        {/* Project Discs / Saves Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="flex flex-col justify-between bg-gradient-to-b from-[#0a256b] via-[#081b4f] to-[#040d2b] border-4 border-t-white border-l-white border-r-slate-500 border-b-slate-600 p-6 shadow-[6px_6px_0px_#000]"
            >
              <div>
                {/* Disc Header */}
                <div className="flex items-center justify-between gap-2 pb-2 border-b border-blue-400/30 mb-3 font-pixel">
                  <div className="flex items-center gap-2">
                    <Disc className="w-4 h-4 text-yellow-300" />
                    <span className="text-sm text-yellow-300 font-bold">
                      DISC 0{index + 1} • {project.category}
                    </span>
                  </div>

                  {project.subtitle && (
                    <span className="text-xs text-cyan-300 truncate max-w-[170px]">
                      [{project.subtitle}]
                    </span>
                  )}
                </div>

                {/* Disc Title */}
                <h3 className="font-pixel text-2xl text-white font-bold mb-2 drop-shadow-[2px_2px_0px_#000]">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-200 text-sm font-sans leading-relaxed mb-5 text-justify drop-shadow-[1px_1px_0px_#000]">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5 font-pixel">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs bg-[#091533] border border-blue-400/60 text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-3 border-t border-blue-400/30 flex items-center justify-between gap-3 font-pixel text-base">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-200 hover:text-yellow-300 transition-none py-1 drop-shadow-[1px_1px_0px_#000]"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>// REPOSITÓRIO</span>
                </a>

                {project.liveUrl && project.liveUrl !== '#' ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-600 text-white border-2 border-t-blue-300 border-l-blue-300 border-r-blue-950 border-b-blue-950 hover:bg-blue-500 transition-none drop-shadow-[1px_1px_0px_#000]"
                  >
                    <span>ENTRAR NO PORTAL</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span
                    className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 bg-[#091533] border ${
                      project.status === 'Missão em Andamento'
                        ? 'border-yellow-400 text-yellow-300'
                        : 'border-slate-500 text-slate-300'
                    }`}
                  >
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

export default ConsoleProjects;
