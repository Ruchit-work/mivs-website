import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/app/components/Hero/PageHero";
import OrbitText from "@/app/components/OrbitText/OrbitText";

export const metadata: Metadata = {
  title: "Industries | AI Architectures for High-Complexity Industries | MIVS",
  description: "AI systems embedded into industry-specific workflows: healthcare, retail, manufacturing, logistics, finance, enterprise SaaS. Regulatory to operational scale.",
  keywords: ["industry AI", "healthcare AI", "retail automation", "manufacturing AI", "logistics", "fintech", "enterprise SaaS"],
  openGraph: {
    title: "Industries | AI Architectures for High-Complexity Industries | MIVS",
    url: "https://mivs.in/industries",
  },
  alternates: { canonical: "https://mivs.in/industries" },
};

const INDUSTRIES = [
  {
    id: "healthcare",
    title: "Healthcare",
    positioning: "AI systems that operate inside regulatory and clinical workflows—not beside them.",
    challenges: [
      "Fragmented scheduling, capacity, and care coordination across facilities",
      "Manual data entry and compliance overhead without sacrificing patient experience",
    ],
    system: "HIPAA-aligned platforms that unify scheduling, capacity planning, and care pathways—with demand forecasting, resource allocation, and exception routing built in.",
    metrics: [
      { value: "40%", label: "Reduction in administrative overhead" },
      { value: "Real-time", label: "Capacity and demand visibility" },
    ],
  },
  {
    id: "retail",
    title: "Retail & Commerce",
    positioning: "Decision systems that scale with peak demand—inventory, pricing, and fulfillment in one intelligence layer.",
    challenges: [
      "Manual reorder and pricing decisions that don't scale with volume",
      "Stockouts and excess inventory from reactive planning",
    ],
    system: "Commerce intelligence that predicts demand, automates allocation and replenishment, and routes orders optimally—faster decision-to-fulfillment without proportional headcount.",
    metrics: [
      { value: "85%", label: "Faster decision-to-fulfillment" },
      { value: "10x", label: "Peak capacity without proportional headcount" },
    ],
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    positioning: "Supply chain and production systems that see ahead and act—predictive, not reactive.",
    challenges: [
      "Supply chain visibility and replenishment driven by spreadsheets and lag",
      "Unplanned downtime and quality issues that ripple through production",
    ],
    system: "AI that ties demand signals, inventory, and production into one decision layer—predictive maintenance, quality automation, and exception-driven workflows for cost and throughput.",
    metrics: [
      { value: "35%", label: "Operational cost reduction (pilot engagements)" },
      { value: "60%", label: "Faster order fulfillment via smart routing" },
    ],
  },
  {
    id: "logistics",
    title: "Logistics",
    positioning: "Route, load, and exception logic that adapts in real time—visibility and automation in one system.",
    challenges: [
      "Static routes and load plans that ignore real-time traffic and demand",
      "Manual exception handling and replanning under pressure",
    ],
    system: "Logistics systems that optimize routes and loads continuously, handle exceptions with automated replanning, and surface visibility for shippers and operators.",
    metrics: [
      { value: "60%", label: "Faster fulfillment in deployed systems" },
      { value: "99%", label: "Inventory accuracy with predictive logic" },
    ],
  },
  {
    id: "finance",
    title: "Finance",
    positioning: "Decisioning and document intelligence inside a compliance-first architecture—speed without compromise on risk or regulation.",
    challenges: [
      "Manual underwriting, KYC, and document processing that don't scale",
      "Decision latency that hurts conversion and operational efficiency",
    ],
    system: "Decision engines and document AI inside your compliance perimeter—auditability and governance from day one, with sub-second decisioning at scale.",
    metrics: [
      { value: "Sub-second", label: "Decision-to-confirmation at scale" },
      { value: "50K+", label: "Active users in 6 months (sample engagement)" },
    ],
  },
  {
    id: "saas",
    title: "Enterprise SaaS",
    positioning: "AI embedded into product and operations—workflow automation and insights without replacing the core platform.",
    challenges: [
      "Generic workflows that don't reflect industry or customer segment",
      "Data scattered across tools with no single intelligence layer",
    ],
    system: "In-product AI and workflow automation that integrate with your existing stack—analytics and insights where your users work, enterprise-ready and segment-aware.",
    metrics: [
      { value: "Custom", label: "Per product and segment" },
      { value: "Embedded", label: "Intelligence in existing workflows" },
    ],
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="AI Architectures for High-Complexity Industries"
        subtitle="We design AI systems embedded into industry-specific workflows—from regulatory environments to operational scale."
        backgroundImage="/images/bg-1.jpg"
      />

      {/* Jump to industry – scrolls with page */}
      <section className="py-3 border-b border-slate-200" aria-label="Jump to industry">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider mr-2 shrink-0">Jump to:</span>
            {INDUSTRIES.map((ind) => (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                {ind.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Industry sections – compact, alternating background */}
      <section className="pb-6" aria-label="Industries">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {INDUSTRIES.map((ind, i) => (
              <div
                key={ind.id}
                id={ind.id}
                className={`relative py-14 md:py-16 border-b border-slate-200 last:border-b-0 scroll-mt-28 overflow-hidden ${i % 2 === 1 ? "bg-slate-50/60" : ""}`}
              >
                {i === 0 && (
                  <div className="absolute top-0 right-0 flex justify-end items-start pt-8 pr-8 pointer-events-none opacity-15">
                    <div className="scale-75">
                      <OrbitText letterColor="rgba(15, 23, 42, 0.18)" />
                    </div>
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start relative z-10">
                  <div>
                    <h2 className="font-heading text-2xl font-semibold text-slate-900 tracking-tight">
                      {ind.title}
                    </h2>
                    <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                      {ind.positioning}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {ind.challenges.map((c) => (
                        <li key={c} className="flex gap-2.5 text-slate-600 text-sm leading-relaxed">
                          <span className="text-indigo-500 shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500" aria-hidden />
                          {c}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 text-slate-600 text-sm leading-relaxed">
                      {ind.system}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-6 sm:gap-8 md:block md:space-y-5">
                    {ind.metrics.map((m) => (
                      <div key={m.label} className="group">
                        <div className="font-heading text-xl sm:text-2xl font-semibold text-indigo-600 tracking-tight">
                          {m.value}
                        </div>
                        <p className="mt-1 text-sm text-slate-600 leading-snug max-w-[200px]">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="py-10 sm:py-12 border-t border-slate-200 bg-slate-50/50 flex items-center">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white border border-slate-200/80 shadow-lg shadow-slate-200/50 px-6 py-5 sm:px-8 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 m-0">
              Let&apos;s Build Industry-Intelligent Systems
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-300 shrink-0"
            >
              Schedule Industry Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
