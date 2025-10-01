export default function Support() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="relative overflow-hidden">
        <div className="relative h-[40vh] min-h-[300px] w-full bg-center bg-cover" style={{ backgroundImage: "url('/images/contact-hero.jpg')" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-[#060d2b]/80 via-[#060d2b]/60 to-[#060d2b]/85" />
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="px-4 w-full">
              <div className="max-w-3xl text-white text-center mx-auto animate-fade-up">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">Support</h1>
                <p className="mt-4 text-xl md:text-2xl text-white/85">We’re here to help. Find answers or reach our team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-gray-800">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-gray-200 rounded-2xl p-8">
            <h2 className="text-xl font-semibold mb-3">Documentation</h2>
            <p className="text-gray-700 mb-4">Read guides, FAQs, and best practices.</p>
            <a href="#" className="text-blue-600 font-semibold">Browse docs →</a>
          </div>
          <div className="border border-gray-200 rounded-2xl p-8">
            <h2 className="text-xl font-semibold mb-3">Contact Support</h2>
            <p className="text-gray-700 mb-4">Email us and we’ll respond within 24 hours.</p>
            <a href="mailto:admin@mivs.in" className="text-blue-600 font-semibold">admin@mivs.in →</a>
          </div>
          <div className="border border-gray-200 rounded-2xl p-8">
            <h2 className="text-xl font-semibold mb-3">Call Us</h2>
            <p className="text-gray-700 mb-4">Prefer to talk? We’re available during business hours.</p>
            <a href="tel:+916380541373" className="text-blue-600 font-semibold">+91 6380541373 →</a>
          </div>
        </div>
      </div>
    </div>
  );
}
