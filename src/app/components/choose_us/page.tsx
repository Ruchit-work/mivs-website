import AnimatedCounter from '../AnimatedCounter/AnimatedCounter'

export default function ChooseUs() {
  return (
<>
<section className="py-24 sm:py-32 bg-[var(--background-secondary)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="font-heading text-[32px] sm:text-[40px] font-semibold text-[var(--foreground)] tracking-tight mb-3">Why Choose MIVS</h2>
              <p className="text-[var(--foreground-secondary)] text-base max-w-xl leading-[1.6]">
                Outcome-focused delivery, clear governance, and strategic partnership.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: 'users', title: 'Senior practitioners', desc: 'AI and automation specialists with enterprise experience.', statNum: 25, statSuffix: '+', sub: 'Experts' },
                { icon: 'check', title: 'Proven process', desc: 'Phased delivery with clear scope and success criteria.', statNum: 95, statSuffix: '%', sub: 'On‑time' },
                { icon: 'chip', title: 'Architecture-first', desc: 'Design for scale, integration, and governance.', statNum: 50, statSuffix: '+', sub: 'Engagements' },
                { icon: 'chart', title: 'Measurable outcomes', desc: 'Solutions tied to business metrics and ROI.', statNum: 100, statSuffix: '+', sub: 'Projects' },
                { icon: 'clock', title: 'Pilot to production', desc: 'Defined milestones and faster time-to-value.', statNum: 40, statSuffix: '%', sub: 'Faster' },
                { icon: 'lifebuoy', title: 'Governance', desc: 'Security, auditability, and compliance by design.', statNum: 0, statSuffix: '', statText: '—', sub: 'Built in' },
              ].map((c) => (
                <div key={c.title} className="rounded-lg border border-[var(--border)] bg-[var(--background-card)] p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-[var(--background-secondary)] flex items-center justify-center flex-shrink-0 text-[var(--foreground-muted)]">
                      {c.icon === 'users' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M13 7a4 4 0 11-8 0 4 4 0 018 0m8 13v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
                      )}
                      {c.icon === 'check' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      )}
                      {c.icon === 'chip' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path strokeWidth={2} d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" /></svg>
                      )}
                      {c.icon === 'chart' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18M7 13v5m5-9v9m5-13v13" /></svg>
                      )}
                      {c.icon === 'clock' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v5l3 3M12 22a10 10 0 100-20 10 10 0 000 20z" /></svg>
                      )}
                      {c.icon === 'lifebuoy' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v4m0 12v4m10-10h-4M6 12H2m14.95-7.05l-2.83 2.83M7.88 16.12l-2.83 2.83m12.72 0l-2.83-2.83M7.88 7.88 5.05 5.05" /></svg>
                      )}
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-[var(--foreground)]">{c.title}</h3>
                      <p className="text-[var(--foreground-secondary)] text-base mt-1 leading-[1.6]">{c.desc}</p>
                    </div>
                  </div>
                  <div className="mt-5 pt-4 border-t border-[var(--border)] flex items-baseline gap-2">
                    {c.statNum > 0 ? (
                      <AnimatedCounter 
                        end={c.statNum} 
                        suffix={c.statSuffix} 
                        className="text-xl font-semibold text-[var(--foreground)]"
                        duration={2000}
                      />
                    ) : (
                      <span className="text-xl font-semibold text-[var(--foreground)]">{c.statText}</span>
                    )}
                    <span className="text-sm text-[var(--foreground-muted)]">{c.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
</>
  )
}