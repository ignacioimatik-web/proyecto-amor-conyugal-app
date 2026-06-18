import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Testimonios",
  description: "Historias reales de parejas que han transformado su matrimonio. Testimonios de crisis, renovación, formación y misión.",
};

const testimonials = [
  {
    quote: "Dios nos encontró en la tormenta y nos devolvió la esperanza.",
    names: "Ana y Pedro",
    years: "14 años casados",
    category: "Crisis",
    featured: true,
  },
  {
    quote: "El retiro nos enseñó a escucharnos de verdad. Hoy somos más felices que el primer día.",
    names: "María y José",
    years: "23 años casados",
    category: "Renovación",
    featured: false,
  },
  {
    quote: "Acompañar a otras parejas nos ha llenado el corazón. Ser misioneros es nuestro propósito.",
    names: "Rosa y Carlos",
    years: "31 años casados",
    category: "Misión",
    featured: false,
  },
  {
    quote: "La formación nos dio herramientas para sanar heridas que creíamos irreparables.",
    names: "Laura y Andrés",
    years: "8 años casados",
    category: "Formación",
    featured: false,
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Testimonios"
        description="Historias reales de parejas que han transformado su matrimonio."
      />

      <section className="py-12 lg:py-16">
        <div className="container-wide mx-auto px-4 lg:px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {testimonials.map((t) => (
              <article
                key={t.names}
                className={`rounded-xl border p-6 transition-all hover:shadow-sm ${
                  t.featured
                    ? "border-primary-light bg-primary-light/10 ring-1 ring-primary-light sm:col-span-2"
                    : "border-border bg-surface"
                }`}
              >
                {t.featured && (
                  <span className="mb-3 inline-block rounded-full bg-primary-light/50 px-3 py-1 text-xs font-medium text-primary-dark">
                    Testimonio Destacado
                  </span>
                )}
                <blockquote className="text-lg italic leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-4 flex items-center justify-between text-sm text-muted">
                  <span className="font-medium">{t.names}</span>
                  <span>{t.years}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Link to Before/After Slider */}
          <div className="mt-10 text-center">
            <Link
              href="/testimonios/antes-despues"
              className="group inline-flex items-center gap-3 rounded-xl border border-primary-light bg-surface px-8 py-4 transition-all hover:border-primary hover:shadow-md"
            >
              <span className="text-2xl">🔄</span>
              <div className="text-left">
                <p className="font-semibold text-foreground group-hover:text-primary">
                  Antes y Después
                </p>
                <p className="text-sm text-muted">
                  Historias interactivas de transformación — desliza para ver el cambio
                </p>
              </div>
              <span className="text-xl text-muted-light group-hover:text-primary">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
