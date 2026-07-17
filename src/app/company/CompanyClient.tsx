"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ArrowDown, ShieldCheck } from "lucide-react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import { membershipsData } from "@/components/trust/trust.data";

// ─── Animation Variants ──────────────────────────────────────────────────────

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const lineVariants = {
  hidden: { y: "110%" },
  visible: {
    y: 0,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

// ─── 01 HERO SECTION ────────────────────────────────────────────────────────

function CompanyHero() {
  const handleScrollToStory = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("our-story");
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
    }
  };

  return (
    <section
      aria-label="Company Introduction"
      className="relative w-full min-h-[100svh] flex flex-col justify-end overflow-hidden bg-[#F8FAFC]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/company-hero.webp"
          alt="Quickmas architectural corporate hub and logistics center"
          fill
          priority
          className="object-cover object-center grayscale opacity-80"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC]/55 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pt-40 pb-20 md:pb-28 flex flex-col items-start gap-8">
        {/* Eyebrow */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={revealVariants}
          className="flex items-center gap-2 font-mono text-[10px] md:text-xs tracking-[0.25em] text-neutral-dark/50 uppercase font-semibold"
        >
          <span className="text-brand-orange">[</span>
          <span>WHO WE ARE</span>
          <span className="text-brand-orange">]</span>
        </motion.div>

        {/* Headline */}
        <h1 className="flex flex-col text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] text-brand-navy select-none">
          <span className="relative block overflow-hidden py-1">
            <motion.span initial="hidden" animate="visible" variants={lineVariants} className="block">
              MOVING BUSINESS
            </motion.span>
          </span>
          <span className="relative block overflow-hidden py-1">
            <motion.span initial="hidden" animate="visible" variants={lineVariants} className="block text-brand-orange">
              WITH PURPOSE.
            </motion.span>
          </span>
        </h1>

        {/* Supporting Copy */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={revealVariants}
          className="text-sm md:text-base text-neutral-dark/80 max-w-xl leading-relaxed mt-2"
        >
          Quickmas Integrated Logistics delivers integrated logistics and supply chain solutions designed to connect businesses across borders with reliability, coordination, and long-term partnerships.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={revealVariants}
          className="flex flex-wrap items-center gap-4 mt-2"
        >
          <a
            href="#our-story"
            onClick={handleScrollToStory}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-orange text-white text-xs font-bold uppercase tracking-widest rounded-[2px] hover:bg-brand-orange-hover transition-colors duration-300 focus-ring shadow-lg shadow-brand-orange/20 group w-full sm:w-auto"
          >
            <span>Our Story</span>
            <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
          </a>

          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-neutral-200 hover:border-brand-navy text-brand-navy text-xs font-bold uppercase tracking-widest rounded-[2px] hover:bg-brand-navy/5 transition-colors duration-300 focus-ring w-full sm:w-auto"
          >
            <span>Explore Services</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-neutral-200 z-10" />
    </section>
  );
}

// ─── 02 OUR STORY SECTION ───────────────────────────────────────────────────

function CompanyStory() {
  return (
    <section
      id="our-story"
      aria-label="Our Story"
      className="relative w-full bg-[#050816] text-white py-24 md:py-32 overflow-hidden scroll-mt-20 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-16 items-start">
          {/* Left Column — Sticky Eyebrow / Headline */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.25em] text-neutral-muted uppercase font-bold"
            >
              <span className="text-brand-orange">02 —</span>
              <span>Our Story</span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1] uppercase"
            >
              WHO IS <br />
              <span className="text-brand-orange">QUICKMAS?</span>
            </motion.h2>
          </div>

          {/* Right Column — Editorial Narrative */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
            className="col-span-12 lg:col-span-8 flex flex-col gap-8 text-sm md:text-base text-neutral-light/70 leading-relaxed font-medium"
          >
            <p>
              Quickmas Integrated Logistics is a professional freight forwarding and supply chain solutions provider. We coordinate international cargo movements across major maritime lanes and airport corridors, bridging the gap between origins and destinations.
            </p>
            <p>
              Our services coordinate transport execution over every stage of the supply chain—encompassing air freight, ocean freight, road transportation, warehousing & 3PL, customs clearance, and specialized heavy-lift project cargo logistics.
            </p>
            <p>
              We operate under a simple operational philosophy: <strong className="text-white font-black">bringing connected clarity to logistics complexity</strong>. Rather than offering isolated transit steps, we focus on coordinated end-to-end cargo movements designed to keep supply chains moving dependably.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── 03 COMPANY PHILOSOPHY SECTION ──────────────────────────────────────────

function CompanyPhilosophy() {
  const philosophies = [
    {
      title: "CUSTOMER-FIRST LOGISTICS",
      description: "Designing solutions around the specific requirements of the businesses we serve, rather than forcing standard templates.",
    },
    {
      title: "INTEGRATED SUPPLY CHAINS",
      description: "Connecting air, ocean, ground transport, customs clearance, and warehousing into a single coordinated ecosystem.",
    },
    {
      title: "PRECISION EXECUTION",
      description: "Approaching every shipment with detailed document management, regulatory alignment, and coordinate checkpoints.",
    },
    {
      title: "LONG-TERM PARTNERSHIPS",
      description: "Focusing on consistent, dependable service that supports cargo safety, business trust, and ongoing supply chain health.",
    },
  ];

  return (
    <section
      aria-label="Company Philosophy"
      className="relative w-full bg-brand-navy-dark text-white py-24 md:py-32 overflow-hidden border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-16 items-start">
          {/* Left Column — Sticky Eyebrow / Headline */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.25em] text-neutral-muted uppercase font-bold"
            >
              <span className="text-brand-orange">03 —</span>
              <span>Philosophy</span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1] uppercase"
            >
              HOW WE <br />
              <span className="text-brand-orange">OPERATE.</span>
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-xs text-neutral-light/50 font-mono tracking-wider uppercase leading-relaxed max-w-xs"
            >
              Predefined operational principles guiding our teams and global carrier networks.
            </motion.p>
          </div>

          {/* Right Column — Philosophy List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="col-span-12 lg:col-span-8 flex flex-col border-t border-white/[0.06]"
          >
            {philosophies.map((item, idx) => (
              <motion.div
                key={idx}
                variants={revealVariants}
                className="group border-b border-white/[0.06] py-8 md:py-10"
              >
                <div className="grid grid-cols-12 gap-4 items-start">
                  <div className="col-span-2 md:col-span-1">
                    <span className="font-mono text-xs text-brand-orange font-bold tracking-widest">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="col-span-10 md:col-span-4">
                    <h3 className="text-sm md:text-base font-black tracking-tight uppercase text-white group-hover:text-brand-orange transition-colors duration-400 select-none leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <div className="col-span-12 md:col-span-7 md:col-start-6">
                    <p className="text-sm text-neutral-light/55 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── 04 NETWORK & SCALE SECTION ─────────────────────────────────────────────

function CompanyNetwork() {
  const stats = [
    { value: "181+", label: "COUNTRIES REACHED" },
    { value: "12,000+", label: "OVERSEAS PARTNERS" },
    { value: "29+", label: "NETWORK LOCATIONS" },
    { value: "35,000+", label: "SQ FT WAREHOUSING" },
    { value: "3", label: "BRANCH OFFICES" },
    { value: "50+", label: "ACTIVE CLIENTS" },
    { value: "7+ CRORE", label: "SALES VOLUME" },
    { value: "15+", label: "LOGISTICS TEAM" },
  ];

  return (
    <section
      aria-label="Network and Scale"
      className="relative w-full bg-[#050816] text-white py-24 md:py-32 overflow-hidden border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-16 items-start mb-16">
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.25em] text-neutral-muted uppercase font-bold"
            >
              <span className="text-brand-orange">04 —</span>
              <span>Network & Scale</span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1] uppercase"
            >
              OUR REACH <br />
              <span className="text-brand-orange">IN FIGURES.</span>
            </motion.h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
            className="col-span-12 lg:col-span-8 text-sm md:text-base text-neutral-light/70 leading-relaxed font-medium lg:pt-2"
          >
            <p>
              Quickmas integrates global capabilities with extensive domestic coverage. Our verified metrics demonstrate our capacity to support supply chain requirements at scale, matching international standards with consistent ground-level execution.
            </p>
          </motion.div>
        </div>

        {/* Stats Grid Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={revealVariants}
              className="flex flex-col border border-white/[0.06] rounded-[2px] py-8 px-6 bg-white/[0.01] select-none text-center"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-none text-brand-orange">
                {stat.value}
              </span>
              <span className="font-mono text-[9px] tracking-[0.2em] text-neutral-light/50 uppercase font-bold mt-3">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 05 WHY QUICKMAS SECTION ─────────────────────────────────────────────────

function CompanyWhy() {
  const points = [
    {
      title: "INTEGRATED LOGISTICS",
      description: "Managing transit, customs compliance, and warehousing through a unified coordinate point.",
    },
    {
      title: "MULTIMODAL COORDINATION",
      description: "Synchronizing air, ocean, and ground transport nodes based on cargo timing requirements.",
    },
    {
      title: "CUSTOMS BROKERAGE",
      description: "Aligning import and export documentation with regulatory requirements to manage border clearance smoothly.",
    },
    {
      title: "WAREHOUSING & 3PL",
      description: "Organizing pallet storage, order fulfillment, and distribution readiness to optimize inventory flow.",
    },
    {
      title: "PROJECT CARGO",
      description: "Planning physical route surveys and coordinate crane handling for oversized heavy-lift machinery.",
    },
    {
      title: "END-TO-END EXECUTION",
      description: "Overseeing shipments from initial packaging discussion through port gateways to final delivery confirmation.",
    },
  ];

  return (
    <section
      aria-label="Why Choose Quickmas"
      className="relative w-full bg-brand-navy-dark text-white py-24 md:py-32 overflow-hidden border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-16 items-start">
          {/* Left Column — Sticky Eyebrow / Headline */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.25em] text-neutral-muted uppercase font-bold"
            >
              <span className="text-brand-orange">05 —</span>
              <span>Why Quickmas</span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1] uppercase"
            >
              WHY COMPANIES <br />
              <span className="text-brand-orange">TRUST US.</span>
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-xs text-neutral-light/50 font-mono tracking-wider uppercase leading-relaxed max-w-xs"
            >
              Key differentiators driving our logistics services.
            </motion.p>
          </div>

          {/* Right Column — Points List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="col-span-12 lg:col-span-8 flex flex-col border-t border-white/[0.06]"
          >
            {points.map((item, idx) => (
              <motion.div
                key={idx}
                variants={revealVariants}
                className="group border-b border-white/[0.06] py-8 md:py-10"
              >
                <div className="grid grid-cols-12 gap-4 items-start">
                  <div className="col-span-2 md:col-span-1">
                    <span className="font-mono text-xs text-brand-orange font-bold tracking-widest">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="col-span-10 md:col-span-4">
                    <h3 className="text-sm md:text-base font-black tracking-tight uppercase text-white group-hover:text-brand-orange transition-colors duration-400 select-none leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <div className="col-span-12 md:col-span-7 md:col-start-6">
                    <p className="text-sm text-neutral-light/55 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── 06 MEMBERSHIPS & CERTIFICATIONS SECTION ─────────────────────────────────

function CompanyMemberships() {
  return (
    <section
      aria-label="Memberships and Certifications"
      className="relative w-full bg-[#050816] text-white py-24 md:py-32 overflow-hidden border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-16 items-start">
          {/* Left Column — Sticky Eyebrow / Headline */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.25em] text-neutral-muted uppercase font-bold"
            >
              <span className="text-brand-orange">06 —</span>
              <span>Credibility</span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1] uppercase"
            >
              MEMBERSHIPS & <br />
              <span className="text-brand-orange">STANDARDS.</span>
            </motion.h2>
          </div>

          {/* Right Column — Certifications List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="col-span-12 lg:col-span-8 flex flex-col border-t border-white/[0.06]"
          >
            {membershipsData.map((item, idx) => (
              <motion.div
                key={idx}
                variants={revealVariants}
                className="group border-b border-white/[0.06] py-10 md:py-12"
              >
                <div className="grid grid-cols-12 gap-4 items-start">
                  {/* Icon Accent */}
                  <div className="col-span-2 md:col-span-1">
                    <ShieldCheck className="w-5 h-5 text-brand-orange" />
                  </div>
                  {/* Standard Name */}
                  <div className="col-span-10 md:col-span-4">
                    <h3 className="text-lg font-black tracking-tight uppercase text-white group-hover:text-brand-orange transition-colors duration-400 select-none leading-none">
                      {item.name}
                    </h3>
                  </div>
                  {/* Details */}
                  <div className="col-span-12 md:col-span-7 md:col-start-6">
                    <span className="font-mono text-[9px] tracking-widest text-brand-orange font-bold uppercase block mb-1">
                      {item.type}
                    </span>
                    <p className="text-xs text-neutral-light/55 font-mono uppercase tracking-wide leading-relaxed mt-1">
                      Verified industry certification supporting logistics compliance and management quality.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── 09 FINAL CTA SECTION ───────────────────────────────────────────────────

function CompanyCTA() {
  return (
    <section
      aria-label="Request Information"
      className="relative w-full bg-brand-navy-dark text-white py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-16 items-start">
          {/* Left Column: Headline */}
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.25em] text-neutral-muted uppercase font-bold"
            >
              <span className="text-brand-orange">07 —</span>
              <span>Start a Conversation</span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] uppercase select-none"
            >
              LET&apos;S BUILD <br />
              YOUR NEXT <br />
              <span className="text-brand-orange">SUPPLY CHAIN.</span>
            </motion.h2>
          </div>

          {/* Right Column: Description & CTAs */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-8 lg:pt-8">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-sm md:text-base text-neutral-light/70 leading-relaxed font-medium"
            >
              Whether you&apos;re moving urgent cargo, managing global trade, or planning specialized logistics, our team is ready to help coordinate your operational needs.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-brand-orange text-white text-xs font-bold uppercase tracking-widest rounded-[2px] hover:bg-brand-orange-hover transition-colors duration-300 focus-ring shadow-lg shadow-brand-orange/10 group"
              >
                <span>Contact Our Team</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 hover:border-white/30 text-white text-xs font-bold uppercase tracking-widest rounded-[2px] hover:bg-white/5 transition-colors duration-300 focus-ring"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── MAIN COMPONENT ─────────────────────────────────────────────────────────

export default function CompanyClient() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#F8FAFC] text-neutral-dark selection:bg-brand-orange selection:text-white">
      {/* Global Navigation */}
      <Navbar light={true} />

      <main className="flex-grow">
        {/* 01 Hero */}
        <CompanyHero />

        {/* 02 Story */}
        <CompanyStory />

        {/* 03 Philosophy */}
        <CompanyPhilosophy />

        {/* 04 Network */}
        <CompanyNetwork />

        {/* 05 Why Quickmas */}
        <CompanyWhy />

        {/* 06 Memberships */}
        <CompanyMemberships />

        {/* 09 CTA */}
        <CompanyCTA />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
