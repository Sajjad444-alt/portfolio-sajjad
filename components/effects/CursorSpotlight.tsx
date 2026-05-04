"use client";

import { useEffect, useRef } from "react";

/**
 * Subtle gradient spotlight that follows the cursor.
 * Disabled on touch devices and when the user prefers reduced motion.
 */
export default function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduced) return;

    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      el.style.transform = `translate3d(${currentX - 250}px, ${currentY - 250}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[1] w-[500px] h-[500px] rounded-full opacity-50 mix-blend-screen will-change-transform"
      style={{
        background:
          "radial-gradient(closest-side, rgba(34,211,238,0.18), rgba(59,130,246,0.10) 45%, transparent 70%)"
      }}
    />
  );
}
