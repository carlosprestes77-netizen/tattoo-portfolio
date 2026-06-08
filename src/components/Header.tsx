'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Mail } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Manifesto', href: '#manifesto' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Simulador', href: '#simulador' },
    { name: 'Cuidados', href: '#cuidados' },
    { name: 'Briefing', href: '#briefing' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-4 glass-panel shadow-lg border-b border-gold-accent/10' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="group flex flex-col">
            <span className="font-serif text-2xl md:text-3xl font-bold tracking-[0.2em] text-text-white group-hover:text-gold-accent transition-colors duration-300">
              KAEL
            </span>
            <span className="text-[8px] uppercase tracking-[0.5em] text-gold-accent -mt-1 pl-[2px] font-sans">
              Tattoo Art
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm tracking-widest uppercase text-text-muted hover:text-gold-accent transition-colors duration-300 relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Social and CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-muted hover:text-gold-accent transition-colors duration-300"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="#briefing" 
              className="px-6 py-2 border border-gold-accent/40 text-gold-accent hover:bg-gold-accent hover:text-ink-black font-sans text-xs tracking-widest uppercase transition-all duration-300 rounded-none bg-transparent"
            >
              Agendar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-text-white hover:text-gold-accent transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ink-black/95 backdrop-blur-lg flex flex-col justify-center items-center md:hidden"
          >
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-3xl tracking-wider text-text-white hover:text-gold-accent transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="h-[1px] w-24 bg-gold-accent/20 my-4" />
              
              <div className="flex space-x-6">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-gold-accent"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="mailto:contato@thiagokael.com"
                  className="text-text-muted hover:text-gold-accent"
                >
                  <Mail size={24} />
                </a>
              </div>

              <a 
                href="#briefing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-6 px-8 py-3 border border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-ink-black font-sans text-sm tracking-widest uppercase transition-all duration-300"
              >
                Solicitar Orçamento
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
