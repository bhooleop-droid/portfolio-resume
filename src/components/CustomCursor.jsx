import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

const CustomCursor = () => {
    const [isPointer, setIsPointer] = useState(false)

    const mouseX = useSpring(0, { stiffness: 500, damping: 28 })
    const mouseY = useSpring(0, { stiffness: 500, damping: 28 })

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }

        const handleMouseOver = (e) => {
            const target = e.target
            const isClickable =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('button') ||
                target.closest('a') ||
                getComputedStyle(target).cursor === 'pointer'

            setIsPointer(!!isClickable)
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseover', handleMouseOver)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseover', handleMouseOver)
        }
    }, [mouseX, mouseY])

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isPointer ? 1.5 : 1,
                    backgroundColor: isPointer ? 'rgba(0, 242, 255, 0.2)' : 'transparent',
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-accent pointer-events-none z-[9999]"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />
        </>
    )
}

export default CustomCursor
