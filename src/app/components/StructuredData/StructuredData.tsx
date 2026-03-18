"use client";

import { useCallback, useEffect, useMemo } from "react";

interface StructuredDataProps {
  type: 'organization' | 'website' | 'service' | 'breadcrumb' | 'faq' | 'article';
  data: Record<string, unknown>;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const dataKey = JSON.stringify(data);
  const getStructuredData = useCallback(() => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "MIVS",
          "url": "https://mivs.in",
          "logo": "https://mivs.in/images/Logo/MIVS_2.png",
          "description": "Enterprise AI automation and AI consulting. AI systems, LLM integrations, intelligent workflows, and enterprise transformation.",
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
            "https://www.linkedin.com/company/110551451",
            "https://twitter.com/mivs_software",
            "https://github.com/mivs-software"
          ],
          "serviceArea": {
            "@type": "Country",
            "name": "India"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Enterprise AI & Automation",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Enterprise AI Systems",
                  "description": "AI strategy, architecture, and implementation for enterprises"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "LLM Integrations",
                  "description": "Production LLM integrations, RAG, and AI agents"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "AI Automation Architecture",
                  "description": "Design and deployment of AI automation and workflow systems"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Intelligent Workflow Systems",
                  "description": "Workflow and decision automation with AI"
                }
              }
            ]
          }
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "MIVS",
          "url": "https://mivs.in",
          "description": "Enterprise AI automation and AI consulting. AI automation architecture, LLM integrations, intelligent workflow systems.",
          "publisher": {
            "@type": "Organization",
            "name": "MIVS",
            "logo": {
              "@type": "ImageObject",
              "url": "https://mivs.in/images/Logo/MIVS_2.png"
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
          "name": data.name || "Enterprise AI & Automation",
          "description": data.description || "Enterprise AI systems, AI automation architecture, LLM integrations, intelligent workflow systems.",
          "provider": {
            "@type": "Organization",
            "name": "MIVS",
            "url": "https://mivs.in"
          },
          "areaServed": {
            "@type": "Country",
            "name": "India"
          },
          "serviceType": "AI Consulting",
          "category": data.category || "Enterprise AI"
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
            "name": "MIVS"
          },
          "publisher": {
            "@type": "Organization",
            "name": "MIVS",
            "logo": {
              "@type": "ImageObject",
              "url": "https://mivs.in/images/Logo/MIVS_2.png"
            }
          },
          "datePublished": data.datePublished,
          "dateModified": data.dateModified || data.datePublished
        };

      default:
        return {};
    }
    // dataKey is JSON.stringify(data); we intentionally avoid listing every data.* key
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, dataKey]);

  const structuredData = useMemo(() => getStructuredData(), [getStructuredData]);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    script.setAttribute("data-structured-data", type);
    document.head.appendChild(script);
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, [type, structuredData]);

  return null;
}