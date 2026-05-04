"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Typewriter effect that cycles through multiple strings.
 * Shows a blinking cursor and types/deletes text in a loop.
 */

export default function TypewriterText({
  strings,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
  className = ""
}: {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}) {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = strings[currentStringIndex];

    if (!isDeleting && currentText === fullText) {
      // Pause before deleting
      const timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentStringIndex((prev) => (prev + 1) % strings.length);
      return;
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timeout = setTimeout(() => {
      setCurrentText((prev) =>
        isDeleting
          ? prev.slice(0, -1)
          : fullText.slice(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentStringIndex, strings, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[2px] h-[1em] bg-accent-cyan ml-0.5 align-text-bottom"
      />
    </span>
  );
}
