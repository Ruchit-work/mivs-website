"use client";

const pillars = [
  {
    title: "Secure AI architecture",
    description: "Access control, encryption in transit and at rest, and governance integrated into system design. Built for regulated and sensitive workloads.",
  },
  {
    title: "Scalable cloud-native AI infrastructure",
    description: "AI workloads on cloud-native infrastructure. Auto-scaling, managed services, and resource efficiency for training and inference.",
  },
  {
    title: "Data pipeline engineering",
    description: "Reliable ingestion, transformation, and delivery for model training and serving. Versioning, lineage, and quality checks as part of the pipeline.",
  },
  {
    title: "Modular AI system design",
    description: "Components designed for reuse and replacement. Clear interfaces so models, pipelines, and services can evolve independently.",
  },
  {
    title: "Production-ready deployments",
    description: "Deployment patterns for reliability and operability: health checks, monitoring, rollback, and clear ownership in production.",
  },
];

export default function EnterpriseGradeAI() {
  return (
    <section
      className="py-24 sm:py-32 bg-[var(--background-section)] animate-section-reveal"
      aria-labelledby="enterprise-ai-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="enterprise-ai-heading"
          className="font-heading text-[32px] sm:text-[40px] font-semibold text-[var(--foreground)] tracking-tight mb-4"
        >
          Enterprise-Grade AI Systems
        </h2>
        <p className="text-[var(--foreground-secondary)] text-base max-w-xl mb-16 leading-[1.6]">
          Architecture principles for scalable, secure AI infrastructure.
        </p>
        <div className="space-y-10">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="border-b border-[var(--border)] pb-10 last:border-0 last:pb-0"
            >
              <h3 className="font-heading text-lg font-semibold text-[var(--foreground)] mb-2 tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-[var(--foreground-secondary)] text-base leading-[1.6]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
