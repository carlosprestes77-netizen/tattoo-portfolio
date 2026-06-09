'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { tattooDesigns, TattooDesign } from '../data/tattoos';
import { Maximize2, X, Compass } from 'lucide-react';
import Image from 'next/image';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedTattoo, setSelectedTattoo] = useState<TattooDesign | null>(null);

  const categories = [
    { id: 'all', name: 'Tudo' },
    { id: 'blackwork', name: 'Blackwork' },
    { id: 'geometry', name: 'Geométrico' },
    { id: 'fineline', name: 'Fine Line' },
    { id: 'disponivel', name: 'Disponíveis' },
  ];

  const filteredDesigns = activeFilter === 'all'
    ? tattooDesigns
    : tattooDesigns.filter(item => item.category === activeFilter);

  const handleWhatsAppInquiry = (tattoo: TattooDesign) => {
    const text = encodeURIComponent(`Olá! Gostaria de fazer um orçamento para a arte "${tattoo.title}" (${tattoo.size}).`);
    window.open(`https://wa.me/5544991373995?text=${text}`, '_blank');
  };

  return (
    <section id="portfolio" className="py-24 px-6 md:px-12 bg-ink-dark relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-sans text-gold-accent uppercase tracking-[0.3em] block mb-2">Exposição Virtual</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-text-white uppercase tracking-wider">
              Obras & Disponíveis
            </h2>
          </div>

          {/* Filter Navigation */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-5 py-2 font-sans text-xs tracking-widest uppercase transition-all duration-300 relative ${
                  activeFilter === cat.id
                    ? 'text-ink-black bg-gold-accent font-semibold'
                    : 'text-text-muted hover:text-text-white border border-gold-accent/10 hover:border-gold-accent/40 bg-transparent'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredDesigns.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="group relative cursor-pointer glass-card p-4 flex flex-col justify-between"
                onClick={() => setSelectedTattoo(item)}
              >
                {/* Image Wrap */}
                <div className="relative aspect-square w-full overflow-hidden bg-ink-black mb-4 border border-gold-accent/5">
                  <Image 
                    src={item.imageSrc} 
                    alt={item.title}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Maximize2 className="text-gold-accent scale-75 group-hover:scale-100 transition-transform duration-300" size={32} />
                  </div>
                  {item.category === 'disponivel' && (
                    <span className="absolute top-3 right-3 px-3 py-1 bg-blood-accent border border-blood-bright/20 text-[9px] uppercase tracking-widest text-text-white font-sans">
                      Disponível
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="flex justify-between items-start pt-2">
                  <div>
                    <h3 className="font-serif text-lg text-text-white group-hover:text-gold-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs text-text-muted font-sans mt-1">
                      {item.size} • {item.category.toUpperCase()}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox / Modal Detail View */}
        <AnimatePresence>
          {selectedTattoo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-ink-black/95 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setSelectedTattoo(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="bg-ink-charcoal border border-gold-accent/20 max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedTattoo(null)}
                  className="absolute top-4 right-4 z-10 text-text-muted hover:text-text-white transition-colors p-2 bg-ink-black/50 backdrop-blur"
                >
                  <X size={20} />
                </button>

                {/* Image Section */}
                <div className="relative aspect-square w-full bg-ink-black border-r border-gold-accent/5 flex items-center justify-center p-6">
                  <Image 
                    src={selectedTattoo.imageSrc} 
                    alt={selectedTattoo.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Details Section */}
                <div className="p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-sans text-gold-accent uppercase tracking-widest block mb-2">
                      {selectedTattoo.category.toUpperCase()}
                    </span>
                    <h3 className="font-serif text-3xl font-bold text-text-white mb-4">
                      {selectedTattoo.title}
                    </h3>
                    <div className="h-[1px] w-16 bg-gold-accent/20 mb-6" />
                    <p className="text-text-muted font-sans text-sm leading-relaxed mb-6">
                      {selectedTattoo.description}
                    </p>
                    <div className="space-y-2 text-xs font-sans text-text-muted">
                      <p><span className="text-gold-accent uppercase tracking-wider mr-2">Tamanho Ideal:</span> {selectedTattoo.size}</p>
                      <p><span className="text-gold-accent uppercase tracking-wider mr-2">Sessões:</span> 1-2 sessões dependendo do posicionamento</p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => handleWhatsAppInquiry(selectedTattoo)}
                      className="flex-1 py-3 bg-gold-accent text-ink-black hover:bg-gold-light font-sans font-semibold text-xs tracking-wider uppercase transition-colors duration-200 text-center"
                    >
                      Reservar Design
                    </button>
                    <a
                      href="#simulador"
                      onClick={() => {
                        setSelectedTattoo(null);
                        // Optional scrolling fallback or direct simulator target update
                      }}
                      className="flex-1 py-3 border border-text-white/20 hover:border-gold-accent text-text-white hover:text-gold-accent font-sans text-xs tracking-wider uppercase transition-colors duration-200 text-center flex items-center justify-center space-x-2"
                    >
                      <Compass size={14} />
                      <span>Ver no Simulador</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
