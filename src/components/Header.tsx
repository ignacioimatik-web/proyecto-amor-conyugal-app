"use client";

import Link from "next/link";
import { useState } from "react";
import { headerNav, mobileNav } from "@/data/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedSub, setExpandedSub] = useState<string | null>(null);

  const toggleSub = (label: string) => {
    setExpandedSub((prev) => (prev === label ? null : label));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container-wide mx-auto flex h-16 items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-sm font-bold text-white">
            AG
          </span>
          <span className="hidden sm:inline">Ama a Dios</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {headerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface-alt hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="ml-4 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
          >
            Contacto
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="flex items-center justify-center rounded-md p-2 text-muted hover:bg-surface-alt hover:text-foreground md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-border bg-surface md:hidden">
          <nav className="container-wide mx-auto space-y-1 px-4 py-4" aria-label="Móvil">
            {mobileNav.map((item) => (
              <div key={item.href}>
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface-alt hover:text-foreground"
                      onClick={() => toggleSub(item.label)}
                    >
                      {item.label}
                      <svg
                        className={`h-4 w-4 transition-transform ${
                          expandedSub === item.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {expandedSub === item.label && (
                      <div className="ml-4 space-y-1 pb-1 pt-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-md px-3 py-2 text-sm text-muted-light transition-colors hover:bg-surface-alt hover:text-foreground"
                            onClick={() => setMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface-alt hover:text-foreground"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
