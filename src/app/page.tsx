"use client";

import Link from "next/link";
import Image from "next/image";
import SEOOptimizer from "./components/SEOOptimizer/SEOOptimizer";
import AdvancedSchema from "./components/AdvancedSchema/AdvancedSchema";
import HeroSection from "./components/HeroSection/HeroSection";
import Leadership from "./components/Leadership/Leadership";
import ClosingCTA from "./components/CTA/ClosingCTA";
import { CASE_STUDIES } from "./data/case-studies";
import { PORTFOLIO_PROJECTS } from "./data/portfolio";

const AI_SOLUTIONS = [
  { title: "AI Workflow Automation", description: "Design and deploy intelligent workflows that replace manual steps with AI-driven decisions. Scale operations without scaling headcount.", iconRefector: "/images/refector/samvaad-motif-01.svg" },
  { title: "Custom AI Agents", description: "Build agents that reason over your data and tools. From document Q&A to task automation, tailored to your workflows and security requirements.", iconRefector: "/images/refector/samvaad-motif-02.svg" },
  { title: "Chatbot & Conversational AI", description: "Enterprise-grade conversational interfaces powered by LLMs. Support, sales, and internal tools with guardrails and your brand voice.", iconRefector: "/images/refector/samvaad-motif-03.svg" },
  { title: "Business Process Optimization", description: "Map, analyze, and automate core processes. Reduce cycle times and errors while keeping governance and compliance at the center.", iconRefector: null },
  { title: "AI Strategy & Consulting", description: "From roadmap to rollout. We help you prioritize use cases, choose stack, and build internal capability so AI delivers lasting value.", iconRefector: null },
];

const METRICS = [
  { value: "40%", label: "Average cost reduction in automated processes" },
  { value: "3x", label: "Faster delivery with AI-augmented workflows" },
  { value: "50+", label: "Enterprise engagements delivered" },
];

const INDUSTRIES = ["Financial Services", "Healthcare", "Retail & E-commerce", "Manufacturing", "Technology", "Government"];

