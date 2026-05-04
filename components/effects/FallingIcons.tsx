"use client";

import { useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { SiMysql, SiPostgresql, SiMongodb } from "react-icons/si";
import {
  M365Icon,
  OracleIcon,
  SqlServerIcon
} from "@/components/icons/BrandIcons";

// Lazy-load the 3D robot to avoid SSR issues with Three.js
const Robot3D = dynamic(() => import("@/components/Robot3D"), {
  ssr: false,
  loading: () => null
});

/**
 * 3D Robot that throws large glowing database / tech icons across the screen.
 *
 * The robot is a real-time Three.js 3D model (no image) on the left side.
 * Icons arc across the screen in curved trajectories.
 *
 * Purely decorative — pointer-events: none, aria-hidden.
 */

type IconDef = {
  id: string;
  label: string;
  color: string;
  glow: string;
  component: React.ComponentType<React.SVGProps<SVGSVGElement> & { className?: string }>;
  tinted?: boolean;
};

const ICON_DEFS: IconDef[] = [
  {
    id: "oracle",
    label: "Oracle DB",
    color: "#F80000",
    glow: "rgba(248,0,0,0.6)",
    component: OracleIcon,
    tinted: true
  },
  {
    id: "mysql",
    label: "MySQL",
    color: "#00758F",
    glow: "rgba(0,117,143,0.6)",
    component: SiMysql,
    tinted: true
  },
  {
    id: "sqlserver",
    label: "SQL Server",
    color: "#CC2927",
    glow: "rgba(204,41,39,0.6)",
    component: SqlServerIcon,
    tinted: true
  },
  {
    id: "postgres",
    label: "PostgreSQL",
    color: "#4169E1",
    glow: "rgba(65,105,225,0.6)",
    component: SiPostgresql,
    tinted: true
  },
  {
    id: "mongodb",
    label: "MongoDB",
    color: "#47A248",
    glow: "rgba(71,162,72,0.6)",
    component: SiMongodb,
    tinted: true
  },
  {
    id: "m365",
    label: "M365 Admin",
    color: "#0078D4",
    glow: "rgba(0,120,212,0.6)",
    component: M365Icon,
    tinted: false
  }
];

type ThrownIcon = {
  key: string;
  def: IconDef;
  size: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  peakY: number;
  duration: number;
  delay: number;
  rotation: number;
  opacity: number;
};

function generateThrownIcon(index: number, variant: "hero" | "section"): ThrownIcon {
  const def = ICON_DEFS[index % ICON_DEFS.length];
  const isHero = variant === "hero";

  const size = isHero ? 48 + Math.random() * 42 : 36 + Math.random() * 28;

  // Icons launch from center for hero, or left for section
  const startX = isHero ? 45 + Math.random() * 10 : 5 + Math.random() * 10;
  const startY = isHero ? 40 + Math.random() * 20 : 30 + Math.random() * 40;
  
  // Throw outwards to left or right if hero, otherwise arc right
  const endX = isHero 
    ? (Math.random() > 0.5 ? -10 + Math.random() * 30 : 80 + Math.random() * 30)
    : 50 + Math.random() * 48;
    
  const endY = 15 + Math.random() * 75;
  const peakY = startY - 20 - Math.random() * 30;

  return {
    key: `${def.id}-${Date.now()}-${Math.random()}`,
    def,
    size,
    startX,
    startY,
    endX,
    endY,
    peakY,
    duration: isHero ? 8 + Math.random() * 8 : 10 + Math.random() * 10,
    delay: index * 1.2 + Math.random() * 3,
    rotation: (Math.random() - 0.5) * 720,
    opacity: isHero ? 0.2 + Math.random() * 0.2 : 0.15 + Math.random() * 0.15
  };
}

/* ---------- Particle spark ---------- */
function Spark({
  color,
  delay,
  x,
  y
}: {
  color: string;
  delay: number;
  x: number;
  y: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: 3 + Math.random() * 4,
        height: 3 + Math.random() * 4,
        background: color,
        boxShadow: `0 0 8px ${color}, 0 0 16px ${color}`,
        left: `${x}%`,
        top: `${y}%`
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.8, 0],
        scale: [0, 1.5, 0],
        y: [0, -20 + Math.random() * 40],
        x: [0, -15 + Math.random() * 30]
      }}
      transition={{
        duration: 2 + Math.random() * 2,
        delay: delay,
        repeat: Infinity,
        repeatDelay: 3 + Math.random() * 5
      }}
    />
  );
}

