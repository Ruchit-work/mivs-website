"use client";

import { useState } from "react";

export default function Challenges() {
  const [activeChallenge, setActiveChallenge] = useState(0);

  const challenges = [
    {
      id: "legacy-systems",
      title: "Legacy System Modernization",
      problem: "Outdated technology holding back innovation and increasing operational costs",
      solution: "Transform legacy systems into modern, cloud-native architectures with minimal disruption",
      benefits: ["Reduced maintenance costs", "Improved scalability", "Enhanced security", "Better user experience"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      id: "scalability",
      title: "Scalability Challenges",
      problem: "Systems struggle to handle growth, leading to downtime and poor performance",
      solution: "Build scalable infrastructure that grows with your business using cloud-native solutions",
      benefits: ["Handle 10x traffic spikes", "Auto-scaling capabilities", "99.9% uptime", "Cost optimization"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation",
      problem: "Struggling to compete with digital-first competitors and adapt to market changes",
      solution: "Comprehensive digital strategy and implementation to transform business operations",
      benefits: ["Competitive advantage", "Operational efficiency", "Customer satisfaction", "Revenue growth"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: "security",
      title: "Security & Compliance",
      problem: "Increasing cyber threats and complex regulatory requirements causing concerns",
      solution: "Implement robust security measures and ensure compliance with industry standards",
      benefits: ["Data protection", "Regulatory compliance", "Risk mitigation", "Customer trust"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      id: "time-to-market",
      title: "Slow Time-to-Market",
      problem: "Product development cycles are too long, missing market opportunities",
      solution: "Agile development practices and modern DevOps to accelerate delivery",
      benefits: ["40% faster delivery", "Continuous deployment", "Quick iterations", "Competitive edge"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: "data-insights",
      title: "Lack of Data Insights",
      problem: "Data exists but isn't providing actionable insights for decision-making",
      solution: "AI-powered analytics and visualization tools to turn data into strategic assets",
      benefits: ["Real-time insights", "Predictive analytics", "Better decisions", "Data-driven culture"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0f] to-[#13131a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass rounded-full border border-purple-500/20">
            <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium text-slate-300">Challenges We Solve</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Overcoming Your <span className="gradient-text">Business Challenges</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From legacy systems to digital transformation, we solve the toughest technology challenges
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Challenge Tabs */}
          <div className="space-y-4">
            {challenges.map((challenge, index) => (
              <button
                key={challenge.id}
                onClick={() => setActiveChallenge(index)}
                className={`w-full text-left glass-card rounded-xl p-5 transition-all duration-300 hover:scale-[1.02] ${
                  activeChallenge === index 
                    ? 'ring-2 ring-purple-500 bg-purple-500/10' 
                    : 'hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    activeChallenge === index 
                      ? 'bg-gradient-to-br from-purple-600 to-cyan-600 text-white' 
                      : 'bg-slate-800/50 text-slate-400'
                  }`}>
                    {challenge.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold mb-1 transition-colors ${
                      activeChallenge === index ? 'text-white' : 'text-slate-300'
                    }`}>
                      {challenge.title}
                    </h3>
                    <p className="text-sm text-slate-500">{challenge.problem}</p>
                  </div>
                  <svg 
                    className={`w-5 h-5 transition-all ${
                      activeChallenge === index ? 'text-purple-400 rotate-90' : 'text-slate-600'
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Solution Details */}
          <div className="glass-card rounded-2xl p-8 lg:sticky lg:top-24">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  {challenges[activeChallenge].icon}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {challenges[activeChallenge].title}
                </h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wide mb-2">The Problem</h4>
                  <p className="text-slate-300 leading-relaxed">
                    {challenges[activeChallenge].problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wide mb-2">Our Solution</h4>
                  <p className="text-slate-300 leading-relaxed">
                    {challenges[activeChallenge].solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {challenges[activeChallenge].benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-700/50">
              <a
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <span>Discuss Your Challenge</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

