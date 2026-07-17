"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import type { ServicePerformanceData } from "./serviceDetailData";

interface ServicePerformanceProps {
  data: ServicePerformanceData;
}

// Animated counter component
function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Extract numeric part and suffix (e.g., "420+" → 420, "+")
  const numericMatch = value.match(/^(\d+)(.*)$/);
  const targetNumber = numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const suffix = numericMatch ? numericMatch[2] : "";

  const [displayValue, setDisplayValue] = useState(0);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, targetNumber, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [isInView, targetNumber, motionValue]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));
    return unsubscribe;
  }, [rounded]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {displayValue}{suffix}
    </motion.span>
  );
}

export default function ServicePerformance({ data }: ServicePerformanceProps) {
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
      className="relative w-full bg-brand-navy-dark text-white py-24 md:py-36 overflow-hidden border-t border-white/5"
    >
      {/* Subtle centered glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/[0.04] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.25em] text-neutral-muted uppercase font-bold mb-12 md:mb-16"
        >
          <span className="text-brand-orange">07 —</span>
          <span>Performance</span>
        </motion.div>

        {/* Hero Stat */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={revealVariants}
          className="flex flex-col items-center text-center mb-16 md:mb-24"
        >
          <div className="flex items-baseline gap-4 md:gap-6 select-none">
            <span className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black tracking-tighter leading-none text-brand-orange">
              <AnimatedNumber value={data.total} />
            </span>
            <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white/30 uppercase">
              {data.unit}
            </span>
          </div>

          <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-neutral-muted uppercase font-bold mt-4 md:mt-6">
            {data.label}
          </span>
        </motion.div>

        {/* Breakdown */}
        {data.breakdown && data.breakdown.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={revealVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 max-w-2xl mx-auto"
          >
            {data.breakdown.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center border border-white/[0.06] rounded-[2px] py-10 md:py-14 bg-white/[0.01] select-none"
              >
                <span className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none text-white">
                  <AnimatedNumber value={item.value} />
                </span>
                <span className="font-mono text-[10px] tracking-[0.25em] text-brand-orange/70 uppercase font-bold mt-3">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        )}

        {/* Disclaimer note */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={revealVariants}
          className="text-center text-[10px] font-mono text-neutral-muted/50 tracking-wider mt-10 md:mt-14 uppercase"
        >
          Figures represent cumulative company air freight performance.
        </motion.p>
      </div>
    </section>
  );
}
