import React, { useEffect, useRef, useState } from "react";
import AryanModel from "../components/AryanModel";
import Magnetic from "../components/Magnetic";

const Hero: React.FC<{ onSelectTech?: (slug: string) => void }> = ({ onSelectTech }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [frameIndex, setFrameIndex] = useState(1);
  const totalFrames = 145;
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // Preload images once
  useEffect(() => {
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(3, "0");
      img.src = `/frames/ezgif-frame-${frameNum}.jpg`;
      imagesRef.current[i] = img;
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScrollTop = window.innerHeight * 4; 
      const scrollFraction = Math.min(scrollTop / maxScrollTop, 0.99);
      const index = Math.floor(scrollFraction * totalFrames) + 1;
      
      if (index !== frameIndex) {
        setFrameIndex(index);
      }
    };

    const handleResize = () => {
        if (canvasRef.current) {
            canvasRef.current.width = window.innerWidth;
            canvasRef.current.height = window.innerHeight;
            // Force redraw on resize
            drawFrame();
        }
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    // Initial size
    handleResize();

    return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
    };
  }, []); // Only run on mount

  const drawFrame = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const img = imagesRef.current[frameIndex];
    if (img && img.complete) {
      render(img, context, canvas);
    } else if (img) {
      img.onload = () => render(img, context, canvas);
    }
  };

  const render = (img: HTMLImageElement, ctx: CanvasRenderingContext2D, canv: HTMLCanvasElement) => {
    const scale = Math.max(canv.width / img.width, canv.height / img.height);
    const x = (canv.width / 2) - (img.width / 2) * scale;
    const y = (canv.height / 2) - (img.height / 2) * scale;
    ctx.clearRect(0, 0, canv.width, canv.height);
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  // Re-draw when frameIndex changes
  useEffect(() => {
    drawFrame();
  }, [frameIndex]);

  return (
    <div className="relative h-[500vh]">
      <section className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        
        {/* Overlay Content */}
        <div className="relative z-10 container mx-auto px-6 pointer-events-none">
          <div className="max-w-2xl">
            {/* Stage 1: Badge */}
            <div 
              className="mb-4 transition-all duration-700 transform"
              style={{ 
                opacity: frameIndex > 10 && frameIndex < 130 ? 1 : 0,
                transform: `translateY(${frameIndex > 10 ? 0 : 20}px)`
              }}
            >
              <div className="space-y-4">
                <Magnetic strength={0.2}>
                  <div className="text-cosmic-violet font-mono text-sm tracking-[0.3em] uppercase opacity-80 mb-2">
                    System.initialize("Developer Profile")
                  </div>
                </Magnetic>
                <Magnetic strength={0.4}>
                  <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter">
                    MEET <span className="text-transparent bg-clip-text bg-gradient-to-r from-cosmic-purple to-cosmic-violet">ARYAN</span>
                  </h1>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <h2 className="text-2xl md:text-4xl font-light text-white/60 tracking-tight">
                    Full Stack Architect & 3D Visualist
                  </h2>
                </Magnetic>
              </div>
            </div>

            {/* Stage 3: Description */}
            <div 
              className="flex flex-col md:flex-row items-center gap-8 mb-8 transition-all duration-1000 transform"
              style={{ 
                opacity: frameIndex > 60 && frameIndex < 145 ? 1 : 0,
                transform: `translateY(${frameIndex > 60 ? 0 : 30}px)`
              }}
            >
              <div className="flex-1 text-lg md:text-xl text-white/60">
                Meet <span className="text-white font-semibold">Aryan</span>, a Full Stack Developer with a passion for creating beautiful, 
                interactive, and user-centric web applications.
              </div>
              <div className="w-full h-64 md:h-96 pointer-events-auto">
                <AryanModel className="w-full h-full" onSelect={onSelectTech} />
              </div>
            </div>

            {/* Stage 4: Button */}
            <div
              className="transition-all duration-1000 transform pointer-events-auto"
              style={{ 
                opacity: frameIndex > 90 ? 1 : 0,
                transform: `translateY(${frameIndex > 90 ? 0 : 20}px)`
              }}
            >
              <a href="#about" className="btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
