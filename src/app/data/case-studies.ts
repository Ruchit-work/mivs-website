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
    id: "healthcare-portal",
    client: "Healthcare Provider Network",
    industry: "Healthcare",
    challenge: "Manual patient record handling and scheduling caused delays, errors, and compliance risk across facilities.",
    solution: "Built a HIPAA-compliant intelligent care platform with AI-powered scheduling automation, predictive capacity planning, and decision systems for referrals and follow-ups. Automated workflows replaced manual data entry and booking.",
    metrics: [
      {
        label: "Efficiency Gain",
        value: "88%",
        description: "Reduction in onboarding processing time"
      },
      {
        label: "Automation",
        value: "94%",
        description: "Fewer manual data-entry touchpoints"
      },
      {
        label: "Optimization",
        value: "92%",
        description: "Patient satisfaction from faster routing"
      }
    ],
    technologies: ["React", "Python", "Django", "PostgreSQL", "AWS", "Decision Systems"],
    image: "/images/case-study-healthcare.jpg"
  },
  {
    id: "fintech-app",
    client: "Digital Banking Startup",
    industry: "Financial Services",
    challenge: "Needed to compete with established banks using intelligent, secure experiences and data-driven product decisions.",
    solution: "Delivered an intelligent banking platform with biometric authentication, real-time decisioning, and AI-powered financial insights. Predictive logic and automation workflows power personalized offers and risk-aware experiences.",
    metrics: [
      {
        label: "Efficiency Gain",
        value: "50K+",
        description: "Active users in 6 months"
      },
      {
        label: "Automation",
        value: "3s",
        description: "Average decision-to-confirmation time"
      },
      {
        label: "Optimization",
        value: "4.8/5",
        description: "Satisfaction from personalized intelligence"
      }
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "AWS", "Stripe", "Predictive Logic"],
    image: "/images/case-study-fintech.jpg"
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
    id: "edtech-platform",
    client: "Educational Institution",
    industry: "Education",
    challenge: "Remote learning lacked intelligent pacing, engagement signals, and automated support, leading to drop-off and inconsistent outcomes.",
    solution: "Built an intelligent learning platform with adaptive content routing, automated assessment and feedback workflows, and predictive analytics for at-risk learners. Decision systems drive recommendations and instructor alerts.",
    metrics: [
      {
        label: "Efficiency Gain",
        value: "78%",
        description: "Increase in participation from smart nudges"
      },
      {
        label: "Automation",
        value: "5000+",
        description: "Concurrent sessions with automated scaling"
      },
      {
        label: "Optimization",
        value: "99.9%",
        description: "Uptime with intelligent failover"
      }
    ],
    technologies: ["Next.js", "Node.js", "WebRTC", "MongoDB", "AWS", "Predictive Analytics"],
    image: "/images/case-study-education.jpg"
  }
];
