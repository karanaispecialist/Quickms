"use client";


interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}

interface NetworkStatProps {
  activeIndex: number;
  onSelect: (index: number) => void;
}

export const primaryStats: StatItem[] = [
  {
    value: "181+",
    label: "COUNTRIES REACHED",
    sublabel: "CONNECTED THROUGH OUR GLOBAL AGENT NETWORK Across BORDERS AND TRANSIT MODES.",
  },
  {
    value: "12K+",
    label: "OVERSEAS PARTNERS",
    sublabel: "ALLIANCE OF GLOBAL AGENTS COORDINATING AIR & OCEAN SHIPMENTS IN EVERY MAJOR LANE.",
  },
  {
    value: "29+",
    label: "NETWORK LOCATIONS",
    sublabel: "REGIONAL OFFICES AND HUBS AT INDIA'S MAJOR AIRPORTS AND DEEPWATER SEAPORTS.",
  },
];

export default function NetworkStat({
  activeIndex,
  onSelect,
}: NetworkStatProps) {
  return (
    <div
      className="flex flex-col w-full border-t border-neutral-200/80"
      role="tablist"
      aria-label="Network Statistics"
    >
      {primaryStats.map((stat, index) => {
        const isActive = index === activeIndex;

        return (
          <button
            key={index}
            role="tab"
            aria-selected={isActive}
            aria-controls="network-map"
            id={`stat-tab-${index}`}
            tabIndex={0}
            onMouseEnter={() => onSelect(index)}
            onFocus={() => onSelect(index)}
            onClick={() => onSelect(index)}
            className={`w-full text-left py-6 border-b border-neutral-200/80 transition-all duration-300 outline-none focus-ring group select-none flex flex-col gap-1
              ${isActive ? "opacity-100" : "opacity-50 hover:opacity-85"}
            `}
          >
            {/* Value (Large Numeric Title) */}
            <div className="flex items-baseline gap-3">
              <span
                className={`text-4xl md:text-5xl font-black font-mono tracking-tight transition-colors duration-300
                  ${isActive ? "text-brand-orange" : "text-brand-navy"}
                `}
              >
                {stat.value}
              </span>
              <span className="text-[10px] font-bold tracking-widest text-brand-navy uppercase">
                {stat.label}
              </span>
            </div>

            {/* Description Sublabel */}
            <p className="text-[10px] leading-relaxed text-neutral-muted max-w-sm font-medium tracking-wide uppercase">
              {stat.sublabel}
            </p>
          </button>
        );
      })}
    </div>
  );
}
