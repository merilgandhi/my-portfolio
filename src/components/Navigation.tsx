import { Home, Code2, Building2, BookOpen, Mail, FileText, Github, Linkedin, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "skills", icon: Code2, label: "Skills" },
  { id: "projects", icon: Building2, label: "Projects" },
  { id: "about", icon: BookOpen, label: "About" },
  { id: "contact", icon: Mail, label: "Contact" },
];

const socialItems = [
  { icon: FileText, label: "Resume", url: "/Meril_Gandhi_resume.pdf", download: true },
  { icon: Github, label: "GitHub", url: "https://github.com/merilgandhi" },
  { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/merilgandhi" },
];

export const Navigation = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="glass neon-border rounded-2xl px-3 py-3 flex items-center gap-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="p-3 rounded-xl hover:bg-primary/10 transition-all duration-300 group relative hover-glow"
            aria-label={item.label}
          >
            <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            
            {/* Tooltip */}
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-card text-xs text-foreground 
              rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap neon-border">
              {item.label}
            </span>
          </button>
        ))}
        
        <div className="w-px h-6 bg-primary/20 mx-2" />
        
        {socialItems.map((item) => (
          <a
            key={item.label}
            href={item.url}
            target={item.url.startsWith("http") ? "_blank" : undefined}
            rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
            download={item.download ? true : undefined}
            className="p-3 rounded-xl hover:bg-secondary/10 transition-all duration-300 group relative"
            aria-label={item.label}
          >
            <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
            
            {/* Tooltip */}
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-card text-xs text-foreground 
              rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap neon-border">
              {item.label}
            </span>
          </a>
        ))}

        <div className="w-px h-6 bg-primary/20 mx-2" />

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-3 rounded-xl hover:bg-primary/10 transition-all duration-300 group relative hover-glow"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-muted-foreground group-hover:text-yellow-400 transition-colors" />
          ) : (
            <Moon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          )}
          
          {/* Tooltip */}
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-card text-xs text-foreground 
            rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap neon-border">
            {isDark ? "Light Mode" : "Dark Mode"}
          </span>
        </button>
      </div>
    </nav>
  );
};
