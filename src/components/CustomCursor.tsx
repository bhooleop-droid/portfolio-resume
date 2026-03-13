import React, { useEffect, useState, useRef } from "react";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const requestRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Update global mouse coordinates for 3D/Magnetic effects
      (window as any).mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      (window as any).mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      (window as any).cursorX = e.clientX;
      (window as any).cursorY = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" || 
        target.tagName === "A" || 
        target.closest(".cursor-pointer") ||
        target.onclick
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    const animate = () => {
      setDotPosition(prev => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15
      }));
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(requestRef.current);
    };
  }, [position]);

  return (
    <>
      {/* Outer Singularity Aura */}
      <div 
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] rounded-full border border-cosmic-violet/30 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isHovering ? 2.5 : 1})`,
          background: isHovering ? "rgba(139, 92, 246, 0.1)" : "transparent",
          boxShadow: isHovering ? "0 0 20px rgba(139, 92, 246, 0.2)" : "none"
        }}
      />
      
      {/* Central Singularity Core */}
      <div 
        className="fixed top-0 left-0 w-1.5 h-1.5 pointer-events-none z-[9999] rounded-full bg-white shadow-[0_0_10px_#fff,0_0_20px_#8b5cf6]"
        style={{
          transform: `translate(${dotPosition.x - 3}px, ${dotPosition.y - 3}px)`,
        }}
      >
        <div className="absolute inset-0 w-full h-full bg-cosmic-violet rounded-full animate-ping opacity-40" />
      </div>

      <style>{`
        * {
          cursor: none !important;
        }
        @media (max-width: 768px) {
          * {
            cursor: auto !important;
          }
          .fixed {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
