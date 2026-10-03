import React from 'react';
import { MapPin, Languages, School, Cpu, Sparkles } from 'lucide-react';
import { profileData } from '@/data/profile';

export default function BentoStats() {
  const { personal } = profileData;

  const stats = [
    {
      icon: MapPin,
      label: 'Localização & Base',
      value: personal.location,
      detail: 'Disponível para Remoto / Híbrido / Presencial',
      accent: 'from-blue-500/20 to-cyan-500/20 text-cyan-400',
    },
    {
      icon: Languages,
      label: 'Idiomas',
      value: personal.languages,
      detail: 'Leitura técnica fluente e comunicação profissional',
      accent: 'from-indigo-500/20 to-purple-500/20 text-indigo-400',
    },
    {
      icon: School,
      label: 'Academia & Formação',
      value: personal.education,
      detail: 'História, Geografia & Desenv. Software Multiplataforma',
      accent: 'from-emerald-500/20 to-teal-500/20 text-emerald-400',
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div
            key={idx}
            className="p-5 rounded-3xl bg-neutral-900 border border-white/10 hover:bg-neutral-800/80 transition-colors shadow-lg flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                {stat.label}
              </span>
              <div className={`p-2 rounded-xl bg-gradient-to-br ${stat.accent} border border-white/10`}>
                <Icon className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="text-lg font-bold text-white tracking-tight group-hover:text-white transition-colors">
                {stat.value}
              </div>
              <p className="text-xs text-neutral-400 mt-0.5">
                {stat.detail}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
