import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | MIVS",
  description: "Terms of service for MIVS AI automation and consulting engagements.",
  alternates: { canonical: "https://mivs.in/terms" },
};

const SECTIONS = [
  { id: "use-of-services", label: "Use of Services" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "payments", label: "Payments" },
  { id: "limitation-of-liability", label: "Limitation of Liability" },
  { id: "contact", label: "Contact" },
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-[var(--background)] pt-20">
      <section className="py-16 border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-2 text-slate-600">Please read these terms before using our services.</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-16">
          <aside className="hidden lg:block w-52 shrink-0">
            <nav className="sticky top-28 space-y-2" aria-label="Table of contents">
              {SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block text-sm text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </aside>
          <main className="min-w-0 max-w-3xl">
            <div className="space-y-14 text-slate-700 leading-relaxed">
              <section id="use-of-services" className="scroll-mt-28">
                <h2 className="font-heading text-xl font-semibold text-slate-900 tracking-tight mb-4">Use of Services</h2>
                <p>By engaging MIVS, you agree to use our services lawfully and in accordance with these terms and any applicable agreements.</p>
              </section>
              <section id="intellectual-property" className="scroll-mt-28">
                <h2 className="font-heading text-xl font-semibold text-slate-900 tracking-tight mb-4">Intellectual Property</h2>
                <p>Unless otherwise agreed in writing, all deliverables are owned by MIVS until full payment is received, after which ownership is transferred as per the agreement.</p>
              </section>
              <section id="payments" className="scroll-mt-28">
                <h2 className="font-heading text-xl font-semibold text-slate-900 tracking-tight mb-4">Payments</h2>
                <p>Invoices are payable according to the schedule in the project agreement. Late payments may result in pausing work.</p>
              </section>
              <section id="limitation-of-liability" className="scroll-mt-28">
                <h2 className="font-heading text-xl font-semibold text-slate-900 tracking-tight mb-4">Limitation of Liability</h2>
                <p>MIVS is not liable for indirect, incidental, or consequential damages arising from the use of our services.</p>
              </section>
              <section id="contact" className="scroll-mt-28">
                <h2 className="font-heading text-xl font-semibold text-slate-900 tracking-tight mb-4">Contact</h2>
                <p>Questions about these terms? Email <a href="mailto:admin@mivs.in" className="text-indigo-600 hover:underline">admin@mivs.in</a>.</p>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
