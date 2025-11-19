'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const rotatingTexts = ['Beautiful', 'Fast', 'Accessible', 'Modern'];

export const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
        setOpacity(1);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative px-[5%]"
    >
      {/* Floating Shapes */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-accent opacity-30 blur-[80px] top-[10%] right-[10%] animate-float" />
      <div
        className="absolute w-[200px] h-[200px] rounded-full bg-accent-alt opacity-30 blur-[80px] bottom-[20%] left-[5%] animate-float"
        style={{ animationDelay: '2s' }}
      />

      <div className="w-full max-w-[1400px] mx-auto relative z-10">
        <h1 className="font-black mb-8 leading-[1.1] overflow-visible">
          <span className="block text-[clamp(50px,8vw,100px)] opacity-0 animate-slide-in">
            Creative
          </span>
          <span
            className="block text-[clamp(50px,8vw,100px)] text-stroke opacity-0 animate-slide-in"
            style={{ animationDelay: '0.2s' }}
          >
            Frontend
          </span>
          <span
            className="block text-[clamp(50px,8vw,100px)] text-gradient opacity-0 animate-slide-up"
            style={{ animationDelay: '0.4s' }}
          >
            Engineer
          </span>
        </h1>

        <p
          className="text-lg text-text-muted mb-10 tracking-[2px] uppercase opacity-0 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          Building{' '}
          <span
            className="text-accent transition-opacity duration-300"
            style={{ opacity }}
          >
            {rotatingTexts[currentText]}
          </span>{' '}
          Digital Experiences
        </p>

        <Link
          href="#projects"
          className="inline-block px-10 py-[18px] bg-accent text-primary-dark font-semibold rounded-full transition-all duration-300 relative overflow-hidden opacity-0 animate-fade-in hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,255,136,0.3)] no-underline"
          style={{ animationDelay: '0.8s' }}
        >
          View My Work
        </Link>
      </div>
    </section>
  );
};