export default function Home() {
  const previewStudies = CASE_STUDIES.slice(0, 2);

  return (
    <>
      <SEOOptimizer />
      <AdvancedSchema
        type="localBusiness"
        data={{
          name: "MIVS",
          description: "Enterprise AI automation and AI consulting. AI automation architecture, LLM integrations, intelligent workflow systems, AI-powered decision engines.",
          services: ["AI Workflow Automation", "Custom AI Agents", "Chatbot & Conversational AI", "Business Process Optimization", "AI Strategy & Consulting"],
        }}
      />
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <HeroSection />

        {/* AI Solutions We Deliver – 5 cards */}
        <section
          className="py-24 sm:py-32 bg-[var(--background-secondary)]"
          aria-label="AI solutions"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-[28px] sm:text-[34px] font-semibold text-[var(--foreground)] tracking-tight mb-4 text-center">
              AI Solutions We Deliver
            </h2>
            <p className="text-[#475569] text-base max-w-xl mx-auto mb-16 text-center leading-[1.65]">
              From workflow automation to strategy—we build and integrate AI that fits your business.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {AI_SOLUTIONS.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[var(--border)] card-hover"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[var(--accent)] mb-5 bg-[#EEF2FF] overflow-hidden">
                    {item.iconRefector ? (
                      <Image src={item.iconRefector} alt="" width={32} height={32} className="w-8 h-8 object-contain opacity-90" />
                    ) : (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    )}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[var(--foreground)] mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#475569] text-sm sm:text-base leading-[1.6]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform / How we build – home-section-2.webp */}
        <section className="py-24 sm:py-32 bg-[var(--background-secondary)]" aria-label="How we build">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="font-heading text-[28px] sm:text-[34px] font-semibold text-[var(--foreground)] tracking-tight mb-4">
                  Intelligent systems, built for scale
                </h2>
                <p className="text-[#475569] text-base max-w-xl mb-4 leading-[1.65]">
                  We design and deploy AI infrastructure that integrates with your stack. From data pipelines to model orchestration—production-ready from day one.
                </p>
                <p className="text-[#475569] text-base max-w-xl mb-6 leading-[1.65]">
                  Our architecture is security-first and built to run in your environment—cloud, hybrid, or on-premises. We focus on measurable outcomes and long-term operational impact.
                </p>
                <ul className="mb-8 space-y-2 text-[#475569] text-sm sm:text-base leading-relaxed">
                  <li className="flex gap-2.5">
                    <span className="text-indigo-500 shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500" aria-hidden />
                    Integration with your existing tools and data sources
                  </li>
                  <li className="flex gap-2.5">
                    <span className="text-indigo-500 shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500" aria-hidden />
                    Governance and compliance built in from the start
                  </li>
                  <li className="flex gap-2.5">
                    <span className="text-indigo-500 shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500" aria-hidden />
                    Clear roadmaps and handover so your team can own it
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 rounded-xl bg-white border border-[var(--border)] text-sm font-medium text-[#475569] shadow-sm">Sovereign by design</span>
                  <span className="px-4 py-2 rounded-xl bg-white border border-[var(--border)] text-sm font-medium text-[#475569] shadow-sm">State-of-the-art</span>
                  <span className="px-4 py-2 rounded-xl bg-white border border-[var(--border)] text-sm font-medium text-[#475569] shadow-sm">Human at the core</span>
                </div>
              </div>
              <div className="relative rounded-2xl border border-[var(--border)] overflow-hidden bg-white shadow-sm">
                <Image src="/images/refector/home-section-2.webp" alt="Enterprise AI platform infrastructure" width={800} height={500} className="w-full h-auto object-cover" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none m-10">
                  <Image src="/images/refector/sarvam-logo-white.svg" alt="" width={140} height={140} className="object-contain opacity-95 drop-shadow-md" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Built to run – deployment options (three cards) */}
        <section className="py-24 sm:py-32 bg-[var(--background)]" aria-label="Deployment options">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-center mb-2">
              <span className="block text-[28px] sm:text-[36px] font-bold text-[var(--foreground)] tracking-tight">
                Built to run
              </span>
              <span className="block text-[20px] sm:text-[24px] font-semibold text-[var(--foreground-muted)] tracking-tight mt-1">
                anywhere your business runs
              </span>
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 mt-16">
              {[
                {
                  title: "Cloud",
                  description: "Fully managed, automatic scaling, fastest time-to-value",
                  image: "/images/refector/built-for-01.png",
                  gradient: "linear-gradient(135deg, #BFDBFE 0%, #C4B5FD 50%, #FBCFE8 100%)",
                },
                {
                  title: "Private Cloud (VPC)",
                  description: "Your security perimeter, our management",
                  image: "/images/refector/built-for-02.webp",
                  gradient: "linear-gradient(135deg, #FCA5A5 0%, #FDA4AF 50%, #FECDD3 100%)",
                },
                {
                  title: "On-Premises",
                  description: "Full control, air-gapped for regulated industries",
                  image: "/images/refector/built-for-03.webp",
                  gradient: "linear-gradient(135deg, #86EFAC 0%, #A7F3D0 50%, #FBCFE8 100%)",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl p-6 sm:p-8 shadow-md card-hover flex flex-row items-start gap-4 sm:gap-5 min-h-[140px]"
                  style={{ background: card.gradient }}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 flex items-center justify-center">
                    <Image
                      src={card.image}
                      alt=""
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0 pt-0.5">
                    <h3 className="font-heading text-lg font-semibold text-[var(--foreground)] tracking-tight mb-1.5">
                      {card.title}
                    </h3>
                    <p className="text-[var(--foreground-secondary)] text-sm sm:text-base leading-[1.55]">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social proof – metrics, industries, case study previews */}
        <section className="py-24 sm:py-32 bg-[var(--background)]" aria-label="Social proof">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-[28px] sm:text-[34px] font-semibold text-[var(--foreground)] tracking-tight mb-4 text-center">
              Results That Speak
            </h2>
            <p className="text-[#475569] text-base max-w-xl mx-auto mb-16 text-center leading-[1.65]">
              Trusted by enterprises to deliver measurable impact.
            </p>

            {/* Metrics */}
            <div className="grid sm:grid-cols-3 gap-8 mb-16">
              {METRICS.map((m) => (
                <div key={m.label} className="text-center">
                  <div className="font-heading text-3xl sm:text-4xl font-bold text-[var(--accent)] tracking-tight mb-2">
                    {m.value}
                  </div>
                  <p className="text-[#475569] text-sm sm:text-base leading-[1.5]">{m.label}</p>
                </div>
              ))}
            </div>

            {/* Industries served */}
            <div className="mb-16">
              <h3 className="font-heading text-sm font-semibold text-[var(--foreground-muted)] uppercase tracking-wider text-center mb-6">
                Industries We Serve
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {INDUSTRIES.map((ind) => (
                  <span
                    key={ind}
                    className="px-4 py-2 rounded-xl bg-[var(--background-secondary)] text-[#475569] text-sm font-medium border border-[var(--border)]"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            {/* Case study preview cards */}
            <h3 className="font-heading text-sm font-semibold text-[var(--foreground-muted)] uppercase tracking-wider text-center mb-8">
              Selected Case Studies
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {previewStudies.map((study) => (
                <Link
                  key={study.id}
                  href="/case-studies"
                  className="block bg-white rounded-2xl p-6 shadow-sm border border-[var(--border)] card-hover"
                >
                  <span className="text-xs font-medium text-[var(--accent)] uppercase tracking-wider">{study.industry}</span>
                  <h4 className="font-heading text-lg font-semibold text-[var(--foreground)] mt-2 mb-2">{study.client}</h4>
                  <p className="text-[#475569] text-sm leading-[1.6] line-clamp-2">{study.challenge}</p>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/case-studies" className="btn-secondary inline-flex items-center gap-2 rounded-2xl">
                View all case studies
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Selected Work – enterprise case studies */}
        <section className="py-32 bg-[var(--background)]" aria-label="Case studies">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-sm uppercase tracking-wide text-indigo-600 font-medium">
              Case Studies
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mt-2">
              Enterprise AI Systems with Measurable Impact
            </h2>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl leading-relaxed">
              We design and deploy production-grade AI systems that drive operational efficiency, automation, and measurable growth.
            </p>

            {/* Featured case – large, gradient, hero metric */}
            <div className="mt-16 rounded-3xl bg-gradient-to-br from-indigo-50/80 via-white to-indigo-50/40 p-12 sm:p-16 md:p-20">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Healthcare</span>
              <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-slate-900 mt-2 mb-6">
                Healthcare Institution
              </h3>
              <div className="font-heading text-6xl font-semibold text-indigo-600 tracking-tight">
                40%
              </div>
              <p className="text-slate-600 text-lg mt-2 uppercase tracking-wide">
                Operational Cost Reduction
              </p>
              <p className="text-slate-600 mt-8 max-w-xl leading-relaxed">
                Architected an AI-powered hospital management system to unify clinical operations, automate workflows, and deliver real-time operational intelligence.
              </p>
            </div>

            {/* Two cases side-by-side – minimal, large impact numbers */}
            <div className="grid md:grid-cols-2 gap-16 mt-24">
              <div className="border-b border-slate-200 pb-12 md:pb-16">
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Retail & E-commerce</span>
                <h3 className="font-heading text-xl font-semibold text-slate-900 mt-2 mb-8">
                  Retail Chain
                </h3>
                <div className="font-heading text-5xl md:text-6xl font-semibold text-indigo-600 tracking-tight">
                  85%
                </div>
                <p className="text-slate-500 text-sm uppercase tracking-wide mt-2">
                  Faster decision-to-fulfillment
                </p>
                <p className="text-slate-600 mt-6 leading-relaxed">
                  Predictive commerce platform with real-time demand forecasting and intelligent inventory automation.
                </p>
              </div>
              <div className="border-b border-slate-200 pb-12 md:pb-16">
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Healthcare</span>
                <h3 className="font-heading text-xl font-semibold text-slate-900 mt-2 mb-8">
                  Healthcare Provider Network
                </h3>
                <div className="font-heading text-5xl md:text-6xl font-semibold text-indigo-600 tracking-tight">
                  88%
                </div>
                <p className="text-slate-500 text-sm uppercase tracking-wide mt-2">
                  Reduction in onboarding processing time
                </p>
                <p className="text-slate-600 mt-6 leading-relaxed">
                  HIPAA-compliant AI care coordination with automated scheduling and predictive capacity planning.
                </p>
              </div>
            </div>

            <Link
              href="/case-studies"
              className="text-indigo-600 font-medium hover:underline mt-16 inline-block transition-colors"
            >
              Explore Full Case Studies
            </Link>
          </div>
        </section>

        {/* Our Work – portfolio projects */}
        <section className="py-24 sm:py-32 bg-[var(--background-secondary)]" aria-label="Our work">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-sm uppercase tracking-wide text-indigo-600 font-medium">
              Our Work
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mt-2">
              Projects We’ve Delivered
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl leading-relaxed">
              From healthcare and analytics to AI and travel—work that blends UX with measurable outcomes.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {PORTFOLIO_PROJECTS.map((p) => (
                <Link
                  key={p.id}
                  href="/portfolio"
                  className="block bg-white rounded-2xl p-6 shadow-sm border border-[var(--border)] card-hover overflow-hidden"
                >
                  <span className="text-xs font-medium text-indigo-600 uppercase tracking-wider">
                    {p.category}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-slate-900 mt-2 mb-2 tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-[1.6] line-clamp-3">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/portfolio"
                className="btn-secondary inline-flex items-center gap-2 rounded-2xl"
              >
                View AI Solutions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* AI Execution Framework – Our Approach */}
        <section
          className="py-32 bg-[var(--background)]"
          aria-label="AI Execution Framework"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-indigo-600 text-sm font-medium uppercase tracking-wider mb-3">
              AI Execution Framework
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-center text-slate-900 mb-6">
              From Strategy to Scalable Intelligence
            </h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto leading-relaxed mb-16">
              Our automation-first methodology ensures AI systems are architected, engineered, and deployed for long-term enterprise performance — not experimental pilots.
            </p>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  step: "01",
                  title: "Strategic AI Assessment",
                  description: "We evaluate operational workflows, data maturity, and automation opportunities. Our team defines measurable AI transformation roadmaps aligned with business objectives.",
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                },
                {
                  step: "02",
                  title: "Architecture & Engineering",
                  description: "We design scalable AI architectures, automation pipelines, and secure infrastructure frameworks. Systems are built for reliability, governance, and production-grade deployment.",
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  ),
                },
                {
                  step: "03",
                  title: "Deployment & Optimization",
                  description: "AI systems are deployed with enterprise-grade monitoring, handover frameworks, and continuous optimization loops to ensure long-term scalability and performance.",
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                },
              ].map((card) => (
                <div
                  key={card.step}
                  className="relative bg-white/70 backdrop-blur-xl border border-slate-200 rounded-3xl p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-indigo-300"
                >
                  <span className="absolute top-6 right-6 text-7xl font-semibold text-slate-100 select-none" aria-hidden>
                    {card.step}
                  </span>
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6">
                      {card.icon}
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-slate-900 tracking-tight mb-3">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Leadership />

        <ClosingCTA />
      </div>
    </>
  );
}
