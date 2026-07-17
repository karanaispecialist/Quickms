"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDownRight, Plane, Ship, Truck, Package, Warehouse, ShieldCheck } from "lucide-react";

/* ---------- animated globe / route viz (right column) ---------- */
function GlobeVisualization() {
  const hubs = [
    { cx: 200, cy: 140, label: "ROTTERDAM", delay: 0.5 },
    { cx: 320, cy: 200, label: "DUBAI", delay: 0.7 },
    { cx: 160, cy: 260, label: "MUMBAI", delay: 0.9 },
    { cx: 280, cy: 310, label: "SINGAPORE", delay: 1.1 },
    { cx: 100, cy: 200, label: "LONDON", delay: 1.3 },
  ];

  const routes = [
    { d: "M 100 200 Q 150 120 200 140", delay: 1.4 },
    { d: "M 200 140 Q 260 160 320 200", delay: 1.6 },
    { d: "M 320 200 Q 240 250 160 260", delay: 1.8 },
    { d: "M 160 260 Q 220 290 280 310", delay: 2.0 },
    { d: "M 100 200 Q 130 230 160 260", delay: 2.2 },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer glow ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="absolute w-[380px] h-[380px] md:w-[440px] md:h-[440px] rounded-full border border-brand-navy/[0.06]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        className="absolute w-[320px] h-[320px] md:w-[370px] md:h-[370px] rounded-full border border-brand-navy/[0.04]"
      />

      {/* Rotating orbit ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute w-[340px] h-[340px] md:w-[400px] md:h-[400px] rounded-full border border-dashed border-brand-orange/20"
      >
        {/* Orbiting dot */}
        <motion.div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-brand-orange rounded-full shadow-[0_0_12px_rgba(255,90,9,0.6)]" />
      </motion.div>

      {/* SVG route network */}
      <svg
        viewBox="0 0 420 420"
        className="absolute w-[380px] h-[380px] md:w-[440px] md:h-[440px]"
        fill="none"
      >
        {/* Grid circles */}
        <circle cx="210" cy="210" r="180" stroke="rgba(10,17,40,0.06)" strokeWidth="0.75" />
        <circle cx="210" cy="210" r="130" stroke="rgba(10,17,40,0.06)" strokeWidth="0.75" />
        <circle cx="210" cy="210" r="80" stroke="rgba(10,17,40,0.06)" strokeWidth="0.75" />

        {/* Animated route arcs */}
        {routes.map((route, i) => (
          <motion.path
            key={i}
            d={route.d}
            stroke="url(#routeGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: route.delay, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}

        {/* Hub dots with pulse */}
        {hubs.map((hub, i) => (
          <g key={i}>
            {/* Pulse ring */}
            <motion.circle
              cx={hub.cx}
              cy={hub.cy}
              r="12"
              fill="none"
              stroke="rgba(255,90,9,0.3)"
              strokeWidth="1"
              initial={{ r: 4, opacity: 0.6 }}
              animate={{ r: 16, opacity: 0 }}
              transition={{ duration: 2.5, repeat: Infinity, delay: hub.delay, ease: "easeOut" }}
            />
            {/* Static dot */}
            <motion.circle
              cx={hub.cx}
              cy={hub.cy}
              r="3.5"
              fill="#FF5A09"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: hub.delay }}
            />
            {/* Label */}
            <motion.text
              x={hub.cx + 8}
              y={hub.cy - 8}
              fill="rgba(10,17,40,0.5)"
              fontSize="7"
              fontFamily="monospace"
              letterSpacing="0.1em"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: hub.delay + 0.3 }}
            >
              {hub.label}
            </motion.text>
          </g>
        ))}

        {/* Gradient definition */}
        <defs>
          <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF5A09" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#FF5A09" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#FF5A09" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center logo pulse */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center backdrop-blur-sm"
      >
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-orange/30 flex items-center justify-center">
          <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-brand-orange shadow-[0_0_20px_rgba(255,90,9,0.5)]" />
        </div>
      </motion.div>

      {/* Floating service mode badges */}
      {[
        { icon: Plane, label: "AIR", x: "-left-4 md:left-0", y: "top-6 md:top-4", delay: 1.6 },
        { icon: Ship, label: "OCEAN", x: "-right-2 md:right-2", y: "top-16 md:top-12", delay: 1.8 },
        { icon: Truck, label: "ROAD", x: "-right-4 md:-right-2", y: "bottom-24 md:bottom-28", delay: 2.0 },
        { icon: Warehouse, label: "3PL", x: "-left-2 md:left-2", y: "bottom-12 md:bottom-16", delay: 2.2 },
        { icon: ShieldCheck, label: "CUSTOMS", x: "left-12 md:left-16", y: "-top-2 md:-top-4", delay: 2.4 },
        { icon: Package, label: "PROJECT", x: "right-10 md:right-14", y: "-bottom-2 md:-bottom-4", delay: 2.6 },
      ].map((badge, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.7, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: badge.delay, ease: [0.16, 1, 0.3, 1] }}
          className={`absolute ${badge.x} ${badge.y} flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm border border-neutral-200 shadow-md rounded-full`}
        >
          <badge.icon className="w-3 h-3 text-brand-orange" />
          <span className="text-[9px] font-mono font-bold tracking-widest text-brand-navy-light/80">{badge.label}</span>
        </motion.div>
      ))}
    </div>
  );

}

