"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Info } from "lucide-react";

interface FinderOption {
  number: string;
  requirement: string;
  recommendedService: string;
  serviceId: string;
  href: string;
  description: string;
}

const finderOptions: FinderOption[] = [
  {
    number: "01",
    requirement: "TIME-SENSITIVE INTERNATIONAL CARGO",
    recommendedService: "AIR FREIGHT",
    serviceId: "air-freight",
    href: "/services/air-freight",
    description: "Fast, secure, and reliable air cargo solutions for critical time-sensitive shipments."
  },
  {
    number: "02",
    requirement: "CONTAINERIZED INTERNATIONAL CARGO",
    recommendedService: "OCEAN FREIGHT",
    serviceId: "ocean-freight",
    href: "/services/ocean-freight",
    description: "Cost-effective FCL and LCL container shipping across all major global trade lanes."
  },
  {
    number: "03",
    requirement: "IMPORT / EXPORT CLEARANCE",
    recommendedService: "CUSTOMS BROKERAGE",
    serviceId: "customs-brokerage",
    href: "/services/customs-brokerage",
    description: "Efficient import and export clearance managed by certified customs compliance experts."
  },
  {
    number: "04",
    requirement: "STORAGE & 3PL FULFILMENT",
    recommendedService: "WAREHOUSING & 3PL",
    serviceId: "warehousing-3pl",
    href: "/services/warehousing-3pl",
    description: "Scalable storage, inventory control, pick & pack operations, and distribution."
  },
  {
    number: "05",
    requirement: "DOMESTIC CARGO MOVEMENT",
    recommendedService: "PRIMARY TRANSPORTATION",
    serviceId: "primary-transportation",
    href: "/services/primary-transportation",
    description: "Reliable domestic road distribution connecting ports, airports, and warehouse terminals."
  },
  {
    number: "06",
    requirement: "OVERSIZED / COMPLEX CARGO",
    recommendedService: "PROJECT CARGO",
    serviceId: "project-cargo",
    href: "/services/project-cargo",
    description: "Specialized logistics planning and execution for heavy-lift, out-of-gauge, and high-value cargo."
  }
];

export default function ServiceFinder() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const activeOpt = finderOptions[selectedIndex];

  const revealVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

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
              <span className="text-brand-orange">05 —</span>
              <span>Service Finder</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1] uppercase">
              WHAT DO <br />
              <span className="text-brand-orange">YOU NEED TO MOVE?</span>
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
              Match your logistics scenario with the appropriate Quickmas operations capability to
              help organize your cargo movement.
            </p>
          </motion.div>
        </div>

        {/* Interactive Layout Split Grid */}
        <div className="grid grid-cols-12 gap-y-10 lg:gap-16 items-start mt-4">
          
          {/* Left Area: Selectable Requirement Rows */}
          <ul className="col-span-12 lg:col-span-7 flex flex-col border-t border-neutral-200" role="list">
            {finderOptions.map((opt, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <li key={opt.number} className="w-full">
                  <button
                    onClick={() => setSelectedIndex(idx)}
                    className={`w-full flex items-center justify-between py-5 border-b border-neutral-200/80 text-left transition-all duration-300 outline-none focus-ring rounded-[1px] px-3
                      ${isSelected 
                        ? "bg-neutral-light/50 border-brand-orange pl-6" 
                        : "hover:bg-neutral-light/20 hover:pl-5"
                      }
                    `}
                    aria-pressed={isSelected}
                  >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-xs font-bold transition-colors duration-300
                      ${isSelected ? "text-brand-orange" : "text-neutral-muted"}
                    `}>
                      {opt.number}
                    </span>
                    <span className={`text-xs md:text-sm font-black tracking-wider transition-colors duration-300 uppercase
                      ${isSelected ? "text-brand-navy" : "text-neutral-muted"}
                    `}>
                      {opt.requirement}
                    </span>
                  </div>
                  <span className={`text-xs font-mono font-bold transition-transform duration-300
                    ${isSelected ? "text-brand-orange translate-x-1" : "text-neutral-300"}
                  `}>
                    →
                  </span>
                </button>
              </li>
              );
            })}
          </ul>

          {/* Right Area: Dynamic Recommendations details card */}
          <div className="col-span-12 lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeOpt.number}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="p-6 md:p-8 bg-neutral-light border border-neutral-200/80 rounded-[3px] shadow-sm flex flex-col gap-6"
              >
                {/* Header recommendation tag */}
                <div className="flex justify-between items-center border-b border-neutral-200/60 pb-4">
                  <span className="font-mono text-[9px] text-neutral-muted tracking-[0.2em] uppercase">
                    [ RECOMMENDATION ]
                  </span>
                  <span className="text-xs font-mono font-bold text-brand-orange">
                    SUGGESTION
                  </span>
                </div>

                {/* Details */}
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] text-neutral-muted tracking-widest uppercase">
                    RECOMMENDED CAPABILITY
                  </span>
                  <h4 className="text-2xl font-black text-brand-navy tracking-tight leading-none uppercase">
                    {activeOpt.recommendedService}
                  </h4>
                  <p className="text-xs md:text-sm text-neutral-muted leading-relaxed mt-2 font-medium">
                    {activeOpt.description}
                  </p>
                </div>

                {/* Direct Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 border-t border-neutral-200/60 pt-6">
                  {/* Explore details */}
                  <Link
                    href={activeOpt.href}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-neutral-200 hover:border-brand-navy bg-white text-brand-navy text-[10px] font-mono font-bold tracking-widest uppercase rounded-[2px] transition-colors duration-250 outline-none focus-ring w-full sm:w-auto"
                  >
                    <span>EXPLORE SERVICE</span>
                    <span>↗</span>
                  </Link>

                  {/* Get a quote */}
                  <Link
                    href={`/contact?service=${activeOpt.serviceId}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-brand-orange text-white text-[10px] font-mono font-bold tracking-widest uppercase rounded-[2px] hover:bg-brand-orange-hover transition-colors duration-250 outline-none focus-ring shadow-md shadow-brand-orange/10 w-full sm:w-auto"
                  >
                    <span>GET A QUOTE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Advisory microcopy */}
            <div className="flex gap-3 items-start p-4 bg-neutral-light/30 border border-neutral-200/50 rounded-[2px] mt-6 font-mono text-[9px] text-neutral-muted leading-relaxed">
              <Info className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
              <p>
                Not sure which service fits your requirement? Talk to our logistics team and
                we will help identify the right connected supply chain approach.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
