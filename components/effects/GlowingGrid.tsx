"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

/**
 * Glowing hexagonal grid that pulses with energy — evokes a "matrix" / "digital infrastructure" feel.
 * Renders as a full-screen background overlay with animated connection lines.
 */

type GridNode = {
  id: number;
  x: number;
  y: number;
  delay: number;
  size: number;
  color: string;
};

const COLORS = ["#06b6d4", "#2563eb", "#10b981", "#F80000", "#00758F", "#4169E1"];

export default function GlowingGrid({ density = 20 }: { density?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const nodes = useMemo(() => {
    if (!mounted) return [];
    return Array.from({ length: density }, (_, i): GridNode => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 8,
      size: 2 + Math.random() * 3,
      color: COLORS[i % COLORS.length]
    }));
  }, [mounted, density]);

  // Generate connection lines between nearby nodes
  const lines = useMemo(() => {
    if (!mounted || nodes.length < 2) return [];
    const result: { x1: number; y1: number; x2: number; y2: number; color: string; delay: number }[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 25) {
          result.push({
            x1: nodes[i].x,
            y1: nodes[i].y,
            x2: nodes[j].x,
            y2: nodes[j].y,
            color: nodes[i].color,
            delay: Math.random() * 6
          });
        }
      }
    }
    return result;
  }, [mounted, nodes]);

  if (!mounted) return null;

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none -z-0"
      aria-hidden
    >
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Animated connection lines */}
        {lines.map((line, i) => (
          <motion.line
            key={`line-${i}`}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x2}%`}
            y2={`${line.y2}%`}
            stroke={line.color}
            strokeWidth={0.5}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.15, 0.05, 0.15, 0] }}
            transition={{
              duration: 6 + Math.random() * 4,
              delay: line.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>

      {/* Glowing nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute rounded-full"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: node.size,
            height: node.size,
            background: node.color,
            boxShadow: `0 0 ${node.size * 3}px ${node.color}, 0 0 ${node.size * 6}px ${node.color}40`
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.4, 0.8]
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            delay: node.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
