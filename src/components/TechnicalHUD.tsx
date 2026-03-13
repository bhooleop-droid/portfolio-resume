import React, { useEffect, useState } from "react";
import { TechnicalDetail } from "../data/techData";

interface TechnicalHUDProps {
  data: TechnicalDetail | null;
  onClose: () => void;
}

const TechnicalHUD: React.FC<TechnicalHUDProps> = ({ data, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    if (data) {
      setIsVisible(true);
      setIsScanning(true);
      const timer = setTimeout(() => setIsScanning(false), 1500);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [data]);

  if (!data && !isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center pointer-events-none transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Background Dim */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto" onClick={onClose} />

      {/* Main HUD Panel */}
      <div className={`relative w-full max-w-2xl mx-6 glass-purple border-2 border-cosmic-purple/30 p-8 pointer-events-auto transform transition-transform duration-500 ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-10'}`}>
        
        {/* Decorative HUD Corners */}
        <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-cosmic-violet shadow-[0_0_15px_rgba(139,92,246,0.5)]" />
        <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-cosmic-violet shadow-[0_0_15px_rgba(139,92,246,0.5)]" />
        <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-cosmic-violet shadow-[0_0_15px_rgba(139,92,246,0.5)]" />
        <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-cosmic-violet shadow-[0_0_15px_rgba(139,92,246,0.5)]" />

        {/* Header */}
        <div className={`flex items-start justify-between mb-8 ${isScanning ? 'animate-glitch' : ''}`}>
          <div>
            <div className="text-xs font-mono text-cosmic-violet mb-1 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cosmic-violet animate-pulse" />
              Technical Artifact Detected
            </div>
            <h2 className="text-4xl font-bold text-white tracking-tighter">
              {data?.name.toUpperCase()} <span className="text-cosmic-violet/50">v4.0</span>
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 glass flex items-center justify-center hover:bg-white/10 transition-colors text-white"
          >
            ✕
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Stats Column */}
          <div className="space-y-6">
            <div>
              <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block font-mono">Classification</label>
              <div className="text-white font-semibold text-lg">{data?.category}</div>
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block font-mono">Expertise Resonance</label>
              <div className="relative w-full h-3 glass-purple overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-cosmic-purple to-cosmic-violet transition-all duration-1000 ease-out"
                  style={{ width: isScanning ? '0%' : `${data?.proficiency}%` }}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-white/5 animate-shimmer" />
              </div>
              <div className="flex justify-between mt-2 text-[10px] font-mono text-white/60">
                <span>0%</span>
                <span>{data?.proficiency}% MATCHED</span>
                <span>100%</span>
              </div>
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block font-mono">Deployment History</label>
              <div className="text-white text-xl font-bold">{data?.year}</div>
            </div>
          </div>

          {/* Description Column */}
          <div className="space-y-6">
            <div>
              <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block font-mono">Core Functions</label>
              <p className="text-white/80 text-sm leading-relaxed italic">
                "{data?.description}"
              </p>
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block font-mono">Neural Sub-tags</label>
              <div className="flex flex-wrap gap-2">
                {data?.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 glass text-[10px] text-cosmic-violet border border-cosmic-violet/30 uppercase tracking-tighter">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Scanning Animation */}
        {isScanning && (
          <div className="absolute inset-0 bg-cosmic-purple/5 pointer-events-none overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-cosmic-violet/50 shadow-[0_0_15px_rgba(139,92,246,0.8)] animate-scan" />
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center text-[8px] font-mono text-white/20 uppercase tracking-[0.3em]">
          <span>© 2026 ARYAN NEURAL NETWORK</span>
          <span>STATUS: ENCRYPTED // DATA_STREAM_STABLE</span>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 1.5s linear infinite;
        }
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        .animate-glitch {
          animation: glitch 0.3s cubic-bezier(.25,.46,.45,.94) infinite;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default TechnicalHUD;
