"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Service } from "./services.data";

interface ServiceDetailsProps {
  activeService: Service;
}

export default function ServiceDetails({ activeService }: ServiceDetailsProps) {
  // Stagger configurations
  const containerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div
      role="tabpanel"
      id={`service-panel-${activeService.id}`}
      aria-labelledby={`service-tab-${activeService.id}`}
      className="flex flex-col gap-6 md:gap-8 text-left w-full mt-8"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeService.id}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          {/* Service Header Info */}
          <div className="flex flex-col gap-2">
            <motion.span variants={itemVariants} className="text-xs font-mono font-bold text-brand-orange/80">
              {activeService.number} {"// CAPABILITY"}
            </motion.span>
            <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-black tracking-tight text-brand-navy uppercase">
              {activeService.title}
            </motion.h3>
            <motion.p variants={itemVariants} className="text-sm text-neutral-dark/85 leading-relaxed mt-2 max-w-xl">
              {activeService.description}
            </motion.p>
          </div>

          {/* Capabilities Grid - Structured Operational Metadata */}
          <div className="flex flex-col gap-3">
            <motion.span variants={itemVariants} className="text-[9px] font-mono tracking-[0.2em] text-neutral-muted/70 uppercase">
              [ Key Operations ]
            </motion.span>
            <div className="grid grid-cols-2 gap-3 max-w-xl">
              {activeService.capabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-2 py-2 px-3 bg-brand-navy/5 border border-neutral-200 text-[10px] md:text-xs font-semibold font-mono tracking-wider uppercase text-brand-navy/80 rounded-[2px]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange/70" />
                  <span>{cap}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dynamic Service CTA */}
          <motion.div variants={itemVariants} className="pt-4">
            <Link
              href={activeService.href}
              className="inline-flex items-center gap-2 group text-xs font-bold uppercase tracking-wider text-brand-orange hover:text-brand-orange-hover focus-ring rounded w-fit relative py-2"
            >
              <span>Explore {activeService.title}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-orange group-hover:w-full transition-all duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
