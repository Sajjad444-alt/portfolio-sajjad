"use client";

import { useEffect, useState } from "react";
import { Menu, X, Database } from "lucide-react";
import { navLinks, personalInfo } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/70 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="flex items-center gap-2 group"
          aria-label="Home"
        >
          <span className="relative grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-blue shadow-lg shadow-accent-cyan/20 group-hover:shadow-accent-cyan/50 transition-shadow">
            <Database className="w-5 h-5 text-white" strokeWidth={2.5} />
          </span>
          <span className="font-mono text-sm tracking-wider text-white">
            {personalInfo.shortName}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-cyan transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={personalInfo.fiverr}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-emerald-500 hover:bg-emerald-400 px-3.5 py-2 rounded-lg shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all"
          >
            <span className="font-bold">fi</span>
            <span>Fiverr</span>
          </a>
          <a
            href={personalInfo.resumeUrl}
            download
            className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-accent-cyan to-accent-blue px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-accent-cyan/30 transition-all"
          >
            Resume
          </a>
        </div>

        <button
          className="md:hidden text-white/80 hover:text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-bg/95 backdrop-blur-xl border-b border-white/5 px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-white/80 hover:text-accent-cyan py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex flex-col gap-2 pt-2">
              <a
                href={personalInfo.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-emerald-500 px-4 py-2 rounded-lg"
              >
                <span className="font-bold">fi</span>
                Hire on Fiverr
              </a>
              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-accent-cyan to-accent-blue px-4 py-2 rounded-lg"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
