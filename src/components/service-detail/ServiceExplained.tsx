"use client";

import { motion } from "framer-motion";
import type { ServiceExplainedData } from "./serviceDetailData";

interface ServiceExplainedProps {
  data: ServiceExplainedData;
}

export default function ServiceExplained({ data }: ServiceExplainedProps) {
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  return (
    <section
      aria-label="Air Freight Explained"
      className="relative w-full bg-[#050816] text-white py-24 md:py-32 overflow-hidden border-t border-white/5"
    >
      {/* Subtle glow */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-brand-orange/[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-16 items-start">
          {/* Left Column — Sticky Label */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            {/* Section Label */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.25em] text-neutral-muted uppercase font-bold"
            >
              <span className="text-brand-orange">02 —</span>
              <span>{data.label}</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1] uppercase"
            >
              {data.headline.map((line, idx) => (
                <span key={idx} className="block">
                  {idx === data.headline.length - 1 ? (
                    <span className="text-brand-orange">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </motion.h2>

            {/* Copy */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-sm md:text-base text-neutral-light/70 leading-relaxed max-w-md"
            >
              {data.copy}
            </motion.p>
          </div>

          {/* Right Column — Conceptual Themes */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="col-span-12 lg:col-span-8 flex flex-col"
          >
            {data.themes.map((theme, idx) => (
              <motion.div
                key={idx}
                variants={revealVariants}
                className="group border-t border-white/[0.06] py-10 md:py-14 first:border-t-0 lg:first:border-t lg:first:border-white/[0.06]"
              >
                <div className="grid grid-cols-12 gap-4 md:gap-8 items-start">
                  {/* Theme Number */}
                  <div className="col-span-2 md:col-span-1">
                    <span className="font-mono text-[10px] text-brand-orange/60 tracking-widest font-bold">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Theme Title */}
                  <div className="col-span-10 md:col-span-4">
                    <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-none uppercase text-white group-hover:text-brand-orange transition-colors duration-500 select-none">
                      {theme.title}
                    </h3>
                  </div>

                  {/* Theme Description */}
                  <div className="col-span-12 md:col-span-7 md:col-start-6">
                    <p className="text-sm text-neutral-light/60 leading-relaxed font-medium">
                      {theme.description}
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
