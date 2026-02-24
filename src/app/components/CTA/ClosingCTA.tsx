import Link from "next/link";

export default function ClosingCTA() {
  return (
    <section
      className="py-32 relative overflow-hidden bg-gradient-to-br from-white via-indigo-50/40 to-white border-t border-[var(--border)]"
      aria-label="Call to action"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Copy + CTAs */}
          <div>
            <span className="text-sm font-medium text-indigo-600 tracking-wide uppercase">
              Enterprise AI Transformation
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-tight mt-2">
              Ready to Architect Intelligent Operations?
            </h2>
            <p className="text-lg text-slate-600 mt-6 leading-relaxed max-w-xl">
              Partner with MIVS to design, engineer, and deploy production-grade AI systems that scale with your business.
            </p>
            <div className="mt-10 flex flex-wrap gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg transition-all duration-300 hover:scale-105"
              >
                Schedule AI Strategy Call
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-medium text-slate-700 border border-slate-300 hover:bg-slate-100 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
            <p className="text-sm text-slate-500 mt-6">
              Trusted for scalable AI architecture and automation engineering.
            </p>
          </div>

          {/* Right: Premium abstract visual – soft glow + dashboard-style card */}
          <div className="relative w-full h-[400px] min-h-[320px] flex items-center justify-center">
            {/* Large soft blurred gradient circle */}
            <div
              className="absolute inset-0 max-w-[480px] max-h-[480px] w-full h-full mx-auto rounded-full bg-indigo-500/20 blur-3xl"
              aria-hidden
            />
            <div
              className="absolute inset-0 max-w-[380px] max-h-[380px] w-[90%] mx-auto rounded-full bg-blue-400/15 blur-2xl"
              aria-hidden
            />
            {/* Subtle grid lines */}
            <div
              className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none"
              aria-hidden
            >
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                    <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            {/* Dashboard-style card overlay */}
            <div
              className="relative w-full max-w-sm h-64 rounded-3xl border border-slate-200 bg-white/60 backdrop-blur-xl shadow-xl flex flex-col overflow-hidden"
              aria-hidden
            >
              <div className="flex items-center gap-2 px-5 py-3 border-b border-slate-200/80 bg-white/40">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                </div>
                <span className="text-xs font-medium text-slate-500 ml-2">AI Control</span>
              </div>
              <div className="flex-1 p-5 flex flex-col gap-3">
                <div className="h-2 w-3/4 rounded bg-slate-200/80" />
                <div className="h-2 w-full rounded bg-slate-200/60" />
                <div className="h-2 w-5/6 rounded bg-slate-200/60" />
                <div className="mt-4 flex gap-2">
                  <div className="h-8 flex-1 rounded-lg bg-indigo-100/80" />
                  <div className="h-8 w-20 rounded-lg bg-slate-200/60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
