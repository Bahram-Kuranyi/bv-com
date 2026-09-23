import { ArrowRight, Smartphone, Wifi, Router, Wrench, Zap } from "lucide-react";
import { services } from "@/data/services";

const serviceIcons = { smartphone: Smartphone, wifi: Wifi, router: Router, wrench: Wrench, zap: Zap };

export default function ServicesSection() {
  return (
    <section id="leistungen" className="bg-transparent py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-600">
            Unsere Leistungen
          </div>

          <h2 className="mt-4 text-[clamp(1.5rem,7.5vw,1.875rem)] font-black sm:text-4xl">
            Alles rund um Kommunikation & Energie.
          </h2>

          <p className="mt-4 leading-7 text-zinc-600">
            Die wichtigsten Leistungen auf einen Blick.
          </p>
        </div>

        {/* 5 cards in one desktop row */}
        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];

            return (
              <div
                key={service.title}
                className="grid grid-cols-[3rem_1fr] gap-x-4 rounded-3xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl sm:block xl:p-6"
              >
                <div className="row-span-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-50 text-fuchsia-600">
                  <Icon size={23} />
                </div>

                <h3 className="text-lg font-black sm:mt-6 xl:text-xl">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-600 sm:mt-3">
                  {service.text}
                </p>

                <a href="#kontakt" className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-zinc-900 sm:mt-6">
                  Mehr erfahren
                  <ArrowRight size={15} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
