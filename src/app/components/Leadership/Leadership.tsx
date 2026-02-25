"use client";

import { useState, useRef, useCallback } from "react";

const leaders = [
  {
    name: "Parjanya Patel",
    title: "Founder",
    description:
      "Leads enterprise AI transformation initiatives with focus on scalable automation architectures, intelligent workflow systems, and AI-driven operational optimization. Specialized in designing production-ready AI infrastructures.",
  },
  {
    name: "Harshit Prajapati",
    title: "Co-Founder",
    description:
      "Drives AI product engineering and automation frameworks, building robust, deployment-ready AI systems for industry-scale use cases. Focused on applied AI innovation and enterprise integration.",
  },
];

const TILT_MAX = 8;
const PERSPECTIVE = 1000;

function PersonIcon() {
  return (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}

function LeaderCard({
  leader,
}: {
  leader: (typeof leaders)[0];
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);
      setTilt({
        x: Math.max(-1, Math.min(1, y)) * -TILT_MAX,
        y: Math.max(-1, Math.min(1, x)) * TILT_MAX,
      });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="leadership-card-3d"
      style={{
        transform: `perspective(${PERSPECTIVE}px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(0)`,
      }}
    >
      <div className="leadership-card-inner h-full flex flex-col overflow-hidden bg-white border border-slate-200 rounded-3xl">
        {/* Banner with gradient + profile (CodePen card__image + card__header) */}
        <div className="leadership-card__banner relative h-44 shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 leadership-card__banner-bg" aria-hidden />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="leadership-card__profile w-20 h-20 rounded-full bg-indigo-100 border-2 border-indigo-200/80 flex items-center justify-center shadow-sm text-indigo-600" aria-hidden>
              <PersonIcon />
            </div>
          </div>
        </div>
        {/* Body: name, job, teaser (always visible), full bio (slides up on hover) */}
        <div className="leadership-card__body flex flex-1 flex-col px-6 pt-4 pb-2">
          <h3 className="font-heading text-xl font-semibold text-slate-900 tracking-tight mb-0.5 text-center">
            {leader.name}
          </h3>
          <p className="leadership-card__job text-center text-sm font-medium mb-3">
            {leader.title}
          </p>
          <p className="leadership-card__teaser text-slate-600 text-sm leading-relaxed text-center line-clamp-2">
            {leader.description}
          </p>
          <p className="leadership-card__bio text-slate-600 text-sm leading-relaxed text-center">
            {leader.description}
          </p>
        </div>
        {/* Footer (slides up on hover) */}
        <div className="leadership-card__footer px-6 pb-5 pt-1">
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
            MIVS Leadership
          </p>
        </div>
      </div>
    </div>
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

        <div className="grid md:grid-cols-2 gap-12 leadership-card-grid">
          {leaders.map((leader) => (
            <LeaderCard key={leader.name} leader={leader} />
          ))}
        </div>
      </div>
    </section>
  );
}
