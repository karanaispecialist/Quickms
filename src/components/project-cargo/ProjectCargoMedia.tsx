"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ProjectCargoMedia() {
  const mediaContainerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking for expanding frame and parallax zoom
  const { scrollYProgress } = useScroll({
    target: mediaContainerRef,
    offset: ["start end", "center center"],
  });

  // Scale frame width from 80% to 100%
  const widthTransform = useTransform(scrollYProgress, [0, 1], ["82%", "100%"]);
  // Scale container border-radius down on expand
  const radiusTransform = useTransform(scrollYProgress, [0, 1], ["6px", "0px"]);
  // Subtle parallax scaling for the image inside
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <div ref={mediaContainerRef} className="w-full py-6 select-none relative">
      <motion.div
        style={{
          width: widthTransform,
          borderRadius: radiusTransform,
        }}
        className="relative mx-auto h-[260px] sm:h-[380px] md:h-[480px] lg:h-[540px] overflow-hidden border border-neutral-200/50 shadow-[0_20px_50px_rgba(0,0,0,0.04)] bg-neutral-light"
      >
        {/* Parallax Image */}
        <motion.div style={{ scale: imageScale }} className="absolute inset-0 w-full h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&w=1600&q=80"
            alt="Quickmas specialized heavy-lift project cargo logistics"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Cinematic light overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-transparent pointer-events-none" />

        {/* Technical Coordinate Overlay Grid (Border annotations) */}
        <div className="absolute inset-0 p-4 sm:p-6 z-10 pointer-events-none flex flex-col justify-between font-mono text-[8px] sm:text-[9px] tracking-widest text-white/95">
          {/* Top Row Annotations */}
          <div className="flex justify-between items-center bg-brand-navy/60 backdrop-blur-xs px-2.5 py-1.5 border border-white/5 rounded-[2px] w-full">
            <span>[ LOC // MULTIMODAL TRADE LANES ]</span>
            <span>[ STAT // HEAVY-LIFT ACTIVE ]</span>
          </div>

          {/* Bottom Row Annotations */}
          <div className="flex justify-between items-center bg-brand-navy/60 backdrop-blur-xs px-2.5 py-1.5 border border-white/5 rounded-[2px] w-full">
            <span>[ DIM // OVERSIZED / ODC SPEC ]</span>
            <span>[ CAP // PLAN & EXECUTE VER. 07 ]</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
