"use client";

import { motion } from "framer-motion";
import { performanceData, performanceIntro } from "./performance.data";
import PerformanceItem from "./PerformanceItem";

export default function PerformanceSection() {
  // Reveal animation variants
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
      aria-label="Operational Performance"
      className="relative w-full bg-brand-navy-dark text-white py-24 md:py-32 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12">
        
        {/* Mobile Intro Header (Only displays on mobile/tablet viewports) */}
        <div className="flex flex-col gap-6 lg:hidden">
          {/* Index Label */}
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] text-neutral-muted uppercase font-bold">
            <span className="text-brand-orange">06 —</span>
            <span>Performance</span>
          </div>
          {/* Headline */}
          <h2 className="text-4xl font-black tracking-tight leading-none uppercase">
            {performanceIntro.headline}
            <span className="block text-brand-orange text-sm font-bold tracking-widest font-mono mt-2">
              {performanceIntro.sublabel}
            </span>
          </h2>
          {/* Supporting Copy */}
          <p className="text-sm text-neutral-light/70 leading-relaxed max-w-xl">
            {performanceIntro.copy}
          </p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-12 gap-y-12 lg:gap-16 items-start mt-4">
          
          {/* Left Column: Sticky section intro (Desktop only) */}
          <div className="col-span-12 lg:col-span-5 hidden lg:flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            {/* Index Label */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-neutral-muted uppercase font-bold"
            >
              <span className="text-brand-orange">06 —</span>
              <span>Performance</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="text-5xl font-black tracking-tight leading-[1] uppercase"
            >
              {performanceIntro.headline}
              <span className="block text-brand-orange text-xs font-bold tracking-widest font-mono mt-4 leading-normal">
                {performanceIntro.sublabel}
              </span>
            </motion.h2>

            {/* Supporting copy */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="text-sm text-neutral-light/75 leading-relaxed max-w-md mt-2"
            >
              {performanceIntro.copy}
            </motion.p>
          </div>

          {/* Right Column: Performance Index Rows List */}
          <div className="col-span-12 lg:col-span-7 flex flex-col border-t border-white/10">
            {performanceData.map((item) => (
              <PerformanceItem key={item.number} item={item} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
