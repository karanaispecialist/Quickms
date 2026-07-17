export interface ProjectCargoCapability {
  number: string;
  title: string;
  description: string;
  meta: string;
}

export const projectCargoCapabilities: ProjectCargoCapability[] = [
  {
    number: "01",
    title: "Multimodal Transport Solutions",
    description: "End-to-end integration of transit modes to ensure optimal logistics corridors.",
    meta: "Air / Sea / Road / Rail"
  },
  {
    number: "02",
    title: "Heavy-Lift & ODC Handling",
    description: "Specialized engineering and handling for oversized and over-dimensional heavy cargo.",
    meta: "Specialized Cargo Handling"
  },
  {
    number: "03",
    title: "Route Surveys & Feasibility",
    description: "Precise evaluation of physical barriers, route access constraints, and clearance permits.",
    meta: "Access / Feasibility / Planning"
  },
  {
    number: "04",
    title: "Customs Clearance & Compliance",
    description: "Managing clearances, regulatory documentation, and compliance for complex equipment cargo.",
    meta: "Regulatory Coordination"
  },
  {
    number: "05",
    title: "On-Site Logistics Management",
    description: "Dedicated on-site logistics coordination, loading supervision, and site safety handling.",
    meta: "Operational Coordination"
  },
  {
    number: "06",
    title: "Equipment Selection & Execution",
    description: "Engineering-driven selection and setup of specialized cranes, trailers, and lifting tackle.",
    meta: "Technical Machinery Coordination"
  }
];

export const projectCargoIntro = {
  label: "07 — PROJECT CARGO",
  secondaryLabel: "SPECIALIZED LOGISTICS",
  headline: "WHEN THE CARGO ISN'T STANDARD, NEITHER IS THE SOLUTION.",
  copy: "From oversized and heavy-lift cargo to complex industrial movements, Quickmas plans and manages specialized logistics operations with precision—from route surveys and permits to equipment selection, customs support, and final execution."
};
