import React, { useRef, useState, useEffect } from "react";

interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
}

const Magnetic: React.FC<MagneticProps> = ({ children, strength = 0.3 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      const radius = 100; // Activation radius

      if (distance < radius) {
        // Warp towards cursor
        const x = distanceX * strength;
        const y = distanceY * strength;
        setPosition({ x, y });
      } else {
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [strength]);

  const { x, y } = position;

  return (
    <div
      ref={ref}
      style={{
        transform: `translate(${x}px, ${y}px)`,
        transition: "transform 0.2s cubic-bezier(0.33, 1, 0.68, 1)",
      }}
      className="inline-block"
    >
      {children}
    </div>
  );
};

export default Magnetic;
