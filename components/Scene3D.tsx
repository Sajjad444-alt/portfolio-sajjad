"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Stars } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

/* ----------------------- Database cylinder ----------------------- */
function DatabaseStack({
  position,
  color,
  scale = 1
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
}) {
  const group = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.15;
  });

  // 3 stacked cylinders to look like a database icon
  return (
    <Float
      speed={1.6}
      rotationIntensity={0.4}
      floatIntensity={1.2}
      floatingRange={[-0.25, 0.25]}
    >
      <group ref={group} position={position} scale={scale}>
        {[0.7, 0, -0.7].map((y, i) => (
          <mesh key={i} position={[0, y, 0]} castShadow>
            <cylinderGeometry args={[0.85, 0.85, 0.4, 48]} />
            <meshStandardMaterial
              color={color}
              metalness={0.85}
              roughness={0.15}
              emissive={color}
              emissiveIntensity={0.35}
            />
          </mesh>
        ))}
        {/* Glow ring on top */}
        <mesh position={[0, 0.92, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.85, 0.025, 16, 64]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={2}
            toneMapped={false}
          />
        </mesh>
      </group>
    </Float>
  );
}

/* --------------------------- Particle network --------------------------- */
function ParticleNetwork({ count = 220 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 6 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.04;
    ref.current.rotation.x = state.clock.elapsedTime * 0.015;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#22d3ee"
        sizeAttenuation
        transparent
        opacity={0.85}
        depthWrite={false}
      />
    </points>
  );
}

/* ------------------------------ Cloud server ----------------------------- */
function CloudNode({
  position,
  color
}: {
  position: [number, number, number];
  color: string;
}) {
  return (
    <Float speed={1.2} rotationIntensity={1} floatIntensity={1.4}>
      <mesh position={position}>
        <icosahedronGeometry args={[0.55, 1]} />
        <meshStandardMaterial
          color={color}
          metalness={0.7}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.4}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
}

/* ------------------------------- Main scene ------------------------------ */
function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[6, 6, 6]} intensity={1.2} color="#22d3ee" />
      <pointLight position={[-6, -4, 4]} intensity={0.9} color="#3b82f6" />
      <pointLight position={[0, -8, -6]} intensity={0.5} color="#10b981" />

      <Stars
        radius={60}
        depth={40}
        count={1200}
        factor={3}
        saturation={0}
        fade
        speed={0.6}
      />

      <ParticleNetwork count={220} />

      <DatabaseStack position={[-2.6, 0.3, 0]} color="#06b6d4" scale={1.05} />
      <DatabaseStack position={[2.6, -0.4, -1.2]} color="#3b82f6" scale={0.95} />
      <DatabaseStack position={[0, 1.6, -2.4]} color="#10b981" scale={0.8} />

      <CloudNode position={[3.5, 1.8, 1]} color="#22d3ee" />
      <CloudNode position={[-3.5, -1.8, 1]} color="#60a5fa" />
      <CloudNode position={[0, -2.6, 1.5]} color="#34d399" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.6}
        maxPolarAngle={Math.PI / 1.6}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 8], fov: 55 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <SceneContent />
      </Suspense>
    </Canvas>
  );
}
