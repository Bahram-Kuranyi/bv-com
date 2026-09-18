"use client";

import { useState } from "react";
import {
  Menu,
  X,
  MapPin,
  Newspaper,
  BriefcaseBusiness,
  Tag,
  MessageCircle,
} from "lucide-react";

const links = [
  {
    label: "Filialen",
    href: "#filialen",
    icon: MapPin,
  },
  {
    label: "Leistungen",
    href: "#leistungen",
    icon: BriefcaseBusiness,
  },
  {
    label: "News",
    href: "#news",
    icon: Newspaper,
  },
  {
    label: "Angebote",
    href: "#angebote",
    icon: Tag,
  },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 md:hidden"
        aria-label="Menü öffnen"
      >
        <Menu size={21} />
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <button
            aria-label="Menü schließen"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          />

          <div className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-white p-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
              <div>
                <div className="font-black">BV COM</div>
                <div className="mt-1 text-xs text-zinc-500">Communications</div>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-2">
              {links.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-4 rounded-2xl px-4 py-4 font-semibold transition hover:bg-zinc-100"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-50 text-fuchsia-600">
                      <Icon size={19} />
                    </div>

                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="mt-auto border-t border-zinc-200 pt-5">
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-fuchsia-600 px-5 py-4 font-bold text-white"
              >
                <MessageCircle size={19} />
                Beratung starten
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
