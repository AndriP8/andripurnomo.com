import { Footer, Navbar } from "@ui/components";
import { Metadata } from "next";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export const metadata = {
  metadataBase: new URL("https://www.andripurnomo.com"),
  title: {
    template: "%s | Andri Purnomo",
    default: "Andri Purnomo",
  },
} satisfies Metadata;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NuqsAdapter>
          <Navbar />
          {children}
          <Footer />
        </NuqsAdapter>
      </body>
    </html>
  );
}
