import AnimatedHero from "../components/Hero/AnimatedHero";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-20">
      <AnimatedHero 
        title="Pricing"
        subtitle="Simple, transparent plans for every stage."
        backgroundImage="/images/legal-hero.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Intro copy */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">Pricing built for your <span className="gradient-text">business</span></h2>
          <p className="text-xl text-slate-400 leading-relaxed">Every business is unique—your budget, process, and tech are constantly evolving. That&apos;s why we craft customized pricing built to your needs.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Our pricing prioritizes:</h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <span className="w-7 h-7 mr-3 rounded-lg bg-teal-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                  </svg>
                </span>
                <span className="text-slate-300 group-hover:text-white transition-colors">Business needs</span>
              </li>
              <li className="flex items-start group">
                <span className="w-7 h-7 mr-3 rounded-lg bg-teal-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                  </svg>
                </span>
                <span className="text-slate-300 group-hover:text-white transition-colors">Flexibility</span>
              </li>
              <li className="flex items-start group">
                <span className="w-7 h-7 mr-3 rounded-lg bg-teal-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                  </svg>
                </span>
                <span className="text-slate-300 group-hover:text-white transition-colors">Competitive pricing</span>
              </li>
            </ul>
          </div>
          <div className="mt-8 md:mt-9">
            <ul className="space-y-4">
              <li className="flex items-start group">
                <span className="w-7 h-7 mr-3 rounded-lg bg-teal-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                  </svg>
                </span>
                <span className="text-slate-300 group-hover:text-white transition-colors">Commitment to partnership</span>
              </li>
              <li className="flex items-start group">
                <span className="w-7 h-7 mr-3 rounded-lg bg-teal-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                  </svg>
                </span>
                <span className="text-slate-300 group-hover:text-white transition-colors">Budget alignment</span>
              </li>
              <li className="flex items-start group">
                <span className="w-7 h-7 mr-3 rounded-lg bg-teal-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                  </svg>
                </span>
                <span className="text-slate-300 group-hover:text-white transition-colors">Transparency</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Starter */}
          <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-purple-500/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Starter</h3>
            </div>
            <p className="text-slate-400 mb-6">For MVPs and small projects</p>
            <div className="mb-6">
              <span className="text-5xl font-bold gradient-text">$2k+</span>
            </div>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                2–4 week sprint
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                UI/UX + frontend
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Basic backend
              </li>
            </ul>
          </div>

          {/* Growth */}
          <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-purple-500/50 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs font-semibold rounded-full">POPULAR</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Growth</h3>
            </div>
            <p className="text-slate-400 mb-6">For growing products</p>
            <div className="mb-6">
              <span className="text-5xl font-bold gradient-text">$8k+</span>
            </div>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                6–8 week delivery
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Full‑stack + integrations
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Testing & CI/CD
              </li>
            </ul>
          </div>

          {/* Scale */}
          <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-purple-500/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Scale</h3>
            </div>
            <p className="text-slate-400 mb-6">For enterprise initiatives</p>
            <div className="mb-6">
              <span className="text-5xl font-bold gradient-text">Custom</span>
            </div>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Dedicated team
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Architecture & security
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                SLAs & 24/7 support
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            Talk to us
          </a>
        </div>
      </div>
    </div>
  );
}
