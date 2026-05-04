# Sajjad Iqbal — Portfolio

A modern, 3D-animated personal portfolio for **Sajjad Iqbal** (Senior DBA & AWS Solutions Architect).

Built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Three.js** (via React Three Fiber + Drei), and **Framer Motion**.

## ✨ Features

- 🎬 Hero section with interactive 3D scene (floating database cylinders + cloud nodes + particle network)
- 📊 Real resume content baked in (PTCL, AFIC/NIHD, MCB Bank, WorldLinks)
- 🏆 Achievements highlighting production wins
- 🛠 Skills grouped by category (Databases, Cloud, DevOps, HA/DR, etc.)
- 🎓 Certifications (AWS, Oracle MCP, NAVTTC)
- 📁 Open-source projects from GitHub
- 📧 Contact form (mailto-based, dependency-free)
- 🌑 Dark theme with cyan/blue/violet gradient accents
- 📱 Fully responsive
- ♿ `prefers-reduced-motion` support

## 🚀 Getting Started

### 1. Install dependencies

```bash
cd C:\Users\Hp\portfolio-sajjad
npm install
```

### 2. Add your resume PDF

Drop your CV at:

```
public/Sajjad_Iqbal_Resume.pdf
```

(or update `personalInfo.resumeUrl` in `lib/data.ts`)

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
npm run build
npm run start
```

## 📂 Project Structure

```
portfolio-sajjad/
├── app/
│   ├── layout.tsx        # Root layout, metadata, fonts
│   ├── page.tsx          # Main page composition
│   └── globals.css       # Tailwind + custom styles
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Scene3D.tsx       # Three.js / R3F 3D scene
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Achievements.tsx
│       ├── Experience.tsx
│       ├── Skills.tsx
│       ├── Certifications.tsx
│       ├── Projects.tsx
│       └── Contact.tsx
├── lib/
│   └── data.ts           # All resume / profile content
└── public/
    └── Sajjad_Iqbal_Resume.pdf
```

## 🎨 Customizing

All content lives in **`lib/data.ts`**. Update:

- `personalInfo` — name, title, bio, contact info, socials
- `experiences` — work history
- `skillGroups` — tech stack
- `certifications`
- `projects`
- `achievements`

Color tokens are in `tailwind.config.ts` (`accent.cyan`, `accent.blue`, `accent.violet`) and `app/globals.css`.

## 🌐 Deployment

Easiest path is **Vercel** (made by the Next.js team, free tier is generous):

1. Push this folder to a GitHub repo
2. Import the repo in [vercel.com](https://vercel.com)
3. Click **Deploy**

Custom domain: point `sajjadiqbal.com` to Vercel via DNS (CNAME / A records — Vercel will guide you).

## 📜 License

Personal portfolio — all rights reserved © Sajjad Iqbal.
