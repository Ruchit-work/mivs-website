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
    id: "ecommerce-platform",
    client: "Leading Retail Chain",
    industry: "Retail & E-commerce",
    challenge: "Legacy e-commerce platform couldn't handle peak traffic, resulting in lost sales and poor customer experience during high-demand periods.",
    solution: "Built a scalable cloud-native e-commerce platform with microservices architecture, CDN integration, and real-time inventory management.",
    metrics: [
      {
        label: "Performance Improvement",
        value: "85%",
        description: "Faster page load times"
      },
      {
        label: "Traffic Handling",
        value: "10x",
        description: "Peak capacity increase"
      },
      {
        label: "Revenue Growth",
        value: "45%",
        description: "Year-over-year increase"
      }
    ],
    technologies: ["Next.js", "Node.js", "AWS", "Redis", "PostgreSQL"],
    image: "/images/case-study-ecommerce.jpg"
  },
  {
    id: "healthcare-portal",
    client: "Healthcare Provider Network",
    industry: "Healthcare",
    challenge: "Manual patient record management led to delays, errors, and compliance risks across multiple facilities.",
    solution: "Developed a HIPAA-compliant patient portal with AI-powered scheduling, electronic health records, and telemedicine capabilities.",
    metrics: [
      {
        label: "Processing Time",
        value: "88%",
        description: "Reduction in patient onboarding"
      },
      {
        label: "Error Reduction",
        value: "94%",
        description: "Fewer data entry mistakes"
      },
      {
        label: "Patient Satisfaction",
        value: "92%",
        description: "Positive feedback rating"
      }
    ],
    technologies: ["React", "Python", "Django", "PostgreSQL", "AWS"],
    image: "/images/case-study-healthcare.jpg"
  },
  {
    id: "fintech-app",
    client: "Digital Banking Startup",
    industry: "Financial Services",
    challenge: "Needed to launch a secure, user-friendly mobile banking app to compete with established players in a tight market.",
    solution: "Created a feature-rich mobile banking application with biometric authentication, real-time notifications, and AI-powered financial insights.",
    metrics: [
      {
        label: "User Adoption",
        value: "50K+",
        description: "Active users in 6 months"
      },
      {
        label: "Transaction Speed",
        value: "3s",
        description: "Average transaction time"
      },
      {
        label: "App Rating",
        value: "4.8/5",
        description: "Customer satisfaction"
      }
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "AWS", "Stripe"],
    image: "/images/case-study-fintech.jpg"
  },
  {
    id: "supply-chain-optimization",
    client: "Manufacturing Company",
    industry: "Manufacturing & Logistics",
    challenge: "Inefficient supply chain visibility and manual processes causing delays and increased operational costs.",
    solution: "Implemented an AI-driven supply chain management system with real-time tracking, predictive analytics, and automated reporting.",
    metrics: [
      {
        label: "Cost Savings",
        value: "35%",
        description: "Annual operational reduction"
      },
      {
        label: "Delivery Time",
        value: "60%",
        description: "Faster order fulfillment"
      },
      {
        label: "Inventory Accuracy",
        value: "99%",
        description: "Real-time tracking precision"
      }
    ],
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "Docker"],
    image: "/images/case-study-manufacturing.jpg"
  },
  {
    id: "edtech-platform",
    client: "Educational Institution",
    industry: "Education",
    challenge: "Remote learning infrastructure couldn't support interactive classes and engagement was declining rapidly.",
    solution: "Built a comprehensive learning management system with live classes, interactive assessments, and progress analytics.",
    metrics: [
      {
        label: "Student Engagement",
        value: "78%",
        description: "Increase in participation"
      },
      {
        label: "Concurrent Users",
        value: "5000+",
        description: "Simultaneous live sessions"
      },
      {
        label: "Content Delivery",
        value: "99.9%",
        description: "Uptime reliability"
      }
    ],
    technologies: ["Next.js", "Node.js", "WebRTC", "MongoDB", "AWS"],
    image: "/images/case-study-education.jpg"
  }
];

