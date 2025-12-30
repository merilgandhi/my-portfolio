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
    <section id="skills" className="py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-white/50 max-w-xl">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-white/5 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className={`w-10 h-10 ${skill.invert ? 'invert' : ''}`}
                />
              </div>
              <span className="text-xs text-white/50 group-hover:text-white/80 transition-colors text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};