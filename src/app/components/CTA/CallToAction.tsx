export default function CallToAction() {
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--background-card)] p-12 text-left">
      <h2 className="font-heading text-[32px] sm:text-[40px] font-semibold text-[var(--foreground)] tracking-tight mb-3">
        Discuss Your Initiative
      </h2>
      <p className="text-[var(--foreground-secondary)] text-base mb-8 max-w-xl leading-[1.6]">
        Strategy, architecture, delivery—built for enterprise.
      </p>
      <a href="/contact" className="btn-primary inline-flex items-center gap-2">
        Contact Us
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  );
}
