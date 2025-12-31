import { User, Code, Rocket, Coffee } from "lucide-react";

const highlights = [
  { icon: Code, label: "Clean Code", description: "Writing maintainable solutions" },
  { icon: Rocket, label: "Fast Learner", description: "Adapting to new technologies" },
  { icon: Coffee, label: "Dedicated", description: "Passionate about development" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-8 lg:px-16 relative">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass neon-border mb-6">
            <User className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">About</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Main content */}
          <div className="lg:col-span-3 space-y-6">
            <div className="glass-card rounded-2xl p-8 hover-glow transition-all duration-300">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate web developer focused on building clean, responsive, and 
                <span className="text-primary"> user-friendly</span> web applications. I enjoy transforming 
                ideas into meaningful digital experiences using modern technologies and best development practices.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-8 hover-glow transition-all duration-300">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently working as an <span className="text-secondary font-semibold">Intern</span>, 
                I'm constantly learning and growing in the field of web development. I believe in writing 
                code that not only works but is also <span className="text-primary">maintainable and scalable</span>.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 hover-glow transition-all duration-300">
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                <span className="text-primary"> open-source projects</span>, or learning about the 
                latest trends in web development.
              </p>
            </div>
          </div>

          {/* Highlights sidebar */}
          <div className="lg:col-span-2 space-y-4">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold text-foreground mb-6">
                {'// '}<span className="text-primary">Core Values</span>
              </h3>
              
              <div className="space-y-4">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-primary/5 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg glass neon-border flex items-center justify-center flex-shrink-0
                      group-hover:bg-primary/20 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {item.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats or additional info */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm">Currently building cool stuff</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
