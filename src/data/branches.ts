export type Branch = {
  id: string;
  slug: string;
  city: string;
  name: string;
  address: string;
  phone: string;
  whatsapp: string;
  hours: string;
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
  },
];