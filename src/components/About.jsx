import { motion } from 'framer-motion'
import { Code2, Cpu, Globe } from 'lucide-react'

const statCards = [
    { icon: <Code2 className="text-accent" />, label: 'Projects Built', value: '25+' },
    { icon: <Cpu className="text-accent-purple" />, label: 'Technologies', value: '12' },
    { icon: <Globe className="text-accent-blue" />, label: 'Commits', value: '1.2k' },
]

const About = () => {
    return (
        <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left: Interactive Avatar Blob */}
                <div className="relative flex justify-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="relative w-64 h-64 md:w-80 md:h-80"
                    >
                        {/* Animated Orbit ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-x-[-20px] inset-y-[-20px] rounded-full border-2 border-dashed border-accent/30"
                        />

                        {/* The Blob */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-purple rounded-full blur-3xl opacity-20 animate-pulse" />
                        <div className="relative w-full h-full glass rounded-3xl overflow-hidden flex items-center justify-center group">
                            <span className="text-6xl md:text-8xl select-none group-hover:scale-110 transition-transform duration-500">🐧</span>
                            {/* Overlay with details */}
                            <div className="absolute bottom-4 left-4 right-4 p-4 glass rounded-xl border-white/10 translate-y-2 group-hover:translate-y-0 transition-transform">
                                <p className="text-xs uppercase tracking-tighter text-white/50 mb-1">Status</p>
                                <p className="text-sm font-bold">Building with AI 🤖</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Content */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-8"
                    >
                        I'm a 13yo developer <br />
                        <span className="text-accent">redefining limits.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-lg text-white/60 leading-relaxed mb-10"
                    >
                        I'm Aryan, a self-taught full stack developer from Pune, India.
                        I spend my days crafting digital experiences with React, Node, and AI tools.
                        Passionate about open source, Linux (Arch btw 🐧), and anything that pushes
                        the boundaries of what's possible in the browser.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {statCards.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="p-6 glass rounded-2xl border-white/5"
                            >
                                <div className="mb-4">{stat.icon}</div>
                                <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                                <p className="text-xs uppercase tracking-widest text-white/40">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
