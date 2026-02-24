"use client";

export default function HowWeHelp() {
  const valueAreas = [
    {
      id: "enterprise-ai",
      title: "Enterprise AI Systems",
      description: "Strategy, architecture, and implementation of AI systems that integrate with your operations and deliver measurable outcomes.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "accent",
      features: ["AI strategy", "Architecture design", "Implementation", "Governance"]
    },
    {
      id: "automation-architecture",
      title: "AI Automation Architecture",
      description: "Design automation architecture that scales: orchestration, workflows, and integration with existing systems.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "accent",
      features: ["Workflow design", "Orchestration", "System integration", "Scalability"]
    },
    {
      id: "llm-integrations",
      title: "LLM Integrations",
      description: "Production-grade LLM integrations: RAG, agents, and APIs with security and governance built in.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: "accent",
      features: ["RAG pipelines", "AI agents", "API design", "Prompt systems"]
    },
    {
      id: "intelligent-workflows",
      title: "Intelligent Workflow Systems",
      description: "Workflows that automate decisions and processes. From design to deployment with clear ownership and audit trails.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      color: "accent",
      features: ["Process automation", "Decision points", "Integration", "Monitoring"]
    },
    {
      id: "decision-engines",
      title: "AI-Powered Decision Engines",
      description: "Decision engines that combine data, rules, and AI for consistent, explainable outcomes at scale.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "accent",
      features: ["Decision logic", "Model deployment", "Audit trails", "Compliance"]
    },
    {
      id: "transformation",
      title: "Enterprise Transformation",
      description: "AI consulting and program delivery. Roadmap, stakeholder alignment, and execution for enterprise-wide AI adoption.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: "accent",
      features: ["AI strategy", "Roadmap", "Change management", "Delivery"]
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[var(--background-section)] relative overflow-hidden animate-section-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-[var(--border)] bg-[var(--background-card)]">
            <svg className="w-4 h-4 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium text-[var(--foreground-secondary)]">How We Help</span>
          </div>

          <h2 className="font-heading text-[32px] sm:text-[40px] font-semibold text-[var(--foreground)] mb-4 max-w-3xl">
            Enterprise AI. Strategic Execution.
          </h2>
          <p className="text-[var(--foreground-secondary)] text-base md:text-lg max-w-2xl leading-[1.6]">
            From architecture to deployment: AI systems, automation, and transformation for enterprises and high-growth companies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueAreas.map((area) => (
            <div
              key={area.id}
              className="group rounded-xl border border-[var(--border)] bg-[var(--background-card)] p-6 card-hover"
            >
              <div className="w-14 h-14 bg-[var(--background-secondary)] rounded-xl flex items-center justify-center text-[var(--accent)] mb-4 border border-[var(--border)]">
                {area.icon}
              </div>
              <h3 className="font-heading text-xl font-semibold text-[var(--foreground)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                {area.title}
              </h3>
              <p className="text-[var(--foreground-secondary)] text-base mb-4 leading-[1.6]">
                {area.description}
              </p>
              <ul className="space-y-2">
                {area.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-[var(--foreground-muted)]">
                    <svg className="w-4 h-4 text-[var(--accent)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
