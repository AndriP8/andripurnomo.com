import { Footer, Navbar } from "@ui/components";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <NuqsAdapter>
      <Navbar />
      {children}
      <Footer />
    </NuqsAdapter>
  );
}
