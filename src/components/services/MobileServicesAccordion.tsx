"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { Service } from "./services.data";

interface MobileServicesAccordionProps {
  services: Service[];
}

export default function MobileServicesAccordion({
  services,
}: MobileServicesAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full border-t border-white/10" role="tablist" aria-label="Services Mobile Accordion">
      {services.map((service, index) => {
        const isOpen = index === openIndex;

        return (
          <div key={service.id} className="border-b border-white/10 flex flex-col">
            {/* Header Trigger */}
            <button
              onClick={() => toggleAccordion(index)}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${service.id}`}
              id={`accordion-tab-${service.id}`}
              className="w-full flex items-center justify-between py-6 text-left outline-none focus-ring group"
            >
              <div className="flex items-center gap-4">
                <span
                  className={`font-mono text-xs font-bold transition-colors duration-300
                    ${isOpen ? "text-brand-orange" : "text-neutral-muted"}
                  `}
                >
                  {service.number}
                </span>
                <span
                  className={`text-base font-bold tracking-tight uppercase transition-colors duration-300
                    ${isOpen ? "text-white" : "text-white/60"}
                  `}
                >
                  {service.title}
                </span>
              </div>
              
              <div className={`transition-colors duration-300 ${isOpen ? "text-brand-orange" : "text-neutral-muted"}`}>
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>

            {/* Collapsible Panel */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`accordion-panel-${service.id}`}
                  role="tabpanel"
                  aria-labelledby={`accordion-tab-${service.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 flex flex-col gap-6">
                    {/* Visual Image */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[2px] border border-white/5 shadow-md">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={service.image}
                        alt={`Quickmas ${service.title}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/60 to-transparent pointer-events-none" />
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-sm text-neutral-light/80 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Capabilities Tags Grid */}
                    <div className="flex flex-col gap-2">
                      <span className="text-[8px] font-mono tracking-[0.2em] text-neutral-muted uppercase">
                        [ Capabilities ]
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {service.capabilities.map((cap, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 py-1.5 px-2 bg-white/5 border border-white/5 text-[9px] font-mono font-semibold tracking-wider uppercase text-white/80 rounded-[2px]"
                          >
                            <span className="w-1 h-1 rounded-full bg-brand-orange" />
                            <span className="truncate">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Link */}
                    <div className="pt-2">
                      <Link
                        href={service.href}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-orange hover:text-brand-orange-hover focus-ring rounded"
                      >
                        <span>Explore {service.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
