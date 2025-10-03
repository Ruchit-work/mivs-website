interface AnimatedHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

export default function AnimatedHero({ title, subtitle, backgroundImage }: AnimatedHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="relative h-[60vh] min-h-[420px] w-full bg-center bg-cover"
        style={{
          backgroundImage: backgroundImage 
            ? `url('${backgroundImage}')`
            : "linear-gradient(135deg, #7c3aed 0%, #06b6d4 50%, #3b82f6 100%)"
        }}
      >
        {/* Strong Dark Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />
        
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 mesh-gradient opacity-40"></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-purple-500/40 rounded-lg rotate-45 animate-spin-slow"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border-2 border-cyan-400/40 rounded-full animate-float"></div>
          <div className="absolute bottom-32 left-40 w-40 h-40 border-2 border-purple-400/30 rotate-12 animate-spin-slow-reverse"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-cyan-400/40 rounded-lg rotate-45 animate-float"></div>
        </div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[linear-gradient(rgba(124,58,237,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.3)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-glow"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-glow" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-glow" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-purple-300 rounded-full animate-glow" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-cyan-300 rounded-full animate-glow" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/6 right-1/6 w-3 h-3 bg-purple-400 rounded-full animate-glow" style={{animationDelay: '2.5s'}}></div>
        </div>

        {/* Radial light effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Animated wave effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl text-center mx-auto animate-fade-up">
              <h1 className="hero-title text-5xl md:text-7xl font-bold leading-tight mb-6">{title}</h1>
              <p className="hero-subtitle text-xl md:text-2xl">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
