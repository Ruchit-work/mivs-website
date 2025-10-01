"use client";
import ServicesGrid from "./components/services/ServicesGrid";
import WorkGrid from "./components/work/WorkGrid";
import ChooseUs from "./components/choose_us/page";
import Typewriter from "./components/Typewriter/Typewriter";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1e3a5f] via-[#2563eb] to-[#06b6d4]">
          {/* Animated Background */}
          <div className="absolute inset-0">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] via-[#859eb5] to-[#9fb3b7] animate-pulse"></div>

            {/* Floating Particles */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-bounce delay-1000"></div>
              <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/30 rounded-full animate-bounce delay-2000"></div>
              <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white/25 rounded-full animate-bounce delay-3000"></div>
              <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-white/20 rounded-full animate-bounce delay-1000"></div>
              <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-white/30 rounded-full animate-bounce delay-4000"></div>
              <div className="absolute top-1/6 right-1/6 w-3 h-3 bg-white/25 rounded-full animate-bounce delay-5000"></div>
              <div className="absolute bottom-1/6 left-1/2 w-2 h-2 bg-white/20 rounded-full animate-bounce delay-2000"></div>
              <div className="absolute top-2/3 right-1/2 w-4 h-4 bg-white/30 rounded-full animate-bounce delay-3000"></div>
            </div>

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
            </div>

            {/* Floating Geometric Shapes */}
            <div className="absolute inset-0">
              <div className="absolute top-20 left-20 w-16 h-16 border border-white/20 rotate-45 animate-spin-slow"></div>
              <div className="absolute top-40 right-32 w-12 h-12 border border-white/15 rotate-12 animate-spin-slow-reverse"></div>
              <div className="absolute bottom-32 left-40 w-20 h-20 border border-white/25 rotate-45 animate-spin-slow"></div>
              <div className="absolute bottom-20 right-20 w-14 h-14 border border-white/20 rotate-12 animate-spin-slow-reverse"></div>
            </div>

            {/* Animated Wave Effect */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1e3a5f]/50 to-transparent">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-pulse"></div>
            </div>
          </div>

          {/* Floating Code Elements */}
          <div className="absolute top-20 left-10 text-white/20 text-2xl font-mono animate-float">
            &lt;div&gt;
          </div>
          <div className="absolute top-40 right-20 text-white/20 text-xl font-mono animate-float delay-1000">
            function()
          </div>
          <div className="absolute bottom-32 left-20 text-white/20 text-lg font-mono animate-float delay-2000">
            const app = { }
          </div>
          <div className="absolute bottom-20 right-10 text-white/20 text-xl font-mono animate-float delay-3000">
            import React
          </div>
          <div className="absolute top-60 left-1/3 text-white/15 text-lg font-mono animate-float delay-4000">
            useEffect()
          </div>
          <div className="absolute bottom-60 right-1/3 text-white/15 text-lg font-mono animate-float delay-5000">
            useState()
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Building Digital
              <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent min-h-[1.2em]">
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

            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              We create scalable, secure, and innovative software solutions that help businesses thrive in the digital age.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/contact" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Start Your Project
              </a>
              <a href="/services" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300">
                View Our Services
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Services Preview Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive software development solutions tailored to your business needs
              </p>
            </div>

            <ServicesGrid limit={4} />

            <div className="text-center mt-12">
              <a 
                href="/services" 
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span>Explore All Services</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose MIVS Section (compact) */}
        <ChooseUs />
        {/* Our Work Section - Modern Design */}
        <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full">
                  Our Portfolio
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Real-world solutions that blend innovation with measurable business impact.
              </p>
            </div>

            <WorkGrid limit={3} />

            {/* CTA Button */}
            <div className="text-center mt-16">
              <a 
                href="/portfolio" 
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span>View All Projects</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </section>
    </div>
    </>
  );
}