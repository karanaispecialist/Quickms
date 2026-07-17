// ─── Service Detail Page Data Architecture ─────────────────────────────────
// Master template data structure for ALL service detail pages.
// Add a new service page by adding an entry to `serviceDetailPages`.
// ─────────────────────────────────────────────────────────────────────────────

export interface ServiceHeroData {
  label: string;
  headline: string[];
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
}

export interface ServiceExplainedTheme {
  title: string;
  description: string;
}

export interface ServiceExplainedData {
  label: string;
  headline: string[];
  copy: string;
  themes: ServiceExplainedTheme[];
}

export interface ServiceWhyChooseItem {
  number: string;
  title: string;
  description: string;
}

export interface ServiceCapabilityItem {
  number: string;
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  number: string;
  label: string;
  title: string;
  description: string;
}

export interface ServiceOperationsSide {
  largeLabel?: string;
  eyebrow?: string;
  title: string;
  description: string;
  flowSteps?: string;
}

export interface ServiceOperationsData {
  sectionNum?: string;
  sectionLabel?: string;
  import: ServiceOperationsSide;
  export: ServiceOperationsSide;
}

export interface ServiceEngineeringItem {
  title: string;
  description: string;
}

export interface ServiceEngineeringData {
  label: string;
  title: string;
  description: string;
  items: ServiceEngineeringItem[];
}

export interface ServicePerformanceData {
  total: string;
  unit: string;
  label: string;
  breakdown: { value: string; label: string }[];
}

export interface ServiceRelatedItem {
  title: string;
  href: string;
}

export interface ServiceCTAData {
  headline: string[];
  description: string;
  primaryCta: string;
  primaryHref: string;
  secondaryCta: string;
  secondaryHref: string;
}

export interface ServiceDetailPageData {
  slug: string;
  meta: {
    title: string;
    description: string;
  };
  hero: ServiceHeroData;
  explained: ServiceExplainedData;
  whyChoose: ServiceWhyChooseItem[];
  capabilities: ServiceCapabilityItem[];
  process: ServiceProcessStep[];
  operations: ServiceOperationsData;
  performance?: ServicePerformanceData;
  engineeringPlanning?: ServiceEngineeringData;
  relatedServices: ServiceRelatedItem[];
  cta: ServiceCTAData;
}

// ─── Air Freight Page Data ──────────────────────────────────────────────────

const airFreightData: ServiceDetailPageData = {
  slug: "air-freight",
  meta: {
    title: "Air Freight Services | International Air Cargo Solutions | Quickmas",
    description:
      "Explore Quickmas air freight solutions for international cargo movement, import and export coordination, customs support, and global logistics execution.",
  },
  hero: {
    label: "01 / AIR FREIGHT",
    headline: ["CONNECTING", "TIME-SENSITIVE CARGO", "ACROSS BORDERS."],
    description:
      "Quickmas provides reliable international air freight solutions designed for businesses that require coordinated movement, flexible options, and dependable execution across global supply chains.",
    image: "/images/services/air-freight-hero.webp",
    imageAlt:
      "Cargo aircraft being loaded at an air freight terminal during operations",
    tags: ["AIR FREIGHT", "IMPORT", "EXPORT", "GLOBAL CARGO"],
  },
  explained: {
    label: "AIR CARGO SOLUTIONS",
    headline: ["MOVING CRITICAL CARGO", "WITH PRECISION."],
    copy: "Air freight provides businesses with a reliable transportation option for shipments where timing, coordination, and global connectivity are important. Quickmas manages air cargo movements with support across documentation, coordination, customs processes, and delivery execution.",
    themes: [
      {
        title: "TIME",
        description:
          "Faster transit for shipments where schedule matters. Air freight reduces the gap between origin and destination.",
      },
      {
        title: "CONNECTIVITY",
        description:
          "Access to international logistics networks connecting major markets and trade corridors worldwide.",
      },
      {
        title: "PRECISION",
        description:
          "Coordinated handling, documentation, and customs processes managed with attention to detail.",
      },
      {
        title: "EXECUTION",
        description:
          "End-to-end movement support from booking and documentation through to delivery coordination.",
      },
    ],
  },
  whyChoose: [
    {
      number: "01",
      title: "TIME-SENSITIVE REQUIREMENTS",
      description:
        "For shipments where faster international movement is important. Air freight supports businesses with time-critical supply chain needs.",
    },
    {
      number: "02",
      title: "GLOBAL CONNECTIVITY",
      description:
        "Supporting movement across international markets. Air freight connects businesses to global logistics networks and trade corridors.",
    },
    {
      number: "03",
      title: "HIGH-VALUE OR CRITICAL CARGO",
      description:
        "For goods requiring coordinated handling and reliable movement. Air freight provides controlled transit for sensitive shipments.",
    },
    {
      number: "04",
      title: "SUPPLY CHAIN FLEXIBILITY",
      description:
        "Supporting changing business requirements. Air freight adapts to varying volumes, schedules, and destination needs.",
    },
  ],
  capabilities: [
    {
      number: "01",
      title: "IMPORT & EXPORT AIR FREIGHT",
      description:
        "International air cargo coordination supporting both inbound and outbound shipment requirements across global markets.",
    },
    {
      number: "02",
      title: "GLOBAL AIR CARGO MOVEMENT",
      description:
        "Connecting shipments through international logistics networks with coordinated routing and transit management.",
    },
    {
      number: "03",
      title: "CUSTOMS COORDINATION",
      description:
        "Supporting clearance processes with documentation preparation, regulatory coordination, and compliance support.",
    },
    {
      number: "04",
      title: "DOCUMENTATION SUPPORT",
      description:
        "Managing required shipping documentation including airway bills, commercial invoices, packing lists, and regulatory filings.",
    },
    {
      number: "05",
      title: "FLEXIBLE TRANSPORT OPTIONS",
      description:
        "Supporting different cargo requirements with appropriate transport solutions based on volume, urgency, and destination.",
    },
  ],
  process: [
    {
      number: "01",
      label: "ORIGIN",
      title: "REQUIREMENT DISCUSSION",
      description:
        "Understanding shipment needs including cargo details, origin, destination, timing, and any special handling requirements.",
    },
    {
      number: "02",
      label: "PLAN",
      title: "PLANNING & COORDINATION",
      description:
        "Selecting the appropriate logistics approach based on cargo specifications, route options, and schedule requirements.",
    },
    {
      number: "03",
      label: "PREPARE",
      title: "DOCUMENTATION & CUSTOMS SUPPORT",
      description:
        "Managing required documentation, customs filings, and regulatory processes to support smooth cargo movement.",
    },
    {
      number: "04",
      label: "MOVE",
      title: "AIR CARGO MOVEMENT",
      description:
        "Coordinated shipment execution with tracking support and status updates throughout the transit journey.",
    },
    {
      number: "05",
      label: "DELIVER",
      title: "DELIVERY SUPPORT",
      description:
        "Supporting final destination movement including last-mile coordination and delivery confirmation.",
    },
  ],
  operations: {
    import: {
      title: "AIR IMPORT",
      description:
        "Inbound international cargo movement. Quickmas coordinates the arrival, customs clearance, and domestic delivery of air freight shipments into the destination market.",
    },
    export: {
      title: "AIR EXPORT",
      description:
        "Outbound international cargo movement. Quickmas manages the collection, documentation, customs processing, and departure coordination of air freight shipments to global destinations.",
    },
  },
  performance: {
    total: "420+",
    unit: "MT",
    label: "TOTAL AIR FREIGHT MOVEMENT",
    breakdown: [
      { value: "300+", label: "IMPORT" },
      { value: "120+", label: "EXPORT" },
    ],
  },
  relatedServices: [
    { title: "Ocean Freight", href: "/services/ocean-freight" },
    { title: "Customs Brokerage", href: "/services/customs-brokerage" },
    { title: "Primary Transportation", href: "/services/primary-transportation" },
    { title: "Warehousing & 3PL", href: "/services/warehousing-3pl" },
    { title: "Project Cargo", href: "/services/project-cargo" },
  ],
  cta: {
    headline: ["NEED TO MOVE", "CARGO FASTER?"],
    description:
      "Tell us your requirement and our team can help identify the right air freight solution.",
    primaryCta: "REQUEST AIR FREIGHT QUOTE",
    primaryHref: "/contact?service=air-freight",
    secondaryCta: "CONTACT OUR TEAM",
    secondaryHref: "/contact",
  },
};

