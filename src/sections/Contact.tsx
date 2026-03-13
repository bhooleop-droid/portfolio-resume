import React, { useState } from "react";

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "bhooleop@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-6 text-glow">
        Get In <span className="text-cosmic-violet">Touch</span>
      </h2>
      <p className="text-white/60 mb-12 max-w-xl mx-auto">
        I'm always open to new opportunities and collaborations. 
        Feel free to reach out via email or check out my work on GitHub.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Email Copy Button */}
        <div className="glass-purple p-6 flex flex-col items-center gap-4 min-w-[300px] transition-all duration-300 hover:border-cosmic-purple/40">
          <div className="w-12 h-12 bg-cosmic-purple/20 rounded-full flex items-center justify-center text-cosmic-violet">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
          <p className="text-sm font-medium text-white/80">{email}</p>
          <button 
            onClick={copyToClipboard}
            className={`px-6 py-2 rounded-full text-xs font-semibold transition-all duration-300 active:scale-95 ${
              copied ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-cosmic-purple/20 text-cosmic-violet border border-cosmic-purple/30 hover:bg-cosmic-purple/30"
            }`}
          >
            {copied ? "Copied!" : "Copy Email"}
          </button>
        </div>

        {/* GitHub Link */}
        <a 
          href="https://github.com/bhooleop-droid/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="glass-purple p-6 flex flex-col items-center gap-4 min-w-[300px] transition-all duration-300 hover:border-cosmic-purple/40 group"
        >
          <div className="w-12 h-12 bg-cosmic-purple/20 rounded-full flex items-center justify-center text-cosmic-violet transition-transform group-hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </div>
          <p className="text-sm font-medium text-white/80">GitHub</p>
          <span className="text-xs text-cosmic-violet font-semibold tracking-wider uppercase group-hover:underline underline-offset-4">Visit Profile</span>
        </a>
      </div>

      <p className="mt-24 text-white/30 text-xs tracking-widest uppercase">
        © 2026 Developer Portfolio • Designed with Cosmic Energy
      </p>
    </section>
  );
};

export default Contact;
