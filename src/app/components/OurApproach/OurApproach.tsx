"use client";

export default function OurApproach() {
  const principles = [
    {
      id: "client-focused",
      title: "Client-Focused",
      description: "We prioritize understanding your business goals and challenges. Every solution is tailored to deliver measurable value and align with your strategic objectives.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "from-purple-600 to-purple-500"
    },
    {
      id: "agile-delivery",
      title: "Agile Delivery",
      description: "We use iterative development cycles to deliver value early and often. This approach ensures flexibility, rapid feedback, and continuous improvement throughout the project.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "from-cyan-600 to-cyan-500"
    },
    {
      id: "quality-first",
      title: "Quality-First",
      description: "Quality is built into every stage of development, not added at the end. We implement comprehensive testing, code reviews, and best practices to ensure robust, reliable software.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-green-600 to-green-500"
    },
    {
      id: "innovation-driven",
      title: "Innovation-Driven",
      description: "We stay ahead of technology trends and leverage cutting-edge tools to give you a competitive edge. Innovation isn't just about new tech—it's about solving problems better.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "from-blue-600 to-blue-500"
    },
    {
      id: "transparent",
      title: "Transparent Communication",
      description: "Clear, honest communication builds trust. We provide regular updates, maintain open channels, and ensure you're always informed about progress, challenges, and successes.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      color: "from-orange-600 to-orange-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0f] to-[#13131a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass rounded-full border border-purple-500/20">
            <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            <span className="text-sm font-medium text-slate-300">Our Approach</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            How We <span className="gradient-text">Deliver Success</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Our methodology is built on five core principles that ensure every project delivers exceptional results
          </p>
        </div>

        {/* Principles */}
        <div className="space-y-6">
          {principles.map((principle, index) => (
            <div
              key={principle.id}
              className="group glass-card rounded-2xl p-6 lg:p-8 hover:scale-[1.01] transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div className="flex items-start gap-6">
                {/* Number Badge */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-xl flex items-center justify-center border border-purple-500/30">
                    <span className="text-2xl font-bold gradient-text">{index + 1}</span>
                  </div>
                </div>

                {/* Icon */}
                <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${principle.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {principle.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Visual */}
        <div className="mt-16 glass-card rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Our Development Process</h3>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: "1", title: "Discovery", desc: "Understanding your needs" },
              { step: "2", title: "Planning", desc: "Strategy & roadmap" },
              { step: "3", title: "Development", desc: "Agile implementation" },
              { step: "4", title: "Testing", desc: "Quality assurance" },
              { step: "5", title: "Launch", desc: "Deployment & support" }
            ].map((phase, idx) => (
              <div key={phase.step} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3 shadow-lg">
                    {phase.step}
                  </div>
                  <h4 className="font-semibold text-white mb-1">{phase.title}</h4>
                  <p className="text-sm text-slate-400">{phase.desc}</p>
                </div>
                {idx < 4 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

