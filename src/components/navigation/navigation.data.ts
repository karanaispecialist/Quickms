export interface NavLinkItem {
  label: string;
  href: string;
  hasMegaMenu?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  href: string;
  description: string;
}

export const navLinks: NavLinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/company" },
  { label: "Services", href: "/services", hasMegaMenu: true },
  { label: "Industries", href: "/industries" },
  { label: "Network", href: "/network" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/insights" },
];

export const serviceItems: ServiceItem[] = [
  {
    id: "01",
    title: "Air Freight",
    href: "/services/air-freight",
    description: "Time-critical and customized global air transportation with reliable door-to-door transit times.",
  },
  {
    id: "02",
    title: "Ocean Freight",
    href: "/services/ocean-freight",
    description: "Full Container Load (FCL) and Less than Container Load (LCL) shipping across all major trade lanes.",
  },
  {
    id: "03",
    title: "Customs Brokerage",
    href: "/services/customs-brokerage",
    description: "Efficient import and export customs clearance managed by experienced, certified compliance experts.",
  },
  {
    id: "04",
    title: "Warehousing & 3PL",
    href: "/services/warehousing-3pl",
    description: "Scalable storage, inventory management, order fulfillment, and multi-user distribution centers.",
  },
  {
    id: "05",
    title: "Primary Transportation",
    href: "/services/primary-transportation",
    description: "Robust domestic freight distribution, cross-border trucking, and multi-modal transport networks.",
  },
  {
    id: "06",
    title: "Project Cargo",
    href: "/services/project-cargo",
    description: "Specialized logistics planning and execution for heavy-lift, out-of-gauge, and complex cargo.",
  },
];

export const featuredSupplyChain = {
  title: "End-to-End Supply Chain Solutions",
  description: "Integrated logistics solutions connecting origin, transportation, customs, warehousing, and final delivery to optimize your global network performance.",
  href: "/services",
  ctaText: "Explore All Services",
};