/* ---------- main hero content ---------- */
export default function HeroContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const lineVariants = {
    hidden: { y: "110%" },
    visible: {
      y: 0,
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-10 w-full px-6 md:px-12 pt-32 md:pt-40 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center"
    >
      {/* LEFT COLUMN — Typography + CTAs */}
      <div className="flex flex-col items-start text-left max-w-2xl">
        {/* 1. Eyebrow */}
        <motion.div
          variants={fadeUpVariants}
          className="flex items-center gap-2 font-mono text-[10px] md:text-xs tracking-[0.25em] text-brand-navy/60 uppercase font-semibold mb-6"
        >
          <span className="text-brand-orange">[</span>
          <span>Global Freight & Supply Chain Solutions</span>
          <span className="text-brand-orange">]</span>
        </motion.div>

        {/* 2. Headline with line-masked animation */}
        <h1 className="flex flex-col text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight leading-[0.95] md:leading-[0.9] text-brand-navy select-none">
          <span className="relative block overflow-hidden py-1">
            <motion.span variants={lineVariants} className="block">
              MOVING BUSINESS
            </motion.span>
          </span>
          <span className="relative block overflow-hidden py-1">
            <motion.span
              variants={lineVariants}
              className="block italic font-light text-brand-orange pr-2"
            >
              BEYOND BORDERS.
            </motion.span>
          </span>
        </h1>

        {/* 3. Supporting Description */}
        <motion.p
          variants={fadeUpVariants}
          className="text-sm md:text-base text-neutral-dark/85 max-w-xl leading-relaxed mt-8 font-normal"
        >
          Integrated freight forwarding and supply chain solutions connecting businesses across
          air, ocean, road, customs, warehousing, and final delivery.
        </motion.p>

        {/* 4. Action CTA Buttons */}
        <motion.div
          variants={fadeUpVariants}
          className="flex flex-wrap items-center gap-5 mt-10 w-full"
        >
          {/* Primary Quote CTA */}
          <Link
            href="/contact"
            className="relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-bold tracking-wider uppercase text-xs transition-all duration-300 rounded-[2px] focus-ring group bg-brand-orange text-white hover:text-brand-orange border border-brand-orange w-full sm:w-auto"
          >
            <span className="absolute inset-0 w-full h-full bg-white transition-transform duration-300 ease-out origin-bottom scale-y-0 group-hover:scale-y-100" />
            <span className="relative flex items-center gap-2">
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>

          {/* Secondary Services CTA */}
          <Link
            href="#services"
            className="inline-flex items-center gap-2 px-6 py-3.5 font-bold tracking-wider uppercase text-xs transition-colors duration-300 text-brand-navy hover:text-brand-orange focus-ring rounded group relative w-full sm:w-auto justify-center sm:justify-start"
          >
            <span>Explore Services</span>
            <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            <span className="absolute bottom-1 left-6 right-6 h-[1px] bg-brand-navy/15 group-hover:bg-brand-orange transition-colors duration-300" />
          </Link>
        </motion.div>
      </div>

      {/* RIGHT COLUMN — Animated Globe Visualization */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="hidden lg:flex items-center justify-center relative min-h-[480px]"
      >
        <GlobeVisualization />
      </motion.div>
    </motion.div>
  );
}
