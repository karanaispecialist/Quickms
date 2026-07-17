"use client";

import { Service } from "./services.data";

interface ServiceIndexProps {
  services: Service[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export default function ServiceIndex({
  services,
  activeIndex,
  onSelect,
}: ServiceIndexProps) {
  return (
    <div className="flex flex-col w-full border-t border-white/10" role="tablist" aria-label="Services List">
      {services.map((service, index) => {
        const isActive = index === activeIndex;

        return (
          <button
            key={service.id}
            role="tab"
            aria-selected={isActive}
            aria-controls={`service-panel-${service.id}`}
            id={`service-tab-${service.id}`}
            tabIndex={0}
            onMouseEnter={() => onSelect(index)}
            onFocus={() => onSelect(index)}
            onClick={() => onSelect(index)}
            className={`w-full flex items-center justify-between py-6 md:py-8 border-b border-white/10 text-left transition-all duration-300 focus-ring outline-none group select-none
              ${isActive ? "text-white" : "text-white/40 hover:text-white/80"}
            `}
          >
            <div className="flex items-center gap-6 md:gap-8">
              {/* Service Number */}
              <span
                className={`font-mono text-xs md:text-sm font-bold transition-colors duration-300
                  ${isActive ? "text-brand-orange" : "text-neutral-muted"}
                `}
              >
                {service.number}
              </span>
              
              {/* Service Title */}
              <span
                className={`text-lg md:text-xl font-bold tracking-tight uppercase transition-transform duration-300
                  ${isActive ? "translate-x-2 text-white" : "translate-x-0"}
                `}
              >
                {service.title}
              </span>
            </div>

            {/* Directional Indicator */}
            <span
              className={`text-sm font-mono font-bold transition-all duration-300
                ${isActive ? "text-brand-orange rotate-45 scale-110" : "text-neutral-muted group-hover:text-white/80"}
              `}
            >
              ↗
            </span>
          </button>
        );
      })}
    </div>
  );
}
