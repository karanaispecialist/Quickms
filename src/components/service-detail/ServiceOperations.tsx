"use client";

import { motion } from "framer-motion";
import type { ServiceOperationsData } from "./serviceDetailData";

interface ServiceOperationsProps {
  data: ServiceOperationsData;
}

export default function ServiceOperations({ data }: ServiceOperationsProps) {
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
      aria-label="Import and Export Operations"
      className="relative w-full bg-[#050816] text-white py-24 md:py-32 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.25em] text-neutral-muted uppercase font-bold mb-16 md:mb-20"
        >
          <span className="text-brand-orange">{data.sectionNum ?? "06"} —</span>
          <span>{data.sectionLabel ?? "Operations"}</span>
        </motion.div>

        {/* Split Layout: Import | Export */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative">
          {/* Vertical Divider (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-px h-full bg-gradient-to-b from-brand-orange/40 via-brand-orange/20 to-transparent origin-top"
            />
          </div>

          {/* Horizontal Divider (Mobile) */}
          <div className="md:hidden w-full h-px bg-white/[0.06] my-12" />

          {/* IMPORT / LEFT SIDE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
            className="flex flex-col gap-6 md:pr-16 lg:pr-24 order-1"
          >
            {/* Oversized IMPORT label */}
            <div className="flex items-center gap-4">
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none uppercase text-white/[0.04] select-none">
                {data.import.largeLabel ?? "IM"}
              </span>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] tracking-[0.25em] text-brand-orange/60 uppercase font-bold">
                  {data.import.eyebrow ?? "INBOUND"}
                </span>
                <span className="text-2xl md:text-3xl font-black tracking-tight uppercase">
                  {data.import.title}
                </span>
              </div>
            </div>

            <p className="text-sm text-neutral-light/60 leading-relaxed font-medium max-w-md">
              {data.import.description}
            </p>

            {/* Visual accent */}
            <div className="flex items-center gap-3 mt-4 select-none">
              <div className="w-8 h-px bg-brand-orange/30" />
              <span className="font-mono text-[9px] tracking-[0.2em] text-white/25 uppercase">
                {data.import.flowSteps ?? "ARRIVAL → CLEARANCE → DELIVERY"}
              </span>
            </div>
          </motion.div>

          {/* EXPORT / RIGHT SIDE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
            className="flex flex-col gap-6 md:pl-16 lg:pl-24 order-2 mt-12 md:mt-0"
          >
            {/* Oversized EXPORT label */}
            <div className="flex items-center gap-4">
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none uppercase text-white/[0.04] select-none">
                {data.export.largeLabel ?? "EX"}
              </span>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] tracking-[0.25em] text-brand-orange/60 uppercase font-bold">
                  {data.export.eyebrow ?? "OUTBOUND"}
                </span>
                <span className="text-2xl md:text-3xl font-black tracking-tight uppercase">
                  {data.export.title}
                </span>
              </div>
            </div>

            <p className="text-sm text-neutral-light/60 leading-relaxed font-medium max-w-md">
              {data.export.description}
            </p>

            {/* Visual accent */}
            <div className="flex items-center gap-3 mt-4 select-none">
              <div className="w-8 h-px bg-brand-orange/30" />
              <span className="font-mono text-[9px] tracking-[0.2em] text-white/25 uppercase">
                {data.export.flowSteps ?? "COLLECTION → PROCESSING → DEPARTURE"}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
