"use client";

interface StructuredDataProps {
  type: 'organization' | 'website' | 'service' | 'breadcrumb' | 'faq' | 'article';
  data: Record<string, unknown>;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "MIVS Software Development",
          "url": "https://mivs.in",
          "logo": "https://mivs.in/images/logo.png",
          "description": "Professional software development services including web development, mobile app development, cloud solutions, and AI/ML development.",
          "foundingDate": "2020",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN",
            "addressLocality": "India"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "url": "https://mivs.in/contact"
          },
          "sameAs": [
            "https://linkedin.com/company/mivs-software",
            "https://twitter.com/mivs_software",
            "https://github.com/mivs-software"
          ],
          "serviceArea": {
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
                  "description": "Custom web applications using modern technologies like React, Next.js, Node.js"
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

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "MIVS Software Development",
          "url": "https://mivs.in",
          "description": "Professional software development services. We build scalable web, mobile, cloud, and AI solutions tailored to your business needs.",
          "publisher": {
            "@type": "Organization",
            "name": "MIVS Software Development",
            "logo": {
              "@type": "ImageObject",
              "url": "https://mivs.in/images/logo.png"
            }
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://mivs.in/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name || "Software Development Services",
          "description": data.description || "Professional software development services including web development, mobile app development, cloud solutions, and AI/ML development.",
          "provider": {
            "@type": "Organization",
            "name": "MIVS Software Development",
            "url": "https://mivs.in"
          },
          "areaServed": {
            "@type": "Country",
            "name": "India"
          },
          "serviceType": "Software Development",
          "category": data.category || "Technology Services"
        };

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": (data.items as Array<{name: string; url: string}>).map((item, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
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

      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title,
          "description": data.description,
          "image": data.image,
          "author": {
            "@type": "Organization",
            "name": "MIVS Software Development"
          },
          "publisher": {
            "@type": "Organization",
            "name": "MIVS Software Development",
            "logo": {
              "@type": "ImageObject",
              "url": "https://mivs.in/images/logo.png"
            }
          },
          "datePublished": data.datePublished,
          "dateModified": data.dateModified || data.datePublished
        };

      default:
        return {};
    }
  };

  const structuredData = getStructuredData();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}