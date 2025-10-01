export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative h-[40vh] min-h-[300px] w-full bg-center bg-cover" style={{ backgroundImage: "url('/images/legal-hero.jpg')" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-[#060d2b]/80 via-[#060d2b]/60 to-[#060d2b]/85" />
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="px-4 w-full">
              <div className="max-w-3xl text-white text-center mx-auto animate-fade-up">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">Privacy Policy</h1>
                <p className="mt-4 text-xl md:text-2xl text-white/85">Effective date: {new Date().getFullYear()}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-12 shadow-sm space-y-6 text-gray-800 leading-relaxed max-w-none">
          <h2>Information We Collect</h2>
          <p>We collect information you provide directly to us such as name, email, company, and project details when you contact us or request a quote.</p>

          <h2>How We Use Information</h2>
          <p>We use your information to respond to inquiries, provide services, improve our website, and communicate updates relevant to your requests.</p>

          <h2>Data Security</h2>
          <p>We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure.</p>

          <h2>Your Rights</h2>
          <p>You may request access, correction, or deletion of your personal data by contacting <a href="mailto:admin@mivs.in">admin@mivs.in</a>.</p>

          <h2>Contact</h2>
          <p>If you have questions about this policy, contact us at <a href="mailto:admin@mivs.in">admin@mivs.in</a>.</p>
        </div>
      </div>
    </div>
  );
}
