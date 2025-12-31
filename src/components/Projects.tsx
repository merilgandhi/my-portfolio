import { Github, ExternalLink, Folder, ArrowUpRight } from "lucide-react";

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
    <section id="projects" className="py-24 px-4 md:px-8 lg:px-16 relative">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass neon-border mb-6">
            <Folder className="w-4 h-4 text-secondary" />
            <span className="text-sm text-secondary font-medium">Portfolio</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Proof of <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Projects I've built to solve real problems.
          </p>
        </div>

        {/* Projects grid */}
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group glass-card rounded-3xl p-8 md:p-10 hover-glow transition-all duration-500 relative overflow-hidden"
            >
              {/* Decorative corner elements */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/40 rounded-tl-xl" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-secondary/40 rounded-br-xl" />
              
              {/* Project number */}
              <div className="absolute top-6 right-6 font-display text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors mt-2">
                0{project.id}
              </div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 md:mr-16">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl glass neon-border hover:bg-primary/20 transition-all duration-300 group/btn"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5 text-muted-foreground group-hover/btn:text-primary transition-colors" />
                    </a>
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl glass neon-border hover:bg-secondary/20 transition-all duration-300 group/btn"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover/btn:text-secondary transition-colors" />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-xl text-sm glass text-primary/80 border border-primary/20
                        hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more link */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/merilgandhi"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl glass neon-border 
              hover:bg-primary/10 transition-all duration-300 hover-glow"
          >
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
              View more on GitHub
            </span>
            <ArrowUpRight className="w-4 h-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
