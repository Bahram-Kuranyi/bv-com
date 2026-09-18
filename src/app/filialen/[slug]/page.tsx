import MobileActionBar from "@/components/MobileActionBar";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Smartphone,
  Wifi,
  Router,
  Wrench,
} from "lucide-react";

import { branches } from "@/data/branches";

const services = [
  {
    title: "Handy & Vertrag",
    icon: Smartphone,
  },
  {
    title: "Mobilfunk",
    icon: Wifi,
  },
  {
    title: "Internet & Festnetz",
    icon: Router,
  },
  {
    title: "Service & Support",
    icon: Wrench,
  },
];

export default async function BranchPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const branch = branches.find((item) => item.slug === slug);

  if (!branch) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#fafafa] pb-20 text-zinc-950 md:pb-0">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-600 font-black text-white">
              BV
            </div>

            <div>
              <div className="font-black">BV COM</div>
              <div className="text-xs text-zinc-500">{branch.city}</div>
            </div>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold text-zinc-600"
          >
            <ArrowLeft size={17} />
            Zurück
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-fuchsia-600">
              BV COM Filiale
            </div>

            <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">
              {branch.city}
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-600">
              Persönliche Beratung für Mobilfunk, Smartphones, Internet und
              Service direkt vor Ort.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/${branch.whatsapp.replace(/\D/g, "")}`}
                className="flex items-center justify-center gap-2 rounded-full bg-fuchsia-600 px-6 py-3.5 font-bold text-white"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>

              <a
                href={`tel:${branch.phone}`}
                className="flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3.5 font-bold"
              >
                <Phone size={18} />
                Anrufen
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-zinc-950 p-7 text-white">
            <h2 className="text-xl font-black">Filialinformationen</h2>

            <div className="mt-7 space-y-5 text-sm text-zinc-300">
              <div className="flex gap-3">
                <MapPin className="shrink-0 text-fuchsia-400" size={19} />
                <span>{branch.address}</span>
              </div>

              <div className="flex gap-3">
                <Clock className="shrink-0 text-fuchsia-400" size={19} />
                <span>{branch.hours}</span>
              </div>

              <div className="flex gap-3">
                <Phone className="shrink-0 text-fuchsia-400" size={19} />
                <span>{branch.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-3xl font-black">Unsere Leistungen</h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-zinc-200 p-6"
                >
                  <Icon className="text-fuchsia-600" />

                  <div className="mt-5 font-bold">{service.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <MobileActionBar phone={branch.phone} whatsapp={branch.whatsapp} />
    </main>
  );
}
