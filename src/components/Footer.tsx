import { Github, Linkedin, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 md:px-8 lg:px-16 border-t border-primary/10 relative">
      {/* Background effect */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Name */}
          <div className="flex items-center gap-2">
            <img src="Meril_gandhi.jpeg" alt="Meril Gandhi Logo" className="w-10 h-10 rounded-full" />
            <span className="text-muted-foreground">|</span>
            <span className="text-md text-muted-foreground ">
              © {currentYear} Meril Gandhi
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/merilgandhi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass neon-border hover:bg-primary/10 hover-glow transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/merilgandhi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass neon-border hover:bg-secondary/10 hover-glow transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
            </a>
          </div>      
       </div>
      </div>
    </footer>
  );
};
