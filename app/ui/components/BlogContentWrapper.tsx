'use client';

import Prism from 'prismjs';
import { useEffect, useRef } from 'react';

// Import language support
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-markdown';

type BlogContentWrapperProps = {
  children: React.ReactNode;
};

export const BlogContentWrapper = ({ children }: BlogContentWrapperProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const processedRef = useRef(new Set<HTMLElement>());

  useEffect(() => {
    if (!contentRef.current) return;

    // Find all pre > code blocks
    const preBlocks = contentRef.current.querySelectorAll('pre > code');

    preBlocks.forEach((codeElement) => {
      const preElement = codeElement.parentElement;
      if (!preElement || processedRef.current.has(preElement)) return;

      // Mark as processed
      processedRef.current.add(preElement);

      // Extract language from className (e.g., "language-javascript")
      const className = codeElement.className || '';
      const languageMatch = className.match(/language-(\w+)/);
      const language = languageMatch ? languageMatch[1] : 'javascript';

      // Get code content
      const codeContent = codeElement.textContent || '';

      // Check if Prism supports this language
      const prismLanguage = Prism.languages[language] || Prism.languages.javascript;

      // Highlight the code
      const highlightedCode = Prism.highlight(codeContent, prismLanguage, language);

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

      // Update code element with highlighted code
      codeElement.innerHTML = highlightedCode;
      codeElement.className = `language-${language}`;

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
