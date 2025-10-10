"use client";

export default function HowWeHelp() {
  const valueAreas = [
    {
      id: "digital-transformation",
      title: "Digital Transformation",
      description: "Transform legacy systems into modern, scalable solutions. We help you navigate from current infrastructure to a high-performance, cloud-native future.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "from-purple-600 to-purple-500",
      features: ["Legacy modernization", "Cloud migration", "System integration", "Architecture redesign"]
    },
    {
      id: "custom-software",
      title: "Custom Software Development",
      description: "Build tailored solutions that align with your unique business needs. From concept to deployment, we deliver software that drives results.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: "from-cyan-600 to-cyan-500",
      features: ["Web applications", "Mobile apps", "Enterprise software", "API development"]
    },
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      description: "Leverage AI to automate processes, gain insights, and create competitive advantages. We make AI practical and measurable.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "from-blue-600 to-blue-500",
      features: ["Predictive analytics", "Natural language processing", "Computer vision", "Process automation"]
    },
    {
      id: "cloud-solutions",
      title: "Cloud Solutions",
      description: "Design and implement scalable cloud infrastructure that grows with your business. Optimize costs while maximizing performance.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      color: "from-green-600 to-green-500",
      features: ["AWS, Azure, GCP", "DevOps & CI/CD", "Infrastructure as code", "Cost optimization"]
    },
    {
      id: "tech-consulting",
      title: "Technology Consulting",
      description: "Strategic guidance to help you make the right technology decisions. We align your tech stack with business objectives.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: "from-orange-600 to-orange-500",
      features: ["Technology roadmap", "Architecture review", "Vendor selection", "Best practices"]
    },
    {
      id: "support",
      title: "Ongoing Support & Maintenance",
      description: "Keep your systems running smoothly with proactive monitoring, updates, and rapid issue resolution.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: "from-indigo-600 to-indigo-500",
      features: ["24/7 monitoring", "Performance tuning", "Security updates", "Technical support"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#13131a] to-[#0a0a0f] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass rounded-full border border-purple-500/20">
            <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium text-slate-300">How We Help</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Turning Technology Into Your <span className="gradient-text">Competitive Advantage</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We understand how to help organizations transition from their current infrastructure to a high-performance, innovation-driven future
          </p>
        </div>

        {/* Value Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueAreas.map((area) => (
            <div
              key={area.id}
              className="group glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
            >
              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {area.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                {area.title}
              </h3>
              <p className="text-slate-400 mb-4 leading-relaxed">
                {area.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {area.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-500">
                    <svg className="w-4 h-4 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      {/* CTA removed as requested */}
      </div>
    </section>
  );
}

