import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | MIVS",
  description: "Privacy policy for MIVS. How we collect, use, and protect your information.",
  alternates: { canonical: "https://mivs.in/privacy-policy" },
};

const SECTIONS = [
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use", label: "How We Use Information" },
  { id: "data-security", label: "Data Security" },
  { id: "your-rights", label: "Your Rights" },
  { id: "contact", label: "Contact" },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[var(--background)] pt-20">
      <section className="py-16 border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-slate-600">Effective date: {new Date().getFullYear()}</p>
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
              <section id="information-we-collect" className="scroll-mt-28">
                <h2 className="font-heading text-xl font-semibold text-slate-900 tracking-tight mb-4">Information We Collect</h2>
                <p>We collect information you provide directly to us such as name, email, company, and project details when you contact us or request a quote.</p>
              </section>
              <section id="how-we-use" className="scroll-mt-28">
                <h2 className="font-heading text-xl font-semibold text-slate-900 tracking-tight mb-4">How We Use Information</h2>
                <p>We use your information to respond to inquiries, provide services, improve our website, and communicate updates relevant to your requests.</p>
              </section>
              <section id="data-security" className="scroll-mt-28">
                <h2 className="font-heading text-xl font-semibold text-slate-900 tracking-tight mb-4">Data Security</h2>
                <p>We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure.</p>
              </section>
              <section id="your-rights" className="scroll-mt-28">
                <h2 className="font-heading text-xl font-semibold text-slate-900 tracking-tight mb-4">Your Rights</h2>
                <p>You may request access, correction, or deletion of your personal data by contacting <a href="mailto:mivs.work.gpt@gmail.com" className="text-indigo-600 hover:underline">mivs.work.gpt@gmail.com</a>.</p>
              </section>
              <section id="contact" className="scroll-mt-28">
                <h2 className="font-heading text-xl font-semibold text-slate-900 tracking-tight mb-4">Contact</h2>
                <p>If you have questions about this policy, contact us at <a href="mailto:mivs.work.gpt@gmail.com" className="text-indigo-600 hover:underline">mivs.work.gpt@gmail.com</a>.</p>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
