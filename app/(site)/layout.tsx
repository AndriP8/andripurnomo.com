import { FloatingNav, Footer, Navbar } from '@ui/components';
import { Metadata } from 'next';

export const metadata = {
  metadataBase: new URL('https://www.andripurnomo.com'),
  title: {
    template: '%s | Andri Purnomo',
    default: 'Andri Purnomo',
  },
} satisfies Metadata;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <FloatingNav />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
