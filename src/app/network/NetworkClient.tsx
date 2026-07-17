"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
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

function NetworkHero() {
  const handleScrollToMap = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("network-map-section");
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
      aria-label="Network Introduction"
      className="relative w-full min-h-[100svh] flex flex-col justify-end overflow-hidden bg-[#F8FAFC]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/network-hero.webp"
          alt="High-tech digital network routes background"
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
          <span>GLOBAL LOGISTICS REACH</span>
          <span className="text-brand-orange">]</span>
        </motion.div>

        {/* Headline */}
        <h1 className="flex flex-col text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] text-brand-navy select-none">
          <span className="relative block overflow-hidden py-1">
            <motion.span initial="hidden" animate="visible" variants={lineVariants} className="block">
              CONNECTED
            </motion.span>
          </span>
          <span className="relative block overflow-hidden py-1">
            <motion.span initial="hidden" animate="visible" variants={lineVariants} className="block text-brand-orange">
              ACROSS
            </motion.span>
          </span>
          <span className="relative block overflow-hidden py-1">
            <motion.span initial="hidden" animate="visible" variants={lineVariants} className="block text-brand-orange">
              THE WORLD.
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
          Quickmas works through a global logistics network to coordinate international freight, customs, warehousing, transportation, and project cargo across worldwide markets.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={revealVariants}
          className="flex flex-wrap items-center gap-4 mt-2"
        >
          <a
            href="#network-map-section"
            onClick={handleScrollToMap}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-orange text-white text-xs font-bold uppercase tracking-widest rounded-[2px] hover:bg-brand-orange-hover transition-colors duration-300 focus-ring shadow-lg shadow-brand-orange/20 group w-full sm:w-auto"
          >
            <span>Explore the Network</span>
            <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-neutral-200 z-10" />
    </section>
  );
}

// ─── 02 GLOBAL REACH SECTION ─────────────────────────────────────────────────

