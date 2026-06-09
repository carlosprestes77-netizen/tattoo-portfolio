'use client';

import { useState, useEffect, useRef } from 'react';
import { Stage, Layer, Image as KonvaImage, Transformer } from 'react-konva';
import Konva from 'konva';
import { tattooDesigns } from '../data/tattoos';
import { Upload, RotateCcw, Download, Eye, Layers } from 'lucide-react';

// Custom SVG Body Silhouettes
const bodySilhouettes = {
  arm: `data:image/svg+xml;utf8,<svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="600" fill="%23141414"/>
    <path d="M 250 50 C 230 150, 210 300, 240 550 H 360 C 390 300, 370 150, 350 50 Z" fill="%231c1c1e" stroke="%23D4AF37" stroke-width="2" opacity="0.3"/>
    <path d="M 250 50 C 230 150, 210 300, 240 550" fill="none" stroke="%23D4AF37" stroke-width="1" opacity="0.1" stroke-dasharray="10,5"/>
    <path d="M 350 50 C 370 150, 390 300, 360 550" fill="none" stroke="%23D4AF37" stroke-width="1" opacity="0.1" stroke-dasharray="10,5"/>
    <text x="300" y="300" fill="%239E9E9E" font-family="sans-serif" font-size="14" letter-spacing="4" text-anchor="middle">ANTEBRAÇO</text>
  </svg>`,
  chest: `data:image/svg+xml;utf8,<svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="600" fill="%23141414"/>
    <path d="M 150 100 C 150 100, 180 80, 300 80 C 420 80, 450 100, 450 100 C 470 180, 480 300, 460 500 C 380 520, 220 520, 140 500 C 120 300, 130 180, 150 100 Z" fill="%231c1c1e" stroke="%23D4AF37" stroke-width="2" opacity="0.3"/>
    <circle cx="220" cy="250" r="10" fill="none" stroke="%23D4AF37" stroke-width="1" opacity="0.2"/>
    <circle cx="380" cy="250" r="10" fill="none" stroke="%23D4AF37" stroke-width="1" opacity="0.2"/>
    <text x="300" y="300" fill="%239E9E9E" font-family="sans-serif" font-size="14" letter-spacing="4" text-anchor="middle">PEITORAL</text>
  </svg>`,
  back: `data:image/svg+xml;utf8,<svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="600" fill="%23141414"/>
    <path d="M 120 150 C 120 150, 200 120, 300 120 C 400 120, 480 150, 480 150 C 500 250, 460 450, 440 550 C 380 570, 220 570, 160 550 C 140 450, 100 250, 120 150 Z" fill="%231c1c1e" stroke="%23D4AF37" stroke-width="2" opacity="0.3"/>
    <path d="M 300 120 V 550" fill="none" stroke="%23D4AF37" stroke-width="1" opacity="0.2" stroke-dasharray="5,5"/>
    <text x="300" y="300" fill="%239E9E9E" font-family="sans-serif" font-size="14" letter-spacing="4" text-anchor="middle">COSTAS</text>
  </svg>`,
  leg: `data:image/svg+xml;utf8,<svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="600" fill="%23141414"/>
    <path d="M 230 50 C 210 200, 180 350, 220 550 H 380 C 420 350, 390 200, 370 50 Z" fill="%231c1c1e" stroke="%23D4AF37" stroke-width="2" opacity="0.3"/>
    <text x="300" y="300" fill="%239E9E9E" font-family="sans-serif" font-size="14" letter-spacing="4" text-anchor="middle">PERNA / PANTURRILHA</text>
  </svg>`
};

