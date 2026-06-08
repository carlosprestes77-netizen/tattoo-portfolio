export interface TattooDesign {
  id: string;
  title: string;
  category: 'blackwork' | 'geometry' | 'fineline' | 'disponivel';
  imageSrc: string; // Base64 data URI of beautiful vector art
  description: string;
  size: string;
}

// Helper to wrap SVG text into a clean base64 data URI
const svgToDataUri = (svgContent: string) => {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}`;
};

export const tattooDesigns: TattooDesign[] = [
  {
    id: 'design-1',
    title: 'Geometria Sagrada & O Olho Surreal',
    category: 'geometry',
    imageSrc: svgToDataUri(`
      <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="400" fill="#141414"/>
        <circle cx="200" cy="200" r="140" stroke="#D4AF37" stroke-width="2" fill="none" opacity="0.3"/>
        <circle cx="200" cy="200" r="100" stroke="#D4AF37" stroke-width="1.5" fill="none"/>
        <circle cx="200" cy="200" r="60" stroke="#D4AF37" stroke-width="1" fill="none" stroke-dasharray="5,5"/>
        <polygon points="200,60 321,270 79,270" stroke="#F5F5F7" stroke-width="1.5" fill="none"/>
        <polygon points="200,340 79,130 321,130" stroke="#F5F5F7" stroke-width="1" fill="none" opacity="0.5"/>
        <path d="M 120 200 Q 200 120 280 200 Q 200 280 120 200 Z" stroke="#F5F5F7" stroke-width="2" fill="none"/>
        <circle cx="200" cy="200" r="25" stroke="#8B0000" stroke-width="2" fill="none"/>
        <circle cx="200" cy="200" r="10" fill="#F5F5F7"/>
        <line x1="200" y1="30" x2="200" y2="370" stroke="#D4AF37" stroke-width="0.5"/>
        <line x1="30" y1="200" x2="370" y2="200" stroke="#D4AF37" stroke-width="0.5"/>
      </svg>
    `),
    description: 'Um estudo geométrico sobre percepção e a proporção áurea da alma.',
    size: '18x18 cm'
  },
  {
    id: 'design-2',
    title: 'Constelação Astral Abstrata',
    category: 'fineline',
    imageSrc: svgToDataUri(`
      <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="400" fill="#141414"/>
        <path d="M 80 100 L 160 180 L 240 120 L 320 220" stroke="#F5F5F7" stroke-width="1.5" fill="none"/>
        <circle cx="80" cy="100" r="4" fill="#D4AF37"/>
        <circle cx="160" cy="180" r="5" fill="#F5F5F7"/>
        <circle cx="240" cy="120" r="4" fill="#D4AF37"/>
        <circle cx="320" cy="220" r="6" fill="#F5F5F7"/>
        <path d="M 160 180 A 40 40 0 0 1 240 120" stroke="#D4AF37" stroke-width="1" fill="none" stroke-dasharray="3,3"/>
        <circle cx="200" cy="300" r="50" stroke="#F5F5F7" stroke-width="1" fill="none"/>
        <path d="M 150 300 H 250" stroke="#D4AF37" stroke-width="1"/>
        <line x1="200" y1="220" x2="200" y2="380" stroke="#D4AF37" stroke-width="0.75"/>
      </svg>
    `),
    description: 'Linhas finas e pontos representando conexões astrais invisíveis.',
    size: '12x8 cm'
  },
  {
    id: 'design-3',
    title: 'Crânio Orgânico Florido',
    category: 'blackwork',
    imageSrc: svgToDataUri(`
      <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="400" fill="#141414"/>
        <!-- Abstract skull shape -->
        <path d="M 150 140 C 150 90, 250 90, 250 140 C 250 180, 230 190, 230 220 H 170 C 170 190, 150 180, 150 140 Z" stroke="#F5F5F7" stroke-width="2.5" fill="none"/>
        <circle cx="180" cy="150" r="15" fill="#0B0B0B" stroke="#F5F5F7" stroke-width="1.5"/>
        <circle cx="220" cy="150" r="15" fill="#0B0B0B" stroke="#F5F5F7" stroke-width="1.5"/>
        <path d="M 195 165 L 200 155 L 205 165 Z" fill="#F5F5F7"/>
        <path d="M 180 200 V 215 M 190 200 V 215 M 200 200 V 215 M 210 200 V 215 M 220 200 V 215" stroke="#F5F5F7" stroke-width="1.5"/>
        <!-- Floral organic curves -->
        <path d="M 130 250 C 100 200, 120 120, 160 120 C 170 150, 140 180, 130 250 Z" stroke="#D4AF37" stroke-width="1.5" fill="none"/>
        <path d="M 270 250 C 300 200, 280 120, 240 120 C 230 150, 260 180, 270 250 Z" stroke="#D4AF37" stroke-width="1.5" fill="none"/>
        <path d="M 200 80 Q 200 50 230 40" stroke="#8B0000" stroke-width="1.5" fill="none"/>
        <circle cx="230" cy="40" r="5" fill="#8B0000"/>
      </svg>
    `),
    description: 'A dualidade entre a mortalidade e a beleza efêmera do renascimento.',
    size: '22x15 cm'
  },
  {
    id: 'design-4',
    title: 'Olho de Hórus Contemporâneo',
    category: 'disponivel',
    imageSrc: svgToDataUri(`
      <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="400" fill="#141414"/>
        <path d="M 100 200 C 140 130, 260 130, 300 200 C 260 270, 140 270, 100 200 Z" stroke="#D4AF37" stroke-width="3" fill="none"/>
        <circle cx="200" cy="200" r="35" fill="none" stroke="#F5F5F7" stroke-width="3"/>
        <circle cx="200" cy="200" r="15" fill="#8B0000"/>
        <path d="M 120 180 Q 200 100 280 180" stroke="#F5F5F7" stroke-width="1.5" fill="none"/>
        <path d="M 180 235 L 170 270 H 150" stroke="#D4AF37" stroke-width="2" fill="none"/>
        <path d="M 220 235 Q 230 260 250 260" stroke="#F5F5F7" stroke-width="2" fill="none"/>
      </svg>
    `),
    description: 'Projeto Autoral Disponível. Proteção, clareza mental e espiritualidade.',
    size: '15x12 cm'
  },
  {
    id: 'design-5',
    title: 'Cervo Cósmico e Vetores',
    category: 'disponivel',
    imageSrc: svgToDataUri(`
      <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="400" fill="#141414"/>
        <!-- Antlers -->
        <path d="M 160 180 Q 140 100 90 90 M 130 130 Q 110 80 120 60 M 150 150 Q 130 70 70 120" stroke="#F5F5F7" stroke-width="2" fill="none"/>
        <path d="M 240 180 Q 260 100 310 90 M 270 130 Q 290 80 280 60 M 250 150 Q 270 70 330 120" stroke="#F5F5F7" stroke-width="2" fill="none"/>
        <!-- Head -->
        <polygon points="200,260 170,180 230,180" stroke="#F5F5F7" stroke-width="2.5" fill="none"/>
        <line x1="200" y1="180" x2="200" y2="340" stroke="#D4AF37" stroke-width="1.5"/>
        <circle cx="200" cy="300" r="20" stroke="#D4AF37" stroke-width="1" fill="none"/>
        <circle cx="200" cy="300" r="5" fill="#8B0000"/>
      </svg>
    `),
    description: 'Projeto Autoral Disponível. Soberania e conexão profunda com os arquétipos da floresta.',
    size: '20x15 cm'
  },
  {
    id: 'design-6',
    title: 'Portal de Luz e Dimensão',
    category: 'geometry',
    imageSrc: svgToDataUri(`
      <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="400" fill="#141414"/>
        <rect x="100" y="100" width="200" height="200" stroke="#D4AF37" stroke-width="2" fill="none" transform="rotate(45 200 200)"/>
        <rect x="120" y="120" width="160" height="160" stroke="#F5F5F7" stroke-width="1.5" fill="none" transform="rotate(45 200 200)"/>
        <rect x="140" y="140" width="120" height="120" stroke="#D4AF37" stroke-width="1" fill="none" opacity="0.6" transform="rotate(45 200 200)"/>
        <circle cx="200" cy="200" r="40" stroke="#8B0000" stroke-width="2" fill="none"/>
        <line x1="200" y1="50" x2="200" y2="350" stroke="#F5F5F7" stroke-width="1" stroke-dasharray="10,10"/>
      </svg>
    `),
    description: 'Abertura tridimensional geométrica no espaço-tempo e na percepção estética.',
    size: '14x14 cm'
  }
];
