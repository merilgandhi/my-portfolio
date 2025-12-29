import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "DIY Repair Hub",
    description:
      "A React.js platform for DIY enthusiasts featuring a comprehensive guide management system with search/filtering capabilities, dynamic user profiles displaying real-time statistics, and an AI-powered chat assistant.",
    techStack: ["React.js", "Tailwind CSS", "Framer Motion", "Context API", "React Router"],
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "https://github.com/merilgandhi/DIY-Repair-Hub",
    featured: true,
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React and Tailwind CSS featuring smooth animations, dark mode, and a clean design.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "https://github.com/merilgandhi",
    featured: false,
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "A full-stack task management application with user authentication, real-time updates, and collaborative features.",
    techStack: ["Node.js", "Express", "MongoDB", "React"],
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "https://github.com/merilgandhi",
    featured: false,
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description:
      "A responsive e-commerce platform with product catalog, shopping cart, and secure payment integration.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "https://github.com/merilgandhi",
    featured: false,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-widest uppercase">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Featured project */}
        {projects
          .filter((p) => p.featured)
          .map((project) => (
            <div
              key={project.id}
              className="mb-16 group rounded-3xl glass overflow-hidden hover:glow transition-all duration-500"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-full min-h-[300px] bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl opacity-50">🔧</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent lg:bg-gradient-to-r" />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-primary text-sm font-mono mb-2">Featured Project</span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button
                      asChild
                      variant="outline"
                      className="gap-2 hover:bg-primary hover:text-primary-foreground"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    </Button>
                    <Button asChild className="gap-2 glow">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live Demo
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* Other projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <div
                key={project.id}
                className="group rounded-2xl glass overflow-hidden hover:bg-primary/5 transition-all duration-300 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl opacity-50">
                      {index === 0 ? "🌐" : index === 1 ? "📋" : "🛒"}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-background/80 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-background/80 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-xs bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-0.5 rounded text-xs bg-secondary text-secondary-foreground">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* View more link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/merilgandhi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            View more on GitHub
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
