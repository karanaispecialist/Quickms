"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServicesCTA() {
  const revealVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative w-full bg-brand-navy-dark text-white py-24 md:py-32 overflow-hidden border-t border-white/5 select-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-orange/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-16 items-start">
          
          {/* Left Column: Headline */}
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.25em] text-neutral-muted uppercase font-bold">
              <span className="text-brand-orange">06 —</span>
              <span>Start a Conversation</span>
            </div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1] uppercase"
            >
              ONE REQUIREMENT. <br />
              THE RIGHT <br />
              <span className="text-brand-orange">LOGISTICS SOLUTION.</span>
            </motion.h2>
          </div>

          {/* Right Column: Description & CTAs */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-8 lg:pt-8">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-sm md:text-base text-neutral-light/70 leading-relaxed font-medium"
            >
              Tell us what needs to move, where it needs to go, and the complexity involved.
              Our logistics team will help identify the right combination of services.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-orange text-white text-xs font-bold uppercase tracking-widest rounded-[2px] hover:bg-brand-orange-hover transition-colors duration-300 focus-ring shadow-lg shadow-brand-orange/10 group"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 hover:border-white/30 text-white text-xs font-bold uppercase tracking-widest rounded-[2px] hover:bg-white/5 transition-colors duration-300 focus-ring"
              >
                <span>Contact our Team</span>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
