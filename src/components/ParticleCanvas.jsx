import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Particles = ({ count = 5000 }) => {
    const mesh = useRef()
    const light = useRef()

    const { positions, distance } = useMemo(() => {
        const positions = new Float32Array(count * 3)
        const distance = new Float32Array(count)
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10
            distance[i] = Math.random()
        }
        return { positions, distance }
    }, [count])

    useFrame((state) => {
        if (!mesh.current) return
        const time = state.clock.getElapsedTime()
        mesh.current.rotation.y = time * 0.05
        mesh.current.rotation.x = time * 0.02

        const positions = mesh.current.geometry.attributes.position.array
        // Morph effect
        for (let i = 0; i < count; i++) {
            const i3 = i * 3
            positions[i3 + 1] += Math.sin(time + distance[i]) * 0.002
        }
        mesh.current.geometry.attributes.position.needsUpdate = true
    })

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.015}
                color="#00f2ff"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    )
}

const ParticleCanvas = () => {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <Particles />
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
        </div>
    )
}

export default ParticleCanvas
