export default function Terms() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative h-[40vh] min-h-[300px] w-full bg-center bg-cover" style={{ backgroundImage: "url('/images/legal-hero.jpg')" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-[#060d2b]/80 via-[#060d2b]/60 to-[#060d2b]/85" />
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="px-4 w-full">
              <div className="max-w-3xl text-white text-center mx-auto animate-fade-up">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">Terms of Service</h1>
                <p className="mt-4 text-xl md:text-2xl text-white/85">Please read these terms carefully before using our services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-12 shadow-sm space-y-6 text-gray-800 leading-relaxed max-w-none">
          <h2>Use of Services</h2>
          <p>By engaging MIVS, you agree to use our services lawfully and in accordance with these terms and any applicable agreements.</p>

          <h2>Intellectual Property</h2>
          <p>Unless otherwise agreed in writing, all deliverables are owned by MIVS until full payment is received, after which ownership is transferred as per the agreement.</p>

          <h2>Payments</h2>
          <p>Invoices are payable according to the schedule in the project agreement. Late payments may result in pausing work.</p>

          <h2>Limitation of Liability</h2>
          <p>MIVS is not liable for indirect, incidental, or consequential damages arising from the use of our services.</p>

          <h2>Contact</h2>
          <p>Questions about these terms? Email <a href="mailto:admin@mivs.in">admin@mivs.in</a>.</p>
        </div>
      </div>
    </div>
  );
}
