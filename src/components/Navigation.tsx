import { Home, Code2, Building2, BookOpen, Mail, FileText, Github, Linkedin } from "lucide-react";

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
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="glass rounded-full px-2 py-2 flex items-center gap-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="p-3 rounded-full hover:bg-white/10 transition-all duration-200 group relative"
            aria-label={item.label}
          >
            <item.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
          </button>
        ))}
        
        <div className="w-px h-6 bg-white/20 mx-1" />
        
        {socialItems.map((item) => (
          <a
            key={item.label}
            href={item.url}
            target={item.url.startsWith("http") ? "_blank" : undefined}
            rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
            download={item.download ? true : undefined}
            className="p-3 rounded-full hover:bg-white/10 transition-all duration-200 group"
            aria-label={item.label}
          >
            <item.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
          </a>
        ))}
      </div>
    </nav>
  );
};