import AnimatedHero from "../components/Hero/AnimatedHero";

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-20">
      <AnimatedHero 
        title="About MIVS"
        subtitle="We build scalable web, mobile, cloud, and AI solutions tailored to your business."
        backgroundImage="/images/about-hero.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Vision & Mission Banner */}
        <section className="relative overflow-hidden rounded-2xl mb-12">
          <div
            className="h-48 md:h-64 w-full bg-center bg-cover"
            style={{ backgroundImage: "url('/images/banner.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 to-cyan-900/80" />
            <div className="relative z-10 h-full flex items-center justify-center px-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white text-center">Our Vision & <span className="gradient-text">Mission</span></h2>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="glass-card p-8 rounded-2xl group hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-slate-400 leading-relaxed">
              To empower businesses with cutting-edge software solutions that enhance productivity, streamline operations, and drive growth in the digital age.
            </p>
          </div>
          <div className="glass-card p-8 rounded-2xl group hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-slate-400 leading-relaxed">
              To be the leading software development company that transforms ideas into innovative digital solutions, setting new standards in technology excellence.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass rounded-full border border-purple-500/20">
              <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
              </svg>
              <span className="text-sm font-medium text-slate-300">Our Network</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Professional <span className="gradient-text">Network</span></h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              We work with a curated network of highly skilled freelance professionals, ensuring you get the best experts for your specific project needs.
            </p>
          </div>
          
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
                className="text-center glass-card rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{member.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{member.role}</h3>
                <div className="text-3xl font-bold gradient-text mb-2">{member.count}</div>
                <p className="text-slate-400 text-sm">{member.desc}</p>
              </div>
            ))}
          </div>

          {/* Info Banner */}
          <div className="mt-12 glass-card border border-purple-500/30 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Flexible Team Model</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We hand-pick the right professionals for your project from our vetted network of experts. This flexible approach ensures you get specialized skills exactly when you need them, without the overhead of a large permanent team.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="glass-card rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass rounded-full border border-purple-500/20">
              <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span className="text-sm font-medium text-slate-300">Core Values</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">Our <span className="gradient-text">Values</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quality</h3>
              <p className="text-slate-400">We deliver exceptional quality in every project</p>
            </div>
            <div className="text-center transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-500 rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
              <p className="text-slate-400">We embrace cutting-edge technologies and methodologies</p>
            </div>
            <div className="text-center transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-green-500/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Collaboration</h3>
              <p className="text-slate-400">We work closely with clients as partners</p>
            </div>
            <div className="text-center transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-orange-500/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Timeliness</h3>
              <p className="text-slate-400">We deliver projects on time and within budget</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
