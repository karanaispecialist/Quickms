"use client";

import { motion } from "framer-motion";
import { clientsData } from "./trust.data";

export default function ClientLogos() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="w-full mt-8">
      <div className="text-[10px] font-mono tracking-widest text-neutral-muted uppercase mb-6 select-none border-b border-neutral-200 pb-2">
        <span>Trusted By Key Enterprises</span>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 border-t border-l border-neutral-200/60"
      >
        {clientsData.map((client) => (
          <motion.div
            key={client.name}
            variants={itemVariants}
            className="aspect-[16/10] flex items-center justify-center p-6 border-r border-b border-neutral-200/60 bg-white hover:bg-neutral-light/20 transition-colors duration-300 relative group outline-none focus-ring"
            tabIndex={0}
            role="listitem"
            aria-label={`${client.name} client logo`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={client.logo}
              alt={`${client.name} Brand Logo`}
              className="max-w-[85%] max-h-[55%] object-contain select-none filter grayscale opacity-45 group-hover:grayscale-0 group-hover:opacity-100 group-focus:grayscale-0 group-focus:opacity-100 transition-all duration-300"
            />
            {/* Tiny hover tip */}
            <span className="absolute bottom-2 font-mono text-[8px] text-neutral-muted tracking-wider opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">
              {client.name.toUpperCase()}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
