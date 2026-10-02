'use client';

import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2, MessageSquare, Scroll, Beer } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const Contact: React.FC = () => {
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
    <section id="contato" className="py-20 relative bg-[#0c0c14] border-b-4 border-amber-600/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-3 py-1 bg-slate-900 border-2 border-amber-500 text-amber-400 font-pixel text-xl uppercase mb-2">
            // PONTO DE ENCONTRO
          </div>
          <h2 className="text-5xl sm:text-6xl font-pixel font-bold text-amber-400 tracking-wider">
            Correio do Aventureiro
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl mx-auto font-sans">
            Envie uma missiva para novas alianças, novas missões e propostas técnicas ou desenvolvimento de projetos.
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-3" />
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Info Column */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-pixel font-bold text-amber-300 mb-3 flex items-center gap-2">
                <Beer className="w-5 h-5 text-amber-400" />
                <span>Canais do Aventureiro</span>
              </h3>
              <p className="text-slate-300 text-sm font-sans leading-relaxed mb-6">
                Estabeleça contato direto através das redes de comunicação ou acompanhe as forjas no GitHub.
              </p>

              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/in/felipe-paes-da-silva-44b461318"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 bg-slate-900 border-2 border-amber-600 text-slate-200 hover:bg-amber-500 hover:text-black transition-none shadow-[4px_4px_0px_#000]"
                >
                  <div className="p-2 bg-slate-950 border border-amber-500 text-amber-400">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-amber-400 font-pixel uppercase">[ PERFIL PROFISSIONAL ]</div>
                    <div className="text-base font-pixel text-slate-100">Felipe Paes da Silva</div>
                  </div>
                </a>

                <a
                  href="https://github.com/fehhpaes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 bg-slate-900 border-2 border-slate-700 text-slate-200 hover:bg-slate-800 transition-none shadow-[4px_4px_0px_#000]"
                >
                  <div className="p-2 bg-slate-950 border border-slate-700 text-slate-300">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-pixel uppercase">[ REPOSITÓRIOS / FORJA ]</div>
                    <div className="text-base font-pixel text-slate-100">@fehhpaes</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 bg-slate-900 border-2 border-emerald-600 text-slate-200 shadow-[4px_4px_0px_#000]">
                  <div className="p-2 bg-slate-950 border border-emerald-500 text-emerald-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-emerald-400 font-pixel uppercase">[ MENSAGEIRO REAL ]</div>
                    <div className="text-base font-pixel text-slate-200">Despacho SMTP / Nodemailer</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3.5 bg-slate-900 border-2 border-slate-800 text-xs font-pixel text-amber-400">
              STATUS: PRONTO PARA RECEBER MISSIVAS
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 bg-slate-900 border-4 border-amber-500 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)]">
              
              {/* Success State */}
              {status === 'success' && (
                <div className="mb-5 p-3.5 bg-slate-950 border-2 border-emerald-500 text-emerald-300 flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-pixel text-lg font-bold uppercase">Missiva enviada com sucesso!</h5>
                    <p className="text-xs font-sans text-slate-300 mt-0.5">
                      Sua mensagem chegou à Taverna. Responderei em breve.
                    </p>
                  </div>
                </div>
              )}

              {/* Error State */}
              {status === 'error' && (
                <div className="mb-5 p-3.5 bg-slate-950 border-2 border-red-500 text-red-300 flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-pixel text-lg font-bold uppercase">Falha na entrega da missiva</h5>
                    <p className="text-xs font-sans text-slate-300 mt-0.5">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-base font-pixel uppercase tracking-wider text-amber-400 mb-1">
                    Nome do Aventureiro
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border-2 border-slate-700 text-slate-200 placeholder-slate-600 text-sm font-sans focus:outline-none focus:border-amber-500 transition-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-base font-pixel uppercase tracking-wider text-amber-400 mb-1">
                    Pergaminho de Contato (E-mail)
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu.email@dominio.com"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border-2 border-slate-700 text-slate-200 placeholder-slate-600 text-sm font-sans focus:outline-none focus:border-amber-500 transition-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-base font-pixel uppercase tracking-wider text-amber-400 mb-1">
                    Conteúdo da Missiva
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva sua proposta, projeto ou missão..."
                    className="w-full px-3.5 py-2.5 bg-slate-950 border-2 border-slate-700 text-slate-200 placeholder-slate-600 text-sm font-sans focus:outline-none focus:border-amber-500 transition-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-700 text-white font-pixel text-2xl uppercase border-2 border-emerald-500 hover:bg-emerald-600 hover:text-amber-200 shadow-[4px_4px_0px_#000] transition-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:translate-y-0.5"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>ENVIANDO MENSAGEIRO...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>DESPACHAR MISSIVA</span>
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

export default Contact;
