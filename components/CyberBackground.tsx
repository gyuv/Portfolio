"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function StarField() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 3000;
  
  const [positions] = React.useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 25;
    }
    return pos;
  });

  useFrame((state) => {
    if (!pointsRef.current) return;
    const { x, y } = state.pointer;
    pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, y * 0.3, 0.05);
    pointsRef.current.rotation.y = THREE.MathUtils.lerp(pointsRef.current.rotation.y, x * 0.3, 0.05);
    pointsRef.current.rotation.z += 0.0008;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#06b6d4" sizeAttenuation transparent opacity={0.7} />
    </points>
  );
}

export default function CyberBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#020617]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.07)_0%,transparent_70%)]" />
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} style={{ background: "transparent" }}>
        <StarField />
      </Canvas>
    </div>
  );
}
