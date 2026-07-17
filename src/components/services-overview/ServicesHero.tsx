"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function ServicesHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const modesList = [
    "01 / AIR FREIGHT",
    "02 / OCEAN FREIGHT",
    "03 / CUSTOMS BROKERAGE",
    "04 / WAREHOUSING & 3PL",
    "05 / PRIMARY TRANSPORTATION",
    "06 / PROJECT CARGO"
  ];

  const handleScrollToDirectory = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("directory");
    if (target) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
      });
    }
  };

  return (
    <section className="relative w-full bg-[#050816] text-white pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden select-none">
      {/* Glow highlight */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-12 gap-y-12 lg:gap-16 items-center"
        >
          {/* Left Column: Typography Content */}
          <div className="col-span-12 lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow Index */}
            <motion.div
              variants={fadeUpVariants}
              className="flex items-center gap-2 font-mono text-[10px] md:text-xs tracking-[0.25em] text-white/50 uppercase font-semibold mb-6"
            >
              <span className="text-brand-orange">[</span>
              <span>SERVICES / 01—06</span>
              <span className="text-brand-orange">]</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUpVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1] uppercase"
            >
              EVERY MODE. <br />
              ONE CONNECTED <br />
              <span className="text-brand-orange">SUPPLY CHAIN.</span>
            </motion.h1>

            {/* Description Copy */}
            <motion.p
              variants={fadeUpVariants}
              className="text-sm md:text-base text-neutral-light/70 max-w-xl leading-relaxed mt-8 font-normal"
            >
              From international freight and customs clearance to warehousing, transportation, and
              specialized project cargo, Quickmas connects every stage of the logistics journey
              through one integrated network.
            </motion.p>

            {/* CTA Actions */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-wrap items-center gap-4 mt-10 w-full"
            >
              <a
                href="#directory"
                onClick={handleScrollToDirectory}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-brand-navy-dark text-xs font-bold uppercase tracking-widest rounded-[2px] hover:bg-neutral-light transition-colors duration-300 focus-ring group w-full sm:w-auto"
              >
                <span>Explore Capabilities</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/10 hover:border-white/30 text-white text-xs font-bold uppercase tracking-widest rounded-[2px] hover:bg-white/5 transition-colors duration-300 focus-ring w-full sm:w-auto"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Visual checklist & image combo */}
          <motion.div
            variants={fadeUpVariants}
            className="col-span-12 lg:col-span-5 flex flex-col gap-6"
          >
            {/* Index Checklist Block */}
            <div className="border border-white/5 bg-white/[0.02] backdrop-blur-xs p-6 rounded-[2px] flex flex-col gap-4">
              <span className="font-mono text-[9px] text-neutral-muted tracking-[0.2em] uppercase">
                [ SERVICE CATEGORIES ]
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[10px] font-mono font-bold text-white/80 tracking-wider">
                {modesList.map((mode, idx) => (
                  <div key={idx} className="flex items-center gap-2 border-b border-white/5 pb-2">
                    <span className="text-brand-orange">{"//"}</span>
                    <span>{mode.replace(/^\d+\s*\/\s*/, "")}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Image container */}
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[2px] border border-white/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"
                alt="Quickmas global multi-modal logistics facility"
                className="w-full h-full object-cover object-center filter grayscale opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/35 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
