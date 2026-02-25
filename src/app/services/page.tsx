"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import PageHero from "../components/Hero/PageHero";
import OrbitText from "../components/OrbitText/OrbitText";

const AI_CAPABILITIES = [
  {
    title: "AI Automation Architecture",
    description: "Designing end-to-end automation systems replacing manual workflows.",
    iconRefector: "/images/refector/samvaad-motif-01.svg",
  },
  {
    title: "Enterprise AI Consulting",
    description: "AI strategy, transformation roadmap, infrastructure advisory.",
    iconRefector: "/images/refector/samvaad-motif-02.svg",
  },
  {
    title: "Intelligent Workflow Systems",
    description:
      "Process automation, decision workflows, and analytics engines for operations at scale.",
    iconRefector: "/images/refector/samvaad-motif-03.svg",
  },
  {
    title: "AI Product Engineering",
    description: "Production-grade AI platforms, LLM integrations, internal AI copilots.",
    iconRefector: null,
  },
];

const ENGAGEMENT_MODELS = [
  {
    title: "Dedicated Teams",
    desc: "Teams aligned with your roadmap and delivery cadence.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Project-Based",
    desc: "Fixed-scope projects with clear deliverables and timelines.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
  },
  {
    title: "Staff Augmentation",
    desc: "Expert resources to complement your existing team.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
        />
      </svg>
    ),
  },
];

export default function Services() {
  const capabilitiesSectionRef = useRef<HTMLElement>(null);
  const [capabilitiesRevealed, setCapabilitiesRevealed] = useState(false);
  const engagementSectionRef = useRef<HTMLElement>(null);
  const [engagementRevealed, setEngagementRevealed] = useState(false);

  useEffect(() => {
    const el = capabilitiesSectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCapabilitiesRevealed(true);
      },
      { threshold: 0.2, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = engagementSectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setEngagementRevealed(true);
      },
      { threshold: 0.2, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <PageHero
        title="Enterprise AI & Automation"
        subtitle="AI systems, automation architecture, and intelligent workflows—built for enterprises and high-growth companies."
        backgroundImage="/images/service.jpg"
        badge="Enterprise AI Automation Company"
      >
        <Link
          href="/contact"
          className="px-8 py-4 rounded-2xl bg-indigo-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 inline-flex items-center justify-center"
        >
          Book AI Consultation
        </Link>
        <Link
          href="/portfolio"
          className="px-8 py-4 rounded-2xl bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-all duration-300 inline-flex items-center justify-center"
        >
          Explore Solutions
        </Link>
      </PageHero>

      {/* AI Capabilities – stack → spread on scroll */}
      <section
        ref={capabilitiesSectionRef}
        id="services-capabilities"
        className={`py-14 sm:py-20 bg-[var(--background-secondary)] ${capabilitiesRevealed ? "services-cards-revealed" : ""}`}
        aria-label="AI capabilities"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-[28px] sm:text-[34px] font-semibold text-[var(--foreground)] tracking-tight mb-3 text-center">
            AI Capabilities
          </h2>
          <p className="text-[#475569] text-base max-w-xl mx-auto mb-10 text-center leading-[1.65]">
            Strategy, architecture, and implementation for enterprise AI systems.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 services-cards-grid">
            {AI_CAPABILITIES.map((item, index) => (
              <div
                key={item.title}
                className="services-card-spread bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[var(--border)] card-hover"
                data-card-index={index}
                data-column={index % 3}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[var(--accent)] mb-5 bg-[#EEF2FF] overflow-hidden">
                  {item.iconRefector ? (
                    <Image
                      src={item.iconRefector}
                      alt=""
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain opacity-90"
                    />
                  ) : (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
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

      {/* Engagement Models – stack → spread on scroll */}
      <section
        ref={engagementSectionRef}
        id="services-engagement"
        className={`py-14 sm:py-20 bg-[var(--background)] ${engagementRevealed ? "services-cards-revealed" : ""}`}
        aria-label="Engagement models"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-sm p-6 lg:p-10 shadow-sm">
            <h3 className="font-heading text-[28px] sm:text-[34px] font-semibold text-slate-900 tracking-tight mb-6 text-center">
              Engagement Models
            </h3>
            <div className="grid md:grid-cols-3 gap-6 services-cards-grid">
              {ENGAGEMENT_MODELS.map((model, index) => (
                <div
                  key={model.title}
                  className="services-card-spread text-center"
                  data-card-index={index}
                  data-column={index % 3}
                >
                  <div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mx-auto mb-4">
                    {model.icon}
                  </div>
                  <h4 className="font-heading text-lg font-semibold text-slate-900 mb-2 tracking-tight">
                    {model.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-[1.6]">{model.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA – same style as Home ClosingCTA */}
      <section
        className="py-20 sm:py-24 relative overflow-hidden bg-gradient-to-br from-white via-indigo-50/40 to-white border-t border-[var(--border)]"
        aria-label="Call to action"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div>
              <span className="text-sm font-medium text-indigo-600 tracking-wide uppercase">
                Get in Touch
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-tight mt-2">
                Discuss Your Initiative
              </h2>
              <p className="text-lg text-slate-600 mt-4 leading-relaxed max-w-xl">
                Strategy, architecture, delivery—built for enterprise.
              </p>
              <div className="mt-6 flex flex-wrap gap-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  Contact Us
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-medium text-slate-700 border border-slate-300 hover:bg-slate-100 transition-all duration-300"
                >
                  View Case Studies
                </Link>
              </div>
              <p className="text-sm text-slate-500 mt-4">
                Trusted for scalable AI architecture and automation engineering.
              </p>
            </div>

            {/* Right: decorative visual – same as ClosingCTA */}
            <div className="relative w-full h-[320px] min-h-[260px] flex items-center justify-center overflow-hidden">
              <div className="absolute top-0 right-0 flex justify-end items-start pt-4 pr-4 pointer-events-none opacity-20">
                <div className="scale-75">
                  <OrbitText letterColor="rgba(15, 23, 42, 0.25)" />
                </div>
              </div>
              <div
                className="absolute inset-0 max-w-[480px] max-h-[480px] w-full h-full mx-auto rounded-full bg-indigo-500/20 blur-3xl"
                aria-hidden
              />
              <div
                className="absolute inset-0 max-w-[380px] max-h-[380px] w-[90%] mx-auto rounded-full bg-blue-400/15 blur-2xl"
                aria-hidden
              />
              <div
                className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none"
                aria-hidden
              >
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="services-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#services-grid)" />
                </svg>
              </div>
              <div
                className="relative w-full max-w-sm h-64 rounded-3xl border border-slate-200 bg-white/60 backdrop-blur-xl shadow-xl flex flex-col overflow-hidden"
                aria-hidden
              >
                <div className="flex items-center gap-2 px-5 py-3 border-b border-slate-200/80 bg-white/40">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  </div>
                  <span className="text-xs font-medium text-slate-500 ml-2">AI Control</span>
                </div>
                <div className="flex-1 p-5 flex flex-col gap-3">
                  <div className="h-2 w-3/4 rounded bg-slate-200/80" />
                  <div className="h-2 w-full rounded bg-slate-200/60" />
                  <div className="h-2 w-5/6 rounded bg-slate-200/60" />
                  <div className="mt-4 flex gap-2">
                    <div className="h-8 flex-1 rounded-lg bg-indigo-100/80" />
                    <div className="h-8 w-20 rounded-lg bg-slate-200/60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
