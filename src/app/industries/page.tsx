import Industries from "../components/Industries/Industries";
import AnimatedHero from "../components/Hero/AnimatedHero";
import CallToAction from "../components/CTA/CallToAction";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry Solutions | Healthcare, Finance, Retail & More | MIVS",
  description: "Industry-specific software solutions for healthcare, financial services, retail, manufacturing, education, and more. Deep domain expertise delivering targeted results.",
  keywords: [
    "industry solutions", "healthcare software", "fintech solutions", "retail technology",
    "manufacturing software", "education technology", "industry expertise", "vertical solutions",
    "domain knowledge", "sector-specific software"
  ],
  openGraph: {
    title: "Industry Solutions | MIVS Software Development",
    description: "Industry-specific software solutions with deep domain expertise across healthcare, finance, retail, and more.",
    url: "https://mivs.in/industries",
    images: [
      {
        url: "/images/industries-hero.jpg",
        width: 1200,
        height: 630,
        alt: "MIVS Industry Solutions",
      },
    ],
  },
  alternates: {
    canonical: "https://mivs.in/industries",
  },
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-20">
      <AnimatedHero 
        title="Industry Expertise"
        subtitle="Deep domain knowledge across industries, delivering solutions that understand your unique challenges."
        backgroundImage="/images/ind_hero.jpg"
      />

      {/* Industry Overview */}
      <section className="py-16 bg-gradient-to-b from-[#0a0a0f] to-[#13131a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Industry-Aligned <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Our business outcome-led solutions align to industry-specific context. With ready-made assets based on data-informed industry patterns, we deliver value that matters to your sector.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Regulatory Compliance",
                desc: "Navigate complex regulations with built-in compliance features",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "Best Practices",
                desc: "Industry-proven patterns and workflows built-in from day one",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Domain Expertise",
                desc: "Teams with real experience in your industry's challenges",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              }
            ].map((feature) => (
              <div key={feature.title} className="glass-card rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Industries */}
      <Industries />

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CallToAction />
      </div>
    </div>
  );
}

