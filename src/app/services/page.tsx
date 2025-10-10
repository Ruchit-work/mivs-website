import ServicesGrid from "../components/services/ServicesGrid";
import CallToAction from "../components/CTA/CallToAction";
import AnimatedHero from "../components/Hero/AnimatedHero";
import HowWeHelp from "../components/HowWeHelp/HowWeHelp";
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
        title="Services That Drive Business Results"
        subtitle="From strategy to implementation, we deliver technology solutions that create competitive advantages and measurable outcomes."
        backgroundImage="/images/service.jpg"
      />

      {/* How We Help - Value Proposition (button removed as requested) */}
      <HowWeHelp />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Intro Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Comprehensive <span className="gradient-text">Technology Services</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Our integrated approach combines strategic consulting with hands-on technical expertise to deliver solutions that work.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <ServicesGrid />
        </div>

        {/* Service Approach */}
        <div className="glass-card rounded-2xl p-8 lg:p-12 mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Service Delivery Model</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Dedicated Teams",
                desc: "Full-time teams integrated with your organization",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              {
                title: "Project-Based",
                desc: "Fixed-scope projects with clear deliverables and timelines",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                )
              },
              {
                title: "Staff Augmentation",
                desc: "Expert resources to complement your existing team",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                )
              }
            ].map((model) => (
              <div key={model.title} className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
                  {model.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{model.title}</h4>
                <p className="text-slate-400 text-sm">{model.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <CallToAction />
      </div>
    </div>
  );
}
