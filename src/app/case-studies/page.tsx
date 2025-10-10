import CaseStudies from "../components/CaseStudies/CaseStudies";
import AnimatedHero from "../components/Hero/AnimatedHero";
import CallToAction from "../components/CTA/CallToAction";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies & Success Stories | MIVS Software Development",
  description: "Explore our portfolio of successful software projects. Real results, measurable impact. See how we've helped businesses transform with technology.",
  keywords: [
    "case studies", "success stories", "portfolio", "client results", "software projects",
    "digital transformation", "project outcomes", "client testimonials", "real results"
  ],
  openGraph: {
    title: "Case Studies & Success Stories | MIVS Software Development",
    description: "Real results, measurable impact. See how we've helped businesses transform with technology.",
    url: "https://mivs.in/case-studies",
    images: [
      {
        url: "/images/case-studies-hero.jpg",
        width: 1200,
        height: 630,
        alt: "MIVS Case Studies and Success Stories",
      },
    ],
  },
  alternates: {
    canonical: "https://mivs.in/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-20">
      <AnimatedHero 
        title="Success Stories"
        subtitle="Real projects. Real results. See how we've helped businesses achieve their goals."
        backgroundImage="/images/success.jpg"
      />

      {/* Stats Overview */}
      <section className="py-16 bg-gradient-to-b from-[#0a0a0f] to-[#13131a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Projects Delivered", value: "100+", suffix: "" },
              { label: "Industries Served", value: "15+", suffix: "" },
              { label: "Client Satisfaction", value: "98", suffix: "%" },
              { label: "Countries", value: "10+", suffix: "" }
            ].map((stat) => (
              <div key={stat.label} className="text-center glass-card rounded-xl p-6">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <CaseStudies />

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CallToAction />
      </div>
    </div>
  );
}

