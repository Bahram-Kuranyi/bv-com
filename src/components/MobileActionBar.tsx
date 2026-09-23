import { MessageCircle, Phone } from "lucide-react";

type MobileActionBarProps = {
  phone: string;
  whatsapp: string;
  branchName: string;
  isDemo?: boolean;
};

export default function MobileActionBar({
  phone,
  whatsapp,
  branchName,
  isDemo = false,
}: MobileActionBarProps) {
  return (
    <nav aria-label={`Kontakt: ${branchName}`} className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-200 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      {isDemo && <p className="mb-2 text-center text-xs text-zinc-600">Demo · Kontaktdaten nicht bestätigt</p>}
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a
          href={`tel:${phone.replace(/[^\d+]/g, "")}`}
          aria-label={`${branchName} anrufen${isDemo ? " (Demo)" : ""}`}
          className="flex items-center justify-center gap-2 rounded-xl border border-zinc-300 px-4 py-3 font-bold"
        >
          <Phone size={18} />
          Anrufen
        </a>

        <a
          href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
          aria-label={`WhatsApp: ${branchName}${isDemo ? " (Demo)" : ""}`}
          className="flex items-center justify-center gap-2 rounded-xl bg-fuchsia-600 px-4 py-3 font-bold text-white"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </nav>
  );
}
