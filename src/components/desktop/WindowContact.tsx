'use client';

import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const WindowContact: React.FC = () => {
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
    <section id="contato" className="my-6">
      {/* Mail Window Container */}
      <div className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-black border-b-black p-1 shadow-[3px_3px_0px_#000]">
        
        {/* Title Bar */}
        <div className="bg-[#000080] text-white px-2 py-1 flex items-center justify-between font-sans text-xs font-bold select-none">
          <div className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-white" />
            <span>Outlook Express - Nova Mensagem de Correio</span>
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

        <div className="p-4 bg-[#c0c0c0] border-2 border-t-black border-l-black border-r-white border-b-white text-xs font-sans text-black">
          
          {/* Success State */}
          {status === 'success' && (
            <div className="mb-3 p-2 bg-emerald-100 border border-emerald-500 text-emerald-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Sua mensagem foi despachada para a caixa de correio com sucesso!</span>
            </div>
          )}

          {/* Error State */}
          {status === 'error' && (
            <div className="mb-3 p-2 bg-red-100 border border-red-500 text-red-900 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-700 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
            
            {/* Form */}
            <div className="lg:col-span-8">
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="flex items-center gap-2">
                  <label htmlFor="win-name" className="w-24 font-bold text-slate-800">
                    De (Nome):
                  </label>
                  <input
                    id="win-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="flex-1 px-2 py-1 bg-white border border-t-black border-l-black border-r-white border-b-white text-black text-xs font-sans focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <label htmlFor="win-email" className="w-24 font-bold text-slate-800">
                    E-mail:
                  </label>
                  <input
                    id="win-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu.email@dominio.com"
                    className="flex-1 px-2 py-1 bg-white border border-t-black border-l-black border-r-white border-b-white text-black text-xs font-sans focus:outline-none"
                  />
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <label htmlFor="win-message" className="w-24 font-bold text-slate-800 pt-1">
                    Mensagem:
                  </label>
                  <textarea
                    id="win-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escreva sua mensagem ou proposta de software..."
                    className="flex-1 p-2 bg-white border border-t-black border-l-black border-r-white border-b-white text-black text-xs font-sans focus:outline-none resize-none"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex items-center gap-1.5 px-6 py-1.5 bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-black border-b-black font-bold text-black hover:bg-[#d0d0d0] active:border-t-black active:border-l-black active:border-r-white active:border-b-white cursor-pointer disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Enviar Mensagem</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Direct Links Column */}
            <div className="lg:col-span-4 p-3 bg-white border border-slate-400 space-y-2">
              <span className="font-bold text-slate-900 block border-b border-slate-300 pb-1">
                Atalhos Rápidos:
              </span>
              
              <a
                href="https://www.linkedin.com/in/felipe-paes-da-silva-44b461318"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-1.5 bg-[#f0f0f0] border border-slate-300 text-black hover:bg-[#e0e0e0]"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-800" />
                <span>Perfil no LinkedIn</span>
              </a>

              <a
                href="https://github.com/fehhpaes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-1.5 bg-[#f0f0f0] border border-slate-300 text-black hover:bg-[#e0e0e0]"
              >
                <GithubIcon className="w-4 h-4 text-slate-800" />
                <span>Repositórios GitHub</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WindowContact;
