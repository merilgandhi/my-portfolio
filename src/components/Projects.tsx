import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "DIY Repair Hub",
    description:
      "Developed a React.js platform for DIY enthusiasts featuring a comprehensive guide management system with search/filtering capabilities, dynamic user profiles displaying real-time statistics, and an AI-powered chat assistant. Built responsive UI with Tailwind CSS and smooth animations using Framer Motion, implemented state management with Context API, and created SPA navigation with React Router for guide details and user authentication flows.",
    techStack: ["React.js", "Tailwind CSS", "Framer Motion", "Context API", "React Router"],
    githubUrl: "https://github.com/merilgandhi/DIY-Repair-Hub",
    liveUrl: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proof of Work
          </h2>
          <p className="text-white/50 max-w-xl">
            Projects I've built to solve real problems.
          </p>
        </div>

        {/* Projects grid */}
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-white/90">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-5 h-5 text-white/70" />
                  </a>
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-5 h-5 text-white/70" />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-white/60 leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs bg-white/5 text-white/70 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View more link */}
        <div className="mt-12">
          <a
            href="https://github.com/merilgandhi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
          >
            View more on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};