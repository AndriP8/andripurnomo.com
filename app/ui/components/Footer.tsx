'use client';

export const Footer = () => {
  const yearNow = new Date().getFullYear();
  return (
    <footer className="py-10 px-[5%] border-t border-white/10 text-center text-text-muted">
      <p>&copy; {yearNow} Andri Purnomo. Crafted with passion and precision.</p>
    </footer>
  );
};
