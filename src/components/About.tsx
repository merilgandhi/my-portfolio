import { Code2, Palette, Rocket, Coffee } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Clean Code", description: "Writing maintainable & efficient code" },
  { icon: Palette, label: "UI/UX Design", description: "Creating beautiful interfaces" },
  { icon: Rocket, label: "Fast Learner", description: "Adapting to new technologies" },
  { icon: Coffee, label: "Problem Solver", description: "Finding creative solutions" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-widest uppercase">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile section */}
          <div className="relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse" />
              <div className="absolute inset-4 rounded-full border-2 border-accent/20 animate-pulse" style={{ animationDelay: "0.5s" }} />
              <div className="absolute inset-8 rounded-full border-2 border-primary/20 animate-pulse" style={{ animationDelay: "1s" }} />
              
              {/* Avatar placeholder */}
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                <span className="text-6xl md:text-7xl">👨‍💻</span>
              </div>
            </div>
          </div>

          {/* Content section */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate web developer focused on building clean, responsive, and user-friendly web applications. I enjoy transforming ideas into meaningful digital experiences using modern technologies and best development practices.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently working as an <span className="text-primary font-semibold">Intern</span>, I'm constantly learning and growing in the field of web development. I believe in writing code that not only works but is also maintainable and scalable.
            </p>

            {/* Tech stack pills */}
            <div className="pt-4">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Technologies I work with
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React", "JavaScript", "TypeScript", "Node.js", "Express", "MongoDB", "Java", "Python", "C++", "Tailwind CSS"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm glass hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {highlights.map((item, index) => (
            <div
              key={item.label}
              className="group p-6 rounded-2xl glass hover:bg-primary/5 transition-all duration-300 hover:scale-105 hover:glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
