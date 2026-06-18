import Link from "next/link";
import { footerColumns } from "@/data/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-alt">
      <div className="container-wide mx-auto px-4 py-12 lg:px-6 lg:py-16">
        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-sm font-bold text-white">
                AG
              </span>
              Ama a Dios
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Acompañamos tu matrimonio desde el amor de Cristo.
              <br />
              <em className="text-xs">Amar es el camino. Vivirlo es la misión.</em>
            </p>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-light transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted">
          <p>&copy; {year} Ama a Dios. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
