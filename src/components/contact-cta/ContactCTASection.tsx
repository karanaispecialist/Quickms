"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ServiceSelector from "./ServiceSelector";

export default function ContactCTASection() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Reveal animation variants
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const tickerItems = [
    "AIR FREIGHT",
    "OCEAN FREIGHT",
    "CUSTOMS BROKERAGE",
    "WAREHOUSING & 3PL",
    "PRIMARY TRANSPORTATION",
    "PROJECT CARGO"
  ];

  return (
    <section
      aria-label="Contact and Conversion"
      className="relative w-full bg-brand-navy-dark text-white py-24 md:py-32 overflow-hidden border-t border-white/5"
    >
      {/* Subtle abstract background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12 md:gap-16">
        
        {/* 1. Header Index Label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.25em] text-neutral-muted uppercase font-bold"
        >
          <span className="text-brand-orange">09 —</span>
          <span>Start a Conversation</span>
        </motion.div>

        {/* 2. Headline & Conversion Content */}
        <div className="grid grid-cols-12 gap-y-12 lg:gap-16 items-start">
          
          {/* Left Column: Monumental Oversized Typography */}
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-black tracking-tight leading-[0.95] uppercase select-none group"
            >
              WHAT DO <br />
              YOU NEED <br />
              <span className="text-brand-orange flex items-baseline gap-2">
                TO MOVE
                <motion.span
                  className="inline-block transition-transform duration-300 group-hover:translate-x-3 group-hover:-translate-y-3"
                  aria-hidden="true"
                >
                  ↗
                </motion.span>
              </span>
            </motion.h2>

            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-xs sm:text-sm font-bold tracking-widest font-mono text-brand-orange uppercase mt-2"
            >
              YOUR CARGO. OUR NEXT MOVE.
            </motion.span>
          </div>

          {/* Right Column: Interaction selectors, copy, and CTAs */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-8 md:gap-10 lg:pt-2">
            
            {/* Description Copy */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-sm md:text-base text-neutral-light/75 leading-relaxed"
            >
              From international freight and customs clearance to warehousing, domestic
              transportation, and complex project cargo, tell us what needs to move and our
              team will help plan the way forward.
            </motion.p>

            {/* Interactive Requirement Selection Tags */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="w-full"
            >
              <ServiceSelector
                selectedId={selectedService}
                onSelect={setSelectedService}
              />
            </motion.div>

            {/* Primary & Secondary Call-to-Actions */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              {/* Primary: Get a Quote */}
              <Link
                href={selectedService ? `/contact?service=${selectedService}` : "/contact"}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-orange text-white text-xs font-bold uppercase tracking-widest rounded-[2px] shadow-lg shadow-brand-orange/20 hover:bg-brand-orange-hover transition-colors duration-300 focus-ring group"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Secondary: Talk to our team */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 hover:border-white/30 text-white text-xs font-bold uppercase tracking-widest rounded-[2px] hover:bg-white/5 transition-colors duration-300 focus-ring"
              >
                <span>Talk to our Team</span>
              </Link>
            </motion.div>

          </div>
        </div>

        {/* 3. Bottom Capability Ticker (Horizontal visual divider) */}
        <div className="w-full pt-12 md:pt-16 border-t border-white/5 mt-8 select-none relative overflow-hidden">
          <div className="flex whitespace-nowrap gap-8 text-[9px] font-mono tracking-[0.25em] text-neutral-muted/50 uppercase">
            {/* Duplicated loops for slow marquee effect */}
            <div className="flex gap-8 shrink-0 animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]">
              {tickerItems.map((item, i) => (
                <span key={`ticker-1-${i}`} className="flex items-center gap-8">
                  <span>{item}</span>
                  {i < tickerItems.length - 1 && <span className="text-brand-orange/40 font-bold">/</span>}
                </span>
              ))}
            </div>
            
            <div className="flex gap-8 shrink-0 aria-hidden:true animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]">
              {tickerItems.map((item, i) => (
                <span key={`ticker-2-${i}`} className="flex items-center gap-8">
                  <span>{item}</span>
                  {i < tickerItems.length - 1 && <span className="text-brand-orange/40 font-bold">/</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
