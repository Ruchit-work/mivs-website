"use client";
import { useState, useMemo } from "react";
import AnimatedCounter from "../components/AnimatedCounter/AnimatedCounter";
import AnimatedHero from "../components/Hero/AnimatedHero";

export default function Portfolio() {
  const [active, setActive] = useState<string>("All");

  const tabs = ["All", "AI", "Analytics", "Travel", "Utilities"] as const;

  type Category = typeof tabs[number];

  const projects = [
    {
      id: "ai-jobs",
      title: "AI-Powered Job Recommendation System",
      label: "AI Job Matcher",
      company: "",
      category: "AI" as Category,
      description:
        "AI-driven job search platform that scrapes multiple sites and ranks jobs by resume-to-JD relevance with match scores.",
      tags: ["NLP", "Web Scraping", "FastAPI", "Pinecone"],
    },
    {
      id: "insightx",
      title: "InsightX – Business Analytics Dashboard",
      label: "Analytics Dashboard",
      company: "",
      category: "Analytics" as Category,
      description:
        "Drag-and-drop real-time dashboards with automated email/WhatsApp reports and AI forecasting for sales & stock.",
      tags: ["Next.js", "Postgres", "ETL", "Forecasting"],
    },
    {
      id: "travel-ease",
      title: "TravelEase – Tours & Travel",
      label: "Travel Platform",
      company: "",
      category: "Travel" as Category,
      description:
        "Smart trip planner with AI recommendations, price tracking, multi-destination itinerary builder, and live insights.",
      tags: ["AI", "Flights API", "Maps", "Notifications"],
    },
    {
      id: "multilang",
      title: "Multilang – Multilingual Website Translator",
      label: "Translator Utility",
      company: "",
      category: "Utilities" as Category,
      description:
        "Instant AI translations for 100+ languages with SEO-friendly localized URLs, manual overrides, and CDN caching.",
      tags: ["i18n", "SEO", "Edge", "CDN"],
    },
    {
      id: "whatsquery",
      title: "WhatsQuery – WhatsApp Business Search & Filter",
      label: "WhatsApp Analytics",
      company: "",
      category: "Analytics" as Category,
      description:
        "Search, filter, and analyze WhatsApp Business conversations with AI insights and automated summary reports.",
      tags: ["WhatsApp API", "LLM", "Reporting", "Sentiment"],
    },
  ];

  const filteredProjects = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active, projects]);

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-20">
      <AnimatedHero 
        title="Our Work"
        subtitle="Work that blends delightful UX with measurable business outcomes."
        backgroundImage="/images/portfolio-hero.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="glass rounded-xl p-1.5 inline-flex">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`px-6 py-2.5 font-semibold rounded-lg transition-all duration-200 ${
                  active === tab
                    ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/30"
                    : "text-slate-400 hover:text-white hover:bg-purple-500/10"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid with Flip Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((p) => (
            <div key={p.id} className="group h-[400px] perspective-1000">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                {/* Front of Card */}
                <div className="absolute inset-0 backface-hidden glass-card border border-purple-500/30 rounded-2xl overflow-hidden shadow-lg">
                  <div className="h-48 bg-gradient-to-br from-purple-600/20 via-cyan-600/20 to-blue-600/20 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 animate-gradient"></div>
                    <span className="relative z-10 text-white text-2xl font-bold px-4 text-center">{p.label}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
                    <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed">{p.description}</p>
                    <div className="mt-6 text-center text-sm text-slate-500 flex items-center justify-center gap-2">
                      <span>Hover to see details</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-2xl overflow-hidden shadow-2xl p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{p.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed mb-4">{p.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 text-sm">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span key={t} className="px-3 py-1.5 bg-white/20 text-white text-xs rounded-lg backdrop-blur-sm border border-white/30 font-medium">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="glass-card rounded-2xl p-12 border border-purple-500/20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform duration-300">
              <AnimatedCounter 
                end={50} 
                suffix="+" 
                className="text-5xl font-bold gradient-text mb-2"
                duration={2500}
              />
              <div className="text-slate-400 font-medium">Projects Completed</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <AnimatedCounter 
                end={98} 
                suffix="%" 
                className="text-5xl font-bold gradient-text mb-2"
                duration={2500}
              />
              <div className="text-slate-400 font-medium">Client Satisfaction</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <AnimatedCounter 
                end={50} 
                suffix="+" 
                className="text-5xl font-bold gradient-text mb-2"
                duration={2500}
              />
              <div className="text-slate-400 font-medium">Happy Clients</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <AnimatedCounter 
                end={3} 
                suffix="+" 
                className="text-5xl font-bold gradient-text mb-2"
                duration={2500}
              />
              <div className="text-slate-400 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
