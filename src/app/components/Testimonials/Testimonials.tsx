"use client";

import { useState, useEffect } from 'react';
import AdvancedSchema from '../AdvancedSchema/AdvancedSchema';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  project: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    company: "TechCorp India",
    role: "CTO",
    content: "MIVS designed and deployed our intelligent commerce backbone—demand prediction, automated allocation, and decision systems. Production-grade from day one.",
    rating: 5,
    image: "/images/testimonial-1.jpg",
    project: "Intelligent Commerce Platform"
  },
  {
    id: 2,
    name: "Priya Sharma",
    company: "HealthTech Solutions",
    role: "Founder",
    content: "We needed HIPAA-compliant AI for scheduling and capacity planning. MIVS delivered the architecture and workflows with clear governance and audit trails.",
    rating: 5,
    image: "/images/testimonial-2.jpg",
    project: "Care Platform Automation"
  },
  {
    id: 3,
    name: "Amit Patel",
    company: "FinTech Innovations",
    role: "CEO",
    content: "MIVS designed and deployed our AI automation architecture. Clear scope, phased delivery, and execution we could trust.",
    rating: 5,
    image: "/images/testimonial-3.jpg",
    project: "AI Automation Architecture"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    company: "EduTech Global",
    role: "Product Manager",
    content: "Our adaptive learning and assessment workflows are powered by MIVS-built decision systems. They understood scale and compliance from the start.",
    rating: 5,
    image: "/images/testimonial-4.jpg",
    project: "Intelligent Learning Platform"
  },
  {
    id: 5,
    name: "Vikram Singh",
    company: "LogiTech Solutions",
    role: "Operations Director",
    content: "From manual routing to AI-driven orchestration—MIVS delivered the workflow and decision engine. Visibility and consistency we didn’t have before.",
    rating: 5,
    image: "/images/testimonial-5.jpg",
    project: "Supply Chain Intelligence"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 sm:py-24 bg-[var(--background)] animate-section-reveal">
      <AdvancedSchema 
        type="review" 
        data={{
          author: currentTestimonial.name,
          rating: currentTestimonial.rating,
          review: currentTestimonial.content
        }} 
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-heading text-[32px] font-semibold text-[var(--foreground)] tracking-tight mb-3">Testimonials</h2>
          <p className="text-[var(--foreground-secondary)] text-base">What our clients say about working with MIVS.</p>
        </div>

        <div className="rounded-lg border border-[var(--border)] bg-[var(--background-card)] p-8 md:p-10">
          <div className="flex justify-center mb-6">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-[var(--foreground-secondary)] mb-8 italic text-base leading-[1.6]">
            &quot;{currentTestimonial.content}&quot;
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-[var(--background-secondary)] rounded-full flex items-center justify-center text-[var(--foreground-muted)] font-semibold">
              {currentTestimonial.name.charAt(0)}
            </div>
            <div className="text-left">
              <div className="text-[var(--foreground)] font-medium">{currentTestimonial.name}</div>
              <div className="text-[var(--foreground-muted)] text-sm">{currentTestimonial.role}, {currentTestimonial.company}</div>
              <div className="text-[var(--foreground-muted)] text-xs mt-0.5">{currentTestimonial.project}</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === currentIndex ? 'bg-[var(--accent)]' : 'bg-[var(--border)] hover:bg-[var(--foreground-muted)]'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-[var(--border)]">
          <div className="text-center">
            <div className="text-xl font-semibold text-[var(--foreground)] mb-1">50+</div>
            <div className="text-[var(--foreground-muted)] text-sm">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-semibold text-[var(--foreground)] mb-1">4.9/5</div>
            <div className="text-[var(--foreground-muted)] text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-semibold text-[var(--foreground)] mb-1">100%</div>
            <div className="text-[var(--foreground-muted)] text-sm">Project Success</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-semibold text-[var(--foreground)] mb-1">98%</div>
            <div className="text-[var(--foreground-muted)] text-sm">Client Retention</div>
          </div>
        </div>
      </div>
    </section>
  );
}