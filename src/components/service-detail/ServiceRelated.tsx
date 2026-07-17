"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ServiceRelatedItem } from "./serviceDetailData";

interface ServiceRelatedProps {
  data: ServiceRelatedItem[];
}

export default function ServiceRelated({ data }: ServiceRelatedProps) {
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  return (
    <section
      aria-label="Related Logistics Services"
      className="relative w-full bg-white text-brand-navy py-24 md:py-32 overflow-hidden border-t border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-16 items-start">
          {/* Left Column — Label */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.25em] text-neutral-muted uppercase font-bold"
            >
              <span className="text-brand-orange">08 —</span>
              <span>Related Services</span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-[1] uppercase"
            >
              CONNECTED{" "}
              <span className="text-brand-orange">CAPABILITIES.</span>
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-sm text-neutral-dark/70 leading-relaxed max-w-sm"
            >
              Air freight works alongside other logistics capabilities to
              support complete supply chain requirements.
            </motion.p>
          </div>

          {/* Right Column — Service Links */}
          <motion.nav
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="col-span-12 lg:col-span-8 flex flex-col border-t border-neutral-200"
            aria-label="Related service navigation"
          >
            {data.map((item, idx) => (
              <motion.div key={idx} variants={revealVariants}>
                <Link
                  href={item.href}
                  className="group flex items-center justify-between py-6 md:py-8 border-b border-neutral-200 transition-colors duration-300 hover:bg-brand-navy/5 px-2 md:px-4 -mx-2 md:-mx-4 rounded-[2px] focus-ring"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <span className="font-mono text-[10px] text-brand-orange/50 tracking-widest font-bold">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg md:text-xl font-black tracking-tight uppercase text-brand-navy group-hover:text-brand-orange transition-colors duration-400 select-none">
                      {item.title}
                    </h3>
                  </div>

                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-brand-navy/20 group-hover:text-brand-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        </div>
      </div>
    </section>
  );
}
