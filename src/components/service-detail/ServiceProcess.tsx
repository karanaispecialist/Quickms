"use client";

import { motion } from "framer-motion";
import type { ServiceProcessStep } from "./serviceDetailData";

interface ServiceProcessProps {
  data: ServiceProcessStep[];
}

export default function ServiceProcess({ data }: ServiceProcessProps) {
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const lineGrow = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      aria-label="Air Freight Process"
      className="relative w-full bg-white text-brand-navy py-24 md:py-32 overflow-hidden border-t border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="flex flex-col gap-6 mb-16 md:mb-24"
        >
          <div className="flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.25em] text-neutral-muted uppercase font-bold">
            <span className="text-brand-orange">05 —</span>
            <span>Process</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1] uppercase max-w-2xl">
            HOW WE MANAGE{" "}
            <span className="text-brand-orange">AIR FREIGHT.</span>
          </h2>
        </motion.div>

        {/* Vertical Editorial Journey */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical connecting line */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={lineGrow}
            className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-orange/40 via-brand-orange/20 to-brand-orange/5 origin-top hidden sm:block"
          />

          <div className="flex flex-col gap-0">
            {data.map((step, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={revealVariants}
                className="relative group"
              >
                <div className="flex gap-6 md:gap-10 py-10 md:py-14">
                  {/* Step Indicator */}
                  <div className="relative flex flex-col items-center shrink-0">
                    {/* Dot */}
                    <div className="w-12 md:w-16 h-12 md:h-16 rounded-full border border-neutral-200 bg-brand-navy/5 flex items-center justify-center group-hover:border-brand-orange/40 group-hover:bg-brand-orange/[0.05] transition-all duration-500 relative z-10">
                      <span className="font-mono text-[10px] md:text-xs text-brand-orange font-bold tracking-widest">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex flex-col gap-3 pt-2 md:pt-3">
                    {/* Short Label */}
                    <span className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-brand-orange/70 uppercase font-bold">
                      {step.label}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-black tracking-tight leading-tight uppercase text-brand-navy select-none">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-neutral-dark/70 leading-relaxed font-medium max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Separator */}
                {idx < data.length - 1 && (
                  <div className="h-px bg-neutral-200 ml-18 md:ml-[6.5rem]" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
