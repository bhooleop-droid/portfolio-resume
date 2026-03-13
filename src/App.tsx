import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import TechnicalHUD from './components/TechnicalHUD'
import CustomCursor from './components/CustomCursor'
import { techDetails } from './data/techData'
import type { TechnicalDetail } from './data/techData'

const StarField: React.FC = () => {
  const [stars, setStars] = useState<{ id: number; left: string; top: string; delay: string; duration: string; size: string }[]>([]);

  useEffect(() => {
    const starCount = 100;
    const newStars = Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 5}s`,
      size: `${Math.random() * 2 + 1}px`,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="star-field">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            "--duration": star.duration,
            animationDelay: star.delay,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

function App() {
  const [selectedTech, setSelectedTech] = useState<TechnicalDetail | null>(null);

  const handleSelectTech = (slug: string) => {
    const detail = techDetails[slug];
    if (detail) {
      setSelectedTech(detail);
    }
  };

  return (
    <div className="min-h-screen">
      <CustomCursor />
      <StarField />
      <Navbar />
      
      <main>
        <Hero onSelectTech={handleSelectTech} />
        
        {/* Spacer for smooth transition from Hero Canvas */}
        <div className="h-24 bg-gradient-to-b from-transparent to-deep-space"></div>
        
        <Skills onSelectTech={handleSelectTech} />
        <Projects />
        <Contact />
      </main>

      <TechnicalHUD 
        data={selectedTech} 
        onClose={() => setSelectedTech(null)} 
      />
    </div>
  )
}

export default App
