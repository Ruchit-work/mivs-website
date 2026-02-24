import Link from "next/link";

export default function TopBanner() {
  return (
    <div
      className="w-full py-2.5 px-4 flex items-center justify-center gap-2 text-white text-sm font-medium relative overflow-hidden"
      style={{
        background: "linear-gradient(90deg, #f59e0b 0%, #eab308 50%, #f59e0b 100%)",
      }}
    >
      {/* Subtle geometric pattern overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 8px,
            rgba(255,255,255,0.08) 8px,
            rgba(255,255,255,0.08) 16px
          )`,
        }}
        aria-hidden
      />
      <span className="relative z-10 bg-white/20 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide">
        New
      </span>
      <Link
        href="/services"
        className="relative z-10 inline-flex items-center gap-1.5 hover:underline"
      >
        Enterprise AI Platform is live. Get started
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
}
