"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="section relative">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <span className="kicker">
          <span className="w-8 h-px bg-accent-cyan" /> Highlights
        </span>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
          Production wins <span className="gradient-text">that mattered</span>.
        </h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {achievements.map((a, i) => (
          <motion.div
            key={a.metric}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="glass glow-hover rounded-xl p-6 relative overflow-hidden"
          >
            <Trophy className="absolute top-4 right-4 w-5 h-5 text-accent-cyan/40" />
            <div className="text-2xl md:text-3xl font-bold gradient-text">
              {a.metric}
            </div>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              {a.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
