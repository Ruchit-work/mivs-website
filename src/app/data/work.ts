export type WorkItem = {
  id: string;
  label: string;
  title: string;
  description: string;
  tags: string[];
};

export const OUR_WORK: WorkItem[] = [
  {
    id: "ai-jobs",
    label: "AI Job Matcher",
    title: "AI-Powered Job Recommendation System",
    description:
      "AI-driven job search with resume-to-JD match scores, scraping multiple job boards.",
    tags: ["NLP", "Scraping", "FastAPI", "Vector"],
  },
  {
    id: "insightx",
    label: "Analytics Dashboard",
    title: "InsightX – Business Analytics",
    description:
      "Drag-and-drop dashboards with automated reports and AI forecasting.",
    tags: ["Next.js", "ETL", "Forecast", "Postgres"],
  },
  {
    id: "travel",
    label: "Travel Platform",
    title: "TravelEase – Tours & Travel",
    description:
      "Smart trip planning, price tracking, and multi-stop itineraries.",
    tags: ["AI", "Flights API", "Maps"],
  },
  {
    id: "multilang",
    label: "Translator Utility",
    title: "Multilang – Multilingual Website Translator",
    description:
      "Instant translations with SEO-friendly localized URLs and CDN caching.",
    tags: ["i18n", "SEO", "CDN"],
  },
  {
    id: "whatsquery",
    label: "WhatsApp Analytics",
    title: "WhatsQuery – Search & Filter",
    description:
      "Search and analyze WhatsApp Business chats with AI insights and reports.",
    tags: ["WhatsApp API", "LLM", "Reporting"],
  },
];

