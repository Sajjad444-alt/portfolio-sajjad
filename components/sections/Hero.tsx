"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  MapPin,
  Sparkles,
  CheckCircle2,
  ShoppingBag,
  Award
} from "lucide-react";
import { personalInfo, stats, industries } from "@/lib/data";
import NumberCounter from "@/components/effects/NumberCounter";
import MagneticButton from "@/components/effects/MagneticButton";
import AnimatedOrbs from "@/components/effects/AnimatedOrbs";
import FallingIcons from "@/components/effects/FallingIcons";
import GlowingGrid from "@/components/effects/GlowingGrid";
import TypewriterText from "@/components/effects/TypewriterText";

const Scene3D = dynamic(() => import("@/components/Scene3D"), {
  ssr: false,
  loading: () => null
});

const ROLE_TITLES = [
  "Senior Database Administrator",
  "Cloud Solutions Architect",
  "Microsoft 365 Admin",
  "DevOps Engineer",
  "Oracle DBA Expert",
  "AWS Certified Architect"
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex items-center pt-24 pb-16"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-25" aria-hidden />
      <AnimatedOrbs />

      {/* Glowing grid network */}
      <GlowingGrid density={25} />

      {/* Falling database / tech icons + AI Robot */}
      <FallingIcons count={24} variant="hero" showRobot={true} />

      {/* 3D Scene */}
      <div className="absolute inset-0 z-0 opacity-70" aria-hidden>
        <Scene3D />
      </div>

      {/* Foreground gradient mask so text stays readable */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,6,10,0.55) 0%, rgba(5,6,10,0.20) 35%, rgba(5,6,10,0.92) 100%)"
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Copy */}
          <div className="lg:col-span-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan" />
              </span>
              <span className="text-xs font-mono tracking-wider text-white/80">
                Available for new opportunities
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              <span className="block text-white/90">Hi, I&apos;m</span>
              <span className="block gradient-text mt-1">
                {personalInfo.name}.
              </span>
            </h1>

            {/* Typewriter role titles */}
            <h2 className="mt-6 text-xl sm:text-2xl md:text-3xl text-white/85 font-medium leading-snug min-h-[2em]">
              <TypewriterText
                strings={ROLE_TITLES}
                typingSpeed={70}
                deletingSpeed={35}
                pauseDuration={2500}
                className="gradient-text"
              />
            </h2>

            <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/75 leading-relaxed">
              {personalInfo.tagline}
            </p>

            {/* Industry badges */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06 } }
              }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {industries.map((ind) => (
                <motion.span
                  key={ind}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 }
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-white/5 border border-white/10 text-white/70 hover:border-accent-cyan/40 hover:text-accent-cyan transition-all duration-300"
                >
                  <CheckCircle2 className="w-3 h-3 text-accent-cyan" />
                  {ind}
                </motion.span>
              ))}
            </motion.div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <MagneticButton>
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-blue text-white font-medium shadow-lg shadow-accent-cyan/30 hover:shadow-accent-cyan/50 transition-shadow shine"
                >
                  <Sparkles className="w-4 h-4" />
                  Hire Me
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href={personalInfo.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white font-medium shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/50 transition-all"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Hire on Fiverr
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg glass text-white font-medium hover:border-accent-cyan/40 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </MagneticButton>
            </div>

            <div className="mt-8 inline-flex items-center gap-2 text-sm text-white/60">
              <MapPin className="w-4 h-4 text-accent-cyan" />
              {personalInfo.location}
            </div>
          </div>

          {/* Right: Profile photo */}
          <div
            className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="relative">
              {/* Soft outer glow */}
              <div
                className="absolute -inset-8 rounded-3xl blur-3xl opacity-60"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(34,211,238,0.45), transparent 60%), radial-gradient(circle at 70% 70%, rgba(139,92,246,0.35), transparent 60%)"
                }}
              />

              {/* Animated orbiting ring around photo */}
              <motion.div
                className="absolute -inset-4 rounded-3xl border border-accent-cyan/20 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                {/* Orbiting dot */}
                <div
                  className="absolute -top-1.5 left-1/2 w-3 h-3 rounded-full bg-accent-cyan"
                  style={{ boxShadow: "0 0 12px #06b6d4, 0 0 24px #06b6d4" }}
                />
              </motion.div>

              {/* Photo card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative photo-frame"
              >
                <div className="relative w-72 sm:w-80 lg:w-[22rem] aspect-[4/5] rounded-2xl overflow-hidden bg-bg-soft">
                  <Image
                    src="/sajjad-profile-pic.jpeg"
                    alt={`${personalInfo.name} — ${personalInfo.title}`}
                    fill
                    priority
                    sizes="(max-width: 768px) 18rem, (max-width: 1024px) 20rem, 22rem"
                    className="object-cover object-top"
                  />
                  {/* Bottom gradient + name badge */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg via-bg/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent-cyan">
                      / engineer
                    </div>
                    <div className="mt-1 text-base font-semibold text-white">
                      {personalInfo.name}
                    </div>
                    <div className="text-xs text-white/60">
                      DBA · Cloud · M365
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating credential badge — top right */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 shadow-xl flex items-center gap-2 animate-float-slow"
              >
                <div className="w-8 h-8 rounded-md bg-gradient-to-br from-orange-400 to-orange-600 grid place-items-center">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-[9px] font-mono uppercase tracking-wider text-white/50">
                    AWS Certified
                  </div>
                  <div className="text-xs font-semibold text-white">
                    SAA-C03
                  </div>
                </div>
              </motion.div>

              {/* Floating M365 badge — bottom left */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute -bottom-4 -left-4 glass rounded-xl px-3 py-2 shadow-xl flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-500 to-blue-700 grid place-items-center">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-[9px] font-mono uppercase tracking-wider text-white/50">
                    Microsoft 365
                  </div>
                  <div className="text-xs font-semibold text-white">
                    Admin & Identity
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl animate-fade-up" style={{ animationDelay: "0.3s" }}>
          {stats.map((s) => (
            <motion.div
              key={s.label}
              className="glass rounded-xl px-4 py-3 hover:border-accent-cyan/30 transition-colors group"
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <div className="text-2xl sm:text-3xl font-bold gradient-text">
                <NumberCounter value={s.value} />
              </div>
              <div className="text-xs text-white/60 mt-1 font-mono uppercase tracking-wider group-hover:text-accent-cyan/80 transition-colors">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-3 text-accent-cyan/80">
        <span className="text-[11px] font-bold font-mono uppercase tracking-[0.35em]">
          Scroll
        </span>
        <motion.div
          className="w-1 h-14 rounded-full bg-gradient-to-b from-accent-cyan via-accent-cyan/80 to-transparent shadow-[0_0_10px_rgba(6,182,212,0.8)]"
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0], y: [0, 10, 20] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
