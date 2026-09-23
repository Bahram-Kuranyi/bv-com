import { ArrowRight, Newspaper, Tag } from "lucide-react";
import type { Branch } from "@/data/branches";

export default function BranchUpdates({ branch }: { branch: Branch }) {
  return (
    <>
      <section id="angebote" aria-labelledby="branch-offers-title" className="bg-white/55 py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-600">Angebote Ihrer Filiale</p>
          <h2 id="branch-offers-title" className="mt-4 text-3xl font-black sm:text-4xl">Angebote in {branch.city}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {branch.offers.length ? branch.offers.map((offer) => (
              <article key={offer.id} className="min-w-0 rounded-3xl border border-zinc-200 bg-white p-5 sm:p-7">
                {offer.status === "demo" && <p className="mb-3 text-xs font-bold text-fuchsia-700">Beispielangebot · nicht buchbar</p>}
                <h3 className="text-xl font-black">{offer.title}</h3>
                <p className="mt-3 leading-7 text-zinc-600">{offer.description}</p>
                {offer.priceLabel && <p className="mt-5 text-2xl font-black">{offer.priceLabel}</p>}
                {offer.terms && <p className="mt-2 text-sm leading-6 text-zinc-500">{offer.terms}</p>}
                <a href="#kontakt" className="mt-5 inline-flex min-h-11 items-center gap-2 font-bold text-fuchsia-700">In der Filiale anfragen<ArrowRight size={17} aria-hidden="true" /></a>
              </article>
            )) : (
              <div className="rounded-3xl border border-zinc-200 bg-white p-5 sm:p-8 md:col-span-2 lg:col-span-3">
                <Tag size={24} className="text-fuchsia-600" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold">Noch keine Angebote veröffentlicht</h3>
                <p className="mt-3 max-w-2xl leading-7 text-zinc-600">Für {branch.name} sind derzeit keine bestätigten Angebote auf dieser Website hinterlegt.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="news" aria-labelledby="branch-news-title" className="py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-600">Aktuelles vor Ort</p>
          <h2 id="branch-news-title" className="mt-4 text-3xl font-black sm:text-4xl">Neuigkeiten aus {branch.city}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {branch.news.length ? branch.news.map((item) => (
              <article key={item.id} className="min-w-0 rounded-3xl border border-zinc-200 bg-white p-5 sm:p-7">
                {item.status === "demo" && <p className="mb-3 text-xs font-bold text-fuchsia-700">Beispielmeldung</p>}
                <time dateTime={item.publishedAt} className="text-sm text-zinc-500">{new Intl.DateTimeFormat("de-DE", { dateStyle: "long", timeZone: "UTC" }).format(new Date(item.publishedAt))}</time>
                <h3 className="mt-4 text-xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-zinc-600">{item.summary}</p>
              </article>
            )) : (
              <div className="rounded-3xl border border-zinc-200 bg-white p-5 sm:p-8 md:col-span-2 lg:col-span-3">
                <Newspaper size={24} className="text-fuchsia-600" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold">Noch keine Neuigkeiten veröffentlicht</h3>
                <p className="mt-3 max-w-2xl leading-7 text-zinc-600">Hier erscheinen künftig bestätigte Meldungen von {branch.name}.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
