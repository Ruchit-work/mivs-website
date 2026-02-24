import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/app/components/Hero/PageHero";

export const metadata: Metadata = {
  title: "About MIVS | Architecting Enterprise Intelligence",
  description: "We engineer intelligent systems—not software. Automation-first architecture, production-grade AI, governance by design, measurable impact.",
  keywords: ["about MIVS", "enterprise intelligence", "AI architecture", "automation-first", "production-grade AI"],
  openGraph: {
    title: "About MIVS | Architecting Enterprise Intelligence",
    description: "We engineer intelligent systems. Automation-first, production-grade, measurable.",
    url: "https://mivs.in/about",
  },
  alternates: { canonical: "https://mivs.in/about" },
};

const PRINCIPLES = [
  "Automation-First Architecture",
  "Production-Grade AI Engineering",
  "Governance & Compliance by Design",
  "Measurable Operational Impact",
];

const FOUNDERS = [
  {
    name: "Parjanya Patel",
    title: "Chief AI Architect",
    quote: "Intelligence belongs in the workflow, not in a dashboard. We design systems that decide, act, and scale.",
  },
  {
    name: "Harshit Prajapati",
    title: "Head of AI Engineering",
    quote: "Production-grade means it runs when it matters. We build for reliability, governance, and long-term impact.",
  },
];

const CAPABILITIES = [
  { title: "Automation Architecture", sentence: "Design and orchestration of intelligent workflows, decision systems, and integration layers." },
  { title: "AI Engineering", sentence: "Production-grade AI systems: LLMs, agents, RAG, and model deployment at scale." },
  { title: "Data Systems", sentence: "Data pipelines, governance, and analytics infrastructure for AI-ready operations." },
  { title: "Enterprise Integration", sentence: "Secure integration with existing stacks, compliance, and operational handover." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Architecting Enterprise Intelligence"
        subtitle="We engineer intelligent systems that embed AI into enterprise workflows—automation-first, production-grade, with measurable impact."
        backgroundImage="/images/team.jpg"
        badge="Enterprise AI Automation Company"
      />

      {/* 2. Who We Are – slate background + image */}
      <section className="py-14 sm:py-20 bg-slate-50/80 border-t border-slate-200/80" aria-label="Who we are">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="font-heading text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight leading-snug">
                We don&apos;t build software. We engineer intelligent systems.
              </p>
              <div className="mt-6 space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  AI is embedded into enterprise workflows—where decisions are made and operations run. We apply automation-first thinking: map processes, identify decision points, deploy AI that reduces manual work and scales operations.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Our work is production-grade from day one. Governance, security, and compliance are built in. We focus on measurable operational impact, not pilots.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 bg-white shadow-sm">
              <Image
                src="/images/support.jpg"
                alt="Strategic work and technical execution"
                width={600}
                height={380}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Operating Principles */}
      <section className="py-14 sm:py-20 bg-white border-t border-slate-200" aria-label="Operating principles">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-8">
            Operating principles
          </p>
          <ul className="space-y-8">
            {PRINCIPLES.map((principle, i) => (
              <li key={principle} className="flex gap-4 md:gap-6 items-baseline border-b border-slate-100 pb-8 last:border-b-0 last:pb-0">
                <span className="font-heading text-sm font-semibold text-slate-400 tracking-tight tabular-nums shrink-0 w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-heading text-lg sm:text-xl font-semibold text-slate-900 tracking-tight">
                  {principle}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Leadership – team image */}
      <section className="py-14 sm:py-20 bg-white border-t border-slate-200/80" aria-labelledby="leadership-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-start md:gap-12">
            <div className="shrink-0 mb-8 md:mb-0">
              <div className="relative w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                <Image
                  src="/images/team.jpg"
                  alt="Our team"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 id="leadership-heading" className="font-heading text-2xl font-semibold text-slate-900 tracking-tight mb-8">
                Leadership
              </h2>
              <div className="space-y-12">
                {FOUNDERS.map((person) => (
                  <div key={person.name}>
                    <p className="font-heading text-lg font-semibold text-slate-900 tracking-tight">{person.name}</p>
                    <p className="text-indigo-600 text-sm font-medium mt-1">{person.title}</p>
                    <p className="text-slate-600 mt-4 max-w-2xl leading-relaxed italic">
                      &ldquo;{person.quote}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Capabilities – slate background + icons */}
      <section className="py-14 sm:py-20 bg-slate-50/80 border-t border-slate-200/80" aria-label="Capabilities">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-semibold text-slate-900 tracking-tight mb-10">
            Capabilities
          </h2>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
            {CAPABILITIES.map((cap, i) => (
              <div key={cap.title} className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                  <Image
                    src={`/images/refector/samvaad-motif-${String((i % 3) + 1).padStart(2, "0")}.svg`}
                    alt=""
                    width={28}
                    height={28}
                    className="opacity-80"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-slate-900 tracking-tight">{cap.title}</h3>
                  <p className="text-slate-600 mt-2 leading-relaxed">{cap.sentence}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="relative py-14 sm:py-20 border-t border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Let&apos;s Engineer Your Intelligent Systems
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors duration-200"
            >
              Schedule Strategy Call
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border border-slate-300 text-slate-700 font-medium hover:border-slate-400 transition-colors duration-200"
            >
              Explore AI Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
