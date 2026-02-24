"use client";

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What does MIVS do?",
    answer: "We design and deliver enterprise AI systems: automation architecture, LLM integrations, intelligent workflows, and decision engines. Our focus is enterprises and high-growth companies that need production-grade AI with clear outcomes."
  },
  {
    question: "Where is MIVS based?",
    answer: "MIVS is based in India and works with clients globally. Engagements are delivered remotely and on-site as needed."
  },
  {
    question: "How do you scope AI and automation engagements?",
    answer: "We start with discovery: your goals, constraints, data, and systems. From there we propose a phased approach with clear scope, success criteria, and deliverables. Scope and pricing are defined before engagement."
  },
  {
    question: "Do you build LLM and RAG systems?",
    answer: "Yes. We design and implement production LLM integrations, RAG pipelines, and AI agents with security, cost control, and governance in mind. We work with OpenAI, Anthropic, open-source models, and your existing stack."
  },
  {
    question: "What industries do you serve?",
    answer: "We work across industries: financial services, healthcare, manufacturing, retail, and others. Our focus is enterprise and high-growth companies that need AI automation and transformation."
  },
  {
    question: "What is your engagement model?",
    answer: "We offer project-based delivery, dedicated teams, and advisory engagements. The model depends on your goals, timeline, and how you want to work with us."
  },
  {
    question: "How do you handle security and compliance?",
    answer: "Security and compliance are part of our design process. We follow governance-by-design, audit trails, and align with your compliance requirements. Details are agreed in the engagement."
  },
  {
    question: "How long do typical engagements run?",
    answer: "It varies. Pilots and proofs-of-concept can be 4–8 weeks. Full implementations and transformation programs can run 3–12 months or longer. We define timelines in the proposal."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20 sm:py-24 bg-[var(--background-section)] animate-section-reveal">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-heading text-[32px] font-semibold text-[var(--foreground)] tracking-tight mb-3">FAQ</h2>
          <p className="text-[var(--foreground-secondary)] text-base leading-[1.6]">
            Answers to common questions about our enterprise AI and automation services.
          </p>
        </div>

        <div className="space-y-2">
          {faqData.map((faq, index) => (
            <div key={index} className="rounded-lg border border-[var(--border)] bg-[var(--background-card)] overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-[var(--background-secondary)]/50 transition-colors"
              >
                <h3 className="font-heading text-base font-semibold text-[var(--foreground)] pr-4">{faq.question}</h3>
                <svg
                  className={`w-5 h-5 text-[var(--foreground-muted)] transition-transform flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4">
                  <p className="text-[var(--foreground-secondary)] text-base leading-[1.6]">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-[var(--foreground-muted)] text-sm mb-3">Questions not covered here?</p>
          <a
            href="/contact"
            className="btn-secondary inline-flex items-center gap-2"
          >
            Contact Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
