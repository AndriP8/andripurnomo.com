'use client';

import { useState } from 'react';

type ShareButtonsProps = {
  title: string;
  url: string;
};

export const ShareButtons = ({ title, url }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank');
  };

  const shareOnLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="my-20 p-10 bg-white/[0.03] rounded-3xl text-center">
      <h3 className="text-2xl mb-6">Found this helpful? Share it with others!</h3>
      <div className="flex justify-center gap-4 flex-wrap">
        <button
          onClick={shareOnTwitter}
          className="flex items-center gap-2 px-6 py-3 bg-transparent border border-white/20 rounded-full text-[#e0e0e0] transition-all duration-300 hover:border-[#00ff88] hover:text-[#00ff88] hover:-translate-y-0.5"
        >
          <span>🐦</span>
          <span>Twitter</span>
        </button>
        <button
          onClick={shareOnLinkedIn}
          className="flex items-center gap-2 px-6 py-3 bg-transparent border border-white/20 rounded-full text-[#e0e0e0] transition-all duration-300 hover:border-[#00ff88] hover:text-[#00ff88] hover:-translate-y-0.5"
        >
          <span>💼</span>
          <span>LinkedIn</span>
        </button>
        <button
          onClick={copyLink}
          className={`flex items-center gap-2 px-6 py-3 border rounded-full transition-all duration-300 hover:-translate-y-0.5 ${
            copied
              ? 'bg-[#00ff88] text-[#0a0a0a] border-[#00ff88]'
              : 'bg-transparent text-[#e0e0e0] border-white/20 hover:border-[#00ff88] hover:text-[#00ff88]'
          }`}
        >
          <span>🔗</span>
          <span>{copied ? 'Copied!' : 'Copy Link'}</span>
        </button>
      </div>
    </div>
  );
};
