"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function ContactContent() {
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
    <section className="py-28 bg-[var(--background)]" aria-label="Contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: strategic messaging, office, response */}
          <div>
            <h2 className="font-heading text-2xl font-semibold text-slate-900 tracking-tight mb-6">
              Strategic engagement
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              We start with a short discovery call to understand your operations, automation goals, and constraints. From there we propose a scope and engagement model—strategy, build, or long-term partnership.
            </p>
            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-heading font-semibold text-slate-900 mb-2">Office</h3>
                <p className="text-slate-600 text-sm">
                  Jay Ambe Society, Bardoli 394601, India
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-heading font-semibold text-slate-900 mb-2">Response</h3>
                <p className="text-slate-600 text-sm">
                  We typically respond within 24 hours on business days.
                </p>
              </div>
            </div>
            <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              <Image
                src="/images/support.jpg"
                alt="Strategic work and support"
                width={560}
                height={360}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">
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
                className="w-full py-4 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
              We treat your information with care and use it only to respond and deliver services. No spam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
