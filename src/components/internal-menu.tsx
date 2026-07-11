"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "@/lib/menu";

export function InternalMenu() {
  const pathname = usePathname();
  const groupedHrefs = new Set(["/acerca", "/colabora", "/contacto"]);
  const primaryItems = menuItems.filter(([, href]) => !groupedHrefs.has(href));
  const secondaryItems = menuItems.filter(([, href]) => groupedHrefs.has(href));
  return <nav className="relative mt-3 pb-1" aria-label="Secciones del proyecto">
    <div className="overflow-x-auto pr-24">
      <div className="flex min-w-max items-end gap-1 rounded-2xl border border-[#d8d1c7] bg-[#fffdf9] px-2 pt-2 shadow-sm">
        <span className="mb-0.5 hidden items-center gap-1.5 rounded-t-lg bg-[#254b3d] px-3 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-white sm:flex"><span className="h-2.5 w-3.5 rounded-sm border border-white/70" />Proyecto</span>
        {primaryItems.map(([label, href]) => <Link key={href} href={href} className={`rounded-t-xl px-3 py-2.5 text-xs font-bold transition sm:text-sm ${pathname === href ? "bg-[#254b3d] text-white" : "bg-[#f1e8dc] text-[#46554c] hover:bg-[#e5d9cc]"}`}>{label}</Link>)}
      </div>
    </div>
    <details className="group absolute right-2 top-2 z-40">
      <summary className={`flex cursor-pointer list-none items-center gap-1 rounded-t-xl px-3 py-2.5 text-xs font-bold shadow-sm transition sm:text-sm ${secondaryItems.some(([, href]) => pathname === href) ? "bg-[#254b3d] text-white" : "bg-[#d96c4a] text-white hover:bg-[#b95638]"}`}>
        Contacto <span className="text-base font-normal leading-none transition group-open:rotate-45">+</span>
      </summary>
      <div className="absolute right-0 z-50 mt-1 min-w-48 overflow-hidden rounded-2xl border border-[#d8d1c7] bg-[#fffdf9] p-1.5 shadow-2xl shadow-[#203f34]/20">
        <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#8a847c]">Información y ayuda</p>
        {secondaryItems.map(([label, href]) => <Link key={href} href={href} className={`block rounded-xl px-3 py-2.5 text-sm font-bold transition ${pathname === href ? "bg-[#254b3d] text-white" : "text-[#46554c] hover:bg-[#f1e8dc]"}`}>{label}</Link>)}
      </div>
    </details>
  </nav>;
}
