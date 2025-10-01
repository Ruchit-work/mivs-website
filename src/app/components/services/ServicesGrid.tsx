"use client";
import { useState } from "react";
import { SERVICES } from "../../data/services";
import type { ServiceItem } from "../../data/services";

const colorClasses: Record<string, { bg: string; text: string }> = {
  blue: { bg: "bg-blue-100", text: "text-blue-600" },
  purple: { bg: "bg-purple-100", text: "text-purple-600" },
  green: { bg: "bg-green-100", text: "text-green-600" },
  orange: { bg: "bg-orange-100", text: "text-orange-600" },
  red: { bg: "bg-red-100", text: "text-red-600" },
  indigo: { bg: "bg-indigo-100", text: "text-indigo-600" },
  teal: { bg: "bg-teal-100", text: "text-teal-600" },
  yellow: { bg: "bg-yellow-100", text: "text-yellow-600" },
  cyan: { bg: "bg-cyan-100", text: "text-cyan-600" },
  gray: { bg: "bg-gray-100", text: "text-gray-600" },
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

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {list.map((s) => (
          <article
            key={s.id}
            className="h-full rounded-xl border border-gray-200 bg-white transition-colors duration-200 hover:border-gray-300"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg ${colorClasses[s.color].bg} flex items-center justify-center mr-4`}>
                  <ServiceIcon icon={s.icon} className={`w-6 h-6 ${colorClasses[s.color].text}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-6 line-clamp-3 flex-1">{s.description}</p>
              <button
                onClick={() => setSelectedService(s)}
                className="mt-5 pt-4 border-t border-gray-100 flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
              >
                <span>Show more</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Modal/Popup */}
      {selectedService && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-up"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={`${colorClasses[selectedService.color].bg} p-8 relative`}>
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 rounded-xl ${colorClasses[selectedService.color].bg} ring-4 ring-white flex items-center justify-center`}>
                  <ServiceIcon icon={selectedService.icon} className={`w-8 h-8 ${colorClasses[selectedService.color].text}`} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{selectedService.title}</h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Overview</h3>
                <p className="text-gray-700 leading-relaxed">{selectedService.description}</p>
              </div>

              {/* Technologies/Tools */}
              {selectedService.technologies && selectedService.technologies.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Technologies & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-4 py-2 ${colorClasses[selectedService.color].bg} ${colorClasses[selectedService.color].text} rounded-lg text-sm font-medium`}
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex gap-3">
                <a
                  href="/contact"
                  className={`flex-1 ${colorClasses[selectedService.color].bg} ${colorClasses[selectedService.color].text} px-6 py-3 rounded-lg font-semibold text-center hover:opacity-90 transition-opacity`}
                >
                  Get Started
                </a>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

