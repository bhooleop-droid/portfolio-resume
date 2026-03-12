import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
    {
        id: 1,
        title: 'Nexus AI Chat',
        category: 'Full Stack',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
        tags: ['Next.js', 'OpenAI', 'Tailwind'],
        link: '#',
        github: '#',
    },
    {
        id: 2,
        title: 'Crypto Pulse',
        category: 'Frontend',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
        tags: ['React', 'Chart.js', 'API'],
        link: '#',
        github: '#',
    },
    {
        id: 3,
        title: 'Archi-build CLI',
        category: 'Backend',
        image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800',
        tags: ['Node', 'Bash', 'Docker'],
        link: '#',
        github: '#',
    },
    {
        id: 4,
        title: 'Neon Dash',
        category: 'Frontend',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
        tags: ['Three.js', 'GSAP'],
        link: '#',
        github: '#',
    },
    {
        id: 5,
        title: 'Task Flow',
        category: 'Full Stack',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800',
        tags: ['React', 'Firebase'],
        link: '#',
        github: '#',
    },
]

const categories = ['All', 'Frontend', 'Backend', 'Full Stack']

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All')

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory)

    return (
        <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Digital <span className="text-accent underline decoration-accent/20 underline-offset-8">Creations</span>
                    </motion.h2>
                    <p className="text-white/40">A showcase of passion projects and experimental builds.</p>
                </div>

                {/* Filter Tabs */}
                <div className="flex glass p-1 rounded-full border-white/5 overflow-x-auto no-scrollbar">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${activeCategory === cat ? 'text-background' : 'text-white/60 hover:text-white'
                                }`}
                        >
                            <span className="relative z-10">{cat}</span>
                            {activeCategory === cat && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-accent rounded-full"
                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            className={`group glass rounded-3xl border-white/5 overflow-hidden flex flex-col ${idx === 0 ? 'md:col-span-2' : ''
                                }`}
                        >
                            <div className="relative h-64 md:h-80 overflow-hidden">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                                <div className="absolute top-4 right-4 flex gap-2">
                                    <a href={project.github} className="p-2 glass rounded-full hover:bg-accent hover:text-background transition-colors"><Github size={18} /></a>
                                    <a href={project.link} className="p-2 glass rounded-full hover:bg-accent hover:text-background transition-colors"><ExternalLink size={18} /></a>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full text-white/40">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                                <p className="text-sm text-white/40">{project.category} Project</p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    )
}

export default Projects
