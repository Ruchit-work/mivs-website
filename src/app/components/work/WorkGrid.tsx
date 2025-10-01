import { OUR_WORK } from "../../data/work";

export default function WorkGrid({ limit }: { limit?: number }) {
  const list = typeof limit === "number" ? OUR_WORK.slice(0, limit) : OUR_WORK;
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
      {list.map((p, index) => (
        <article 
          key={p.id} 
          className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
        >
          {/* Number Badge */}
          <div className="absolute top-4 left-4 z-10 w-12 h-12 bg-gradient-to-br from-[#1e3a5f] to-[#06b6d4] rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">{String(index + 1).padStart(2, '0')}</span>
          </div>

          {/* Gradient Header with Icon */}
          <div className="relative h-56 bg-gradient-to-br from-[#1e3a5f] via-[#2563eb] to-[#06b6d4] overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 right-10 w-20 h-20 border-2 border-white rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
              <div className="absolute bottom-10 left-10 w-16 h-16 border-2 border-white/60 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
            </div>
            
            {/* Label */}
            <div className="relative h-full flex items-center justify-center p-6">
              <div className="text-center">
                <div className="text-white/80 text-sm font-medium mb-2 uppercase tracking-wider">{p.label}</div>
                <h3 className="text-2xl font-bold text-white leading-tight">{p.title}</h3>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">{p.description}</p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span 
                  key={t} 
                  className="px-3 py-1 bg-cyan-50 text-[#1e3a5f] text-xs font-medium rounded-lg border border-cyan-200"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* View Project Link */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <button className="group/btn flex items-center gap-2 text-[#1e3a5f] font-semibold hover:text-[#06b6d4] transition-colors">
                <span>View Details</span>
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

