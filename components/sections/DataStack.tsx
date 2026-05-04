"use client";

import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";
import { SiMysql, SiPostgresql, SiMongodb } from "react-icons/si";
import {
  M365Icon,
  OracleIcon,
  SqlServerIcon
} from "@/components/icons/BrandIcons";
import AnimatedOrbs from "@/components/effects/AnimatedOrbs";
import FallingIcons from "@/components/effects/FallingIcons";

type StackItem = {
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement> & { className?: string }>;
  color: string;
  glow: string;
  description: string;
  level: string;
  proficiency: number; // 0-100
  /** Whether the icon should inherit `currentColor` (custom SVGs) or render its own internal colors (M365). */
  tinted?: boolean;
};

const stack: StackItem[] = [
  {
    name: "Microsoft 365 Admin Center",
    icon: M365Icon,
    color: "#0078D4",
    glow: "rgba(0,120,212,0.45)",
    description: "Exchange Online · Entra ID · Intune · DLP · SharePoint",
    level: "Admin Center",
    proficiency: 92
  },
  {
    name: "Oracle Database",
    icon: OracleIcon,
    color: "#F80000",
    glow: "rgba(248,0,0,0.4)",
    description: "11g · 12c · 19c · RAC · DataGuard · GoldenGate",
    level: "OCP track",
    proficiency: 96,
    tinted: true
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#00758F",
    glow: "rgba(0,117,143,0.45)",
    description: "InnoDB Cluster · Replication · TDE · Performance Schema",
    level: "Oracle Certified",
    proficiency: 94,
    tinted: true
  },
  {
    name: "Microsoft SQL Server",
    icon: SqlServerIcon,
    color: "#CC2927",
    glow: "rgba(204,41,39,0.45)",
    description: "2019 · Always On AGs · Log Shipping · TDE · Mirroring",
    level: "Production",
    proficiency: 90,
    tinted: true
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
    glow: "rgba(65,105,225,0.45)",
    description: "RDS · WAL streaming · pg_dump · logical replication",
    level: "Cloud-native",
    proficiency: 82,
    tinted: true
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    glow: "rgba(71,162,72,0.45)",
    description: "Replica sets · Sharded clusters · Atlas · aggregation",
    level: "NoSQL",
    proficiency: 78,
    tinted: true
  }
];

export default function DataStack() {
  return (
    <section id="datastack" className="section relative">
      <AnimatedOrbs variant="subtle" />
      <FallingIcons count={16} variant="section" showRobot={false} />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <span className="kicker">
          <span className="w-8 h-px bg-accent-cyan" /> Data + Cloud Stack
        </span>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
          The systems I <span className="gradient-text">administer daily</span>.
        </h2>
        <p className="mt-4 text-white/60 max-w-2xl">
          Production-grade administration across every major relational, NoSQL
          and Microsoft cloud platform — battle-tested in telecom, banking and
          healthcare.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {stack.map((item, i) => {
          const Icon = item.icon;
          const floatDuration = 3 + (i % 3) * 0.6;
          const floatDelay = (i * 0.25) % 1.4;

          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="relative group"
            >
              {/* Brand-colored glow halo */}
              <div
                className="absolute -inset-1 rounded-2xl blur-2xl opacity-25 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 30% 20%, ${item.glow}, transparent 70%)`
                }}
              />

              <div className="relative h-full glass rounded-2xl p-6 border border-white/10 group-hover:border-white/25 transition-colors overflow-hidden">
                {/* Top-right shimmer arc */}
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-25 group-hover:opacity-60 transition-opacity"
                  style={{ background: item.color }}
                />

                {/* Icon tile */}
                <div className="relative">
                  <div
                    className="relative w-16 h-16 rounded-xl grid place-items-center mb-5 overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}30, ${item.color}08)`,
                      boxShadow: `inset 0 0 20px ${item.color}20`
                    }}
                  >
                    {/* Slow rotating conic ring on hover */}
                    <div
                      aria-hidden
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `conic-gradient(from 0deg, transparent 0deg, ${item.color}cc 90deg, transparent 180deg, ${item.color}88 270deg, transparent 360deg)`,
                        animation: "spin 4s linear infinite",
                        WebkitMask:
                          "radial-gradient(circle, transparent 60%, #000 62%)",
                        mask:
                          "radial-gradient(circle, transparent 60%, #000 62%)"
                      }}
                    />

                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: floatDuration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: floatDelay
                      }}
                      className="relative z-10"
                    >
                      <Icon
                        style={
                          item.tinted
                            ? {
                                color: item.color,
                                filter: `drop-shadow(0 0 10px ${item.color}aa)`
                              }
                            : {
                                filter: `drop-shadow(0 0 10px ${item.color}88)`
                              }
                        }
                        className="w-9 h-9"
                      />
                    </motion.div>
                  </div>

                  {/* Pulse dot — "live in prod" */}
                  <span
                    className="absolute top-0 right-0 inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-white/60"
                  >
                    <span className="relative flex h-2 w-2">
                      <span
                        className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                        style={{ background: item.color }}
                      />
                      <span
                        className="relative inline-flex rounded-full h-2 w-2"
                        style={{ background: item.color }}
                      />
                    </span>
                    live
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {item.name}
                </h3>
                <p
                  className="mt-1 text-xs font-mono uppercase tracking-wider"
                  style={{ color: item.color }}
                >
                  {item.level}
                </p>

                <p className="mt-4 text-sm text-white/65 leading-relaxed">
                  {item.description}
                </p>

                {/* Proficiency bar */}
                <div className="mt-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white/50">
                      Proficiency
                    </span>
                    <span
                      className="text-xs font-semibold"
                      style={{ color: item.color }}
                    >
                      {item.proficiency}%
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.4,
                        delay: i * 0.08 + 0.3,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="h-full rounded-full relative overflow-hidden"
                      style={{
                        background: `linear-gradient(90deg, ${item.color}, ${item.color}80)`
                      }}
                    >
                      <span
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                          animation: "shimmer 2.4s linear infinite",
                          backgroundSize: "200% 100%"
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
