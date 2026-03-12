Build a complete animated portfolio website for a Full Stack Developer named Aryan.
Use the provided reference image for UI layout, color scheme, card styles, and overall visual direction — 
replicate the vibe as closely as possible while making it feel next-level premium.

=== TECH STACK ===
- Framework: React (Vite)
- Styling: Tailwind CSS v3
- Animations: Framer Motion (use heavily — this is the soul of the site)
- 3D / WebGL: Three.js — animated particle field or geometric mesh in hero background
- Icons: Lucide React + React Icons
- Smooth scroll: Lenis
- Cursor: custom animated cursor component
- Font: Load via @fontsource or Google Fonts import
- Router: React Router v6 (single page, hash routing)
- Form: React Hook Form

=== PROJECT STRUCTURE ===
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Contact.jsx
    CustomCursor.jsx
    ParticleCanvas.jsx  ← Three.js scene
  App.jsx
  main.jsx
  index.css
tailwind.config.js
vite.config.js

=== SECTIONS ===

1. NAVBAR
   - Sticky, frosted glass (backdrop-blur), dark bg with slight transparency
   - Logo left (initials "AR" in glowing accent color)
   - Nav links right with Framer Motion hover underline animation
   - Hamburger menu on mobile with animated open/close (Framer Motion layout animation)
   - Scroll progress bar at top (thin accent-colored line)

2. HERO
   - Full viewport height
   - Three.js background: floating particle constellation that reacts to mouse movement
   - Framer Motion staggered entrance: greeting → name → animated typewriter role text
     (roles: "Full Stack Developer", "Web & App Builder", "Linux Nerd 🐧", "AI Enthusiast")
   - Two CTA buttons with magnetic hover effect
   - Bouncing scroll arrow at bottom
   - Ambient glow blobs behind content (CSS radial gradients, animated)

3. ABOUT
   - Split layout: left = animated blob avatar with gradient border orbit ring animation
   - Right = bio text that fades in word-by-word using Framer Motion
   - 3 stat cards (Projects, Technologies, Commits) with count-up animation on scroll using
     Framer Motion + useInView

4. SKILLS
   - Two columns: Frontend | Backend | Tools
   - Each skill: icon + name + animated progress bar (Framer Motion width transition on scroll)
   - Skill cards with tilt effect on hover (react-tilt or custom CSS perspective)
   - Tech logos grid below (floating animation, stagger in)

5. PROJECTS
   - Bento grid layout (CSS Grid, asymmetric)
   - Each project card:
     * Glassmorphism card style
     * Gradient glow border on hover (Framer Motion whileHover)
     * Tech stack badge chips
     * GitHub + Live preview icon buttons
     * 3D card tilt on mouse move (JS mousemove handler)
   - Filter tabs: All | Frontend | Backend | Full Stack (animated active indicator)

6. CONTACT
   - Minimal dark form with React Hook Form validation
   - Input fields: animated floating label + glowing border on focus
   - Submit button: Framer Motion loading spinner → success checkmark animation
   - Social row: GitHub, LinkedIn, Twitter/X — each with bounce on hover
   - Background: subtle animated grid pattern

=== STYLE (match reference image) ===
- Dark theme (near-black base)
- Pull exact accent color from reference image
- Glassmorphism cards throughout
- Tailwind CSS variables extended in tailwind.config.js for custom colors
- Fluid typography (clamp() for responsive font sizes)
- Smooth section transitions with Framer Motion AnimatePresence

=== ANIMATIONS (Framer Motion — go all out) ===
- useInView + variants for every section (staggerChildren, delayChildren)
- Page load sequence: splash → content reveal
- Parallax scroll on hero using useScroll + useTransform
- Magnetic buttons (mouse follow effect on CTA)
- Custom animated cursor: outer ring + inner dot, scale on hover, color change on links
- Section headings: character-by-character reveal using motion.span split

=== CONTENT ===
Write real, natural content for Aryan — a 13-year-old self-taught full stack developer from Pune, India.
He builds web and app projects using AI tools, loves Linux (Arch btw 🐧), and is passionate about
making cool things. Keep tone: confident, young, ambitious, slightly edgy.

=== DELIVERABLE ===
Output ALL files completely — every component, config, and style file.
Code must be 100% copy-paste ready into a fresh Vite + React project.
Zero placeholders. Zero TODOs. Fully working on first run.
Use the reference image attached for all visual decisions.