import AnimatedHero from "../components/Hero/AnimatedHero";

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <AnimatedHero 
        title="About MIVS"
        subtitle="We build scalable web, mobile, cloud, and AI solutions tailored to your business."
        backgroundImage="/images/about-hero.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Vision & Mission Banner */}
        <section className="relative overflow-hidden rounded-2xl mb-8">
          <div
            className="h-48 md:h-64 w-full bg-center bg-cover"
            style={{ backgroundImage: "url('/images/banner.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 h-full flex items-center justify-center px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Our Vision & Mission</h2>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To empower businesses with cutting-edge software solutions that enhance productivity, streamline operations, and drive growth in the digital age.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the leading software development company that transforms ideas into innovative digital solutions, setting new standards in technology excellence.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Professional Network</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We work with a curated network of highly skilled freelance professionals, ensuring you get the best experts for your specific project needs.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '💻', role: 'Full-Stack Developers', count: '20+', desc: 'MERN, Django, Next.js experts' },
              { icon: '📱', role: 'Mobile Developers', count: '15+', desc: 'React Native, Flutter specialists' },
              { icon: '🎨', role: 'UI/UX Designers', count: '12+', desc: 'Figma & Adobe Creative Suite pros' },
              { icon: '🤖', role: 'AI/ML Engineers', count: '10+', desc: 'TensorFlow, PyTorch, OpenAI' },
              { icon: '☁️', role: 'Cloud Architects', count: '8+', desc: 'AWS, GCP, Azure certified' },
              { icon: '🔒', role: 'Security Experts', count: '6+', desc: 'Penetration testing & compliance' },
              { icon: '📊', role: 'Data Scientists', count: '10+', desc: 'Analytics & visualization pros' },
              { icon: '⚙️', role: 'DevOps Engineers', count: '8+', desc: 'CI/CD & automation experts' },
            ].map((member, idx) => (
              <div 
                key={idx}
                className="text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg rounded-2xl border border-gray-200 bg-white p-6"
              >
                <div className="text-5xl mb-3">{member.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.role}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">{member.count}</div>
                <p className="text-gray-600 text-sm">{member.desc}</p>
              </div>
            ))}
          </div>

          {/* Info Banner */}
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Flexible Team Model</h4>
                <p className="text-gray-700 text-sm">
                  We hand-pick the right professionals for your project from our vetted network of experts. This flexible approach ensures you get specialized skills exactly when you need them, without the overhead of a large permanent team.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center transition-transform duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">We deliver exceptional quality in every project</p>
            </div>
            <div className="text-center transition-transform duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">We embrace cutting-edge technologies and methodologies</p>
            </div>
            <div className="text-center transition-transform duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-green-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600">We work closely with clients as partners</p>
            </div>
            <div className="text-center transition-transform duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-orange-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Timeliness</h3>
              <p className="text-gray-600">We deliver projects on time and within budget</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}