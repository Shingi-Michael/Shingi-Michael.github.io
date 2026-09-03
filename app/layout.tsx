import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shingi Kamucheka | AI Systems Notebook",
  description: "Experiments, field notes, and research in progress from a PhD student building local AI systems.",
  openGraph: {
    type: "website",
    title: "Shingi Kamucheka | AI Systems Notebook",
    description: "Experiments, field notes, and research in progress from a PhD student building local AI systems.",
    siteName: "Shingi Kamucheka | AI Systems Notebook",
  },
  twitter: {
    card: "summary",
    title: "Shingi Kamucheka | AI Systems Notebook",
    description: "Experiments, field notes, and research in progress from a PhD student building local AI systems.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
