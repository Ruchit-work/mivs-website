export default function CallToAction() {
  return (
    <div className="glass-card rounded-2xl p-12 text-center text-white relative overflow-hidden border border-purple-500/30">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 blur-3xl"></div>
      
      {/* Animated Lightning Icon */}
      <div className="flex justify-center mb-6 relative z-10">
        <svg 
          className="w-24 h-24 text-purple-400 animate-pulse"
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
        </svg>
      </div>
      
      <h2 className="text-4xl font-bold mb-4 relative z-10">Ready to Start Your <span className="gradient-text">Project</span>?</h2>
      <p className="text-xl mb-8 text-slate-300 relative z-10">
        Let&apos;s discuss how we can help bring your ideas to life with our expert development services.
      </p>
      <a 
        href="/contact" 
        className="relative z-10 inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
      >
        <span>Get Started Today</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>
    </div>
  );
}
