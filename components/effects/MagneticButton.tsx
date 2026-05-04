"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

/**
 * Wraps children with a subtle magnetic hover — the inner element follows the
 * cursor a few pixels off-center while hovering, snapping back on leave.
 */
export default function MagneticButton({
  children,
  className = "",
  strength = 18
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    const dx = (x / rect.width) * strength;
    const dy = (y / rect.height) * strength;
    el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
  };

  const onMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "translate3d(0,0,0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`inline-block transition-transform duration-200 ease-out ${className}`}
    >
      {children}
    </div>
  );
}
