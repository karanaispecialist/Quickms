"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks, serviceItems } from "../navigation/navigation.data";

export default function Footer() {
  // Reveal animation variants
  const revealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const offices = [
    {
      number: "01",
      type: "REGISTERED OFFICE",
      city: "VARANASI",
      lines: [
        "SA 7/5 D1, Satsang Nagar Co,",
        "Benipur, Sarnath,",
        "Varanasi, Uttar Pradesh 221007"
      ]
    },
    {
      number: "02",
      type: "OFFICE",
      city: "DELHI",
      lines: [
        "Jaina Tower-2,",
        "No. 306, Plot No. 6,",
        "District Center, Janakpuri,",
        "New Delhi 110058"
      ]
    },
    {
      number: "03",
      type: "OFFICE",
      city: "BENGALURU",
      lines: [
        "Apartment 13, Diya Complex,",
        "Near Attibele Tollgate,",
        "Nanjundappa Layout, Anekal,",
        "Bengaluru, Karnataka 562107"
      ]
    }
  ];

  const handleBackToTop = () => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? "auto" : "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Global Site Footer"
      className="w-full bg-[#F8FAFC] text-brand-navy border-t border-neutral-200 pt-20 pb-10 select-none relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12 md:gap-16">
        
        {/* Tier 1: Brand Statement & Contact */}
        <div className="grid grid-cols-12 gap-y-8 lg:gap-16 items-start border-b border-neutral-200 pb-12">
          
          {/* Headline & Brief Description */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={revealVariants}
            className="col-span-12 lg:col-span-8 flex flex-col gap-4"
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.05] uppercase">
              MOVING BUSINESS. <br />
              <span className="text-brand-orange">CONNECTING THE WORLD.</span>
            </h3>
            <p className="text-sm text-neutral-dark/70 max-w-xl leading-relaxed">
              Integrated freight forwarding and supply chain solutions connecting businesses across
              air, ocean, road, customs, warehousing, and final delivery.
            </p>
          </motion.div>

          {/* Let's Talk */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={revealVariants}
            className="col-span-12 lg:col-span-4 flex flex-col gap-2"
          >
            <span className="font-mono text-[9px] text-neutral-muted tracking-[0.2em] uppercase">
              [ DIRECT ENQUIRIES ]
            </span>
            <span className="text-sm font-mono font-bold tracking-wider text-brand-orange uppercase">
              LET&apos;S TALK
            </span>
            <a
              href="mailto:info@quickmaslogistics.com"
              className="text-base sm:text-lg font-bold tracking-tight text-brand-navy hover:text-brand-orange transition-colors duration-300 relative group w-fit outline-none focus-ring"
            >
              <span>info@quickmaslogistics.com</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-orange transition-all duration-300 group-hover:w-full group-focus:w-full" />
            </a>
          </motion.div>

        </div>

        {/* Tier 2: Navigation Columns */}
        <div className="grid grid-cols-12 gap-y-10 sm:gap-8 border-b border-neutral-200 pb-12">
          
          {/* Company Links */}
          <motion.nav
            aria-label="Footer Company Links"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={revealVariants}
            className="col-span-6 sm:col-span-4 md:col-span-3 flex flex-col gap-4"
          >
            <span className="font-mono text-[9px] text-neutral-muted tracking-[0.2em] uppercase">
              {"// COMPANY"}
            </span>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-neutral-dark/70 hover:text-brand-orange transition-colors duration-200 hover:translate-x-1 inline-flex items-center gap-1 group outline-none focus-ring"
                  >
                    <span>{link.label}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">↗</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-xs text-neutral-dark/70 hover:text-brand-orange transition-colors duration-200 hover:translate-x-1 inline-flex items-center gap-1 group outline-none focus-ring"
                >
                  <span>Contact</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">↗</span>
                </Link>
              </li>
            </ul>
          </motion.nav>

          {/* Services Links */}
          <motion.nav
            aria-label="Footer Services Links"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={revealVariants}
            className="col-span-6 sm:col-span-4 md:col-span-3 flex flex-col gap-4"
          >
            <span className="font-mono text-[9px] text-neutral-muted tracking-[0.2em] uppercase">
              {"// SERVICES"}
            </span>
            <ul className="flex flex-col gap-2">
              {serviceItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-xs text-neutral-dark/70 hover:text-brand-orange transition-colors duration-200 hover:translate-x-1 inline-flex items-center gap-1 group outline-none focus-ring"
                  >
                    <span>{item.title}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Verification detail */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={revealVariants}
            className="col-span-12 sm:col-span-4 md:col-span-6 flex flex-col gap-3 sm:items-end justify-start sm:text-right"
          >
            <span className="font-mono text-[9px] text-neutral-muted tracking-[0.2em] uppercase">
              {"// STATUS"}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono text-neutral-dark/50 tracking-wider">
                WEBSITE STATUS: PRODUCTION READY
              </span>
              <span className="text-[10px] font-mono text-neutral-dark/50 tracking-wider">
                COMPLIANCE: W3C / WCAG 2.1 AA
              </span>
              <span className="text-[10px] font-mono text-neutral-dark/50 tracking-wider">
                NETWORK CAPACITY: GLOBAL FREIGHT
              </span>
            </div>
          </motion.div>

        </div>

        {/* Tier 3: Office Addresses */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={revealVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 border-b border-neutral-200 pb-12"
        >
          {offices.map((office) => (
            <address
              key={office.number}
              className="flex flex-col gap-2 not-italic"
            >
              <div className="flex gap-2 items-center font-mono text-[9px] text-neutral-muted tracking-widest uppercase">
                <span className="text-brand-orange font-bold">{office.number}</span>
                <span>/</span>
                <span>{office.type}</span>
              </div>
              
              <h4 className="text-sm font-extrabold tracking-tight text-brand-navy uppercase">
                {office.city}
              </h4>
              
              <div className="text-[11px] md:text-xs text-neutral-dark/70 leading-relaxed font-mono font-medium">
                {office.lines.map((line, idx) => (
                  <span key={idx} className="block">
                    {line}
                  </span>
                ))}
              </div>
            </address>
          ))}
        </motion.div>

        {/* Tier 4: Oversized Brand Wordmark */}
        <div className="w-full flex items-center justify-center select-none pt-4">
          <span className="text-[12vw] font-black text-brand-navy/[0.03] tracking-tighter leading-none font-sans uppercase">
            QUICKMAS
          </span>
        </div>

        {/* Tier 5: Bottom Legal Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-neutral-200 pt-8 text-[9px] font-mono tracking-widest text-neutral-muted uppercase">
          <span>
            © {currentYear} QUICKMAS INTEGRATED LOGISTICS PVT LTD. ALL RIGHTS RESERVED.
          </span>
          
          <button
            onClick={handleBackToTop}
            className="flex items-center gap-2 text-brand-navy/70 hover:text-brand-orange transition-colors duration-200 outline-none focus-ring py-1 px-3 border border-neutral-200 rounded-[2px] bg-white shadow-sm"
          >
            <span>BACK TO TOP</span>
            <span aria-hidden="true">↑</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
