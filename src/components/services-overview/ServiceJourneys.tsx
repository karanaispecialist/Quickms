"use client";

import { motion } from "framer-motion";
import { Landmark, Ship, Truck, HardHat, Compass, Plane, Archive } from "lucide-react";

export default function ServiceJourneys() {
  const revealVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const journeys = [
    {
      title: "INTERNATIONAL IMPORT",
      steps: [
        { label: "Ocean Freight", icon: Ship },
        { label: "Customs Brokerage", icon: Landmark },
        { label: "Primary Transport", icon: Truck },
        { label: "Warehousing", icon: Archive }
      ],
      description: "Coordinated movement from international origin through clearance, inland transportation, and storage."
    },
    {
      title: "TIME-CRITICAL CARGO",
      steps: [
        { label: "Air Freight", icon: Plane },
        { label: "Customs Brokerage", icon: Landmark },
        { label: "Primary Transport", icon: Truck }
      ],
      description: "A connected path for cargo requiring faster international movement and coordinated domestic delivery."
    },
    {
      title: "COMPLEX INDUSTRIAL MOVEMENT",
      steps: [
        { label: "Project Cargo", icon: HardHat },
        { label: "Route Planning", icon: Compass },
        { label: "Customs Support", icon: Landmark },
        { label: "Multimodal Transport", icon: Truck }
      ],
      description: "Specialized planning and execution for oversized, heavy-lift, and complex cargo requirements."
    }
  ];

  return (
    <section className="relative w-full bg-white text-brand-navy py-24 md:py-32 overflow-hidden border-t border-neutral-200 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        
        {/* Header Intro */}
        <div className="grid grid-cols-12 gap-y-6 lg:gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
            className="col-span-12 lg:col-span-6 flex flex-col gap-4"
          >
            <div className="flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.25em] text-neutral-muted uppercase font-bold">
              <span className="text-brand-orange">04 —</span>
              <span>Integrated Logistics</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1] uppercase">
              NOT JUST <br />
              ONE MODE. <br />
              THE WHOLE <br />
              <span className="text-brand-orange">MOVEMENT.</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
            className="col-span-12 lg:col-span-6 text-sm md:text-base text-neutral-dark/70 leading-relaxed lg:pt-12 font-medium"
          >
            <p>
              By combining logistics operations, Quickmas orchestrates time-sensitive import and
              export campaigns, warehousing, custom broker clearance, and heavy machinery transfers
              as one continuous operation.
            </p>
          </motion.div>
        </div>

        {/* Combined Journeys Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {journeys.map((journey, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col justify-between p-6 bg-[#F8FAFC] border border-neutral-200 rounded-[2px] shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div>
                {/* Journey Title */}
                <h3 className="font-mono text-xs font-bold text-brand-orange tracking-wider uppercase mb-6 border-b border-neutral-200 pb-3">
                  {journey.title}
                </h3>

                {/* Vertical Step Flows */}
                <div className="flex flex-col gap-4">
                  {journey.steps.map((step, stepIdx) => {
                    const IconComp = step.icon;
                    return (
                      <div key={stepIdx} className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                          {/* Circle Icon */}
                          <div className="w-8 h-8 rounded-full bg-brand-navy/5 border border-neutral-200 flex items-center justify-center text-brand-navy/80">
                            <IconComp className="w-4 h-4" />
                          </div>
                          {/* Step label */}
                          <span className="text-xs font-mono font-bold tracking-wide text-brand-navy/90">
                            {step.label.toUpperCase()}
                          </span>
                        </div>

                        {/* Connecting Arrow */}
                        {stepIdx < journey.steps.length - 1 && (
                          <div className="pl-3.5 text-neutral-muted">
                            <span className="text-xs font-black">↓</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Journey description */}
              <p className="text-[11px] md:text-xs text-neutral-dark/70 mt-8 border-t border-neutral-200 pt-4 leading-relaxed font-mono font-medium">
                {journey.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
