"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * Slow-drifting blurred gradient orbs in the background of any section.
 * Layered behind content with z-0 / pointer-events-none so it never blocks UI.
 *
 * Mounted only on the client to avoid SSR hydration mismatches caused by
 * framer-motion's animate-array transform style.
 */
export default function AnimatedOrbs({
  variant = "default"
}: {
  variant?: "default" | "subtle";
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const intensity = variant === "subtle" ? 0.35 : 0.55;

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none -z-0"
      aria-hidden
    >
      <motion.div
        className="absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.55), rgba(6,182,212,0) 70%)",
          opacity: intensity
        }}
        animate={{ x: [0, 80, -40, 0], y: [0, 60, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-32 w-[460px] h-[460px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.45), rgba(16,185,129,0) 70%)",
          opacity: intensity
        }}
        animate={{ x: [0, -90, 30, 0], y: [0, 40, -50, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.45), rgba(59,130,246,0) 70%)",
          opacity: intensity
        }}
        animate={{ x: [0, 60, -50, 0], y: [0, -60, 40, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
