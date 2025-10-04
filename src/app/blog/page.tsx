import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development Blog | MIVS Tech Insights",
  description: "Latest insights on software development, web development trends, mobile app development, and cloud solutions. Expert tips from MIVS Software Development team.",
  keywords: [
    "software development blog", "web development trends", "mobile app development tips",
    "cloud solutions guide", "AI/ML development insights", "React development best practices",
    "Node.js development tutorials", "software development company blog"
  ],
  openGraph: {
    title: "Software Development Blog | MIVS Tech Insights",
    description: "Latest insights on software development, web development trends, mobile app development, and cloud solutions.",
    url: "https://mivs-website.vercel.app/blog",
  },
  alternates: {
    canonical: "https://mivs-website.vercel.app/blog",
  },
};

export default function Blog() {
  const blogPosts = [
    {
      title: "Top 10 Web Development Trends in 2024",
      excerpt: "Discover the latest web development trends that will shape the industry in 2024, from AI integration to progressive web apps.",
      slug: "web-development-trends-2024",
      date: "2024-01-15",
      readTime: "5 min read"
    },
    {
      title: "How to Choose the Right Mobile App Development Company",
      excerpt: "A comprehensive guide to selecting the best mobile app development company for your business needs.",
      slug: "choose-mobile-app-development-company",
      date: "2024-01-10",
      readTime: "7 min read"
    },
    {
      title: "Cloud Migration: Benefits and Best Practices",
      excerpt: "Learn about the advantages of cloud migration and the best practices for a successful transition.",
      slug: "cloud-migration-benefits-best-practices",
      date: "2024-01-05",
      readTime: "6 min read"
    },
    {
      title: "AI/ML Solutions for Business Growth",
      excerpt: "Explore how artificial intelligence and machine learning can drive business growth and innovation.",
      slug: "ai-ml-solutions-business-growth",
      date: "2024-01-01",
      readTime: "8 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass rounded-full border border-purple-500/20">
            <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span className="text-sm font-medium text-slate-300">Tech Insights</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Software Development <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, insights, and best practices in software development, web development, and technology.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
              <div className="mb-4">
                <span className="text-sm text-purple-400 font-medium">{post.date}</span>
                <span className="text-sm text-slate-400 ml-2">• {post.readTime}</span>
              </div>
              
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {post.title}
              </h2>
              
              <p className="text-slate-400 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <a 
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors"
              >
                Read More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Custom Software Development?
            </h3>
            <p className="text-slate-400 mb-6">
              Let our expert team help you build scalable, secure, and innovative software solutions for your business.
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
      </div>
    </div>
  );
}