"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { serviceItems, featuredSupplyChain } from "./navigation.data";

interface ServicesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  scrolled: boolean;
}

export default function ServicesMegaMenu({
  isOpen,
  onClose,
  scrolled,
}: ServicesMegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Stagger variants
  const containerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 1, 0.5, 1], // premium easeOut
        staggerChildren: 0.04,
      },
    },
    exit: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  };

  // Styling based on navbar state
  const bgStyle = scrolled
    ? "bg-white border-neutral-200 text-neutral-dark shadow-2xl"
    : "bg-brand-navy border-white/10 text-white shadow-[0_20px_50px_rgba(0,0,0,0.5)]";

  const dividerStyle = scrolled ? "border-neutral-200" : "border-white/10";
  const numStyle = scrolled ? "text-brand-orange" : "text-brand-orange/80";
  const featureBgStyle = scrolled ? "bg-neutral-light border-neutral-200" : "bg-brand-navy-dark border-white/5";

  return (
    <motion.div
      ref={menuRef}
      role="region"
      aria-label="Services Mega Menu"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`absolute left-0 right-0 top-full mt-2 w-full max-w-7xl mx-auto rounded-[3px] border overflow-hidden z-50 ${bgStyle}`}
    >
      <div className="grid grid-cols-12 gap-0">
        {/* Left Area: Services */}
        <div className="col-span-8 p-8 md:p-10">
          <div className="flex flex-col gap-6">
            <span className={`text-[10px] uppercase tracking-[0.2em] font-semibold ${scrolled ? "text-neutral-muted" : "text-white/40"}`}>
              Logistics Services
            </span>

            <div className="grid grid-cols-2 gap-x-12 gap-y-6">
              {serviceItems.map((service) => (
                <motion.div key={service.id} variants={itemVariants}>
                  <Link
                    href={service.href}
                    onClick={onClose}
                    className={`group flex items-start gap-4 py-2 border-b ${dividerStyle} hover:border-brand-orange transition-colors duration-300 focus-ring rounded`}
                  >
                    <span className={`text-[11px] font-mono font-medium ${numStyle}`}>
                      {service.id}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm transition-transform duration-300 group-hover:translate-x-1">
                          {service.title}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-brand-orange opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                      </div>
                      <p className={`text-xs mt-1 leading-relaxed line-clamp-2 ${scrolled ? "text-neutral-muted" : "text-white/60"}`}>
                        {service.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Area: Featured Supply Chain */}
        <div className={`col-span-4 p-8 md:p-10 border-l ${dividerStyle} flex flex-col justify-between ${featureBgStyle}`}>
          <div className="flex flex-col gap-4">
            <span className={`text-[10px] uppercase tracking-[0.2em] font-semibold ${scrolled ? "text-neutral-muted" : "text-white/40"}`}>
              Featured Solution
            </span>
            <h3 className="text-base font-bold tracking-tight mt-2">
              {featuredSupplyChain.title}
            </h3>
            <p className={`text-xs leading-relaxed ${scrolled ? "text-neutral-muted" : "text-white/60"}`}>
              {featuredSupplyChain.description}
            </p>

            {/* Restrained visual placeholder - Premium abstract SVG vector logo grid */}
            <div className="relative h-24 mt-2 w-full rounded border border-dashed border-neutral-muted/20 flex items-center justify-center overflow-hidden bg-brand-navy-light/10">
              <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
              <span className={`text-[10px] tracking-widest uppercase font-mono ${scrolled ? "text-neutral-muted" : "text-white/40"}`}>
                Global Network Visualizer
              </span>
            </div>
          </div>

          <Link
            href={featuredSupplyChain.href}
            onClick={onClose}
            className="group flex items-center gap-2 text-xs font-semibold text-brand-orange hover:text-brand-orange-hover mt-6 focus-ring rounded w-fit"
          >
            <span>{featuredSupplyChain.ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
