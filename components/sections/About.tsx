"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Database,
  Cloud,
  ShieldCheck,
  HeartPulse,
  Mail,
  MapPin,
  Phone
} from "lucide-react";
import { personalInfo } from "@/lib/data";

const pillars = [
  {
    icon: Database,
    title: "Database Mastery",
    text: "Oracle, MySQL, SQL Server — performance tuning, RAC, DataGuard, replication, recovery and HA."
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    text: "AWS Solutions Architect designing scalable, secure infrastructure with Docker, Kubernetes and CI/CD."
  },
  {
    icon: ShieldCheck,
    title: "Microsoft 365 / IT",
    text: "Exchange, Entra ID, Intune, DLP and HIPAA-aligned policies for international SMB and clinical clients."
  },
  {
    icon: HeartPulse,
    title: "Healthcare / PACS",
    text: "Built knovelPACS — a full-stack DICOM imaging platform deployed via Cloudflare Tunnel."
  }
];

export default function About() {
  return (
    <section id="about" className="section relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: photo + contact card */}
        <motion.aside
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-4 lg:sticky lg:top-28"
        >
          <div className="glass rounded-3xl p-3 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br from-accent-cyan/30 to-accent-emerald/20 blur-2xl" />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/Sajjad Profile pic.jpeg"
                alt={`${personalInfo.name}, ${personalInfo.title}`}
                fill
                sizes="(max-width: 1024px) 100vw, 28rem"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-accent-cyan">
                  / based in
                </div>
                <div className="mt-1 text-lg font-semibold text-white flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent-cyan" />
                  {personalInfo.location}
                </div>
              </div>
            </div>
          </div>

          {/* Quick contact */}
          <div className="mt-4 grid grid-cols-1 gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="glass glow-hover rounded-xl p-4 flex items-center gap-3 group"
            >
              <Mail className="w-4 h-4 text-accent-cyan" />
              <span className="text-sm text-white/80 group-hover:text-accent-cyan transition-colors truncate">
                {personalInfo.email}
              </span>
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
              className="glass glow-hover rounded-xl p-4 flex items-center gap-3 group"
            >
              <Phone className="w-4 h-4 text-accent-cyan" />
              <span className="text-sm text-white/80 group-hover:text-accent-cyan transition-colors">
                {personalInfo.phone}
              </span>
            </a>
          </div>
        </motion.aside>

        {/* Right: bio + pillars */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-8"
        >
          <span className="kicker">
            <span className="w-8 h-px bg-accent-cyan" /> About
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            Building <span className="gradient-text">resilient infrastructure</span> for
            mission-critical systems.
          </h2>
          <p className="mt-6 text-lg text-white/75 leading-relaxed">
            {personalInfo.bio}
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass glow-hover rounded-xl p-5"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-blue/20 grid place-items-center mb-4">
                  <p.icon className="w-5 h-5 text-accent-cyan" />
                </div>
                <h3 className="text-base font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">
                  {p.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
