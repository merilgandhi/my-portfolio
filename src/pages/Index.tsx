import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Global scan line effect */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,hsl(var(--primary)/0.1)_2px,hsl(var(--primary)/0.1)_4px)]" />
      </div>
      
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
