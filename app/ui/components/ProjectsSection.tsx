export const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A modern e-commerce solution built with Next.js and Stripe integration. Features include real-time inventory management, advanced filtering, and seamless checkout experience.',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
    },
    {
      title: 'Real-Time Chat Application',
      description:
        'Advanced chat system with offline support, message queuing, and cross-tab synchronization. Built to handle thousands of concurrent users with WebSocket technology.',
      tags: ['React', 'WebSocket', 'Node.js', 'Redis'],
    },
    {
      title: 'Analytics Dashboard',
      description:
        'Interactive data visualization dashboard for business intelligence. Features complex charts, real-time updates, and customizable reporting tools.',
      tags: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
    },
  ];

  return (
    <section
      id="projects"
      className="section-padding"
      style={{
        background:
          'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[clamp(40px,5vw,60px)] font-extrabold mb-16 relative inline-block pb-6">
          Featured Projects
          <span className="absolute bottom-0 left-0 w-[60px] h-1 bg-accent" />
        </h2>

        <div className="grid gap-10">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white/[0.02] border border-white/10 rounded-[20px] p-10 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-white/[0.04] ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
              style={index % 2 === 1 ? { direction: 'rtl' } : {}}
            >
              <div style={{ direction: 'ltr' }}>
                <h3 className="text-3xl mb-4">{project.title}</h3>
                <p className="text-text-muted mb-5 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-2.5 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1 bg-accent/10 border border-accent rounded-[20px] text-xs text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className="bg-gradient-accent h-[250px] rounded-2xl relative overflow-hidden group"
                style={{ direction: 'ltr' }}
              >
                <div className="absolute bottom-5 right-5 bg-primary-dark text-text-light px-5 py-2.5 rounded-[25px] text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View Project →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
