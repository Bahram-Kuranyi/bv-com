import Image from "next/image";

const featuredPartners = [
  {
    name: "Telekom",
    src: "/partners/telekom.jpg",
  },
  {
    name: "Vodafone",
    src: "/partners/vodafone.svg",
  },
  {
    name: "O2",
    src: "/partners/o2.svg",
  },
  {
    name: "congstar",
    src: "/partners/congstar.jpg",
  },
  {
    name: "Strom & Gas",
    src: "/partners/strom-gas.png",
  },
];

const secondaryPartners = [
  {
    name: "1&1",
    src: "/partners/1und1.jpg",
  },
  {
    name: "Blau",
    src: "/partners/blau.jpg",
  },
  {
    name: "yourfone",
    src: "/partners/yourfone.png",
  },
  {
    name: "otelo",
    src: "/partners/Otelo_logo.svg",
  },
];

export default function PartnerStrip() {
  return (
    <section className="relative z-20 border-y border-zinc-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <div className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-600">
            Unsere wichtigsten Partner & Services
          </div>

          <p className="mt-2 text-sm text-zinc-500">
            Mobilfunk, Telekommunikation und Energie
          </p>
        </div>

        {/* Featured */}
        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-5">
          {featuredPartners.map((partner) => {
            const isEnergy = partner.name === "Strom & Gas";

            return (
              <div
                key={partner.name}
                className="group flex h-28 items-center justify-center rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-fuchsia-200 hover:shadow-lg"
              >
                <Image
                  src={partner.src}
                  alt={`${partner.name} Logo`}
                  width={isEnergy ? 100 : 190}
                  height={isEnergy ? 190 : 90}
                  className={
                    isEnergy
                      ? "max-h-20 w-auto object-contain transition duration-200 group-hover:scale-105"
                      : "max-h-16 max-w-[145px] object-contain transition duration-200 group-hover:scale-105 md:max-w-[160px]"
                  }
                />
              </div>
            );
          })}
        </div>

        {/* Secondary */}
        <div className="mt-9">
          <div className="text-center text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400">
            Weitere Partner
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {secondaryPartners.map((partner) => (
              <div
                key={partner.name}
                className="flex h-12 w-24 items-center justify-center opacity-65 transition hover:opacity-100 md:w-28"
              >
                <Image
                  src={partner.src}
                  alt={`${partner.name} Logo`}
                  width={150}
                  height={65}
                  className="max-h-10 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
