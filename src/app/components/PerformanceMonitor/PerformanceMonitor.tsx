"use client";

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production and in browser
    if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
      // Core Web Vitals monitoring
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Log Core Web Vitals
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            console.log('CLS:', entry.value);
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      // Page load performance
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        console.log('Page Load Time:', navigation.loadEventEnd - navigation.fetchStart);
        console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.fetchStart);
        console.log('First Paint:', performance.getEntriesByName('first-paint')[0]?.startTime);
        console.log('First Contentful Paint:', performance.getEntriesByName('first-contentful-paint')[0]?.startTime);
      });

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return null;
}