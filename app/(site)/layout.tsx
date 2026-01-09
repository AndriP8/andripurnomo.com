import { SITE_CONFIG } from "@lib/constants";
import { Footer, Navbar } from "@ui/components";
import { Metadata } from "next";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export const metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    template: `%s | ${SITE_CONFIG.name}`,
    default: SITE_CONFIG.name,
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
