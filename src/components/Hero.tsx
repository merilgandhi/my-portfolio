import { Button } from "@/components/ui/button";

// Tech icons floating on the right side
const FloatingIcons = () => (
  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full pointer-events-none hidden lg:block">
    {/* MongoDB Leaf */}
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
      alt="MongoDB"
      className="absolute w-10 h-10 floating"
      style={{ top: '15%', left: '25%' }}
    />
    
    {/* TypeScript */}
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
      alt="TypeScript"
      className="absolute w-14 h-14 floating-delayed"
      style={{ top: '22%', left: '50%' }}
    />
    
    {/* Tailwind */}
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" 
      alt="Tailwind CSS"
      className="absolute w-10 h-10 floating-delayed-2"
      style={{ top: '18%', left: '75%' }}
    />
    
    {/* Git */}
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
      alt="Git"
      className="absolute w-12 h-12 floating-delayed-3"
      style={{ top: '35%', left: '70%' }}
    />
    
    {/* MySQL */}
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
      alt="MySQL"
      className="absolute w-10 h-10 floating"
      style={{ top: '45%', left: '20%' }}
    />
    
    {/* JavaScript */}
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
      alt="JavaScript"
      className="absolute w-12 h-12 floating-delayed"
      style={{ top: '45%', left: '40%' }}
    />
    
    {/* CSS3 */}
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
      alt="CSS3"
      className="absolute w-10 h-10 floating-delayed-2"
      style={{ top: '45%', left: '60%' }}
    />
    
    {/* React */}
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
      alt="React"
      className="absolute w-14 h-14 floating-delayed-3"
      style={{ top: '42%', left: '80%' }}
    />
    
    {/* Node.js */}
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
      alt="Node.js"
      className="absolute w-16 h-16 floating"
      style={{ top: '62%', left: '45%' }}
    />
    
    {/* GitHub */}
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
      alt="GitHub"
      className="absolute w-10 h-10 floating-delayed invert"
      style={{ top: '58%', left: '75%' }}
    />
    
    {/* Python */}
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
      alt="Python"
      className="absolute w-10 h-10 floating-delayed-2"
      style={{ top: '75%', left: '35%' }}
    />
    
    {/* Java */}
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
      alt="Java"
      className="absolute w-12 h-12 floating-delayed-3"
      style={{ top: '78%', left: '60%' }}
    />
  </div>
);

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden px-4 md:px-8 lg:px-16"
    >
      <FloatingIcons />

      <div className="max-w-3xl relative z-10">
        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
          Hi, I'm Meril
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/70 max-w-xl mb-4 leading-relaxed">
          Intern, interested in Web Development, coding, anything which brings a change. My other interests include exploring new technologies & building projects.
        </p>

        {/* Connect line */}
        <p className="text-sm text-white/50 mb-8">
          Let's connect if you're interested in my work.
        </p>

        {/* CTA Button */}
        <Button
          onClick={scrollToContact}
          variant="outline"
          className="bg-transparent border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full px-6"
        >
          Get in touch
        </Button>
      </div>
    </section>
  );
};