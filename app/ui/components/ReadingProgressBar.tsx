'use client';

import { useEffect, useState } from 'react';

export const ReadingProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const scrolled = window.pageYOffset;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;
      const progressPercentage = Math.min((scrolled / height) * 100, 100);
      setProgress(progressPercentage);
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });
    return () => window.removeEventListener('scroll', requestTick);
  }, []);

  return (
    <div
      className="fixed top-[61px] left-0 h-1 bg-[#00ff88] z-[999] ease-out"
      style={{
        width: `${progress}%`,
        transition: 'width 0.15s ease-out',
      }}
    />
  );
};
