// SEO utility functions for better search engine optimization

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

export const defaultSEO: SEOData = {
  title: "MIVS Software Development | Web, Mobile & Cloud Solutions",
  description: "Professional software development services. We build scalable web, mobile, cloud, and AI solutions tailored to your business needs. Expert team, proven process, reliable delivery.",
  keywords: [
    "software development", "web development", "mobile app development", "cloud solutions",
    "AI/ML development", "DevOps services", "custom software", "enterprise solutions",
    "React development", "Node.js development", "Python development", "Next.js development",
    "React Native", "Flutter development", "AWS cloud", "Google Cloud", "Azure cloud",
    "machine learning", "artificial intelligence", "data analytics", "API development",
    "database design", "UI/UX design", "responsive web design", "e-commerce development",
    "MIVS", "software company", "tech solutions", "digital transformation"
  ],
  canonical: "https://mivs.in",
  ogImage: "/images/MIVS_1.png",
  ogType: "website",
  twitterCard: "summary_large_image"
};

export function generatePageTitle(pageTitle: string, siteName: string = "MIVS Software Development"): string {
  return `${pageTitle} | ${siteName}`;
}

export function generateMetaDescription(content: string, maxLength: number = 160): string {
  // Remove HTML tags and extra whitespace
  const cleanContent = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  
  if (cleanContent.length <= maxLength) {
    return cleanContent;
  }
  
  // Find the last complete sentence within the limit
  const truncated = cleanContent.substring(0, maxLength);
  const lastSentenceEnd = Math.max(
    truncated.lastIndexOf('.'),
    truncated.lastIndexOf('!'),
    truncated.lastIndexOf('?')
  );
  
  if (lastSentenceEnd > maxLength * 0.7) {
    return truncated.substring(0, lastSentenceEnd + 1);
  }
  
  // If no good sentence break, truncate at word boundary
  const lastSpace = truncated.lastIndexOf(' ');
  return truncated.substring(0, lastSpace) + '...';
}

export function generateKeywords(baseKeywords: string[], pageSpecific: string[] = []): string[] {
  return [...new Set([...baseKeywords, ...pageSpecific])];
}

export function validateSEOData(seoData: SEOData): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!seoData.title || seoData.title.length < 30 || seoData.title.length > 60) {
    errors.push('Title should be between 30-60 characters');
  }
  
  if (!seoData.description || seoData.description.length < 120 || seoData.description.length > 160) {
    errors.push('Description should be between 120-160 characters');
  }
  
  if (!seoData.keywords || seoData.keywords.length === 0) {
    errors.push('Keywords are required');
  }
  
  if (seoData.keywords && seoData.keywords.length > 20) {
    errors.push('Too many keywords (max 20 recommended)');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

export function generateStructuredData(type: 'organization' | 'website' | 'service' | 'breadcrumb', data: any) {
  const baseUrl = 'https://mivs.in';
  
  switch (type) {
    case 'organization':
      return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "MIVS Software Development",
        "url": baseUrl,
        "logo": `${baseUrl}/images/logo.png`,
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
          "url": `${baseUrl}/contact`
        },
        "sameAs": [
          "https://linkedin.com/company/mivs-software",
          "https://twitter.com/mivs_software",
          "https://github.com/mivs-software"
        ]
      };
      
    case 'website':
      return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "MIVS Software Development",
        "url": baseUrl,
        "description": "Professional software development services. We build scalable web, mobile, cloud, and AI solutions tailored to your business needs.",
        "publisher": {
          "@type": "Organization",
          "name": "MIVS Software Development",
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/images/logo.png`
          }
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
          "url": baseUrl
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "serviceType": "Software Development"
      };
      
    case 'breadcrumb':
      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": data.items.map((item: any, index: number) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.url
        }))
      };
      
    default:
      return {};
  }
}

export function generateCanonicalUrl(path: string, baseUrl: string = 'https://mivs.in'): string {
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

export function generateSitemapUrls(): Array<{url: string, lastModified: Date, changeFrequency: string, priority: number}> {
  const baseUrl = 'https://mivs.in';
  const now = new Date();
  
  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/process`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/support`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3
    }
  ];
}