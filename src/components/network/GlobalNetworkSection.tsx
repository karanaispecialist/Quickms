"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import NetworkMap from "./NetworkMap";
import NetworkStat from "./NetworkStat";
import OperationalDataRail from "./OperationalDataRail";

export default function GlobalNetworkSection() {
  const [activeStat, setActiveStat] = useState(0);

  // Reveal variants
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
      aria-label="Global Network and Scale"
      className="relative w-full bg-white text-brand-navy py-24 md:py-32 overflow-hidden border-t border-neutral-200/50"
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
          <span className="text-brand-orange">05 —</span>
          <span>Global Network</span>
        </motion.div>

        {/* 2. Headline & Supporting Copy */}
        <div className="grid grid-cols-12 gap-y-6 lg:gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
            className="col-span-12 lg:col-span-6 flex flex-col gap-2"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1] uppercase select-none">
              CONNECTED <br />
              <span className="text-brand-orange">ACROSS BORDERS.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
            className="col-span-12 lg:col-span-6 text-sm md:text-base text-neutral-muted leading-relaxed lg:pt-2 font-medium"
          >
            <p>
              Through a strong international network of partners and agents, Quickmas connects
              businesses to logistics solutions across 181+ countries while supporting efficient
              execution through 29+ network locations across India.
            </p>
          </motion.div>
        </div>

        {/* 3. Map and Stats Grid */}
        <div className="grid grid-cols-12 gap-y-10 lg:gap-16 items-center mt-4">
          {/* Left Area: Visual Map Centerpiece */}
          <div className="col-span-12 lg:col-span-7">
            <NetworkMap activeStat={activeStat} />
          </div>

          {/* Right Area: Interactive Metrics Stack */}
          <div className="col-span-12 lg:col-span-5">
            <NetworkStat activeIndex={activeStat} onSelect={setActiveStat} />
          </div>
        </div>

        {/* 4. Bottom Horizontal Operational Data Rail */}
        <OperationalDataRail />

      </div>
    </section>
  );
}