const oceanFreightData: ServiceDetailPageData = {
  slug: "ocean-freight",
  meta: {
    title: "Ocean Freight Services | FCL & LCL Logistics | Quickmas",
    description:
      "International ocean freight solutions including FCL, LCL, import, export, documentation, customs coordination, and global logistics.",
  },
  hero: {
    label: "02 / OCEAN FREIGHT",
    headline: ["MOVING", "GLOBAL TRADE", "BY SEA."],
    description:
      "Cost-effective international ocean freight solutions designed for import, export, FCL, LCL, and coordinated global cargo movement.",
    image: "/images/services/ocean-freight-hero.webp",
    imageAlt: "Large container ship navigating the ocean at twilight",
    tags: ["OCEAN FREIGHT", "FCL & LCL", "IMPORT", "EXPORT", "GLOBAL TRADE"],
  },
  explained: {
    label: "OCEAN CARGO SOLUTIONS",
    headline: ["SCALING GLOBAL TRADE", "ACROSS OCEANS."],
    copy: "Ocean freight provides businesses with cost-effective transportation options for shipping large volumes of goods across international trade lanes. Quickmas manages maritime shipments with coordinated FCL and LCL movements, carrier management, route planning, and customs support.",
    themes: [
      {
        title: "VOLUME",
        description:
          "Full Container Load (FCL) and Less than Container Load (LCL) options designed to support large-scale and consolidated cargo volumes.",
      },
      {
        title: "COST-EFFICIENCY",
        description:
          "Economical transportation for bulk goods, large shipments, and international supply chain distribution networks.",
      },
      {
        title: "ROUTING",
        description:
          "Coordinated route planning and carrier allocation across major global shipping lanes and maritime networks.",
      },
      {
        title: "COMPLIANCE",
        description:
          "Comprehensive management of bills of lading, export/import documentation, and customs compliance support.",
      },
    ],
  },
  whyChoose: [
    {
      number: "01",
      title: "LARGE VOLUME REQUIREMENTS",
      description:
        "Ideal for shipping high-capacity cargo, heavy loads, and bulk materials efficiently across international supply chains.",
    },
    {
      number: "02",
      title: "COST-EFFECTIVE TRANSPORTATION",
      description:
        "Lower transportation costs over long distances compared to air freight, making it suitable for standard inventory and replenishment.",
    },
    {
      number: "03",
      title: "GLOBAL TRADE CONNECTIVITY",
      description:
        "Connecting businesses to major international ports, hubs, and trade corridors across all continents.",
    },
    {
      number: "04",
      title: "FLEXIBLE CONTAINER SOLUTIONS",
      description:
        "Choose between dedicated Full Container Loads (FCL) or consolidated Less than Container Loads (LCL) based on cargo size.",
    },
  ],
  capabilities: [
    {
      number: "01",
      title: "FULL CONTAINER LOAD (FCL)",
      description:
        "Dedicated container shipping for large-volume cargo requiring exclusive container space and direct routing.",
    },
    {
      number: "02",
      title: "LESS THAN CONTAINER LOAD (LCL)",
      description:
        "Consolidated shipping for smaller cargo volumes, allowing businesses to share container space and lower costs.",
    },
    {
      number: "03",
      title: "IMPORT COORDINATION",
      description:
        "Inbound international maritime cargo management from origin port through arrival, handling, and final delivery.",
    },
    {
      number: "04",
      title: "EXPORT COORDINATION",
      description:
        "Outbound international maritime cargo coordination, handling, collection, loading, and departure scheduling.",
    },
    {
      number: "05",
      title: "CARRIER MANAGEMENT",
      description:
        "Direct coordination with major shipping lines to manage container availability, bookings, and space allocation.",
    },
    {
      number: "06",
      title: "ROUTE PLANNING",
      description:
        "Strategic routing to optimize transit times, transshipment hubs, port connections, and shipping efficiency.",
    },
    {
      number: "07",
      title: "DOCUMENTATION SUPPORT",
      description:
        "Comprehensive management of bills of lading, certificates of origin, customs declarations, and commercial documentation.",
    },
    {
      number: "08",
      title: "CUSTOMS COORDINATION",
      description:
        "Coordinating import and export customs clearance processes with port authorities and compliance officers.",
    },
  ],
  process: [
    {
      number: "01",
      label: "ORIGIN",
      title: "REQUIREMENT DISCUSSION",
      description:
        "Assessing cargo specifications, volume, routing, transit needs, and container requirements (FCL vs. LCL).",
    },
    {
      number: "02",
      label: "PLAN",
      title: "CARRIER & ROUTE PLANNING",
      description:
        "Selecting shipping lines, schedules, transit routes, and securing container bookings and vessel space.",
    },
    {
      number: "03",
      label: "PREPARE",
      title: "CONTAINER LOADING",
      description:
        "Coordinating cargo collection, container stuffing for FCL, or CFS consolidation for LCL cargo.",
    },
    {
      number: "04",
      label: "MOVE",
      title: "MARITIME TRANSIT",
      description:
        "Coordinated maritime transportation across international lanes with regular tracking and status updates.",
    },
    {
      number: "05",
      label: "DELIVER",
      title: "PORT HANDLING & DELIVERY",
      description:
        "Managing vessel discharge, port documentation, customs clearance, and final delivery coordination to destination.",
    },
  ],
  operations: {
    import: {
      title: "OCEAN IMPORT",
      description:
        "Inbound international cargo movement. Quickmas coordinates container arrival, port handling, customs clearance, and domestic delivery of import shipments.",
    },
    export: {
      title: "OCEAN EXPORT",
      description:
        "Outbound international cargo movement. Quickmas manages collection, container stuffing, export documentation, and loading onto ocean vessels.",
    },
  },
  performance: {
    total: "150+",
    unit: "TEUs",
    label: "TOTAL SEA FREIGHT MOVEMENT",
    breakdown: [
      { value: "100", label: "IMPORT" },
      { value: "50", label: "EXPORT" },
    ],
  },
  relatedServices: [
    { title: "Air Freight", href: "/services/air-freight" },
    { title: "Customs Brokerage", href: "/services/customs-brokerage" },
    { title: "Primary Transportation", href: "/services/primary-transportation" },
    { title: "Warehousing & 3PL", href: "/services/warehousing-3pl" },
    { title: "Project Cargo", href: "/services/project-cargo" },
  ],
  cta: {
    headline: ["SCALING", "GLOBAL SUPPLY CHAINS."],
    description:
      "Tell us your volume requirements and our team can help plan the optimal ocean freight routing.",
    primaryCta: "REQUEST OCEAN FREIGHT QUOTE",
    primaryHref: "/contact?service=ocean-freight",
    secondaryCta: "CONTACT OUR TEAM",
    secondaryHref: "/contact",
  },
};

