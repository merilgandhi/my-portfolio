export const About = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
        </div>

        <div className="max-w-3xl">
          <p className="text-lg text-white/70 leading-relaxed mb-6">
            I'm a passionate web developer focused on building clean, responsive, and user-friendly web applications. I enjoy transforming ideas into meaningful digital experiences using modern technologies and best development practices.
          </p>
          
          <p className="text-lg text-white/70 leading-relaxed mb-6">
            Currently working as an <span className="text-white font-medium">Intern</span>, I'm constantly learning and growing in the field of web development. I believe in writing code that not only works but is also maintainable and scalable.
          </p>

          <p className="text-lg text-white/70 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or learning about the latest trends in web development.
          </p>
        </div>
      </div>
    </section>
  );
};