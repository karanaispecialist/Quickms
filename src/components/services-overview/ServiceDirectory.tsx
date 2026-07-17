"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { servicesData } from "../services/services.data";

export default function ServiceDirectory() {
  const [activeSection, setActiveSection] = useState<string>("air-freight");

  // Track active scroll section to highlight sidebar index
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for triggers

      for (const service of servicesData) {
        const el = document.getElementById(service.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(service.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const offset = 90; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
      });
      setActiveSection(id);
    }
  };

  const revealVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const sidebarItems = [
    { id: "air-freight", label: "01 / AIR" },
    { id: "ocean-freight", label: "02 / OCEAN" },
    { id: "customs-brokerage", label: "03 / CUSTOMS" },
    { id: "warehousing-3pl", label: "04 / 3PL" },
    { id: "primary-transportation", label: "05 / TRANSPORT" },
    { id: "project-cargo", label: "06 / PROJECT" }
  ];

  return (
    <section
      id="directory"
      className="relative w-full bg-[#F8FAFC] text-brand-navy py-24 md:py-32 overflow-hidden border-t border-neutral-200/50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-16 items-start relative">
          
          {/* Left Column: Sticky Service Index Navigation (Desktop only) */}
          <div className="col-span-12 lg:col-span-3 hidden lg:flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start select-none">
            <div className="flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.25em] text-neutral-muted uppercase font-bold">
              <span className="text-brand-orange">03 —</span>
              <span>Capabilities</span>
            </div>
            
            <h3 className="text-2xl font-black tracking-tight leading-none uppercase">
              SERVICE <br /> DIRECTORY
            </h3>

            <nav className="flex flex-col gap-2 mt-4" aria-label="Service directory sections">
              {sidebarItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleAnchorClick(e, item.id)}
                    className={`font-mono text-[10px] xl:text-xs font-bold tracking-widest py-2.5 border-b border-neutral-200/40 uppercase transition-all duration-300 outline-none
                      ${isActive 
                        ? "text-brand-orange border-brand-orange/80 pl-2" 
                        : "text-neutral-muted hover:text-brand-navy"
                      }
                    `}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Right Column: Deep Editorial Chapters */}
          <div className="col-span-12 lg:col-span-9 flex flex-col gap-24 md:gap-32">
            
            {/* Mobile Header (Only visible on mobile/tablet viewports) */}
            <div className="flex flex-col gap-4 lg:hidden select-none">
              <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] text-neutral-muted uppercase font-bold">
                <span className="text-brand-orange">03 —</span>
                <span>Capabilities</span>
              </div>
              <h2 className="text-4xl font-black tracking-tight leading-none uppercase">
                SERVICE DIRECTORY
              </h2>
            </div>

            {servicesData.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.id}
                  id={item.id}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center scroll-mt-28"
                >
                  
                  {/* Text Column (Alternates positions on desktop) */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={revealVariants}
                    className={`flex flex-col gap-5 ${isEven ? "md:order-1" : "md:order-2"}`}
                  >
                    {/* Mode number tag */}
                    <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-brand-orange font-bold">
                      <span>[{item.number}]</span>
                      <span className="h-[1px] w-6 bg-brand-orange/40" />
                      <span>CAPABILITY</span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-3xl sm:text-4xl font-black tracking-tight leading-none text-brand-navy uppercase select-none">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base text-neutral-muted leading-relaxed font-medium">
                      {item.description}
                    </p>

                    {/* Bullet capabilities grid */}
                    <div className="flex flex-col gap-2 mt-2 select-none">
                      <span className="font-mono text-[9px] text-neutral-muted tracking-[0.15em] uppercase">
                        [ MAIN FUNCTIONS ]
                      </span>
                      <ul className="grid grid-cols-2 gap-2 text-xs font-mono font-bold tracking-wide text-brand-navy/90">
                        {item.capabilities.map((cap, capIdx) => (
                          <li key={capIdx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-brand-orange rounded-full shrink-0" />
                            <span>{cap.toUpperCase()}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA redirect link */}
                    <div className="pt-4 select-none">
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-black text-brand-orange hover:text-brand-orange-hover tracking-widest uppercase transition-colors duration-200 outline-none focus-ring rounded"
                      >
                        <span>EXPLORE {item.title}</span>
                        <span>↗</span>
                      </Link>
                    </div>
                  </motion.div>

                  {/* Image Column */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={revealVariants}
                    className={`relative w-full aspect-[4/3] overflow-hidden rounded-[2px] border border-neutral-200/50 shadow-sm ${isEven ? "md:order-2" : "md:order-1"}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={`Quickmas ${item.title} operational logistics`}
                      className="w-full h-full object-cover object-center filter grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/15 to-transparent pointer-events-none" />
                  </motion.div>

                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}
