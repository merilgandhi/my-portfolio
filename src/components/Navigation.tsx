import { useState, useEffect } from "react";
import { Home, User, Code2, FolderOpen, Mail, Moon, Sun } from "lucide-react";

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const navItems = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "skills", icon: Code2, label: "Skills" },
  { id: "projects", icon: FolderOpen, label: "Projects" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export const Navigation = ({ isDark, toggleTheme }: NavigationProps) => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Update active section
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <div className="glass rounded-full px-4 py-3 flex items-center gap-1 md:gap-2 shadow-2xl">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative p-3 rounded-full transition-all duration-300 group ${
              activeSection === item.id
                ? "bg-primary text-primary-foreground glow"
                : "hover:bg-secondary text-muted-foreground hover:text-foreground"
            }`}
            aria-label={item.label}
          >
            <item.icon className="w-5 h-5" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-card rounded-md text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
              {item.label}
            </span>
          </button>
        ))}
        
        <div className="w-px h-6 bg-border mx-1" />
        
        <button
          onClick={toggleTheme}
          className="p-3 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-300"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </nav>
  );
};
