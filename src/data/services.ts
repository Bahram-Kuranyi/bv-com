export type ServiceIcon = "smartphone" | "wifi" | "router" | "wrench" | "zap";

export type Service = {
  title: string;
  text: string;
  icon: ServiceIcon;
};

export const services: Service[] = [
  {
    title: "Handy & Vertrag",
    text: "Smartphones verschiedener Hersteller mit passendem Tarif.",
    icon: "smartphone",
  },
  {
    title: "Mobilfunk",
    text: "Tarife verschiedener Anbieter persönlich vergleichen.",
    icon: "wifi",
  },
  {
    title: "Internet & Festnetz",
    text: "DSL, Kabel und Glasfaser für Zuhause und Unternehmen.",
    icon: "router",
  },
  {
    title: "Service & Support",
    text: "Einrichtung, Beratung und Unterstützung rund um Ihre Geräte.",
    icon: "wrench",
  },
  {
    title: "Strom & Gas",
    text: "Strom- und Gastarife vergleichen und persönlich beraten lassen.",
    icon: "zap",
  },
];
