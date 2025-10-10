import { INDUSTRIES } from "@/app/data/industries";
import Link from "next/link";
import React from "react";

interface IndustriesProps {
  limit?: number;
}

export default function Industries({ limit }: IndustriesProps) {
  const industries = limit ? INDUSTRIES.slice(0, limit) : INDUSTRIES;

  const getIcon = (iconType: string) => {
    const icons: Record<string, React.ReactElement> = {
      medical: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      finance: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      shopping: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      factory: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      education: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      building: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    };
    return icons[iconType] || icons.factory;
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; gradient: string }> = {
      blue: { bg: "bg-blue-500/10", text: "text-blue-400", gradient: "from-blue-600 to-blue-500" },
      green: { bg: "bg-green-500/10", text: "text-green-400", gradient: "from-green-600 to-green-500" },
      purple: { bg: "bg-purple-500/10", text: "text-purple-400", gradient: "from-purple-600 to-purple-500" },
      orange: { bg: "bg-orange-500/10", text: "text-orange-400", gradient: "from-orange-600 to-orange-500" },
      cyan: { bg: "bg-cyan-500/10", text: "text-cyan-400", gradient: "from-cyan-600 to-cyan-500" },
      indigo: { bg: "bg-indigo-500/10", text: "text-indigo-400", gradient: "from-indigo-600 to-indigo-500" }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#13131a] to-[#0a0a0f] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass rounded-full border border-purple-500/20">
            <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium text-slate-300">Industry Expertise</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Industry-Specific <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Deep domain expertise across industries, delivering solutions that understand your unique challenges
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => {
            const colors = getColorClasses(industry.color);
            return (
              <div
                key={industry.id}
                className="group glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
              >
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {getIcon(industry.icon)}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {industry.title}
                </h3>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                  {industry.description}
                </p>

                {/* Solutions Preview */}
                <div className="space-y-2 mb-4">
                  <h4 className="text-xs font-semibold text-purple-300 uppercase tracking-wide">Key Solutions</h4>
                  <ul className="space-y-1">
                    {industry.solutions.slice(0, 3).map((solution) => (
                      <li key={solution} className="flex items-center gap-2 text-sm text-slate-500">
                        <svg className="w-3 h-3 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Link */}
                <Link
                  href={`/industries/${industry.id}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors group-hover:gap-3 duration-300"
                >
                  <span>Explore Solutions</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>

        {/* View All CTA */}
        {limit && (
          <div className="text-center mt-12">
            <Link
              href="/industries"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <span>View All Industries</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

