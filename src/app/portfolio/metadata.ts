import type { Metadata } from "next";

export const portfolioMetadata: Metadata = {
  title: "Portfolio | MIVS Software Development Projects & Case Studies",
  description: "Explore our portfolio of successful software development projects. See our work in web development, mobile apps, AI/ML solutions, cloud applications, and custom software development.",
  keywords: [
    "MIVS portfolio", "software development projects", "web development portfolio", "mobile app portfolio",
    "AI development projects", "cloud solutions portfolio", "custom software projects", "development case studies",
    "successful projects", "client work", "software solutions", "development examples", "project showcase",
    "technical portfolio", "development expertise", "project results", "software achievements"
  ],
  openGraph: {
    title: "Portfolio | MIVS Software Development Projects & Case Studies",
    description: "Explore our portfolio of successful software development projects. See our work in web development, mobile apps, AI/ML solutions, and cloud applications.",
    url: "https://mivs.in/portfolio",
    images: [
      {
        url: "/images/portfolio-hero.jpg",
        width: 1200,
        height: 630,
        alt: "MIVS Software Development Portfolio",
      },
    ],
  },
  twitter: {
    title: "Portfolio | MIVS Software Development Projects & Case Studies",
    description: "Explore our portfolio of successful software development projects. See our work in web development, mobile apps, AI/ML solutions, and cloud applications.",
    images: ["/images/portfolio-hero.jpg"],
  },
  alternates: {
    canonical: "https://mivs.in/portfolio",
  },
};