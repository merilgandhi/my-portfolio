import { User } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-8 lg:px-16 relative">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass neon-border mb-6">
              <User className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">About</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              About <span className="gradient-text animate-text-shimmer bg-[linear-gradient(110deg,hsl(var(--primary)),45%,hsl(var(--secondary)),55%,hsl(var(--primary)))] bg-[length:250%_100%] bg-clip-text text-transparent">Me</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Main content */}
          <div className="lg:col-span-3 space-y-6">
            <ScrollReveal delay={100}>
              <div className="glass-card rounded-2xl p-8 hover-glow transition-all duration-300">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate web developer focused on building clean, responsive, and 
                  <span className="text-primary"> user-friendly</span> web applications. I enjoy transforming 
                  ideas into meaningful digital experiences using modern technologies and best development practices.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="glass-card rounded-2xl p-8 hover-glow transition-all duration-300">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Currently working as an <span className="text-secondary font-semibold">Intern</span>, 
                  I'm constantly learning and growing in the field of web development. I believe in writing 
                  code that not only works but is also <span className="text-primary">maintainable and scalable</span>.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="glass-card rounded-2xl p-8 hover-glow transition-all duration-300">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  <span className="text-primary"> open-source projects</span>, or learning about the 
                  latest trends in web development.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Profile Image */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <ScrollReveal delay={200}>
              <div className="relative group">
                {/* Glowing background */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent-foreground/20 to-primary/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Decorative elements */}
                <div className="absolute -inset-2 rounded-3xl border border-primary/20" />
                <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary/50 rounded-tl-lg" />
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-accent-foreground/50 rounded-br-lg" />
                
                {/* Image container */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 neon-glow">
                  <img 
                    src="/Meril_gandhi.jpeg" 
                    alt="Meril Gandhi"
                    className="w-72 h-96 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-display text-lg font-semibold text-foreground">Meril Gandhi</p>
                    <p className="text-sm text-primary">Web Developer</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
