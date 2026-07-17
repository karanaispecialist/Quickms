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
      <Navbar light={true} />

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

    </div>
  );
}
