import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Formación",
  description: "Recursos de formación para matrimonios: artículos, cursos, guías y podcasts sobre comunicación, espiritualidad y más.",
};

export default function FormationPage() {
  return (
    <>
      <PageHero
        title="Formación"
        description="Recursos para crecer juntos en el amor cristiano."
      />

      <section className="py-12 lg:py-16">
        <div className="container-wide mx-auto px-4 lg:px-6">
          {/* Category filters */}
          <div className="mb-8 flex flex-wrap gap-2">
            {["Todos", "Comunicación", "Espiritualidad", "Sexualidad", "Finanzas", "Crianza"].map(
              (cat) => (
                <button
                  key={cat}
                  type="button"
                  className="rounded-full border border-border px-4 py-1.5 text-sm text-muted transition-colors hover:border-primary-light hover:bg-primary-light/20 hover:text-primary-dark"
                >
                  {cat}
                </button>
              )
            )}
          </div>

          {/* Resources grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {resources.map((r) => (
              <article
                key={r.title}
                className="rounded-xl border border-border bg-surface p-6 transition-all hover:shadow-sm"
              >
                <span className="mb-2 inline-block rounded-full bg-surface-alt px-3 py-1 text-xs font-medium text-muted">
                  {r.category} &middot; {r.type}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{r.summary}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-muted">
                  <span>{r.author}</span>
                  <span>{r.duration}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const resources = [
  {
    title: "La Escucha Activa en el Matrimonio",
    summary: "Aprende a escuchar verdaderamente a tu cónyuge, más allá de las palabras.",
    category: "Comunicación",
    type: "Artículo",
    author: "P. Juan Pérez",
    duration: "10 min",
  },
  {
    title: "La Oración en Pareja: Guía Práctica",
    summary: "Cómo rezar juntos y hacer de la oración un pilar de tu matrimonio.",
    category: "Espiritualidad",
    type: "Guía",
    author: "Matrimonio García",
    duration: "3 días",
  },
  {
    title: "Curso: Amor y Sexualidad",
    summary: "Una visión cristiana de la sexualidad conyugal, desde la teología del cuerpo.",
    category: "Sexualidad",
    type: "Curso",
    author: "P. Antonio Ruiz",
    duration: "4 semanas",
  },
  {
    title: "Finanzas del Hogar: Presupuesto en Pareja",
    summary: "Consejos prácticos para gestionar el dinero en familia desde la confianza.",
    category: "Finanzas",
    type: "Artículo",
    author: "Matrimonio López",
    duration: "8 min",
  },
];
