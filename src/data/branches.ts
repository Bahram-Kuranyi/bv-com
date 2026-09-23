export type BranchOffer = {
  id: string;
  title: string;
  description: string;
  priceLabel?: string;
  terms?: string;
  status: "demo" | "published";
};

export type BranchNews = {
  id: string;
  title: string;
  summary: string;
  /** ISO date (YYYY-MM-DD), supplied by the content editor. */
  publishedAt: string;
  status: "demo" | "published";
};

export type Branch = {
  id: string;
  slug: string;
  city: string;
  name: string;
  address: string;
  phone: string;
  whatsapp: string;
  hours: string;
  /** Existing contact details are demo data until confirmed by the client. */
  contactStatus: "demo" | "verified";
  offers: BranchOffer[];
  news: BranchNews[];
};

export const branches: Branch[] = [
  {
    id: "bad-vilbel",
    slug: "bad-vilbel",
    city: "Bad Vilbel",
    name: "BV COM Bad Vilbel",
    address: "Frankfurter Straße 115, 61118 Bad Vilbel",
    phone: "+49 6101 000000",
    whatsapp: "+49 170 0000000",
    hours: "Mo–Sa · 10:00–19:00",
    contactStatus: "demo",
    // Populate only with branch-approved content; do not inherit global demo offers.
    offers: [],
    news: [],
  },
  {
    id: "frankfurt",
    slug: "frankfurt",
    city: "Frankfurt",
    name: "BV COM Frankfurt",
    address: "Frankfurt am Main",
    phone: "+49 69 000000",
    whatsapp: "+49 170 0000000",
    hours: "Mo–Sa · 10:00–19:00",
    contactStatus: "demo",
    offers: [],
    news: [],
  },
];