export default function FallingIcons({
  count = 18,
  variant = "hero",
  showRobot = true
}: {
  count?: number;
  variant?: "hero" | "section";
  showRobot?: boolean;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const icons = useMemo(() => {
    if (!mounted) return [];
    return Array.from({ length: count }, (_, i) => generateThrownIcon(i, variant));
  }, [mounted, count, variant]);

  const sparks = useMemo(() => {
    if (!mounted) return [];
    return Array.from({ length: variant === "hero" ? 30 : 15 }, (_, i) => ({
      key: `spark-${i}`,
      color: ICON_DEFS[i % ICON_DEFS.length].color,
      delay: Math.random() * 8,
      x: Math.random() * 100,
      y: Math.random() * 100
    }));
  }, [mounted, variant]);

  if (!mounted) return null;

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden
    >
      {/* 3D Robot — LARGE, dominating the left-center of the hero */}
      {showRobot && variant === "hero" && (
        <motion.div
          className="absolute z-[2] pointer-events-none"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "clamp(380px, 60vw, 800px)",
            height: "clamp(500px, 90vh, 900px)"
          }}
        >
          {/* Large glow aura behind the robot */}
          <motion.div
            className="absolute -inset-12 rounded-full blur-[80px] -z-10"
            style={{
              background:
                "radial-gradient(circle, rgba(6,182,212,0.35) 0%, rgba(37,99,235,0.2) 30%, rgba(16,185,129,0.1) 50%, transparent 70%)"
            }}
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.5, 0.85, 0.5]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Pulsing energy ring around robot */}
          <motion.div
            className="absolute inset-[15%] rounded-full border border-cyan-400/20 -z-5"
            animate={{
              scale: [0.9, 1.05, 0.9],
              opacity: [0.15, 0.4, 0.15],
              rotate: [0, 360]
            }}
            transition={{
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
            style={{
              boxShadow: "0 0 40px rgba(6,182,212,0.15), inset 0 0 40px rgba(6,182,212,0.08)"
            }}
          />

          <Robot3D />

          {/* "Deploying databases..." text */}
          <motion.div
            className="absolute bottom-[8%] left-1/2 -translate-x-1/2 whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.9, 0.9, 0] }}
            transition={{ duration: 5, delay: 3, repeat: Infinity, repeatDelay: 8 }}
          >
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-accent-cyan/90 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
              ⚡ deploying databases...
            </span>
          </motion.div>
        </motion.div>
      )}

      {/* Ambient sparks */}
      {sparks.map((s) => (
        <Spark key={s.key} color={s.color} delay={s.delay} x={s.x} y={s.y} />
      ))}

      {/* Thrown icons arcing across screen */}
      <AnimatePresence>
        {icons.map((icon) => {
          const Icon = icon.def.component;
          return (
            <motion.div
              key={icon.key}
              className="absolute"
              style={{
                width: icon.size,
                height: icon.size,
              }}
              initial={{
                left: `${icon.startX}%`,
                top: `${icon.startY}%`,
                opacity: 0,
                rotate: 0,
                scale: 0.3
              }}
              animate={{
                left: [`${icon.startX}%`, `${(icon.startX + icon.endX) / 2}%`, `${icon.endX}%`],
                top: [`${icon.startY}%`, `${icon.peakY}%`, `${icon.endY}%`],
                opacity: [0, icon.opacity, icon.opacity * 0.8, 0],
                rotate: icon.rotation,
                scale: [0.3, 1.1, 1, 0.6]
              }}
              transition={{
                duration: icon.duration,
                delay: icon.delay,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 2 + Math.random() * 4
              }}
            >
              {/* Icon glow container */}
              <div
                className="relative w-full h-full"
                style={{
                  filter: `drop-shadow(0 0 14px ${icon.def.glow}) drop-shadow(0 0 28px ${icon.def.glow})`
                }}
              >
                {/* Rotating halo ring */}
                <motion.div
                  className="absolute -inset-2 rounded-full border opacity-30"
                  style={{
                    borderColor: icon.def.color,
                    boxShadow: `0 0 12px ${icon.def.glow}`
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />

                <Icon
                  className="w-full h-full"
                  style={
                    icon.def.tinted
                      ? { color: icon.def.color }
                      : undefined
                  }
                />
              </div>

              {/* Glowing label */}
              <span
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-mono font-bold uppercase tracking-widest whitespace-nowrap"
                style={{
                  color: icon.def.color,
                  opacity: 0.8,
                  textShadow: `0 0 8px ${icon.def.glow}, 0 0 16px ${icon.def.glow}`
                }}
              >
                {icon.def.label}
              </span>

              {/* Trailing particle */}
              <motion.div
                className="absolute -z-10 rounded-full"
                style={{
                  width: icon.size * 0.3,
                  height: icon.size * 0.3,
                  background: `radial-gradient(circle, ${icon.def.color}40, transparent)`,
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)"
                }}
                animate={{
                  scale: [1, 2.5, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
