"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown, Settings, Server, ShoppingBag, Plus } from "lucide-react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";

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

function IndustriesHero() {
  const handleScrollToDirectory = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("industries-directory");
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
      aria-label="Industries Introduction"
      className="relative w-full min-h-[100svh] flex flex-col justify-end overflow-hidden bg-[#F8FAFC]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/industries-hero.webp"
          alt="Abstract global industrial supply chains overlay"
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
          <span>INDUSTRIES WE SERVE</span>
          <span className="text-brand-orange">]</span>
        </motion.div>

        {/* Headline */}
        <h1 className="flex flex-col text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] text-brand-navy select-none">
          <span className="relative block overflow-hidden py-1">
            <motion.span initial="hidden" animate="visible" variants={lineVariants} className="block">
              LOGISTICS
            </motion.span>
          </span>
          <span className="relative block overflow-hidden py-1">
            <motion.span initial="hidden" animate="visible" variants={lineVariants} className="block text-brand-orange">
              BUILT FOR YOUR
            </motion.span>
          </span>
          <span className="relative block overflow-hidden py-1">
            <motion.span initial="hidden" animate="visible" variants={lineVariants} className="block text-brand-orange">
              INDUSTRY.
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
          Every industry has different logistics requirements. Quickmas adapts integrated freight, customs, warehousing, transportation, and project cargo solutions to meet those operational needs.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={revealVariants}
          className="flex flex-wrap items-center gap-4 mt-2"
        >
          <a
            href="#industries-directory"
            onClick={handleScrollToDirectory}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-orange text-white text-xs font-bold uppercase tracking-widest rounded-[2px] hover:bg-brand-orange-hover transition-colors duration-300 focus-ring shadow-lg shadow-brand-orange/20 group w-full sm:w-auto"
          >
            <span>Explore Industries</span>
            <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-neutral-200 hover:border-brand-navy text-brand-navy text-xs font-bold uppercase tracking-widest rounded-[2px] hover:bg-brand-navy/5 transition-colors duration-300 focus-ring w-full sm:w-auto"
          >
            <span>Discuss Requirements</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-neutral-200" />
    </section>
  );
}

// ─── 02 INDUSTRY PHILOSOPHY SECTION ──────────────────────────────────────────

