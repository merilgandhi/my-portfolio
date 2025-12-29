import { useState } from "react";

const skills = [
  { name: "React", level: 90, category: "Frontend", icon: "⚛️" },
  { name: "JavaScript", level: 85, category: "Languages", icon: "🟨" },
  { name: "TypeScript", level: 80, category: "Languages", icon: "🔷" },
  { name: "Node.js", level: 75, category: "Backend", icon: "🟢" },
  { name: "Express", level: 70, category: "Backend", icon: "⚡" },
  { name: "MongoDB", level: 75, category: "Database", icon: "🍃" },
  { name: "Java", level: 70, category: "Languages", icon: "☕" },
  { name: "Python", level: 65, category: "Languages", icon: "🐍" },
  { name: "C++", level: 60, category: "Languages", icon: "💠" },
  { name: "Tailwind CSS", level: 90, category: "Frontend", icon: "🎨" },
];

const tools = [
  { name: "VS Code", icon: "📝" },
  { name: "Git", icon: "🔀" },
  { name: "Postman", icon: "📮" },
  { name: "Figma", icon: "🎨" },
  { name: "Canva", icon: "✨" },
  { name: "GitHub", icon: "🐙" },
];

const categories = ["All", "Frontend", "Backend", "Languages", "Database"];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-1/2 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-1/2 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-widest uppercase">
            My Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground glow"
                  : "glass hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group p-5 rounded-2xl glass hover:bg-primary/5 transition-all duration-300"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <div>
                    <h3 className="font-semibold">{skill.name}</h3>
                    <p className="text-xs text-muted-foreground">{skill.category}</p>
                  </div>
                </div>
                <span className="text-sm font-mono text-primary">{skill.level}%</span>
              </div>
              
              {/* Progress bar */}
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{
                    width: hoveredSkill === skill.name ? `${skill.level}%` : "0%",
                    background: `linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tools section */}
        <div className="text-center">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            Tools & Software
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="group flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-primary/10 transition-all duration-300 hover:scale-105 cursor-default"
              >
                <span className="text-xl">{tool.icon}</span>
                <span className="text-sm font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
