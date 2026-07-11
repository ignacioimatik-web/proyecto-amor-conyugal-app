import Link from "next/link";
import { InternalMenu } from "@/components/internal-menu";

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumb?: { label: string; href: string }[];
}

export default function PageHero({ title, description, breadcrumb }: PageHeroProps) {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-5 sm:px-8">
        <Link href="/" className="block overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-[#e4dbd0]" aria-label="Volver al inicio">
          <img src="/proyecto-amor-conyugal-logo.webp" alt="Proyecto Amor Conyugal" className="block h-auto w-full" />
        </Link>
        <InternalMenu />
      </section>
      <section className="mx-auto mt-8 max-w-6xl border-y border-[#e2dbd0] bg-[#fffaf3] px-5 sm:px-8">
      <div className="container-wide mx-auto px-0 py-10 lg:px-0 lg:py-14">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="mb-4 text-sm text-muted" aria-label="Migas de pan">
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            {breadcrumb.map((crumb) => (
              <span key={crumb.href}>
                <span className="mx-2">/</span>
                <Link href={crumb.href} className="transition-colors hover:text-foreground">
                  {crumb.label}
                </Link>
              </span>
            ))}
          </nav>
        )}
        <p className="text-xs font-bold uppercase tracking-[.2em] text-[#d96c4a]">Caminar juntos</p>
        <h1 className="mt-3 font-serif text-4xl tracking-tight text-[#20342c] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">{description}</p>
        )}
      </div>
      </section>
    </>
  );
}
