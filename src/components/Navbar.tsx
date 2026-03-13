import React from "react";

const Navbar: React.FC = () => {
  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Source Code", href: "https://github.com/bhooleop-droid/portfolio-resume" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center p-6">
      <div className="glass-purple px-8 py-3 flex items-center gap-8 backdrop-blur-xl transition-all duration-300 hover:border-cosmic-purple/40">
        <div className="text-xl font-bold text-white tracking-widest text-glow">
          PORTFOLIO
        </div>
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="md:hidden">
            {/* Hamburger or Simple Menu icon could go here */}
            <button className="text-white/70 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
