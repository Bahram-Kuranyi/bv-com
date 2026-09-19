import Image from "next/image";

const partners = [
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
    name: "1&1",
    src: "/partners/1und1.jpg",
  },
  {
    name: "congstar",
    src: "/partners/congstar.jpg",
  },
  {
    name: "Blau",
    src: "/partners/blau.jpg",
  },
  {
    name: "yourfone",
    src: "/partners/yourfone.png",
  },
];

export default function PartnerStrip() {
  return (
    <section className="relative z-20 border-y border-zinc-200 bg-white/85 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="mb-6 text-center text-xs font-black uppercase tracking-[0.22em] text-zinc-400">
          Unsere Partner
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-7 md:gap-x-14">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-10 w-24 items-center justify-center md:h-12 md:w-28"
            >
              <Image
                src={partner.src}
                alt={`${partner.name} Logo`}
                width={160}
                height={70}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
