"use client";

import { useState } from "react";

export default function Challenges() {
  const [activeChallenge, setActiveChallenge] = useState(0);

  const challenges = [
    {
      id: "legacy-operations",
      title: "Manual, Legacy Operations",
      problem: "Critical processes depend on manual work and legacy systems, limiting scale and consistency.",
      solution: "AI automation and intelligent workflow systems to replace or augment manual steps with auditable, scalable processes.",
      benefits: ["Reduced manual effort", "Consistency", "Audit trails", "Scale"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      id: "data-silos",
      title: "Data Silos, No Single Source",
      problem: "Data scattered across systems. Decisions lack a unified view and real-time context.",
      solution: "Intelligent workflow and decision engines that connect data sources and surface the right context for AI and humans.",
      benefits: ["Unified context", "Faster decisions", "Fewer errors", "Compliance"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      )
    },
    {
      id: "ai-adoption",
      title: "Unclear AI Adoption Path",
      problem: "Interest in AI but unclear where to start, how to govern, and how to scale pilots.",
      solution: "Enterprise AI strategy and roadmap: use-case prioritization, architecture, governance, and phased delivery.",
      benefits: ["Clear roadmap", "Governance", "Pilot-to-production", "ROI focus"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: "llm-integration",
      title: "LLM Integration Complexity",
      problem: "LLMs could improve products and operations but integration, safety, and cost are unclear.",
      solution: "Production LLM integrations: RAG, agents, guardrails, and cost control so you ship with confidence.",
      benefits: ["Secure integration", "Controlled cost", "Safety", "Measurable quality"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: "decision-consistency",
      title: "Inconsistent Decisions at Scale",
      problem: "Decisions that should be consistent and explainable vary by person, team, or system.",
      solution: "AI-powered decision engines: rules, data, and models combined for consistent, explainable, auditable outcomes.",
      benefits: ["Consistency", "Explainability", "Audit trails", "Compliance"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: "transformation-pace",
      title: "Transformation Stalled",
      problem: "Transformation initiatives slow or stuck: alignment, scope, or delivery bottlenecks.",
      solution: "Focused program delivery: clear scope, stakeholder alignment, and execution so transformation delivers.",
      benefits: ["Clear scope", "Stakeholder alignment", "Delivery focus", "Outcomes"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[var(--background)] animate-section-reveal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-heading text-[32px] sm:text-[40px] font-semibold text-[var(--foreground)] tracking-tight mb-4">
            Enterprise Challenges
          </h2>
          <p className="text-[var(--foreground-secondary)] text-base max-w-xl leading-[1.6]">
            From manual operations to AI adoption and transformation. We focus on outcomes that matter.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {challenges.map((challenge, index) => (
              <button
                key={challenge.id}
                onClick={() => setActiveChallenge(index)}
                className={`w-full text-left rounded-lg border p-5 transition-colors ${
                  activeChallenge === index 
                    ? 'border-[var(--accent)] bg-[var(--background-card)]' 
                    : 'border-[var(--border)] bg-[var(--background-card)] hover:border-[var(--foreground-muted)]'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                    activeChallenge === index 
                      ? 'bg-[var(--accent)] text-white' 
                      : 'bg-[var(--background-secondary)] text-[var(--foreground-muted)]'
                  }`}>
                    {challenge.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold mb-1 transition-colors ${
                      activeChallenge === index ? 'text-[var(--foreground)]' : 'text-[var(--foreground-secondary)]'
                    }`}>
                      {challenge.title}
                    </h3>
                    <p className="text-sm text-[var(--foreground-muted)]">{challenge.problem}</p>
                  </div>
                  <svg 
                    className={`w-5 h-5 transition-all ${
                      activeChallenge === index ? 'text-[var(--foreground-muted)] rotate-90' : 'text-[var(--foreground-muted)]'
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          <div className="rounded-lg border border-[var(--border)] bg-[var(--background-card)] p-8 lg:sticky lg:top-24">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[var(--background-secondary)] rounded-lg flex items-center justify-center text-[var(--foreground-muted)]">
                  {challenges[activeChallenge].icon}
                </div>
                <h3 className="font-heading text-2xl font-semibold text-[var(--foreground)]">
                  {challenges[activeChallenge].title}
                </h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-[var(--foreground-muted)] uppercase tracking-wide mb-2">The Problem</h4>
                  <p className="text-[var(--foreground-secondary)] text-base leading-[1.6]">
                    {challenges[activeChallenge].problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-[var(--foreground-muted)] uppercase tracking-wide mb-2">Our Approach</h4>
                  <p className="text-[var(--foreground-secondary)] text-base leading-[1.6]">
                    {challenges[activeChallenge].solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-[var(--foreground-muted)] uppercase tracking-wide mb-3">Outcomes</h4>
                  <ul className="space-y-2">
                    {challenges[activeChallenge].benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--foreground-muted)] flex-shrink-0" />
                          <span className="text-[var(--foreground-secondary)] text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--border)]">
              <a
                href="/contact"
                className="btn-primary w-full inline-flex items-center justify-center gap-2"
              >
                <span>Discuss Your Challenge</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
