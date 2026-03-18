export type CaseStudy = {
  id: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  technologies: string[];
  image?: string;
  link?: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "hospital-management-system",
    client: "Healthcare Institution",
    industry: "Healthcare",
    challenge: "Hospitals needed a unified system to streamline operations, improve patient care coordination, and turn clinical and operational data into actionable insights.",
    solution: "An advanced AI-enabled Hospital Management System that enhances patient care, improves operational efficiency, and delivers data-driven insights for healthcare institutions. The platform integrates scheduling, records, billing, and analytics with AI for demand forecasting, resource optimization, and care pathway recommendations.",
    metrics: [
      {
        label: "Efficiency",
        value: "40%",
        description: "Reduction in administrative overhead"
      },
      {
        label: "Insights",
        value: "Real-time",
        description: "Data-driven dashboards and reporting"
      },
      {
        label: "Care",
        value: "Enhanced",
        description: "Coordinated patient care workflows"
      }
    ],
    technologies: ["AI/ML", "Healthcare APIs", "Analytics", "Secure Cloud", "HL7/FHIR"],
    image: "/images/case-study-healthcare.jpg"
  },
  {
    id: "ecommerce-platform",
    client: "Leading Retail Chain",
    industry: "Retail & E-commerce",
    challenge: "Manual order and inventory decisions could not scale during peak demand, leading to stockouts, delayed fulfillment, and lost revenue.",
    solution: "Deployed an intelligent commerce platform with real-time demand prediction, automated inventory allocation, and decision systems for pricing and fulfillment. AI workflows replaced manual reorder and routing logic.",
    metrics: [
      {
        label: "Efficiency Gain",
        value: "85%",
        description: "Faster decision-to-fulfillment cycle"
      },
      {
        label: "Automation",
        value: "10x",
        description: "Peak capacity without proportional headcount"
      },
      {
        label: "Optimization",
        value: "45%",
        description: "Revenue growth from demand prediction"
      }
    ],
    technologies: ["Next.js", "Node.js", "AWS", "Redis", "PostgreSQL", "Predictive Logic"],
    image: "/images/case-study-ecommerce.jpg"
  },
  {
    id: "ai-recruitment-platform",
    client: "AI Recruitment Platform",
    industry: "HR & Recruitment",
    challenge: "Traditional hiring pipelines suffered from slow manual screening, recruiter burnout, and inconsistent evaluation at scale.",
    solution: "Implemented an agentic AI hiring suite with specialized voice and video agents. Alex conducts multilingual, always-on phone screens while Morgan runs structured async video interviews. An integration layer connects ATS platforms like Workday, Salesforce, and Ashby with calendars and collaboration tools so interviews, scores, and shortlists sync automatically.",
    metrics: [
      {
        label: "Time-to-Hire",
        value: "3x",
        description: "Faster candidate progression from application to shortlist"
      },
      {
        label: "Screening Coverage",
        value: "24/7",
        description: "Always-on AI agents engaging candidates the moment they apply"
      },
      {
        label: "Recruiter Focus",
        value: "60%",
        description: "More recruiter time redirected to closing top candidates"
      }
    ],
    technologies: ["LLMs", "Voice AI", "Video Intelligence", "Workflow Automation", "ATS Integrations"],
    image: "/images/case-study-recruitment.jpg"
  },
  {
    id: "supply-chain-optimization",
    client: "Manufacturing Company",
    industry: "Manufacturing & Logistics",
    challenge: "Manual supply chain decisions and limited visibility led to delays, excess inventory, and higher operational cost.",
    solution: "Implemented an AI-driven supply chain intelligence system with real-time tracking, predictive demand and replenishment, and automated workflow orchestration. Decision systems now drive ordering, routing, and exception handling.",
    metrics: [
      {
        label: "Efficiency Gain",
        value: "35%",
        description: "Annual operational cost reduction"
      },
      {
        label: "Automation",
        value: "60%",
        description: "Faster order fulfillment via smart routing"
      },
      {
        label: "Optimization",
        value: "99%",
        description: "Inventory accuracy with predictive logic"
      }
    ],
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "Docker", "Workflow Automation"],
    image: "/images/case-study-manufacturing.jpg"
  },
  {
    id: "ai-travel-experiences",
    client: "Experience-First Travel Platform",
    industry: "Travel & Hospitality",
    challenge: "Travelers struggled with fragmented booking tools, information overload, and difficulty discovering trips by experience type such as Spiritual, Trekking, or Retreat.",
    solution: "Designed an activity-centric travel platform with a modular AI layer. An intent engine segments users by region and vibe, a recommendation layer maps natural language queries to curated itineraries like Spiti Valley or Tawang to Kaziranga, and a trust module surfaces real-time client reviews and guarantees to increase confidence. Seamless Pay Now and WhatsApp support reduce friction at checkout.",
    metrics: [
      {
        label: "Discovery Speed",
        value: "4x",
        description: "Faster path from first visit to a relevant itinerary"
      },
      {
        label: "Conversion",
        value: "30%",
        description: "Increase in bookings for curated activity-based tours"
      },
      {
        label: "Support Satisfaction",
        value: "4.9/5",
        description: "Average rating driven by instant human + AI assistance"
      }
    ],
    technologies: ["Next.js", "Node.js", "NLP Search", "Recommendation Systems", "Payment & Messaging Integrations"],
    image: "/images/case-study-travel.jpg"
  },
  {
    id: "multilang-website-translator",
    client: "Multilingual Website Translator",
    industry: "Technology & SaaS",
    challenge: "Growing global traffic was blocked by single-language content, inconsistent manual translations, and slow rollout of localized pages across regions.",
    solution: "Delivered an AI-powered website translation platform that plugs into existing CMS and frontends. A language detection layer routes users to the right locale, LLM-backed translation pipelines generate and continuously improve localized content, and a review workflow lets human editors approve high-visibility pages before publish.",
    metrics: [
      {
        label: "Global Reach",
        value: "8+",
        description: "New languages launched without redesigning the site"
      },
      {
        label: "Localization Speed",
        value: "5x",
        description: "Faster time from content creation to translated go-live"
      },
      {
        label: "Engagement",
        value: "35%",
        description: "Increase in session duration from native-language experiences"
      }
    ],
    technologies: ["Next.js", "Edge Middleware", "LLM Translation", "Glossary Management", "CMS Integrations"],
    image: "/images/case-study-multilang.jpg"
  }
];
