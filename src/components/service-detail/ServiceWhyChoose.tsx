"use client";

import { motion } from "framer-motion";
import type { ServiceWhyChooseItem } from "./serviceDetailData";

interface ServiceWhyChooseProps {
  data: ServiceWhyChooseItem[];
}

export default function ServiceWhyChoose({ data }: ServiceWhyChooseProps) {
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
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  return (
    <section
      aria-label="Why Choose Air Freight"
      className="relative w-full bg-white text-brand-navy py-24 md:py-32 overflow-hidden border-t border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="flex flex-col gap-6 mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.25em] text-neutral-muted uppercase font-bold">
            <span className="text-brand-orange">03 —</span>
            <span>Why Air Freight</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1] uppercase max-w-2xl">
            WHEN DOES AIR FREIGHT{" "}
            <span className="text-brand-orange">MAKE SENSE?</span>
          </h2>
        </motion.div>

        {/* Large Numbered Vertical Sequence */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="flex flex-col"
        >
          {data.map((item, idx) => (
            <motion.div
              key={idx}
              variants={revealVariants}
              className="group border-t border-neutral-200 last:border-b last:border-neutral-200"
            >
              <div className="grid grid-cols-12 gap-4 md:gap-8 items-baseline py-10 md:py-16">
                {/* Large Number */}
                <div className="col-span-3 sm:col-span-2 md:col-span-2">
                  <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-brand-navy/[0.06] group-hover:text-brand-orange/20 transition-colors duration-700 leading-none select-none tracking-tighter">
                    {item.number}
                  </span>
                </div>

                {/* Title */}
                <div className="col-span-9 sm:col-span-10 md:col-span-4 flex items-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight leading-tight uppercase text-brand-navy group-hover:text-brand-orange transition-colors duration-500 select-none">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="col-span-12 md:col-span-6 md:col-start-7">
                  <p className="text-sm text-neutral-dark/70 leading-relaxed font-medium pl-0 md:pl-4">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
