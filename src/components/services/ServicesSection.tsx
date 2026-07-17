"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { servicesData, servicesIntro } from "./services.data";
import ServiceIndex from "./ServiceIndex";
import ServiceVisual from "./ServiceVisual";
import ServiceDetails from "./ServiceDetails";
import MobileServicesAccordion from "./MobileServicesAccordion";

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = servicesData[activeIndex];

  // Reveal variants
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
      aria-label="Capabilities"
      className="relative w-full bg-[#050816] text-white py-24 md:py-32 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12 md:gap-16">
        
        {/* 1. Header Index Label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.25em] text-neutral-muted uppercase font-bold"
        >
          <span className="text-brand-orange">04 —</span>
          <span>{servicesIntro.label.replace(/^\d+\s*—\s*/, "")}</span>
        </motion.div>

        {/* 2. Headline & Supporting Copy */}
        <div className="grid grid-cols-12 gap-y-6 lg:gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
            className="col-span-12 lg:col-span-6 flex flex-col gap-2"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1] uppercase select-none">
              {servicesIntro.headlineLine1} <br />
              {servicesIntro.headlineLine2} <br />
              <span className="text-brand-orange">{servicesIntro.headlineLine3}</span>
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
            className="col-span-12 lg:col-span-6 text-sm md:text-base text-neutral-light/70 leading-relaxed lg:pt-2"
          >
            <p>{servicesIntro.description}</p>
          </motion.div>
        </div>

        {/* 3. Primary Section Layout Grid */}
        <div className="grid grid-cols-12 gap-y-12 lg:gap-16 items-start mt-8">
          
          {/* DESKTOP VIEWPORT: Split Panel Layout */}
          {/* Left Panel: Service Index */}
          <div className="col-span-12 lg:col-span-6 hidden lg:block">
            <ServiceIndex
              services={servicesData}
              activeIndex={activeIndex}
              onSelect={setActiveIndex}
            />
          </div>

          {/* Right Panel: Sticky Image & Details Block */}
          <div className="col-span-12 lg:col-span-6 hidden lg:flex lg:sticky lg:top-28 lg:self-start flex-col">
            <ServiceVisual activeService={activeService} />
            <ServiceDetails activeService={activeService} />
          </div>

          {/* TABLET / MOBILE VIEWPORT: Collapsible Accordions */}
          <div className="col-span-12 lg:hidden">
            <MobileServicesAccordion services={servicesData} />
          </div>

        </div>

      </div>
    </section>
  );
}
