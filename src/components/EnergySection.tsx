import Image from "next/image";

import { ArrowRight, Flame, Home, ShieldCheck, Zap } from "lucide-react";

export default function EnergySection() {
  return (
    <section className="relative z-20 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left */}
            <div className="flex flex-col justify-between bg-zinc-950 p-8 text-white sm:p-10 lg:p-12">
              <div>
                <div className="w-28 sm:w-32">
                  <Image
                    src="/partners/strom-gas.png"
                    alt="Strom und Gas"
                    width={320}
                    height={600}
                    className="h-auto w-full object-contain"
                  />
                </div>

                <div className="mt-8 text-xs font-black uppercase tracking-[0.22em] text-fuchsia-400">
                  Energie
                </div>

                <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                  Strom & Gas
                  <br />
                  einfach vergleichen.
                </h2>

                <p className="mt-5 max-w-md leading-7 text-zinc-400">
                  Lassen Sie sich zu Strom- und Gastarifen persönlich beraten
                  und finden Sie eine passende Lösung für Ihr Zuhause.
                </p>
              </div>

              <div className="mt-10 text-sm text-zinc-500">
                Persönliche Beratung in unseren Filialen
              </div>
            </div>

            {/* Right */}
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-600">
                Energieberatung
              </div>

              <h3 className="mt-4 text-3xl font-black">
                Auch bei Energie gut beraten.
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-zinc-600">
                Strom- und Gastarife vergleichen und direkt vor Ort beraten
                lassen.
              </p>

              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-zinc-200 p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <Zap size={21} />
                  </div>

                  <h4 className="mt-5 text-lg font-black">Strom</h4>

                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    Stromtarife vergleichen und passende Angebote finden.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-200 p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <Flame size={21} />
                  </div>

                  <h4 className="mt-5 text-lg font-black">Gas</h4>

                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    Gastarife vergleichen und persönlich beraten lassen.
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3 text-sm text-zinc-600 sm:flex-row sm:gap-7">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={17} className="text-fuchsia-600" />
                  Persönliche Beratung
                </div>

                <div className="flex items-center gap-2">
                  <Home size={17} className="text-fuchsia-600" />
                  Für Haushalt & Zuhause
                </div>
              </div>

              <button className="mt-8 flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3.5 font-bold text-white transition hover:bg-fuchsia-600">
                Energieberatung
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
