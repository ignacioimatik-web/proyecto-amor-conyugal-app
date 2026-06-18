import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Adoraciones",
  description: "Momentos de adoración eucarística para parejas. Horarios, lugares y recursos para la oración conyugal.",
};

export default function AdorationsPage() {
  return (
    <>
      <PageHero
        title="Adoraciones"
        description="Momentos de encuentro con Jesús Eucaristía para tu matrimonio."
      />

      <section className="py-12 lg:py-16">
        <div className="container-wide mx-auto px-4 lg:px-6">
          <div className="mb-8">
            <p className="text-sm leading-relaxed text-muted">
              La adoración eucarística es un momento privilegiado de encuentro con Jesús.
              Como pareja, dedicar tiempo a la oración ante el Santísimo Sacramento fortalece
              la unión espiritual y abre el corazón a la gracia de Dios.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {schedules.map((s) => (
              <article
                key={s.title}
                className="rounded-xl border border-border bg-surface p-6 transition-all hover:shadow-sm"
              >
                <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                <div className="mt-3 space-y-2 text-sm text-muted">
                  <p>📍 {s.location}</p>
                  <p>🕐 {s.schedule}</p>
                  <p className="text-sm">{s.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const schedules = [
  {
    title: "Hora Santa para Matrimonios",
    location: "Parroquia de la Sagrada Familia, Madrid",
    schedule: "Primer viernes de cada mes, 20:00",
    description: "Una hora de adoración eucarística con reflexiones para parejas.",
  },
  {
    title: "Juntos ante Jesús",
    location: "Santuario del Amor Misericordioso, Barcelona",
    schedule: "Todos los jueves, 19:30",
    description: "Espacio de oración silenciosa para matrimonios con confesión disponible.",
  },
  {
    title: "Noche de Oración por los Matrimonios",
    location: "Monasterio de la Cruz, Sevilla",
    schedule: "Último sábado de cada mes, 21:00",
    description: "Adoración, alabanza y oración por las familias.",
  },
];
