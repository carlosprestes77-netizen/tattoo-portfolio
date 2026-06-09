export interface TattooDesign {
  id: string;
  title: string;
  category: 'blackwork' | 'geometry' | 'fineline' | 'disponivel';
  imageSrc: string; // Path to public images
  description: string;
  size: string;
}

export const tattooDesigns: TattooDesign[] = [
  {
    id: 'design-1',
    title: 'Retrato Feminino Sombrio',
    category: 'blackwork',
    imageSrc: '/images/tattoo1.jpg',
    description: 'Estudo em realismo sombrio com transições suaves de cinza e alto contraste.',
    size: '18x12 cm'
  },
  {
    id: 'design-2',
    title: 'Querubim em Oração',
    category: 'fineline',
    imageSrc: '/images/tattoo2.jpg',
    description: 'Trabalho delicado com pontilhismo e traço fino representando a fé e proteção.',
    size: '15x12 cm'
  },
  {
    id: 'design-3',
    title: 'Fechamento Sacro - Jesus & Cruz',
    category: 'blackwork',
    imageSrc: '/images/tattoo3.jpg',
    description: 'Projeto de fechamento de braço completo integrando elementos religiosos clássicos.',
    size: 'Fechamento'
  },
  {
    id: 'design-4',
    title: 'Sagrado Coração Contemporâneo',
    category: 'blackwork',
    imageSrc: '/images/tattoo4.jpg',
    description: 'Fusão artística de retratos sacros divididos por linhas e molduras estruturadas.',
    size: '22x14 cm'
  },
  {
    id: 'design-5',
    title: 'Gojo Satoru (Jujutsu Kaisen)',
    category: 'fineline',
    imageSrc: '/images/tattoo5.jpg',
    description: 'Trabalho de traço fino de anime integrando kanjis japoneses e hachuras.',
    size: '15x10 cm'
  },
  {
    id: 'design-6',
    title: 'Leoa & Filhote com Floral',
    category: 'disponivel',
    imageSrc: '/images/tattoo6.jpg',
    description: 'Projeto Autoral Disponível. Símbolo de maternidade, força e proteção familiar.',
    size: '16x11 cm'
  },
  {
    id: 'design-7',
    title: 'Guerreira da Coroa de Espinhos',
    category: 'disponivel',
    imageSrc: '/images/tattoo7.jpg',
    description: 'Projeto Autoral Disponível. Elementos medievais, coroa de espinhos e adaga clássica.',
    size: '20x12 cm'
  },
  {
    id: 'design-8',
    title: 'Estátua Grega Fragmentada',
    category: 'geometry',
    imageSrc: '/images/tattoo8.jpg',
    description: 'Realismo de escultura clássica grega integrada com traços geométricos modernos.',
    size: '16x16 cm'
  },
  {
    id: 'design-9',
    title: 'Mulher com Headpiece de Tigre',
    category: 'disponivel',
    imageSrc: '/images/tattoo9.jpg',
    description: 'Projeto Autoral Disponível. Mistura de realismo retrato com elementos da natureza selvagem.',
    size: '22x15 cm'
  },
  {
    id: 'design-10',
    title: 'Fechamento de Ramo de Rosas',
    category: 'fineline',
    imageSrc: '/images/tattoo10.jpg',
    description: 'Design fluido que acompanha as linhas do antebraço feminino, com foco em realismo botânico.',
    size: '24x10 cm'
  },
  {
    id: 'design-11',
    title: 'Carpe Diem & Geometria Corporal',
    category: 'geometry',
    imageSrc: '/images/tattoo11.jpg',
    description: 'Lettering integrado com retrato realista de alto contraste e gola geométrica tribal no pescoço.',
    size: '18x12 cm'
  }
];
