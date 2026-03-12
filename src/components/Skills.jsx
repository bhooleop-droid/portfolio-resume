import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    FaReact, FaNodeJs, FaPython, FaDocker, FaGithub, FaLinux
} from 'react-icons/fa'
import {
    SiTailwindcss, SiFramer, SiThreedotjs, SiExpress, SiMongodb, SiJavascript
} from 'react-icons/si'
import { ChevronRight, Code, Database, Wrench } from 'lucide-react'

const skillCategories = [
    {
        title: 'Frontend',
        icon: <Code className="text-accent" />,
        description: 'Crafting immersive user interfaces and experiences.',
        skills: [
            { name: 'React', level: 90, icon: <FaReact className="text-[#61DAFB]" /> },
            { name: 'Tailwind CSS', level: 95, icon: <SiTailwindcss className="text-[#38B2AC]" /> },
            { name: 'Framer Motion', level: 85, icon: <SiFramer className="text-white" /> },
            { name: 'Three.js', level: 60, icon: <SiThreedotjs className="text-white" /> },
            { name: 'JavaScript', level: 92, icon: <SiJavascript className="text-[#F7DF1E]" /> },
        ]
    },
    {
        title: 'Backend',
        icon: <Database className="text-accent-purple" />,
        description: 'Building robust and scalable server-side systems.',
        skills: [
            { name: 'Node.js', level: 80, icon: <FaNodeJs className="text-[#339933]" /> },
            { name: 'Express', level: 85, icon: <SiExpress className="text-white" /> },
            { name: 'MongoDB', level: 75, icon: <SiMongodb className="text-[#47A248]" /> },
            { name: 'Python', level: 70, icon: <FaPython className="text-[#3776AB]" /> },
        ]
    },
    {
        title: 'Tools & DevOps',
        icon: <Wrench className="text-accent-blue" />,
        description: 'Optimizing workflows and ensuring deployment stability.',
        skills: [
            { name: 'Git & GitHub', level: 90, icon: <FaGithub className="text-white" /> },
            { name: 'Linux (Arch)', level: 85, icon: <FaLinux className="text-white" /> },
            { name: 'Docker', level: 65, icon: <FaDocker className="text-[#2496ED]" /> },
            { name: 'AI Workflows', level: 95, icon: <span className="text-xs">🤖</span> },
        ]
    }
]

const Skills = () => {
    const [expandedIndex, setExpandedIndex] = useState(0)

    return (
        <section id="skills" className="py-24 px-6 bg-white/[0.01]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        My <span className="text-accent underline decoration-accent/20 underline-offset-8">Arsenal</span>
                    </motion.h2>
                    <p className="text-white/40">Select a category to explore my technical stack.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {skillCategories.map((cat, i) => {
                        const isExpanded = expandedIndex === i

                        return (
                            <motion.div
                                key={cat.title}
                                layout
                                onClick={() => setExpandedIndex(i)}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className={`cursor-pointer p-8 glass rounded-[2.5rem] border-white/5 relative overflow-hidden transition-all duration-500 ${isExpanded ? 'lg:col-span-1 shadow-[0_0_50px_rgba(0,242,255,0.1)]' : 'hover:bg-white/[0.03]'
                                    }`}
                            >
                                {/* Background glow for expanded */}
                                {isExpanded && (
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[60px] -mr-10 -mt-10" />
                                )}

                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className={`p-4 rounded-2xl ${isExpanded ? 'bg-accent text-background' : 'bg-white/5 text-white/40'}`}>
                                            {cat.icon}
                                        </div>
                                        <div>
                                            <h3 className={`text-xl font-bold ${isExpanded ? 'text-white' : 'text-white/60'}`}>
                                                {cat.title}
                                            </h3>
                                            {!isExpanded && <p className="text-xs text-white/30 uppercase tracking-widest mt-1">Click to open</p>}
                                        </div>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: isExpanded ? 90 : 0 }}
                                        className="text-white/20"
                                    >
                                        <ChevronRight />
                                    </motion.div>
                                </div>

                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-sm text-white/50 mb-8 leading-relaxed">
                                                {cat.description}
                                            </p>

                                            <div className="space-y-6">
                                                {cat.skills.map((skill) => (
                                                    <div key={skill.name} className="group/skill">
                                                        <div className="flex justify-between items-center text-sm mb-3 px-1">
                                                            <div className="flex items-center gap-3">
                                                                <span className="text-xl group-hover/skill:scale-125 transition-transform duration-300">
                                                                    {skill.icon}
                                                                </span>
                                                                <span className="font-medium text-white/80">{skill.name}</span>
                                                            </div>
                                                            <span className="text-accent font-mono text-xs">{skill.level}%</span>
                                                        </div>
                                                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                                            <motion.div
                                                                initial={{ width: 0 }}
                                                                animate={{ width: `${skill.level}%` }}
                                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                                                className={`h-full bg-gradient-to-r ${i === 0 ? 'from-accent to-accent-blue' :
                                                                    i === 1 ? 'from-accent-purple to-accent' :
                                                                        'from-accent-blue to-accent-purple'
                                                                    }`}
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skills
