"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projectCargoCapabilities } from "./projectCargo.data";

export default function ProjectCargoCapabilities() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="flex flex-col gap-12 w-full mt-6">
      
      {/* 3-Column Capability Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {projectCargoCapabilities.map((cap) => (
          <motion.div
            key={cap.number}
            variants={cardVariants}
            className="flex flex-col justify-between p-6 bg-white border border-neutral-200/60 rounded-[3px] shadow-[0_5px_15px_rgba(0,0,0,0.01)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.02)] transition-shadow duration-300 select-none group"
          >
            <div className="flex flex-col gap-4">
              {/* Card Header info */}
              <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                <span className="font-mono text-xs font-bold text-brand-orange">
                  {cap.number}
                </span>
                <span className="font-mono text-[9px] text-neutral-muted tracking-wider uppercase font-bold">
                  {cap.meta}
                </span>
              </div>
              
              {/* Card Title */}
              <h3 className="text-base font-extrabold tracking-tight text-brand-navy uppercase group-hover:text-brand-orange transition-colors duration-300">
                {cap.title}
              </h3>
              
              {/* Card Description */}
              <p className="text-xs text-neutral-muted leading-relaxed font-medium">
                {cap.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Consult Consultation CTA link */}
      <div className="flex justify-center items-center pt-4">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-navy-dark text-white text-xs font-bold uppercase tracking-widest rounded-[2px] shadow-md hover:bg-brand-orange transition-colors duration-300 focus-ring group"
        >
          <span>Discuss a Project</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

    </div>
  );
}
