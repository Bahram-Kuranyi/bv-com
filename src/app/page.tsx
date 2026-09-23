"use client";

import { useState } from "react";
import Link from "next/link";

import ServicesSection from "@/components/ServicesSection";
import EnergySection from "@/components/EnergySection";
import PartnerStrip from "@/components/PartnerStrip";
import PartnerLogoBackground from "@/components/PartnerLogoBackground";
import MobileNav from "@/components/MobileNav";

import { branches } from "@/data/branches";

import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronRight,
  Clock,
  Headphones,
  Home as HomeIcon,
  MapPin,
  MessageCircle,
  Newspaper,
  Phone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Users,
  Wifi,
} from "lucide-react";


const news = [
  {
    date: "18. September 2026",
    category: "Neu",
    title: "Neue Smartphone-Generation eingetroffen",
    text: "Aktuelle Geräte können ab sofort in unseren Filialen angesehen und mit verschiedenen Tarifen kombiniert werden.",
  },
  {
    date: "15. September 2026",
    category: "Service",
    title: "Persönliche Tarifberatung",
    text: "Wir vergleichen gemeinsam mit Ihnen Mobilfunk- und Internettarife und finden eine passende Lösung.",
  },
  {
    date: "10. September 2026",
    category: "Filialen",
    title: "Beratung direkt vor Ort",
    text: "Besuchen Sie eine unserer Filialen und lassen Sie sich persönlich und unverbindlich beraten.",
  },
];

const offers = [
  {
    type: "Smartphone",
    title: "Smartphone + Vertrag",
    subtitle: "Gerät und Tarif kombinieren",
    detail: "z. B. mit 50 GB 5G",
    price: "ab 39,99 €",
    icon: Smartphone,
  },
  {
    type: "Mobilfunk",
    title: "SIM Only",
    subtitle: "Flexibel ohne neues Gerät",
    detail: "z. B. 25 GB 5G",
    price: "ab 14,99 €",
    icon: Wifi,
  },
  {
    type: "Internet",
    title: "Internet Zuhause",
    subtitle: "DSL, Kabel oder Glasfaser",
    detail: "z. B. bis 250 MBit/s",
    price: "ab 29,99 €",
    icon: HomeIcon,
  },
];

const benefits = [
  {
    icon: Users,
    title: "Persönlich",
    text: "Beratung direkt vor Ort",
  },
  {
    icon: BadgeCheck,
    title: "Unabhängig",
    text: "Mehrere Anbieter vergleichen",
  },
  {
    icon: ShieldCheck,
    title: "Transparent",
    text: "Klare Angebote und Beratung",
  },
  {
    icon: Headphones,
    title: "Service",
    text: "Auch nach Vertragsabschluss",
  },
];

