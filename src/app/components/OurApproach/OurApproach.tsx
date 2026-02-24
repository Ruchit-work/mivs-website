"use client";

export default function OurApproach() {
  const principles = [
    {
      id: "outcome-focused",
      title: "Outcome-Focused",
      description: "We align every engagement with your strategic objectives. Solutions are designed for measurable impact and clear ownership.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "from-purple-600 to-purple-500"
    },
    {
      id: "phased-delivery",
      title: "Phased Delivery",
      description: "We deliver in phases: pilot, scale, production. Each phase has clear scope and success criteria so you see value early and reduce risk.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "from-cyan-600 to-cyan-500"
    },
    {
      id: "governance-built-in",
      title: "Governance Built In",
      description: "Security, auditability, and compliance are designed in from the start. No afterthoughts.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-green-600 to-green-500"
    },
    {
      id: "architecture-first",
      title: "Architecture-First",
      description: "We design for scale and integration before implementation. Your existing systems and future roadmap inform every decision.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      color: "from-blue-600 to-blue-500"
    },
    {
      id: "transparent",
      title: "Transparent Engagement",
      description: "Clear communication, defined scope, and no surprises. You stay informed on progress, decisions, and trade-offs.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      color: "from-orange-600 to-orange-500"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[var(--background-section)] animate-section-reveal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-heading text-[32px] sm:text-[40px] font-semibold text-[var(--foreground)] tracking-tight mb-4">
            How We Deliver
          </h2>
          <p className="text-[var(--foreground-secondary)] text-base max-w-xl leading-[1.6]">
            Five principles that guide every engagement: outcome focus, phased delivery, governance, architecture, and transparency.
          </p>
        </div>

        {/* Principles */}
        <div className="space-y-4">
          {principles.map((principle, index) => (
            <div
              key={principle.id}
              className="rounded-lg border border-[var(--border)] bg-[var(--background-card)] p-6 lg:p-8 card-hover"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--background-secondary)] border border-[var(--border)] flex items-center justify-center text-lg font-semibold text-[var(--foreground-muted)]">
                  {index + 1}
                </div>
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--background-secondary)] flex items-center justify-center text-[var(--foreground-muted)]">
                  {principle.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-semibold text-[var(--foreground)] mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-[var(--foreground-secondary)] text-base leading-[1.6]">
                    {principle.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-16 border-t border-[var(--border)]">
          <h3 className="font-heading text-lg font-semibold text-[var(--foreground)] mb-8">Engagement Process</h3>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Discovery", desc: "Goals, constraints, scope" },
              { step: "2", title: "Strategy", desc: "Roadmap & architecture" },
              { step: "3", title: "Design", desc: "Solution design" },
              { step: "4", title: "Build", desc: "Implementation" },
              { step: "5", title: "Deploy", desc: "Production & handover" }
            ].map((phase, idx) => (
              <div key={phase.step} className="relative">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--background-card)] border border-[var(--border)] flex items-center justify-center text-[var(--foreground)] font-semibold mx-auto mb-3">
                    {phase.step}
                  </div>
                  <h4 className="font-medium text-[var(--foreground)] mb-1 text-sm">{phase.title}</h4>
                  <p className="text-xs text-[var(--foreground-muted)]">{phase.desc}</p>
                </div>
                {idx < 4 && (
                  <div className="hidden md:block absolute top-6 left-[calc(50%+1.5rem)] w-[calc(100%-3rem)] h-px bg-[var(--border)]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

