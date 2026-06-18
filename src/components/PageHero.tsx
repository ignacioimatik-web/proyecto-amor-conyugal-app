import Link from "next/link";

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumb?: { label: string; href: string }[];
}

export default function PageHero({ title, description, breadcrumb }: PageHeroProps) {
  return (
    <section className="border-b border-border bg-surface-alt">
      <div className="container-wide mx-auto px-4 py-12 lg:px-6 lg:py-16">
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
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>
        )}
      </div>
    </section>
  );
}
