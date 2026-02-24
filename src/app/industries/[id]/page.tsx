import type { Metadata } from "next";
import AnimatedHero from "@/app/components/Hero/AnimatedHero";
import Link from "next/link";
import Image from "next/image";
import { INDUSTRIES, type Industry } from "@/app/data/industries";

interface IndustryPageProps {
  params: Promise<{ id: string }>;
}

function getIndustry(id: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.id === id);
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { id } = await params;
  const ind = getIndustry(id);
  if (!ind) {
    return { title: "Industry not found | MIVS" };
  }
  return {
    title: `${ind.title} | Industry Solutions | MIVS`,
    description: ind.description,
    alternates: { canonical: `https://mivs.in/industries/${ind.id}` },
    openGraph: {
      title: `${ind.title} | MIVS`,
      description: ind.description,
      images: [{ url: "/images/banner.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function IndustryDetailsPage({ params }: IndustryPageProps) {
  const { id } = await params;
  const industry = getIndustry(id);
  if (!industry) {
    return (
      <div className="min-h-screen bg-[#171717] pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Industry not found</h1>
          <p className="text-slate-400">The requested industry does not exist.</p>
          <Link href="/industries" className="inline-block mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold">Back to Industries</Link>
        </div>
      </div>
    );
  }

  // Additional, industry-specific rich content
  const CONTENT: Record<string, {
    useCases: string[];
    kpis: string[];
    compliance: string[];
    tools: string[];
  }> = {
    healthcare: {
      useCases: [
        'Patient portal & telemedicine',
        'EHR integration & interoperability',
        'AI‑assisted diagnostics & triage',
        'Remote monitoring & IoMT'
      ],
      kpis: ['88% onboarding time reduction', '94% error reduction', '99.9% uptime', 'HIPAA compliance score'],
      compliance: ['HIPAA', 'HL7/FHIR', 'SOC 2', 'GDPR'],
      tools: ['FHIR/HL7', 'AWS HealthLake', 'Python', 'TensorFlow', 'PostgreSQL']
    },
    finance: {
      useCases: [
        'Digital banking & wallets',
        'Fraud detection & AML',
        'Core banking modernization',
        'Personalized insights & PFM'
      ],
      kpis: ['3s avg transaction time', '99.99% availability', 'Fraud detection recall >95%', 'PCI DSS pass rate'],
      compliance: ['PCI DSS', 'SOC 2', 'SOX', 'GDPR'],
      tools: ['Kafka', 'Spark', 'Kubernetes', 'Node.js', 'React']
    },
    retail: {
      useCases: ['Headless commerce', 'Omnichannel inventory', 'Recommendation engines', 'In‑store analytics'],
      kpis: ['85% faster page loads', '10x peak traffic handling', '35% cart recovery uplift', '>3% conversion uplift'],
      compliance: ['GDPR', 'CCPA', 'ISO 27001'],
      tools: ['Next.js', 'Redis', 'CDN', 'Stripe', 'ElasticSearch']
    },
    manufacturing: {
      useCases: ['Predictive maintenance', 'Supply chain visibility', 'MES integration', 'Digital twins'],
      kpis: ['35% operational cost reduction', '60% faster fulfillment', '99% inventory accuracy'],
      compliance: ['ISO 9001', 'ISO 27001', 'NIST CSF'],
      tools: ['Python', 'Timeseries DB', 'Grafana', 'Docker', 'MQTT']
    },
    education: {
      useCases: ['LMS & virtual classrooms', 'Assessment automation', 'Student analytics', 'Content delivery network'],
      kpis: ['78% engagement increase', '5000+ concurrent sessions', '99.9% availability'],
      compliance: ['FERPA', 'GDPR', 'ISO 27001'],
      tools: ['WebRTC', 'Next.js', 'Node.js', 'MongoDB', 'AWS']
    },
    'real-estate': {
      useCases: ['Property portals', '3D virtual tours', 'Lease automation', 'Tenant communication apps'],
      kpis: ['25% faster deal cycles', '30% ops efficiency', 'NPS +15'],
      compliance: ['GDPR', 'SOC 2'],
      tools: ['React', 'Three.js', 'PostgreSQL', 'Cloud Run']
    }
  };
  const extra = CONTENT[industry.id] ?? { useCases: [], kpis: [], compliance: [], tools: [] };

  return (
    <div className="min-h-screen bg-[#171717] pt-20">
      <AnimatedHero
        title={industry.title}
        subtitle={industry.description}
        backgroundImage={undefined}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {/* Breadcrumbs */}
        <nav className="text-sm text-slate-400">
          <Link href="/industries" className="hover:text-white">Industries</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">{industry.name}</span>
        </nav>
        {/* Overview */}
        <section className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 rounded-2xl p-6 bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
            <p className="text-slate-400 leading-relaxed">{industry.description}</p>
          </div>
          <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-3">Key facts</h3>
            <ul className="space-y-2 text-slate-400">
              <li>• Industry‑aligned solutions</li>
              <li>• Security & compliance ready</li>
              <li>• Scalable architecture</li>
            </ul>
          </div>
        </section>

        {/* Visual banner */}
        {industry.image && (
          <section>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-purple-500/10">
              <Image src={industry.image} alt={industry.title} width={1600} height={700} className="w-full h-[360px] md:h-[420px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
              <div className="absolute inset-0 p-6 md:p-8 flex items-end">
                <div className="grid md:grid-cols-2 gap-4 w-full">
                  <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-4">
                    <h3 className="text-white text-sm font-semibold mb-2">Common challenges</h3>
                    <ul className="text-slate-200 text-sm space-y-1 list-disc list-inside">
                      {industry.challenges.slice(0,3).map((ch) => (
                        <li key={ch}>{ch}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-4">
                    <h3 className="text-white text-sm font-semibold mb-2">Our solutions</h3>
                    <ul className="text-slate-200 text-sm space-y-1 list-disc list-inside">
                      {industry.solutions.slice(0,3).map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Challenges */}
        {/* Challenges moved into the image overlay above */}

        {/* Solutions */}
        {/* Solutions moved into the image overlay above */}

        {/* Why MIVS for this industry */}
        <section className="rounded-2xl p-6 bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">Why MIVS for {industry.name}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Industry‑experienced architects and SMEs',
              'Reference architectures and accelerators',
              'Security, privacy and compliance by design',
              'Outcome‑driven roadmaps with measurable KPIs',
              'Agile delivery and automation‑first mindset',
              'Runbook-driven operations & handover'
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                <span className="text-slate-300">{point}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Use cases */}
        {extra.useCases.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Top use cases</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {extra.useCases.map((u) => (
                <div key={u} className="rounded-2xl p-5 bg-white/5 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-2">{u}</h4>
                  <p className="text-slate-400">Delivered with scalable cloud, robust data pipelines, and secure integrations.</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* KPIs & Compliance */}
        {(extra.kpis.length > 0 || extra.compliance.length > 0) && (
          <section className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Key KPIs</h3>
              <ul className="space-y-2 text-slate-300">
                {extra.kpis.map((k) => (<li key={k}>• {k}</li>))}
              </ul>
            </div>
            <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Compliance & standards</h3>
              <ul className="space-y-2 text-slate-300">
                {extra.compliance.map((c) => (<li key={c}>• {c}</li>))}
              </ul>
            </div>
          </section>
        )}

        {/* Tooling */}
        {extra.tools.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Typical tooling</h2>
            <div className="flex flex-wrap gap-2">
              {extra.tools.map((t) => (
                <span key={t} className="px-3 py-1 rounded-lg bg-white/15 text-white border border-white/25 text-sm hover:border-purple-400/40 transition-colors">{t}</span>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold hover:scale-105 transition-transform">
            Discuss your {industry.name.toLowerCase()} needs
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </Link>
        </section>
      </div>
    </div>
  );
}


