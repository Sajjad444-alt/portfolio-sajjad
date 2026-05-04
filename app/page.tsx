import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/effects/ScrollProgress";
import CursorSpotlight from "@/components/effects/CursorSpotlight";
import TechMarquee from "@/components/effects/TechMarquee";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Achievements from "@/components/sections/Achievements";
import Experience from "@/components/sections/Experience";
import Featured from "@/components/sections/Featured";
import DataStack from "@/components/sections/DataStack";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import WhatsAppButton from "@/components/effects/WhatsAppButton";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <CursorSpotlight />
      <Navbar />
      <Hero />
      <TechMarquee />
      <About />
      <Achievements />
      <Experience />
      <Featured />
      <DataStack />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
