"use client";

import { motion } from "framer-motion";
import {
  Database,
  Cloud,
  GitBranch,
  Server,
  Shield,
  ShieldCheck,
  HeartPulse,
  Terminal,
  type LucideIcon
} from "lucide-react";
import { skillGroups } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  database: Database,
  cloud: Cloud,
  "git-branch": GitBranch,
  server: Server,
  shield: Shield,
  "shield-check": ShieldCheck,
  "heart-pulse": HeartPulse,
  terminal: Terminal
};

export default function Skills() {
  return (
    <section id="skills" className="section relative">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <span className="kicker">
          <span className="w-8 h-px bg-accent-cyan" /> Tech Stack
        </span>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
          Tools I use to ship <span className="gradient-text">at scale</span>.
        </h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group, i) => {
          const Icon = iconMap[group.icon] ?? Database;
          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass glow-hover rounded-xl p-6 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-blue/20 grid place-items-center group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-accent-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs font-mono rounded-md bg-white/5 text-white/80 border border-white/5 hover:border-accent-cyan/30 hover:text-accent-cyan transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
