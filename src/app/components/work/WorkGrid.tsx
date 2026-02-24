"use client";
import { OUR_WORK } from "../../data/work";

export default function WorkGrid({ limit }: { limit?: number }) {
  const list = typeof limit === "number" ? OUR_WORK.slice(0, limit) : OUR_WORK;
  
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {list.map((p, index) => (
        <article 
          key={p.id} 
          className="group relative"
        >
          <div className="relative h-full border border-[var(--border)] rounded-lg bg-[var(--background-card)] p-6 card-hover">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--background-secondary)] flex items-center justify-center text-sm font-semibold text-[var(--foreground-muted)]">
                {String(index + 1).padStart(2, '0')}
              </div>
              <span className="text-xs font-medium text-[var(--foreground-muted)] uppercase tracking-wider">
                {p.label}
              </span>
            </div>

            <h3 className="font-heading text-lg font-semibold text-[var(--foreground)] mb-3 leading-tight">
              {p.title}
            </h3>

            <p className="text-[var(--foreground-secondary)] text-base leading-[1.6] mb-4">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-md text-xs font-medium border border-[var(--border)] bg-[var(--background-secondary)] text-[var(--foreground-secondary)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
