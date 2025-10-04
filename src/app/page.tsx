"use client";
import ServicesGrid from "./components/services/ServicesGrid";
import WorkGrid from "./components/work/WorkGrid";
import ChooseUs from "./components/choose_us/page";
import Typewriter from "./components/Typewriter/Typewriter";
import FAQ from "./components/FAQ/FAQ";
import SEOOptimizer from "./components/SEOOptimizer/SEOOptimizer";
import AdvancedSchema from "./components/AdvancedSchema/AdvancedSchema";
import Testimonials from "./components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <SEOOptimizer />
      <AdvancedSchema 
        type="localBusiness" 
        data={{
          name: "MIVS Software Development",
          description: "Professional software development services including web development, mobile app development, cloud solutions, and AI/ML development.",
          services: ["Web Development", "Mobile App Development", "Cloud Solutions", "AI/ML Development"]
        }} 
      />
      <div className="min-h-screen bg-[#0a0a0f] pt-20">
        {/* Hero Section - Premium Midnight */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden" role="banner" aria-label="Hero section">
          {/* Mesh Gradient Background */}
          <div className="absolute inset-0 mesh-gradient"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {/* Gradient Orbs */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-[32rem] h-[32rem] bg-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
            
            {/* Animated Grid */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full bg-[linear-gradient(rgba(124,58,237,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.3)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            </div>

            {/* Floating Geometric Shapes */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-purple-500/40 rounded-lg rotate-45 animate-spin-slow"></div>
              <div className="absolute top-1/3 right-1/3 w-16 h-16 border-2 border-cyan-400/40 rounded-full animate-spin-slow-reverse"></div>
              <div className="absolute bottom-1/4 left-1/3 w-24 h-24 border-2 border-blue-500/30 rotate-12 animate-spin-slow"></div>
              <div className="absolute bottom-1/3 right-1/4 w-14 h-14 border-2 border-purple-400/40 rounded-lg rotate-45 animate-spin-slow-reverse"></div>
            </div>

            {/* Glowing Particles */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-purple-400 rounded-full animate-glow"></div>
              <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-glow" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-1/3 left-2/3 w-2 h-2 bg-blue-400 rounded-full animate-glow" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-purple-300 rounded-full animate-glow" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>

          {/* Floating Code Snippets */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-20 left-10 text-purple-400 text-xl font-mono animate-float">
              &lt;Component /&gt;
            </div>
            <div className="absolute top-40 right-20 text-cyan-400 text-lg font-mono animate-float" style={{animationDelay: '1s'}}>
              const data = useQuery()
            </div>
            <div className="absolute bottom-32 left-20 text-blue-400 text-lg font-mono animate-float" style={{animationDelay: '2s'}}>
              async function() { }
            </div>
            <div className="absolute bottom-20 right-10 text-purple-400 text-xl font-mono animate-float" style={{animationDelay: '3s'}}>
              import React from &apos;react&apos;
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass rounded-full border border-purple-500/30 animate-scale-in">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-300">Premium Software Development</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
              Building Digital
              <span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent min-h-[1.2em] animate-gradient">
                <Typewriter 
                  texts={["Excellence", "Innovation", "Solutions"]} 
                  speed={150}
                  deleteSpeed={75}
                  delayBetweenTexts={2000}
                  initialDelay={500}
                />
              </span>
              for Modern Businesses
            </h1>

            <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              We create scalable, secure, and innovative software solutions including web development, mobile app development, cloud solutions, and AI/ML development that help businesses thrive in the digital age.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a 
                href="/contact" 
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 text-white font-semibold rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_20px_50px_rgba(124,58,237,0.5)] animate-pulse-glow overflow-hidden"
              >
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="/services" 
                className="px-8 py-4 glass border-2 border-purple-500/50 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:bg-purple-500/20 hover:border-purple-400 hover:scale-105"
              >
                View Our Services
              </a>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="glass-card rounded-xl p-6">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-slate-400 mt-1">Projects Delivered</div>
              </div>
              <div className="glass-card rounded-xl p-6">
                <div className="text-3xl font-bold gradient-text">98%</div>
                <div className="text-sm text-slate-400 mt-1">Client Satisfaction</div>
              </div>
              <div className="glass-card rounded-xl p-6">
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-slate-400 mt-1">Support Available</div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 animate-bounce">
            <span className="text-xs font-medium">Scroll to explore</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Services Preview Section */}
        <section className="py-24 bg-gradient-to-b from-[#0a0a0f] to-[#13131a] relative overflow-hidden" aria-label="Our services">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-40 left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              {/* Section Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass rounded-full border border-purple-500/20">
                <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
                <span className="text-sm font-medium text-slate-300">What We Offer</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our <span className="gradient-text">Services</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Comprehensive software development solutions tailored to your business needs
              </p>
            </div>

            <ServicesGrid limit={4} />

            <div className="text-center mt-16">
              <a 
                href="/services" 
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <span>Explore All Services</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose MIVS Section */}
        <div className="bg-gradient-to-b from-[#0a0a0f] to-[#13131a] ">
          <ChooseUs />
        </div>

        {/* Our Work Section - Modern Redesign */}
        <section className="py-32 relative overflow-hidden" aria-label="Our portfolio">
          {/* Elegant Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950"></div>
          
          {/* Subtle Accent Glows */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/25 rounded-full blur-[120px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Refined Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="text-sm font-medium text-slate-400">Our Portfolio</span>
              </div>

              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                Featured <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Real-world solutions that blend innovation with measurable business impact
              </p>
            </div>

            <WorkGrid limit={3} />

            {/* Elegant CTA */}
            <div className="text-center mt-20">
              <a 
                href="/portfolio" 
                className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white/5 border border-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <span className="text-lg">View All Projects</span>
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* Testimonials Section */}
        <Testimonials />
    </div>
    </>
  );
}