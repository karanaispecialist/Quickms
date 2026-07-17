"use client";

import { motion } from "framer-motion";
import { trustIntro } from "./trust.data";
import ClientLogos from "./ClientLogos";
import Memberships from "./Memberships";

export default function TrustSection() {
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
      aria-label="Trust and Credibility"
      className="relative w-full bg-white text-brand-navy py-24 md:py-32 overflow-hidden border-t border-neutral-200/50"
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
          <span className="text-brand-orange">08 —</span>
          <span>{trustIntro.label.replace(/^\d+\s*—\s*/, "")}</span>
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
              TRUSTED TO <br />
              KEEP BUSINESS <br />
              <span className="text-brand-orange">MOVING.</span>
            </h2>
            <span className="text-xs font-bold tracking-widest font-mono text-neutral-muted uppercase mt-2">
              {trustIntro.sublabel}
            </span>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
            className="col-span-12 lg:col-span-5 text-sm md:text-base text-neutral-muted leading-relaxed lg:pt-2 font-medium"
          >
            <p>{trustIntro.copy}</p>
          </motion.div>
        </div>

        {/* 3. Clients Logos Editorial Grid */}
        <ClientLogos />

        {/* 4. Typographic Editorial Divider Callout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="w-full text-center py-16 md:py-24 select-none flex flex-col items-center justify-center border-t border-b border-neutral-100 my-8"
        >
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-brand-navy leading-none">
            {trustIntro.editorialStatementLine1}
            <span className="block text-brand-orange mt-2 italic font-light font-sans normal-case">
              {trustIntro.editorialStatementLine2.toLowerCase()}
            </span>
          </h3>
        </motion.div>

        {/* 5. Memberships and Certifications Grid */}
        <Memberships />

      </div>
    </section>
  );
}
