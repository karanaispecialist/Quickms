"use client";

import { motion } from "framer-motion";
import type { ServiceCapabilityItem } from "./serviceDetailData";

interface ServiceCapabilitiesProps {
  data: ServiceCapabilityItem[];
}

export default function ServiceCapabilities({ data }: ServiceCapabilitiesProps) {
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
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  return (
    <section
      id="capabilities"
      aria-label="Air Freight Capabilities"
      className="relative w-full bg-[#050816] text-white py-24 md:py-32 overflow-hidden border-t border-white/5 scroll-mt-20"
    >
      {/* Glow accent */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-orange/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-16 items-start">
          {/* Left Column — Sticky Label */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.25em] text-neutral-muted uppercase font-bold"
            >
              <span className="text-brand-orange">04 —</span>
              <span>Capabilities</span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1] uppercase"
            >
              CAPABILITY{" "}
              <span className="text-brand-orange">INDEX.</span>
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-sm text-neutral-light/60 leading-relaxed max-w-sm"
            >
              Core operational capabilities supporting international air freight
              movement across import and export requirements.
            </motion.p>
          </div>

          {/* Right Column — Capability Index */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="col-span-12 lg:col-span-8 flex flex-col border-t border-white/[0.06]"
          >
            {data.map((item, idx) => (
              <motion.div
                key={idx}
                variants={revealVariants}
                className="group border-b border-white/[0.06] py-8 md:py-10"
              >
                <div className="grid grid-cols-12 gap-4 items-start">
                  {/* Number */}
                  <div className="col-span-2 md:col-span-1">
                    <span className="font-mono text-xs text-brand-orange font-bold tracking-widest">
                      {item.number}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="col-span-10 md:col-span-4">
                    <h3 className="text-sm md:text-base font-black tracking-tight uppercase text-white group-hover:text-brand-orange transition-colors duration-400 select-none leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="col-span-12 md:col-span-7 md:col-start-6">
                    <p className="text-sm text-neutral-light/55 leading-relaxed font-medium">
                      {item.description}
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
