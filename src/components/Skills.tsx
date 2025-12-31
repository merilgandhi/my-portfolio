import { Cpu } from "lucide-react";

const skills = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 md:px-8 lg:px-16 relative">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass neon-border mb-6">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Tech Stack</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="glass-card rounded-2xl p-6 flex flex-col items-center gap-4 
                hover-glow transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                {/* Icon container with glow */}
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-12 h-12 flex items-center justify-center relative">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className={`w-10 h-10 ${skill.invert ? 'invert' : ''} 
                        drop-shadow-[0_0_8px_hsl(var(--primary)/0.3)] group-hover:drop-shadow-[0_0_15px_hsl(var(--primary)/0.6)]
                        transition-all duration-300`}
                    />
                  </div>
                </div>
                
                {/* Skill name */}
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors text-center font-medium">
                  {skill.name}
                </span>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-primary/30 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-secondary/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
