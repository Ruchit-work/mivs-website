"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { SERVICES } from "../../data/services";
import type { ServiceItem } from "../../data/services";

const colorClasses: Record<string, { bg: string; text: string; glow: string }> = {
  blue: { bg: "bg-blue-500/10", text: "text-blue-400", glow: "shadow-blue-500/20" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-400", glow: "shadow-purple-500/20" },
  green: { bg: "bg-green-500/10", text: "text-green-400", glow: "shadow-green-500/20" },
  orange: { bg: "bg-orange-500/10", text: "text-orange-400", glow: "shadow-orange-500/20" },
  red: { bg: "bg-red-500/10", text: "text-red-400", glow: "shadow-red-500/20" },
  indigo: { bg: "bg-indigo-500/10", text: "text-indigo-400", glow: "shadow-indigo-500/20" },
  teal: { bg: "bg-teal-500/10", text: "text-teal-400", glow: "shadow-teal-500/20" },
  yellow: { bg: "bg-yellow-500/10", text: "text-yellow-400", glow: "shadow-yellow-500/20" },
  cyan: { bg: "bg-cyan-500/10", text: "text-cyan-400", glow: "shadow-cyan-500/20" },
  gray: { bg: "bg-gray-500/10", text: "text-gray-400", glow: "shadow-gray-500/20" },
};

function ServiceIcon({ icon, className }: { icon: string; className: string }) {
  switch (icon) {
    case "web":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h18M3 12h18M3 19h18" />
        </svg>
      );
    case "mobile":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01" />
        </svg>
      );
    case "cloud":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h10a4 4 0 100-8 6 6 0 10-12 2z" />
        </svg>
      );
    case "data":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5v6c0 1.657 4.03 3 9 3s9-1.343 9-3V5M3 11v6c0 1.657 4.03 3 9 3s9-1.343 9-3v-6" />
        </svg>
      );
    case "seo":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
        </svg>
      );
    case "ai":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth={2} d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "design":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8l6 6M6 14l6-6M4 20h16" />
        </svg>
      );
    case "testing":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "devops":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      );
    case "custom":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    default:
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

export default function ServicesGrid({ limit }: { limit?: number }) {
  const list = typeof limit === "number" ? SERVICES.slice(0, limit) : SERVICES;
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  const Modal = () => {
    if (!selectedService) return null;

    return (
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-md z-[99999] flex items-center justify-center p-4"
        style={{ animation: 'fadeIn 0.3s ease-out' }}
        onClick={() => setSelectedService(null)}
      >
        <div 
          className="glass-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-purple-500/30 relative z-[99999]"
          onClick={(e) => e.stopPropagation()}
        >
            {/* Header */}
            <div className="relative p-8 border-b border-purple-500/20">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-2 hover:bg-purple-500/20 rounded-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 rounded-xl ${colorClasses[selectedService.color].bg} flex items-center justify-center ring-2 ring-purple-500/30`}>
                  <ServiceIcon icon={selectedService.icon} className={`w-8 h-8 ${colorClasses[selectedService.color].text}`} />
                </div>
                <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">Overview</h3>
                <p className="text-slate-400 leading-relaxed">{selectedService.description}</p>
              </div>

              {/* Technologies/Tools */}
              {selectedService.technologies && selectedService.technologies.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Technologies & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-4 py-2 ${colorClasses[selectedService.color].bg} ${colorClasses[selectedService.color].text} rounded-lg text-sm font-medium border border-purple-500/20`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features */}
              {selectedService.features && selectedService.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                  <ul className="space-y-3">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex gap-3 mt-8">
                <a
                  href="/contact"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold text-center transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50"
                >
                  Get Started
                </a>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-3 border-2 border-purple-500/50 rounded-xl font-semibold text-slate-300 hover:bg-purple-500/20 hover:text-white transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
    );
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {list.map((s) => (
          <article
            key={s.id}
            className="group h-full rounded-xl glass-card transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            onClick={() => setSelectedService(s)}
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className={`w-14 h-14 rounded-xl ${colorClasses[s.color].bg} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <ServiceIcon icon={s.icon} className={`w-7 h-7 ${colorClasses[s.color].text}`} />
                </div>
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              </div>
              <p className="text-slate-400 text-sm leading-6 line-clamp-3 flex-1">{s.description}</p>
              <button
                className="mt-5 pt-4 border-t border-purple-500/20 flex items-center text-sm font-medium text-purple-400 group-hover:text-purple-300 transition-colors"
              >
                <span>Learn more</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Render modal as portal */}
      {typeof window !== 'undefined' && createPortal(<Modal />, document.body)}
    </>
  );
}

