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
            <div className="mb-4 text-purple-200 text-sm font-semibold">Services</div>
            <h1 className="hero-title text-4xl md:text-6xl font-bold mb-4 leading-tight">
              {title}
            </h1>
            <p className="hero-subtitle text-lg md:text-xl max-w-2xl">{subtitle}</p>
          </div>

          {/* Right overlay highlights (desktop) */}
          <aside className="hidden md:block w-[40%] max-w-[460px] self-stretch">
            <div className="h-full bg-black/50 backdrop-blur-sm rounded-l-2xl border-l border-white/10 overflow-hidden">
              {highlights.map((h, idx) => (
                <a
                  key={idx}
                  href={h.href}
                  className="block p-6 border-b border-white/10 text-left hover:bg-white/10 transition-colors"
                >
                  <div className="text-xl font-semibold text-white leading-snug">
                    {h.title}
                  </div>
                  <div className="mt-2 text-sm text-slate-200">{h.cta}</div>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}


