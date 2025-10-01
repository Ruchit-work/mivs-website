import AnimatedCounter from '../AnimatedCounter/AnimatedCounter'

export default function ChooseUs() {
  return (
<>
<section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900">Why choose MIVS</h2>
              <p className="text-base text-gray-600 mt-2">Focused on reliable delivery, measurable impact, and long‑term partnership.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: 'users', color: 'text-blue-600', bg: 'bg-blue-50', title: 'Senior team', desc: 'Engineers and designers with product mindset.', statNum: 25, statSuffix: '+', sub: 'Experts' },
                { icon: 'check', color: 'text-purple-600', bg: 'bg-purple-50', title: 'Proven process', desc: 'Iterative delivery with QA at every step.', statNum: 95, statSuffix: '%', sub: 'On‑time' },
                { icon: 'chip', color: 'text-green-600', bg: 'bg-green-50', title: 'Tech excellence', desc: 'Modern stack and best practices baked in.', statNum: 50, statSuffix: '+', sub: 'Technologies' },
                { icon: 'chart', color: 'text-orange-600', bg: 'bg-orange-50', title: 'Client outcomes', desc: 'Solutions that move business metrics.', statNum: 100, statSuffix: '+', sub: 'Projects' },
                { icon: 'clock', color: 'text-red-600', bg: 'bg-red-50', title: 'Fast delivery', desc: 'Predictable sprints and clear milestones.', statNum: 40, statSuffix: '%', sub: 'Faster' },
                { icon: 'lifebuoy', color: 'text-indigo-600', bg: 'bg-indigo-50', title: 'Support', desc: 'Post‑launch support and maintenance.', statNum: 0, statSuffix: '', statText: '24/7', sub: 'Availability' },
              ].map((c) => (
                <div key={c.title} className="rounded-xl border border-gray-200 p-6 hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-start">
                    <div className={`w-10 h-10 ${c.bg} rounded-lg mr-4 flex items-center justify-center`}>
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
                      <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{c.desc}</p>
                    </div>
                  </div>
                  <div className="mt-5 pt-4 border-t border-gray-100 flex items-baseline gap-2">
                    {c.statNum > 0 ? (
                      <AnimatedCounter 
                        end={c.statNum} 
                        suffix={c.statSuffix} 
                        className="text-2xl font-bold text-gray-900"
                        duration={2000}
                      />
                    ) : (
                      <div className="text-2xl font-bold text-gray-900">{c.statText}</div>
                    )}
                    <div className="text-sm text-gray-500">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
</>
  )
}