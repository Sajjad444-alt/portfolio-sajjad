import { Github, Linkedin, Mail, Award, ShoppingBag } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-white/50 font-mono">
          © {year} {personalInfo.name}. Built with Next.js + Three.js.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white/60 hover:text-accent-cyan transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/60 hover:text-accent-cyan transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.credly}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Credly"
            className="text-white/60 hover:text-accent-cyan transition-colors"
          >
            <Award className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.fiverr}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fiverr"
            className="text-white/60 hover:text-emerald-400 transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="text-white/60 hover:text-accent-cyan transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
