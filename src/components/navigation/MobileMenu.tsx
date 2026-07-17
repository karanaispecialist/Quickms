"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { navLinks, serviceItems } from "./navigation.data";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(false);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Reset states on close
  useEffect(() => {
    if (!isOpen) {
      const handle = setTimeout(() => {
        setServicesOpen(false);
      }, 0);
      return () => clearTimeout(handle);
    }
  }, [isOpen]);

  const menuVariants = {
    hidden: {
      clipPath: "circle(0px at calc(100% - 40px) 40px)",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    visible: {
      clipPath: "circle(150% at calc(100% - 40px) 40px)",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 z-40 bg-brand-navy-dark text-white flex flex-col justify-between p-6 pt-24 md:p-12 md:pt-32"
        >
          {/* Scrollable list content */}
          <div className="flex-1 overflow-y-auto max-h-[70vh] py-4 pr-2">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => {
                if (link.hasMegaMenu) {
                  return (
                    <motion.div key={link.label} variants={itemVariants} className="flex flex-col">
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex items-center justify-between text-3xl md:text-4xl font-bold tracking-tight py-2 focus-ring text-left w-full hover:text-brand-orange transition-colors duration-300"
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-6 h-6 transition-transform duration-300 ${servicesOpen ? "rotate-180 text-brand-orange" : ""}`}
                        />
                      </button>

                      {/* Accordion content */}
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden pl-4 border-l border-white/10 mt-2 flex flex-col gap-3"
                          >
                            {serviceItems.map((service) => (
                              <Link
                                key={service.id}
                                href={service.href}
                                onClick={onClose}
                                className="flex items-center justify-between py-2 text-base font-semibold text-white/70 hover:text-brand-orange transition-colors duration-300 focus-ring rounded"
                              >
                                <span>{service.title}</span>
                                <ArrowRight className="w-4 h-4 text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
                  <motion.div key={link.label} variants={itemVariants}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="block text-3xl md:text-4xl font-bold tracking-tight py-2 hover:text-brand-orange transition-colors duration-300 focus-ring rounded"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </div>

          {/* Bottom Area */}
          <motion.div variants={itemVariants} className="border-t border-white/10 pt-6 mt-6 flex flex-col gap-6">
            <Link
              href="/contact"
              onClick={onClose}
              className="inline-flex items-center justify-between bg-brand-orange text-brand-navy-dark px-6 py-4 rounded-[2px] font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-brand-navy-dark transition-all duration-300 focus-ring"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold tracking-wider uppercase text-white/80">
                Quickmas Integrated Logistics
              </span>
              <span className="text-[10px] uppercase tracking-widest text-neutral-muted">
                Global Freight & Supply Chain Solutions
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
