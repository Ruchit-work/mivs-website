import Link from 'next/link';
import { SERVICES } from '@/app/data/services';

export default function ServicesMegaMenu({ onMouseEnter, onMouseLeave, isExiting }) {
    const leftList = SERVICES.slice(0, Math.ceil(SERVICES.length / 2));
    const rightList = SERVICES.slice(Math.ceil(SERVICES.length / 2));

    return (
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[min(1100px,95vw)] z-[60]" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className={`bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden origin-top ${isExiting ? 'animate-fade-out-up' : 'animate-fade-up'}` }>
                <div className="grid grid-cols-12">
                    {/* Left column - What do you want to do today? */}
                    <div className="col-span-12 md:col-span-3 p-6 bg-slate-50">
                        <h4 className="text-lg font-semibold text-slate-900 mb-4">What do you want to do today?</h4>
                        <ul className="space-y-3 text-slate-700">
                            <li>
                                <Link href="/services" className="flex items-start gap-3 p-2 rounded-lg hover:bg-purple-50 transition-colors">
                                    <span className="mt-1 w-2 h-2 rounded-full bg-purple-500"></span>
                                    <span>Scale AI you can trust</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="flex items-start gap-3 p-2 rounded-lg hover:bg-purple-50 transition-colors">
                                    <span className="mt-1 w-2 h-2 rounded-full bg-purple-500"></span>
                                    <span>Transform applications to unlock value</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="flex items-start gap-3 p-2 rounded-lg hover:bg-purple-50 transition-colors">
                                    <span className="mt-1 w-2 h-2 rounded-full bg-purple-500"></span>
                                    <span>Navigate cyber risk with confidence</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Center column - Services from data */}
                    <div className="col-span-12 md:col-span-9 p-6 border-t md:border-t-0 md:border-l border-slate-200">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="text-lg font-semibold text-slate-900">Services that drive business results</h4>
                            <Link href="/services" className="text-sm text-purple-600 hover:text-purple-700 transition-colors">View all services →</Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[leftList, rightList].map((col, idx) => (
                                <div key={idx} className="space-y-1">
                                    {col.map((s) => (
                                        <Link
                                            key={s.id}
                                            href={`/services/${s.id}`}
                                            className={`group flex items-center justify-between p-3 rounded-xl hover:bg-purple-50 border border-transparent hover:border-purple-100 transition-colors`}
                                        >
                                            <span className={`text-slate-700 hover:text-purple-600`}>{s.title}</span>
                                            <svg className={`w-4 h-4 text-slate-400 group-hover:text-purple-600 transition-colors`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </Link>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Spotlight column removed as requested */}
                </div>
            </div>
        </div>
    );
}
