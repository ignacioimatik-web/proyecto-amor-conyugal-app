import type { Metadata } from "next";
import Link from "next/link";
import RetreatGrid from "@/components/retreats/RetreatGrid";

export const metadata: Metadata = {
  title: "Retiros para Matrimonios",
  description:
    "Calendario de retiros, talleres y convivencias para matrimonios. Encuentra el retiro perfecto para renovar tu alianza. Filtra por tipo, país y ciudad.",
  openGraph: {
    title: "Retiros para Matrimonios — Ama a Dios",
    description:
      "Explora nuestro calendario de retiros para matrimonios, novios, jóvenes y familias. Encuentra fechas, lugares y tipos de retiro para renovar tu alianza.",
  },
};

export default function RetreatsPage() {
  return (
    <>
      {/* Hero Section — reescrita con tokens del design system */}
      <section className="relative bg-gradient-to-br from-primary-light/20 via-background to-accent-light/30 py-20 lg:py-28 overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, var(--color-primary) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
        <div className="relative container-wide mx-auto px-4 lg:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
              Retiros para{" "}
              <span className="text-primary">renovar tu alianza</span>
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
              Encuentra el retiro perfecto para tu matrimonio, noviazgo o familia.
              Explora fechas, lugares y tipos de retiro organizados por el Proyecto
              Amor Conyugal en España y el mundo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#retiros-lista"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-base font-medium rounded-lg hover:bg-primary-dark active:bg-primary-dark transition-all duration-200 shadow-sm"
              >
                Ver retiros disponibles
              </a>
              <a
                href="https://proyectoamorconyugal.es/misiones-y-noticias/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary-dark text-base font-medium rounded-lg hover:bg-primary-light/20 active:bg-primary-light/30 transition-all duration-200"
              >
                Web oficial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick stats / info bar */}
      <section className="bg-surface border-y border-border">
        <div className="container-wide mx-auto px-4 lg:px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "7", label: "Retiros en 2026", desc: "En toda España e internacional" },
              { number: "4", label: "Tipos de retiro", desc: "Matrimonios, novios, jóvenes, con niños" },
              { number: "5+", label: "Países", desc: "España, Argentina, Uruguay, Portugal, Luxemburgo" },
              { number: "10+", label: "Años", desc: "De experiencia acompañando matrimonios" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="text-3xl font-bold text-primary">{stat.number}</p>
                <p className="text-sm font-semibold text-foreground">{stat.label}</p>
                <p className="text-xs text-muted-light">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retreats list with filters */}
      <section id="retiros-lista" className="py-12 lg:py-16">
        <div className="container-wide mx-auto px-4 lg:px-6">
          <RetreatGrid />
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-foreground py-16 lg:py-20">
        <div className="container-wide mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="mt-4 text-lg text-muted-light max-w-xl mx-auto">
            Contacta con el Proyecto Amor Conyugal directamente para más información
            sobre retiros en tu zona o para organizar un retiro en tu parroquia.
          </p>
          <div className="mt-8">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-lg font-medium rounded-xl hover:bg-primary-dark transition-all duration-200 shadow-lg"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
