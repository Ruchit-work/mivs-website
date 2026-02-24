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
    label: "Intelligent Matching",
    title: "Enterprise Talent–JD Matching System",
    description:
      "Intelligent system that automates candidate–role matching using NLP and vector similarity. Predictive scoring and workflow automation replace manual shortlisting.",
    tags: ["NLP", "Vector Search", "FastAPI", "Decision Engine"],
  },
  {
    id: "insightx",
    label: "Predictive Analytics",
    title: "InsightX – Intelligent Business Analytics Platform",
    description:
      "AI-driven analytics engine with automated forecasting, decision-ready dashboards, and predictive logic for planning and optimization.",
    tags: ["Next.js", "ETL", "Forecasting", "Predictive Logic"],
  },
  {
    id: "travel",
    label: "Smart Orchestration",
    title: "TravelEase – Intelligent Trip Orchestration",
    description:
      "Automation workflows for trip planning with price-prediction logic, multi-stop optimization, and intelligent recommendation systems.",
    tags: ["AI", "Workflow Automation", "Optimization", "APIs"],
  },
  {
    id: "multilang",
    label: "Localization Intelligence",
    title: "Multilang – AI-Powered Localization Engine",
    description:
      "Intelligent localization system with automated translation workflows, SEO-aware routing, and decision logic for language and market rollout.",
    tags: ["i18n", "Automation", "SEO", "CDN"],
  },
  {
    id: "whatsquery",
    label: "Conversation Intelligence",
    title: "WhatsQuery – Conversational AI Analytics",
    description:
      "Enterprise conversation intelligence: LLM-powered search, automated insight extraction, and reporting workflows for WhatsApp Business operations.",
    tags: ["WhatsApp API", "LLM", "Analytics", "Automation"],
  },
];
