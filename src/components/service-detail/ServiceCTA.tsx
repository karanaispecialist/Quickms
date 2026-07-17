"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ServiceCTAData } from "./serviceDetailData";

interface ServiceCTAProps {
  data: ServiceCTAData;
}

export default function ServiceCTA({ data }: ServiceCTAProps) {
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
      aria-label="Request Air Freight Quote"
      className="relative w-full bg-brand-navy-dark text-white py-24 md:py-32 overflow-hidden border-t border-white/5"
    >
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-16 items-start">
          {/* Left Column: Headline */}
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.25em] text-neutral-muted uppercase font-bold"
            >
              <span className="text-brand-orange">09 —</span>
              <span>Start a Conversation</span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] uppercase select-none"
            >
              {data.headline.map((line, idx) => (
                <span key={idx} className="block">
                  {idx === data.headline.length - 1 ? (
                    <span className="text-brand-orange">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              ))}
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
              {data.description}
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              {/* Primary CTA */}
              <Link
                href={data.primaryHref}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-brand-orange text-white text-xs font-bold uppercase tracking-widest rounded-[2px] hover:bg-brand-orange-hover transition-colors duration-300 focus-ring shadow-lg shadow-brand-orange/10 group"
              >
                <span>{data.primaryCta}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href={data.secondaryHref}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 hover:border-white/30 text-white text-xs font-bold uppercase tracking-widest rounded-[2px] hover:bg-white/5 transition-colors duration-300 focus-ring"
              >
                <span>{data.secondaryCta}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
