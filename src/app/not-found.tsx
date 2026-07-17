import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "404 | Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-neutral-dark selection:bg-brand-orange selection:text-white flex flex-col justify-between">
      {/* Global Navigation */}
      <Navbar light={true} />

      <main className="flex-grow flex flex-col items-center justify-center py-32 px-6 md:px-12 relative overflow-hidden">
        {/* Abstract background blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-orange/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-md gap-6">
          {/* Eyebrow */}
          <span className="font-mono text-xs text-brand-orange font-bold tracking-[0.25em] uppercase">
            [ ERROR 404 ]
          </span>

          {/* Heading */}
          <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-none text-brand-navy select-none">
            PAGE <br />
            <span className="text-brand-orange">NOT FOUND.</span>
          </h1>

          {/* Copy */}
          <p className="text-sm text-neutral-dark/70 leading-relaxed font-medium mt-2">
            The path you are trying to access does not exist or has been moved. Check the URL or return to home to navigate.
          </p>

          {/* Action */}
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-orange text-white text-xs font-bold uppercase tracking-widest rounded-[2px] hover:bg-brand-orange-hover transition-colors duration-300 focus-ring shadow-lg shadow-brand-orange/20 mt-4 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Return to Home</span>
          </Link>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
