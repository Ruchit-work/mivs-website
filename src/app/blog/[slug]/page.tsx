import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Blog posts data
const blogPosts = {
  "web-development-trends-2024": {
    title: "Top 10 Web Development Trends in 2024",
    description: "Discover the latest web development trends that will shape the industry in 2024, from AI integration to progressive web apps.",
    content: `
      <h2>1. Artificial Intelligence Integration</h2>
      <p>AI is revolutionizing web development with tools like GitHub Copilot, automated testing, and intelligent user interfaces. Companies are integrating AI to enhance user experiences and streamline development processes.</p>
      
      <h2>2. Progressive Web Apps (PWAs)</h2>
      <p>PWAs continue to gain momentum, offering native app-like experiences in browsers. They provide offline functionality, push notifications, and improved performance.</p>
      
      <h2>3. Serverless Architecture</h2>
      <p>Serverless computing is becoming the standard for scalable web applications. Platforms like Vercel, Netlify, and AWS Lambda are making it easier to build and deploy applications.</p>
      
      <h2>4. WebAssembly (WASM)</h2>
      <p>WebAssembly is enabling high-performance web applications by allowing code written in languages like C++ and Rust to run in browsers at near-native speed.</p>
      
      <h2>5. Micro-Frontends</h2>
      <p>Large organizations are adopting micro-frontend architectures to improve scalability and team independence. This approach allows different teams to work on different parts of the application.</p>
    `,
    author: "MIVS Development Team",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["Web Development", "Trends", "Technology", "2024"],
    image: "/images/web-development-trends.jpg"
  },
  "choose-mobile-app-development-company": {
    title: "How to Choose the Right Mobile App Development Company",
    description: "A comprehensive guide to selecting the best mobile app development company for your business needs.",
    content: `
      <h2>1. Evaluate Their Portfolio</h2>
      <p>Look for companies with experience in your industry and similar project types. Check their case studies, client testimonials, and app store ratings.</p>
      
      <h2>2. Technical Expertise</h2>
      <p>Ensure the company has expertise in the technologies you need: React Native, Flutter, native iOS/Android development, or cross-platform solutions.</p>
      
      <h2>3. Development Process</h2>
      <p>Ask about their development methodology, project management approach, and quality assurance processes. Agile development with regular communication is ideal.</p>
      
      <h2>4. Post-Launch Support</h2>
      <p>Mobile apps require ongoing maintenance, updates, and bug fixes. Choose a company that offers comprehensive post-launch support.</p>
      
      <h2>5. Budget and Timeline</h2>
      <p>Get detailed quotes and timelines from multiple companies. Balance cost with quality and ensure realistic delivery expectations.</p>
    `,
    author: "MIVS Development Team",
    date: "2024-01-10",
    readTime: "7 min read",
    tags: ["Mobile Development", "Business", "Guide", "Selection"],
    image: "/images/mobile-app-development.jpg"
  },
  "cloud-migration-benefits-best-practices": {
    title: "Cloud Migration: Benefits and Best Practices",
    description: "Learn about the advantages of cloud migration and the best practices for a successful transition.",
    content: `
      <h2>Benefits of Cloud Migration</h2>
      <p>Cloud migration offers numerous advantages including cost reduction, improved scalability, enhanced security, and better disaster recovery capabilities.</p>
      
      <h2>Best Practices for Cloud Migration</h2>
      <p>Successful cloud migration requires careful planning, proper assessment of current infrastructure, and choosing the right cloud provider and services.</p>
      
      <h2>Common Challenges</h2>
      <p>Organizations often face challenges with data security, compliance requirements, and application compatibility during cloud migration.</p>
      
      <h2>Migration Strategies</h2>
      <p>Different migration strategies include lift-and-shift, re-platforming, and re-architecting, each with its own benefits and considerations.</p>
    `,
    author: "MIVS Development Team",
    date: "2024-01-05",
    readTime: "6 min read",
    tags: ["Cloud Computing", "Migration", "Best Practices", "AWS"],
    image: "/images/cloud-migration.jpg"
  },
  "ai-ml-solutions-business-growth": {
    title: "AI/ML Solutions for Business Growth",
    description: "Explore how artificial intelligence and machine learning can drive business growth and innovation.",
    content: `
      <h2>AI-Powered Automation</h2>
      <p>AI can automate repetitive tasks, improve efficiency, and reduce operational costs across various business functions.</p>
      
      <h2>Predictive Analytics</h2>
      <p>Machine learning algorithms can analyze historical data to predict future trends, customer behavior, and market opportunities.</p>
      
      <h2>Personalization</h2>
      <p>AI enables personalized customer experiences through recommendation engines, targeted marketing, and customized product offerings.</p>
      
      <h2>Implementation Strategy</h2>
      <p>Successful AI/ML implementation requires clear objectives, quality data, skilled personnel, and a phased approach to deployment.</p>
    `,
    author: "MIVS Development Team",
    date: "2024-01-01",
    readTime: "8 min read",
    tags: ["AI", "Machine Learning", "Business Growth", "Automation"],
    image: "/images/ai-ml-solutions.jpg"
  }
};

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts];
  
  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: `${post.title} | MIVS Software Development Blog`,
    description: post.description,
    keywords: [
      ...post.tags,
      "software development blog",
      "tech insights",
      "MIVS blog",
      "development tips",
      "technology trends"
    ],
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://mivs-website.vercel.app/blog/${params.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
    alternates: {
      canonical: `https://mivs-website.vercel.app/blog/${params.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            {post.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-slate-400 mb-6">
            <span>By {post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          
          <p className="text-xl text-slate-300 leading-relaxed">
            {post.description}
          </p>
        </header>

        {/* Featured Image */}
        <div className="mb-12">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 object-cover rounded-2xl"
          />
        </div>

        {/* Content */}
        <div 
          className="prose prose-lg prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author Bio */}
        <div className="mt-16 p-8 glass-card rounded-2xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{post.author}</h3>
              <p className="text-slate-400">Software Development Team</p>
            </div>
          </div>
          <p className="text-slate-300">
            Our expert team at MIVS Software Development specializes in creating innovative software solutions. 
            We combine technical expertise with business acumen to deliver results that drive growth.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build Your Next Project?
            </h3>
            <p className="text-slate-400 mb-6">
              Let our expert team help you implement these technologies in your business.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300"
            >
              Get Free Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}