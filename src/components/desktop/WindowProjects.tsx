'use client';

import React, { useState } from 'react';
import { projects, Project } from '@/data/projects';
import { Folder, ExternalLink, Play, HardDrive, FileCode } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

export const WindowProjects: React.FC = () => {
  const [filter, setFilter] = useState<string>('Todos');

  const categories = ['Todos', 'Full-Stack', 'Web App'];

  const filteredProjects =
    filter === 'Todos'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projetos" className="my-6">
      {/* Explorer Window Container */}
      <div className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-black border-b-black p-1 shadow-[3px_3px_0px_#000]">
        
        {/* Title Bar */}
        <div className="bg-[#000080] text-white px-2 py-1 flex items-center justify-between font-sans text-xs font-bold select-none">
          <div className="flex items-center gap-1.5">
            <Folder className="w-3.5 h-3.5 fill-yellow-400 text-yellow-300" />
            <span>Explorador de Arquivos - C:\FELIPE\PROJETOS</span>
          </div>
          {/* Window Buttons */}
          <div className="flex items-center gap-1">
            <button className="w-4 h-3.5 bg-[#c0c0c0] border border-t-white border-l-white border-r-black border-b-black text-black text-[9px] flex items-center justify-center font-mono font-bold leading-none">
              _
            </button>
            <button className="w-4 h-3.5 bg-[#c0c0c0] border border-t-white border-l-white border-r-black border-b-black text-black text-[9px] flex items-center justify-center font-mono font-bold leading-none">
              □
            </button>
            <button className="w-4 h-3.5 bg-[#c0c0c0] border border-t-white border-l-white border-r-black border-b-black text-black text-[9px] flex items-center justify-center font-mono font-bold leading-none">
              ×
            </button>
          </div>
        </div>

        {/* Path Ribbon & Filters */}
        <div className="p-2 bg-[#c0c0c0] border-b border-b-slate-400 flex flex-wrap items-center justify-between gap-2 text-xs font-sans">
          <div className="flex items-center gap-1 text-black font-mono">
            <span className="text-slate-600">Endereço:</span>
            <span className="bg-white px-2 py-0.5 border border-t-black border-l-black border-r-white border-b-white text-[11px]">
              C:\FELIPE\PROJETOS\{filter.toUpperCase()}
            </span>
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-0.5 text-xs font-sans font-bold border transition-none cursor-pointer ${
                  filter === cat
                    ? 'bg-white text-black border-t-black border-l-black border-r-white border-b-white'
                    : 'bg-[#c0c0c0] text-black border-t-white border-l-white border-r-black border-b-black hover:bg-[#d0d0d0]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Files Content Grid */}
        <div className="p-4 bg-white border-2 border-t-black border-l-black border-r-white border-b-white grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="p-3 bg-[#f8f8f8] border border-slate-400 flex flex-col justify-between"
            >
              <div>
                {/* File Header */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-300 mb-2 font-sans text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-blue-900">
                    <FileCode className="w-4 h-4 text-blue-800" />
                    <span>{project.title}.EXE</span>
                  </div>

                  {project.subtitle && (
                    <span className="text-[10px] text-slate-600 font-mono">
                      [{project.subtitle}]
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-slate-800 text-xs font-sans leading-relaxed mb-3 text-justify">
                  {project.description}
                </p>

                {/* Technologies List */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-1.5 py-0.2 text-[10px] bg-white border border-slate-300 text-slate-700 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Ribbon */}
              <div className="pt-2 border-t border-slate-300 flex items-center justify-between gap-2 text-xs font-sans">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-700 hover:text-black hover:underline"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Código-Fonte</span>
                </a>

                {project.liveUrl && project.liveUrl !== '#' ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-black border-b-black font-bold text-black hover:bg-[#d0d0d0] active:border-t-black active:border-l-black active:border-r-white active:border-b-white"
                  >
                    <span>Executar .EXE</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 border ${
                      project.status === 'Missão em Andamento'
                        ? 'bg-amber-100 border-amber-400 text-amber-900 font-bold'
                        : 'bg-slate-100 border-slate-300 text-slate-600'
                    }`}
                  >
                    [ {project.status?.toUpperCase() || 'MISSÃO CONCLUÍDA'} ]
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Status Bar */}
        <div className="px-2 py-0.5 bg-[#c0c0c0] text-[11px] font-sans text-slate-700 select-none">
          {filteredProjects.length} executável(is) carregado(s) • Status: 100% Operacional
        </div>

      </div>
    </section>
  );
};

export default WindowProjects;
