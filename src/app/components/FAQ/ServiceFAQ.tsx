"use client";

import { useState } from "react";

type QA = { q: string; a: string };

export default function ServiceFAQ({ items }: { items: QA[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="rounded-2xl bg-white p-0 md:p-6 border border-slate-300">
      <div className="px-6 pt-6 pb-3">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900">You have questions. We have answers.</h3>
      </div>
      <div className="divide-y divide-slate-200">
        {items.map((it, idx) => (
          <button
            key={idx}
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full text-left px-6 py-5 hover:bg-slate-50 transition-colors focus:outline-none"
            aria-expanded={openIndex === idx}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="text-lg md:text-xl text-slate-900 font-medium leading-relaxed">{it.q}</span>
              <svg
                className={`w-5 h-5 text-slate-500 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
              </svg>
            </div>
            {openIndex === idx && (
              <div className="mt-3 text-slate-700 leading-relaxed">
                {it.a}
              </div>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}


