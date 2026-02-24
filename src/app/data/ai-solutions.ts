export type DeploymentType = "Cloud" | "VPC" | "On-Premises" | "Hybrid";

export type AISolution = {
  id: string;
  name: string;
  category: "Workflow" | "Analytics" | "Commerce" | "Decision";
  description: string;
  architectureHighlight: string;
  deployment: DeploymentType;
};

export const AI_SOLUTIONS: AISolution[] = [
  {
    id: "hospital-management",
    name: "Hospital Management System",
    category: "Workflow",
    description: "AI-enabled care coordination, scheduling automation, and operational intelligence. Unified clinical and operational data with real-time dashboards.",
    architectureHighlight: "Event-driven workflows, HL7/FHIR integration, predictive capacity layer",
    deployment: "Cloud",
  },
  {
    id: "ai-job-matcher",
    name: "AI Job Recommendation System",
    category: "Decision",
    description: "Resume-to-JD matching with relevance scoring. Multi-source aggregation and ranking for recruitment workflows.",
    architectureHighlight: "NLP pipelines, vector search, API orchestration",
    deployment: "Cloud",
  },
  {
    id: "insightx",
    name: "InsightX – Analytics Dashboard",
    category: "Analytics",
    description: "Drag-and-drop real-time dashboards with automated reporting and AI forecasting for sales and stock.",
    architectureHighlight: "ETL + real-time ingestion, forecast models, email/WhatsApp reporting",
    deployment: "Cloud",
  },
  {
    id: "travel-ease",
    name: "TravelEase – Trip Planner",
    category: "Commerce",
    description: "Smart trip planning with AI recommendations, price tracking, and multi-destination itineraries.",
    architectureHighlight: "Flights API, maps, notification pipelines, recommendation engine",
    deployment: "Cloud",
  },
  {
    id: "multilang",
    name: "Multilang – Website Translator",
    category: "Workflow",
    description: "AI translations for 100+ languages with SEO-friendly URLs, overrides, and CDN caching.",
    architectureHighlight: "Edge translation, i18n routing, CDN cache layer",
    deployment: "Hybrid",
  },
  {
    id: "whatsquery",
    name: "WhatsQuery – WhatsApp Analytics",
    category: "Analytics",
    description: "Search, filter, and analyze WhatsApp Business conversations with AI insights and summary reports.",
    architectureHighlight: "WhatsApp API, LLM summarization, reporting pipeline",
    deployment: "Cloud",
  },
];

export const CATEGORIES = [
  { id: "Workflow", label: "Intelligent Workflow Automation" },
  { id: "Analytics", label: "Predictive Analytics Platforms" },
  { id: "Commerce", label: "AI-driven Commerce Engines" },
  { id: "Decision", label: "Enterprise Decision Systems" },
] as const;
