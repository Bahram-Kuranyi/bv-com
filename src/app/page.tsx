"use client";

import MobileNav from "@/components/MobileNav";
import { branches } from "@/data/branches";
import { useState } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  Clock,
  Headphones,
  MapPin,
  MessageCircle,
  Newspaper,
  Phone,
  Router,
  Smartphone,
  Wifi,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Handy & Vertrag",
    text: "Smartphones und passende Tarife persönlich vergleichen.",
    icon: Smartphone,
  },
  {
    title: "Mobilfunk",
    text: "Tarife verschiedener Anbieter passend zu Ihrem Bedarf.",
    icon: Wifi,
  },
  {
    title: "Internet & Festnetz",
    text: "DSL, Kabel und Glasfaser für Zuhause und Unternehmen.",
    icon: Router,
  },
  {
    title: "Service & Support",
    text: "Einrichtung, Beratung und technische Unterstützung.",
    icon: Wrench,
  },
];

const news = [
  {
    date: "18. September 2026",
    category: "News",
    title: "Neue Angebote und Services bei BV COM",
    text: "Entdecken Sie aktuelle Neuigkeiten, neue Produkte und Services in unseren Filialen.",
  },
  {
    date: "12. September 2026",
    category: "Filialen",
    title: "Persönliche Beratung direkt vor Ort",
    text: "Besuchen Sie unsere Filialen und lassen Sie sich individuell beraten.",
  },
  {
    date: "05. September 2026",
    category: "Service",
    title: "Neue Beratungszeiten verfügbar",
    text: "Mehr Zeit für persönliche Beratung rund um Mobilfunk und Internet.",
  },
];

const offers = [
  {
    title: "Smartphone + Vertrag",
    text: "Aktuelle Geräte mit passendem Mobilfunktarif.",
  },
  {
    title: "SIM Only",
    text: "Flexible Tarife ohne neues Smartphone.",
  },
  {
    title: "Internet für Zuhause",
    text: "DSL, Kabel oder Glasfaser passend zu Ihrer Adresse.",
  },
];

