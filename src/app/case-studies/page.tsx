import { CASE_STUDIES } from "../data/case-studies";
import type { Metadata } from "next";
import PageHero from "@/app/components/Hero/PageHero";
import OrbitText from "@/app/components/OrbitText/OrbitText";

export const metadata: Metadata = {
  title: "Case Studies | Enterprise AI Deployments | MIVS",
  description: "Enterprise AI deployments with measurable impact. Problem, architecture, implementation, and results.",
  keywords: ["case studies", "enterprise AI", "AI deployment", "automation", "measurable impact"],
  openGraph: {
    title: "Case Studies | Enterprise AI Deployments | MIVS",
    url: "https://mivs.in/case-studies",
  },
  alternates: { canonical: "https://mivs.in/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <PageHero
        title="Enterprise AI Deployments with Measurable Impact"
        subtitle="Problem, architecture, approach, and outcomes—executive-level view of our AI transformation work."
        backgroundImage="/images/portfolio.jpg"
      />

      {/* Case study blocks */}
      <section className="py-28 bg-[var(--background)]" aria-label="Case studies">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {CASE_STUDIES.map((study, idx) => (
              <article
                key={study.id}
                className="relative rounded-3xl border border-slate-200 bg-white p-10 lg:p-12 transition-all duration-300 hover:shadow-lg overflow-hidden"
              >
                {idx === 0 && (
                  <div className="absolute top-0 right-0 flex justify-end items-start pt-6 pr-6 pointer-events-none opacity-15">
                    <div className="scale-75">
                      <OrbitText letterColor="rgba(15, 23, 42, 0.2)" />
                    </div>
                  </div>
                )}
                <div className="relative z-10 flex flex-wrap items-center gap-3 mb-8">
                  <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium">
                    {study.industry}
                  </span>
                  <h2 className="font-heading text-2xl font-semibold text-slate-900 tracking-tight">{study.client}</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 mb-10">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Problem</h3>
                      <p className="text-slate-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">AI System Architecture</h3>
                      <p className="text-slate-600 leading-relaxed">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Implementation Approach</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Strategic assessment → architecture design → phased build → production deployment with monitoring and handover.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Measurable Results</h3>
                    <div className="space-y-6">
                      {study.metrics.map((m) => (
                        <div key={m.label} className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
                          <div className="font-heading text-4xl font-semibold text-indigo-600 tracking-tight">{m.value}</div>
                          <p className="text-slate-700 font-medium mt-1">{m.description}</p>
                          <p className="text-slate-500 text-sm mt-0.5">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Tech stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((t) => (
                      <span key={t} className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-sm font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-12 bg-slate-50/50 border-t border-slate-200 flex items-center">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white border border-slate-200/80 shadow-lg shadow-slate-200/50 px-6 py-5 sm:px-8 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-slate-600 m-0">Discuss your AI transformation initiative.</p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-300 shrink-0"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
