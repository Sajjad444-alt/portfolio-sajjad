"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Award,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ShoppingBag
} from "lucide-react";
import { personalInfo } from "@/lib/data";
import AnimatedOrbs from "@/components/effects/AnimatedOrbs";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "" // honeypot
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "", website: "" });
      } else {
        setStatus("error");
        setErrorMsg(
          data?.error ??
            `Something went wrong. Please email ${personalInfo.email} directly.`
        );
      }
    } catch {
      setStatus("error");
      setErrorMsg(
        `Network error. Please email ${personalInfo.email} directly.`
      );
    }
  };

  return (
    <section id="contact" className="section relative">
      <AnimatedOrbs variant="subtle" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <span className="kicker">
          <span className="w-8 h-px bg-accent-cyan" /> Contact
        </span>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
          Let&apos;s build something <span className="gradient-text">solid</span>.
        </h2>
        <p className="mt-4 text-white/60 max-w-2xl">
          Open to full-time roles, remote positions and consulting engagements
          in DBA, Cloud, Microsoft 365 and DevOps.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-3"
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="glass glow-hover rounded-xl p-5 flex items-center gap-4 group"
          >
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-blue/20 grid place-items-center">
              <Mail className="w-5 h-5 text-accent-cyan" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-white/50 font-mono uppercase tracking-wider">
                Email
              </div>
              <div className="text-sm text-white truncate group-hover:text-accent-cyan transition-colors">
                {personalInfo.email}
              </div>
            </div>
          </a>

          <a
            href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
            className="glass glow-hover rounded-xl p-5 flex items-center gap-4 group"
          >
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-blue/20 grid place-items-center">
              <Phone className="w-5 h-5 text-accent-cyan" />
            </div>
            <div>
              <div className="text-xs text-white/50 font-mono uppercase tracking-wider">
                Phone
              </div>
              <div className="text-sm text-white group-hover:text-accent-cyan transition-colors">
                {personalInfo.phone}
              </div>
            </div>
          </a>

          <div className="glass rounded-xl p-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-blue/20 grid place-items-center">
              <MapPin className="w-5 h-5 text-accent-cyan" />
            </div>
            <div>
              <div className="text-xs text-white/50 font-mono uppercase tracking-wider">
                Based in
              </div>
              <div className="text-sm text-white">{personalInfo.location}</div>
            </div>
          </div>

          <a
            href={personalInfo.fiverr}
            target="_blank"
            rel="noopener noreferrer"
            className="block group rounded-xl p-5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-white/20 grid place-items-center">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-white/80 font-mono uppercase tracking-wider">
                  Fiverr
                </div>
                <div className="text-sm font-semibold text-white">
                  Hire me on Fiverr →
                </div>
              </div>
            </div>
          </a>

          <a
            href={personalInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block group rounded-xl p-5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-white/20 grid place-items-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-white/80 font-mono uppercase tracking-wider">
                  WhatsApp
                </div>
                <div className="text-sm font-semibold text-white">
                  Chat directly →
                </div>
              </div>
            </div>
          </a>

          <div className="grid grid-cols-3 gap-3 pt-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glow-hover rounded-xl p-4 grid place-items-center text-white/70 hover:text-accent-cyan"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glow-hover rounded-xl p-4 grid place-items-center text-white/70 hover:text-accent-cyan"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.credly}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glow-hover rounded-xl p-4 grid place-items-center text-white/70 hover:text-accent-cyan"
              aria-label="Credly"
            >
              <Award className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 glass rounded-2xl p-6 md:p-8 space-y-5"
        >
          {/* Honeypot — hidden from humans */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(e) => setForm({ ...form, website: e.target.value })}
            className="hidden"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-2">
                Name
              </label>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent-cyan/60 focus:ring-1 focus:ring-accent-cyan/40 transition-colors"
                placeholder="Your name"
                disabled={status === "sending"}
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-2">
                Email
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent-cyan/60 focus:ring-1 focus:ring-accent-cyan/40 transition-colors"
                placeholder="you@company.com"
                disabled={status === "sending"}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-2">
              Message
            </label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent-cyan/60 focus:ring-1 focus:ring-accent-cyan/40 transition-colors resize-none"
              placeholder="Tell me about your project, role, or how I can help..."
              disabled={status === "sending"}
            />
          </div>

          {status === "error" && (
            <div className="flex items-start gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-sm text-red-200">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {status === "sent" && (
            <div className="flex items-start gap-3 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-sm text-emerald-200">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>
                Message sent! I&apos;ll get back to you at the email you
                provided.
              </span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-blue text-white font-medium shadow-lg shadow-accent-cyan/20 hover:shadow-accent-cyan/40 hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {status === "sending" && (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending…
              </>
            )}
            {status === "sent" && (
              <>
                <CheckCircle2 className="w-4 h-4" />
                Sent successfully
              </>
            )}
            {(status === "idle" || status === "error") && (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </button>

          <p className="text-xs text-white/40 text-center">
            Your message is delivered straight to{" "}
            <span className="text-accent-cyan">{personalInfo.email}</span>.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
