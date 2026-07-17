"use client";

import { motion } from "framer-motion";

export const secondaryStats = [
  { value: "35,000+ SQ FT", label: "WAREHOUSING" },
  { value: "03", label: "BRANCHES" },
  { value: "50+", label: "ACTIVE CLIENTS" },
  { value: "7+ CRORE", label: "SALES VOLUME" },
  { value: "15+", label: "LOGISTICS TEAM" },
];

export default function OperationalDataRail() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="w-full pt-8 md:pt-10 border-t border-neutral-200/80 mt-12 select-none"
    >
      <div className="flex flex-wrap items-center justify-between gap-y-6 gap-x-8">
        {/* Statistics list */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 md:gap-x-10 text-[10px] md:text-xs font-mono font-bold tracking-wider text-brand-navy">
          {secondaryStats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex items-center gap-2 md:gap-3"
            >
              {i > 0 && <span className="opacity-30 text-neutral-muted">/</span>}
              <div className="flex items-center gap-2">
                <span className="text-brand-orange">{stat.value}</span>
                <span className="opacity-60 text-[9px] uppercase tracking-[0.15em] font-sans font-bold">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Specification Label */}
        <motion.div
          variants={itemVariants}
          className="font-mono text-[8px] tracking-[0.25em] text-neutral-muted/70 uppercase text-left sm:text-right"
        >
          <span>DATA INTEGRITY SECURED // STATS V1.0</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
