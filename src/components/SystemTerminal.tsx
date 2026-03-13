import React, { useState, useEffect, useRef } from "react";

interface LogEntry {
  id: string;
  type: "SYSTEM" | "INFO" | "SUCCESS" | "WARNING";
  message: string;
  timestamp: string;
}

const INITIAL_LOGS: LogEntry[] = [
  { id: "1", type: "SYSTEM", message: "Terminal link established...", timestamp: "15:58:12" },
  { id: "2", type: "INFO", message: "Energy core resonance: 98.4%", timestamp: "15:58:15" },
];

const LOG_TEMPLATES = [
  { type: "SYSTEM", message: "Synapse synchronization overhead: 12ms" },
  { type: "INFO", message: "Quantum tech stack signature detected" },
  { type: "SUCCESS", message: "Visual buffer stabilized @ 120 FPS" },
  { type: "INFO", message: "Neural link bandwidth optimized" },
  { type: "SYSTEM", message: "Core cooling system: OPERATIONAL" },
  { type: "WARNING", message: "Atmospheric interference detected... filtering" },
  { type: "SUCCESS", message: "Portfolio data-bank indexed successfully" },
  { type: "INFO", message: "3D Spatial coordinates initialized" },
];

const SystemTerminal: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>(INITIAL_LOGS);
  const [isMinimized, setIsMinimized] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: window.innerHeight - 280 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const scrollRef = useRef<HTMLDivElement>(null);

  // Simulated Log Streaming
  useEffect(() => {
    const stream = setInterval(() => {
      const template = LOG_TEMPLATES[Math.floor(Math.random() * LOG_TEMPLATES.length)];
      setLogs(prev => {
        const newLog: LogEntry = {
          id: Math.random().toString(36).substr(2, 9),
          type: template.type as any,
          message: template.message,
          timestamp: new Date().toLocaleTimeString([], { hour12: false }),
        };
        const next = [...prev, newLog];
        return next.length > 50 ? next.slice(1) : next;
      });
    }, 4000 + Math.random() * 6000);

    return () => clearInterval(stream);
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  // Draggable Mouse Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest(".drag-handle")) {
      setIsDragging(true);
      dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const newX = Math.max(0, Math.min(window.innerWidth - 300, e.clientX - dragStart.current.x));
      const newY = Math.max(0, Math.min(window.innerHeight - (isMinimized ? 40 : 250), e.clientY - dragStart.current.y));
      
      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, isMinimized]);

  return (
    <div 
      className={`fixed z-[5000] w-[300px] transition-all duration-300 ease-out select-none
        ${isMinimized ? "h-10" : "h-[250px]"} 
        glass-purple border border-cosmic-purple/30 shadow-2xl backdrop-blur-md overflow-hidden`}
      style={{
        left: position.x,
        top: position.y,
        opacity: isDragging ? 0.8 : 1,
        transform: isDragging ? 'scale(1.02)' : 'scale(1)',
      }}
      onMouseDown={handleMouseDown}
    >
      {/* Terminal Title Bar */}
      <div className="drag-handle h-10 border-b border-white/10 flex items-center justify-between px-3 cursor-move bg-white/5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cosmic-violet animate-pulse" />
          <span className="font-mono text-[10px] tracking-[0.2em] text-white/70 uppercase">System Logs v2.4</span>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setIsMinimized(!isMinimized)}
            className="hover:text-cosmic-violet transition-colors text-white/40"
          >
            {isMinimized ? "▢" : "—"}
          </button>
        </div>
      </div>

      {/* Log Content */}
      {!isMinimized && (
        <div 
          ref={scrollRef}
          className="p-3 h-[210px] overflow-y-auto font-mono text-[10px] space-y-2 scrollbar-hide"
        >
          {logs.map((log) => (
            <div key={log.id} className="flex gap-2 animate-slideIn">
              <span className="text-white/20">[{log.timestamp}]</span>
              <span className={`font-bold ${
                log.type === "SYSTEM" ? "text-cosmic-violet" :
                log.type === "SUCCESS" ? "text-green-400/80" :
                log.type === "WARNING" ? "text-yellow-400/80" : "text-blue-400/80"
              }`}>
                [{log.type}]
              </span>
              <span className="text-white/80">{log.message}</span>
            </div>
          ))}
          <div className="flex gap-2">
            <span className="text-cosmic-violet animate-pulse">_</span>
          </div>
        </div>
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-5px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SystemTerminal;
