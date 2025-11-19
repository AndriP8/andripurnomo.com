'use client';

import { useEffect, useRef } from 'react';

type BlogContentWrapperProps = {
  children: React.ReactNode;
};

export const BlogContentWrapper = ({ children }: BlogContentWrapperProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    // Find all pre > code blocks
    const preBlocks = contentRef.current.querySelectorAll('pre > code');

    preBlocks.forEach((codeElement) => {
      const preElement = codeElement.parentElement;
      if (!preElement || preElement.querySelector('.code-header')) return; // Already processed

      // Extract language from className (e.g., "language-javascript")
      const className = codeElement.className || '';
      const languageMatch = className.match(/language-(\w+)/);
      const language = languageMatch ? languageMatch[1] : 'code';

      // Get code content
      const codeContent = codeElement.textContent || '';

      // Create wrapper div
      const wrapper = document.createElement('div');
      wrapper.className = 'code-block';

      // Create header
      const header = document.createElement('div');
      header.className = 'code-header';

      // Create language span
      const langSpan = document.createElement('span');
      langSpan.className = 'code-lang';
      langSpan.textContent = language;

      // Create copy button
      const copyBtn = document.createElement('button');
      copyBtn.className = 'copy-btn';
      copyBtn.textContent = 'Copy';
      copyBtn.setAttribute('aria-label', 'Copy code');
      copyBtn.onclick = async () => {
        await navigator.clipboard.writeText(codeContent);
        copyBtn.textContent = 'Copied!';
        copyBtn.classList.add('copied');
        setTimeout(() => {
          copyBtn.textContent = 'Copy';
          copyBtn.classList.remove('copied');
        }, 2000);
      };

      header.appendChild(langSpan);
      header.appendChild(copyBtn);

      // Wrap the pre element
      preElement.parentNode?.insertBefore(wrapper, preElement);
      wrapper.appendChild(header);
      wrapper.appendChild(preElement);

      // Remove margin from pre element since wrapper handles it
      preElement.style.margin = '0';
    });
  }, [children]);

  return (
    <div ref={contentRef} className="prose prose-blog max-w-none break-word-blog-content">
      {children}
    </div>
  );
};
