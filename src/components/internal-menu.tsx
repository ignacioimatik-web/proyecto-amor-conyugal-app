"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "@/lib/menu";

export function InternalMenu() {
  const pathname = usePathname();
  return <nav className="mt-3 overflow-x-auto pb-1" aria-label="Secciones del proyecto">
    <div className="flex min-w-max items-end gap-1 rounded-2xl border border-[#d8d1c7] bg-[#fffdf9] px-2 pt-2 shadow-sm">
      <span className="mb-0.5 hidden items-center gap-1.5 rounded-t-lg bg-[#254b3d] px-3 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-white sm:flex"><span className="h-2.5 w-3.5 rounded-sm border border-white/70" />Proyecto</span>
      {menuItems.map(([label, href]) => <Link key={href} href={href} className={`rounded-t-xl px-3 py-2.5 text-xs font-bold transition sm:text-sm ${pathname === href ? "bg-[#254b3d] text-white" : "bg-[#f1e8dc] text-[#46554c] hover:bg-[#e5d9cc]"}`}>{label}</Link>)}
    </div>
  </nav>;
}
