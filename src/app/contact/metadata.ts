import type { Metadata } from "next";

export const contactMetadata: Metadata = {
  title: "Contact MIVS | Enterprise AI & Automation",
  description: "Contact MIVS for enterprise AI automation and AI consulting. Discuss your initiative: strategy, architecture, or delivery.",
  keywords: [
    "contact MIVS", "enterprise AI", "AI consulting", "AI automation", "consultation"
  ],
  openGraph: {
    title: "Contact MIVS | Enterprise AI & Automation",
    description: "Contact MIVS for enterprise AI automation and AI consulting.",
    url: "https://mivs.in/contact",
    images: [
      {
        url: "/images/contact-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Contact MIVS",
      },
    ],
  },
  twitter: {
    title: "Contact MIVS | Enterprise AI & Automation",
    description: "Contact MIVS for enterprise AI automation and AI consulting.",
    images: ["/images/contact-hero.jpg"],
  },
  alternates: {
    canonical: "https://mivs.in/contact",
  },
};
