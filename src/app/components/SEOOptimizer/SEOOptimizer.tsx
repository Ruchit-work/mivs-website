"use client";

import { useEffect, useState } from 'react';

export default function SEOOptimizer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = '/fonts/geist-sans.woff2';
      fontLink.as = 'font';
      fontLink.type = 'font/woff2';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);

      // Preload critical images
      const imageLink = document.createElement('link');
      imageLink.rel = 'preload';
      imageLink.href = '/images/logo.png';
      imageLink.as = 'image';
      document.head.appendChild(imageLink);
    };

    // Optimize images for better Core Web Vitals
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add loading="lazy" to non-critical images
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        
        // Add decoding="async" for better performance
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
      });
    };

    // Add structured data for better search understanding
    const addStructuredData = () => {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "MIVS Software Development",
        "url": "https://mivs-website.vercel.app",
        "logo": "https://mivs-website.vercel.app/images/logo.png",
        "description": "Professional software development services including web development, mobile app development, cloud solutions, and AI/ML development.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jay Ambe Society",
          "addressLocality": "Bardoli",
          "postalCode": "394601",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-6380541373",
          "contactType": "customer service",
          "email": "admin@mivs.in"
        },
        "sameAs": [
          "https://linkedin.com/company/mivs-software",
          "https://twitter.com/mivs_software"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Software Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Web Development",
                "description": "Custom web applications built with modern technologies like React, Next.js, Node.js"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mobile App Development",
                "description": "Native and cross-platform mobile applications using React Native and Flutter"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cloud Solutions",
                "description": "Cloud infrastructure setup and management on AWS, Google Cloud, and Azure"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI/ML Development",
                "description": "Artificial Intelligence and Machine Learning solutions for business automation"
              }
            }
          ]
        }
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    addStructuredData();

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
          // Send to analytics if needed
        }
        if (entry.entryType === 'first-input') {
          const firstInputEntry = entry as PerformanceEventTiming;
          console.log('FID:', firstInputEntry.processingStart - firstInputEntry.startTime);
        }
        if (entry.entryType === 'layout-shift') {
          const layoutShiftEntry = entry as PerformanceEntry & { value: number };
          console.log('CLS:', layoutShiftEntry.value);
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    return () => {
      observer.disconnect();
    };
  }, [isClient]);

  return null;
}