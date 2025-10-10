"use client";

import { CASE_STUDIES } from "@/app/data/case-studies";

interface CaseStudiesProps {
  limit?: number;
}

export default function CaseStudies({ limit }: CaseStudiesProps) {
  const studies = limit ? CASE_STUDIES.slice(0, limit) : CASE_STUDIES;

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0f] to-[#13131a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass rounded-full border border-purple-500/20">
            <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="text-sm font-medium text-slate-300">Success Stories</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Real Results. <span className="gradient-text">Real Impact.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Delivering measurable outcomes that transform businesses and drive growth
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {studies.map((study) => (
            <div
              key={study.id}
              className="glass-card rounded-2xl p-8 lg:p-10 hover:scale-[1.01] transition-all duration-300"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left: Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{study.client}</h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wide mb-2">Challenge</h4>
                      <p className="text-slate-300 leading-relaxed">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-2">Solution</h4>
                      <p className="text-slate-300 leading-relaxed">{study.solution}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded-lg text-sm border border-slate-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Metrics */}
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wide mb-4">Results</h4>
                  {study.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-xl p-4 border border-purple-500/20"
                    >
                      <div className="text-3xl font-bold gradient-text mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-slate-400 mb-1">{metric.description}</div>
                      <div className="text-xs text-slate-500">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        {limit && (
          <div className="text-center mt-12">
            <a
              href="/case-studies"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <span>View All Success Stories</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

