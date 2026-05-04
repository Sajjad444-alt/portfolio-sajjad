"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";

/* ───────────────── Glowing material helper ───────────────── */
function GlowMaterial({
  color,
  emissiveIntensity = 0.6,
  metalness = 0.9,
  roughness = 0.15
}: {
  color: string;
  emissiveIntensity?: number;
  metalness?: number;
  roughness?: number;
}) {
  return (
    <meshStandardMaterial
      color={color}
      emissive={color}
      emissiveIntensity={emissiveIntensity}
      metalness={metalness}
      roughness={roughness}
      toneMapped={false}
    />
  );
}

/* ───────────────── Robot Head ───────────────── */
function RobotHead() {
  const visorRef = useRef<THREE.MeshStandardMaterial>(null!);
  const antennaRef = useRef<THREE.MeshStandardMaterial>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (visorRef.current) visorRef.current.emissiveIntensity = 2.5 + Math.sin(t * 3) * 1.2;
    if (antennaRef.current) antennaRef.current.emissiveIntensity = 2.5 + Math.sin(t * 5) * 2;
  });

  return (
    <group position={[0, 2.2, 0]}>
      {/* Main head — larger */}
      <mesh castShadow>
        <boxGeometry args={[0.9, 0.7, 0.65]} />
        <GlowMaterial color="#f1f5f9" metalness={0.85} roughness={0.15} emissiveIntensity={0.05} />
      </mesh>

      {/* Head top bevel */}
      <mesh position={[0, 0.35, 0]} castShadow>
        <boxGeometry args={[0.7, 0.08, 0.5]} />
        <GlowMaterial color="#e2e8f0" metalness={0.9} roughness={0.2} emissiveIntensity={0.1} />
      </mesh>

      {/* Visor / eye — wide glowing cyan strip */}
      <mesh position={[0, 0.05, 0.331]}>
        <boxGeometry args={[0.65, 0.14, 0.02]} />
        <meshStandardMaterial
          ref={visorRef}
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={2.5}
          toneMapped={false}
        />
      </mesh>

      {/* Eye pupils */}
      {[-0.15, 0.15].map((x) => (
        <mesh key={x} position={[x, 0.05, 0.342]}>
          <sphereGeometry args={[0.045, 16, 16]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={4} toneMapped={false} />
        </mesh>
      ))}

      {/* Chin guard */}
      <mesh position={[0, -0.28, 0.15]}>
        <boxGeometry args={[0.5, 0.12, 0.35]} />
        <GlowMaterial color="#cbd5e1" metalness={0.9} roughness={0.1} emissiveIntensity={0.05} />
      </mesh>

      {/* Antenna mast */}
      <mesh position={[0, 0.55, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.35, 8]} />
        <GlowMaterial color="#06b6d4" emissiveIntensity={1.8} />
      </mesh>
      {/* Antenna tip */}
      <mesh position={[0, 0.75, 0]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial ref={antennaRef} color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2.5} toneMapped={false} />
      </mesh>
      {/* Antenna ring */}
      <mesh position={[0, 0.65, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.08, 0.012, 12, 24]} />
        <GlowMaterial color="#06b6d4" emissiveIntensity={2} />
      </mesh>

      {/* Head side panels / "ears" */}
      {[-1, 1].map((side) => (
        <group key={side}>
          <mesh position={[side * 0.47, 0, 0]}>
            <boxGeometry args={[0.06, 0.45, 0.5]} />
            <GlowMaterial color="#f8fafc" metalness={0.8} roughness={0.15} emissiveIntensity={0.08} />
          </mesh>
          {/* Ear light */}
          <mesh position={[side * 0.51, 0.05, 0.1]}>
            <boxGeometry args={[0.015, 0.2, 0.06]} />
            <GlowMaterial color="#2563eb" emissiveIntensity={2} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

/* ───────────────── Neck ───────────────── */
function RobotNeck() {
  return (
    <group position={[0, 1.7, 0]}>
      <mesh>
        <cylinderGeometry args={[0.15, 0.2, 0.25, 12]} />
        <GlowMaterial color="#e2e8f0" metalness={0.9} roughness={0.15} emissiveIntensity={0.1} />
      </mesh>
      {/* Neck ring light */}
      <mesh position={[0, -0.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.18, 0.015, 12, 24]} />
        <GlowMaterial color="#06b6d4" emissiveIntensity={1.5} />
      </mesh>
    </group>
  );
}

/* ───────────────── Robot Torso ───────────────── */
function RobotTorso() {
  const coreRef = useRef<THREE.MeshStandardMaterial>(null!);
  const coreRingRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (coreRef.current) coreRef.current.emissiveIntensity = 4 + Math.sin(t * 2) * 2;
    if (coreRingRef.current) coreRingRef.current.rotation.z = t * 0.8;
  });

  return (
    <group position={[0, 0.7, 0]}>
      {/* Main chest */}
      <mesh castShadow>
        <boxGeometry args={[1.3, 1.3, 0.7]} />
        <GlowMaterial color="#f1f5f9" metalness={0.85} roughness={0.15} emissiveIntensity={0.06} />
      </mesh>

      {/* Chest plate overlay */}
      <mesh position={[0, 0, 0.355]}>
        <boxGeometry args={[1.1, 1.1, 0.02]} />
        <GlowMaterial color="#e2e8f0" metalness={0.9} roughness={0.1} emissiveIntensity={0.04} />
      </mesh>

      {/* Chest reactor / arc reactor core */}
      <mesh position={[0, 0.15, 0.37]}>
        <cylinderGeometry args={[0.2, 0.2, 0.03, 32]} />
        <meshStandardMaterial ref={coreRef} color="#06b6d4" emissive="#06b6d4" emissiveIntensity={4} toneMapped={false} />
      </mesh>
      {/* Spinning reactor ring */}
      <mesh ref={coreRingRef} position={[0, 0.15, 0.38]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.2, 0.025, 16, 32]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={3} toneMapped={false} />
      </mesh>
      {/* Outer reactor ring */}
      <mesh position={[0, 0.15, 0.375]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.28, 0.012, 16, 32]} />
        <GlowMaterial color="#2563eb" emissiveIntensity={1.5} />
      </mesh>

      {/* Chest detail lines — horizontal accent strips */}
      {[-0.3, -0.1, 0.1, 0.3].map((y, i) => (
        <mesh key={i} position={[0, y - 0.15, 0.365]}>
          <boxGeometry args={[0.9, 0.012, 0.01]} />
          <GlowMaterial color="#2563eb" emissiveIntensity={0.6 + (i % 2) * 0.4} />
        </mesh>
      ))}

      {/* Shoulder caps */}
      {[-1, 1].map((side) => (
        <mesh key={side} position={[side * 0.72, 0.5, 0]}>
          <sphereGeometry args={[0.16, 16, 16]} />
          <GlowMaterial color="#cbd5e1" metalness={0.9} roughness={0.12} emissiveIntensity={0.05} />
        </mesh>
      ))}

      {/* Waist / hip section */}
      <mesh position={[0, -0.8, 0]} castShadow>
        <boxGeometry args={[0.9, 0.3, 0.55]} />
        <GlowMaterial color="#cbd5e1" metalness={0.88} roughness={0.15} emissiveIntensity={0.05} />
      </mesh>
      {/* Waist light strip */}
      <mesh position={[0, -0.7, 0.28]}>
        <boxGeometry args={[0.7, 0.03, 0.01]} />
        <GlowMaterial color="#10b981" emissiveIntensity={2} />
      </mesh>
    </group>
  );
}

/* ───────────────── Robot Arm ───────────────── */
function RobotArm({ side }: { side: "left" | "right" }) {
  const xDir = side === "left" ? -1 : 1;
  const upperArmRef = useRef<THREE.Group>(null!);
  const forearmRef = useRef<THREE.Group>(null!);
  const orbRef = useRef<THREE.MeshStandardMaterial>(null!);
  const orbMeshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    // Both arms throw, left arm is offset in phase
    const phaseOffset = side === "left" ? Math.PI : 0;
    const t = state.clock.elapsedTime * 1.2 + phaseOffset;

    const shoulderRot = -0.4 + Math.sin(t) * 0.9;
    const elbowRot = -0.6 + Math.sin(t + 0.5) * 0.7;

    if (upperArmRef.current) upperArmRef.current.rotation.x = shoulderRot;
    if (forearmRef.current) forearmRef.current.rotation.x = elbowRot;
    if (orbRef.current) orbRef.current.emissiveIntensity = 5 + Math.sin(t * 4) * 3;
    if (orbMeshRef.current) orbMeshRef.current.scale.setScalar(1 + Math.sin(t * 3) * 0.2);
  });

  return (
    <group position={[xDir * 0.85, 1.1, 0]}>
      {/* Shoulder joint */}
      <mesh>
        <sphereGeometry args={[0.16, 16, 16]} />
        <GlowMaterial color="#94a3b8" emissiveIntensity={0.1} />
      </mesh>

      {/* Upper arm */}
      <group ref={upperArmRef} rotation={[0, 0, xDir * -0.12]}>
        <mesh position={[0, -0.35, 0]} castShadow>
          <boxGeometry args={[0.22, 0.6, 0.22]} />
          <GlowMaterial color="#f1f5f9" metalness={0.9} roughness={0.1} emissiveIntensity={0.05} />
        </mesh>
        {/* Upper arm accent light */}
        <mesh position={[0, -0.35, 0.115]}>
          <boxGeometry args={[0.04, 0.4, 0.01]} />
          <GlowMaterial color="#06b6d4" emissiveIntensity={1} />
        </mesh>

        {/* Elbow */}
        <group position={[0, -0.7, 0]}>
          <mesh>
            <sphereGeometry args={[0.12, 16, 16]} />
            <GlowMaterial color="#06b6d4" emissiveIntensity={1.5} />
          </mesh>

          {/* Forearm */}
          <group ref={forearmRef}>
            <mesh position={[0, -0.32, 0]} castShadow>
              <boxGeometry args={[0.19, 0.55, 0.19]} />
              <GlowMaterial color="#f8fafc" metalness={0.85} roughness={0.1} emissiveIntensity={0.05} />
            </mesh>
            {/* Forearm accent */}
            <mesh position={[0, -0.32, 0.1]}>
              <boxGeometry args={[0.04, 0.35, 0.01]} />
              <GlowMaterial color="#2563eb" emissiveIntensity={0.8} />
            </mesh>

            {/* Hand */}
            <group position={[0, -0.65, 0]}>
              <mesh>
                <boxGeometry args={[0.16, 0.12, 0.12]} />
                <GlowMaterial color="#94a3b8" emissiveIntensity={0.1} />
              </mesh>

              {/* Energy orb in BOTH hands */}
              <mesh ref={orbMeshRef} position={[0, -0.1, 0.12]}>
                <sphereGeometry args={[0.12, 24, 24]} />
                <meshStandardMaterial
                  ref={orbRef}
                  color="#22d3ee"
                  emissive="#22d3ee"
                  emissiveIntensity={5}
                  transparent
                  opacity={0.85}
                  toneMapped={false}
                />
              </mesh>

              {/* Fingers — 4 per hand */}
              {[-0.05, -0.017, 0.017, 0.05].map((z, i) => (
                <mesh key={i} position={[0, -0.12, z]}>
                  <boxGeometry args={[0.03, 0.1, 0.03]} />
                  <GlowMaterial color="#64748b" emissiveIntensity={0.1} />
                </mesh>
              ))}
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

/* ───────────────── Robot Legs ───────────────── */
function RobotLegs() {
  return (
    <group position={[0, -0.5, 0]}>
      {[-1, 1].map((side) => (
        <group key={side} position={[side * 0.28, 0, 0]}>
          {/* Hip joint */}
          <mesh position={[0, 0.05, 0]}>
            <sphereGeometry args={[0.1, 12, 12]} />
            <GlowMaterial color="#94a3b8" emissiveIntensity={0.1} />
          </mesh>
          {/* Upper leg */}
          <mesh position={[0, -0.3, 0]} castShadow>
            <boxGeometry args={[0.24, 0.55, 0.24]} />
            <GlowMaterial color="#f1f5f9" metalness={0.9} roughness={0.12} emissiveIntensity={0.05} />
          </mesh>
          {/* Leg accent */}
          <mesh position={[0, -0.3, 0.125]}>
            <boxGeometry args={[0.04, 0.35, 0.01]} />
            <GlowMaterial color="#2563eb" emissiveIntensity={0.6} />
          </mesh>
          {/* Knee joint */}
          <mesh position={[0, -0.6, 0]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <GlowMaterial color="#2563eb" emissiveIntensity={1.2} />
          </mesh>
          {/* Lower leg */}
          <mesh position={[0, -0.95, 0]} castShadow>
            <boxGeometry args={[0.21, 0.55, 0.21]} />
            <GlowMaterial color="#f8fafc" metalness={0.9} roughness={0.1} emissiveIntensity={0.05} />
          </mesh>
          {/* Lower leg accent */}
          <mesh position={[0, -0.95, 0.11]}>
            <boxGeometry args={[0.035, 0.35, 0.01]} />
            <GlowMaterial color="#06b6d4" emissiveIntensity={0.8} />
          </mesh>
          {/* Foot */}
          <mesh position={[0, -1.28, 0.06]} castShadow>
            <boxGeometry args={[0.28, 0.1, 0.38]} />
            <GlowMaterial color="#cbd5e1" emissiveIntensity={0.05} />
          </mesh>
          {/* Foot glow strip */}
          <mesh position={[0, -1.23, 0.15]}>
            <boxGeometry args={[0.22, 0.015, 0.2]} />
            <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={3} toneMapped={false} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

/* ───────────────── Energy Particles ───────────────── */
function EnergyParticles({ count = 80 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#22d3ee"),
      new THREE.Color("#2563eb"),
      new THREE.Color("#10b981"),
      new THREE.Color("#F80000"),
      new THREE.Color("#00758F"),
      new THREE.Color("#4169E1")
    ];
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 7;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
      const c = palette[i % palette.length];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const posArr = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      posArr[i * 3 + 1] += Math.sin(t * 0.8 + i) * 0.003;
      posArr[i * 3] += Math.cos(t * 0.4 + i * 0.3) * 0.002;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
    ref.current.rotation.y = t * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} count={count} />
      </bufferGeometry>
      <pointsMaterial size={0.08} vertexColors sizeAttenuation transparent opacity={0.85} depthWrite={false} />
    </points>
  );
}

/* ───────────────── Ground Glow ───────────────── */
function GroundGlow() {
  const ref = useRef<THREE.MeshStandardMaterial>(null!);

  useFrame((state) => {
    if (ref.current) {
      ref.current.emissiveIntensity = 0.4 + Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.9, 0]}>
      <circleGeometry args={[2.2, 64]} />
      <meshStandardMaterial ref={ref} color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.4} transparent opacity={0.2} toneMapped={false} />
    </mesh>
  );
}

/* ───────────────── Full Robot Assembly ───────────────── */
function RobotAssembly() {
  const groupRef = useRef<THREE.Group>(null!);
  const entryDone = useRef(false);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;

    // Dramatic entrance: scale from 0 → 1 over first 2 seconds
    if (!entryDone.current) {
      const progress = Math.min(t / 1.8, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      groupRef.current.scale.setScalar(ease);
      if (progress >= 1) entryDone.current = true;
    }

    // Gentle hover
    groupRef.current.position.y = Math.sin(t * 0.6) * 0.15;
    // Subtle rotation
    groupRef.current.rotation.y = Math.sin(t * 0.25) * 0.2 + 0.25;
  });

  return (
    <Float speed={0.6} rotationIntensity={0.05} floatIntensity={0.2}>
      <group ref={groupRef} scale={0}>
        <RobotHead />
        <RobotNeck />
        <RobotTorso />
        <RobotArm side="left" />
        <RobotArm side="right" />
        <RobotLegs />
        <EnergyParticles count={80} />
        <GroundGlow />
      </group>
    </Float>
  );
}

/* ───────────────── Exported Canvas Scene ───────────────── */
export default function Robot3D() {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 5.5], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        {/* Ambient fill */}
        <ambientLight intensity={0.5} />
        {/* Key light — cyan from top-right */}
        <pointLight position={[4, 4, 4]} intensity={2.5} color="#22d3ee" />
        {/* Fill light — blue from left */}
        <pointLight position={[-4, -1, 3]} intensity={1.8} color="#2563eb" />
        {/* Rim light — green from below */}
        <pointLight position={[0, -4, -2]} intensity={1} color="#10b981" />
        {/* Spotlight — dramatic top-down */}
        <spotLight position={[0, 6, 4]} angle={0.4} penumbra={0.7} intensity={3} color="#ffffff" />
        {/* Back light for depth */}
        <pointLight position={[0, 2, -4]} intensity={1.5} color="#7c3aed" />
        <RobotAssembly />
      </Suspense>
    </Canvas>
  );
}
