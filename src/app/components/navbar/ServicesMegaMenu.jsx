import Link from 'next/link';
import { SERVICES } from '@/app/data/services';

export default function ServicesMegaMenu({ onMouseEnter, onMouseLeave, isExiting }) {
    const leftList = SERVICES.slice(0, Math.ceil(SERVICES.length / 2));
    const rightList = SERVICES.slice(Math.ceil(SERVICES.length / 2));

    return (
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[min(1100px,95vw)] z-[60]" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className={`bg-[var(--background-card)] border border-[var(--border)] rounded-xl shadow-xl overflow-hidden origin-top ${isExiting ? 'animate-fade-out-up' : 'animate-fade-up'}`}>
                <div className="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-3 p-6 bg-[var(--background-secondary)]">
                        <h4 className="font-heading text-lg font-semibold text-[var(--foreground)] mb-4">Capabilities</h4>
                        <ul className="space-y-3 text-[var(--foreground-secondary)]">
                            <li>
                                <Link href="/services#ai" className="flex items-start gap-3 p-2 rounded-lg hover:bg-[var(--background-card)] hover:text-[var(--accent)] transition-colors">
                                    <span className="mt-1 w-2 h-2 rounded-full bg-[var(--accent)] flex-shrink-0" />
                                    <span>Enterprise AI systems</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="flex items-start gap-3 p-2 rounded-lg hover:bg-[var(--background-card)] hover:text-[var(--accent)] transition-colors">
                                    <span className="mt-1 w-2 h-2 rounded-full bg-[var(--accent)] flex-shrink-0" />
                                    <span>LLM integrations & RAG</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="flex items-start gap-3 p-2 rounded-lg hover:bg-[var(--background-card)] hover:text-[var(--accent)] transition-colors">
                                    <span className="mt-1 w-2 h-2 rounded-full bg-[var(--accent)] flex-shrink-0" />
                                    <span>AI automation architecture</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-12 md:col-span-9 p-6 border-t md:border-t-0 md:border-l border-[var(--border)]">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="font-heading text-lg font-semibold text-[var(--foreground)]">Enterprise AI & automation</h4>
                            <Link href="/services" className="text-sm text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors">View all services →</Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[leftList, rightList].map((col, idx) => (
                                <div key={idx} className="space-y-1">
                                    {col.map((s) => (
                                        <Link
                                            key={s.id}
                                            href={`/services/${s.id}`}
                                            className="group flex items-center justify-between p-3 rounded-xl hover:bg-[var(--background-secondary)] border border-transparent hover:border-[var(--border)] transition-colors"
                                        >
                                            <span className="text-[var(--foreground-secondary)] group-hover:text-[var(--accent)]">{s.title}</span>
                                            <svg className="w-4 h-4 text-[var(--foreground-muted)] group-hover:text-[var(--accent)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </Link>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