export default function Home() {
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);

  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#fafafa] font-sans text-zinc-950">
      <PartnerLogoBackground />

      <div className="relative z-20">
        {/* Announcement */}
        <div className="bg-zinc-950 text-white">
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2.5 text-center text-xs sm:text-sm">
            <Sparkles size={15} className="shrink-0 text-fuchsia-400" />

            <span className="font-medium">
              Neue Angebote & aktuelle Informationen
            </span>

            <ChevronRight size={15} className="text-fuchsia-400" />
          </div>
        </div>

        {/* Navbar */}
        <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/95 backdrop-blur-xl">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-fuchsia-600 text-sm font-black text-white">
                BV
              </div>

              <div>
                <div className="text-lg font-black leading-none">BV COM</div>

                <div className="mt-1 text-[11px] text-zinc-500">
                  Communications
                </div>
              </div>
            </Link>

            <nav className="hidden items-center gap-4 lg:gap-8 text-sm font-semibold md:flex">
              <a href="#filialen" className="transition hover:text-fuchsia-600">
                Filialen
              </a>

              <a
                href="#leistungen"
                className="transition hover:text-fuchsia-600"
              >
                Leistungen
              </a>

              <a href="#news" className="transition hover:text-fuchsia-600">
                Aktuelles
              </a>

              <a href="#angebote" className="transition hover:text-fuchsia-600">
                Angebote
              </a>
            </nav>

            <a
              href="#kontakt"
              className="hidden rounded-full bg-fuchsia-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-fuchsia-700 md:block"
            >
              Beratung
            </a>

            <MobileNav />
          </div>
        </header>

        {/* Hero */}
        <section className="overflow-hidden bg-white/55">
          <div className="mx-auto grid max-w-7xl min-w-0 items-center gap-10 px-5 py-10 sm:py-16 md:gap-12 md:py-20 lg:min-h-[620px] lg:grid-cols-[1.05fr_.95fr] lg:px-8">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-fuchsia-200 bg-fuchsia-50 px-3 py-2 text-xs font-semibold text-fuchsia-700 sm:px-4 sm:text-sm">
                <MapPin size={15} />
                Persönlich · Lokal · Mehrere Filialen
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Handy, Internet
                <br />
                <span className="text-fuchsia-600">
                  & persönliche Beratung.
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 sm:mt-7 sm:text-lg sm:leading-8 text-zinc-600">
                Mobilfunk, Smartphones, Internet, Energie und Service – einfach
                vergleichen und persönlich beraten lassen.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#filialen"
                  className="flex items-center justify-center gap-2 rounded-full bg-fuchsia-600 px-6 py-3.5 font-bold text-white transition hover:bg-fuchsia-700"
                >
                  Filiale finden
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#angebote"
                  className="flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3.5 font-bold transition hover:bg-zinc-100"
                >
                  Angebote ansehen
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-zinc-500">
                <span>✓ Persönliche Beratung</span>
                <span>✓ Mehrere Anbieter</span>
                <span>✓ Direkt vor Ort</span>
              </div>
            </div>

            {/* Demo Highlight */}
            <div className="relative">
              <div className="absolute -right-32 -top-24 h-80 w-80 rounded-full bg-fuchsia-100 blur-3xl" />

              <div className="absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-violet-100 blur-3xl" />

              <div className="relative rounded-[2rem] border border-zinc-200 bg-[#fafafa] p-3 sm:p-5 shadow-xl shadow-zinc-200/60">
                <div className="rounded-[1.6rem] bg-zinc-950 p-5 text-white sm:p-9">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-fuchsia-600 px-3 py-1 text-xs font-bold">
                      AKTUELL
                    </span>

                    <Newspaper size={21} className="text-zinc-500" />
                  </div>

                  <h2 className="mt-8 max-w-md text-2xl sm:mt-16 font-black leading-tight sm:text-4xl">
                    Neuigkeiten, Aktionen und Angebote.
                  </h2>

                  <p className="mt-5 max-w-md leading-7 text-zinc-400">
                    Hier kann BV COM jederzeit aktuelle Meldungen,
                    Produktneuheiten oder Aktionen veröffentlichen.
                  </p>

                  <a href="#news" className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-fuchsia-400 sm:mt-10">
                    Aktuelles entdecken
                    <ArrowRight size={17} />
                  </a>
                </div>
              </div>

              <div className="relative mx-3 -mt-3 rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-xl sm:absolute sm:mx-0 sm:mt-0 sm:-bottom-5 sm:right-8">
                <div className="text-xs text-zinc-400">Demo</div>

                <div className="mt-1 font-bold">
                  Inhalte später im CMS verwalten
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners */}
        <PartnerStrip />

        {/* Branches */}
        <section id="filialen" className="bg-white/55 py-12 sm:py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-600">
                Unsere Filialen
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                Wo möchten Sie beraten werden?
              </h2>

              <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">
                Wählen Sie Ihren Standort. Informationen und Angebote können je
                nach Filiale individuell verwaltet werden.
              </p>
            </div>

            <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5">
              {branches.map((branch) => {
                const active = selectedBranch.id === branch.id;

                return (
                  <Link
                    key={branch.id}
                    href={`/filialen/${branch.slug}`}
                    onMouseEnter={() => setSelectedBranch(branch)}
                    onFocus={() => setSelectedBranch(branch)}
                    className={`group relative block rounded-3xl border p-5 sm:p-7 transition-all duration-200 ${
                      active
                        ? "border-fuchsia-500 bg-fuchsia-50 shadow-lg shadow-fuchsia-100"
                        : "border-zinc-200 bg-white hover:border-fuchsia-300 hover:shadow-lg"
                    }`}
                  >
                    {active && (
                      <div className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-fuchsia-600 text-white">
                        <Check size={17} />
                      </div>
                    )}

                    <Building2
                      size={29}
                      className={
                        active
                          ? "text-fuchsia-600"
                          : "text-zinc-400 group-hover:text-fuchsia-500"
                      }
                    />

                    <div className="mt-7 text-xs font-bold uppercase tracking-wider text-zinc-400">
                      BV COM Filiale
                    </div>

                    <div className="mt-2 text-2xl font-black">
                      {branch.city}
                    </div>

                    <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-500">
                      {branch.address}
                    </p>

                    <div className="mt-7 flex items-center gap-2 font-bold text-fuchsia-700">
                      Zur Filiale
                      <ArrowRight
                        size={17}
                        className="transition group-hover:translate-x-1"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="mx-auto mt-6 max-w-4xl lg:hidden [@media(pointer:coarse)]:block">
              <label htmlFor="contact-branch" className="mb-2 block text-sm font-semibold">
                Filiale für Ihre Beratung
              </label>
              <select
                id="contact-branch"
                value={selectedBranch.id}
                onChange={(event) => {
                  const branch = branches.find((item) => item.id === event.target.value);
                  if (branch) setSelectedBranch(branch);
                }}
                className="min-h-12 w-full rounded-xl border border-zinc-300 bg-white px-4 text-base"
              >
                {branches.map((branch) => (
                  <option key={branch.id} value={branch.id}>{branch.name}</option>
                ))}
              </select>
            </div>

            {/* Selected Branch */}
            <div className="mx-auto mt-7 max-w-4xl overflow-hidden rounded-3xl bg-zinc-950 text-white shadow-xl">
              <div className="grid gap-6 p-5 sm:p-7 md:gap-8 md:grid-cols-[1fr_auto] md:items-center md:p-9">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-fuchsia-400">
                    Aktuell ausgewählt
                  </div>

                  <h3 className="mt-3 text-2xl font-black sm:text-3xl">
                    {selectedBranch.name}
                  </h3>

                  <div className="mt-6 flex flex-col gap-4 text-sm text-zinc-400">
                    <div className="flex items-start gap-3">
                      <MapPin size={17} className="mt-0.5 shrink-0" />

                      {selectedBranch.address}
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock size={17} />

                      {selectedBranch.hours}
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone size={17} />

                      {selectedBranch.phone}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                  <a
                    href={`https://wa.me/${selectedBranch.whatsapp.replace(
                      /\D/g,
                      "",
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-fuchsia-600 px-6 py-3.5 font-bold transition hover:bg-fuchsia-500"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>

                  <Link
                    href={`/filialen/${selectedBranch.slug}`}
                    className="flex items-center justify-center gap-2 rounded-full border border-zinc-700 px-6 py-3.5 font-bold transition hover:bg-zinc-900"
                  >
                    Zur Filiale
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <ServicesSection />

        {/* Energy */}
        <EnergySection />

        {/* News */}
        <section id="news" className="bg-white/55 py-12 sm:py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <div className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-600">
                  Aktuelles
                </div>

                <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                  Neu bei BV COM.
                </h2>

                <p className="mt-4 text-zinc-600">
                  Beispiel für News, Aktionen und aktuelle Informationen.
                </p>
              </div>

              <button className="flex items-center gap-2 text-sm font-bold text-fuchsia-700">
                Alle Meldungen
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {news.map((item, index) => (
                <article
                  key={item.title}
                  className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className={`h-36 ${
                      index === 0
                        ? "bg-gradient-to-br from-fuchsia-100 to-violet-100"
                        : index === 1
                          ? "bg-gradient-to-br from-zinc-100 to-fuchsia-50"
                          : "bg-gradient-to-br from-violet-50 to-zinc-100"
                    }`}
                  >
                    <div className="flex h-full items-center justify-center">
                      <Newspaper
                        size={40}
                        strokeWidth={1.3}
                        className="text-zinc-400"
                      />
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4">
                      <span className="rounded-full bg-fuchsia-50 px-3 py-1 text-xs font-bold text-fuchsia-700">
                        {item.category}
                      </span>

                      <span className="text-xs text-zinc-400">{item.date}</span>
                    </div>

                    <h3 className="mt-6 text-xl font-black leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-zinc-600">
                      {item.text}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-bold">
                      Mehr erfahren
                      <ArrowRight
                        size={15}
                        className="transition group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Offers */}
        <section id="angebote" className="py-12 sm:py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-2xl">
              <div className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-600">
                Beispielangebote
              </div>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Angebote klar und einfach dargestellt.
              </h2>

              <p className="mt-4 leading-7 text-zinc-600">
                Preise und Inhalte sind aktuell nur Beispiele und werden später
                über das Management-System gepflegt.
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
              {offers.map((offer) => {
                const Icon = offer.icon;

                return (
                  <article
                    key={offer.title}
                    className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex h-28 items-center sm:h-40 justify-center bg-zinc-950">
                      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-fuchsia-600 text-white">
                        <Icon size={35} />
                      </div>
                    </div>

                    <div className="p-5 sm:p-6">
                      <div className="text-xs font-bold uppercase tracking-wider text-fuchsia-600">
                        {offer.type}
                      </div>

                      <h3 className="mt-2 text-xl font-black">{offer.title}</h3>

                      <p className="mt-2 text-sm text-zinc-500">
                        {offer.subtitle}
                      </p>

                      <div className="mt-6 border-t border-zinc-100 pt-5">
                        <div className="text-sm text-zinc-500">
                          {offer.detail}
                        </div>

                        <div className="mt-1 text-2xl font-black">
                          {offer.price}
                        </div>

                        <div className="mt-1 text-xs text-zinc-400">
                          pro Monat · Beispielpreis
                        </div>
                      </div>

                      <a href="#kontakt" className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 py-3 font-bold text-white transition hover:bg-fuchsia-600">
                        Angebot anfragen
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
              <div>
                <div className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-600">
                  Warum BV COM?
                </div>

                <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                  Persönlicher Service statt Tarifchaos.
                </h2>

                <p className="mt-5 max-w-md leading-7 text-zinc-600">
                  Beratung und Service sollen genauso einfach sein wie die
                  Website selbst.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <div
                      key={benefit.title}
                      className="flex gap-4 rounded-2xl border border-zinc-200 p-5"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-fuchsia-50 text-fuchsia-600">
                        <Icon size={20} />
                      </div>

                      <div>
                        <div className="font-black">{benefit.title}</div>

                        <div className="mt-1 text-sm text-zinc-500">
                          {benefit.text}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Review */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-5">
            <div className="rounded-[2rem] border border-zinc-200 bg-white p-5 text-center shadow-sm sm:p-12">
              <div className="flex justify-center gap-1 text-amber-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={19} fill="currentColor" />
                ))}
              </div>

              <p className="mx-auto mt-6 max-w-2xl text-xl font-semibold leading-8 text-zinc-800">
                „Sehr freundliche Beratung und eine schnelle Lösung für meinen
                neuen Mobilfunktarif.“
              </p>

              <div className="mt-5 text-sm text-zinc-500">
                Beispiel Kundenbewertung
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="kontakt" className="px-5 pb-12 sm:pb-20 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-zinc-950 text-white">
            <div className="grid lg:grid-cols-[1.2fr_.8fr]">
              <div className="p-5 sm:p-8 lg:p-12">
                <div className="text-xs font-black uppercase tracking-[0.2em] text-fuchsia-400">
                  Persönliche Beratung
                </div>

                <h2 className="mt-4 max-w-xl text-3xl font-black sm:text-4xl">
                  Fragen? Wir helfen gerne weiter.
                </h2>

                <p className="mt-5 max-w-lg leading-7 text-zinc-400">
                  Kontaktieren Sie direkt die ausgewählte Filiale oder besuchen
                  Sie uns vor Ort.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`https://wa.me/${selectedBranch.whatsapp.replace(
                      /\D/g,
                      "",
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-fuchsia-600 px-6 py-3.5 font-bold"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>

                  <a
                    href={`tel:${selectedBranch.phone}`}
                    className="flex items-center justify-center gap-2 rounded-full border border-zinc-700 px-6 py-3.5 font-bold"
                  >
                    <Phone size={18} />
                    Anrufen
                  </a>
                </div>
              </div>

              <div className="bg-zinc-900 p-5 sm:p-8 lg:p-12">
                <div className="text-sm text-zinc-400">Ausgewählte Filiale</div>

                <div className="mt-2 text-2xl font-black">
                  {selectedBranch.city}
                </div>

                <div className="mt-7 space-y-4 text-sm text-zinc-400">
                  <div className="flex gap-3">
                    <MapPin size={18} className="shrink-0 text-fuchsia-400" />

                    {selectedBranch.address}
                  </div>

                  <div className="flex gap-3">
                    <Clock size={18} className="shrink-0 text-fuchsia-400" />

                    {selectedBranch.hours}
                  </div>

                  <div className="flex gap-3">
                    <Phone size={18} className="shrink-0 text-fuchsia-400" />

                    {selectedBranch.phone}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-200 bg-white">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 py-8 text-sm text-zinc-500 md:flex-row lg:px-8">
            <div>
              <span className="font-bold text-zinc-900">BV COM</span>

              <span className="mt-2 block sm:ml-2 sm:mt-0 sm:inline">Mobil · Internet · Energie · Service</span>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <a className="inline-flex min-h-11 items-center" href="#">Impressum</a>

              <a className="inline-flex min-h-11 items-center" href="#">Datenschutz</a>

              <span>© 2026 BV COM</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
