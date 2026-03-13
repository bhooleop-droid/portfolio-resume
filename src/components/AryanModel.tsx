import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Float, ContactShadows, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const TechIcon = ({ slug, angle, distance, onSelect }: { slug: string; angle: number; distance: number; onSelect: (slug: string) => void }) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = React.useState(false);
  const purple = "8b5cf6";
  
  const texture = useMemo(() => {
    const loader = new THREE.TextureLoader();
    try {
        return loader.load(`https://cdn.simpleicons.org/${slug}/${purple}`);
    } catch {
        return null;
    }
  }, [slug]);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime() * 0.4;
      const currentAngle = angle + time;
      
      const targetPos = new THREE.Vector3(
        Math.cos(currentAngle) * distance,
        Math.sin(time * 0.8 + angle) * 0.5,
        Math.sin(currentAngle) * distance
      );

      // Gravity Displacement Logic
      const mouseX = (window as any).mouseX || 0;
      const mouseY = (window as any).mouseY || 0;
      
      // Project mouse to 3D roughly
      const mouse3D = new THREE.Vector3(mouseX * 5, mouseY * 5, 0);
      const distToMouse = targetPos.distanceTo(mouse3D);
      
      if (distToMouse < 4) {
        const pullStrength = (1 - distToMouse / 4) * 1.2;
        targetPos.lerp(mouse3D, pullStrength);
      }

      meshRef.current.position.lerp(targetPos, 0.1);
      
      // Scaling on hover
      const targetScale = hovered ? 1.4 : 1;
      meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1);
      meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, targetScale, 0.1);
      meshRef.current.scale.z = THREE.MathUtils.lerp(meshRef.current.scale.z, targetScale, 0.1);

      meshRef.current.lookAt(state.camera.position);
    }
  });

  if (!texture) return null;

  return (
    <group 
      ref={meshRef} 
      onClick={(e) => {
        e.stopPropagation();
        onSelect(slug);
      }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh>
        <planeGeometry args={[0.7, 0.7]} />
        <meshBasicMaterial map={texture} transparent={true} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 0, -0.01]}>
        <planeGeometry args={[0.9, 0.9]} />
        <meshBasicMaterial color={hovered ? "#a78bfa" : "#8b5cf6"} transparent opacity={hovered ? 0.4 : 0.15} />
      </mesh>
    </group>
  );
};

const EnergyCore = () => {
  const coreRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.y = time * 0.5;
      coreRef.current.rotation.z = time * 0.3;
      const scale = 1 + Math.sin(time * 2) * 0.1;
      coreRef.current.scale.set(scale, scale, scale);
    }
    if (outerRef.current) {
      outerRef.current.rotation.y = -time * 0.3;
      outerRef.current.rotation.x = time * 0.2;
    }
  });

  return (
    <group>
      {/* Inner Core */}
      <Sphere ref={coreRef} args={[0.8, 64, 64]}>
        <MeshDistortMaterial
          color="#8b5cf6"
          envMapIntensity={0.5}
          clearcoat={1}
          clearcoatRoughness={0}
          metalness={0.9}
          distort={0.4}
          speed={2}
        />
      </Sphere>
      
      {/* Outer Glow Shell */}
      <Sphere ref={outerRef} args={[1.2, 32, 32]}>
        <meshStandardMaterial
          color="#6d28d9"
          wireframe
          transparent
          opacity={0.1}
        />
      </Sphere>

      {/* Central Light Source */}
      <pointLight intensity={2} color="#a78bfa" distance={5} />
      <pointLight position={[0, 0, -1]} intensity={1} color="#ffffff" distance={2} />
    </group>
  );
};

const CyberLines = ({ count = 20 }: { count?: number }) => {
  const lines = useMemo(() => {
    const points = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const x = Math.cos(angle) * 4;
      const z = Math.sin(angle) * 4;
      const y = (Math.random() - 0.5) * 5;
      points.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(x, y, z));
    }
    return points;
  }, [count]);

  const geometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(lines), [lines]);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color="#8b5cf6" transparent opacity={0.1} />
    </lineSegments>
  );
};

const Scene = ({ onSelect }: { onSelect: (slug: string) => void }) => {
  const techs = [
    { slug: "react" },
    { slug: "javascript" },
    { slug: "typescript" },
    { slug: "nodedotjs" },
    { slug: "amazonaws" },
    { slug: "github" },
    { slug: "docker" },
    { slug: "vite" },
    { slug: "postgresql" },
    { slug: "firebase" },
  ];

  return (
    <group>
      <CyberLines count={25} />
      <EnergyCore />
      {techs.map((tech, i) => (
        <TechIcon 
          key={tech.slug} 
          slug={tech.slug} 
          angle={(i / techs.length) * Math.PI * 2} 
          distance={3.5} 
          onSelect={onSelect}
        />
      ))}
    </group>
  );
};

const AryanModel: React.FC<{ className?: string; onSelect?: (slug: string) => void }> = ({ className, onSelect }) => {
  return (
    <div className={`${className} cursor-pointer`}>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 40 }}>
        <ambientLight intensity={0.4} />
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={40} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Scene onSelect={onSelect || (() => {})} />
        </Float>
        <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={15} blur={3} far={4} color="#6d28d9" />
      </Canvas>
    </div>
  );
};

export default AryanModel;
