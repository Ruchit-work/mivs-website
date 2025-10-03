import CallToAction from "../components/CTA/CallToAction";
import AnimatedHero from "../components/Hero/AnimatedHero";
import Image from "next/image";

export default function Process() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-20">
      <AnimatedHero 
        title="Our Process"
        subtitle="A proven methodology from discovery to support that ships reliable software."
        backgroundImage="/images/process-hero.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Process Steps */}
        <div className="space-y-12 sm:space-y-20">
          {/* Step 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-500 text-white rounded-xl flex items-center justify-center font-bold text-xl mr-4 shadow-lg shadow-purple-500/30">
                  1
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Discovery & Planning</h2>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                We start by understanding your business goals, target audience, and technical requirements. Our team conducts thorough research and creates a detailed project roadmap.
              </p>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-center group">
                  <div className="w-6 h-6 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Requirements gathering
                </li>
                <li className="flex items-center group">
                  <div className="w-6 h-6 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Technical architecture design
                </li>
                <li className="flex items-center group">
                  <div className="w-6 h-6 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Project timeline creation
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="glass-card p-4 sm:p-8 rounded-2xl transition-all duration-300 hover:scale-105">
                <div className="w-full h-48 sm:h-64 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center overflow-hidden relative shadow-lg shadow-purple-500/30">
                 <Image src="/images/process_1.jpg" alt="Discovery & Planning" width={500} height={300} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 sm:gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-cyan-500 text-white rounded-xl flex items-center justify-center font-bold text-xl mr-4 shadow-lg shadow-cyan-500/30">
                  2
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Design & Prototyping</h2>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Our design team creates intuitive user interfaces and experiences. We develop wireframes, mockups, and interactive prototypes to visualize your solution.
              </p>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-center group">
                  <div className="w-6 h-6 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  User experience design
                </li>
                <li className="flex items-center group">
                  <div className="w-6 h-6 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Visual design creation
                </li>
                <li className="flex items-center group">
                  <div className="w-6 h-6 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Interactive prototyping
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="glass-card p-4 sm:p-8 rounded-2xl transition-all duration-300 hover:scale-105">
                <div className="w-full h-48 sm:h-64 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-xl overflow-hidden relative shadow-lg shadow-cyan-500/30">
                 <Image src="/images/designing.jpg" alt="Design & Prototyping" width={500} height={300} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-green-500 text-white rounded-xl flex items-center justify-center font-bold text-xl mr-4 shadow-lg shadow-green-500/30">
                  3
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Development & Testing</h2>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Our development team builds your solution using agile methodologies. We implement continuous testing and quality assurance throughout the development process.
              </p>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-center group">
                  <div className="w-6 h-6 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Agile development sprints
                </li>
                <li className="flex items-center group">
                  <div className="w-6 h-6 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Code review & quality assurance
                </li>
                <li className="flex items-center group">
                  <div className="w-6 h-6 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Continuous integration
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="glass-card p-4 sm:p-8 rounded-2xl transition-all duration-300 hover:scale-105">
                <div className="w-full h-48 sm:h-64 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl overflow-hidden relative shadow-lg shadow-green-500/30">
                <Image src="/images/dev.jpg" alt="Development" width={500} height={300} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 sm:gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-orange-500 text-white rounded-xl flex items-center justify-center font-bold text-xl mr-4 shadow-lg shadow-orange-500/30">
                  4
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Deployment & Launch</h2>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                We deploy your solution to production with zero downtime. Our team ensures smooth launch and provides comprehensive training and documentation.
              </p>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-center group">
                  <div className="w-6 h-6 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Production deployment
                </li>
                <li className="flex items-center group">
                  <div className="w-6 h-6 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Performance monitoring
                </li>
                <li className="flex items-center group">
                  <div className="w-6 h-6 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  User training & support
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="glass-card p-4 sm:p-8 rounded-2xl transition-all duration-300 hover:scale-105">
                <div className="w-full h-48 sm:h-64 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl overflow-hidden relative shadow-lg shadow-orange-500/30">
                  <Image src="/images/deploy.jpg" alt="Deployment & Launch" width={500} height={300} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-indigo-500 text-white rounded-xl flex items-center justify-center font-bold text-xl mr-4 shadow-lg shadow-indigo-500/30">
                  5
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Support & Maintenance</h2>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                We provide ongoing support and maintenance to ensure your solution continues to perform optimally. Our team is always available for updates and enhancements.
              </p>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-center group">
                  <div className="w-6 h-6 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  24/7 technical support
                </li>
                <li className="flex items-center group">
                  <div className="w-6 h-6 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Regular updates & patches
                </li>
                <li className="flex items-center group">
                  <div className="w-6 h-6 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Performance optimization
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="glass-card p-4 sm:p-8 rounded-2xl transition-all duration-300 hover:scale-105">
                <div className="w-full h-48 sm:h-64 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl overflow-hidden relative shadow-lg shadow-indigo-500/30">
                  <Image src="/images/support.jpg" alt="Support & Maintenance" width={500} height={300} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <CallToAction />
        </div>
      </div>
    </div>
  );
}
