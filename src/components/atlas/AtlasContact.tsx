'use client';

import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const AtlasContact: React.FC = () => {
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
    <section id="contato" className="py-16 border-b border-stone-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-serif uppercase tracking-widest text-amber-900 font-semibold block mb-1">
            // SEÇÃO IV
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 font-normal">
            Correspondência & Contato
          </h2>
          <p className="font-serif italic text-stone-600 text-sm mt-1">
            Para propostas técnicas, diálogos acadêmicos e projetos de software
          </p>
          <div className="w-16 h-px bg-amber-900/60 mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Channels Column */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif text-xl text-stone-900 font-medium mb-3">
              Canais Oficiais
            </h3>
            <p className="text-sm text-stone-600 font-sans leading-relaxed mb-6">
              Para contato profissional imediato, utilize as plataformas abaixo ou despache uma mensagem direta pelo formulário.
            </p>

            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/felipe-paes-da-silva-44b461318"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 bg-stone-100/80 border border-stone-300 text-stone-800 hover:bg-stone-200 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-amber-900" />
                <div>
                  <div className="text-[10px] font-serif uppercase tracking-wider text-stone-500">Rede Profissional</div>
                  <div className="text-sm font-sans font-medium text-stone-900">Felipe Paes da Silva</div>
                </div>
              </a>

              <a
                href="https://github.com/fehhpaes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 bg-stone-100/80 border border-stone-300 text-stone-800 hover:bg-stone-200 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-stone-700" />
                <div>
                  <div className="text-[10px] font-serif uppercase tracking-wider text-stone-500">Repositórios de Código</div>
                  <div className="text-sm font-sans font-medium text-stone-900">@fehhpaes</div>
                </div>
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 bg-stone-100/80 border border-stone-300">
              
              {/* Success State */}
              {status === 'success' && (
                <div className="mb-4 p-3 bg-stone-50 border border-emerald-700 text-emerald-900 flex items-start gap-2 text-xs font-sans">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block font-serif">Correspondência despachada</span>
                    Registro gravado com sucesso. Retornarei em breve.
                  </div>
                </div>
              )}

              {/* Error State */}
              {status === 'error' && (
                <div className="mb-4 p-3 bg-stone-50 border border-red-700 text-red-900 flex items-start gap-2 text-xs font-sans">
                  <AlertCircle className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block font-serif">Falha no envio</span>
                    {errorMessage}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                <div>
                  <label htmlFor="atlas-name" className="block font-serif text-stone-700 uppercase tracking-wider mb-1">
                    Nome Completo
                  </label>
                  <input
                    id="atlas-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-900"
                  />
                </div>

                <div>
                  <label htmlFor="atlas-email" className="block font-serif text-stone-700 uppercase tracking-wider mb-1">
                    Endereço de E-mail
                  </label>
                  <input
                    id="atlas-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu.email@dominio.com"
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-900"
                  />
                </div>

                <div>
                  <label htmlFor="atlas-message" className="block font-serif text-stone-700 uppercase tracking-wider mb-1">
                    Mensagem / Correspondência
                  </label>
                  <textarea
                    id="atlas-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escreva sua mensagem ou detalhes do projeto..."
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-900 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-amber-900 text-stone-50 font-serif text-sm hover:bg-amber-800 transition-colors cursor-pointer disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Despachando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Despachar Mensagem</span>
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

export default AtlasContact;
