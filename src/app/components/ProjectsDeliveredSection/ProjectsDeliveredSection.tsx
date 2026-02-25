"use client";

import Link from "next/link";
import { PORTFOLIO_PROJECTS } from "@/app/data/portfolio";

/**
 * Standalone "Projects We've Delivered" section.
 * Kept in its own file so server and client always use the same markup (no hydration mismatch).
 */
export default function ProjectsDeliveredSection() {
  return (
    <section className="py-16 sm:py-20 bg-[var(--background-secondary)]" aria-label="Our work">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-sm uppercase tracking-wide text-indigo-600 font-medium">
          Our Work
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mt-2">
          Projects We&apos;ve Delivered
        </h2>
        <p className="text-slate-600 mt-4 max-w-2xl leading-relaxed">
          From healthcare and analytics to AI and travel—work that blends UX with measurable outcomes.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
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

        <div className="mt-10 text-center">
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
  );
}
