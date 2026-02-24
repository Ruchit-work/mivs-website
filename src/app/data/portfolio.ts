export type PortfolioCategory = "All" | "AI" | "Healthcare" | "Analytics" | "Travel" | "Utilities";

export type PortfolioProject = {
  id: string;
  title: string;
  label: string;
  company: string;
  category: PortfolioCategory;
  description: string;
  tags: string[];
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "hospital-management",
    title: "Hospital Management System",
    label: "Hospital Management",
    company: "",
    category: "Healthcare",
    description:
      "An advanced AI-enabled Hospital Management System that enhances patient care, improves operational efficiency, and delivers data-driven insights for healthcare institutions.",
    tags: ["AI", "Healthcare", "Analytics", "Patient Care", "Operations"],
  },
  {
    id: "ai-jobs",
    title: "AI-Powered Job Recommendation System",
    label: "AI Job Matcher",
    company: "",
    category: "AI",
    description:
      "AI-driven job search platform that scrapes multiple sites and ranks jobs by resume-to-JD relevance with match scores.",
    tags: ["NLP", "Web Scraping", "FastAPI", "Pinecone"],
  },
  {
    id: "insightx",
    title: "InsightX – Business Analytics Dashboard",
    label: "Analytics Dashboard",
    company: "",
    category: "Analytics",
    description:
      "Drag-and-drop real-time dashboards with automated email/WhatsApp reports and AI forecasting for sales & stock.",
    tags: ["Next.js", "Postgres", "ETL", "Forecasting"],
  },
  {
    id: "travel-ease",
    title: "TravelEase – Tours & Travel",
    label: "Travel Platform",
    company: "",
    category: "Travel",
    description:
      "Smart trip planner with AI recommendations, price tracking, multi-destination itinerary builder, and live insights.",
    tags: ["AI", "Flights API", "Maps", "Notifications"],
  },
  {
    id: "multilang",
    title: "Multilang – Multilingual Website Translator",
    label: "Translator Utility",
    company: "",
    category: "Utilities",
    description:
      "Instant AI translations for 100+ languages with SEO-friendly localized URLs, manual overrides, and CDN caching.",
    tags: ["i18n", "SEO", "Edge", "CDN"],
  },
  {
    id: "whatsquery",
    title: "WhatsQuery – WhatsApp Business Search & Filter",
    label: "WhatsApp Analytics",
    company: "",
    category: "Analytics",
    description:
      "Search, filter, and analyze WhatsApp Business conversations with AI insights and automated summary reports.",
    tags: ["WhatsApp API", "LLM", "Reporting", "Sentiment"],
  },
];
