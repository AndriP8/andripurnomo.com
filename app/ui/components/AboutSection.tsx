export const AboutSection = () => {
  const skills = [
    {
      title: 'Frontend',
      description: 'React, Next.js, TypeScript, Vue.js',
    },
    {
      title: 'Design',
      description: 'UI/UX, Responsive Design, Animation',
    },
    {
      title: 'Tools',
      description: 'Git, Webpack, Docker, CI/CD',
    },
    {
      title: 'Backend',
      description: 'Node.js, REST APIs, GraphQL',
    },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-[clamp(40px,5vw,60px)] font-extrabold mb-8 relative inline-block pb-6">
            About Me
            <span className="absolute bottom-0 left-0 w-[60px] h-1 bg-accent" />
          </h2>
          <p className="text-lg leading-relaxed text-text-muted mb-5">
            I&apos;m a passionate Frontend Engineer with 3+ years of experience
            crafting exceptional web experiences. I specialize in building
            performant, accessible, and visually stunning applications that
            delight users and drive business results.
          </p>
          <p className="text-lg leading-relaxed text-text-muted">
            Currently focused on modern JavaScript frameworks, system design,
            and creating seamless user experiences that bridge the gap between
            design and development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className={`bg-white/[0.03] border border-white/10 p-5 rounded-2xl transition-all duration-300 hover:bg-white/[0.05] hover:border-accent hover:rotate-0 hover:scale-105 ${
                index % 2 === 0 ? '-rotate-2' : 'rotate-2'
              }`}
            >
              <h3 className="text-xl mb-2.5 text-accent">{skill.title}</h3>
              <p className="text-sm text-text-muted">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
