export default function CallToAction() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white relative overflow-hidden">
      {/* Animated Lightning Icon */}
      <div className="flex justify-center mb-6">
        <svg 
          className="w-24 h-24 text-blue-300 animate-pulse"
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
        </svg>
      </div>
      
      <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
      <p className="text-xl mb-8 opacity-90">
        Let's discuss how we can help bring your ideas to life with our expert development services.
      </p>
      <a 
        href="/contact" 
        className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center gap-2"
      >
        <span>Get Started Today</span>
      </a>
    </div>
  );
}
