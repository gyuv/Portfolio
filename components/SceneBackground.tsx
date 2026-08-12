"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial, Sphere, Torus } from "@react-three/drei";
import * as THREE from "three";

function GlassSphere({
  position,
  scale,
  color,
  speed = 1,
}: {
  position: [number, number, number];
  scale: number;
  color: string;
  speed?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.08 * speed;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15 * speed) * 0.15;
  });
  return (
    <Float speed={1.4 * speed} rotationIntensity={0.4} floatIntensity={1.2}>
      <Sphere ref={ref} args={[1, 64, 64]} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.22}
          roughness={0.05}
          metalness={0.2}
          distort={0.25}
          speed={1.2}
        />
      </Sphere>
    </Float>
  );
}

function HoloRing({
  position,
  scale,
  color,
  rotation = [0, 0, 0],
}: {
  position: [number, number, number];
  scale: number;
  color: string;
  rotation?: [number, number, number];
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * 0.1;
  });
  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.8}>
      <Torus
        ref={ref}
        args={[1, 0.02, 16, 100]}
        position={position}
        scale={scale}
        rotation={rotation}
      >
        <meshBasicMaterial color={color} transparent opacity={0.35} />
      </Torus>
    </Float>
  );
}

function SkillOrb({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={2}>
      <Sphere args={[0.06, 16, 16]} position={position}>
        <meshBasicMaterial color={color} />
      </Sphere>
    </Float>
  );
}

export default function SceneBackground({ variant = "hero" }: { variant?: "hero" | "ambient" }) {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.6]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={0.6} color="#8B7CF6" />
          <pointLight position={[-5, -3, 2]} intensity={0.5} color="#5CD6C0" />

          <GlassSphere position={[2.4, 0.6, -1]} scale={1.4} color="#8B7CF6" speed={1} />
          <GlassSphere position={[-2.2, -0.8, -2]} scale={1} color="#5CD6C0" speed={0.7} />
          <GlassSphere position={[0.5, 1.6, -3]} scale={0.7} color="#C9A45C" speed={1.3} />

          <HoloRing position={[2.4, 0.6, -1]} scale={1.9} color="#8B7CF6" rotation={[1.2, 0.4, 0]} />
          <HoloRing position={[-2.2, -0.8, -2]} scale={1.4} color="#5CD6C0" rotation={[0.6, 1, 0]} />

          {variant === "hero" &&
            Array.from({ length: 8 }).map((_, i) => (
              <SkillOrb
                key={i}
                position={[
                  (Math.random() - 0.5) * 6,
                  (Math.random() - 0.5) * 4,
                  (Math.random() - 0.5) * 3,
                ]}
                color={["#8B7CF6", "#5CD6C0", "#C9A45C"][i % 3]}
              />
            ))}

          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
