import AnimatedCounter from '../AnimatedCounter/AnimatedCounter'

export default function ChooseUs() {
  return (
<>
<section className="py-24 bg-gradient-to-b from-[#13131a] to-[#0a0a0f] relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              {/* Section Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass rounded-full border border-purple-500/20">
                <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span className="text-sm font-medium text-slate-300">Why Choose Us</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Why Choose <span className="gradient-text">MIVS</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Focused on reliable delivery, measurable impact, and long‑term partnership
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: 'users', color: 'text-blue-400', bg: 'bg-blue-500/10', title: 'Senior team', desc: 'Engineers and designers with product mindset.', statNum: 25, statSuffix: '+', sub: 'Experts' },
                { icon: 'check', color: 'text-purple-400', bg: 'bg-purple-500/10', title: 'Proven process', desc: 'Iterative delivery with QA at every step.', statNum: 95, statSuffix: '%', sub: 'On‑time' },
                { icon: 'chip', color: 'text-green-400', bg: 'bg-green-500/10', title: 'Tech excellence', desc: 'Modern stack and best practices baked in.', statNum: 50, statSuffix: '+', sub: 'Technologies' },
                { icon: 'chart', color: 'text-orange-400', bg: 'bg-orange-500/10', title: 'Client outcomes', desc: 'Solutions that move business metrics.', statNum: 100, statSuffix: '+', sub: 'Projects' },
                { icon: 'clock', color: 'text-cyan-400', bg: 'bg-cyan-500/10', title: 'Fast delivery', desc: 'Predictable sprints and clear milestones.', statNum: 40, statSuffix: '%', sub: 'Faster' },
                { icon: 'lifebuoy', color: 'text-indigo-400', bg: 'bg-indigo-500/10', title: 'Support', desc: 'Post‑launch support and maintenance.', statNum: 0, statSuffix: '', statText: '24/7', sub: 'Availability' },
              ].map((c) => (
                <div key={c.title} className="glass-card rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="flex items-start">
                    <div className={`w-12 h-12 ${c.bg} rounded-xl mr-4 flex items-center justify-center`}>
                      {/* Icons */}
                      {c.icon === 'users' && (
                        <svg className={`w-6 h-6 ${c.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M13 7a4 4 0 11-8 0 4 4 0 018 0m8 13v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
                      )}
                      {c.icon === 'check' && (
                        <svg className={`w-6 h-6 ${c.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      )}
                      {c.icon === 'chip' && (
                        <svg className={`w-6 h-6 ${c.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path strokeWidth={2} d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" /></svg>
                      )}
                      {c.icon === 'chart' && (
                        <svg className={`w-6 h-6 ${c.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18M7 13v5m5-9v9m5-13v13" /></svg>
                      )}
                      {c.icon === 'clock' && (
                        <svg className={`w-6 h-6 ${c.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v5l3 3M12 22a10 10 0 100-20 10 10 0 000 20z" /></svg>
                      )}
                      {c.icon === 'lifebuoy' && (
                        <svg className={`w-6 h-6 ${c.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v4m0 12v4m10-10h-4M6 12H2m14.95-7.05l-2.83 2.83M7.88 16.12l-2.83 2.83m12.72 0l-2.83-2.83M7.88 7.88 5.05 5.05" /></svg>
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                      <p className="text-slate-400 text-sm mt-1">{c.desc}</p>
                    </div>
                  </div>
                  <div className="mt-5 pt-4 border-t border-purple-500/20 flex items-baseline gap-2">
                    {c.statNum > 0 ? (
                      <AnimatedCounter 
                        end={c.statNum} 
                        suffix={c.statSuffix} 
                        className="text-2xl font-bold gradient-text"
                        duration={2000}
                      />
                    ) : (
                      <div className="text-2xl font-bold gradient-text">{c.statText}</div>
                    )}
                    <div className="text-sm text-slate-500">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
</>
  )
}