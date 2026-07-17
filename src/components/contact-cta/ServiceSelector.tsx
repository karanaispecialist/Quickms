"use client";

interface ServiceOption {
  id: string;
  label: string;
}

const serviceOptions: ServiceOption[] = [
  { id: "air-freight", label: "AIR FREIGHT" },
  { id: "ocean-freight", label: "OCEAN FREIGHT" },
  { id: "customs-brokerage", label: "CUSTOMS BROKERAGE" },
  { id: "warehousing-3pl", label: "WAREHOUSING & 3PL" },
  { id: "primary-transportation", label: "PRIMARY TRANSPORTATION" },
  { id: "project-cargo", label: "PROJECT CARGO" }
];

interface ServiceSelectorProps {
  selectedId: string | null;
  onSelect: (id: string | null) => void;
}

export default function ServiceSelector({
  selectedId,
  onSelect,
}: ServiceSelectorProps) {
  const toggleSelect = (id: string) => {
    if (selectedId === id) {
      onSelect(null); // Deselect if clicked again
    } else {
      onSelect(id);
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <span className="font-mono text-[9px] text-neutral-muted tracking-[0.2em] uppercase select-none">
        [ SELECT AN OPERATIONAL REQUIREMENT ]
      </span>
      <div className="flex flex-wrap gap-2.5 max-w-2xl select-none" role="group" aria-label="Logistics mode selector">
        {serviceOptions.map((opt) => {
          const isSelected = opt.id === selectedId;

          return (
            <button
              key={opt.id}
              onClick={() => toggleSelect(opt.id)}
              aria-pressed={isSelected}
              className={`py-2.5 px-4 text-[10px] md:text-xs font-mono font-bold tracking-wider border rounded-[2px] transition-all duration-300 outline-none focus-ring
                ${isSelected
                  ? "bg-brand-orange border-brand-orange text-white shadow-[0_4px_15px_rgba(255,90,9,0.25)]"
                  : "bg-brand-navy/5 border-neutral-200 text-brand-navy/70 hover:border-brand-navy hover:text-brand-navy"
                }
              `}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