const customsBrokerageData: ServiceDetailPageData = {
  slug: "customs-brokerage",
  meta: {
    title: "Customs Brokerage Services | Import & Export Clearance | Quickmas",
    description:
      "Customs brokerage solutions supporting import and export documentation, regulatory compliance, and coordinated cargo clearance.",
  },
  hero: {
    label: "03 / CUSTOMS BROKERAGE",
    headline: ["CLEARING", "BORDERS", "WITH CONFIDENCE."],
    description:
      "Quickmas supports import and export cargo with coordinated customs documentation, regulatory compliance, and clearance processes that help businesses move shipments efficiently across international borders.",
    image: "/images/services/customs-brokerage-hero.webp",
    imageAlt: "Customs documentation clipboard with cargo terminal in the background",
    tags: ["CUSTOMS", "COMPLIANCE", "IMPORT & EXPORT", "CLEARANCE COORDINATION"],
  },
  explained: {
    label: "CUSTOMS BROKERAGE SOLUTIONS",
    headline: ["CLEARING COMPLEXITY", "KEEPING CARGO MOVING."],
    copy: "Customs brokerage solutions support businesses by helping navigate the complexities of international trade regulations, customs clearance procedures, and necessary trade documentation. Quickmas coordinates import and export clearance processes with focus on compliance and accuracy.",
    themes: [
      {
        title: "COMPLIANCE",
        description:
          "Helping businesses align with current import and export regulations, tariffs, trade compliance guidelines, and customs rules.",
      },
      {
        title: "ACCURACY",
        description:
          "Managing detailed data entry, classifications, valuations, and documentation prep to support accurate customs declarations.",
      },
      {
        title: "EFFICIENCY",
        description:
          "Coordinating clearance processes with customs authorities to support the reliable movement of international cargo.",
      },
      {
        title: "ASSURANCE",
        description:
          "Providing guidance, shipment coordination, and support across documentation and regulatory compliance procedures.",
      },
    ],
  },
  whyChoose: [
    {
      number: "01",
      title: "REGULATORY COMPLIANCE",
      description:
        "Navigating changing customs rules, tariffs, and trade regulations to support compliant cargo movement across borders.",
    },
    {
      number: "02",
      title: "DOCUMENTATION ACCURACY",
      description:
        "Preparing and organizing required shipping papers, commercial invoices, and regulatory filings to reduce classification risks.",
    },
    {
      number: "03",
      title: "REDUCED COMPLEXITY",
      description:
        "Simplifying the administrative requirements of international trade by coordinating documentation and port processes.",
    },
    {
      number: "04",
      title: "COORDINATED PROCESSES",
      description:
        "Integrating customs brokerage with freight forwarding (air/ocean/road) for coordinated end-to-end logistics.",
    },
  ],
  capabilities: [
    {
      number: "01",
      title: "IMPORT CUSTOMS CLEARANCE",
      description:
        "Coordinating inbound clearance processes, import filings, and regulatory declarations with customs authorities.",
    },
    {
      number: "02",
      title: "EXPORT CUSTOMS CLEARANCE",
      description:
        "Managing outbound export declarations, clearance coordination, and compliance filings for international shipping.",
    },
    {
      number: "03",
      title: "DOCUMENTATION SUPPORT",
      description:
        "Assisting with required paperwork, commercial invoices, customs manifests, and trade declarations.",
    },
    {
      number: "04",
      title: "REGULATORY COMPLIANCE",
      description:
        "Helping businesses manage trade classifications, valuation assessments, and alignment with import/export rules.",
    },
    {
      number: "05",
      title: "SHIPMENT COORDINATION",
      description:
        "Coordinating handoffs between carriers, customs authorities, port terminals, and delivery locations.",
    },
    {
      number: "06",
      title: "CUSTOMS PROCESS GUIDANCE",
      description:
        "Providing guidance on import/export regulations, required document checks, and standard customs procedures.",
    },
  ],
  process: [
    {
      number: "01",
      label: "INFO",
      title: "SHIPMENT INFORMATION",
      description:
        "Collecting cargo details, commercial invoices, packing lists, and origin/destination specifications to determine customs requirements.",
    },
    {
      number: "02",
      label: "PREPARE",
      title: "DOCUMENTATION PREPARATION",
      description:
        "Organizing and checking required shipping papers, certificates of origin, classification codes, and customs filing details.",
    },
    {
      number: "03",
      label: "FILE",
      title: "CUSTOMS FILING & COORDINATION",
      description:
        "Submitting import or export declarations, commercial invoices, and compliance paperwork to customs authorities.",
    },
    {
      number: "04",
      label: "CLEAR",
      title: "CLEARANCE PROCESS",
      description:
        "Coordinating with customs inspectors, addressing requests for information, and supporting declaration processing.",
    },
    {
      number: "05",
      label: "RELEASE",
      title: "CARGO RELEASE & NEXT MOVEMENT",
      description:
        "Confirming customs release approvals and coordinating cargo pickup, next-stage transport, or delivery. Process may vary depending on cargo and local rules.",
    },
  ],
  operations: {
    import: {
      title: "IMPORT DOCUMENTATION",
      description:
        "Quickmas coordinates the collection, verification, and filing of required import paperwork, including commercial invoices, certificates of origin, and custom entry declarations, to support inbound compliance.",
    },
    export: {
      title: "EXPORT DOCUMENTATION",
      description:
        "Quickmas coordinates outbound shipping documents, export declarations, and commercial manifests to satisfy customs requirements and support outbound trade compliance.",
    },
  },
  performance: {
    total: "150+",
    unit: "Jobs",
    label: "COMPLETED CUSTOMS JOBS",
    breakdown: [],
  },
  relatedServices: [
    { title: "Air Freight", href: "/services/air-freight" },
    { title: "Ocean Freight", href: "/services/ocean-freight" },
    { title: "Primary Transportation", href: "/services/primary-transportation" },
    { title: "Warehousing & 3PL", href: "/services/warehousing-3pl" },
    { title: "Project Cargo", href: "/services/project-cargo" },
  ],
  cta: {
    headline: ["READY TO CLEAR", "YOUR NEXT SHIPMENT?"],
    description:
      "Tell us about your shipment and our team can help coordinate the customs process alongside your logistics requirements.",
    primaryCta: "REQUEST CUSTOMS SUPPORT",
    primaryHref: "/contact?service=customs-brokerage",
    secondaryCta: "CONTACT OUR TEAM",
    secondaryHref: "/contact",
  },
};

