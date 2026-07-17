"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="absolute bottom-6 right-6 md:right-12 z-20 flex flex-col items-center gap-2 pointer-events-none"
    >
      <span className="text-[8px] font-mono tracking-[0.25em] text-neutral-muted/80 uppercase [writing-mode:vertical-lr] select-none">
        Scroll to Explore
      </span>
      <div className="w-[1px] h-12 bg-brand-navy/15 relative overflow-hidden">
        {/* Animated indicator line dot sliding down */}
        <motion.div
          animate={{
            y: ["0%", "200%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-full h-4 bg-brand-orange"
        />
      </div>
    </motion.div>
  );
}
