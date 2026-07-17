"use client";

import { motion } from "framer-motion";
import { projectCargoIntro } from "./projectCargo.data";
import ProjectCargoMedia from "./ProjectCargoMedia";
import ProjectCargoCapabilities from "./ProjectCargoCapabilities";

export default function ProjectCargoSection() {
  // Reveal animation variants
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
      aria-label="Project Cargo and Specialized Logistics"
      className="relative w-full bg-[#F8FAFC] text-brand-navy py-24 md:py-32 overflow-hidden border-t border-neutral-200/50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-10 md:gap-12">
        
        {/* 1. Header Index Label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.25em] text-neutral-muted uppercase font-bold"
        >
          <span className="text-brand-orange">07 —</span>
          <span>{projectCargoIntro.label.replace(/^\d+\s*—\s*/, "")}</span>
          <span className="opacity-30">/</span>
          <span className="text-[9px] text-neutral-muted/75 font-sans lowercase font-semibold tracking-wide">
            {projectCargoIntro.secondaryLabel.toLowerCase()}
          </span>
        </motion.div>

        {/* 2. Headline & Supporting Copy */}
        <div className="grid grid-cols-12 gap-y-6 lg:gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
            className="col-span-12 lg:col-span-7 flex flex-col gap-2"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] uppercase select-none">
              WHEN THE CARGO <br />
              ISN&apos;T STANDARD, <br />
              NEITHER IS <br />
              <span className="text-brand-orange">THE SOLUTION.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
            className="col-span-12 lg:col-span-5 text-sm md:text-base text-neutral-muted leading-relaxed lg:pt-2 font-medium"
          >
            <p>{projectCargoIntro.copy}</p>
          </motion.div>
        </div>

        {/* 3. Expanding Scroll Cinematic Visual Container */}
        <ProjectCargoMedia />

        {/* 4. Structured Capabilities Editorial Grid Layout */}
        <ProjectCargoCapabilities />

      </div>
    </section>
  );
}
