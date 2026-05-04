"use client";

import { motion } from "framer-motion";
import { Github, ArrowUpRight, Folder } from "lucide-react";
import { projects, personalInfo } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section relative">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="flex items-end justify-between flex-wrap gap-4"
      >
        <div>
          <span className="kicker">
            <span className="w-8 h-px bg-accent-cyan" /> Projects
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            Open-source <span className="gradient-text">work</span>.
          </h2>
        </div>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-accent-cyan transition-colors font-mono"
        >
          <Github className="w-4 h-4" />
          View all on GitHub
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass glow-hover rounded-xl p-6 flex flex-col group h-full"
          >
            <div className="flex items-start justify-between mb-4">
              <Folder className="w-8 h-8 text-accent-cyan" strokeWidth={1.5} />
              <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-accent-cyan group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
            </div>

            <h3 className="text-lg font-semibold text-white group-hover:text-accent-cyan transition-colors">
              {p.name}
            </h3>
            <p className="mt-2 text-sm text-white/60 leading-relaxed flex-1">
              {p.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-white/60 border border-white/5"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
