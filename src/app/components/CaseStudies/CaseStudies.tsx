"use client";

import { CASE_STUDIES } from "@/app/data/case-studies";

interface CaseStudiesProps {
  limit?: number;
  title?: string;
  description?: string;
  compact?: boolean;
}

export default function CaseStudies({ limit, title = "Case Studies", description = "Enterprise AI and automation engagements with measurable outcomes.", compact }: CaseStudiesProps) {
  const studies = limit ? CASE_STUDIES.slice(0, limit) : CASE_STUDIES;

  const listContent = (
    <div className="space-y-12">
      {studies.map((study) => (
        <div
          key={study.id}
          className="rounded-2xl border border-[var(--border)] bg-white p-8 lg:p-10 shadow-sm card-hover"
        >
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[var(--background-secondary)] text-[var(--foreground-secondary)] rounded text-sm font-medium border border-[var(--border)]">
                  {study.industry}
                </span>
                <h3 className="font-heading text-xl font-semibold text-[var(--foreground)]">{study.client}</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-[var(--foreground-muted)] uppercase tracking-wide mb-2">Overview</h4>
                  <p className="text-[#475569] text-base leading-[1.6]">{study.challenge}</p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-[var(--foreground-muted)] uppercase tracking-wide mb-2">AI Implementation</h4>
                  <p className="text-[#475569] text-base leading-[1.6]">{study.solution}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[var(--background-secondary)] text-[var(--foreground-secondary)] rounded text-sm border border-[var(--border)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-semibold text-[var(--foreground-muted)] uppercase tracking-wide mb-4">Impact</h4>
              {study.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl p-4 border border-[var(--border)] bg-[var(--background-secondary)]"
                >
                  <div className="text-2xl font-semibold text-[var(--foreground)] mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-[var(--foreground-secondary)] mb-1">{metric.description}</div>
                  <div className="text-xs text-[var(--foreground-muted)]">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  if (compact) {
    return listContent;
  }

  return (
    <section className="py-24 sm:py-32 bg-[var(--background)] animate-section-reveal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-heading text-[32px] sm:text-[40px] font-semibold text-[var(--foreground)] tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-[var(--foreground-secondary)] text-base max-w-xl leading-[1.6]">
            {description}
          </p>
        </div>
        {listContent}
        {limit && (
          <div className="mt-12">
            <a href="/case-studies" className="btn-secondary inline-flex items-center gap-2">
              View all case studies
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
