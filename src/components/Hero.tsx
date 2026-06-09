'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax zoom and movement for the background image
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [0.4, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-ink"
      id="hero"
    >
      {/* Background Image Parallax with Dark Overlay */}
      <motion.div 
        style={{ scale: bgScale, opacity: bgOpacity }}
        className="absolute inset-0 z-0 select-none"
      >
        <Image 
          src="/tattoo-portfolio/images/tattoo8.jpg" 
          alt="DW Tattoo Portrait Background"
          fill
          priority
          className="object-cover object-center filter grayscale contrast-125"
        />
        {/* Luxury gradient mask to ensure readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/40" />
      </motion.div>

      {/* Thin luxury grid lines overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Main Hero Content */}
      <motion.div 
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center h-full"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-flex items-center space-x-2 px-4 py-1.5 bg-ink-warm/80 backdrop-blur-sm border border-gold/20 rounded-none text-[10px] uppercase tracking-[0.3em] text-gold font-sans font-medium">
            <Sparkles size={12} className="text-gold" />
            <span>Tatuagem Autoral & Realismo Artístico</span>
          </span>
        </motion.div>

        {/* Clean, Non-Overlapping Title */}
        <div className="mb-8 flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-7xl md:text-9xl font-bold tracking-[0.1em] text-paper-50 leading-tight uppercase glow-gold"
          >
            DW
          </motion.h1>
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xs md:text-sm font-sans tracking-[0.5em] uppercase text-gold/90 font-semibold mt-2 block"
          >
            T A T T O O E R
          </motion.span>
        </div>

        {/* Horizontal Divider */}
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-[1px] bg-gold/30 mb-8"
        />

        {/* Short bio/philosophical hook */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-2xl text-paper-200 text-sm md:text-base tracking-widest leading-relaxed mb-12 font-sans font-light"
        >
          Transpondo a precisão das artes clássicas, esculturas e realismo sombrio para a anatomia humana. Projetos sob medida e exclusivos de alto padrão.
        </motion.p>

        {/* Call to action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a 
            href="#portfolio"
            className="px-10 py-4 bg-gold hover:bg-gold-light text-ink font-sans font-bold text-[11px] tracking-[0.25em] uppercase transition-all duration-300 rounded-none text-center shadow-lg shadow-gold/10"
          >
            Ver Portfólio
          </a>
          <a 
            href="#simulador"
            className="px-10 py-4 border border-paper-100/20 hover:border-gold text-paper-50 hover:text-gold font-sans text-[11px] tracking-[0.25em] uppercase transition-all duration-300 bg-transparent rounded-none text-center"
          >
            Simular Tatuagem
          </a>
        </motion.div>
      </motion.div>

      {/* Floating indicators / Scroll down */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-paper-300 mb-2 font-sans opacity-70">Scroll para Explorar</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gold to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ 
              y: ["-100%", "100%"] 
            }}
            transition={{ 
              duration: 2.2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-paper-50"
          />
        </div>
      </motion.div>
    </section>
  );
}
