import AnimatedHero from "../components/Hero/AnimatedHero";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <AnimatedHero 
        title="Pricing"
        subtitle="Simple, transparent plans for every stage."
        backgroundImage="/images/legal-hero.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Intro copy like screenshot */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">Pricing built for your business</h2>
          <p className="mt-6 text-lg text-gray-600">Every business is unique—your budget, process, and tech are constantly evolving. That’s why we craft customized pricing built to your needs.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our pricing prioritizes:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><span className="w-5 h-5 mr-3 rounded-full bg-teal-100 flex items-center justify-center"><svg className="w-3 h-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg></span>Business needs</li>
              <li className="flex items-start"><span className="w-5 h-5 mr-3 rounded-full bg-teal-100 flex items-center justify-center"><svg className="w-3 h-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg></span>Flexibility</li>
              <li className="flex items-start"><span className="w-5 h-5 mr-3 rounded-full bg-teal-100 flex items-center justify-center"><svg className="w-3 h-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg></span>Competitive pricing</li>
            </ul>
          </div>
          <div className="mt-8 md:mt-9">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><span className="w-5 h-5 mr-3 rounded-full bg-teal-100 flex items-center justify-center"><svg className="w-3 h-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg></span>Commitment to partnership</li>
              <li className="flex items-start"><span className="w-5 h-5 mr-3 rounded-full bg-teal-100 flex items-center justify-center"><svg className="w-3 h-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg></span>Budget alignment</li>
              <li className="flex items-start"><span className="w-5 h-5 mr-3 rounded-full bg-teal-100 flex items-center justify-center"><svg className="w-3 h-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg></span>Transparency</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Starter</h3>
            <p className="text-gray-600 mt-2">For MVPs and small projects</p>
            <div className="mt-6 text-4xl font-bold text-gray-900">$2k+</div>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• 2–4 week sprint</li>
              <li>• UI/UX + frontend</li>
              <li>• Basic backend</li>
            </ul>
          </div>

          {/* Growth */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm ring-1 ring-blue-100">
            <h3 className="text-xl font-semibold text-gray-900">Growth</h3>
            <p className="text-gray-600 mt-2">For growing products</p>
            <div className="mt-6 text-4xl font-bold text-gray-900">$8k+</div>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• 6–8 week delivery</li>
              <li>• Full‑stack + integrations</li>
              <li>• Testing & CI/CD</li>
            </ul>
          </div>

          {/* Scale */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Scale</h3>
            <p className="text-gray-600 mt-2">For enterprise initiatives</p>
            <div className="mt-6 text-4xl font-bold text-gray-900">Custom</div>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Dedicated team</li>
              <li>• Architecture & security</li>
              <li>• SLAs & 24/7 support</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-200">Talk to us</a>
        </div>
      </div>
    </div>
  );
}

