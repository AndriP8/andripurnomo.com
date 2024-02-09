import '../styles/globals.css';

import { Metadata } from 'next';

import { Footer, Navbar } from './ui';

export const metadata = {
  title: {
    template: '%s | Andri Purnomo',
    default: 'Andri Purnomo',
  },
} satisfies Metadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
