import React from "react";

const projects = [
  {
    title: "Cosmic Finance",
    description: "A decentralized finance dashboard with real-time galaxy-themed data visualizations.",
    tags: ["React", "TypeScript", "TailwindCSS"],
    github: "https://github.com/bhooleop-droid",
  },
  {
    title: "Nebula Chat",
    description: "Encrypted real-time messaging platform using WebSocket and glassmorphism UI.",
    tags: ["Node.js", "Socket.io", "React"],
    github: "https://github.com/bhooleop-droid",
  },
  {
    title: "Black Hole Bot",
    description: "Highly efficient automation tool for deep web data scraping and analysis.",
    tags: ["Python", "AWS", "Docker"],
    github: "https://github.com/bhooleop-droid",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12 text-center text-glow">
        Featured <span className="text-cosmic-violet">Projects</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="glass-purple group flex flex-col p-8 transition-all duration-500 hover:-translate-y-2 hover:border-cosmic-purple/50">
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cosmic-violet transition-colors">
              {project.title}
            </h3>
            <p className="text-white/60 mb-6 flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-cosmic-purple/10 border border-cosmic-purple/20 rounded-full text-[10px] font-semibold text-cosmic-violet">
                  {tag}
                </span>
              ))}
            </div>
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-cosmic-violet transition-all group/link"
            >
              <span>View Source</span>
              <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
