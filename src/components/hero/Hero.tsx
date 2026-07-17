"use client";

import HeroMedia from "./HeroMedia";
import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      aria-label="Home Page Introduction"
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-brand-navy-dark"
    >
      {/* 1. Background Cinematic Visual System */}
      <HeroMedia />

      {/* 2. Headline & Primary Content overlay */}
      <div className="flex-1 flex items-center w-full max-w-7xl mx-auto z-10 pb-8">
        <HeroContent />
      </div>

      {/* 3. Bottom Information Rail (Statistics) */}
      <HeroStats />

      {/* 4. Scroll Cue Prompt */}
      <ScrollIndicator />
    </section>
  );
}
