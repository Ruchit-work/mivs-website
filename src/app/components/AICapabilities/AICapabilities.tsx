"use client";

const capabilities = [
  {
    title: "AI Automation Architecture",
    description: "Designing end-to-end automation systems replacing manual workflows.",
  },
  {
    title: "Enterprise AI Consulting",
    description: "AI strategy, transformation roadmap, infrastructure advisory.",
  },
  {
    title: "Intelligent Workflow Systems",
    description: "Process automation, decision workflows, and analytics engines for operations at scale.",
  },
  {
    title: "AI Product Engineering",
    description: "Production-grade AI platforms, LLM integrations, internal AI copilots.",
  },
];

export default function AICapabilities() {
  return (
    <section
      className="py-24 sm:py-32 bg-[var(--background-secondary)] animate-section-reveal"
      aria-labelledby="ai-capabilities-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="ai-capabilities-heading"
          className="font-heading text-[32px] sm:text-[40px] font-semibold text-[var(--foreground)] tracking-tight mb-4"
        >
          AI Capabilities
        </h2>
        <p className="text-[var(--foreground-secondary)] text-base max-w-xl mb-16 leading-[1.6]">
          Strategy, architecture, and implementation for enterprise AI systems.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="p-6 lg:p-8 rounded-lg border border-[var(--border)] bg-[var(--background-card)] card-hover"
            >
              <h3 className="font-heading text-lg font-semibold text-[var(--foreground)] mb-3 tracking-tight">
                {cap.title}
              </h3>
              <p className="text-[var(--foreground-secondary)] text-base leading-[1.6]">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
