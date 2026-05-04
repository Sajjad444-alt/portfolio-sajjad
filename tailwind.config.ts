import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#05060a",
          soft: "#0a0d18",
          card: "#0f1424"
        },
        accent: {
          cyan: "#06b6d4",
          blue: "#2563eb",
          emerald: "#10b981",
          // Legacy alias kept so any stray `accent-violet` still resolves
          violet: "#10b981"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"]
      },
      animation: {
        "gradient-x": "gradient-x 8s ease infinite",
        "fade-up": "fade-up 0.7s ease-out forwards",
        "spin-slow": "spin 14s linear infinite",
        "marquee": "marquee 40s linear infinite",
        "shimmer": "shimmer 2.4s linear infinite",
        "float-slow": "float-slow 6s ease-in-out infinite"
      },
      keyframes: {
        "gradient-x": {
          "0%,100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" }
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        "shimmer": {
          "0%": { "background-position": "-200% 0" },
          "100%": { "background-position": "200% 0" }
        },
        "float-slow": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
