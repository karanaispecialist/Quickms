"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Service } from "./services.data";

interface ServiceVisualProps {
  activeService: Service;
}

export default function ServiceVisual({ activeService }: ServiceVisualProps) {
  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/10] overflow-hidden rounded-[3px] border border-neutral-200 shadow-md bg-white select-none">
      
      {/* Dynamic clip-path wipe animation container */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeService.id}
          initial={{ clipPath: "polygon(0 0, 0 100%, 0 100%, 0 0)", opacity: 0.8 }}
          animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1 }}
          exit={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)", opacity: 0.8 }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={activeService.image}
            alt={`Quickmas ${activeService.title} Logistics Operations`}
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Subtle overlay gradient to match the light theme */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/10 pointer-events-none" />

      {/* Minimal movement grid path details - Technical route accent overlay */}
      <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none flex items-center justify-between font-mono text-[9px] tracking-widest text-brand-navy-light/70 bg-white/90 backdrop-blur-xs border border-neutral-200 py-2 px-3 rounded-[2px]">
        <div className="flex items-center gap-1.5">
          <span className="text-brand-orange font-bold">ORG</span>
          <span className="opacity-40">●</span>
        </div>
        
        {/* Subtle sliding route dot overlay */}
        <div className="flex-1 mx-4 h-[1px] bg-brand-navy/15 relative">
          <motion.div
            key={activeService.id}
            initial={{ left: "0%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand-orange shadow-[0_0_8px_#FF5A09]"
          />
        </div>

        <div className="flex items-center gap-1.5">
          <span className="opacity-40">●</span>
          <span className="text-brand-orange font-bold">DST</span>
        </div>
      </div>
    </div>
  );
}
