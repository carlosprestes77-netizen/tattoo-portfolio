import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import BriefingForm from '@/components/BriefingForm';
import Footer from '@/components/Footer';

// Load Konva simulator on client-side only (prevents window is not defined SSR errors)
const TattooSimulator = dynamic(() => import('@/components/TattooSimulator'), {
  ssr: false,
  loading: () => (
    <div className="py-24 text-center text-text-muted font-sans text-xs uppercase tracking-widest bg-ink-black border-t border-gold-accent/10">
      Carregando Simulador Interativo...
    </div>
  ),
});

export default function Home() {
  return (
    <main className="relative bg-ink-black min-h-screen text-text-white selection:bg-gold-accent selection:text-ink-black">
      {/* Premium background grid overlay across the whole site */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[radial-gradient(circle_at_top,transparent_0%,rgba(11,11,11,0.95)_100%)]" />
      
      <Header />
      <Hero />
      <About />
      <Gallery />
      <TattooSimulator />
      <BriefingForm />
      <Footer />
    </main>
  );
}
