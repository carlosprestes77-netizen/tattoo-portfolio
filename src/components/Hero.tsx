'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-ink-black"
      id="hero"
    >
      {/* Background Ambient Light / Parallax Elements */}
      <motion.div 
        style={{ y: bgY, opacity }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        {/* Dark smoke gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-ink-black/60 to-ink-black" />
        
        {/* Decorative large golden monogram behind hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[40vw] font-bold text-gold-accent/[0.02] tracking-tighter select-none">
          TK
        </div>

        {/* Ambient red & gold lights */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blood-accent/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold-accent/5 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />

        {/* Thin luxury grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </motion.div>

      {/* Main Hero Content */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="inline-flex items-center space-x-2 px-3 py-1 bg-ink-charcoal border border-gold-accent/20 rounded-full text-[10px] uppercase tracking-[0.25em] text-gold-accent font-sans">
            <Sparkles size={12} />
            <span>Tatuador Autoral & Designer de Pele</span>
          </span>
        </motion.div>

        {/* Name */}
        <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl font-bold tracking-[0.15em] text-text-white mb-6 uppercase">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block"
          >
            Thiago
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-accent via-gold-muted to-gold-light glow-gold"
          >
            Kael
          </motion.span>
        </h1>

        {/* Short bio/philosophical hook */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="max-w-2xl text-text-muted text-sm md:text-lg tracking-wide leading-relaxed mb-10 font-sans font-light"
        >
          Onde a anatomia humana encontra o surrealismo abstrato e a precisão geométrica. Projetos de tatuagem exclusivos, criados sob medida para contar histórias definitivas.
        </motion.p>

        {/* Call to action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a 
            href="#portfolio"
            className="px-8 py-4 bg-gradient-to-r from-gold-accent to-gold-muted hover:from-gold-light hover:to-gold-accent text-ink-black font-sans font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 rounded-none text-center shadow-lg hover:shadow-gold-accent/20"
          >
            Ver Portfólio
          </a>
          <a 
            href="#simulador"
            className="px-8 py-4 border border-text-white/20 hover:border-gold-accent text-text-white hover:text-gold-accent font-sans text-xs tracking-[0.2em] uppercase transition-all duration-300 bg-transparent rounded-none text-center"
          >
            Simular Tatuagem
          </a>
        </motion.div>
      </motion.div>

      {/* Floating indicators / Scroll down */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-text-muted mb-2 font-sans">Scroll para Explorar</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold-accent to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ 
              y: ["-100%", "100%"] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
