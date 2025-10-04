"use client";

import { useState, useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What services does MIVS Software Development offer?",
    answer: "MIVS offers comprehensive software development services including web development, mobile app development, cloud solutions, AI/ML development, DevOps services, and custom software solutions. We specialize in React, Node.js, Python, React Native, Flutter, AWS, Google Cloud, and Azure technologies."
  },
  {
    question: "Where is MIVS Software Development located?",
    answer: "MIVS Software Development is located in Bardoli, Gujarat, India. We serve clients across India and globally, providing remote software development services with our expert team of developers, designers, and engineers."
  },
  {
    question: "How much does custom software development cost?",
    answer: "The cost of custom software development varies based on project complexity, features, timeline, and technology stack. We offer competitive pricing and provide detailed quotes after understanding your specific requirements. Contact us for a free consultation and project estimate."
  },
  {
    question: "What technologies does MIVS use for web development?",
    answer: "We use modern web development technologies including React, Next.js, Node.js, Python, TypeScript, and various databases. Our team stays updated with the latest frameworks and best practices to deliver high-performance, scalable web applications."
  },
  {
    question: "Do you provide mobile app development services?",
    answer: "Yes, we offer both native and cross-platform mobile app development services. We use React Native for cross-platform apps and native development for iOS and Android. Our mobile apps are optimized for performance and user experience."
  },
  {
    question: "What is your development process?",
    answer: "Our development process includes requirement analysis, project planning, design, development, testing, deployment, and ongoing support. We follow agile methodologies with regular client communication and iterative delivery to ensure project success."
  },
  {
    question: "Do you offer cloud migration services?",
    answer: "Yes, we provide comprehensive cloud migration services including AWS, Google Cloud, and Azure. Our team helps businesses migrate their applications and infrastructure to the cloud with minimal downtime and maximum security."
  },
  {
    question: "What is your project delivery timeline?",
    answer: "Project timelines vary based on complexity and requirements. Simple web applications can be delivered in 4-8 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed project timelines during the consultation phase."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleFAQ = (index: number) => {
    if (!isClient) return;
    setOpenIndex(openIndex === index ? null : index);
  };

  // Prevent hydration mismatch by not rendering interactive elements until client-side
  if (!isClient) {
    return (
      <section className="py-16 bg-gradient-to-b from-[#0a0a0f] to-[#13131a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass rounded-full border border-purple-500/20">
              <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-slate-300">Frequently Asked Questions</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Common <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Find answers to the most frequently asked questions about our software development services.
            </p>
          </div>

          {/* Static FAQ Items */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-slate-400 mb-4">
              Still have questions? We&apos;re here to help!
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300"
            >
              Contact Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-[#0a0a0f] to-[#13131a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass rounded-full border border-purple-500/20">
            <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-slate-300">Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Common <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Find answers to the most frequently asked questions about our software development services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="glass-card rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-purple-400 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">
            Still have questions? We&apos;re here to help!
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300"
          >
            Contact Us
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}