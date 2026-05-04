"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Floating WhatsApp button — fixed to the bottom-right of the viewport.
 * On hover it expands to show "Chat on WhatsApp".
 * Links to wa.me with the user's number.
 */

const WHATSAPP_NUMBER = "923044012152";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Show the button after a short delay for a polished entrance
    const timer = setTimeout(() => setMounted(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {mounted && (
        <motion.div
          initial={{ scale: 0, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full animate-ping bg-green-500/30" />

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative flex items-center gap-2 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white rounded-full shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 transition-all duration-300"
            style={{
              padding: hovered ? "14px 22px" : "14px",
            }}
          >
            <WhatsAppIcon className="w-7 h-7 flex-shrink-0" />

            <AnimatePresence>
              {hovered && (
                <motion.span
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-sm font-semibold whitespace-nowrap overflow-hidden"
                >
                  Chat on WhatsApp
                </motion.span>
              )}
            </AnimatePresence>
          </a>

          {/* Tooltip for non-hover devices */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, 10] }}
            transition={{
              duration: 4,
              delay: 3,
              times: [0, 0.1, 0.85, 1],
              repeat: 0
            }}
            className="absolute -top-12 right-0 bg-bg-card text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-xl border border-white/10 whitespace-nowrap pointer-events-none"
          >
            💬 Chat with me on WhatsApp!
            <div className="absolute -bottom-1 right-5 w-2 h-2 bg-bg-card border-r border-b border-white/10 rotate-45" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
