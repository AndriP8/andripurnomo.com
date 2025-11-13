export const AuthorBio = () => {
  return (
    <div
      className="my-16 p-10 rounded-3xl flex flex-col md:flex-row gap-8 items-center md:items-start"
      style={{
        background:
          'linear-gradient(135deg, rgba(0, 255, 136, 0.05) 0%, rgba(123, 63, 242, 0.05) 100%)',
      }}
    >
      <div
        className="w-24 h-24 rounded-full flex-shrink-0"
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
      />
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-2xl font-bold text-[#00ff88] mb-3">
          Andri Purnomo
        </h3>
        <p className="text-[#888] mb-4 leading-relaxed">
          Frontend Engineer passionate about building scalable, real-time
          applications. Currently exploring system design and WebSocket
          technologies.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="https://github.com/andrip8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e0e0e0] text-sm hover:text-[#00ff88] transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/andri-purnomo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e0e0e0] text-sm hover:text-[#00ff88] transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/Andrii_purnomo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e0e0e0] text-sm hover:text-[#00ff88] transition-colors duration-300"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};
