import ServicesGrid from "../components/services/ServicesGrid";
import CallToAction from "../components/CTA/CallToAction";
import AnimatedHero from "../components/Hero/AnimatedHero";

export default function Services() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-20">
      <AnimatedHero 
        title="Our Services"
        subtitle="We build scalable web, mobile, cloud, and AI solutions tailored to your business."
        backgroundImage="/images/services-hero.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Services Grid */}
        <div className="mb-16">
          <ServicesGrid />
        </div>

        {/* CTA Section */}
        <CallToAction />
      </div>
    </div>
  );
}
