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
    <div className="min-h-screen bg-white pt-20">
      <AnimatedHero 
        title="Our Work"
        subtitle="Work that blends delightful UX with measurable business outcomes."
        backgroundImage="/images/portfolio-hero.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`px-6 py-2 font-semibold rounded-md transition-colors duration-200 ${
                  active === tab
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid with Flip Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((p) => (
            <div key={p.id} className="group h-[400px] perspective-1000">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                {/* Front of Card */}
                <div className="absolute inset-0 backface-hidden bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <span className="text-blue-900 text-2xl font-bold">{p.label}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{p.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-3">{p.description}</p>
                    <div className="mt-4 text-center text-sm text-gray-400">
                      Hover to see details →
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl overflow-hidden shadow-xl p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{p.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed mb-4">{p.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 text-sm">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span key={t} className="px-3 py-1 bg-white/20 text-white text-xs rounded-full backdrop-blur-sm border border-white/30">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* <div className="mt-auto">
                    <button className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      View Case Study
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <AnimatedCounter 
                end={150} 
                suffix="+" 
                className="text-4xl font-bold text-blue-600 mb-2"
                duration={2500}
              />
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <AnimatedCounter 
                end={98} 
                suffix="%" 
                className="text-4xl font-bold text-purple-600 mb-2"
                duration={2500}
              />
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <AnimatedCounter 
                end={50} 
                suffix="+" 
                className="text-4xl font-bold text-green-600 mb-2"
                duration={2500}
              />
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <AnimatedCounter 
                end={5} 
                suffix="+" 
                className="text-4xl font-bold text-orange-600 mb-2"
                duration={2500}
              />
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}