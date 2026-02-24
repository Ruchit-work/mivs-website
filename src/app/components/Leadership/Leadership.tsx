"use client";

const leaders = [
  {
    name: "Parjanya Patel",
    title: "Founder & Chief AI Architect",
    description:
      "Leads enterprise AI transformation initiatives with focus on scalable automation architectures, intelligent workflow systems, and AI-driven operational optimization. Specialized in designing production-ready AI infrastructures.",
  },
  {
    name: "Harshit Prajapati",
    title: "Co-Founder & Head of AI Engineering",
    description:
      "Drives AI product engineering and automation frameworks, building robust, deployment-ready AI systems for industry-scale use cases. Focused on applied AI innovation and enterprise integration.",
  },
];

function PersonIcon() {
  return (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}

export default function Leadership() {
  return (
    <section
      className="py-32 bg-slate-100"
      aria-labelledby="leadership-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-indigo-600 text-sm font-medium uppercase tracking-wider mb-3">
          Leadership
        </p>
        <h2
          id="leadership-heading"
          className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-center text-slate-900 mb-6"
        >
          Architecting Enterprise Intelligence
        </h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto leading-relaxed mb-16">
          MIVS is led by automation-first thinkers building scalable AI systems for enterprises across industries. Our leadership combines system architecture expertise with production-grade AI execution.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="bg-white/70 backdrop-blur-xl border border-slate-200 rounded-3xl p-10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-indigo-200"
            >
              <div className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-full w-20 h-20 flex items-center justify-center mb-6 shrink-0" aria-hidden>
                <PersonIcon />
              </div>
              <h3 className="font-heading text-xl font-semibold text-slate-900 tracking-tight mb-1.5">
                {leader.name}
              </h3>
              <p className="text-indigo-600 text-sm font-medium mb-4">
                {leader.title}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {leader.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
