import React from "react";
import AryanModel from "../components/AryanModel";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", slug: "react" },
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css3" },
      { name: "JavaScript", slug: "javascript" },
      { name: "TypeScript", slug: "typescript" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Firebase", slug: "firebase" },
      { name: "PostgreSQL", slug: "postgresql" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "GitHub", slug: "github" },
      { name: "AWS", slug: "amazonaws" },
      { name: "Vite", slug: "vite" },
      { name: "Docker", slug: "docker" },
    ],
  },
];

const Skills: React.FC<{ onSelectTech?: (slug: string) => void }> = ({ onSelectTech }) => {
  const purple = "8b5cf6";

  return (
    <section id="skills" className="py-24 container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            My <span className="text-cosmic-violet">Stack</span>
          </h2>
          <p className="text-white/60 text-lg">
            Technologies I use to bring ideas to life across the full stack.
          </p>
        </div>
        <div className="w-full h-64 md:h-96 pointer-events-auto">
          <AryanModel className="w-full h-full" onSelect={onSelectTech} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="glass-purple p-8 transition-all duration-500 hover:border-cosmic-purple/40">
            <h3 className="text-xl font-semibold mb-8 text-cosmic-violet border-b border-white/10 pb-2 inline-block">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-4">
              {category.skills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="flex flex-col items-center gap-2 group cursor-pointer"
                  onClick={() => onSelectTech?.(skill.slug)}
                >
                  <div className="w-14 h-14 glass flex items-center justify-center p-3 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:border-cosmic-purple/50">
                    <img 
                      src={`https://cdn.simpleicons.org/${skill.slug}/${purple}`} 
                      alt={skill.name}
                      className="w-full h-full object-contain filter drop-shadow(0 0 5px rgba(139, 92, 246, 0.3))"
                    />
                  </div>
                  <span className="text-xs text-white/50 group-hover:text-white/80 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
