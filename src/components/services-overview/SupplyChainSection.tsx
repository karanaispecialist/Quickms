"use client";

import { motion } from "framer-motion";
import { ArrowRight, MoveRight } from "lucide-react";

export default function SupplyChainSection() {
  const revealVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const steps = [
    { number: "01", label: "ORIGIN", detail: "Consolidation & Pickup" },
    { number: "02", label: "AIR / OCEAN", detail: "International Transit" },
    { number: "03", label: "CUSTOMS", detail: "Brokerage Clearance" },
    { number: "04", label: "TRANSPORTATION", detail: "Primary Logistics" },
    { number: "05", label: "WAREHOUSING", detail: "Storage & 3PL Hubs" },
    { number: "06", label: "DISTRIBUTION", detail: "Final Destination" }
  ];

  return (
    <section className="relative w-full bg-white text-brand-navy py-24 md:py-32 overflow-hidden border-t border-neutral-200/50 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        
        {/* Header Intro */}
        <div className="grid grid-cols-12 gap-y-6 lg:gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
            className="col-span-12 lg:col-span-7 flex flex-col gap-4"
          >
            <div className="flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.25em] text-neutral-muted uppercase font-bold">
              <span className="text-brand-orange">02 —</span>
              <span>The Logistics Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1] uppercase">
              ONE SHIPMENT. <br />
              MULTIPLE MOVEMENTS. <br />
              <span className="text-brand-orange">ONE PARTNER.</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
            className="col-span-12 lg:col-span-5 text-sm md:text-base text-neutral-muted leading-relaxed lg:pt-8 font-medium"
          >
            <p>
              A supply chain rarely depends on a single mode of transport. Quickmas connects
              international freight, customs clearance, transportation, warehousing, and final
              delivery into coordinated logistics solutions built around each requirement.
            </p>
          </motion.div>
        </div>

        {/* Visual Supply Chain Horizontal/Vertical Flow Diagram */}
        <div className="relative w-full mt-4">
          
          {/* Desktop/Tablet Horizontal Layout */}
          <div className="hidden md:grid grid-cols-6 gap-4 relative">
            {/* Horizontal Line connecting nodes */}
            <div className="absolute top-8 left-[8%] right-[8%] h-[1px] bg-neutral-200 border-dashed border-t pointer-events-none" />

            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Connector Circle */}
                <div className="w-16 h-16 rounded-full border border-neutral-200/80 bg-white flex items-center justify-center shadow-sm z-10 transition-colors duration-300 group-hover:border-brand-orange group-hover:shadow-md">
                  <span className="font-mono text-xs font-bold text-neutral-muted group-hover:text-brand-orange transition-colors duration-300">
                    {step.number}
                  </span>
                </div>

                {/* Info Text */}
                <h4 className="text-xs font-black tracking-widest text-brand-navy uppercase mt-6">
                  {step.label}
                </h4>
                <p className="text-[10px] font-mono text-neutral-muted uppercase tracking-wider mt-1.5 max-w-[130px]">
                  {step.detail}
                </p>

                {/* Arrow direction between steps */}
                {idx < steps.length - 1 && (
                  <div className="absolute top-[26px] -right-[15%] hidden lg:block text-neutral-300 group-hover:text-brand-orange transition-colors duration-300">
                    <MoveRight className="w-4 h-4" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Vertical Layout */}
          <div className="md:hidden flex flex-col gap-10 pl-6 relative">
            {/* Vertical Line */}
            <div className="absolute top-0 bottom-0 left-[23px] w-[1px] bg-neutral-200 border-dashed border-l pointer-events-none" />

            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="flex gap-6 items-start relative group"
              >
                {/* Node circle */}
                <div className="w-12 h-12 rounded-full border border-neutral-200 bg-white flex items-center justify-center z-10 shrink-0 shadow-sm group-hover:border-brand-orange">
                  <span className="font-mono text-xs font-bold text-neutral-muted group-hover:text-brand-orange">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center pt-2">
                  <h4 className="text-xs font-black tracking-widest text-brand-navy uppercase flex items-center gap-2">
                    <span>{step.label}</span>
                    <ArrowRight className="w-3 h-3 text-brand-orange" />
                  </h4>
                  <p className="text-[10px] font-mono text-neutral-muted uppercase tracking-wider mt-0.5">
                    {step.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
