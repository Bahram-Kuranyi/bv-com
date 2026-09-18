"use client";

import { MessageCircle, Phone } from "lucide-react";

type MobileActionBarProps = {
  phone: string;
  whatsapp: string;
};

export default function MobileActionBar({
  phone,
  whatsapp,
}: MobileActionBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-200 bg-white/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a
          href={`tel:${phone}`}
          className="flex items-center justify-center gap-2 rounded-xl border border-zinc-300 px-4 py-3 font-bold"
        >
          <Phone size={18} />
          Anrufen
        </a>

        <a
          href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
          className="flex items-center justify-center gap-2 rounded-xl bg-fuchsia-600 px-4 py-3 font-bold text-white"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
