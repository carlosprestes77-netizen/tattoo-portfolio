'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function BriefingForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    localCorpo: '',
    tamanho: '',
    pigmento: 'preto',
    conceito: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format briefing message
    const message = `*Briefing de Nova Tatuagem - Thiago Kael*\n\n` +
      `*Nome:* ${formData.nome}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*WhatsApp:* ${formData.whatsapp}\n` +
      `*Local do Corpo:* ${formData.localCorpo}\n` +
      `*Tamanho Estimado:* ${formData.tamanho} cm\n` +
      `*Cor do Pigmento:* ${formData.pigmento.toUpperCase()}\n\n` +
      `*Conceito do Projeto:*\n${formData.conceito}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5511999998888?text=${encodedMessage}`;

    // Redirect to WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section id="briefing" className="py-24 px-6 md:px-12 bg-ink-dark relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-sans text-gold-accent uppercase tracking-[0.3em] block mb-2">Processo de Criação</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-white uppercase tracking-wider mb-4">
            Briefing & Agendamento
          </h2>
          <p className="max-w-xl mx-auto text-sm text-text-muted font-sans leading-relaxed">
            Projetos autorais exclusivos demandam planejamento. Envie sua ideia preenchendo o formulário abaixo para iniciarmos o desenvolvimento do seu desenho.
          </p>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-12 space-y-8 border border-gold-accent/15">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Nome */}
            <div>
              <label className="block text-[10px] font-sans text-gold-accent uppercase tracking-widest mb-2">Nome Completo</label>
              <input
                type="text"
                name="nome"
                required
                value={formData.nome}
                onChange={handleChange}
                placeholder="Ex: Carlos Prestes"
                className="w-full bg-ink-black border border-white/10 focus:border-gold-accent text-text-white px-4 py-3 text-sm font-sans focus:outline-none transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[10px] font-sans text-gold-accent uppercase tracking-widest mb-2">E-mail de Contato</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Ex: carlos@example.com"
                className="w-full bg-ink-black border border-white/10 focus:border-gold-accent text-text-white px-4 py-3 text-sm font-sans focus:outline-none transition-colors"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label className="block text-[10px] font-sans text-gold-accent uppercase tracking-widest mb-2">WhatsApp / Telefone</label>
              <input
                type="tel"
                name="whatsapp"
                required
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="Ex: (11) 99999-9999"
                className="w-full bg-ink-black border border-white/10 focus:border-gold-accent text-text-white px-4 py-3 text-sm font-sans focus:outline-none transition-colors"
              />
            </div>

            {/* Local do Corpo */}
            <div>
              <label className="block text-[10px] font-sans text-gold-accent uppercase tracking-widest mb-2">Local do Corpo</label>
              <input
                type="text"
                name="localCorpo"
                required
                value={formData.localCorpo}
                onChange={handleChange}
                placeholder="Ex: Antebraço esquerdo, Costas..."
                className="w-full bg-ink-black border border-white/10 focus:border-gold-accent text-text-white px-4 py-3 text-sm font-sans focus:outline-none transition-colors"
              />
            </div>

            {/* Tamanho Estimado */}
            <div>
              <label className="block text-[10px] font-sans text-gold-accent uppercase tracking-widest mb-2">Tamanho Estimado (em cm)</label>
              <input
                type="text"
                name="tamanho"
                required
                value={formData.tamanho}
                onChange={handleChange}
                placeholder="Ex: 15 cm"
                className="w-full bg-ink-black border border-white/10 focus:border-gold-accent text-text-white px-4 py-3 text-sm font-sans focus:outline-none transition-colors"
              />
            </div>

            {/* Pigmento / Cor */}
            <div>
              <label className="block text-[10px] font-sans text-gold-accent uppercase tracking-widest mb-2">Pigmento</label>
              <select
                name="pigmento"
                value={formData.pigmento}
                onChange={handleChange}
                className="w-full bg-ink-black border border-white/10 focus:border-gold-accent text-text-white px-4 py-3 text-sm font-sans focus:outline-none transition-colors"
              >
                <option value="preto">Somente Preto / Blackwork</option>
                <option value="detalhe-vermelho">Preto com Detalhes em Vermelho</option>
                <option value="colorido">Colorido Autoral</option>
              </select>
            </div>

          </div>

          {/* Conceito */}
          <div>
            <label className="block text-[10px] font-sans text-gold-accent uppercase tracking-widest mb-2">Conceito e Significado do Desenho</label>
            <textarea
              name="conceito"
              required
              rows={5}
              value={formData.conceito}
              onChange={handleChange}
              placeholder="Descreva detalhadamente a sua ideia, elementos desejados, referências visuais e a história por trás do projeto..."
              className="w-full bg-ink-black border border-white/10 focus:border-gold-accent text-text-white px-4 py-3 text-sm font-sans focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex flex-col items-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-gold-accent to-gold-muted hover:from-gold-light hover:to-gold-accent text-ink-black font-sans font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50"
            >
              <span>{isSubmitting ? 'Enviando...' : 'Enviar Briefing via WhatsApp'}</span>
              <Send size={14} />
            </button>
            <span className="text-[10px] text-text-muted font-sans mt-3 text-center">
              Você será redirecionado para o WhatsApp com o briefing formatado.
            </span>
          </div>

        </form>

      </div>
    </section>
  );
}
