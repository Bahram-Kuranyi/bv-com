import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, MapPin, MessageCircle, Phone } from "lucide-react";

import BranchUpdates from "@/components/BranchUpdates";
import EnergySection from "@/components/EnergySection";
import MobileActionBar from "@/components/MobileActionBar";
import PartnerLogoBackground from "@/components/PartnerLogoBackground";
import PartnerStrip from "@/components/PartnerStrip";
import ServicesSection from "@/components/ServicesSection";
import { branches } from "@/data/branches";

type BranchPageProps = { params: Promise<{ slug: string }> };

function getBranch(slug: string) {
  const branch = branches.find((item) => item.slug === slug);
  if (!branch) notFound();
  return branch;
}

export async function generateMetadata({ params }: BranchPageProps): Promise<Metadata> {
  const branch = getBranch((await params).slug);
  return {
    title: `${branch.name} | Filiale, Kontakt & Leistungen`,
    description: `Informationen zu ${branch.name}: Kontakt, Öffnungszeiten, Mobilfunk, Internet, Strom & Gas sowie Angebote und Neuigkeiten der Filiale.`,
  };
}

export default async function BranchPage({ params }: BranchPageProps) {
  const branch = getBranch((await params).slug);
  const isDemo = branch.contactStatus === "demo";
  const phoneHref = `tel:${branch.phone.replace(/[^\d+]/g, "")}`;
  const whatsappHref = `https://wa.me/${branch.whatsapp.replace(/\D/g, "")}`;

  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#fafafa] pb-[calc(8rem+env(safe-area-inset-bottom))] font-sans text-zinc-950 md:pb-0">
      <PartnerLogoBackground />
      <div className="relative z-20">
        <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/95 backdrop-blur-xl">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
            <Link href="/" aria-label="BV COM Startseite" className="flex min-w-0 items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-fuchsia-600 text-sm font-black text-white">BV</div>
              <div className="min-w-0">
                <div className="text-lg font-black leading-none">BV COM</div>
                <div className="mt-1 text-xs text-zinc-500">{branch.city}</div>
              </div>
            </Link>
            <Link href="/#filialen" className="flex min-h-11 shrink-0 items-center gap-2 text-sm font-semibold text-zinc-600 transition hover:text-fuchsia-600">
              <ArrowLeft size={17} aria-hidden="true" />Alle Filialen
            </Link>
          </div>
        </header>

        <section className="bg-white/55">
          <div className="mx-auto max-w-7xl px-5 py-10 sm:py-16 lg:px-8 lg:py-20">
            <nav aria-label="Filiale wählen" className="mb-8 flex flex-wrap gap-2">
              {branches.map((item) => (
                <Link
                  key={item.id}
                  href={`/filialen/${item.slug}`}
                  aria-current={item.id === branch.id ? "page" : undefined}
                  className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${item.id === branch.id ? "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-700" : "border-zinc-200 bg-white text-zinc-600 hover:border-fuchsia-300 hover:text-fuchsia-700"}`}
                >
                  <MapPin size={15} aria-hidden="true" />{item.city}
                </Link>
              ))}
            </nav>

            <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_.9fr] lg:gap-12">
              <div className="min-w-0 lg:py-5">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-600">Ihre BV COM Filiale</p>
                <h1 className="mt-4 break-words text-4xl font-black tracking-tight sm:text-6xl">{branch.city}</h1>
                <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
                  Persönliche Beratung für Mobilfunk, Smartphones, Internet, Strom & Gas und Service direkt vor Ort.
                </p>
                <nav aria-label="Auf dieser Filialseite" className="mt-7 flex flex-wrap gap-2">
                  <a href="#leistungen" className="inline-flex min-h-11 items-center rounded-full border border-zinc-300 bg-white px-4 text-sm font-semibold hover:border-fuchsia-300">Leistungen</a>
                  <a href="#angebote" className="inline-flex min-h-11 items-center rounded-full border border-zinc-300 bg-white px-4 text-sm font-semibold hover:border-fuchsia-300">Angebote</a>
                  <a href="#news" className="inline-flex min-h-11 items-center rounded-full border border-zinc-300 bg-white px-4 text-sm font-semibold hover:border-fuchsia-300">Aktuelles</a>
                </nav>
              </div>

              <section id="kontakt" aria-labelledby="branch-contact-title" className="min-w-0 rounded-3xl bg-zinc-950 p-5 text-white sm:p-8">
                <h2 id="branch-contact-title" className="text-xl font-black">Kontakt & Öffnungszeiten</h2>
                <p className="mt-2 text-sm text-zinc-400">{branch.name}</p>
                {isDemo && (
                  <p className="mt-5 rounded-xl border border-fuchsia-400/30 bg-fuchsia-400/10 p-3 text-sm leading-6 text-fuchsia-100">
                    Vorschau: Adresse, Öffnungszeiten und Kontaktnummern sind noch nicht bestätigt. Die Telefonnummern sind Platzhalter.
                  </p>
                )}
                <dl className="mt-6 space-y-5 text-sm">
                  <div>
                    <dt className="flex items-center gap-2 font-semibold"><MapPin size={17} className="text-fuchsia-400" aria-hidden="true" />Adresse</dt>
                    <dd className="mt-1 pl-[25px] leading-6 text-zinc-300">{branch.address}</dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-2 font-semibold"><Clock size={17} className="text-fuchsia-400" aria-hidden="true" />Öffnungszeiten</dt>
                    <dd className="mt-1 pl-[25px] leading-6 text-zinc-300">{branch.hours}</dd>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    <div>
                      <dt className="flex items-center gap-2 font-semibold"><Phone size={17} className="text-fuchsia-400" aria-hidden="true" />Telefon</dt>
                      <dd className="mt-1 break-words pl-[25px] leading-6 text-zinc-300">{branch.phone}</dd>
                    </div>
                    <div>
                      <dt className="flex items-center gap-2 font-semibold"><MessageCircle size={17} className="text-fuchsia-400" aria-hidden="true" />WhatsApp</dt>
                      <dd className="mt-1 break-words pl-[25px] leading-6 text-zinc-300">{branch.whatsapp}</dd>
                    </div>
                  </div>
                </dl>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <a href={whatsappHref} aria-label={`WhatsApp: ${branch.name}${isDemo ? " (Demo)" : ""}`} className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-fuchsia-600 px-4 py-3 font-bold transition hover:bg-fuchsia-500"><MessageCircle size={18} aria-hidden="true" />WhatsApp</a>
                  <a href={phoneHref} aria-label={`${branch.name} anrufen${isDemo ? " (Demo)" : ""}`} className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-zinc-600 px-4 py-3 font-bold transition hover:bg-zinc-800"><Phone size={18} aria-hidden="true" />Anrufen</a>
                </div>
              </section>
            </div>
          </div>
        </section>

        <PartnerStrip />
        <ServicesSection />
        <EnergySection />
        <BranchUpdates branch={branch} />

        <footer className="border-t border-zinc-200 bg-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <div><p className="font-bold text-zinc-900">{branch.name}</p><p className="mt-2">Mobil · Internet · Energie · Service</p></div>
            <nav aria-label="Weitere Seiten" className="flex flex-wrap gap-x-5 gap-y-2">
              <Link href="/" className="inline-flex min-h-11 items-center hover:text-fuchsia-600">Startseite</Link>
              <Link href="/#filialen" className="inline-flex min-h-11 items-center hover:text-fuchsia-600">Alle Filialen</Link>
            </nav>
          </div>
        </footer>
      </div>
      <MobileActionBar phone={branch.phone} whatsapp={branch.whatsapp} branchName={branch.name} isDemo={isDemo} />
    </main>
  );
}
