interface HighlightItem {
  title: string;
  cta: string;
  href: string;
}

export default function ServiceHero({
  title,
  subtitle,
  image,
  highlights,
}: {
  title: string;
  subtitle: string;
  image: string;
  highlights: HighlightItem[];
}) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="relative h-[56vh] min-h-[440px] w-full bg-center bg-cover"
        style={{ backgroundImage: `url('${image}')` }}
      >
        {/* dark-to-transparent overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="flex-1 pr-0 lg:pr-10">
            <div className="mb-4 text-[var(--accent)] text-sm font-semibold">Services</div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 leading-tight text-[var(--foreground)]">
              {title}
            </h1>
            <p className="text-[var(--foreground-secondary)] text-lg md:text-xl max-w-2xl leading-[1.6]">{subtitle}</p>
          </div>

          <aside className="hidden md:block w-[40%] max-w-[460px] self-stretch">
            <div className="h-full bg-[var(--background)]/90 backdrop-blur-sm rounded-l-xl border-l border-[var(--border)] overflow-hidden">
              {highlights.map((h, idx) => (
                <a
                  key={idx}
                  href={h.href}
                  className="block p-6 border-b border-[var(--border)] text-left hover:bg-[var(--background-card)]/50 transition-colors"
                >
                  <div className="font-heading text-xl font-semibold text-[var(--foreground)] leading-snug">
                    {h.title}
                  </div>
                  <div className="mt-2 text-sm text-[var(--foreground-secondary)]">{h.cta}</div>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}


