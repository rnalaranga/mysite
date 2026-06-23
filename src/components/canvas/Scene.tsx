"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.3;
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere args={[1, 64, 64]} ref={sphereRef} scale={1.8}>
      <MeshDistortMaterial
        color="#0055FF"
        attach="material"
        distort={0.4}
        speed={2.5}
        roughness={0.1}
        metalness={0.9}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </Sphere>
  );
}

export default function Scene() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none opacity-80">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#0055FF" />
        <AnimatedSphere />
        <Sparkles count={300} scale={12} size={6} speed={0.4} opacity={0.6} color="#0055FF" />
      </Canvas>
    </div>
  );
}

