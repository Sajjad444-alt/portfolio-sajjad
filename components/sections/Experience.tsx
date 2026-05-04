"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section relative">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <span className="kicker">
          <span className="w-8 h-px bg-accent-cyan" /> Work Experience
        </span>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
          A track record of <span className="gradient-text">production wins</span>.
        </h2>
        <p className="mt-4 text-white/60 max-w-2xl">
          From hospital systems to national telecom — five years engineering
          databases that have to stay up.
        </p>
      </motion.div>

      <div className="mt-14 relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/50 via-accent-blue/30 to-transparent md:-translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative md:flex ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-bg border-2 border-accent-cyan shadow-[0_0_18px_rgba(6,182,212,0.6)]" />

                {/* Spacer for desktop */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <div className="glass glow-hover rounded-xl p-6">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {exp.role}
                        </h3>
                        <p className="text-accent-cyan text-sm mt-1 flex items-center gap-2">
                          <Briefcase className="w-3.5 h-3.5" />
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/50 font-mono">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="mt-4 text-sm text-white/70 leading-relaxed italic">
                      {exp.summary}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((h, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-sm text-white/70"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-cyan flex-shrink-0" />
                          <span className="leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
