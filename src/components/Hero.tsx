import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Zap } from "lucide-react";

const HexagonGrid = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    {/* Animated grid lines */}
    <div className="absolute inset-0 grid-bg" />
    
    {/* Floating geometric shapes */}
    <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-primary/30 rotate-45 floating opacity-40" />
    <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-secondary/30 floating-delayed opacity-30" />
    <div className="absolute top-1/2 right-1/5 w-16 h-16 border border-primary/20 rotate-12 floating-delayed-2 opacity-50" />
    
    {/* Glowing orbs */}
    <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl pulse-glow" />
    <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-secondary/5 rounded-full blur-3xl pulse-glow" style={{ animationDelay: '1.5s' }} />
  </div>
);

// Tech icons with neon glow effect
const FloatingIcons = () => (
  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full pointer-events-none hidden lg:block">
    {[
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", pos: { top: '20%', left: '50%' }, size: 'w-16 h-16', delay: '' },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", pos: { top: '35%', left: '70%' }, size: 'w-12 h-12', delay: 'floating-delayed' },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", pos: { top: '55%', left: '40%' }, size: 'w-14 h-14', delay: 'floating-delayed-2' },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", pos: { top: '45%', left: '60%' }, size: 'w-10 h-10', delay: 'floating-delayed-3' },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", pos: { top: '70%', left: '55%' }, size: 'w-12 h-12', delay: '' },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", pos: { top: '25%', left: '30%' }, size: 'w-10 h-10', delay: 'floating-delayed' },
    ].map((icon, i) => (
      <div
        key={i}
        className={`absolute ${icon.size} ${icon.delay || 'floating'} group`}
        style={icon.pos}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl group-hover:bg-primary/40 transition-all duration-500" />
          <img 
            src={icon.src}
            alt=""
            className="relative w-full h-full drop-shadow-[0_0_10px_hsl(var(--primary)/0.5)]"
          />
        </div>
      </div>
    ))}
  </div>
);

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden px-4 md:px-8 lg:px-16 scanlines"
    >
      <HexagonGrid />
      <FloatingIcons />

      <div className="max-w-4xl relative z-10">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass neon-border mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm text-primary font-medium">Open for opportunities</span>
        </div>

        {/* Main heading */}
        <h1 className="font-display text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="text-foreground">Hi, I'm </span>
          <span className="gradient-text flicker">Meril</span>
        </h1>

        {/* Subtitle with terminal style */}
        <div className="flex items-start gap-3 mb-6">
          <Terminal className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            <span className="text-primary">{'>'}</span> Web Developer passionate about building 
            <span className="text-primary"> innovative</span> digital experiences with 
            <span className="text-secondary"> modern technologies</span>
          </p>
        </div>

        {/* Sub text */}
        <p className="text-sm text-muted-foreground/70 mb-8 flex items-center gap-2">
          <Zap className="w-4 h-4 text-secondary" />
          Exploring new technologies & building projects that make an impact
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <Button
            onClick={scrollToContact}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8 h-12 font-medium
              neon-glow transition-all duration-300 hover:scale-105 group"
          >
            Get in touch
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            variant="outline"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 
              rounded-xl px-8 h-12 font-medium transition-all duration-300"
          >
            View Projects
          </Button>
        </div>
      </div>
    </section>
  );
};
