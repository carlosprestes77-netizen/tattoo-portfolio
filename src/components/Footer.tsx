'use client';

import { Mail, MapPin, Phone, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink-black border-t border-gold-accent/10 py-16 px-6 md:px-12 relative overflow-hidden">
      {/* Abstract dark ambient glow */}
      <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-blood-accent/5 rounded-full blur-[120px]" />
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-gold-accent/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        {/* Branding */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <span className="font-serif text-3xl font-bold tracking-[0.2em] text-text-white">
              KAEL
            </span>
            <span className="text-[10px] uppercase tracking-[0.5em] text-gold-accent -mt-1 pl-[2px]">
              Tattoo Art
            </span>
          </div>
          <p className="text-text-muted text-sm leading-relaxed max-w-xs font-sans">
            Arte na pele inspirada no surrealismo, geometria sagrada e a fluidez orgânica do corpo humano.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-serif text-lg text-gold-accent tracking-widest uppercase mb-6">Navegação</h4>
          <ul className="space-y-3 font-sans text-sm">
            <li>
              <a href="#manifesto" className="text-text-muted hover:text-text-white transition-colors duration-200">
                Manifesto
              </a>
            </li>
            <li>
              <a href="#portfolio" className="text-text-muted hover:text-text-white transition-colors duration-200">
                Portfólio
              </a>
            </li>
            <li>
              <a href="#simulador" className="text-text-muted hover:text-text-white transition-colors duration-200">
                Simulador
              </a>
            </li>
            <li>
              <a href="#cuidados" className="text-text-muted hover:text-text-white transition-colors duration-200">
                Cuidados Pós
              </a>
            </li>
            <li>
              <a href="#briefing" className="text-text-muted hover:text-text-white transition-colors duration-200">
                Orçamento
              </a>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="font-serif text-lg text-gold-accent tracking-widest uppercase mb-6">Estúdio</h4>
          <ul className="space-y-4 font-sans text-sm">
            <li className="flex items-start space-x-3 text-text-muted">
              <MapPin size={18} className="text-gold-accent shrink-0 mt-0.5" />
              <span>Alameda Lorena, Jardins — São Paulo, SP</span>
            </li>
            <li className="flex items-center space-x-3 text-text-muted">
              <Phone size={18} className="text-gold-accent shrink-0" />
              <span>+55 (11) 99999-8888</span>
            </li>
            <li className="flex items-center space-x-3 text-text-muted">
              <Mail size={18} className="text-gold-accent shrink-0" />
              <span>contato@thiagokael.com</span>
            </li>
          </ul>
        </div>

        {/* Opening Hours & Safety badge */}
        <div>
          <h4 className="font-serif text-lg text-gold-accent tracking-widest uppercase mb-6">Atendimento</h4>
          <p className="text-text-muted text-sm leading-relaxed mb-4 font-sans">
            Terça a Sábado: 11h às 20h<br />
            Apenas com agendamento prévio.
          </p>
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-ink-charcoal border border-gold-accent/20 rounded-sm">
            <Shield size={14} className="text-gold-accent" />
            <span className="text-[10px] uppercase tracking-wider text-gold-accent font-sans">100% Esterilizado & Seguro</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gold-accent/5 flex flex-col md:flex-row justify-between items-center text-xs text-text-muted font-sans gap-4">
        <p>&copy; {new Date().getFullYear()} Thiago Kael. Todos os direitos reservados.</p>
        <p className="flex items-center space-x-1">
          <span>Inspirado em estúdios de alto padrão do Brasil.</span>
        </p>
      </div>
    </footer>
  );
}
