'use client';

export const Footer = () => {
  const yearNow = new Date().getFullYear();
  return (
    <footer className="mt-24 py-10 px-[5%] border-t border-white/10 text-center">
      <p className="text-[#888]">
        © {yearNow} Andri Purnomo. Crafted with passion and precision.
      </p>
    </footer>
  );
};
