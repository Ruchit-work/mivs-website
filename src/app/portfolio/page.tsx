import { AI_SOLUTIONS, CATEGORIES } from "../data/ai-solutions";
import PageHero from "@/app/components/Hero/PageHero";

export default function AISolutionsPage() {
  const byCategory = CATEGORIES.map((cat) => ({
    ...cat,
    solutions: AI_SOLUTIONS.filter((s) => s.category === cat.id),
  }));

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <PageHero
        title="AI Solutions"
        subtitle="Categorized AI systems we build and deploy: workflow automation, analytics platforms, commerce engines, and enterprise decision systems."
        backgroundImage="/images/service.jpg"
        badge="Intelligent Systems"
      />

      {/* Categories + productized cards */}
      <section className="py-28 bg-[var(--background-secondary)]" aria-label="AI solutions by category">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {byCategory.filter((cat) => cat.id !== "Commerce" && cat.id !== "Decision").map((cat) => (
              <div key={cat.id}>
                <h2 className="font-heading text-2xl font-semibold text-slate-900 tracking-tight mb-8">{cat.label}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {cat.solutions.map((s) => (
                    <div
                      key={s.id}
                      className="group relative rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/50 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-indigo-200/80 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden />
                      <div className="relative">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <h3 className="font-heading text-lg font-semibold text-slate-900 tracking-tight">{s.name}</h3>
                        <span className="shrink-0 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                          {s.deployment}
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">{s.description}</p>
                      <p className="text-xs font-medium text-indigo-600 uppercase tracking-wider">Architecture</p>
                      <p className="text-slate-600 text-sm mt-1">{s.architectureHighlight}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {/* AI-driven Commerce Engines and Enterprise Decision Systems side by side */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {byCategory.filter((cat) => cat.id === "Commerce" || cat.id === "Decision").map((cat) => (
                <div key={cat.id}>
                  <h2 className="font-heading text-2xl font-semibold text-slate-900 tracking-tight mb-8">{cat.label}</h2>
                  <div className="space-y-6">
                    {cat.solutions.map((s) => (
                      <div
                        key={s.id}
                        className="group relative rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/50 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-indigo-200/80 overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden />
                        <div className="relative">
                          <div className="flex items-start justify-between gap-4 mb-4">
                            <h3 className="font-heading text-lg font-semibold text-slate-900 tracking-tight">{s.name}</h3>
                            <span className="shrink-0 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                              {s.deployment}
                            </span>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed mb-4">{s.description}</p>
                          <p className="text-xs font-medium text-indigo-600 uppercase tracking-wider">Architecture</p>
                          <p className="text-slate-600 text-sm mt-1">{s.architectureHighlight}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-12 bg-slate-50/50 border-t border-slate-200 flex items-center">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white border border-slate-200/80 shadow-lg shadow-slate-200/50 px-6 py-5 sm:px-8 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-slate-600 m-0">Interested in a custom AI system for your operations?</p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-300 shrink-0"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
