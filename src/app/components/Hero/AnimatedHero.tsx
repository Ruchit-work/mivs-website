interface AnimatedHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

export default function AnimatedHero({ title, subtitle, backgroundImage }: AnimatedHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="relative h-[56vh] min-h-[400px] w-full bg-center bg-cover"
        style={{
          backgroundImage: backgroundImage
            ? `url('${backgroundImage}')`
            : "linear-gradient(180deg, var(--background) 0%, var(--background-secondary) 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[var(--background)]/85" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl animate-section-reveal">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] leading-[1.2] mb-4">
                {title}
              </h1>
              <p className="text-[var(--foreground-secondary)] text-lg md:text-xl leading-[1.6]">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
