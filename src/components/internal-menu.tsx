"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "@/lib/menu";

export function InternalMenu() {
  const pathname = usePathname();
  return <details className="group relative">
    <summary className="relative z-10 flex cursor-pointer list-none items-center gap-2 rounded-t-xl rounded-br-xl border border-[#d8d1c7] bg-[#fffdf9] px-4 py-2 text-xs font-bold text-[#254b3d] shadow-sm transition hover:bg-white group-open:border-[#254b3d] group-open:bg-[#254b3d] group-open:text-white">
      <span className="flex h-4 w-5 items-end rounded-sm border border-current/80 p-0.5"><i className="h-1 w-2.5 rounded-t-sm bg-current" /></span>
      <span>Explorar</span><span className="ml-0.5 text-base font-normal leading-none transition group-open:rotate-45">+</span>
    </summary>
    <div className="absolute right-0 top-[2.2rem] z-30 w-[min(30rem,calc(100vw-2.5rem))] overflow-hidden rounded-bl-3xl rounded-tl-3xl rounded-br-3xl border border-[#d8d1c7] bg-[#fffdf9] p-3 shadow-2xl shadow-[#203f34]/15">
      <p className="px-2 pb-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#8a847c]">Todo el proyecto</p>
      <div className="grid max-h-[65vh] grid-cols-1 gap-1 overflow-y-auto sm:grid-cols-2">
        {menuItems.map(([label, href]) => <Link key={href} href={href} className={`rounded-xl border px-3 py-3 text-sm font-semibold transition ${pathname === href ? "border-[#254b3d] bg-[#254b3d] text-white" : "border-transparent bg-[#f7f3ed] text-[#46554c] hover:border-[#e0c7bb] hover:bg-[#f1e8dc]"}`}>{label}</Link>)}
      </div>
    </div>
  </details>;
}
