"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  
  // Parallax scroll for the visual image
  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ["start end", "end start"],
  });
  
  const imgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  // Framer Motion reveal variants
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      aria-label="About Quickmas"
      className="relative w-full bg-[#F8FAFC] text-brand-navy py-24 md:py-32 overflow-hidden border-t border-neutral-200/50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12 md:gap-16">
        
        {/* 1. Header Index Label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.25em] text-neutral-muted uppercase font-bold"
        >
          <span className="text-brand-orange">03 —</span>
          <span>About Quickmas</span>
        </motion.div>

        {/* 2. Main Content Grid */}
        <div className="grid grid-cols-12 gap-y-12 lg:gap-16 items-start">
          
          {/* Left Column: Asymmetrical Typography & Diagram */}
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-10 md:gap-12">
            {/* Editorial Headline */}
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-brand-navy"
            >
              LOGISTICS, <br />
              BUILT AROUND <br />
              <span className="text-brand-orange italic font-light pr-2">YOUR BUSINESS.</span>
            </motion.h2>

            {/* Complexity to Clarity Typographic Visual Diagram */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="relative bg-white border border-neutral-200/60 rounded-[3px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.02)] overflow-hidden hidden sm:block"
            >
              <div className="text-[10px] font-mono tracking-widest text-neutral-muted/70 uppercase mb-6 flex items-center justify-between">
                <span>Operational Complexity</span>
                <span className="text-brand-orange">Connected Clarity</span>
              </div>

              {/* Graphic Flow Layout */}
              <div className="relative h-44 w-full flex items-center justify-between">
                {/* Visual grid pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="diag-grid" width="16" height="16" patternUnits="userSpaceOnUse">
                      <path d="M 16 0 L 0 0 0 16" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#diag-grid)" />
                </svg>

                {/* Animated svg flow lines connecting left to right */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 50 40 Q 150 40 280 88" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" className="opacity-40" />
                  <path d="M 50 88 Q 150 88 280 88" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" className="opacity-40" />
                  <path d="M 50 136 Q 150 136 280 88" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" className="opacity-40" />
                  <path d="M 165 40 Q 220 40 280 88" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" className="opacity-40" />
                  <path d="M 185 88 Q 220 88 280 88" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" className="opacity-40" />
                  <path d="M 165 136 Q 220 136 280 88" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" className="opacity-40" />
                </svg>

                {/* Nodes Column 1 */}
                <div className="flex flex-col justify-between h-full z-10 w-24">
                  <span className="bg-neutral-light border border-neutral-200/80 px-2 py-1 text-[9px] font-mono tracking-widest text-center shadow-sm">AIR</span>
                  <span className="bg-neutral-light border border-neutral-200/80 px-2 py-1 text-[9px] font-mono tracking-widest text-center shadow-sm">OCEAN</span>
                  <span className="bg-neutral-light border border-neutral-200/80 px-2 py-1 text-[9px] font-mono tracking-widest text-center shadow-sm">CUSTOMS</span>
                </div>

                {/* Nodes Column 2 */}
                <div className="flex flex-col justify-between h-full z-10 w-28 pl-4">
                  <span className="bg-neutral-light border border-neutral-200/80 px-2 py-1 text-[9px] font-mono tracking-widest text-center shadow-sm">TRANSPORT</span>
                  <span className="bg-neutral-light border border-neutral-200/80 px-2 py-1 text-[9px] font-mono tracking-widest text-center shadow-sm">WAREHOUSE</span>
                  <span className="bg-neutral-light border border-neutral-200/80 px-2 py-1 text-[9px] font-mono tracking-widest text-center shadow-sm">DELIVERY</span>
                </div>

                {/* Central Connector Block */}
                <div className="z-10 flex flex-col items-center justify-center pl-6">
                  <div className="border border-brand-orange bg-brand-navy-dark text-white py-3 px-4 rounded-[2px] shadow-md flex items-center gap-2">
                    <span className="text-[10px] font-bold tracking-widest uppercase font-mono text-brand-orange whitespace-nowrap">
                      One Connected Supply Chain
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-orange" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Copy & Core Values Statement */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-8 md:gap-10 text-sm md:text-base leading-relaxed text-neutral-muted">
            {/* Core Paragraphs */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="flex flex-col gap-6"
            >
              <p>
                <strong>Quickmas Integrated Logistics</strong> is a fast-growing logistics company delivering reliable, cost-effective, and technology-driven freight forwarding and 3PL solutions across domestic and international markets.
              </p>
              <p>
                From international air and ocean freight to customs clearance, transportation, warehousing, distribution, and final delivery, we simplify complex supply chains through integrated logistics solutions built around each business.
              </p>
            </motion.div>

            {/* Structured Value Statement Block */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="flex flex-col gap-2 pt-6 border-t border-neutral-200/80 mt-2 select-none"
            >
              <span className="text-[9px] font-mono tracking-[0.2em] text-neutral-muted/70">[ CORE FOCUS ]</span>
              <div className="flex flex-col text-lg md:text-xl font-black tracking-tight leading-none text-brand-navy mt-1">
                <span>GLOBAL REACH.</span>
                <span>LOCAL EXPERTISE.</span>
                <span className="text-brand-orange font-black mt-1">ONE CONNECTED SUPPLY CHAIN.</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 3. Landscape Visual Parallax Image */}
        <motion.div
          ref={imageContainerRef}
          initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", opacity: 0.5 }}
          whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-[280px] sm:h-[380px] md:h-[460px] overflow-hidden rounded-[3px] border border-neutral-200/50 shadow-sm mt-8"
        >
          {/* Unsplash modern industrial warehouse/cargo operations image */}
          <motion.div style={{ y: imgY }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80"
              alt="Quickmas Modern Warehousing Logistics and 3PL Distribution Terminal"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          {/* Subtle overlay gradient to match light theme card borders */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/10 to-transparent pointer-events-none" />
        </motion.div>

        {/* 4. Bottom Horizontal Capabilities Rail */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={revealVariants}
          className="w-full pt-8 md:pt-10 border-t border-neutral-200/80 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-6 select-none"
        >
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] md:text-xs font-mono font-bold tracking-widest text-neutral-muted/80">
            <span>AIR</span>
            <span className="text-brand-orange font-bold">/</span>
            <span>OCEAN</span>
            <span className="text-brand-orange font-bold">/</span>
            <span>CUSTOMS</span>
            <span className="text-brand-orange font-bold">/</span>
            <span>TRANSPORT</span>
            <span className="text-brand-orange font-bold">/</span>
            <span>WAREHOUSING</span>
            <span className="text-brand-orange font-bold">/</span>
            <span>DELIVERY</span>
          </div>

          <div className="text-[9px] font-mono tracking-widest text-neutral-muted/60 uppercase">
            <span>OPERATIONAL BLUEPRINT // VER. 3.2</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
