export interface PerformanceBreakdown {
  label: string;
  value: string;
}

export interface PerformanceCategory {
  number: string;
  category: string;
  value: string;
  unit: string;
  breakdown?: PerformanceBreakdown[];
  description?: string;
}

export const performanceData: PerformanceCategory[] = [
  {
    number: "01",
    category: "Air Freight",
    value: "420+",
    unit: "MT",
    breakdown: [
      { label: "IMPORT", value: "300+ MT" },
      { label: "EXPORT", value: "120+ MT" }
    ],
    description: "Fast-transit global air cargo operations handling critical time-sensitive shipments."
  },
  {
    number: "02",
    category: "Sea Freight",
    value: "150+",
    unit: "TEUs",
    breakdown: [
      { label: "IMPORT", value: "100 TEUs" },
      { label: "EXPORT", value: "50 TEUs" }
    ],
    description: "Ocean cargo consolidations and full container load operations across global trade lanes."
  },
  {
    number: "03",
    category: "Customs Brokerage",
    value: "150+",
    unit: "JOBS",
    breakdown: [
      { label: "CLEARANCE", value: "IMPORT & EXPORT" },
      { label: "COMPLIANCE", value: "REGULATORY EXECUTION" }
    ],
    description: "Customs clearance, port documentation, and import/export regulatory support."
  },
  {
    number: "04",
    category: "Domestic Transportation",
    value: "250+",
    unit: "SHIPMENTS",
    breakdown: [
      { label: "CONNECTIVITY", value: "PORTS & AIRPORTS" },
      { label: "TRANSFERS", value: "FACTORIES & HUBS" }
    ],
    description: "Primary and secondary road distribution connecting key transit portals and warehouses."
  },
  {
    number: "05",
    category: "Warehousing",
    value: "35,000+",
    unit: "SQ FT",
    breakdown: [
      { label: "DELHI HUB", value: "ACTIVE STORAGE" },
      { label: "FARIDABAD HUB", value: "3PL DISTRIBUTION" }
    ],
    description: "Scalable warehousing, inventory control, and fulfillment networks."
  }
];

export const performanceIntro = {
  label: "06 — PERFORMANCE",
  headline: "PROOF IN MOTION.",
  sublabel: "MEASURED IN TONNES, TEUs AND SHIPMENTS.",
  copy: "From international air and ocean freight to customs clearance, domestic transportation, and warehousing, our operational performance reflects a growing logistics network built to keep cargo moving."
};
