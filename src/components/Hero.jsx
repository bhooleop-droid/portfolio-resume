import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import ParticleCanvas from './ParticleCanvas'
import { useEffect, useState } from 'react'

const roles = ["Full Stack Developer", "Web & App Builder", "Linux Nerd 🐧", "AI Enthusiast"]

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0)
    const [displayText, setDisplayText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentRole = roles[roleIndex]
        const timer = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentRole.substring(0, displayText.length + 1))
                if (displayText.length === currentRole.length) {
                    setTimeout(() => setIsDeleting(true), 1500)
                }
            } else {
                setDisplayText(currentRole.substring(0, displayText.length - 1))
                if (displayText.length === 0) {
                    setIsDeleting(false)
                    setRoleIndex((prev) => (prev + 1) % roles.length)
                }
            }
        }, isDeleting ? 50 : 100)
        return () => clearTimeout(timer)
    }, [displayText, isDeleting, roleIndex])

    return (
        <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            <ParticleCanvas />

            <div className="relative z-10 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-accent font-medium tracking-widest text-sm uppercase mb-4 block">
                        Welcome to my universe
                    </span>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6">
                        I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-purple">Aryan</span>
                    </h1>

                    <div className="h-10 mb-10">
                        <p className="text-xl md:text-3xl text-white/70 font-light lowercase">
                            I am a <span className="text-white font-medium">{displayText}</span>
                            <span className="animate-pulse ml-1">|</span>
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-accent text-background font-bold rounded-full hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all duration-300"
                        >
                            Explore Projects
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 border border-white/20 rounded-full font-medium transition-all"
                        >
                            Let's Talk
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    )
}

export default Hero