function IndustryPhilosophy() {
  return (
    <section
      aria-label="Industry Logistics Philosophy"
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
              <span className="text-brand-orange">02 —</span>
              <span>Philosophy</span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1] uppercase"
            >
              ONE PARTNER. <br />
              <span className="text-brand-orange">MULTIPLE SECTORS.</span>
            </motion.h2>
          </div>

          {/* Right Column — Narrative */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
            className="col-span-12 lg:col-span-8 flex flex-col gap-8 text-sm md:text-base text-neutral-light/70 leading-relaxed font-medium"
          >
            <p>
              Logistics requirements are rarely uniform. Depending on the cargo type, urgency, regulatory compliance, storage specifications, and final distribution channels, the logistics configuration must adapt dynamically.
            </p>
            <p>
              Quickmas avoids rigid, pre-packaged setups. We configure our freight, customs, warehousing, and transportation services to match the specific operational constraints of the sectors we serve.
            </p>
            <p>
              Our goal is to act as a single, coordinated logistics partner that understands the distinct rules of each industry, ensuring cargo compliance and delivery safety across every border.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── 03 INDUSTRIES DIRECTORY SECTION ─────────────────────────────────────────

function IndustriesDirectory() {
  const industries = [
    {
      icon: Settings,
      number: "01",
      name: "INDUSTRIAL & INFRASTRUCTURE",
      description: "Coordinating movement of heavy machinery, steel assets, raw metals, and infrastructure engineering cargo.",
      considerations: "Oversized weight profiles, physical route survey clearances, specialized crane loading, and port drayage coordination.",
      services: ["Project Cargo", "Ocean Freight", "Primary Transportation"],
    },
    {
      icon: Server,
      number: "02",
      name: "TECHNOLOGY & ELECTRONICS",
      description: "Managing supply chain connections for high-value tech hardware, server rack components, and telecommunication infrastructure.",
      considerations: "Time-critical air shipping, high security handoffs, border customs clearance speed, and NASSCOM-standard IT logistics compliance.",
      services: ["Air Freight", "Customs Brokerage", "Primary Transportation"],
    },
    {
      icon: ShoppingBag,
      number: "03",
      name: "RETAIL & CONSUMER GOODS",
      description: "Coordinating inventory flows, e-commerce order preparation, pallet warehousing, and domestic retail distribution.",
      considerations: "Inventory stock visibility, accurate pick & pack execution, cargo labelling, and coordinated hub-to-hub transfers.",
      services: ["Warehousing & 3PL", "Primary Transportation", "Customs Brokerage"],
    },
  ];

  return (
    <section
      id="industries-directory"
      aria-label="Industries Directory"
      className="relative w-full bg-brand-navy-dark text-white py-24 md:py-32 overflow-hidden scroll-mt-20 border-b border-white/5"
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
              <span className="text-brand-orange">03 —</span>
              <span>Directory</span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1] uppercase"
            >
              SUPPORTED <br />
              <span className="text-brand-orange">SECTORS.</span>
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
              We focus strictly on the industries we are verified to support through client references and operational configurations. Every vertical has specific related services designed for compliance.
            </p>
          </motion.div>
        </div>

        {/* Directory List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="flex flex-col border-t border-white/[0.06]"
        >
          {industries.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={idx}
                variants={revealVariants}
                className="group border-b border-white/[0.06] py-10 md:py-14"
              >
                <div className="grid grid-cols-12 gap-6 lg:gap-8 items-start">
                  {/* Icon & Number */}
                  <div className="col-span-3 sm:col-span-2 lg:col-span-1 flex items-center gap-4">
                    <span className="font-mono text-xs text-brand-orange font-bold select-none">
                      {item.number}
                    </span>
                    <Icon className="w-5 h-5 text-neutral-light/40 group-hover:text-brand-orange transition-colors duration-300" />
                  </div>

                  {/* Title & Description */}
                  <div className="col-span-9 sm:col-span-10 lg:col-span-5 flex flex-col gap-2">
                    <h3 className="text-lg md:text-xl font-black tracking-tight uppercase text-white group-hover:text-brand-orange transition-colors duration-400 select-none">
                      {item.name}
                    </h3>
                    <p className="text-sm text-neutral-light/65 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>

                  {/* Operational Considerations */}
                  <div className="col-span-12 lg:col-span-4 lg:col-start-7 flex flex-col gap-3">
                    <div>
                      <span className="font-mono text-[9px] tracking-widest text-brand-orange font-bold uppercase block mb-1">
                        Logistics Considerations
                      </span>
                      <p className="text-xs text-neutral-light/50 leading-relaxed font-medium">
                        {item.considerations}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-1">
                      {item.services.map((service, sIdx) => (
                        <span
                          key={sIdx}
                          className="font-mono text-[9px] tracking-wider text-white/30 border border-white/5 bg-white/[0.01] px-2.5 py-1 rounded-[2px] uppercase font-bold"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 04 LOGISTICS CHALLENGES SECTION ────────────────────────────────────────

function LogisticsChallenges() {
  const challenges = [
    {
      title: "INTERNATIONAL MOVEMENT",
      description: "Coordinating multi-carrier handoffs and booking schedules across differing time zones and ocean routes.",
    },
    {
      title: "CUSTOMS COORDINATION",
      description: "Managing border documentation accuracy, tariff classifications, and local customs compliance checks.",
    },
    {
      title: "INVENTORY MANAGEMENT",
      description: "Maintaining clear records of stock levels, warehousing structures, and order fulfillment visibility.",
    },
    {
      title: "GROUND TRANSPORTATION",
      description: "Scheduling reliable drayage and cargo moves connecting factories, warehouses, and port terminals.",
    },
    {
      title: "MULTIMODAL PLANNING",
      description: "Synchronizing physical transfers from container ship or flight to cargo trucks without storage delays.",
    },
  ];

  return (
    <section
      aria-label="Common Logistics Challenges"
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
              <span className="text-brand-orange">04 —</span>
              <span>Challenges</span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1] uppercase"
            >
              NAVIGATING <br />
              <span className="text-brand-orange">COMPLEXITY.</span>
            </motion.h2>
          </div>

          {/* Right Column — Challenges List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="col-span-12 lg:col-span-8 flex flex-col border-t border-white/[0.06]"
          >
            {challenges.map((item, idx) => (
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

// ─── 05 INTEGRATED SOLUTIONS SECTION ─────────────────────────────────────────

function IntegratedSolutions() {
  const workflows = [
    {
      title: "TIME-CRITICAL CHAIN SEQUENCE",
      flow: ["Air Freight", "Customs Brokerage", "Primary Transportation"],
      description: "For high-value tech hardware and components requiring rapid trans-border movement, direct compliance handling, and immediate delivery to fulfillment sites.",
    },
    {
      title: "DISTRIBUTION & REPLENISHMENT SEQUENCE",
      flow: ["Ocean Freight", "Warehousing & 3PL", "Primary Transportation"],
      description: "For standard inventory replenishment requiring bulk sea cargo movement, structured storage allocation, e-commerce order preparation, and final transport distribution.",
    },
  ];

  return (
    <section
      aria-label="Integrated Logistics Solutions"
      className="relative w-full bg-brand-navy-dark text-white py-24 md:py-32 overflow-hidden border-b border-white/5"
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
              <span className="text-brand-orange">05 —</span>
              <span>Integrations</span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1] uppercase"
            >
              CONNECTED <br />
              <span className="text-brand-orange">FLOWS.</span>
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
              By combining freight, clearance, and storage capabilities, Quickmas establishes integrated sequences that eliminate operational friction between separate logistics links.
            </p>
          </motion.div>
        </div>

        {/* Integration Workflows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {workflows.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col border border-white/[0.06] rounded-[2px] p-8 bg-white/[0.01] select-none"
            >
              <h3 className="font-mono text-[10px] tracking-widest text-brand-orange font-bold uppercase mb-4">
                {item.title}
              </h3>

              {/* Connected Visual Labels */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {item.flow.map((step, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2">
                    {sIdx > 0 && <Plus className="w-3.5 h-3.5 text-white/20 shrink-0" />}
                    <span className="font-mono text-[9px] tracking-wider text-white border border-white/10 bg-white/5 px-2.5 py-1 rounded-[2px] uppercase font-bold">
                      {step}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-neutral-light/60 leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 06 WHY QUICKMAS SECTION ─────────────────────────────────────────────────

function WhyQuickmas() {
  const points = [
    {
      title: "INTEGRATED LOGISTICS",
      description: "Managing transit, customs compliance, and warehousing through a unified coordinate point to reduce overhead.",
    },
    {
      title: "ONE PARTNER",
      description: "Eliminating the administrative complexity of dealing with multiple isolated freight agents.",
    },
    {
      title: "COORDINATED EXECUTION",
      description: "Ensuring container handoffs, document transfers, and border clearances are synced directly with transit carriers.",
    },
    {
      title: "INTERNATIONAL NETWORK",
      description: "Reaching 181+ countries through our verified global partner network with local knowledge.",
    },
    {
      title: "MULTIMODAL CAPABILITIES",
      description: "Seamlessly combining sea, air, and ground transport options to meet dimensional and schedule constraints.",
    },
  ];

  return (
    <section
      aria-label="Why Choose Quickmas Across Industries"
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
              <span>Why Quickmas</span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1] uppercase"
            >
              THE QUICKMAS <br />
              <span className="text-brand-orange">DIFFERENCE.</span>
            </motion.h2>
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

// ─── 07 FINAL CTA SECTION ───────────────────────────────────────────────────

function IndustriesCTA() {
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
              THE RIGHT <br />
              <span className="text-brand-orange">SOLUTION.</span>
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
              Talk to our team about your industry&apos;s logistics requirements and we&apos;ll help identify the right combination of services.
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

export default function IndustriesClient() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#F8FAFC] text-neutral-dark selection:bg-brand-orange selection:text-white">
      {/* Global Navigation */}
      <Navbar light={true} />

      <main className="flex-grow">
        {/* 01 Hero */}
        <IndustriesHero />

        {/* 02 Philosophy */}
        <IndustryPhilosophy />

        {/* 03 Directory */}
        <IndustriesDirectory />

        {/* 04 Challenges */}
        <LogisticsChallenges />

        {/* 05 Integrated Solutions */}
        <IntegratedSolutions />

        {/* 06 Why Quickmas */}
        <WhyQuickmas />

        {/* 07 CTA */}
        <IndustriesCTA />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
