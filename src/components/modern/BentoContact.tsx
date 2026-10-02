'use client';

import React, { useState } from 'react';
import { Mail, Check, Copy, Send, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function BentoContact() {
  const [copied, setCopied] = useState(false);
  const email = 'felipepaes.contato@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900 border border-white/10 hover:bg-neutral-800/80 transition-colors shadow-xl flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <Mail className="w-5 h-5 text-purple-400" />
            Contato & Redes
          </h2>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
            Resposta Rápida
          </span>
        </div>

        <p className="text-xs text-neutral-300 mb-6 leading-relaxed">
          Aberto a oportunidades CLT, projetos estratégicos, freelas e parcerias em tecnologia. Conecte-se comigo:
        </p>

        {/* Buttons List */}
        <div className="space-y-2.5">
          {/* Email button with copy */}
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${email}`}
              className="flex-1 flex items-center justify-between px-4 py-3 rounded-2xl bg-neutral-800/80 hover:bg-neutral-700/80 border border-white/10 text-xs font-medium text-white transition-colors group"
            >
              <div className="flex items-center gap-2.5 truncate">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="truncate">{email}</span>
              </div>
              <Send className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white shrink-0 ml-1 transition-colors" />
            </a>

            <button
              onClick={handleCopyEmail}
              title="Copiar e-mail"
              className="p-3 rounded-2xl bg-neutral-800/80 hover:bg-neutral-700/80 border border-white/10 text-neutral-300 hover:text-white transition-colors"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/felipe-paes-da-silva-44b461318"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-4 py-3 rounded-2xl bg-neutral-800/80 hover:bg-neutral-700/80 border border-white/10 text-xs font-medium text-white transition-colors group"
          >
            <div className="flex items-center gap-2.5">
              <LinkedinIcon className="w-4 h-4 text-[#0077B5] shrink-0" />
              <span>LinkedIn / in / felipe-paes-da-silva</span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
          </a>

          {/* GitHub Button */}
          <a
            href="https://github.com/fehhpaes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-4 py-3 rounded-2xl bg-neutral-800/80 hover:bg-neutral-700/80 border border-white/10 text-xs font-medium text-white transition-colors group"
          >
            <div className="flex items-center gap-2.5">
              <GithubIcon className="w-4 h-4 text-neutral-300 shrink-0" />
              <span>GitHub / fehhpaes</span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-neutral-500 text-center">
        Felipe Paes da Silva • Sorocaba, SP
      </div>
    </div>
  );
}
