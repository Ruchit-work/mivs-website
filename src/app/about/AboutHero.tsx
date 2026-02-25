"use client";

import Image from "next/image";
import ParticleBackground from "@/app/components/ParticleBackground/ParticleBackground";

export default function AboutHero() {
  return (
    <section
      className="relative overflow-hidden min-h-[50vh] flex flex-col justify-center pt-12 pb-20"
      role="banner"
      aria-label="Page hero"
    >
      {/* Base gradient so dots are visible */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 35%, #c7d2fe 70%, #a5b4fc 100%)",
        }}
      />
      <ParticleBackground
        particleCount={120}
        dotColor="255, 255, 255"
        className="opacity-100"
      />
      {/* Overlay for text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.55) 100%)",
        }}
      />
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/images/refector/motif.svg"
            alt=""
            width={228}
            height={35}
            className="mb-4 shrink-0 h-[35px] w-auto"
            aria-hidden
          />
          <p className="inline-block px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium">
            Enterprise AI Automation Company
          </p>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-slate-900 leading-tight tracking-tight">
          Architecting Enterprise Intelligence
        </h1>
        <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          We engineer intelligent systems that embed AI into enterprise workflows—automation-first, production-grade, with measurable impact.
        </p>
      </div>
    </section>
  );
}