const warehousing3plData: ServiceDetailPageData = {
  slug: "warehousing-3pl",
  meta: {
    title: "Warehousing & 3PL Services | Storage & Fulfilment | Quickmas",
    description:
      "Warehousing and third-party logistics solutions supporting storage, inventory management, fulfilment, and coordinated distribution.",
  },
  hero: {
    label: "04 / WAREHOUSING & 3PL",
    headline: ["SMART STORAGE.", "SEAMLESS", "DISTRIBUTION."],
    description:
      "Quickmas provides warehousing and third-party logistics solutions that support inventory management, storage, order fulfilment, and coordinated distribution as part of an integrated supply chain.",
    image: "/images/services/warehousing-3pl-hero.webp",
    imageAlt: "Spacious industrial warehouse interior with racking systems and pallets",
    tags: ["WAREHOUSING", "3PL SOLUTIONS", "STORAGE", "ORDER FULFILMENT", "DISTRIBUTION"],
  },
  explained: {
    label: "WAREHOUSING & 3PL SOLUTIONS",
    headline: ["BEYOND STORAGE.", "CONNECTED FULFILMENT."],
    copy: "Quickmas offers third-party logistics (3PL) solutions that integrate storage and inventory management directly into your supply chain. We coordinate inbound goods, order preparation, pick & pack processes, and outbound distribution to support complete operational flow.",
    themes: [
      {
        title: "STORAGE",
        description:
          "Organized pallet and bulk storage layouts designed to keep materials secure and structured for operational readiness.",
      },
      {
        title: "FULFILMENT",
        description:
          "Coordinated pick, pack, and labelling workflows designed to prepare shipments accurately for outbound distribution.",
      },
      {
        title: "VISIBILITY",
        description:
          "Managing inventory data to support accurate tracking, stock level confirmation, and movement reporting.",
      },
      {
        title: "DISTRIBUTION",
        description:
          "Coordinating warehouse transfers, port collections, and domestic transport networks to support final delivery requirements.",
      },
    ],
  },
  whyChoose: [
    {
      number: "01",
      title: "INVENTORY VISIBILITY",
      description:
        "Maintaining clear records of stock levels and movements to support planned replenishment and inventory control.",
    },
    {
      number: "02",
      title: "EFFICIENT STORAGE",
      description:
        "Utilizing organized racking systems and layout strategies to maximize space utility and support safe handling.",
    },
    {
      number: "03",
      title: "ORDER FULFILMENT",
      description:
        "Managing order preparation, picking, and packaging steps with focus on accuracy and dispatch scheduling.",
    },
    {
      number: "04",
      title: "DISTRIBUTION READINESS",
      description:
        "Integrating storage locations with transport channels to support smooth handoffs for final delivery.",
    },
  ],
  capabilities: [
    {
      number: "01",
      title: "STORAGE",
      description:
        "Organized storage layouts supporting raw materials, industrial products, and finished goods.",
    },
    {
      number: "02",
      title: "INVENTORY MANAGEMENT",
      description:
        "Tracking stock counts, checking inventory levels, and managing movement records for operational control.",
    },
    {
      number: "03",
      title: "PICK & PACK",
      description:
        "Selecting and packing items from storage to prepare individual outbound shipments with accuracy.",
    },
    {
      number: "04",
      title: "LABELLING",
      description:
        "Applying required cargo labels, shipping marks, barcodes, and destination details for dispatch.",
    },
    {
      number: "05",
      title: "ORDER FULFILMENT",
      description:
        "Coordinating pick, pack, packaging, and dispatch steps to prepare customer orders for transport.",
    },
    {
      number: "06",
      title: "DISTRIBUTION SUPPORT",
      description:
        "Coordinating handoffs to primary transport carriers for port deliveries or regional distribution.",
    },
    {
      number: "07",
      title: "THIRD-PARTY LOGISTICS (3PL)",
      description:
        "Combining storage, handling, preparation, and distribution into a single coordinated logistics solution.",
    },
  ],
  process: [
    {
      number: "01",
      label: "INBOUND",
      title: "INBOUND GOODS",
      description:
        "Receiving cargo, verifying documentation, checking quantities, and preparing goods for storage entry.",
    },
    {
      number: "02",
      label: "STORE",
      title: "STORAGE ALLOCATION",
      description:
        "Transferring received cargo to designated storage locations within the warehouse racking system.",
    },
    {
      number: "03",
      label: "MANAGE",
      title: "INVENTORY HANDLING",
      description:
        "Monitoring stock levels, managing storage conditions, and tracking items in preparation for fulfillment requests.",
    },
    {
      number: "04",
      label: "PREPARE",
      title: "PICK & PACK",
      description:
        "Picking requested items from storage locations, packing them, and applying required shipping labels.",
    },
    {
      number: "05",
      label: "DISPATCH",
      title: "CARGO DISPATCH",
      description:
        "Loading prepared shipments, verifying outbound manifests, and coordinating vessel/vehicle departures.",
    },
    {
      number: "06",
      label: "DELIVER",
      title: "OUTBOUND DISTRIBUTION",
      description:
        "Coordinating transit through transportation networks to complete delivery to the final destination.",
    },
  ],
  operations: {
    import: {
      title: "STORAGE OPERATIONS",
      description:
        "Quickmas manages safe storage, racking allocation, stock organization, and inventory verification at our logistics facilities to support raw material and product security.",
    },
    export: {
      title: "DISTRIBUTION OPERATIONS",
      description:
        "Quickmas coordinates pick & pack processes, cargo labelling, order consolidation, and dispatch loading to support smooth supply chain distribution requirements.",
    },
  },
  performance: {
    total: "35,000+",
    unit: "SQ FT",
    label: "WAREHOUSING CAPACITY",
    breakdown: [],
  },
  relatedServices: [
    { title: "Air Freight", href: "/services/air-freight" },
    { title: "Ocean Freight", href: "/services/ocean-freight" },
    { title: "Customs Brokerage", href: "/services/customs-brokerage" },
    { title: "Primary Transportation", href: "/services/primary-transportation" },
    { title: "Project Cargo", href: "/services/project-cargo" },
  ],
  cta: {
    headline: ["READY TO OPTIMISE", "YOUR SUPPLY CHAIN?"],
    description:
      "Talk to our team about storage, fulfilment, and distribution requirements tailored to your logistics operations.",
    primaryCta: "DISCUSS YOUR WAREHOUSING NEEDS",
    primaryHref: "/contact?service=warehousing-3pl",
    secondaryCta: "CONTACT OUR TEAM",
    secondaryHref: "/contact",
  },
};

