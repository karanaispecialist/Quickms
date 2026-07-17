"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown, Mail, MapPin, ChevronDown, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";

// ─── Animation Variants ──────────────────────────────────────────────────────

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

// ─── 01 HERO SECTION ────────────────────────────────────────────────────────

function ContactHero() {
  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("enquiry-form");
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
    }
  };

  return (
    <section
      aria-label="Contact Introduction"
      className="relative w-full min-h-[100svh] flex flex-col justify-end overflow-hidden bg-brand-navy-dark"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact-hero.webp"
          alt="Quickmas premium welcoming corporate entrance lobby"
          fill
          priority
          className="object-cover object-center grayscale opacity-80"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pt-40 pb-20 md:pb-28 flex flex-col items-start gap-8">
        {/* Eyebrow */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={revealVariants}
          className="flex items-center gap-2 font-mono text-[10px] md:text-xs tracking-[0.25em] text-white/50 uppercase font-semibold"
        >
          <span className="text-brand-orange">[</span>
          <span>GET IN TOUCH</span>
          <span className="text-brand-orange">]</span>
        </motion.div>

        {/* Headline */}
        <h1 className="flex flex-col text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] text-white select-none">
          <span className="relative block overflow-hidden py-1">
            <motion.span initial="hidden" animate="visible" variants={lineVariants} className="block">
              LET&apos;S MOVE
            </motion.span>
          </span>
          <span className="relative block overflow-hidden py-1">
            <motion.span initial="hidden" animate="visible" variants={lineVariants} className="block text-brand-orange">
              YOUR NEXT
            </motion.span>
          </span>
          <span className="relative block overflow-hidden py-1">
            <motion.span initial="hidden" animate="visible" variants={lineVariants} className="block text-brand-orange">
              SHIPMENT.
            </motion.span>
          </span>
        </h1>

        {/* Supporting Copy */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={revealVariants}
          className="text-sm md:text-base text-neutral-light/70 max-w-xl leading-relaxed mt-2"
        >
          Whether you&apos;re planning an international shipment, customs clearance, warehousing, transportation, or project cargo, our team is ready to help coordinate your operational needs.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={revealVariants}
          className="flex flex-wrap items-center gap-4 mt-2"
        >
          <a
            href="#enquiry-form"
            onClick={handleScrollToForm}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-orange text-white text-xs font-bold uppercase tracking-widest rounded-[2px] hover:bg-brand-orange-hover transition-colors duration-300 focus-ring shadow-lg shadow-brand-orange/20 group w-full sm:w-auto"
          >
            <span>Start Your Enquiry</span>
            <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5 z-10" />
    </section>
  );
}

// ─── 02 CONTACT OPTIONS SECTION ──────────────────────────────────────────────

function ContactOptions() {
  return (
    <section
      aria-label="Direct Contact Methods"
      className="relative w-full bg-[#050816] text-white py-16 md:py-24 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Direct Email */}
          <div className="flex items-start gap-4 border border-white/[0.06] rounded-[2px] p-8 bg-white/[0.01]">
            <Mail className="w-6 h-6 text-brand-orange shrink-0 mt-1" />
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[9px] tracking-widest text-brand-orange font-bold uppercase block">
                Direct Email
              </span>
              <h3 className="text-lg md:text-xl font-black uppercase text-white">
                LET&apos;S TALK LOGISTICS
              </h3>
              <a
                href="mailto:info@quickmaslogistics.com"
                className="text-base font-bold text-neutral-light/75 hover:text-brand-orange transition-colors duration-300 focus-ring w-fit"
              >
                info@quickmaslogistics.com
              </a>
            </div>
          </div>

          {/* Locations Overview Summary */}
          <div className="flex items-start gap-4 border border-white/[0.06] rounded-[2px] p-8 bg-white/[0.01]">
            <MapPin className="w-6 h-6 text-brand-orange shrink-0 mt-1" />
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[9px] tracking-widest text-brand-orange font-bold uppercase block">
                Office Locations
              </span>
              <h3 className="text-lg md:text-xl font-black uppercase text-white">
                REGIONAL BRANCHES
              </h3>
              <p className="text-sm text-neutral-light/60 font-medium">
                Varanasi (Registered) · Delhi · Bengaluru. Coordinate points connecting key Indian cargo hubs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 03 ENQUIRY FORM SECTION ─────────────────────────────────────────────────

function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    shipmentType: "",
    origin: "",
    destination: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate backend API submission
    setTimeout(() => {
      // Clear values, log for future integration
      console.log("Quickmas Inbound Enquiry:", formData);
      setStatus("success");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        shipmentType: "",
        origin: "",
        destination: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section
      id="enquiry-form"
      aria-label="Logistics Enquiry Form"
      className="relative w-full bg-brand-navy-dark text-white py-24 md:py-32 border-b border-white/5 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-6 mb-12">
          <span className="font-mono text-[9px] tracking-[0.25em] text-brand-orange font-bold uppercase">
            03 — Enquiry Form
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase leading-none">
            START YOUR <span className="text-brand-orange">ENQUIRY.</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-light/50 max-w-md font-medium">
            Please fill in the cargo details and our coordination team will help plan the optimal logistics movement.
          </p>
        </div>

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center text-center gap-4 border border-brand-orange/20 rounded-[2px] p-12 bg-brand-orange/[0.02]"
          >
            <CheckCircle2 className="w-12 h-12 text-brand-orange" />
            <h3 className="text-xl font-black tracking-tight uppercase text-white">
              ENQUIRY SUBMITTED SUCCESSFULLY
            </h3>
            <p className="text-sm text-neutral-light/65 max-w-md leading-relaxed">
              Thank you for sharing your logistics requirements. Our coordination team will review the details and contact you to plan the shipment.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-4 px-6 py-2.5 border border-white/10 hover:border-white/30 text-white font-mono text-[10px] tracking-wider uppercase font-bold hover:bg-white/5 transition-all"
            >
              Submit Another Enquiry
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 select-none">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-mono text-[10px] tracking-wider text-neutral-light/60 uppercase font-bold">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-white/[0.02] border border-white/10 rounded-[2px] px-4 py-3 text-base md:text-sm text-white placeholder-white/20 focus:border-brand-orange focus:outline-none transition-all duration-300"
                />
              </div>

              {/* Company */}
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="font-mono text-[10px] tracking-wider text-neutral-light/60 uppercase font-bold">
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company Name"
                  className="w-full bg-white/[0.02] border border-white/10 rounded-[2px] px-4 py-3 text-base md:text-sm text-white placeholder-white/20 focus:border-brand-orange focus:outline-none transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-mono text-[10px] tracking-wider text-neutral-light/60 uppercase font-bold">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@company.com"
                  className="w-full bg-white/[0.02] border border-white/10 rounded-[2px] px-4 py-3 text-base md:text-sm text-white placeholder-white/20 focus:border-brand-orange focus:outline-none transition-all duration-300"
                />
              </div>

              {/* Phone (Optional) */}
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="font-mono text-[10px] tracking-wider text-neutral-light/60 uppercase font-bold">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000"
                  className="w-full bg-white/[0.02] border border-white/10 rounded-[2px] px-4 py-3 text-base md:text-sm text-white placeholder-white/20 focus:border-brand-orange focus:outline-none transition-all duration-300"
                />
              </div>

              {/* Service Required */}
              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="font-mono text-[10px] tracking-wider text-neutral-light/60 uppercase font-bold">
                  Service Required *
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#050816] border border-white/10 rounded-[2px] px-4 py-3 text-base md:text-sm text-white appearance-none focus:border-brand-orange focus:outline-none transition-all duration-300"
                  >
                    <option value="" disabled className="text-white/30">Select a Service</option>
                    <option value="air-freight">Air Freight</option>
                    <option value="ocean-freight">Ocean Freight</option>
                    <option value="customs-brokerage">Customs Brokerage</option>
                    <option value="warehousing-3pl">Warehousing & 3PL</option>
                    <option value="primary-transportation">Primary Transportation</option>
                    <option value="project-cargo">Project Cargo</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                </div>
              </div>

              {/* Shipment Type */}
              <div className="flex flex-col gap-2">
                <label htmlFor="shipmentType" className="font-mono text-[10px] tracking-wider text-neutral-light/60 uppercase font-bold">
                  Shipment Type *
                </label>
                <div className="relative">
                  <select
                    id="shipmentType"
                    name="shipmentType"
                    required
                    value={formData.shipmentType}
                    onChange={handleChange}
                    className="w-full bg-[#050816] border border-white/10 rounded-[2px] px-4 py-3 text-base md:text-sm text-white appearance-none focus:border-brand-orange focus:outline-none transition-all duration-300"
                  >
                    <option value="" disabled className="text-white/30">Select a Category</option>
                    <option value="standard">Standard Box/Pallet</option>
                    <option value="fcl">Full Container Load (FCL)</option>
                    <option value="lcl">Less than Container Load (LCL)</option>
                    <option value="oversized">Oversized / Heavy Lift</option>
                    <option value="project">Project / Multimodal</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                </div>
              </div>

              {/* Origin */}
              <div className="flex flex-col gap-2">
                <label htmlFor="origin" className="font-mono text-[10px] tracking-wider text-neutral-light/60 uppercase font-bold">
                  Cargo Origin *
                </label>
                <input
                  type="text"
                  id="origin"
                  name="origin"
                  required
                  value={formData.origin}
                  onChange={handleChange}
                  placeholder="City, Country"
                  className="w-full bg-white/[0.02] border border-white/10 rounded-[2px] px-4 py-3 text-base md:text-sm text-white placeholder-white/20 focus:border-brand-orange focus:outline-none transition-all duration-300"
                />
              </div>

              {/* Destination */}
              <div className="flex flex-col gap-2">
                <label htmlFor="destination" className="font-mono text-[10px] tracking-wider text-neutral-light/60 uppercase font-bold">
                  Cargo Destination *
                </label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  required
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="City, Country"
                  className="w-full bg-white/[0.02] border border-white/10 rounded-[2px] px-4 py-3 text-base md:text-sm text-white placeholder-white/20 focus:border-brand-orange focus:outline-none transition-all duration-300"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-mono text-[10px] tracking-wider text-neutral-light/60 uppercase font-bold">
                Message / Specifications *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Include cargo weight, dimensional profiles, special handling requirements, or compliance checks."
                className="w-full bg-white/[0.02] border border-white/10 rounded-[2px] px-4 py-3 text-base md:text-sm text-white placeholder-white/20 focus:border-brand-orange focus:outline-none transition-all duration-300 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-brand-orange text-white text-xs font-bold uppercase tracking-widest rounded-[2px] hover:bg-brand-orange-hover transition-all duration-300 focus-ring shadow-lg shadow-brand-orange/20 group w-full mt-2"
            >
              <span>{status === "submitting" ? "Submitting Inbound Enquiry..." : "Submit Logistics Enquiry"}</span>
              {status !== "submitting" && <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

// ─── 04 OFFICE LOCATIONS SECTION ─────────────────────────────────────────────

function OfficeLocations() {
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
      type: "REGIONAL BRANCH OFFICE",
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
      type: "REGIONAL BRANCH OFFICE",
      city: "BENGALURU",
      lines: [
        "Apartment 13, Diya Complex,",
        "Near Attibele Tollgate,",
        "Nanjundappa Layout, Anekal,",
        "Bengaluru, Karnataka 562107"
      ]
    }
  ];

  return (
    <section
      aria-label="Office Addresses"
      className="relative w-full bg-[#050816] text-white py-24 md:py-32 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-16 items-start mb-16">
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.25em] text-neutral-muted uppercase font-bold"
            >
              <span className="text-brand-orange">04 —</span>
              <span>Offices</span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1] uppercase"
            >
              QUICKMAS <br />
              <span className="text-brand-orange">LOCATIONS.</span>
            </motion.h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
            className="col-span-12 lg:col-span-8 text-sm md:text-base text-neutral-light/70 leading-relaxed font-medium lg:pt-2"
          >
            <p>
              Our office network spans major domestic trade centers in India, supporting localized customs clearance, port handoffs, and transportation coordination.
            </p>
          </motion.div>
        </div>

        {/* Addresses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office, idx) => (
            <div
              key={idx}
              className="flex flex-col border border-white/[0.06] rounded-[2px] p-8 bg-white/[0.01] select-none text-left"
            >
              <span className="font-mono text-xs text-brand-orange font-bold block mb-1">
                {office.number} / {office.type}
              </span>
              <h3 className="text-xl font-black tracking-tight uppercase text-white mb-4">
                {office.city}
              </h3>
              <div className="flex flex-col gap-1.5 text-xs text-neutral-light/55 leading-relaxed font-medium">
                {office.lines.map((line, lIdx) => (
                  <p key={lIdx}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 05 SERVICE QUICK LINKS SECTION ──────────────────────────────────────────

function ServiceQuickLinks() {
  const links = [
    { title: "Air Freight", href: "/services/air-freight" },
    { title: "Ocean Freight", href: "/services/ocean-freight" },
    { title: "Customs Brokerage", href: "/services/customs-brokerage" },
    { title: "Warehousing & 3PL", href: "/services/warehousing-3pl" },
    { title: "Primary Transportation", href: "/services/primary-transportation" },
    { title: "Project Cargo", href: "/services/project-cargo" },
  ];

  return (
    <section
      aria-label="Service Navigation Links"
      className="relative w-full bg-brand-navy-dark text-white py-24 md:py-32 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-16 items-start">
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.25em] text-neutral-muted uppercase font-bold"
            >
              <span className="text-brand-orange">05 —</span>
              <span>Explore Services</span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-[1] uppercase"
            >
              LOGISTICS <br />
              <span className="text-brand-orange">CAPABILITIES.</span>
            </motion.h2>

            <p className="text-xs text-neutral-light/50 font-mono tracking-wider uppercase leading-relaxed max-w-xs">
              Explore individual service pages before submitting an enquiry.
            </p>
          </div>

          <motion.nav
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="col-span-12 lg:col-span-8 flex flex-col border-t border-white/[0.06]"
            aria-label="Direct Service Quick Navigation"
          >
            {links.map((item, idx) => (
              <motion.div key={idx} variants={revealVariants}>
                <Link
                  href={item.href}
                  className="group flex items-center justify-between py-6 border-b border-white/[0.06] hover:bg-white/[0.01] px-4 -mx-4 rounded-[2px] transition-all duration-300 focus-ring"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[10px] text-brand-orange/50 tracking-widest font-bold">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-black uppercase text-white group-hover:text-brand-orange transition-colors duration-400 select-none">
                      {item.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-brand-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        </div>
      </div>
    </section>
  );
}

// ─── 06 FAQ SECTION ─────────────────────────────────────────────────────────

function ContactFAQ() {
  const faqs = [
    {
      q: "What information should I include in my enquiry?",
      a: "Please specify the total cargo weight, dimensional profiles, origin city/port, destination details, target timelines, and whether you require border customs clearance or temporary warehouse storage support.",
    },
    {
      q: "Which service should I choose?",
      a: "If you need fast transit across borders, choose Air Freight. For cost-effective large volume shipping, select Ocean Freight. For domestic cargo links, pick Primary Transportation. Choose Warehousing for inventory storage, or Project Cargo for oversized drayage.",
    },
    {
      q: "Can I enquire about multiple logistics services?",
      a: "Yes. Our team provides integrated supply chain solutions. Simply select the primary service required in the dropdown list and describe your additional warehousing, customs, or multimodal transport needs in the message box.",
    },
  ];

  return (
    <section
      aria-label="Frequently Asked Questions"
      className="relative w-full bg-[#050816] text-white py-24 md:py-32 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-16 items-start">
          {/* Left Column — Sticky Eyebrow / Headline */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.25em] text-neutral-muted uppercase font-bold"
            >
              <span className="text-brand-orange">06 —</span>
              <span>FAQ</span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1] uppercase"
            >
              QUESTIONS & <br />
              <span className="text-brand-orange">ANSWERS.</span>
            </motion.h2>
          </div>

          {/* Right Column — FAQs */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="col-span-12 lg:col-span-8 flex flex-col border-t border-white/[0.06]"
          >
            {faqs.map((item, idx) => (
              <motion.div
                key={idx}
                variants={revealVariants}
                className="group border-b border-white/[0.06] py-8 md:py-10 text-left"
              >
                <h3 className="text-base font-black uppercase text-white mb-3">
                  {item.q}
                </h3>
                <p className="text-sm text-neutral-light/60 leading-relaxed font-medium">
                  {item.a}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── 07 FINAL BRAND STATEMENT SECTION ────────────────────────────────────────

function ContactCTA() {
  const handleScrollToForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = document.getElementById("enquiry-form");
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
    }
  };

  return (
    <section
      aria-label="Final Statement"
      className="relative w-full bg-brand-navy-dark text-white py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-16 items-start">
          {/* Left Column: Headline */}
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.25em] text-neutral-muted uppercase font-bold"
            >
              <span className="text-brand-orange">07 —</span>
              <span>Final Statement</span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] uppercase select-none"
            >
              READY WHEN <br />
              YOUR CARGO <br />
              <span className="text-brand-orange">IS.</span>
            </motion.h2>
          </div>

          {/* Right Column: Description & CTA */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-8 lg:pt-8">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="text-sm md:text-base text-neutral-light/70 leading-relaxed font-medium"
            >
              Our team works with businesses to coordinate logistics solutions across international freight, customs, warehousing, transportation, and project cargo.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={handleScrollToForm}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-brand-orange text-white text-xs font-bold uppercase tracking-widest rounded-[2px] hover:bg-brand-orange-hover transition-colors duration-300 focus-ring shadow-lg shadow-brand-orange/10 group"
              >
                <span>Send An Enquiry</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── MAIN COMPONENT ─────────────────────────────────────────────────────────

export default function ContactClient() {
  return (
    <div className="relative min-h-screen flex flex-col bg-brand-navy-dark text-white selection:bg-brand-orange selection:text-white">
      {/* Global Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 01 Hero */}
        <ContactHero />

        {/* 02 Contact Options */}
        <ContactOptions />

        {/* 03 Enquiry Form */}
        <EnquiryForm />

        {/* 04 Office Locations */}
        <OfficeLocations />

        {/* 05 Service Quick Links */}
        <ServiceQuickLinks />

        {/* 06 FAQ */}
        <ContactFAQ />

        {/* 07 Final Brand Statement */}
        <ContactCTA />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
