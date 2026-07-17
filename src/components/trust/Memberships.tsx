"use client";

import { motion } from "framer-motion";
import { membershipsData } from "./trust.data";

export default function Memberships() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="w-full mt-16 select-none">
      <div className="text-[10px] font-mono tracking-widest text-neutral-muted uppercase mb-6 border-b border-neutral-200 pb-2 flex justify-between items-center">
        <span>Memberships & Certifications</span>
        <span>Credentials List</span>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {membershipsData.map((item) => (
          <motion.div
            key={item.number}
            variants={itemVariants}
            className="flex flex-col justify-between p-6 bg-white border border-neutral-200/60 rounded-[3px] shadow-[0_5px_15px_rgba(0,0,0,0.01)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.02)] transition-shadow duration-300 relative group outline-none focus-ring"
            tabIndex={0}
          >
            {/* Header Tag */}
            <div className="flex justify-between items-center border-b border-neutral-100 pb-3">
              <span className="font-mono text-xs font-bold text-brand-orange">
                {item.number}
              </span>
              <span className="font-mono text-[8px] text-neutral-muted tracking-wider uppercase font-bold">
                [ VERIFIED ]
              </span>
            </div>

            {/* Logo Image */}
            <div className="w-full aspect-[2/1] my-6 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.logo}
                alt={`${item.name} certification mark`}
                className="max-w-[70%] max-h-[85%] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col gap-1">
              <h4 className="text-sm font-extrabold tracking-tight text-brand-navy uppercase">
                {item.name}
              </h4>
              <span className="text-[9px] font-mono tracking-widest text-neutral-muted uppercase">
                {item.type}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
