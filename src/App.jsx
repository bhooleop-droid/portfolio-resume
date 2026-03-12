import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'

const App = () => {
    useEffect(() => {
        const lenis = new Lenis()
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
        return () => {
            lenis.destroy()
        }
    }, [])

    console.log('Rendering App component...');
    return (
        <div className="relative min-h-screen bg-background text-white selection:bg-accent/30 selection:text-accent">
            <CustomCursor />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <footer className="py-10 text-center text-white/40 text-sm border-t border-white/5">
                <p>© {new Date().getFullYear()} Aryan. Built with 💎 and AI.</p>
            </footer>
        </div>
    );
};

export default App;
