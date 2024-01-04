'use client';
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';

export const Footer = () => {
  const yearNow = new Date().getFullYear();
  return (
    <footer className="py-6">
      <div className="flex flex-col items-center justify-center">
        <p className="text-lg font-bold">Find me on</p>
        <div className="flex items-center justify-center mt-3 mb-5">
          <a
            href="mailto:andri.adrp@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <HiOutlineMail className="text-3xl mx-1 cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/andri-purnomo/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiOutlineLinkedin
              className="text-3xl mx-1 cursor-pointer"
              href=""
            />
          </a>
          <a
            href="https://twitter.com/Andrii_purnomo"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiOutlineTwitter className="text-3xl mx-1 cursor-pointer" />
          </a>
          <a
            href="https://github.com/andrip8/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiOutlineGithub className="text-3xl mx-1 cursor-pointer" />
          </a>
        </div>
        <p>© Andri Purnomo {yearNow}</p>
      </div>
    </footer>
  );
};
