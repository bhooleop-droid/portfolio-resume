import React, { useState, useEffect, useRef } from "react";

interface IntroProps {
  onIntroEnd: () => void;
  videoSrc: string;
}

const Intro: React.FC<IntroProps> = ({ onIntroEnd, videoSrc }) => {
  const [stage, setStage] = useState<"prompt" | "video">("prompt");
  const videoRef = useRef<HTMLVideoElement>(null);

  const startSequence = () => {
    setStage("video");
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && stage === "prompt") {
        startSequence();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [stage]);

  useEffect(() => {
    if (stage === "video" && videoRef.current) {
      videoRef.current.play().catch(err => {
        console.error("Video playback failed:", err);
        onIntroEnd(); // Fallback to main page if video fails
      });
    }
  }, [stage, onIntroEnd]);

  return (
    <div className="fixed inset-0 z-[10000] bg-black flex items-center justify-center overflow-hidden">
      {stage === "prompt" && (
        <div className="relative flex flex-col items-center animate-fadeIn">
          {/* Futuristic HUD Prompt */}
          <div className="glass-purple p-12 border-2 border-cosmic-purple/30 relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cosmic-purple/10 to-transparent pointer-events-none" />
            
            {/* Animated Corners */}
            <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-cosmic-violet group-hover:w-10 group-hover:h-10 transition-all duration-500" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-cosmic-violet group-hover:w-10 group-hover:h-10 transition-all duration-500" />

            <div className="text-cosmic-violet font-mono text-xs tracking-[0.4em] uppercase mb-4 opacity-70 animate-pulse">
              System Pending Initialization
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">
              ACCESS <span className="text-cosmic-violet">GRANTED</span>
            </h2>

            <button 
              onClick={startSequence}
              className="px-8 py-3 glass border border-white/20 text-white font-mono text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300 relative overflow-hidden group/btn"
            >
              <span className="relative z-10">INITIALIZE SEQUENCE</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-cosmic-violet transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500" />
            </button>

            <div className="mt-6 text-[10px] text-white/30 font-mono tracking-widest">
              PRESS <span className="text-white/60">[ ENTER ]</span> TO START
            </div>
          </div>
        </div>
      )}

      {stage === "video" && (
        <div className="absolute inset-0 bg-black">
          <video 
            ref={videoRef}
            src={videoSrc}
            className="w-full h-full object-cover"
            onEnded={onIntroEnd}
            autoPlay
            playsInline
          />
          {/* Skip Option */}
          <button 
            onClick={onIntroEnd}
            className="absolute bottom-10 right-10 px-4 py-1 glass text-[10px] text-white/50 border border-white/10 hover:text-white hover:border-white/30 transition-all tracking-[0.3em] font-mono z-10"
          >
            SKIP SEQUENCE [ ESC ]
          </button>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default Intro;
