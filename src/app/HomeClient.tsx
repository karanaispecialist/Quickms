"use client";

import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/about/AboutSection";
import ServicesSection from "@/components/services/ServicesSection";
import GlobalNetworkSection from "@/components/network/GlobalNetworkSection";
import PerformanceSection from "@/components/performance/PerformanceSection";
import ProjectCargoSection from "@/components/project-cargo/ProjectCargoSection";
import TrustSection from "@/components/trust/TrustSection";
import ContactCTASection from "@/components/contact-cta/ContactCTASection";
import Footer from "@/components/footer/Footer";

export default function HomeClient() {
  return (
    <div className="relative min-h-screen flex flex-col bg-brand-navy-dark text-white selection:bg-brand-orange selection:text-white">
      {/* Global Navigation Bar */}
      <Navbar />

      {/* Primary Landing Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About / Introduction Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Global Network & Scale Section */}
        <GlobalNetworkSection />

        {/* Operational Performance Section */}
        <PerformanceSection />

        {/* Project Cargo / Specialized Logistics Section */}
        <ProjectCargoSection />

        {/* Trust & Credibility Section */}
        <TrustSection />

        {/* Final Conversion CTA / Contact Section */}
        <ContactCTASection />
      </main>

      {/* Global Footer Section */}
      <Footer />

      {/* Neutral Scrolling Test Spacer */}
      <section
        aria-label="Scroll Test Spacer"
        className="min-h-screen w-full bg-[#f8fafc] text-neutral-dark flex flex-col justify-center items-center px-6"
      >
        <div className="max-w-xl text-center flex flex-col gap-4">
          <span className="text-[10px] font-mono tracking-widest text-brand-orange uppercase font-bold">
            Scroll Boundary Verification
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy">
            Navbar Morph Diagnostics
          </h2>
          <p className="text-sm text-neutral-muted leading-relaxed">
            This section exists solely to verify that the transparent navbar correctly morphs into
            the compact, floating light-background card state on scrolling past 90px.
          </p>
          <div className="mt-4 inline-flex items-center justify-center gap-2 text-xs font-semibold text-brand-orange">
            <span>Scroll back up to restore transparent state</span>
          </div>
        </div>
      </section>
    </div>
  );
}
