import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engagement Models | AI Strategy & Development | MIVS",
  description: "AI Strategy Consulting, AI System Development, and Long-Term Automation Partnership. Starting ranges and enterprise quotes.",
  keywords: ["engagement models", "AI consulting", "AI development", "automation partnership", "enterprise"],
  openGraph: {
    title: "Engagement Models | MIVS",
    url: "https://mivs.in/pricing",
  },
  alternates: { canonical: "https://mivs.in/pricing" },
};

const MODELS = [
  {
    title: "AI Strategy Consulting",
    description: "Assessment, roadmap, and prioritization. We evaluate your operations, data readiness, and automation opportunities—then define a measurable AI transformation plan.",
    price: "Starting range",
    detail: "Custom engagement based on scope (e.g. workshops, discovery, roadmap).",
    cta: "Discuss scope",
  },
  {
    title: "AI System Development",
    description: "Design, build, and deploy production-grade AI systems. From workflow automation and LLM integrations to decision engines and analytics platforms.",
    price: "Custom engagement",
    detail: "Project-based or phased delivery. Architecture, build, and handover.",
    cta: "Get a proposal",
  },
  {
    title: "Long-Term Automation Partnership",
    description: "Ongoing partnership for continuous automation, optimization, and scaling. Dedicated capacity and defined SLAs for enterprise programs.",
    price: "Enterprise quote",
    detail: "Retainer or dedicated team. Aligned to your roadmap and priorities.",
    cta: "Contact us",
  },
];

export default function EngagementModelsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] pt-20">
      {/* Hero */}
      <section className="py-28 bg-gradient-to-b from-white to-slate-50/80 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-slate-900 tracking-tight">
            Engagement Models
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We position as a strategic partner. Engagement is scoped to your goals—strategy, build, or long-term automation.
          </p>
        </div>
      </section>

      {/* 3 blocks */}
      <section className="py-28 bg-[var(--background)]" aria-label="Engagement models">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {MODELS.map((m) => (
              <div
                key={m.title}
                className="rounded-3xl border border-slate-200 bg-white p-10 transition-all duration-300 hover:shadow-lg flex flex-col"
              >
                <h2 className="font-heading text-xl font-semibold text-slate-900 tracking-tight mb-4">{m.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{m.description}</p>
                <div className="mb-6">
                  <span className="font-heading text-2xl font-semibold text-indigo-600">{m.price}</span>
                  <p className="text-slate-500 text-sm mt-1">{m.detail}</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-slate-200 text-slate-700 font-medium hover:border-indigo-200 hover:text-indigo-600 transition-all duration-300"
                >
                  {m.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 mb-6">All engagements are custom. Tell us your goals and we’ll propose a fit.</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
