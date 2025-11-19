export const ContactSection = () => {
  const contactLinks = [
    { label: 'Email Me', href: 'mailto:contact@andripurnomo.com' },
    { label: 'GitHub', href: 'https://github.com/andripurnomo' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/andripurnomo' },
  ];

  return (
    <section id="contact" className="section-padding text-center">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[clamp(40px,5vw,60px)] font-extrabold mb-8">
          Let&apos;s Build Something Amazing
        </h2>
        <p className="text-lg text-text-muted leading-relaxed mb-10">
          I&apos;m always interested in hearing about new opportunities and
          exciting projects. Whether you have a question or just want to say hi,
          feel free to reach out!
        </p>
        <div className="flex justify-center gap-8 flex-wrap mt-10">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-accent text-accent rounded-[30px] font-medium transition-all duration-300 hover:bg-accent hover:text-primary-dark hover:-translate-y-1 no-underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
