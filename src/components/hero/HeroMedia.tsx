"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroMedia() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create lightweight scroll parallax
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 100]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0.4]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden bg-brand-navy-dark"
    >
      {/* Background Media Image - Premium aerial cargo port view */}
      <motion.div
        style={{ y, opacity }}
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 w-full h-full"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80"
          alt="Quickmas International Container Terminal Logistics Aerial View"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Refined gradient overlays — keep left dark for text, let right breathe more */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark via-brand-navy-dark/90 to-brand-navy-dark/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy-dark/70 to-brand-navy-dark/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(5,8,22,0.2)_0%,rgba(5,8,22,0.85)_70%)]" />

      {/* Orange ambient glow — subtle atmosphere */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brand-orange/[0.03] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[300px] bg-brand-orange/[0.02] blur-[120px] rounded-full pointer-events-none" />

      {/* Dynamic Route SVG grid overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-screen">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid-lines" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid-lines)" />
        </svg>
      </div>

      {/* Technical Logistics Data Details Overlay */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {/* Coordinate Label 1 - Rotterdam Hub */}
        <div className="absolute top-32 left-10 text-[9px] font-mono tracking-widest text-neutral-muted/50 uppercase">
          <span>HUB // ROTTERDAM [NL]</span>
          <br />
          <span>LAT. 51.9244° N / LON. 4.4777° E</span>
        </div>

        {/* Coordinate Label 2 - Singapore Hub */}
        <div className="absolute top-48 right-12 text-[9px] font-mono tracking-widest text-neutral-muted/50 uppercase text-right">
          <span>HUB // SINGAPORE [SG]</span>
          <br />
          <span>LAT. 1.3521° N / LON. 103.8198° E</span>
        </div>

        {/* Coordinate Label 3 - Mumbai Hub */}
        <div className="absolute bottom-40 left-12 text-[9px] font-mono tracking-widest text-neutral-muted/50 uppercase">
          <span>PORT // NHAVA SHEVA [IN]</span>
          <br />
          <span>LAT. 18.9482° N / LON. 72.9463° E</span>
        </div>
      </div>

      {/* Animated scan line — technical premium feel */}
      <motion.div
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-orange/10 to-transparent pointer-events-none"
      />
    </div>
  );
}
