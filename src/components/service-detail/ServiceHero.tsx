"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import type { ServiceHeroData } from "./serviceDetailData";

interface ServiceHeroProps {
  data: ServiceHeroData;
}

export default function ServiceHero({ data }: ServiceHeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const lineVariants = {
    hidden: { y: "110%" },
    visible: {
      y: 0,
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const handleScrollToCapabilities = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("capabilities");
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
    }
  };

  return (
    <section
      aria-label="Air Freight Service Introduction"
      className="relative w-full min-h-[100svh] flex flex-col justify-end overflow-hidden bg-[#F8FAFC]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.image}
          alt={data.imageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Layered gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC]/55 to-transparent" />
        <div className="absolute inset-0 bg-white/20" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pt-40 pb-16 md:pb-24 flex flex-col gap-8"
      >
        {/* Service Label */}
        <motion.div
          variants={fadeUpVariants}
          className="flex items-center gap-2 font-mono text-[10px] md:text-xs tracking-[0.25em] text-neutral-dark/50 uppercase font-semibold"
        >
          <span className="text-brand-orange">[</span>
          <span>{data.label}</span>
          <span className="text-brand-orange">]</span>
        </motion.div>

        {/* Headline */}
        <h1 className="flex flex-col text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-black tracking-tight leading-[0.95] text-brand-navy select-none">
          {data.headline.map((line, idx) => (
            <span key={idx} className="relative block overflow-hidden py-1">
              <motion.span
                variants={lineVariants}
                className={`block ${
                  idx === data.headline.length - 1
                    ? "text-brand-orange"
                    : ""
                }`}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Supporting Copy */}
        <motion.p
          variants={fadeUpVariants}
          className="text-sm md:text-base text-neutral-dark/80 max-w-xl leading-relaxed font-normal"
        >
          {data.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUpVariants}
          className="flex flex-wrap items-center gap-4 mt-2"
        >
          <Link
            href="/contact?service=air-freight"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-brand-orange text-white text-xs font-bold uppercase tracking-widest rounded-[2px] hover:bg-brand-orange-hover transition-colors duration-300 focus-ring shadow-lg shadow-brand-orange/20 group w-full sm:w-auto"
          >
            <span>Request Air Freight Quote</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <a
            href="#capabilities"
            onClick={handleScrollToCapabilities}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-neutral-200 hover:border-brand-navy text-brand-navy text-xs font-bold uppercase tracking-widest rounded-[2px] hover:bg-brand-navy/5 transition-colors duration-300 focus-ring group w-full sm:w-auto"
          >
            <span>Explore Services</span>
            <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </motion.div>

        {/* Metadata Tags */}
        <motion.div
          variants={fadeUpVariants}
          className="flex flex-wrap items-center gap-3 mt-4 select-none"
        >
          {data.tags.map((tag, idx) => (
            <span
              key={idx}
              className="font-mono text-[9px] tracking-[0.2em] text-neutral-dark/40 uppercase font-bold flex items-center gap-3"
            >
              {idx > 0 && (
                <span className="text-brand-orange/40">·</span>
              )}
              <span>{tag}</span>
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom edge fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-neutral-200 z-10" />
    </section>
  );
}
