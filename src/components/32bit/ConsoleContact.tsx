'use client';

import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2, HardDrive, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ConsoleContact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Falha ao despachar mensagem. Tente novamente.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage('Ocorreu um erro inesperado.');
      }
    }
  };

  return (
    <section id="contato" className="py-12 border-b-4 border-slate-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-6 flex items-center justify-between pb-2 border-b-2 border-blue-400/40 text-yellow-300 font-pixel text-xl drop-shadow-[2px_2px_0px_#000]">
          <span className="flex items-center gap-2">
            <HardDrive className="w-5 h-5 text-yellow-300" /> MEMORY TRANSMITTER • CORRESPONDENCE
          </span>
          <span className="text-cyan-300 text-sm">[ STATUS: ONLINE ]</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Official Channels Column */}
          <div className="lg:col-span-5 space-y-3 font-pixel">
            <div className="bg-gradient-to-b from-[#0a256b] via-[#081b4f] to-[#040d2b] border-4 border-t-white border-l-white border-r-slate-500 border-b-slate-600 p-5 shadow-[6px_6px_0px_#000]">
              <h3 className="text-xl text-yellow-300 font-bold mb-3 flex items-center gap-2 drop-shadow-[1px_1px_0px_#000]">
                <MessageSquare className="w-5 h-5 text-yellow-300" />
                <span>Canais do Aventureiro</span>
              </h3>
              <p className="text-xs text-slate-200 font-sans leading-relaxed mb-4">
                Envie uma mensagem direta via LinkedIn ou acompanhe os repositórios técnicos no GitHub.
              </p>

              <div className="space-y-2.5">
                <a
                  href="https://www.linkedin.com/in/felipe-paes-da-silva-44b461318"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-[#091533] border-2 border-t-blue-400 border-l-blue-400 border-r-blue-950 border-b-blue-950 text-white hover:bg-blue-800 transition-none"
                >
                  <div className="p-1.5 bg-blue-950 border border-blue-400 text-yellow-300">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-yellow-300 uppercase">[ PERFIL PROFISSIONAL ]</div>
                    <div className="text-sm font-bold text-white">Felipe Paes da Silva</div>
                  </div>
                </a>

                <a
                  href="https://github.com/fehhpaes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-[#091533] border-2 border-t-slate-500 border-l-slate-500 border-r-slate-950 border-b-slate-950 text-white hover:bg-slate-800 transition-none"
                >
                  <div className="p-1.5 bg-slate-950 border border-slate-600 text-slate-200">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase">[ REPOSITÓRIOS ]</div>
                    <div className="text-sm font-bold text-white">@fehhpaes</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-gradient-to-b from-[#0a256b] via-[#081b4f] to-[#040d2b] border-4 border-t-white border-l-white border-r-slate-500 border-b-slate-600 p-6 shadow-[6px_6px_0px_#000]">
              
              {/* Success State */}
              {status === 'success' && (
                <div className="mb-4 p-3 bg-blue-950 border-2 border-emerald-400 text-emerald-300 flex items-start gap-2 font-pixel text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">[ SUCESSO: MENSAGEM GRAVADA ]</span>
                    Sua missiva foi salva no Memory Card. Responderei em breve.
                  </div>
                </div>
              )}

              {/* Error State */}
              {status === 'error' && (
                <div className="mb-4 p-3 bg-blue-950 border-2 border-red-400 text-red-300 flex items-start gap-2 font-pixel text-base">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">[ ERRO NO ENVIO ]</span>
                    {errorMessage}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="console-name" className="block font-pixel text-lg uppercase text-yellow-300 mb-1 drop-shadow-[1px_1px_0px_#000]">
                    Nome do Jogador / Contato
                  </label>
                  <input
                    id="console-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="w-full px-3.5 py-2 bg-[#050b1c] border-2 border-t-blue-950 border-l-blue-950 border-r-blue-400 border-b-blue-400 text-white placeholder-slate-500 text-sm font-sans focus:outline-none focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label htmlFor="console-email" className="block font-pixel text-lg uppercase text-yellow-300 mb-1 drop-shadow-[1px_1px_0px_#000]">
                    Endereço de E-mail
                  </label>
                  <input
                    id="console-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu.email@dominio.com"
                    className="w-full px-3.5 py-2 bg-[#050b1c] border-2 border-t-blue-950 border-l-blue-950 border-r-blue-400 border-b-blue-400 text-white placeholder-slate-500 text-sm font-sans focus:outline-none focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label htmlFor="console-message" className="block font-pixel text-lg uppercase text-yellow-300 mb-1 drop-shadow-[1px_1px_0px_#000]">
                    Mensagem / Proposta de Projeto
                  </label>
                  <textarea
                    id="console-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva os detalhes da proposta ou missão..."
                    className="w-full px-3.5 py-2 bg-[#050b1c] border-2 border-t-blue-950 border-l-blue-950 border-r-blue-400 border-b-blue-400 text-white placeholder-slate-500 text-sm font-sans focus:outline-none focus:border-yellow-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-700 text-white font-pixel text-2xl uppercase border-2 border-t-white border-l-white border-r-blue-950 border-b-blue-950 hover:bg-blue-600 active:translate-y-0.5 drop-shadow-[2px_2px_0px_#000] transition-none disabled:opacity-50 cursor-pointer"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>GRAVANDO DADOS...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>DESPACHAR MENSAGEM</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ConsoleContact;