export default function TattooSimulator() {
  const [selectedModel, setSelectedModel] = useState<string>('arm');
  const [backgroundImage, setBackgroundImage] = useState<HTMLImageElement | null>(null);
  
  const [activeTattooSrc, setActiveTattooSrc] = useState<string>(tattooDesigns[0].imageSrc);
  const [tattooImage, setTattooImage] = useState<HTMLImageElement | null>(null);
  
  const [opacity, setOpacity] = useState<number>(0.85);
  const [isTattooSelected, setIsTattooSelected] = useState<boolean>(false);
  const [tattooCoords, setTattooCoords] = useState({ x: 200, y: 200, width: 200, height: 200, rotation: 0 });

  const stageRef = useRef<Konva.Stage | null>(null);
  const tattooRef = useRef<Konva.Image | null>(null);
  const transformerRef = useRef<Konva.Transformer | null>(null);

  // Load Background Silhouette
  useEffect(() => {
    const img = new window.Image();
    img.src = bodySilhouettes[selectedModel as keyof typeof bodySilhouettes] || selectedModel;
    img.onload = () => {
      setBackgroundImage(img);
    };
  }, [selectedModel]);

  // Load Tattoo Image
  useEffect(() => {
    const img = new window.Image();
    const isRelative = activeTattooSrc.startsWith('/');
    img.src = isRelative ? `/tattoo-portfolio${activeTattooSrc}` : activeTattooSrc;
    img.onload = () => {
      setTattooImage(img);
      // Reset position to center of stage
      setTattooCoords({
        x: 200,
        y: 200,
        width: 200,
        height: 200,
        rotation: 0
      });
    };
  }, [activeTattooSrc]);

  // Update Transformer attachment
  useEffect(() => {
    if (isTattooSelected && transformerRef.current && tattooRef.current) {
      transformerRef.current.nodes([tattooRef.current]);
      const layer = transformerRef.current.getLayer();
      if (layer) {
        layer.batchDraw();
      }
    }
  }, [isTattooSelected, tattooImage]);

  const handleStageClick = (e: Konva.KonvaEventObject<MouseEvent | TouchEvent>) => {
    // deselect when clicking on empty area
    const clickedOnEmpty = e.target === e.target.getStage() || e.target.attrs.name === 'background-image';
    if (clickedOnEmpty) {
      setIsTattooSelected(false);
    } else {
      setIsTattooSelected(true);
    }
  };

  const handleUploadBody = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setSelectedModel(event.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleUploadTattoo = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setActiveTattooSrc(event.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const downloadSimulation = () => {
    const stage = stageRef.current;
    if (!stage) return;
    
    // Temporarily hide transformer border before exporting
    setIsTattooSelected(false);
    
    setTimeout(() => {
      const dataURL = stage.toDataURL({ pixelRatio: 2 });
      const link = document.createElement('a');
      link.download = 'simulacao-thiago-kael.png';
      link.href = dataURL;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 100);
  };

  const handleReset = () => {
    setTattooCoords({
      x: 200,
      y: 200,
      width: 200,
      height: 200,
      rotation: 0
    });
    setOpacity(0.85);
  };

  return (
    <section id="simulador" className="py-24 px-6 md:px-12 bg-ink-black relative border-t border-gold-accent/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-sans text-gold-accent uppercase tracking-[0.3em] block mb-2">Visualizador Interativo</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-text-white uppercase tracking-wider mb-4">
            Simulador de Aplicação
          </h2>
          <p className="max-w-2xl mx-auto text-sm text-text-muted font-sans leading-relaxed">
            Escolha uma arte ou envie a sua, selecione a região do corpo ou faça upload de uma foto da sua própria pele para simular a aplicação com precisão antes de agendar.
          </p>
        </div>

        {/* Simulator Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Sidebar */}
          <div className="lg:col-span-4 flex flex-col space-y-6 bg-ink-dark p-6 md:p-8 border border-gold-accent/10">
            
            {/* Step 1: Skin Selection */}
            <div>
              <label className="block text-xs font-sans text-gold-accent uppercase tracking-widest mb-3 flex items-center space-x-2">
                <Layers size={14} />
                <span>1. Escolha a Pele / Modelo</span>
              </label>
              <div className="grid grid-cols-2 gap-2 mb-3">
                {['arm', 'chest', 'back', 'leg'].map((model) => (
                  <button
                    key={model}
                    onClick={() => setSelectedModel(model)}
                    className={`py-2 text-[10px] uppercase font-sans tracking-wider border transition-colors ${
                      selectedModel === model
                        ? 'border-gold-accent text-gold-accent bg-gold-accent/5'
                        : 'border-white/10 text-text-muted hover:border-white/30'
                    }`}
                  >
                    {model === 'arm' ? 'Antebraço' : model === 'chest' ? 'Peitoral' : model === 'back' ? 'Costas' : 'Perna'}
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleUploadBody}
                  id="body-upload"
                  className="hidden"
                />
                <label
                  htmlFor="body-upload"
                  className="flex items-center justify-center space-x-2 w-full py-2.5 border border-dashed border-gold-accent/20 hover:border-gold-accent text-text-muted hover:text-gold-accent transition-colors duration-200 cursor-pointer text-xs font-sans tracking-wide"
                >
                  <Upload size={14} />
                  <span>Carregar Foto da sua Pele</span>
                </label>
              </div>
            </div>

            {/* Step 2: Design Selection */}
            <div>
              <label className="block text-xs font-sans text-gold-accent uppercase tracking-widest mb-3 flex items-center space-x-2">
                <Eye size={14} />
                <span>2. Escolha o Design</span>
              </label>
              
              {/* Preset List */}
              <div className="grid grid-cols-3 gap-2 mb-3 max-h-36 overflow-y-auto pr-1">
                {tattooDesigns.map((design) => (
                  <button
                    key={design.id}
                    onClick={() => setActiveTattooSrc(design.imageSrc)}
                    className={`aspect-square relative p-1 bg-ink-black border transition-colors ${
                      activeTattooSrc === design.imageSrc
                        ? 'border-gold-accent'
                        : 'border-white/5 hover:border-white/20'
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={design.imageSrc.startsWith('/') ? `/tattoo-portfolio${design.imageSrc}` : design.imageSrc} alt={design.title} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>

              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleUploadTattoo}
                  id="tattoo-upload"
                  className="hidden"
                />
                <label
                  htmlFor="tattoo-upload"
                  className="flex items-center justify-center space-x-2 w-full py-2.5 border border-dashed border-gold-accent/20 hover:border-gold-accent text-text-muted hover:text-gold-accent transition-colors duration-200 cursor-pointer text-xs font-sans tracking-wide"
                >
                  <Upload size={14} />
                  <span>Carregar Tatuagem Própria</span>
                </label>
              </div>
            </div>

            {/* Step 3: Ink Opacity Adjustment */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-sans text-gold-accent uppercase tracking-widest">
                  Opacidade da Tatuagem
                </label>
                <span className="text-xs font-sans text-text-muted">{Math.round(opacity * 100)}%</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="1"
                step="0.05"
                value={opacity}
                onChange={(e) => setOpacity(parseFloat(e.target.value))}
                className="w-full accent-gold-accent bg-ink-black h-1 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Step 4: Utility Controls */}
            <div className="pt-4 border-t border-white/5 flex gap-2">
              <button
                onClick={handleReset}
                className="flex-1 py-3 border border-white/10 hover:border-gold-accent hover:text-gold-accent text-text-muted transition-colors text-xs font-sans uppercase tracking-wider flex items-center justify-center space-x-2"
              >
                <RotateCcw size={14} />
                <span>Resetar</span>
              </button>
              <button
                onClick={downloadSimulation}
                className="flex-1 py-3 bg-gold-accent text-ink-black hover:bg-gold-light font-semibold transition-colors text-xs font-sans uppercase tracking-wider flex items-center justify-center space-x-2"
              >
                <Download size={14} />
                <span>Salvar Foto</span>
              </button>
            </div>

            {/* Tips Banner */}
            <div className="p-4 bg-ink-black/50 border border-white/5 text-[11px] font-sans text-text-muted leading-relaxed">
              <p className="font-semibold text-gold-accent mb-1 uppercase tracking-wider">Como Usar:</p>
              Clique na arte dentro do canvas para ativar o editor. Use os quadrados ao redor para rotacionar, redimensionar e posicionar sobre a pele.
            </div>

          </div>

          {/* Canvas Display */}
          <div className="lg:col-span-8 bg-ink-dark flex items-center justify-center p-4 border border-gold-accent/10 relative min-h-[500px] md:min-h-[600px] overflow-hidden">
            <div className="relative border border-gold-accent/20 bg-ink-black max-w-[600px] w-full aspect-square shadow-2xl">
              
              {/* Konva Stage Wrapper */}
              {backgroundImage && (
                <Stage
                  width={600}
                  height={600}
                  ref={stageRef}
                  onClick={handleStageClick}
                  onTap={handleStageClick}
                  className="w-full h-full"
                >
                  <Layer>
                    {/* Background Silhouette */}
                    <KonvaImage
                      image={backgroundImage}
                      width={600}
                      height={600}
                      name="background-image"
                    />

                    {/* Draggable/Scalable Tattoo Design */}
                    {tattooImage && (
                      <KonvaImage
                        image={tattooImage}
                        ref={tattooRef}
                        x={tattooCoords.x}
                        y={tattooCoords.y}
                        width={tattooCoords.width}
                        height={tattooCoords.height}
                        rotation={tattooCoords.rotation}
                        opacity={opacity}
                        onDragEnd={(e: Konva.KonvaEventObject<DragEvent>) => {
                          setTattooCoords({
                            ...tattooCoords,
                            x: e.target.x(),
                            y: e.target.y()
                          });
                        }}
                        onTransformEnd={() => {
                          const node = tattooRef.current;
                          if (!node) return;
                          const scaleX = node.scaleX();
                          const scaleY = node.scaleY();
                          
                          // Reset scale to 1 and change sizes instead to maintain clarity
                          node.scaleX(1);
                          node.scaleY(1);
                          
                          setTattooCoords({
                            x: node.x(),
                            y: node.y(),
                            width: Math.max(5, node.width() * scaleX),
                            height: Math.max(5, node.height() * scaleY),
                            rotation: node.rotation()
                          });
                        }}
                      />
                    )}

                    {/* Transformer bounds when selected */}
                    {isTattooSelected && (
                      <Transformer
                        ref={transformerRef}
                        boundBoxFunc={(oldBox, newBox) => {
                          // Limit minimum size
                          if (newBox.width < 10 || newBox.height < 10) {
                            return oldBox;
                          }
                          return newBox;
                        }}
                        anchorStroke="#D4AF37"
                        anchorFill="#0B0B0B"
                        anchorSize={8}
                        borderStroke="#D4AF37"
                        borderStrokeWidth={1}
                      />
                    )}
                  </Layer>
                </Stage>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
