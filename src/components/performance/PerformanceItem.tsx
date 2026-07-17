"use client";

import { motion } from "framer-motion";
import { PerformanceCategory } from "./performance.data";

interface PerformanceItemProps {
  item: PerformanceCategory;
}

export default function PerformanceItem({ item }: PerformanceItemProps) {
  // Animating the large numbers using masked reveals
  const numberVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Render a specific visual layout based on the operational category
  const renderVisualMetric = () => {
    switch (item.number) {
      case "01": // Air Freight: Proportional horizontal bar import vs export
        return (
          <div className="w-full mt-4 flex flex-col gap-2 select-none">
            <div className="flex items-center justify-between font-mono text-[9px] text-neutral-muted uppercase tracking-wider">
              <span>Import: 300+ MT (71%)</span>
              <span>Export: 120+ MT (29%)</span>
            </div>
            {/* Proportional rail */}
            <div className="w-full h-2 bg-brand-navy/5 rounded-[1px] overflow-hidden flex border border-neutral-200">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "71.4%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-brand-orange"
              />
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "28.6%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="h-full bg-brand-navy/15"
              />
            </div>
          </div>
        );

      case "02": // Sea Freight: Container-inspired structural geometry block stack
        return (
          <div className="w-full mt-4 flex flex-col gap-2 select-none">
            <div className="flex items-center justify-between font-mono text-[9px] text-neutral-muted uppercase tracking-wider">
              <span>Import: 100 TEUs</span>
              <span>Export: 50 TEUs</span>
            </div>
            {/* Grid block representation */}
            <div className="flex items-center gap-1.5 h-6">
              {/* Imports: 4 blocks */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={`imp-${i}`}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="w-10 h-full bg-brand-orange border border-brand-orange/20 rounded-[1px] origin-bottom"
                />
              ))}
              {/* Divider */}
              <div className="w-[1px] h-full bg-brand-navy/15 mx-1" />
              {/* Exports: 2 blocks */}
              {[...Array(2)].map((_, i) => (
                <motion.div
                  key={`exp-${i}`}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i + 4) * 0.1 }}
                  className="w-10 h-full bg-brand-navy/15 border border-neutral-200/60 rounded-[1px] origin-bottom"
                />
              ))}
            </div>
          </div>
        );

      case "03": // Customs Brokerage: Job clearance indicators
        return (
          <div className="w-full mt-4 grid grid-cols-3 gap-2 font-mono text-[8px] tracking-wider select-none">
            <div className="border border-neutral-200 bg-brand-navy/5 py-2 px-2 flex flex-col gap-1 rounded-[1px]">
              <span className="text-brand-orange">STEP 01</span>
              <span className="text-neutral-dark/80 font-bold uppercase truncate">ENTRY LODGED</span>
            </div>
            <div className="border border-neutral-200 bg-brand-navy/5 py-2 px-2 flex flex-col gap-1 rounded-[1px]">
              <span className="text-brand-orange">STEP 02</span>
              <span className="text-neutral-dark/80 font-bold uppercase truncate">DUTY SECURED</span>
            </div>
            <div className="border border-neutral-200 bg-brand-navy/5 py-2 px-2 flex flex-col gap-1 rounded-[1px]">
              <span className="text-brand-orange">STEP 03</span>
              <span className="text-neutral-dark/80 font-bold uppercase truncate">OUT OF CHARGE</span>
            </div>
          </div>
        );

      case "04": // Domestic Transportation: Network road tracks
        return (
          <div className="w-full mt-4 flex flex-col gap-2 select-none">
            <div className="flex items-center justify-between font-mono text-[9px] text-neutral-muted uppercase tracking-wider">
              <span>Transit Node: Port</span>
              <span>Distribution Hub: City center</span>
            </div>
            {/* Linear track visual */}
            <div className="relative w-full h-1 bg-brand-navy/15 rounded-full flex items-center">
              <motion.div
                initial={{ left: 0 }}
                whileInView={{ left: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-2 h-2 rounded-full bg-brand-orange -translate-y-[2px]"
              />
              <div className="absolute left-[30%] w-1.5 h-1.5 rounded-full bg-brand-navy/40" />
              <div className="absolute left-[70%] w-1.5 h-1.5 rounded-full bg-brand-navy/40" />
            </div>
          </div>
        );

      case "05": // Warehousing: Spatial layouts grid map
        return (
          <div className="w-full mt-4 grid grid-cols-4 gap-1.5 select-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.1 }}
                whileInView={{ opacity: [0.1, 0.4, 0.2] }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
                className="h-4 border border-neutral-200 bg-brand-navy/5 rounded-[1px] flex items-center justify-center font-mono text-[8px] text-brand-navy/60"
              >
                {`SLOT-${i}`}
              </motion.div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full py-8 md:py-10 border-b border-neutral-200 flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-8"
    >
      {/* Category Info */}
      <div className="flex flex-col gap-1 w-full sm:w-1/2">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-brand-orange/80">
            {item.number}
          </span>
          <h3 className="text-base md:text-lg font-bold tracking-tight uppercase text-brand-navy">
            {item.category}
          </h3>
        </div>
        <p className="text-xs text-neutral-dark/70 leading-relaxed mt-2 max-w-sm">
          {item.description}
        </p>

        {/* Dynamic proportional charts/visuals */}
        {renderVisualMetric()}
      </div>

      {/* Numeric Metric Value Column */}
      <div className="flex flex-col items-start sm:items-end text-left sm:text-right w-full sm:w-1/2 justify-center">
        {/* Typographic Masked Number Reveal */}
        <div className="overflow-hidden relative h-16 sm:h-20 w-full flex sm:justify-end items-center">
          <motion.span
            variants={numberVariants}
            className="text-5xl md:text-7xl font-black font-mono tracking-tight text-brand-navy inline-block leading-none"
          >
            {item.value}
          </motion.span>
        </div>
        
        {/* Metric unit and details */}
        <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase">
          {item.unit}
        </span>
      </div>
    </motion.div>
  );
}
