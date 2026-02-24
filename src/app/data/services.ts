export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: "web" | "mobile" | "cloud" | "data" | "seo" | "ai" | "design" | "testing" | "devops" | "custom";
  color: "blue" | "purple" | "green" | "orange" | "red" | "indigo" | "teal" | "yellow" | "cyan" | "gray";
  technologies?: string[];
  features?: string[];
  image?: string;
};

export const SERVICES: ServiceItem[] = [
  {
    id: "ai",
    title: "Enterprise AI Systems",
    description:
      "End-to-end enterprise AI systems: strategy, architecture, and implementation for intelligent operations and measurable outcomes.",
    icon: "ai",
    color: "indigo",
    technologies: ["LLMs", "RAG", "OpenAI", "Anthropic", "Hugging Face", "Vector DBs"],
    features: ["AI strategy", "Enterprise AI architecture", "Governance", "Scalable deployment"],
    image: "/images/AI-ML.png",
  },
  {
    id: "web",
    title: "LLM Integrations",
    description:
      "Integrate large language models into your systems. RAG, agents, and APIs for secure, production-grade LLM workflows.",
    icon: "web",
    color: "blue",
    technologies: ["OpenAI", "Anthropic", "LangChain", "LlamaIndex", "Custom APIs"],
    features: ["RAG pipelines", "AI agents", "API integration", "Prompt engineering"],
    image: "/images/webdevelopment.jpg",
  },
  {
    id: "cloud",
    title: "AI Automation Architecture",
    description:
      "Design and deploy AI automation architecture: orchestration, event-driven workflows, and scalable AI infrastructure.",
    icon: "cloud",
    color: "green",
    technologies: ["AWS", "GCP", "Azure AI", "Docker", "Kubernetes", "Terraform"],
    features: ["Automation architecture", "Event-driven design", "Scalability", "Security"],
  },
  {
    id: "data",
    title: "Intelligent Workflow Systems",
    description:
      "Build intelligent workflow systems that automate decision points, approvals, and cross-system processes with AI.",
    icon: "data",
    color: "orange",
    technologies: ["Python", "Workflow engines", "APIs", "Event streaming"],
    features: ["Process automation", "Decision automation", "Integration", "Monitoring"],
    image: "/images/support.jpg",
  },
  {
    id: "design",
    title: "AI-Powered Decision Engines",
    description:
      "Decision engines that combine data, rules, and AI for consistent, auditable outcomes at scale.",
    icon: "design",
    color: "teal",
    technologies: ["ML models", "Rule engines", "Real-time inference", "Explainability"],
    features: ["Decision logic", "Model deployment", "Audit trails", "Compliance"],
    image: "/images/UI-UX.jpg",
  },
  {
    id: "custom",
    title: "Enterprise Transformation",
    description:
      "AI consulting and program delivery for enterprise transformation: roadmap, change, and execution.",
    icon: "custom",
    color: "gray",
    technologies: ["Strategy", "Roadmapping", "Change management", "Delivery"],
    features: ["AI strategy", "Roadmap", "Stakeholder alignment", "Program delivery"],
    image: "/images/team.jpg",
  },
  {
    id: "devops",
    title: "AI Infrastructure & MLOps",
    description:
      "Production AI infrastructure: model serving, monitoring, and MLOps for reliable enterprise AI.",
    icon: "devops",
    color: "cyan",
    technologies: ["Model serving", "MLflow", "Kubernetes", "Monitoring"],
    features: ["Model deployment", "Monitoring", "CI/CD for ML", "Governance"],
    image: "/images/webdevelopment.jpg",
  },
  {
    id: "seo",
    title: "Enterprise Search & RAG",
    description:
      "Enterprise search and retrieval-augmented generation for knowledge bases and internal systems.",
    icon: "seo",
    color: "red",
    technologies: ["Vector search", "Embeddings", "RAG", "Semantic search"],
    features: ["Knowledge retrieval", "RAG design", "Search relevance", "Security"],
    image: "/images/portfolio.jpg",
  },
  {
    id: "mobile",
    title: "AI Agents & Assistants",
    description:
      "Conversational AI agents and assistants for internal tools, support, and workflow augmentation.",
    icon: "mobile",
    color: "purple",
    technologies: ["LLM APIs", "Agent frameworks", "Tool use", "Orchestration"],
    features: ["Agent design", "Tool integration", "Guardrails", "Evaluation"],
    image: "/images/AI agent.webp",
  },
  {
    id: "qa",
    title: "AI Validation & Evaluation",
    description:
      "Testing, validation, and evaluation of AI systems for accuracy, safety, and compliance.",
    icon: "testing",
    color: "yellow",
    technologies: ["Evaluation frameworks", "Red-teaming", "Benchmarks", "Monitoring"],
    features: ["Model evaluation", "Safety", "Bias checks", "Compliance"],
    image: "/images/qa.jpg",
  },
];