function GlobalReach() {
  return (
    <section
      aria-label="Global Reach Overview"
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
              <span>Global Reach</span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1] uppercase"
            >
              THE POWER OF <br />
              <span className="text-brand-orange">COORDINATION.</span>
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
              Moving cargo internationally is rarely direct. True global connectivity depends on trusted logistics partnerships, strict compliance coordination, and local execution across differing borders, ports, and transport systems.
            </p>
            <p>
              Quickmas coordinates international movements by collaborating with a pre-screened alliance of overseas agents and partners. This ecosystem provides localized coverage across 181+ countries, connecting air and ocean trade lanes seamlessly.
            </p>
            <p>
              Rather than maintaining proprietary depots worldwide, our strategy leverages specialized local expertise in each region. This approach supports faster customs coordination, efficient local drayage, and responsive tracking handlers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── 03 & 04 INTERACTIVE MAP & STATS SECTION ────────────────────────────────

function NetworkMapSection() {
  const [activeStat, setActiveStat] = useState(0);

  const hubs = [
    { id: "BOM", name: "Mumbai (HQ)", x: 375, y: 155, isCentral: true },
    { id: "NYC", name: "New York", x: 170, y: 105, isCentral: false },
    { id: "ROT", name: "Rotterdam", x: 310, y: 85, isCentral: false },
    { id: "SIN", name: "Singapore", x: 440, y: 185, isCentral: false },
    { id: "SYD", name: "Sydney", x: 520, y: 245, isCentral: false },
  ];

  const routes = [
    { id: "bom-nyc", d: "M 375 155 Q 260 100 170 105" },
    { id: "bom-rot", d: "M 375 155 Q 330 110 310 85" },
    { id: "bom-sin", d: "M 375 155 Q 410 170 440 185" },
    { id: "bom-syd", d: "M 375 155 Q 460 200 520 245" },
  ];

  const stats = [
    {
      value: "181+",
      label: "COUNTRIES REACHED",
      description: "CONNECTING THRU OUR GLOBAL AGENT NETWORK ACROSS MAJOR OCEAN LANES AND AIR CORRIDORS.",
    },
    {
      value: "12,000+",
      label: "OVERSEAS PARTNERS",
      description: "ALLIANCE OF GLOBAL CARRIER AGENTS INTEGRATING BORDER CLEARANCE AND FINAL ROAD TRANSIT.",
    },
    {
      value: "29+",
      label: "NETWORK LOCATIONS",
      description: "REGIONAL OFFICES AND CHECKPOINTS COVERS INDIA'S MAIN TRADE HUBS, AIRPORTS AND SEAPORTS.",
    },
  ];

  const globalOpacity = activeStat === 0 ? 1 : activeStat === 1 ? 0.75 : 0.5;
  const routeOpacity = activeStat === 1 ? 1 : activeStat === 0 ? 0.6 : 0.2;
  const indiaHighlight = activeStat === 2;

  return (
    <section
      id="network-map-section"
      aria-label="Interactive World Map and Stats"
      className="relative w-full bg-brand-navy-dark text-white py-24 md:py-32 scroll-mt-20 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-16 items-center">
          
          {/* Left Column — Stylized Vectors World Map */}
          <div className="col-span-12 lg:col-span-7 select-none">
            <div className="relative w-full aspect-[2/1] bg-white/[0.01] border border-white/[0.06] rounded-[2px] p-4 sm:p-6 overflow-hidden">
              {/* Map grid */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="dark-map-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                    <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="0.75" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#dark-map-grid)" />
                </svg>
              </div>

              <svg viewBox="0 0 600 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Continents Polygons */}
                <g className="fill-white/[0.04] stroke-white/[0.08] stroke-[0.75] transition-opacity duration-500" style={{ opacity: globalOpacity }}>
                  <path d="M 60 50 L 130 45 L 195 70 L 175 110 L 140 95 L 120 130 L 90 120 L 50 85 Z" />
                  <path d="M 120 135 L 155 130 L 175 160 L 155 230 L 135 250 L 125 210 Z" />
                  <path d="M 270 120 L 320 120 L 340 145 L 325 215 L 295 240 L 280 200 L 260 160 Z" />
                  <path d="M 230 65 L 420 50 L 510 80 L 490 145 L 450 145 L 400 165 L 350 160 L 305 135 L 285 105 Z" />
                  <path d="M 475 220 L 525 220 L 540 250 L 495 260 Z" />
                  <path d="M 180 20 L 220 20 L 205 50 L 175 40 Z" />
                </g>

                {/* Animated Routes */}
                <g className="transition-opacity duration-500" style={{ opacity: routeOpacity }}>
                  {routes.map((route) => (
                    <motion.path
                      key={route.id}
                      d={route.d}
                      fill="none"
                      stroke="#FF5A09"
                      strokeWidth="1.25"
                      strokeDasharray="4,4"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
                    />
                  ))}
                </g>

                {/* Pulse Nodes */}
                <g>
                  {hubs.map((hub) => {
                    const isBOM = hub.isCentral;
                    const highlight = isBOM && indiaHighlight;

                    return (
                      <g key={hub.id}>
                        {highlight && (
                          <circle
                            cx={hub.x}
                            cy={hub.y}
                            r="12"
                            className="fill-brand-orange/20 animate-ping"
                          />
                        )}
                        <circle
                          cx={hub.x}
                          cy={hub.y}
                          r={isBOM ? "5" : "3.5"}
                          className={`${
                            isBOM ? "fill-brand-orange" : "fill-white/80"
                          } transition-all duration-300`}
                        />
                        <text
                          x={hub.x}
                          y={hub.y - 10}
                          className="font-mono text-[7px] tracking-wider fill-white/40 uppercase text-center font-bold"
                          textAnchor="middle"
                        >
                          {hub.name}
                        </text>
                      </g>
                    );
                  })}
                </g>
              </svg>
            </div>
          </div>

          {/* Right Column — Editorial Interactive Stats List */}
          <div className="col-span-12 lg:col-span-5 flex flex-col border-t border-white/[0.06]">
            {stats.map((stat, idx) => {
              const isActive = idx === activeStat;

              return (
                <button
                  key={idx}
                  onMouseEnter={() => setActiveStat(idx)}
                  onFocus={() => setActiveStat(idx)}
                  onClick={() => setActiveStat(idx)}
                  className={`w-full text-left py-6 border-b border-white/[0.06] transition-all duration-300 outline-none focus-ring group flex flex-col gap-1.5
                    ${isActive ? "opacity-100" : "opacity-45 hover:opacity-80"}
                  `}
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className={`text-4xl md:text-5xl font-black font-mono tracking-tight transition-colors duration-300
                        ${isActive ? "text-brand-orange" : "text-white"}
                      `}
                    >
                      {stat.value}
                    </span>
                    <span className="font-mono text-[9px] tracking-widest text-brand-orange font-bold uppercase">
                      {stat.label}
                    </span>
                  </div>
                  <p className="text-[10px] leading-relaxed text-neutral-light/50 font-mono tracking-wide uppercase">
                    {stat.description}
                  </p>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── 05 WHY THE NETWORK MATTERS SECTION ──────────────────────────────────────

function NetworkBenefits() {
  const points = [
    {
      title: "FASTER COORDINATION",
      description: "Managing local transit routing and port authority paperwork in different global regions quickly through nearby partner offices.",
    },
    {
      title: "MULTIMODAL LOGISTICS",
      description: "Syncing multiple modes of transportation dynamically by combining sea container arrivals with regional truck links.",
    },
    {
      title: "CUSTOMS COLLABORATION",
      description: "Minimizing clearance bottlenecks at checkpoints by having local customs compliance agents verify paperwork before cargo arrives.",
    },
    {
      title: "SUPPLY CHAIN INTEGRATION",
      description: "Interconnecting international ocean/air trade loops with warehouse staging and final local factory deliveries.",
    },
    {
      title: "DETAILED ROUTE SURVEYS",
      description: "Coordinating heavy-lift oversized cargo moves safely on the ground by utilizing local partner assessments and permit coordination.",
    },
  ];

  return (
    <section
      aria-label="Benefits of a Connected Network"
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
              <span className="text-brand-orange">05 —</span>
              <span>Benefits</span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1] uppercase"
            >
              WHY THE NETWORK <br />
              <span className="text-brand-orange">MATTERS.</span>
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

// ─── 06 CONNECTED SERVICES SECTION ──────────────────────────────────────────

function ConnectedServices() {
  const connections = [
    { title: "Air Freight", desc: "Accessing global flight corridors through pre-screened air transport partner agents." },
    { title: "Ocean Freight", desc: "Coordinating container bookings and carrier space allocations with major maritime lines." },
    { title: "Customs Brokerage", desc: "Liaising with local compliance brokers at international port checkpoints." },
    { title: "Warehousing & 3PL", desc: "Connecting storage transfer facilities with domestic transport distribution paths." },
    { title: "Primary Transportation", desc: "Coordinating domestic road drayage to/from airports, seaports, and factories." },
    { title: "Project Cargo", desc: "Coordinating heavy-lift oversized cargo moves safely on the ground by utilizing local partner assessments and permit coordination." },
  ];

  return (
    <section
      aria-label="Connected Services"
      className="relative w-full bg-brand-navy-dark text-white py-24 md:py-32 border-b border-white/5"
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
              <span className="text-brand-orange">06 —</span>
              <span>Services</span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1] uppercase"
            >
              STRENGTHENING <br />
              <span className="text-brand-orange">SERVICES.</span>
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
              Our global partner ecosystem supports every core Quickmas service, integrating local knowledge, documentation, and ground logistics directly into our logistics execution.
            </p>
          </motion.div>
        </div>

        {/* Connections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {connections.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col border border-white/[0.06] rounded-[2px] p-8 bg-white/[0.01] select-none"
            >
              <span className="font-mono text-[9px] tracking-widest text-brand-orange font-bold uppercase block mb-3">
                {String(idx + 1).padStart(2, "0")} / {item.title}
              </span>
              <p className="text-xs sm:text-sm text-neutral-light/60 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 07 FINAL CTA SECTION ───────────────────────────────────────────────────

function NetworkCTA() {
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
              WHEREVER <br />
              YOUR BUSINESS <br />
              <span className="text-brand-orange">NEEDS TO GO.</span>
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
              Talk to Quickmas about international logistics supported by a connected global network.
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

export default function NetworkClient() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#F8FAFC] text-neutral-dark selection:bg-brand-orange selection:text-white">
      {/* Global Navigation */}
      <Navbar light={true} />

      <main className="flex-grow">
        {/* 01 Hero */}
        <NetworkHero />

        {/* 02 Global Reach */}
        <GlobalReach />

        {/* 03 & 04 Interactive Map & Stats */}
        <NetworkMapSection />

        {/* 05 Why the Network Matters */}
        <NetworkBenefits />

        {/* 06 Connected Services */}
        <ConnectedServices />

        {/* 07 Final CTA */}
        <NetworkCTA />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
