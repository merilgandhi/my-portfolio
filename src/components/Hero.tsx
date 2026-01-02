import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Zap } from "lucide-react";
import { AnimatedText } from "./AnimatedText";

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

const FloatingIcons = () => (
  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full pointer-events-none hidden lg:block">
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
      alt="MongoDB"
      className="absolute w-16 h-16 floating"
      style={{ top: '25%', left: '32%' }}
    />
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
      alt="TypeScript"
      className="absolute w-14 h-14 floating-delayed"
      style={{ top: '22%', left: '50%' }}
    />
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" 
      alt="Tailwind CSS"
      className="absolute w-12 h-12 floating-delayed-2"
      style={{ top: '25%', left: '75%' }}
    />
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
      alt="JavaScript"
      className="absolute w-12 h-12 floating-delayed"
      style={{ top: '43%', left: '42%' }}
    />
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
      alt="CSS3"
      className="absolute w-12 h-12 floating-delayed-2"
      style={{ top: '43%', left: '60%' }}
    />
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
      alt="React"
      className="absolute w-14 h-14 floating-delayed-3"
      style={{ top: '42%', left: '80%' }}
    />
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
      alt="Node.js"
      className="absolute w-14 h-14 floating"
      style={{ top: '60%', left: '50%' }}
    />
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
      alt="GitHub"
      className="absolute w-10 h-10 floating-delayed invert"
      style={{ top: '60%', left: '78%' }}
    />
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
      alt="Python"
      className="absolute w-12 h-12 floating-delayed-2"
      style={{ top: '75%', left: '32%' }}
    />
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
      alt="Java"
      className="absolute w-14 h-14 floating-delayed-3"
      style={{ top: '75%', left: '70%' }}
    />
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" 
      alt="Figma"
      className="absolute w-12 h-12 floating-delayed-2"
      style={{ top: '42%', left: '23%' }}
    />
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" 
      alt="C++"
      className="absolute w-12 h-12 floating-delayed-2"
      style={{ top: '60%', left: '25%' }}
    />
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" 
      alt="Docker"
      className="absolute w-14 h-14 floating-delayed-3"
      style={{ top: '80%', left: '50%' }}
    />
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
        {/* Main heading */}
        <h1 className="font-display text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-6 px-10">
          <AnimatedText text="Hi, I'm " className="text-foreground" />
          <span className="inline-block">
            <AnimatedText 
              text="Meril" 
              delay={400} 
              className="animate-text-shimmer bg-[linear-gradient(110deg,hsl(var(--primary)),45%,hsl(var(--secondary)),55%,hsl(var(--primary)))] bg-[length:250%_100%] bg-clip-text text-transparent flicker"
            />
          </span>
        </h1>

        {/* Subtitle with terminal style */}
        <div className="flex items-start gap-3 mb-6 px-10">
          <Terminal className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            <span className="text-primary">{'>'}</span> Web Developer passionate about building 
            <span className="text-primary"> innovative</span> digital experiences with 
            <span className="text-secondary"> modern technologies</span>
          </p>
        </div>

        {/* Sub text */}
        <p className="text-sm text-muted-foreground/70 mb-8 flex items-center gap-2 px-10">
          <Zap className="w-4 h-4 text-secondary" />
          Exploring new technologies & building projects that make an impact
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 px-10">
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
