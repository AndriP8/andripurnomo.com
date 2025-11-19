'use client';

import { useState } from 'react';

type CodeBlockProps = {
  children: string;
  language?: string;
};

export const CodeBlock = ({ children, language = 'code' }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block">
      <div className="code-header">
        <span className="code-lang">{language}</span>
        <button
          onClick={handleCopy}
          className={`copy-btn ${copied ? 'copied' : ''}`}
          aria-label="Copy code"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre>
        <code>{children}</code>
      </pre>
    </div>
  );
};
