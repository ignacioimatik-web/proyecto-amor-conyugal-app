import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import DailyGospelCard from "@/components/experience/daily-gospel-card";
import reflectionsData from "../../../public/data/reflections.json";

export const metadata: Metadata = {
  title: "Carta del Día — Evangelio",
  description:
    "Lectura del evangelio de hoy con meditación para matrimonios. La Palabra de Dios ilumina tu vida en pareja.",
};

export default function GospelPage() {
  // Use the most recent reflection from data
  const todayReflection = reflectionsData[0];

  if (!todayReflection) {
    return (
      <>
        <PageHero
          title="Carta del Día"
          description="La Palabra de Dios meditada desde el amor conyugal."
        />
        <section className="py-12">
          <div className="container-narrow mx-auto px-4 text-center">
            <p className="text-muted">No hay reflexión disponible para hoy.</p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        title="Carta del Día"
        description="La Palabra de Dios meditada desde el amor conyugal."
      />

      {/* Interactive Gospel Card */}
      <section className="py-8 lg:py-12">
        <DailyGospelCard reflection={todayReflection} />
      </section>

      {/* Full traditional view */}
      <section className="py-8 lg:py-12">
        <div className="container-narrow mx-auto px-4 lg:px-6">
          <div className="rounded-xl border border-border bg-surface p-6 sm:p-8 lg:p-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              {new Date(todayReflection.date).toLocaleDateString("es-ES", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-sm text-muted">{todayReflection.liturgicalDay}</p>

            <hr className="my-6 border-border" />

            <h2 className="text-xl font-semibold text-foreground">
              {todayReflection.gospelReference}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
              {todayReflection.gospelText.split("\n").filter(Boolean).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <hr className="my-6 border-border" />

            <div className="rounded-lg bg-surface-alt p-6">
              <h3 className="text-lg font-semibold text-foreground">Meditación para la Pareja</h3>
              <div className="mt-3 space-y-3 text-base leading-relaxed text-muted">
                {todayReflection.meditation.split("\n").filter(Boolean).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <hr className="my-6 border-border" />

            <div className="rounded-lg bg-primary-light/30 p-6">
              <h3 className="text-lg font-semibold text-foreground">Oración de los Esposos</h3>
              <p className="mt-3 text-base italic leading-relaxed text-muted">
                {todayReflection.couplesPrayer}
              </p>
            </div>

            {todayReflection.saintOfTheDay && (
              <p className="mt-4 text-xs text-muted-light text-center">
                🕯️ Conmemoración: {todayReflection.saintOfTheDay}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
