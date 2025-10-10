// import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SERVICES, type ServiceItem } from "@/app/data/services";
import AnimatedHero from "@/app/components/Hero/AnimatedHero";
import ServiceFAQ from "@/app/components/FAQ/ServiceFAQ";

interface ServicePageProps {
  params: Promise<{ id: string }>;
}

function getService(id: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.id === id);
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { id } = await params;
  const svc = getService(id);
  if (!svc) {
    return {
      title: "Service not found | MIVS",
      description: "The requested service does not exist.",
    };
  }
  return {
    title: `${svc.title} | MIVS Services`,
    description: svc.description,
    openGraph: {
      title: `${svc.title} | MIVS Services`,
      description: svc.description,
      images: [
        { url: "/images/banner.jpg", width: 1200, height: 630, alt: svc.title },
      ],
    },
    alternates: { canonical: `https://mivs.in/services/${svc.id}` },
  };
}

export default async function ServiceDetailsPage({ params }: ServicePageProps) {
  const { id } = await params;
  const service = getService(id);
  if (!service) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Service not found</h1>
          <p className="text-slate-400">The service you are looking for does not exist.</p>
          <Link href="/services" className="inline-block mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold">Back to Services</Link>
        </div>
      </div>
    );
  }

  const heroImage = undefined;

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-20">
      <AnimatedHero
        title={service.title}
        subtitle={service.description}
        backgroundImage={heroImage}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
              <p className="text-slate-300 leading-relaxed">{service.description}</p>
            </section>

            {service.features && service.features.length > 0 && (
              <section className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Key Capabilities</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-300">{f}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {service.technologies && service.technologies.length > 0 && (
              <section className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-white/15 text-white border border-white/25 text-sm hover:border-purple-400/40 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="glass-card rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-white mb-3">Get Started</h4>
              <p className="text-slate-400 mb-4">Discuss how {service.title.toLowerCase()} can help your business.</p>
              <Link href="/contact" className="block text-center px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold">Talk to us</Link>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Related Services</h4>
              <ul className="space-y-2">
                {SERVICES.filter((s) => s.id !== service.id).slice(0, 4).map((s) => (
                  <li key={s.id}>
                    <Link href={`/services/${s.id}`} className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 text-slate-300 hover:text-white transition-colors">
                      <span>{s.title}</span>
                      <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* FAQ Section similar to reference */}
        <div className="mt-12">
          <ServiceFAQ
            items={[
              { q: `What are ${service.title.toLowerCase()}?`, a: service.description },
              { q: `How does ${service.title.toLowerCase()} differ from traditional approaches?`, a: `We leverage modern architectures, automation and cloud-native tooling to deliver faster time-to-value and better reliability than legacy approaches.` },
              { q: `How do ${service.title.toLowerCase()} help in digital transformation?`, a: `They align technology with business outcomes, reduce risk and accelerate delivery through best practices and proven processes.` },
            ]}
          />
        </div>
      </div>
    </div>
  );
}


