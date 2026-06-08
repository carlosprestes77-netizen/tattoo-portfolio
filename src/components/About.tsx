'use client';

import { motion } from 'framer-motion';
import { Compass, Flame, ShieldCheck, Droplet, Sun, Eye } from 'lucide-react';

export default function About() {
  const aftercareSteps = [
    {
      icon: <ShieldCheck className="text-gold-accent" size={24} />,
      title: "1. Proteção Inicial",
      desc: "Mantenha o filme protetor plástico ou cicatrizante adesivo pelo tempo recomendado (geralmente de 2 a 24 horas dependendo da tecnologia usada)."
    },
    {
      icon: <Droplet className="text-gold-accent" size={24} />,
      title: "2. Higienização Suave",
      desc: "Lave a tatuagem delicadamente com água morna e sabonete neutro antisséptico. Seque com papel toalha descartável fazendo pressões suaves."
    },
    {
      icon: <Flame className="text-gold-accent" size={24} />,
      title: "3. Hidratação da Pele",
      desc: "Aplique uma camada fina de pomada cicatrizante recomendada 3 vezes ao dia. Evite excesso para que a pele respire livremente."
    },
    {
      icon: <Sun className="text-gold-accent" size={24} />,
      title: "4. Exposição Solar",
      desc: "Evite sol direto, piscina, mar, sauna e banhos excessivamente quentes pelos primeiros 15 dias. Use protetor solar apenas após cicatrização total."
    }
  ];

  return (
    <div className="bg-ink-black text-text-white">
      
      {/* Manifesto Section */}
      <section id="manifesto" className="py-24 px-6 md:px-12 relative overflow-hidden">
        {/* Subtle grid and glows */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_50%_50%_at_50%_-10%,rgba(212,175,55,0.03),transparent_100%)] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="text-xs font-sans text-gold-accent uppercase tracking-[0.3em] block mb-2">Filosofia de Arte</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold uppercase tracking-wider mb-6">
              Manifesto Autoral
            </h2>
            <div className="w-16 h-[2px] bg-gold-accent mx-auto mb-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-6 font-serif text-lg md:text-2xl text-text-muted leading-relaxed max-w-4xl"
          >
            <p>
              &ldquo;Não vejo a pele apenas como uma tela estática, mas como uma topografia em movimento. Uma linha não deve apenas preencher um espaço; ela deve acompanhar a anatomia, o ritmo da respiração e a fluidez orgânica do corpo.&rdquo;
            </p>
            <p className="text-gold-accent font-sans text-xs tracking-[0.25em] uppercase font-bold pt-4">
              — Thiago Kael, Fundador do Conceito
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Details grid */}
      <section className="py-16 px-6 md:px-12 bg-ink-dark/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 flex flex-col space-y-4"
          >
            <div className="w-12 h-12 rounded-full bg-gold-accent/5 border border-gold-accent/20 flex items-center justify-center mb-2">
              <Compass className="text-gold-accent" size={20} />
            </div>
            <h3 className="font-serif text-xl text-text-white font-semibold">Ergonomia & Anatomia</h3>
            <p className="text-sm text-text-muted font-sans leading-relaxed">
              Cada design é desenhado à mão diretamente no corpo ou projetado para se integrar aos músculos e curvaturas do cliente, garantindo harmonia estética perfeita.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 flex flex-col space-y-4"
          >
            <div className="w-12 h-12 rounded-full bg-gold-accent/5 border border-gold-accent/20 flex items-center justify-center mb-2">
              <Eye className="text-gold-accent" size={20} />
            </div>
            <h3 className="font-serif text-xl text-text-white font-semibold">Identidade Única</h3>
            <p className="text-sm text-text-muted font-sans leading-relaxed">
              Trabalho estritamente autoral. Thiago Kael não realiza cópias de trabalhos alheios ou repetições de artes já executadas. Cada traço é exclusivo.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 flex flex-col space-y-4"
          >
            <div className="w-12 h-12 rounded-full bg-gold-accent/5 border border-gold-accent/20 flex items-center justify-center mb-2">
              <Flame className="text-gold-accent" size={20} />
            </div>
            <h3 className="font-serif text-xl text-text-white font-semibold">Técnica Avançada</h3>
            <p className="text-sm text-text-muted font-sans leading-relaxed">
              Uso de pigmentos premium de origem orgânica e vegana certificados pela ANVISA. Agulhas importadas de precisão cirúrgica e cicatrização acelerada.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Aftercare Guide Section */}
      <section id="cuidados" className="py-24 px-6 md:px-12 bg-ink-black border-t border-gold-accent/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-xs font-sans text-gold-accent uppercase tracking-[0.3em] block mb-2">Preservação da Arte</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-white uppercase tracking-wider mb-4">
              Cuidados Pós-Tatuagem
            </h2>
            <p className="max-w-xl mx-auto text-sm text-text-muted font-sans leading-relaxed">
              O resultado final depende 50% do cuidado de cicatrização nas primeiras semanas. Siga atentamente as diretrizes clínicas de saúde e assepsia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aftercareSteps.map((step, idx) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                key={idx}
                className="bg-ink-dark p-6 border border-white/5 flex flex-col space-y-4"
              >
                <div className="w-10 h-10 rounded-full bg-gold-accent/5 flex items-center justify-center border border-gold-accent/10">
                  {step.icon}
                </div>
                <h3 className="font-serif text-lg text-text-white font-semibold">{step.title}</h3>
                <p className="text-xs text-text-muted font-sans leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
