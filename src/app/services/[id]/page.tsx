import Link from "next/link";
import type { Metadata } from "next";
import { SERVICES, type ServiceItem } from "@/app/data/services";
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
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-heading text-2xl font-semibold text-slate-900 mb-2">Service not found</h1>
          <p className="text-slate-600">The service you are looking for does not exist.</p>
          <Link
            href="/services"
            className="inline-block mt-6 px-6 py-3 rounded-2xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
          >
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const heroBg = service.image || "/images/bg-1.jpg";
  const heroBgEncoded = encodeURI(heroBg).replace(/"/g, "%22");

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section
        className="relative pt-12 pb-10 overflow-hidden min-h-[14rem] flex flex-col justify-center"
        style={{
          backgroundImage: `url("${heroBgEncoded}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/85" aria-hidden />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
            {service.title}
          </h1>
          <p className="mt-3 text-base text-slate-600 leading-relaxed max-w-2xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="font-heading text-xl font-semibold text-slate-900 tracking-tight mb-4">Overview</h2>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </section>

            {service.features && service.features.length > 0 && (
              <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-slate-900 tracking-tight mb-6">Key Capabilities</h3>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-slate-600">{f}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {service.technologies && service.technologies.length > 0 && (
              <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-slate-900 tracking-tight mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-sm font-medium border border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h4 className="font-heading text-lg font-semibold text-slate-900 tracking-tight mb-3">Get Started</h4>
              <p className="text-slate-600 text-sm mb-4">
                Discuss how {service.title.toLowerCase()} can help your business.
              </p>
              <Link
                href="/contact"
                className="block text-center px-5 py-3 rounded-2xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
              >
                Talk to us
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h4 className="font-heading text-lg font-semibold text-slate-900 tracking-tight mb-4">Related Services</h4>
              <ul className="space-y-1">
                {SERVICES.filter((s) => s.id !== service.id).slice(0, 4).map((s) => (
                  <li key={s.id}>
                    <Link
                      href={`/services/${s.id}`}
                      className="flex items-center justify-between py-2.5 px-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
                    >
                      <span className="text-sm font-medium">{s.title}</span>
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <ServiceFAQ
            items={[
              { q: `What are ${service.title.toLowerCase()}?`, a: service.description },
              {
                q: `How does ${service.title.toLowerCase()} differ from traditional approaches?`,
                a: `We leverage modern architectures, automation, and cloud-native tooling to deliver faster time-to-value and better reliability than legacy approaches.`,
              },
              {
                q: `How do ${service.title.toLowerCase()} help in digital transformation?`,
                a: `They align technology with business outcomes, reduce risk, and accelerate delivery through best practices and proven processes.`,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
