'use client';

import { useState } from 'react';

type CodeBlockProps = {
  children: React.ReactNode;
  language?: string;
};

export const CodeBlock = ({ children, language = 'code' }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const codeText = (children as any)?.props?.children || '';
    navigator.clipboard.writeText(codeText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="code-block bg-[#1a1a1a] border border-[rgba(0,255,136,0.2)] rounded-xl my-8 overflow-hidden">
      <div className="flex justify-between items-center bg-[rgba(0,255,136,0.1)] px-5 py-3 border-b border-[rgba(0,255,136,0.2)]">
        <span className="text-[#00ff88] text-xs font-semibold uppercase tracking-wider">
          {language}
        </span>
        <button
          onClick={copyToClipboard}
          className={`px-4 py-1 text-xs rounded-full border transition-all duration-300 ${
            copied
              ? 'bg-[#00ff88] text-[#0a0a0a] border-[#00ff88]'
              : 'bg-transparent text-[#00ff88] border-[#00ff88] hover:bg-[#00ff88] hover:text-[#0a0a0a]'
          }`}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="p-5 overflow-x-auto">
        <pre className="m-0">
          <code className="text-sm leading-relaxed">{children}</code>
        </pre>
      </div>
    </div>
  );
};