const primaryTransportationData: ServiceDetailPageData = {
  slug: "primary-transportation",
  meta: {
    title: "Primary Transportation Services | Domestic Cargo Movement | Quickmas",
    description:
      "Primary transportation solutions connecting ports, airports, warehouses, factories, and distribution centres through coordinated domestic logistics.",
  },
  hero: {
    label: "05 / PRIMARY TRANSPORTATION",
    headline: ["KEEPING", "CARGO MOVING", "ON THE GROUND."],
    description:
      "Quickmas coordinates domestic cargo transportation between ports, airports, warehouses, factories, and distribution centres to keep supply chains moving efficiently.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Heavy-duty freight truck carrying a shipping container along a highway corridor at dawn",
    tags: ["TRANSPORTATION", "DOMESTIC LOGISTICS", "PORT TO WAREHOUSE", "CARGO MOVEMENT"],
  },
  explained: {
    label: "PRIMARY TRANSPORTATION SOLUTIONS",
    headline: ["CONNECTING EVERY", "STAGE OF THE JOURNEY."],
    copy: "Primary transportation acts as the operational bridge connecting key nodes in your supply chain. Quickmas coordinates inland transport movements between ports, airports, warehouses, factories, and distribution centres to help keep cargo moving seamlessly.",
    themes: [
      {
        title: "RELIABILITY",
        description:
          "Coordinating transport movements with trusted carriers to support scheduled deliveries and minimize delays.",
      },
      {
        title: "COORDINATION",
        description:
          "Managing transfer logistics, documentation, and handoffs at cargo checkpoints, port terminals, and airports.",
      },
      {
        title: "CONNECTIVITY",
        description:
          "Connecting manufacturing sites, storage facilities, and port gateways to support consistent flow.",
      },
      {
        title: "ECOSYSTEM",
        description:
          "Integrating road transport operations with customs clearance, warehousing, and global shipping workflows.",
      },
    ],
  },
  whyChoose: [
    {
      number: "01",
      title: "PORT TO WAREHOUSE",
      description:
        "Coordinating container drayage and road transport from container terminals directly to storage or distribution facilities.",
    },
    {
      number: "02",
      title: "AIRPORT TO FACILITY",
      description:
        "Managing collection and transport of air freight cargo from airport cargo terminals to warehousing sites.",
    },
    {
      number: "03",
      title: "FACTORY TO DISTRIBUTION",
      description:
        "Transporting finished products or raw materials between production plants and regional fulfillment hubs.",
    },
    {
      number: "04",
      title: "CONNECTED DOMESTIC MOVEMENT",
      description:
        "Interconnecting multiple domestic facilities to optimize routing and maintain continuous supply chain flow.",
    },
  ],
  capabilities: [
    {
      number: "01",
      title: "PORT TRANSPORTATION",
      description:
        "Coordinated container transport connecting sea ports with warehouses, rail yards, and inland depots.",
    },
    {
      number: "02",
      title: "AIRPORT TRANSPORTATION",
      description:
        "Inland transport coordination connecting airport cargo facilities with warehousing and local delivery points.",
    },
    {
      number: "03",
      title: "FACTORY MOVEMENT",
      description:
        "Transporting manufacturing inputs and finished goods between production plants and storage hubs.",
    },
    {
      number: "04",
      title: "WAREHOUSE TRANSFERS",
      description:
        "Inter-facility stock movement, inventory reallocation transfers, and hub-to-hub cargo transportation.",
    },
    {
      number: "05",
      title: "DOMESTIC DISTRIBUTION",
      description:
        "Coordinated ground transport and routing to distribution centers, terminals, and regional networks.",
    },
    {
      number: "06",
      title: "SHIPMENT COORDINATION",
      description:
        "Managing carrier booking, loading confirmation, transport paperwork, and delivery coordination.",
    },
  ],
  process: [
    {
      number: "01",
      label: "INBOUND",
      title: "PORT / AIRPORT ORIGIN",
      description:
        "Coordinating arrival notices, port cargo discharge, air terminal collection, and necessary container release papers.",
    },
    {
      number: "02",
      label: "PICKUP",
      title: "CARGO PICKUP",
      description:
        "Verifying container seals, packing lists, and loading cargo securely onto dispatch transport vehicles.",
    },
    {
      number: "03",
      label: "COORDINATE",
      title: "TRANSPORTATION COORDINATION",
      description:
        "Scheduling transport routes, managing driver dispatches, and coordinating checkpoint clearances.",
    },
    {
      number: "04",
      label: "TRANSIT",
      title: "WAREHOUSE / FACTORY DELIVERY",
      description:
        "Executing transit across domestic highways and drayage corridors, monitoring status along key routes.",
    },
    {
      number: "05",
      label: "UNLOAD",
      title: "DISTRIBUTION HUB ARRIVAL",
      description:
        "Managing cargo arrival at distribution hubs, unloading bays, or factory gates for container return or storage.",
    },
    {
      number: "06",
      label: "DELIVER",
      title: "FINAL DELIVERY SUPPORT",
      description:
        "Supporting last-stage handoffs, proof of delivery processing, and return of empty ocean containers.",
    },
  ],
  operations: {
    import: {
      title: "KEY INBOUND CONNECTIONS",
      description:
        "Quickmas coordinates inbound transportation flows connecting major sea ports and airport cargo terminals with domestic warehouses, ensuring container cargo is collected and moved without unnecessary storage delays.",
    },
    export: {
      title: "KEY OUTBOUND CONNECTIONS",
      description:
        "Quickmas coordinates outbound transportation flows connecting manufacturing plants and distribution hubs with export gateways, supporting timely delivery to export vessels and cargo flights.",
    },
  },
  performance: {
    total: "250+",
    unit: "Shipments",
    label: "DOMESTIC SHIPMENTS COORDINATED",
    breakdown: [],
  },
  relatedServices: [
    { title: "Air Freight", href: "/services/air-freight" },
    { title: "Ocean Freight", href: "/services/ocean-freight" },
    { title: "Customs Brokerage", href: "/services/customs-brokerage" },
    { title: "Warehousing & 3PL", href: "/services/warehousing-3pl" },
    { title: "Project Cargo", href: "/services/project-cargo" },
  ],
  cta: {
    headline: ["READY TO KEEP YOUR", "CARGO MOVING?"],
    description:
      "Discuss your transportation requirements with our team to build a coordinated logistics solution across every stage of the supply chain.",
    primaryCta: "REQUEST TRANSPORTATION SUPPORT",
    primaryHref: "/contact?service=primary-transportation",
    secondaryCta: "CONTACT OUR TEAM",
    secondaryHref: "/contact",
  },
};