export default function Home() {
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);

  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-950">
      {/* Announcement Bar */}
      <div className="bg-zinc-950 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2.5 text-center text-xs sm:text-sm">
          <Newspaper size={16} className="shrink-0 text-fuchsia-400" />

          <span className="text-zinc-300">Neu bei BV COM:</span>

          <span className="font-semibold">
            Aktuelle News und Angebote entdecken
          </span>

          <ChevronRight size={16} className="text-fuchsia-400" />
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-fuchsia-600 font-black text-white">
              BV
            </div>

            <div>
              <div className="font-black leading-none">BV COM</div>
              <div className="mt-1 text-xs text-zinc-500">Communications</div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a href="#filialen" className="hover:text-fuchsia-600">
              Filialen
            </a>

            <a href="#leistungen" className="hover:text-fuchsia-600">
              Leistungen
            </a>

            <a href="#news" className="hover:text-fuchsia-600">
              News
            </a>

            <a href="#angebote" className="hover:text-fuchsia-600">
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
      <section>
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:py-20 lg:min-h-[620px] lg:grid-cols-[1.1fr_.9fr] lg:px-8">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-fuchsia-200 bg-fuchsia-50 px-4 py-2 text-sm font-semibold text-fuchsia-700">
              <MapPin size={15} />
              Mehrere Filialen · Persönliche Beratung
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Kommunikation,
              <br />
              <span className="text-fuchsia-600">einfach gemacht.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-600">
              Smartphones, Mobilfunk, Internet und persönliche Beratung – direkt
              in Ihrer BV COM Filiale.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#filialen"
                className="flex items-center justify-center gap-2 rounded-full bg-fuchsia-600 px-6 py-3.5 font-bold text-white transition hover:bg-fuchsia-700"
              >
                Filiale auswählen
                <ArrowRight size={18} />
              </a>

              <a
                href="#news"
                className="flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3.5 font-bold"
              >
                <Newspaper size={18} />
                Neuigkeiten
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-16 -top-16 h-72 w-72 rounded-full bg-fuchsia-200/60 blur-3xl" />

            <div className="relative rounded-[2.5rem] border border-zinc-200 bg-white p-6 shadow-2xl shadow-zinc-200/60">
              <div className="rounded-[2rem] bg-zinc-950 p-8 text-white">
                <div className="text-sm font-medium text-fuchsia-400">
                  BV COM
                </div>

                <h2 className="mt-14 text-4xl font-black">
                  Ihre Technik.
                  <br />
                  Unsere Beratung.
                </h2>

                <p className="mt-5 leading-7 text-zinc-400">
                  Persönlich vor Ort, telefonisch oder direkt über WhatsApp.
                </p>

                <div className="mt-12 flex items-center gap-3 border-t border-zinc-800 pt-6">
                  <Headphones className="text-fuchsia-400" />
                  <span className="text-sm font-semibold">
                    Persönlicher Service
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Selection */}
      <section id="filialen" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-fuchsia-600">
              Unsere Filialen
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Wählen Sie Ihre Filiale.
            </h2>

            <p className="mt-4 text-lg text-zinc-600">
              Angebote, Kontaktinformationen und Services können je nach
              Standort unterschiedlich sein.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
            {branches.map((branch) => {
              const active = selectedBranch.id === branch.id;

              return (
                <button
                  key={branch.id}
                  onClick={() => setSelectedBranch(branch)}
                  className={`relative rounded-3xl border p-7 text-left transition ${
                    active
                      ? "border-fuchsia-500 bg-fuchsia-50 shadow-lg shadow-fuchsia-100"
                      : "border-zinc-200 bg-white hover:border-fuchsia-300"
                  }`}
                >
                  {active && (
                    <div className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-fuchsia-600 text-white">
                      <Check size={17} />
                    </div>
                  )}

                  <Building2
                    size={28}
                    className={active ? "text-fuchsia-600" : "text-zinc-400"}
                  />

                  <div className="mt-6 text-sm font-semibold text-zinc-500">
                    BV COM
                  </div>

                  <div className="mt-1 text-2xl font-black">{branch.city}</div>

                  <div className="mt-3 max-w-xs text-sm leading-6 text-zinc-500">
                    {branch.address}
                  </div>

                  <div className="mt-6 flex items-center gap-2 font-bold text-fuchsia-700">
                    Filiale auswählen
                    <ArrowRight size={17} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Branch */}
          <div className="mx-auto mt-8 max-w-4xl rounded-3xl bg-zinc-950 p-7 text-white md:p-9">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="text-sm font-semibold text-fuchsia-400">
                  Ausgewählte Filiale
                </div>

                <h3 className="mt-2 text-3xl font-black">
                  {selectedBranch.name}
                </h3>

                <div className="mt-5 flex flex-col gap-3 text-sm text-zinc-400">
                  <div className="flex items-center gap-3">
                    <MapPin size={17} />
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

              <div className="flex flex-col gap-3">
                <button className="flex items-center justify-center gap-2 rounded-full bg-fuchsia-600 px-6 py-3.5 font-bold">
                  <MessageCircle size={18} />
                  WhatsApp
                </button>

                <a
                  href={`/filialen/${selectedBranch.slug}`}
                  className="flex items-center justify-center gap-2 rounded-full border border-zinc-700 px-6 py-3.5 font-bold"
                >
                  Zur Filiale
                  <ArrowRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="leistungen" className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-fuchsia-600">
              Leistungen
            </div>

            <h2 className="mt-4 text-4xl font-black">
              Was können wir für Sie tun?
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-3xl border border-zinc-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-100 text-fuchsia-700">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 text-xl font-black">{service.title}</h3>

                  <p className="mt-3 leading-7 text-zinc-600">{service.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-fuchsia-600">
                Aktuelles
              </div>

              <h2 className="mt-4 text-4xl font-black">
                Neuigkeiten von BV COM.
              </h2>
            </div>

            <button className="flex items-center gap-2 font-bold text-fuchsia-700">
              Alle Meldungen
              <ArrowRight size={17} />
            </button>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {news.map((item) => (
              <article
                key={item.title}
                className="group rounded-3xl border border-zinc-200 bg-[#fafafa] p-7 transition hover:border-fuchsia-200 hover:bg-white hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-fuchsia-100 px-3 py-1 text-xs font-bold text-fuchsia-700">
                    {item.category}
                  </span>

                  <span className="text-xs text-zinc-400">{item.date}</span>
                </div>

                <h3 className="mt-8 text-2xl font-black leading-tight">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-600">{item.text}</p>

                <div className="mt-7 flex items-center gap-2 text-sm font-bold">
                  Mehr erfahren
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Offers */}
      <section id="angebote" className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-fuchsia-600">
              Angebote
            </div>

            <h2 className="mt-4 text-4xl font-black">
              Das Richtige für jeden Bedarf.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {offers.map((offer) => (
              <div
                key={offer.title}
                className="group rounded-3xl bg-zinc-950 p-7 text-white"
              >
                <Smartphone size={32} className="text-fuchsia-400" />

                <h3 className="mt-20 text-2xl font-black">{offer.title}</h3>

                <p className="mt-3 leading-7 text-zinc-400">{offer.text}</p>

                <button className="mt-8 flex items-center gap-2 font-bold text-fuchsia-400">
                  Mehr erfahren
                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="kontakt" className="px-5 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-fuchsia-600 px-7 py-14 text-white md:px-14">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <div className="text-sm font-semibold text-fuchsia-100">
                {selectedBranch.city}
              </div>

              <h2 className="mt-2 text-3xl font-black md:text-4xl">
                Wir beraten Sie persönlich.
              </h2>

              <p className="mt-4 text-fuchsia-100">
                Kontaktieren Sie direkt Ihre ausgewählte BV COM Filiale.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-fuchsia-700">
                <MessageCircle size={18} />
                WhatsApp
              </button>

              <button className="flex items-center justify-center gap-2 rounded-full border border-fuchsia-400 px-6 py-3.5 font-bold">
                <Phone size={18} />
                Anrufen
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 py-8 text-sm text-zinc-500 md:flex-row lg:px-8">
          <div>© 2026 BV COM</div>

          <div className="flex gap-5">
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
