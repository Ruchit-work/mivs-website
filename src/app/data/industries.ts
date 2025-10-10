export type Industry = {
  id: string;
  name: string;
  title: string;
  description: string;
  icon: string;
  challenges: string[];
  solutions: string[];
  color: string;
  image?: string;
};

export const INDUSTRIES: Industry[] = [
  {
    id: "healthcare",
    name: "Healthcare",
    title: "Healthcare & Life Sciences",
    description: "We help payers, providers and health-tech companies modernize the patient experience end‑to‑end — from HIPAA‑compliant portals and interoperable EHR integrations to telehealth, remote monitoring and AI‑assisted diagnostics — all built on secure, scalable cloud foundations.",
    icon: "medical",
    image: "/images/medical.jpg",
    challenges: [
      "Patient data security and HIPAA compliance",
      "Interoperability between systems",
      "Telehealth adoption",
      "Healthcare staff efficiency"
    ],
    solutions: [
      "HIPAA-compliant patient portals",
      "Electronic health records (EHR) integration",
      "Telemedicine platforms",
      "AI-powered diagnostic tools"
    ],
    color: "blue"
  },
  {
    id: "finance",
    name: "Financial Services",
    title: "Banking & Financial Services",
    description: "We build secure, scalable platforms for digital banking and fintech — from core modernization to real‑time payments, KYC/AML and fraud detection — with robust auditability and compliance baked in so you can innovate faster without increasing risk.",
    icon: "finance",
    image: "/images/bank.jpg",
    challenges: [
      "Legacy system modernization",
      "Regulatory compliance",
      "Fraud detection",
      "Real-time transaction processing"
    ],
    solutions: [
      "Digital banking platforms",
      "Payment gateway integration",
      "AI-powered fraud detection",
      "Blockchain solutions"
    ],
    color: "green"
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    title: "Retail & E-commerce",
    description: "We create high‑performance, omnichannel commerce experiences that connect storefront, inventory, fulfillment and loyalty. Our work increases conversion, handles peak traffic reliably and delivers personalized journeys that boost retention and lifetime value.",
    icon: "shopping",
    image: "/images/e-comm.jpg",
    challenges: [
      "Omnichannel integration",
      "Inventory management",
      "Customer retention",
      "Peak traffic handling"
    ],
    solutions: [
      "E-commerce platforms",
      "Point-of-sale systems",
      "Inventory management",
      "Customer loyalty programs"
    ],
    color: "purple"
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    title: "Manufacturing & Logistics",
    description: "We unlock operational efficiency across shop‑floor to supply chain with IoT telemetry, predictive maintenance, digital twins and analytics. Our solutions improve OEE, increase visibility, reduce downtime and accelerate fulfillment across global networks.",
    icon: "factory",
    image: "/images/Manufacturing.jpg",
    challenges: [
      "Supply chain visibility",
      "Production efficiency",
      "Quality control",
      "Predictive maintenance"
    ],
    solutions: [
      "Supply chain management",
      "IoT sensor integration",
      "Predictive analytics",
      "Quality assurance systems"
    ],
    color: "orange"
  },
  {
    id: "education",
    name: "Education",
    title: "Education & E-learning",
    description: "We design engaging learning ecosystems — LMS, virtual classrooms, assessment automation and student analytics — that scale to thousands of concurrent learners while improving outcomes and reducing operational overhead for institutions and ed‑tech companies.",
    icon: "education",
    image: "/images/education.jpg",
    challenges: [
      "Student engagement",
      "Content delivery at scale",
      "Assessment automation",
      "Learning analytics"
    ],
    solutions: [
      "Learning management systems",
      "Virtual classroom platforms",
      "Interactive content tools",
      "Student analytics dashboards"
    ],
    color: "cyan"
  },
  {
    id: "real-estate",
    name: "Real Estate",
    title: "Real Estate & Property",
    description: "We power modern real‑estate experiences with property portals, CRM, 3D virtual tours and automated leasing workflows. Our platforms streamline operations for developers and managers while delivering seamless tenant and buyer journeys.",
    icon: "building",
    image: "/images/real-property.jpg",
    challenges: [
      "Property listing management",
      "Virtual tours",
      "Document automation",
      "Tenant communication"
    ],
    solutions: [
      "Property management portals",
      "3D virtual tour integration",
      "CRM systems",
      "Automated lease management"
    ],
    color: "indigo"
  }
];

