"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="section relative">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <span className="kicker">
          <span className="w-8 h-px bg-accent-cyan" /> Certifications
        </span>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
          Industry-recognized <span className="gradient-text">credentials</span>.
        </h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((c, i) => (
          <motion.a
            key={c.name}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass glow-hover rounded-xl p-6 block group relative overflow-hidden"
          >
            {/* Decorative gradient orb */}
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-accent-cyan/20 to-accent-blue/10 blur-2xl group-hover:from-accent-cyan/30 transition-colors" />

            <div className="relative">
              <div className="flex items-start justify-between gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-blue grid place-items-center shadow-lg shadow-accent-cyan/20">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-accent-cyan transition-colors" />
              </div>

              <h3 className="mt-5 text-base font-semibold text-white leading-snug">
                {c.name}
              </h3>
              <p className="mt-2 text-xs text-white/50 font-mono uppercase tracking-wider">
                {c.issuer}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
