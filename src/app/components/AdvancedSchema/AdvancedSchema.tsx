"use client";

import { useEffect } from 'react';

interface AdvancedSchemaProps {
  type: 'service' | 'faq' | 'breadcrumb' | 'review' | 'localBusiness';
  data: Record<string, unknown>;
}

export default function AdvancedSchema({ type, data }: AdvancedSchemaProps) {
  useEffect(() => {
    const generateSchema = () => {
      const baseUrl = 'https://mivs-website.vercel.app';
      
      switch (type) {
        case 'service':
          return {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": data.name || "Software Development Services",
            "description": data.description || "Professional software development services including web development, mobile app development, cloud solutions, and AI/ML development.",
            "provider": {
              "@type": "Organization",
              "name": "MIVS Software Development",
              "url": baseUrl,
              "logo": `${baseUrl}/images/logo.png`,
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
              }
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "serviceType": "Software Development",
            "category": data.category || "Technology Services",
            "offers": {
              "@type": "Offer",
              "description": "Professional software development services",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            }
          };

        case 'faq':
          return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": (data.questions as Array<{question: string; answer: string}>).map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          };

        case 'breadcrumb':
          return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": (data.items as Array<{name: string; url: string}>).map((item, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": item.name,
              "item": `${baseUrl}${item.url}`
            }))
          };

        case 'review':
          return {
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
              "@type": "Organization",
              "name": "MIVS Software Development",
              "url": baseUrl
            },
            "author": {
              "@type": "Person",
              "name": data.author || "Client"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": data.rating || "5",
              "bestRating": "5"
            },
            "reviewBody": data.review || "Excellent software development services"
          };

        case 'localBusiness':
          return {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "MIVS Software Development",
            "description": "Professional software development services including web development, mobile app development, cloud solutions, and AI/ML development.",
            "url": baseUrl,
            "logo": `${baseUrl}/images/logo.png`,
            "image": `${baseUrl}/images/MIVS_1.png`,
            "telephone": "+91-6380541373",
            "email": "admin@mivs.in",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jay Ambe Society",
              "addressLocality": "Bardoli",
              "addressRegion": "Gujarat",
              "postalCode": "394601",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "21.1225",
              "longitude": "73.1115"
            },
            "openingHours": "Mo-Fr 09:00-18:00",
            "priceRange": "$$",
            "paymentAccepted": "Cash, Credit Card, Bank Transfer",
            "currenciesAccepted": "INR",
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Software Development Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Web Development",
                    "description": "Custom web applications built with modern technologies"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mobile App Development",
                    "description": "Native and cross-platform mobile applications"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cloud Solutions",
                    "description": "Cloud infrastructure setup and management"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI/ML Development",
                    "description": "Artificial Intelligence and Machine Learning solutions"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "50",
              "bestRating": "5"
            }
          };

        default:
          return {};
      }
    };

    const schema = generateSchema();
    
    if (Object.keys(schema).length > 0) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup script on unmount
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        if (script.textContent?.includes('MIVS Software Development')) {
          script.remove();
        }
      });
    };
  }, [type, data]);

  return null;
}