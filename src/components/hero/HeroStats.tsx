"use client";

import { motion } from "framer-motion";

export default function HeroStats() {
  const stats = [
    {
      label: "REGION OF COVERAGE",
      value: "181+",
      unit: "COUNTRIES",
    },
    {
      label: "GLOBAL NETWORK CAPACITY",
      value: "12K+",
      unit: "OVERSEAS PARTNERS",
    },
    {
      label: "REGIONAL HUBS (IN)",
      value: "29+",
      unit: "NETWORK LOCATIONS",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-10 w-full mt-auto border-t border-neutral-200/60"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 md:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        {/* Left Stats Section */}
        <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-start gap-1"
            >
              <span className="text-[9px] font-mono tracking-[0.2em] text-neutral-muted/80">
                [ {stat.label} ]
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl md:text-2xl font-black text-brand-navy font-mono tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[10px] font-bold tracking-wider text-neutral-dark/60">
                  {stat.unit}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right side live status or coordinate - Technical touch */}
        <motion.div
          variants={itemVariants}
          className="hidden md:flex flex-col items-end gap-1 font-mono text-[9px] tracking-widest text-neutral-muted/80 text-right"
        >
          <span>NETWORK LOGISTICS VERIFIER // V4.0</span>
          <span>ESTABLISHED GLOBAL GATEWAY // ACTIVE</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
