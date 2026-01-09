"use client";

export const Footer = () => {
  const yearNow = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="border-t-4 border-black pt-12 max-w-5xl mx-auto px-4 md:px-8 pb-12"
    >
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-black text-white p-8 shadow-[-8px_-8px_0px_0px_rgba(150,150,150,1)]">
          <h2 className="text-5xl font-sans font-bold mb-6 uppercase">
            Let&apos;s
            <br />
            Build.
          </h2>
          <p className="mb-8 font-mono text-sm">Open to exploring new opportunities.</p>
          <a
            href="mailto:andri.adrp@gmail.com"
            className="inline-block bg-white text-black border-2 border-transparent hover:border-white hover:bg-black hover:text-white px-6 py-3 font-bold transition-all w-full text-center"
          >
            SEND EMAIL -&gt;
          </a>
        </div>

        <div className="flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://twitter.com/Andrii_purnomo"
              target="_blank"
              rel="noreferrer noopener"
              className="border-2 border-black p-4 font-bold hover:bg-black hover:text-white transition-colors text-center shadow-hard-sm hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
            >
              TWITTER
            </a>
            <a
              href="https://github.com/andrip8/"
              target="_blank"
              rel="noreferrer noopener"
              className="border-2 border-black p-4 font-bold hover:bg-black hover:text-white transition-colors text-center shadow-hard-sm hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
            >
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/andri-purnomo/"
              target="_blank"
              rel="noreferrer noopener"
              className="col-span-2 border-2 border-black p-4 font-bold hover:bg-black hover:text-white transition-colors text-center shadow-hard-sm hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
            >
              LINKEDIN
            </a>
          </div>
          <div className="mt-8 text-right font-mono text-xs">
            <p>COPYRIGHT © {yearNow}</p>
            <p>ANDRI PURNOMO</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
