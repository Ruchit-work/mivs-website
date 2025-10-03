"use client";
import { OUR_WORK } from "../../data/work";

export default function WorkGrid({ limit }: { limit?: number }) {
  const list = typeof limit === "number" ? OUR_WORK.slice(0, limit) : OUR_WORK;
  
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {list.map((p, index) => (
        <article 
          key={p.id} 
          className="group relative"
        >
          {/* Modern Card with Accent Line */}
          <div className="relative h-full">
            {/* Accent Line - Animated on hover */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-fuchsia-500 to-cyan-500 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
            
            {/* Card Content */}
            <div className="relative h-full pl-8 py-8 pr-6">
              {/* Project Number & Label */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 flex items-center justify-center border border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-300">
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div>
                  <span className="block text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1">
                    {p.label}
                  </span>
                  <div className="h-0.5 w-12 bg-gradient-to-r from-purple-500 to-transparent rounded-full"></div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:translate-x-2 transition-transform duration-300">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 leading-relaxed mb-6 text-sm">
                {p.description}
              </p>

              {/* Tags - Modern Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((t) => (
                  <span 
                    key={t} 
                    className="relative px-4 py-2 rounded-full text-xs font-medium overflow-hidden group/tag"
                    style={{
                      background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(6, 182, 212, 0.1))',
                      border: '1px solid rgba(124, 58, 237, 0.2)'
                    }}
                  >
                    <span className="relative z-10 text-slate-300 group-hover/tag:text-white transition-colors">
                      {t}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-cyan-500/0 opacity-0 group-hover/tag:opacity-100 transition-opacity duration-300"></div>
                  </span>
                ))}
              </div>

              {/* View Project Link */}
              {/* <div className="flex items-center gap-2 text-purple-400 font-medium text-sm group-hover:gap-4 transition-all duration-300">
                <span>Explore Project</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div> */}

              {/* Bottom Gradient Line */}
              <div className="absolute bottom-0 left-8 right-6 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
