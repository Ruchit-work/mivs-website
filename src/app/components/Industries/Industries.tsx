import { INDUSTRIES } from "@/app/data/industries";
import Link from "next/link";
import React from "react";

interface IndustriesProps {
  limit?: number;
}

export default function Industries({ limit }: IndustriesProps) {
  const industries = limit ? INDUSTRIES.slice(0, limit) : INDUSTRIES;

  const getIcon = (iconType: string) => {
    const icons: Record<string, React.ReactElement> = {
      medical: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      finance: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      shopping: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      factory: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      education: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      building: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    };
    return icons[iconType] || icons.factory;
  };

  return (
    <section className="py-24 sm:py-32 bg-[var(--background-section)] animate-section-reveal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-heading text-[32px] sm:text-[40px] font-semibold text-[var(--foreground)] tracking-tight mb-4">
            Industries
          </h2>
          <p className="text-[var(--foreground-secondary)] text-base max-w-xl leading-[1.6]">
            Enterprise AI and automation applied across industries. Domain context and compliance needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
              <div
                key={industry.id}
                className="rounded-lg border border-[var(--border)] bg-[var(--background-card)] p-6 card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--background-secondary)] flex items-center justify-center text-[var(--foreground-muted)] mb-4">
                  {getIcon(industry.icon)}
                </div>

                <h3 className="font-heading text-lg font-semibold text-[var(--foreground)] mb-2">
                  {industry.title}
                </h3>
                <p className="text-[var(--foreground-secondary)] mb-4 text-base leading-[1.6]">
                  {industry.description}
                </p>

                <div className="space-y-2 mb-4">
                  <h4 className="text-xs font-semibold text-[var(--foreground-muted)] uppercase tracking-wide">Key Solutions</h4>
                  <ul className="space-y-1">
                    {industry.solutions.slice(0, 3).map((solution) => (
                      <li key={solution} className="flex items-center gap-2 text-sm text-[var(--foreground-muted)]">
                        <span className="w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/industries/${industry.id}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  <span>Explore Solutions</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            ))}
        </div>

        {/* View All CTA */}
        {limit && (
          <div className="text-center mt-12">
            <Link
              href="/industries"
              className="btn-secondary inline-flex items-center gap-2"
            >
              View All Industries
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

