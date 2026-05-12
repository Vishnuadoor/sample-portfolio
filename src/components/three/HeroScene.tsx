'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  Group 
} from 'three';
import { 
  Environment, 
  Float, 
  MeshDistortMaterial,
  PerspectiveCamera
} from '@react-three/drei';
import * as THREE from 'three';

function Scene() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.005;
    
    // Mouse follow
    const x = (state.mouse.x * Math.PI) / 6;
    const y = (state.mouse.y * Math.PI) / 6;
    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y, 0.1);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x, 0.1);
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
      <Environment preset="studio" />
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#ff8c00" />
      <rectAreaLight
        width={10}
        height={10}
        intensity={2}
        position={[-10, 0, 5]}
        color="#00f5ff"
      />

      <group ref={groupRef} position={[2, 0, 0]}>
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <mesh ref={meshRef}>
            <torusKnotGeometry args={[1, 0.35, 128, 32]} />
            <meshPhysicalMaterial
              transmission={0.8}
              thickness={1.5}
              roughness={0.1}
              ior={1.2}
              clearcoat={0.5}
              metalness={0.1}
              color="#00f5ff"
              emissive="#00f5ff"
              emissiveIntensity={0.2}
            />
          </mesh>
        </Float>
      </group>
    </>
  );
}

export default function HeroScene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="absolute inset-0 z-0" />;

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ 
          antialias: true,
          powerPreference: "high-performance",
          alpha: true
        }}
        camera={{ position: [0, 0, 5], fov: 50 }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
