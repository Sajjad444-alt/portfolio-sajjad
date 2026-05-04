"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Activity, Server } from "lucide-react";
import { featuredProject } from "@/lib/data";
import AnimatedOrbs from "@/components/effects/AnimatedOrbs";

export default function Featured() {
  const p = featuredProject;

  return (
    <section id="featured" className="section relative">
      <AnimatedOrbs variant="subtle" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <span className="kicker">
          <span className="w-8 h-px bg-accent-cyan" /> Featured Work
        </span>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
          Built for <span className="gradient-text">healthcare</span>.
          <br className="hidden md:block" /> Battle-tested in production.
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="mt-12 glass rounded-3xl p-8 md:p-10 lg:p-12 relative overflow-hidden group"
      >
        {/* Background glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-accent-cyan/30 to-accent-emerald/20 blur-3xl opacity-60 group-hover:opacity-90 transition-opacity" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-accent-blue/20 to-accent-cyan/10 blur-3xl opacity-50" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: text */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-xs font-mono uppercase tracking-wider text-accent-cyan mb-5">
              <Activity className="w-3.5 h-3.5" />
              Live in production
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              {p.name}
            </h3>

            <p className="mt-4 text-base md:text-lg text-white/75 leading-relaxed">
              {p.longDescription ?? p.description}
            </p>

            <ul className="mt-6 space-y-3">
              {p.bullets?.map((b) => (
                <li key={b} className="flex gap-3 text-sm md:text-[15px] text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 text-xs font-mono rounded-md bg-white/5 text-white/80 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent-cyan hover:text-white transition-colors"
            >
              View on GitHub
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right: architecture preview */}
          <div className="lg:col-span-5">
            <div className="glass rounded-2xl p-5 font-mono text-[11px] text-white/70 leading-relaxed border border-white/10">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-white/10">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <span className="text-white/50">architecture.diagram</span>
              </div>
              <pre className="whitespace-pre overflow-x-auto text-[10px] sm:text-[11px]">
{`                INTERNET
                   │
                   ▼
          ┌──────────────────┐
          │   CLOUDFLARE     │
          │   Edge + TLS     │
          └────────┬─────────┘
                   │ outbound QUIC
                   ▼
   ┌─────────────────────────────┐
   │     knovelPACS Server       │
   │ ┌─────────────────────────┐ │
   │ │ Portal (Next.js :3000)  │ │
   │ ├─────────────────────────┤ │
   │ │ Bridge (Node)           │ │
   │ ├─────────────────────────┤ │
   │ │ Orthanc DICOM (:104)    │ │
   │ ├─────────────────────────┤ │
   │ │ MySQL 8 (:3306)         │ │
   │ └─────────────────────────┘ │
   └─────────────────────────────┘`}
              </pre>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="glass rounded-xl p-4">
                <Server className="w-4 h-4 text-accent-cyan mb-2" />
                <div className="text-[10px] font-mono uppercase tracking-wider text-white/50">
                  Exposed ports
                </div>
                <div className="text-lg font-bold text-white mt-0.5">0</div>
              </div>
              <div className="glass rounded-xl p-4">
                <Activity className="w-4 h-4 text-accent-cyan mb-2" />
                <div className="text-[10px] font-mono uppercase tracking-wider text-white/50">
                  TLS termination
                </div>
                <div className="text-sm font-semibold text-white mt-0.5">
                  Edge
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
