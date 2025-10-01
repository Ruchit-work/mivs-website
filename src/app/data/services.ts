export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: "web" | "mobile" | "cloud" | "data" | "seo" | "ai" | "design" | "testing" | "devops" | "custom";
  color: "blue" | "purple" | "green" | "orange" | "red" | "indigo" | "teal" | "yellow" | "cyan" | "gray";
  technologies?: string[];
  features?: string[];
};

export const SERVICES: ServiceItem[] = [
  {
    id: "web",
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies for optimal performance and user experience.",
    icon: "web",
    color: "blue",
    technologies: ["React.js", "Next.js", "Node.js", "Python", "Django", "Vue.js", "Angular", "TypeScript"],
    features: ["Responsive design", "Progressive Web Apps", "API integration", "Performance optimization"],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    icon: "mobile",
    color: "purple",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Xamarin"],
    features: ["Cross-platform apps", "Native performance", "Offline functionality", "Push notifications"],
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and deployment solutions for modern applications.",
    icon: "cloud",
    color: "green",
    technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform"],
    features: ["Auto-scaling", "High availability", "Cost optimization", "Security & compliance"],
  },
  {
    id: "data",
    title: "Data Analytics",
    description:
      "Transform your data into actionable insights with analytics and visualization.",
    icon: "data",
    color: "orange",
    technologies: ["Python", "R", "Power BI", "Tableau", "SQL", "Apache Spark", "MongoDB"],
    features: ["Data visualization", "Predictive analytics", "Real-time dashboards", "Business intelligence"],
  },
  {
    id: "seo",
    title: "SEO Optimization",
    description:
      "Boost your online visibility and search rankings with comprehensive SEO strategies and optimization techniques.",
    icon: "seo",
    color: "red",
    technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Schema Markup", "Core Web Vitals", "Keyword Research"],
    features: ["On-page SEO", "Technical SEO", "Link building", "Performance optimization"],
  },
  {
    id: "ai",
    title: "AI/ML Solutions",
    description:
      "Leverage AI and machine learning to automate and optimize your business processes.",
    icon: "ai",
    color: "indigo",
    technologies: ["TensorFlow", "PyTorch", "scikit-learn", "OpenAI", "Hugging Face", "Keras"],
    features: ["Natural language processing", "Computer vision", "Predictive modeling", "Automation"],
  },
  {
    id: "design",
    title: "UI/UX Design",
    description:
      "Intuitive interfaces that users love and businesses benefit from.",
    icon: "design",
    color: "teal",
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Tailwind CSS", "Material-UI"],
    features: ["User research", "Wireframing", "Prototyping", "Design systems"],
  },
  {
    id: "qa",
    title: "Q/A Testing",
    description:
      "Ensure your software works as expected with thorough testing and validation.",
    icon: "testing",
    color: "yellow",
    technologies: ["Selenium", "Jest", "Cypress", "JUnit", "Postman", "JMeter"],
    features: ["Automated testing", "Manual testing", "Performance testing", "Bug tracking"],
  },
  {
    id: "devops",
    title: "DevOps",
    description:
      "Streamline your development and operations with CI/CD pipelines, automation, and infrastructure management.",
    icon: "devops",
    color: "cyan",
    technologies: ["Jenkins", "GitLab CI", "Docker", "Kubernetes", "Ansible", "CircleCI"],
    features: ["CI/CD pipelines", "Infrastructure as code", "Monitoring & logging", "Deployment automation"],
  },
  {
    id: "custom",
    title: "Custom Services",
    description:
      "Custom services according to your requirement, we will help you to build your idea into a reality.",
    icon: "custom",
    color: "gray",
    technologies: ["Your Choice", "Custom Stack", "Flexible Solutions"],
    features: ["Tailored solutions", "Flexible approach", "Dedicated team", "Ongoing support"],
  },
];

