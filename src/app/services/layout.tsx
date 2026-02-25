import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise AI & Automation | Capabilities",
  description:
    "Enterprise AI systems, AI automation architecture, LLM integrations, intelligent workflow systems, AI-powered decision engines, and enterprise transformation.",
  keywords: [
    "enterprise AI",
    "AI automation",
    "LLM integration",
    "intelligent workflow",
    "decision engines",
    "enterprise transformation",
    "AI consulting",
    "RAG",
    "AI agents",
    "MLOps",
  ],
  openGraph: {
    title: "Enterprise AI & Automation | MIVS",
    description:
      "Enterprise AI systems, LLM integrations, intelligent workflows, and AI-powered decision engines.",
    url: "https://mivs.in/services",
    images: [
      {
        url: "/images/services-hero.jpg",
        width: 1200,
        height: 630,
        alt: "MIVS Enterprise AI & Automation",
      },
    ],
  },
  twitter: {
    title: "Enterprise AI & Automation | MIVS",
    description:
      "Enterprise AI systems, LLM integrations, intelligent workflows, and AI-powered decision engines.",
    images: ["/images/services-hero.jpg"],
  },
  alternates: {
    canonical: "https://mivs.in/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
