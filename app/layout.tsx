import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap"
});

export const metadata: Metadata = {
  title: `${personalInfo.name} — ${personalInfo.title}`,
  description: personalInfo.tagline,
  keywords: [
    "Database Administrator",
    "DBA",
    "AWS Solutions Architect",
    "Oracle DBA",
    "MySQL DBA",
    "SQL Server DBA",
    "DevOps",
    "Sajjad Iqbal",
    "Pakistan"
  ],
  authors: [{ name: personalInfo.name, url: personalInfo.website }],
  openGraph: {
    title: `${personalInfo.name} — ${personalInfo.title}`,
    description: personalInfo.tagline,
    url: personalInfo.website,
    siteName: personalInfo.name,
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} — ${personalInfo.title}`,
    description: personalInfo.tagline
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