const projectCargoData: ServiceDetailPageData = {
  slug: "project-cargo",
  meta: {
    title: "Project Cargo Services | Heavy Lift & Specialized Logistics | Quickmas",
    description:
      "Project cargo solutions including heavy-lift logistics, multimodal transportation, route surveys, customs coordination, and on-site logistics management.",
  },
  hero: {
    label: "06 / PROJECT CARGO",
    headline: ["WHEN THE CARGO", "ISN'T STANDARD,", "NEITHER IS", "THE SOLUTION."],
    description:
      "Quickmas delivers specialized project cargo solutions through detailed planning, multimodal coordination, route surveys, customs support, and on-site logistics management for complex cargo movements.",
    image: "/images/services/project-cargo-hero.webp",
    imageAlt: "Heavy industrial turbine being lifted by port crane onto a multi-axle trailer",
    tags: ["PROJECT CARGO", "HEAVY LIFT", "MULTIMODAL", "ROUTE SURVEYS"],
  },
  explained: {
    label: "SPECIALIZED LOGISTICS",
    headline: ["WHEN THE SHIPMENT", "IS COMPLEX,", "THE EXECUTION", "MUST BE PRECISE."],
    copy: "Project cargo involves transporting heavy, oversized, or high-value cargo that requires customized logistics layouts. Quickmas manages complex cargo movements by coordinating route surveys, heavy-lift handling, customs clearance, and site deliveries.",
    themes: [
      {
        title: "OVERSIZED",
        description:
          "Managing cargo that exceeds standard container dimensions, requiring specialized trailers and equipment planning.",
      },
      {
        title: "HEAVY LIFT",
        description:
          "Coordinating heavy machinery, structures, and industrial assets requiring specialized loading cranes.",
      },
      {
        title: "MULTIMODAL",
        description:
          "Combining road, sea, or air freight modes into a single coordinated logistics sequence.",
      },
      {
        title: "SITE LOGISTICS",
        description:
          "Managing delivery site coordination, offloading support, and synchronized positioning schedules.",
      },
    ],
  },
  whyChoose: [
    {
      number: "01",
      title: "DETAILED PLANNING",
      description:
        "Developing custom transport plans to address route constraints, schedules, and cargo handling.",
    },
    {
      number: "02",
      title: "ENGINEERING COORDINATION",
      description:
        "Pre-planning crane positioning, load distribution, and trailer layouts for heavy lifts.",
    },
    {
      number: "03",
      title: "ROUTE ASSESSMENT",
      description:
        "Conducting pre-transit route surveys to identify physical bottlenecks and clear paths.",
    },
    {
      number: "04",
      title: "INTEGRATED LOGISTICS",
      description:
        "Coordinating customs clearance, port handoffs, and multi-carrier transfers into one flow.",
    },
  ],
  capabilities: [
    {
      number: "01",
      title: "HEAVY LIFT CARGO",
      description:
        "Coordinating specialized lifting and handling procedures for extremely heavy industrial components.",
    },
    {
      number: "02",
      title: "ODC (OVER DIMENSIONAL CARGO)",
      description:
        "Planning transit routes and logistics layouts for cargo exceeding standard container capacities.",
    },
    {
      number: "03",
      title: "MULTIMODAL TRANSPORT",
      description:
        "Combining different shipping modes (road, port, vessel, airport) for global door-to-door transit.",
    },
    {
      number: "04",
      title: "ROUTE SURVEYS",
      description:
        "Conducting pre-transit checks of physical clearances, bridge loading, and route bottlenecks.",
    },
    {
      number: "05",
      title: "CUSTOMS CLEARANCE & COMPLIANCE",
      description:
        "Supporting import/export customs clearance filings and port authority compliance checklists.",
    },
    {
      number: "06",
      title: "ON-SITE LOGISTICS MANAGEMENT",
      description:
        "Managing coordinated delivery schedules, checkpoint handoffs, and site arrival logistics.",
    },
  ],
  process: [
    {
      number: "01",
      label: "INFO",
      title: "REQUIREMENT ANALYSIS",
      description:
        "Assessing weight, cargo dimensions, origin/destination points, and delivery schedule constraints.",
    },
    {
      number: "02",
      label: "SURVEY",
      title: "ROUTE SURVEY",
      description:
        "Conducting pre-transit physical route inspections to identify barriers, clearance heights, and road limits.",
    },
    {
      number: "03",
      label: "PLAN",
      title: "LOGISTICS PLANNING",
      description:
        "Designing customized lifting methods, choosing trailers, and preparing permits and traffic coordination.",
    },
    {
      number: "04",
      label: "COORDINATE",
      title: "MULTIMODAL COORDINATION",
      description:
        "Reserving vessel space, coordinating port handling equipment, and syncing road transfers.",
    },
    {
      number: "05",
      label: "CLEAR",
      title: "CUSTOMS SUPPORT",
      description:
        "Managing import/export compliance filings, port declarations, and regulatory documentation checks.",
    },
    {
      number: "06",
      label: "DELIVER",
      title: "SITE DELIVERY",
      description:
        "Coordinated arrival at the final project site, synchronized positioning, and delivery confirmation.",
    },
  ],
  operations: {
    sectionNum: "06",
    sectionLabel: "Multimodal Coordination",
    import: {
      largeLabel: "MM",
      eyebrow: "SEQUENCE A",
      title: "SEA-ROAD DRAYAGE",
      description:
        "A standard configuration for oversized cargo: inland road transit from factory to departure port, international ocean freight on specialized cargo vessels, port handling at destination, and final road delivery to the site.",
      flowSteps: "ROAD → PORT → OCEAN → PORT → ROAD",
    },
    export: {
      largeLabel: "MA",
      eyebrow: "SEQUENCE B",
      title: "AIR-ROAD MOVEMENT",
      description:
        "For time-sensitive critical components: road transport to the departure airport, specialized loading onto cargo freighter flights, airport handling at destination, and final road transport to site.",
      flowSteps: "ROAD → AIRPORT → AIR FREIGHT → ROAD",
    },
  },
  engineeringPlanning: {
    label: "Planning",
    title: "ENGINEERING & ROUTE PLANNING",
    description:
      "Detailed pre-planning and route surveys are critical to the execution of specialized cargo projects. Quickmas coordinates route assessments, dimension planning, and port coordination.",
    items: [
      {
        title: "ROUTE SURVEYS",
        description:
          "Assessing domestic transit routes, checking overhead clearances, bridge load limits, road widths, and turning radiuses to identify feasible pathways.",
      },
      {
        title: "CARGO DIMENSIONS",
        description:
          "Analyzing weight distributions, center of gravity calculations, and lifting points to support correct trailer setup and secure tie-downs.",
      },
      {
        title: "MOVEMENT PLANNING",
        description:
          "Coordinating transit scheduling, escort requirements, local traffic restrictions, and necessary road permits before cargo departs.",
      },
      {
        title: "PORT COORDINATION",
        description:
          "Planning loading crane positioning, terminal space allocation, vessel stowage configurations, and synchronized transfer procedures at sea ports.",
      },
    ],
  },
  relatedServices: [
    { title: "Air Freight", href: "/services/air-freight" },
    { title: "Ocean Freight", href: "/services/ocean-freight" },
    { title: "Customs Brokerage", href: "/services/customs-brokerage" },
    { title: "Warehousing & 3PL", href: "/services/warehousing-3pl" },
    { title: "Primary Transportation", href: "/services/primary-transportation" },
  ],
  cta: {
    headline: ["LET'S PLAN", "YOUR MOST", "COMPLEX MOVE."],
    description:
      "Tell us about your project cargo requirements and our team can help coordinate the right logistics approach for oversized and specialized shipments.",
    primaryCta: "DISCUSS YOUR PROJECT",
    primaryHref: "/contact?service=project-cargo",
    secondaryCta: "CONTACT OUR TEAM",
    secondaryHref: "/contact",
  },
};

// ─── Service Pages Registry ─────────────────────────────────────────────────

export const serviceDetailPages: Record<string, ServiceDetailPageData> = {
  "air-freight": airFreightData,
  "ocean-freight": oceanFreightData,
  "customs-brokerage": customsBrokerageData,
  "warehousing-3pl": warehousing3plData,
  "primary-transportation": primaryTransportationData,
  "project-cargo": projectCargoData,
};
