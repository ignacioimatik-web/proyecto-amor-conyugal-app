"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "@/lib/menu";

export function InternalMenu() {
  const pathname = usePathname();
  return <details className="group relative"><summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-[#d8d1c7] bg-white px-4 py-2 text-xs font-bold text-[#52635a] shadow-sm"><span>Menú</span><span className="transition group-open:rotate-45">+</span></summary><div className="absolute right-0 z-30 mt-2 w-[min(22rem,calc(100vw-2.5rem))] overflow-hidden rounded-3xl border border-[#e4dbd0] bg-[#fffdf9] p-2 shadow-2xl shadow-[#203f34]/15"><div className="grid max-h-[70vh] grid-cols-2 overflow-y-auto p-1">{menuItems.map(([label, href]) => <Link key={href} href={href} className={`rounded-2xl px-3 py-3 text-sm font-semibold transition ${pathname === href ? "bg-[#254b3d] text-white" : "text-[#46554c] hover:bg-[#f1e8dc]"}`}>{label}</Link>)}</div></div></details>;
}
