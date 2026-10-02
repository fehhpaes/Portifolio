import React from 'react';
import { Sparkles, Bot, GraduationCap, MapPin, Briefcase } from 'lucide-react';

export default function BentoProfile() {
  return (
    <div className="flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-neutral-900 border border-white/10 hover:bg-neutral-800/80 transition-colors shadow-xl group">
      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Disponível para Contratação
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-neutral-300 border border-white/10">
            <MapPin className="w-3 h-3 text-neutral-400" />
            Sorocaba, SP
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Briefcase className="w-3 h-3 text-indigo-400" />
            Auxiliar Docente @ Etec
          </span>
        </div>

        {/* Hero Title & Subtitle */}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
          Felipe Paes da Silva
        </h1>
        <p className="text-base sm:text-lg font-medium text-neutral-400 mb-6">
          Desenvolvedor Full Stack & Multiplataforma • Next.js, React, Node.js & TypeScript
        </p>

        {/* Humanized Narrative */}
        <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
          <p>
            Sou um desenvolvedor focado em entender o <strong className="text-white">contexto e a regra de negócio</strong> antes de escrever qualquer linha de código. Minha base inicial em <strong className="text-white">Ciências Humanas (História & Geografia)</strong> combinada com a graduação em <strong className="text-white">Desenvolvimento de Software Multiplataforma (Fatec)</strong> me confere visão sistêmica, comunicação clara e precisão arquitetural.
          </p>
          <p>
            No dia a dia, gerencio ambientes e auxilio turmas técnicas na <strong className="text-white">Etec Armando Pannunzio</strong>, vivenciando na prática resolução de problemas, governança e deploy contínuo.
          </p>
        </div>
      </div>

      {/* AI Pair Programming Modern Card */}
      <div className="mt-6 pt-5 border-t border-white/10 flex items-start gap-3.5 bg-white/[0.02] p-4 rounded-2xl border border-white/5">
        <div className="p-2 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 shrink-0">
          <Bot className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1 flex items-center gap-1.5">
            Fluxo Moderno de Engenharia
            <Sparkles className="w-3 h-3 text-amber-400" />
          </h2>
          <p className="text-xs text-neutral-300 leading-relaxed">
            Utilizo <strong>Inteligência Artificial</strong> diariamente como ferramenta estratégica de <em>pair programming</em> — acelerando prototipagem, automação de testes, refatorações e documentação, sempre com rigor técnico e validação humana.
          </p>
        </div>
      </div>
    </div>
  );
}
