import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  /** Optional background image (e.g. /images/team.jpg). When set, image is full-cover with gradient overlay. */
  backgroundImage?: string;
  /** Optional badge above title (e.g. "Enterprise AI Automation Company") */
  badge?: string;
  /** Optional CTA or extra content below subtitle */
  children?: ReactNode;
}

export default function PageHero({ title, subtitle, backgroundImage, badge, children }: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden pt-12 pb-20 min-h-[50vh] flex flex-col justify-center"
      role="banner"
      aria-label="Page hero"
      style={{
        background: backgroundImage ? `url(${backgroundImage})` : "#fafbff",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay when image is used – keeps image visible but adds same glow effect as home */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {backgroundImage && (
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, rgba(250, 251, 255, 0.82) 0%, rgba(250, 251, 255, 0.75) 50%, rgba(250, 251, 255, 0.85) 100%)",
            }}
          />
        )}
        {/* Orange / warm top glow – soft peach */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[600px] blur-3xl"
          style={{
            background: "radial-gradient(ellipse 80% 70% at 50% 0%, rgba(253, 186, 116, 0.5) 0%, rgba(253, 186, 116, 0.2) 40%, transparent 70%)",
          }}
        />
        {/* Indigo / lavender mid glow */}
        <div
          className="absolute top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] blur-3xl"
          style={{
            background: "radial-gradient(ellipse 70% 65% at 50% 45%, rgba(199, 210, 254, 0.55) 0%, rgba(199, 210, 254, 0.25) 45%, transparent 70%)",
          }}
        />
        {/* White / light center glow */}
        <div
          className="absolute top-24 left-1/2 -translate-x-1/2 w-[800px] h-[500px] blur-2xl"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 35%, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.35) 50%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-6">
          <img
            src="/images/refector/motif.svg"
            alt=""
            width={228}
            height={35}
            className="mb-4 shrink-0 h-[35px] w-auto"
            aria-hidden
          />
          <p
            className={
              badge
                ? "inline-block px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium"
                : "hidden"
            }
          >
            {badge ?? ""}
          </p>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-slate-900 leading-tight tracking-tight">
          {title}
        </h1>
        <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        {children && <div className="mt-10 flex flex-wrap justify-center gap-4">{children}</div>}
      </div>
    </section>
  );
}
