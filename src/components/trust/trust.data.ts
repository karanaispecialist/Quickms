export interface Client {
  name: string;
  logo: string;
}

export interface Membership {
  number: string;
  name: string;
  logo: string;
  type: string;
}

export const clientsData: Client[] = [
  { name: "Microsoft", logo: "/images/clients/microsoft.jpg" },
  { name: "Google", logo: "/images/clients/google.png" },
  { name: "Amazon", logo: "/images/clients/amazon.jpg" },
  { name: "Infosys", logo: "/images/clients/infosys.png" },
  { name: "Wipro", logo: "/images/clients/wipro.png" },
  { name: "TCS", logo: "/images/clients/tcs.jpg" },
  { name: "Cognizant", logo: "/images/clients/cognizant.jpg" },
  { name: "Accenture", logo: "/images/clients/accenture.png" },
  { name: "HCLTech", logo: "/images/clients/hcltech.png" },
  { name: "Tata Steel", logo: "/images/clients/tatasteel.jpg" },
  { name: "Larsen & Toubro", logo: "/images/clients/lt.png" },
  { name: "JSW Steel", logo: "/images/clients/jswsteel.png" },
  { name: "BHEL", logo: "/images/clients/bhel.jpg" },
  { name: "GMR Group", logo: "/images/clients/gmr.png" },
  { name: "Reliance Industries", logo: "/images/clients/reliance.jpg" },
  { name: "Adani Group", logo: "/images/clients/adani.png" },
  { name: "Vedanta", logo: "/images/clients/vedanta.png" }
];

export const membershipsData: Membership[] = [
  {
    number: "01",
    name: "ISO 9001:2015",
    logo: "/images/memberships/iso9001.png",
    type: "Quality Management Standard"
  },
  {
    number: "02",
    name: "ISO 14001:2015",
    logo: "/images/memberships/iso14001.jpg",
    type: "Environmental System Standard"
  },
  {
    number: "03",
    name: "ISO 45001:2018",
    logo: "/images/memberships/iso45001.png",
    type: "Occupational Health & Safety"
  },
  {
    number: "04",
    name: "NASSCOM",
    logo: "/images/memberships/nasscom.jpg",
    type: "Member Association Certificate"
  }
];

export const trustIntro = {
  label: "08 — TRUST & CREDIBILITY",
  headline: "TRUSTED TO KEEP BUSINESS MOVING.",
  sublabel: "BUILT ON RELATIONSHIPS. BACKED BY INDUSTRY.",
  copy: "Our growth is built on the confidence of the businesses we serve and the professional networks that strengthen our global logistics capabilities.",
  editorialStatementLine1: "TRUST ISN'T A CLAIM.",
  editorialStatementLine2: "IT'S BUILT ONE MOVEMENT AT A TIME."
};
