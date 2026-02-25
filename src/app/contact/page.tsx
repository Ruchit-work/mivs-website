"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/app/components/Hero/PageHero";
import OrbitText from "@/app/components/OrbitText/OrbitText";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [customService, setCustomService] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const setMessageWithTimer = (msg: string, duration = 5000) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setMessage(msg);
    timerRef.current = setTimeout(() => setMessage(""), duration);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    if (selectedService === "Other" && customService) data.service = customService;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const contentType = res.headers.get("content-type") || "";
      let result: { message?: string } | null = null;
      try {
        if (contentType.includes("application/json")) result = await res.json();
      } catch {}
      if (res.ok) {
        setMessageWithTimer("Message sent. We'll respond within 24 hours.");
        (e.target as HTMLFormElement).reset();
        setSelectedService("");
        setCustomService("");
      } else {
        setMessageWithTimer(result?.message || `Error ${res.status}. Please try again.`, 8000);
      }
    } catch {
      setMessageWithTimer("Network error. Please try again.", 8000);
    } finally {
      setLoading(false);
    }
  }

  const services = [
    "Enterprise AI Systems",
    "LLM Integrations",
    "AI Automation Architecture",
    "Intelligent Workflow Systems",
    "AI-Powered Decision Engines",
    "AI Consulting",
    "Other",
  ];

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <PageHero
        title="Let&apos;s Architect Your AI Future"
        subtitle="Strategic discussions on AI automation, architecture, and deployment. We respond within 24 hours."
        backgroundImage="/images/contact-hero.jpg"
        badge="Get in Touch"
      >
        <Link
          href="#contact-form"
          className="px-8 py-4 rounded-2xl bg-indigo-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 inline-flex items-center justify-center"
        >
          Send a message
        </Link>
        {/* <a
          href="mailto:admin@mivs.in"
          className="px-8 py-4 rounded-2xl bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-all duration-300 inline-flex items-center justify-center"
        >
          Email us
        </a> */}
      </PageHero>

      {/* Contact section – same spacing and container as other pages */}
      <section
        id="contact-form"
        className="relative py-24 sm:py-32 bg-[var(--background-secondary)] overflow-hidden"
        aria-label="Contact"
      >
        <div className="absolute top-0 right-0 flex justify-end items-start pt-12 pr-8 pointer-events-none opacity-15">
          <div className="scale-90">
            <OrbitText letterColor="rgba(15, 23, 42, 0.15)" />
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: messaging + contact details + image */}
            <div>
              <p className="text-sm font-medium text-indigo-600 uppercase tracking-wider mb-2">
                Strategic engagement
              </p>
              <h2 className="font-heading text-[28px] sm:text-[34px] font-semibold text-slate-900 tracking-tight mb-6">
                We start with a discovery call
              </h2>
              <p className="text-slate-600 leading-relaxed mb-10 max-w-xl">
                We understand your operations, automation goals, and constraints. From there we propose a scope and engagement model—strategy, build, or long-term partnership.
              </p>

              <div className="space-y-4 mb-10">
                <a
                  href="mailto:admin@mivs.in"
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
                  aria-label="Email us"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-slate-900">Email</p>
                    <p className="text-slate-600 text-sm">admin@mivs.in</p>
                  </div>
                </a>
                <a
                  href="tel:+916380541373"
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
                  aria-label="Call us"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-slate-900">Phone</p>
                    <p className="text-slate-600 text-sm">+91 6380541373</p>
                  </div>
                </a>
                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-slate-900">Office</p>
                    <address className="text-slate-600 text-sm not-italic">
                      Jay Ambe Society, Bardoli 394601, India
                    </address>
                  </div>
                </div>
              </div>

              <p className="text-slate-500 text-sm mb-6">We typically respond within 24 hours on business days.</p>

              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                <Image
                  src="/images/support.jpg"
                  alt="Strategic work and support"
                  width={560}
                  height={360}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right: form card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-lg">
              <h3 className="font-heading text-xl font-semibold text-slate-900 tracking-tight mb-2">
                Send a message
              </h3>
              <p className="text-slate-600 text-sm mb-8">
                Tell us about your initiative and we&apos;ll get back within 24 hours.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1.5">First name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm transition-shadow"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1.5">Last name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Interest *</label>
                  {selectedService === "Other" ? (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={customService}
                        onChange={(e) => setCustomService(e.target.value)}
                        placeholder="Describe your need"
                        className="flex-1 px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
                        required
                      />
                      <button type="button" onClick={() => { setSelectedService(""); setCustomService(""); }} className="px-3 text-slate-500 hover:text-slate-700 text-sm">Clear</button>
                    </div>
                  ) : (
                    <select
                      name="service"
                      required
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                    >
                      <option value="">Select...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm resize-none"
                    placeholder="Brief description of your initiative and goals..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-2xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send message"}
                </button>
                {message && (
                  <p className={`text-sm ${message.startsWith("Message sent") ? "text-green-600" : "text-amber-600"}`}>
                    {message}
                  </p>
                )}
              </form>
              <p className="mt-6 text-sm text-slate-500 text-center">
                We use your information only to respond and deliver services. No spam.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
