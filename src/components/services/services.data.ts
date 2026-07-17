export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  image: string;
  href: string;
}

export const servicesData: Service[] = [
  {
    id: "air-freight",
    number: "01",
    title: "Air Freight",
    description: "Fast, secure, and reliable air cargo solutions for time-sensitive international shipments.",
    capabilities: [
      "Import & Export",
      "Global Air Cargo",
      "Flexible Transit Options",
      "Customs Coordination",
      "Shipment Visibility"
    ],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    href: "/services/air-freight"
  },
  {
    id: "ocean-freight",
    number: "02",
    title: "Ocean Freight",
    description: "Cost-effective international ocean freight solutions designed for both full and consolidated cargo.",
    capabilities: [
      "FCL",
      "LCL",
      "Import & Export",
      "Route Planning",
      "Carrier Management",
      "Cargo Tracking"
    ],
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80",
    href: "/services/ocean-freight"
  },
  {
    id: "customs-brokerage",
    number: "03",
    title: "Customs Brokerage",
    description: "Efficient customs clearance and regulatory support designed to keep international cargo moving.",
    capabilities: [
      "Import Clearance",
      "Export Clearance",
      "Documentation",
      "Regulatory Compliance",
      "Customs Coordination"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    href: "/services/customs-brokerage"
  },
  {
    id: "warehousing-3pl",
    number: "04",
    title: "Warehousing & 3PL",
    description: "Scalable warehousing and fulfilment solutions designed to improve inventory flow and distribution efficiency.",
    capabilities: [
      "Storage",
      "Inventory Control",
      "Order Fulfilment",
      "Pick & Pack",
      "Labelling",
      "Distribution"
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    href: "/services/warehousing-3pl"
  },
  {
    id: "primary-transportation",
    number: "05",
    title: "Primary Transportation",
    description: "Reliable domestic transportation connecting ports, airports, factories, warehouses, and distribution centres.",
    capabilities: [
      "Port Transportation",
      "Airport Transportation",
      "Factory Movement",
      "Warehouse Transfers",
      "Domestic Distribution"
    ],
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
    href: "/services/primary-transportation"
  },
  {
    id: "project-cargo",
    number: "06",
    title: "Project Cargo",
    description: "Specialized logistics solutions for oversized, heavy-lift, complex, and high-value cargo.",
    capabilities: [
      "Route Surveys",
      "Heavy-Lift Cargo",
      "Oversized Cargo",
      "Equipment Planning",
      "Permits",
      "End-to-End Execution"
    ],
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&w=800&q=80",
    href: "/services/project-cargo"
  }
];

export const servicesIntro = {
  label: "04 — OUR SERVICES",
  headlineLine1: "EVERY MODE.",
  headlineLine2: "EVERY MILE.",
  headlineLine3: "ONE PARTNER.",
  description: "From international freight and customs clearance to warehousing, transportation, and complex project cargo, Quickmas connects every stage of the supply chain through one integrated logistics network."
};
