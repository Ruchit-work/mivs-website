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
    content: "MIVS delivered an exceptional e-commerce platform that increased our online sales by 300%. Their team's expertise in React and Node.js is outstanding.",
    rating: 5,
    image: "/images/testimonial-1.jpg",
    project: "E-commerce Platform"
  },
  {
    id: 2,
    name: "Priya Sharma",
    company: "HealthTech Solutions",
    role: "Founder",
    content: "The mobile app developed by MIVS has revolutionized our patient management system. Their attention to detail and user experience design is remarkable.",
    rating: 5,
    image: "/images/testimonial-2.jpg",
    project: "Healthcare Mobile App"
  },
  {
    id: 3,
    name: "Amit Patel",
    company: "FinTech Innovations",
    role: "CEO",
    content: "MIVS helped us migrate to AWS cloud infrastructure seamlessly. Their cloud expertise and 24/7 support made the transition smooth and cost-effective.",
    rating: 5,
    image: "/images/testimonial-3.jpg",
    project: "Cloud Migration"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    company: "EduTech Global",
    role: "Product Manager",
    content: "The AI-powered learning platform developed by MIVS has improved student engagement by 250%. Their machine learning expertise is top-notch.",
    rating: 5,
    image: "/images/testimonial-4.jpg",
    project: "AI Learning Platform"
  },
  {
    id: 5,
    name: "Vikram Singh",
    company: "LogiTech Solutions",
    role: "Operations Director",
    content: "MIVS developed a comprehensive logistics management system that streamlined our operations. Their full-stack development skills are impressive.",
    rating: 5,
    image: "/images/testimonial-5.jpg",
    project: "Logistics Management System"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isClient]);

  const currentTestimonial = testimonials[currentIndex];

  if (!isClient) {
    return (
      <section className="py-20 bg-gradient-to-b from-[#13131a] to-[#0a0a0f]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our clients say about working with MIVS.
            </p>
          </div>
          
          <div className="glass-card rounded-2xl p-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg text-slate-300 mb-6 italic">
                &quot;MIVS delivered exceptional software solutions that exceeded our expectations. Their expertise and professionalism are unmatched.&quot;
              </p>
              <div className="text-white font-semibold">Client Testimonials</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-[#13131a] to-[#0a0a0f]">
      <AdvancedSchema 
        type="review" 
        data={{
          author: currentTestimonial.name,
          rating: currentTestimonial.rating,
          review: currentTestimonial.content
        }} 
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass rounded-full border border-purple-500/20">
            <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-slate-300">Client Reviews</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients say about working with MIVS.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="text-center">
              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-lg md:text-xl text-slate-300 mb-8 italic leading-relaxed">
                &quot;{currentTestimonial.content}&quot;
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {currentTestimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-lg">{currentTestimonial.name}</div>
                  <div className="text-slate-400">{currentTestimonial.role}, {currentTestimonial.company}</div>
                  <div className="text-purple-400 text-sm">{currentTestimonial.project}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-purple-500 scale-125' 
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">50+</div>
            <div className="text-slate-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">4.9/5</div>
            <div className="text-slate-400">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">100%</div>
            <div className="text-slate-400">Project Success</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-slate-400">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}