"use client";

import { useEffect, useRef, useState } from "react";
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
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
      document.body.style.overflow = previousOverflow;
      dialog?.close();
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 md:hidden"
        aria-label="Menü öffnen"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-haspopup="dialog"
      >
        <Menu size={21} />
      </button>

      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        aria-label="Mobile Navigation"
        onCancel={() => setOpen(false)}
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const controls = event.currentTarget.querySelectorAll<HTMLElement>("button, a[href]");
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none bg-transparent p-0 text-zinc-950 backdrop:bg-black/30 backdrop:backdrop-blur-sm"
      >
          <div className="ml-auto flex h-full w-[min(90%,24rem)] flex-col overflow-y-auto overscroll-contain bg-white p-5 pt-[max(1.25rem,env(safe-area-inset-top))] pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
              <div>
                <div className="font-black">BV COM</div>
                <div className="mt-1 text-xs text-zinc-500">Communications</div>
              </div>

              <button
                aria-label="Menü schließen"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100"
              >
                <X size={20} />
              </button>
            </div>

            <nav aria-label="Hauptnavigation" className="my-6 flex flex-col gap-2">
              {links.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-4 rounded-2xl px-4 py-4 font-semibold transition hover:bg-zinc-100"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-fuchsia-50 text-fuchsia-600">
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
      </dialog>
    </>
  );
}
