"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface QuoteButtonProps {
  scrolled: boolean;
}

export default function QuoteButton({ scrolled }: QuoteButtonProps) {
  return (
    <Link
      href="/contact"
      className={`relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium tracking-wide uppercase text-xs transition-all duration-300 rounded-[2px] focus-ring group border border-brand-orange
        ${scrolled ? "bg-transparent text-brand-orange hover:text-white" : "bg-brand-orange text-brand-navy-dark hover:text-white"}
      `}
    >
      {/* Sliding background layer */}
      <span
        className={`absolute inset-0 w-full h-full transition-transform duration-300 ease-out origin-bottom scale-y-0 group-hover:scale-y-100
          ${scrolled ? "bg-brand-orange" : "bg-brand-navy-dark"}
        `}
      />

      {/* Button content */}
      <span className="relative flex items-center gap-2">
        <span className="relative overflow-hidden block">
          <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-px">
            Get a Quote
          </span>
        </span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:scale-110" />
      </span>
    </Link>
  );
}
