import ServicesGrid from "../components/services/ServicesGrid";
import CallToAction from "../components/CTA/CallToAction";
import AnimatedHero from "../components/Hero/AnimatedHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development Services | Web, Mobile, Cloud & AI Solutions",
  description: "Comprehensive software development services including web development, mobile app development, cloud solutions, AI/ML development, DevOps, and custom software solutions. Expert team delivering scalable, secure applications.",
  keywords: [
    "software development services", "web development services", "mobile app development", 
    "cloud solutions", "AI development", "machine learning services", "DevOps services",
    "custom software development", "enterprise software", "React development", "Node.js development",
    "Python development", "React Native", "Flutter development", "AWS services", "Google Cloud",
    "Azure services", "API development", "database design", "UI/UX design", "e-commerce development"
  ],
  openGraph: {
    title: "Software Development Services | MIVS Software Development",
    description: "Professional software development services. Web apps, mobile apps, cloud solutions, and AI/ML development by expert team.",
    url: "https://mivs.in/services",
    images: [
      {
        url: "/images/services-hero.jpg",
        width: 1200,
        height: 630,
        alt: "MIVS Software Development Services",
      },
    ],
  },
  twitter: {
    title: "Software Development Services | MIVS Software Development",
    description: "Professional software development services. Web apps, mobile apps, cloud solutions, and AI/ML development.",
    images: ["/images/services-hero.jpg"],
  },
  alternates: {
    canonical: "https://mivs.in/services",
  },
};

export default function Services() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-20">
      <AnimatedHero 
        title="Our Services"
        subtitle="We build scalable web, mobile, cloud, and AI solutions tailored to your business."
        backgroundImage="/images/services-hero.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Services Grid */}
        <div className="mb-16">
          <ServicesGrid />
        </div>

        {/* CTA Section */}
        <CallToAction />
      </div>
    </div>
  );
}
