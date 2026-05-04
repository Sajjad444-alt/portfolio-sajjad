"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

export default function NumberCounter({
  value,
  className = ""
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(value);

  // Extract leading number for animation; preserve any suffix like "+", "x", "/7"
  const match = value.match(/^([\d.]+)(.*)$/);
  const targetNumber = match ? parseFloat(match[1]) : null;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (!inView || targetNumber === null) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, targetNumber, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        const formatted =
          targetNumber % 1 === 0
            ? Math.round(latest).toString()
            : latest.toFixed(1);
        setDisplay(formatted + suffix);
      }
    });
    return () => controls.stop();
  }, [inView, targetNumber, suffix, value]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}
