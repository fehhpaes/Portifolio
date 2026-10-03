'use client';

import React, { useState } from 'react';
import { Mail, Check, Copy, Send, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { profileData } from '@/data/profile';

export default function BentoContact() {
  const [copied, setCopied] = useState(false);
  const { personal, contact } = profileData;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
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
              href={`mailto:${contact.email}`}
              className="flex-1 flex items-center justify-between px-4 py-3 rounded-2xl bg-neutral-800/80 hover:bg-neutral-700/80 border border-white/10 text-xs font-medium text-white transition-colors group"
            >
              <div className="flex items-center gap-2.5 truncate">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="truncate">{contact.email}</span>
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

          {/* WhatsApp / Phone Button */}
          <a
            href={contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-4 py-3 rounded-2xl bg-neutral-800/80 hover:bg-neutral-700/80 border border-white/10 text-xs font-medium text-white transition-colors group"
          >
            <div className="flex items-center gap-2.5">
              <svg
                className="w-4 h-4 text-emerald-400 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.45 1.03 2.62.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z" />
              </svg>
              <span>{contact.phone}</span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
          </a>

          {/* LinkedIn Button */}
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-4 py-3 rounded-2xl bg-neutral-800/80 hover:bg-neutral-700/80 border border-white/10 text-xs font-medium text-white transition-colors group"
          >
            <div className="flex items-center gap-2.5">
              <LinkedinIcon className="w-4 h-4 text-[#0077B5] shrink-0" />
              <span>{contact.linkedinDisplay}</span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
          </a>

          {/* GitHub Button */}
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-4 py-3 rounded-2xl bg-neutral-800/80 hover:bg-neutral-700/80 border border-white/10 text-xs font-medium text-white transition-colors group"
          >
            <div className="flex items-center gap-2.5">
              <GithubIcon className="w-4 h-4 text-neutral-300 shrink-0" />
              <span>{contact.githubDisplay}</span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-neutral-500 text-center">
        {personal.name} • {personal.location}
      </div>
    </div>
  );
}
