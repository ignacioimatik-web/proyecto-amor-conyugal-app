import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import MissionMap from "@/components/experience/mission-map";
import missionsData from "../../../public/data/missions.json";

export const metadata: Metadata = {
  title: "Misiones y Noticias",
  description:
    "Misiones, retiros y noticias del Proyecto Amor Conyugal. Conoce las próximas fechas y las parejas misioneras por todo el mundo.",
};

export default function MissionsPage() {
  return (
    <>
      <PageHero
        title="Misiones y Noticias"
        description="Próximos retiros, misiones realizadas y parejas misioneras en el mundo."
      />

      {/* Próximas Misiones */}
      <section className="py-12 lg:py-16">
        <div className="container-wide mx-auto px-4 lg:px-6">
          <h2 className="text-xl font-bold text-foreground gold-line">PRÓXIMAS MISIONES</h2>
          <p className="mt-2 text-sm text-muted">
            Las inscripciones suelen abrirse aproximadamente un mes antes. En el comentario del
            Evangelio diario informamos de las fechas de apertura del plazo de inscripción.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 pr-4 font-semibold text-foreground">Días</th>
                  <th className="pb-3 pr-4 font-semibold text-foreground">Lugar</th>
                  <th className="pb-3 font-semibold text-foreground">Información</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {upcomingMissions.map((m, i) => (
                  <tr key={i} className="transition-colors hover:bg-surface-alt">
                    <td className="py-3 pr-4 text-muted">{m.days}</td>
                    <td className="py-3 pr-4 font-medium text-foreground">{m.location}</td>
                    <td className="py-3">
                      {m.link ? (
                        <a
                          href={m.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-primary transition-colors hover:text-primary-dark"
                        >
                          Aquí →
                        </a>
                      ) : (
                        <span className="text-muted-light">Próximamente</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 rounded-xl border border-primary-light bg-primary-light/10 p-6">
            <p className="text-sm text-muted">
              <strong className="text-foreground">¿Quieres más información?</strong> Ponte en
              contacto con nosotros a través del correo electrónico:{" "}
              <a
                href="mailto:ProyectoAmorConyugal@gmail.com"
                className="text-primary underline"
              >
                ProyectoAmorConyugal@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Adoraciones callout */}
      <section className="border-t border-border bg-surface-alt py-8">
        <div className="container-wide mx-auto px-4 text-center lg:px-6">
          <h3 className="text-lg font-bold text-foreground">
            ADORACIÓN POR LOS MATRIMONIOS EN EL MUNDO
          </h3>
          <p className="mt-2 text-sm text-muted">
            Para ver las parroquias donde se realizan adoraciones por los matrimonios,{" "}
            <a
              href="/adoraciones"
              className="font-semibold text-primary underline transition-colors hover:text-primary-dark"
            >
              pincha aquí
            </a>
            .
          </p>
        </div>
      </section>

      {/* Mapa de misioneros */}
      <section className="py-12 lg:py-16">
        <div className="container-wide mx-auto px-4 lg:px-6">
          <h2 className="text-xl font-bold text-foreground gold-line">
            PAREJAS MISIONERAS EN EL MUNDO
          </h2>
          <p className="mt-2 mb-8 text-sm text-muted">
            Matrimonios que han dejado todo para llevar el carisma del Proyecto Amor Conyugal
            a los confines de la tierra.
          </p>
          <MissionMap missions={missionsData} />
        </div>
      </section>

      {/* Misiones Realizadas */}
      <section className="border-t border-border bg-surface-alt py-12 lg:py-16">
        <div className="container-wide mx-auto px-4 lg:px-6">
          <h2 className="text-xl font-bold text-foreground gold-line">
            MISIONES REALIZADAS Y NOTICIAS
          </h2>
          <div className="mt-6 space-y-3">
            {pastMissions.map((m, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-surface p-4 transition-colors hover:border-primary-light"
              >
                <h3 className="text-sm font-semibold text-foreground">{m.title}</h3>
                {m.description && (
                  <p className="mt-1 text-xs text-muted">{m.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const upcomingMissions = [
  { days: "17 – 19 Julio", location: "Lisboa", link: "https://proyectoamorconyugal.es/misiones-y-noticias/" },
  { days: "17 – 19 Julio", location: "Málaga (Novios)", link: "https://proyectoamorconyugal.es/misiones-y-noticias/" },
  { days: "7 – 9 Agosto", location: "Tacuarembó (Uruguay)", link: "https://proyectoamorconyugal.es/misiones-y-noticias/" },
  { days: "7 – 9 Agosto", location: "Buenos Aires (Argentina)", link: "" },
  { days: "14 – 16 Agosto", location: "Chile", link: "https://proyectoamorconyugal.es/misiones-y-noticias/" },
  { days: "28 – 30 Agosto", location: "Buenos Aires (Argentina)", link: "" },
  { days: "11 – 13 Septiembre", location: "Buenos Aires (Argentina)", link: "" },
  { days: "18 – 20 Septiembre", location: "Granada", link: "" },
  { days: "25 – 27 Septiembre", location: "Almería", link: "" },
  { days: "25 – 27 Septiembre", location: "Buenos Aires (Argentina)", link: "" },
  { days: "25 – 27 Septiembre", location: "Valladolid", link: "" },
  { days: "25 – 27 Septiembre", location: "Málaga", link: "" },
  { days: "25 – 27 Septiembre", location: "Murcia", link: "" },
  { days: "25 – 27 Septiembre", location: "Madrid", link: "" },
  { days: "25 – 27 Septiembre", location: "Sevilla", link: "https://proyectoamorconyugal.es/misiones-y-noticias/" },
];

const pastMissions = [
  { title: "RETIRO BUENOS AIRES (ARGENTINA) — 3 de JULIO de 2026", description: "Retiro de matrimonios realizado en Buenos Aires." },
  { title: "RETIRO LUXEMBURGO — 3 de JULIO de 2026", description: "Retiro para la comunidad hispanohablante en Luxemburgo." },
  { title: "RETIRO AMOREBIETA — 26 de JUNIO de 2026", description: "" },
  { title: "RETIRO VALENCIA — 19 de JUNIO de 2026", description: "" },
  { title: "RETIRO ASTURIAS — 19 de JUNIO de 2026", description: "" },
  { title: "RETIRO BUENOS AIRES (ARGENTINA) — 12 de JUNIO de 2026", description: "" },
  { title: "RETIRO ALBACETE — 12 de JUNIO de 2026", description: "" },
  { title: "RETIRO VALLADOLID — 12 de JUNIO de 2026", description: "" },
  { title: "RETIRO MÁLAGA — 12 de JUNIO de 2026", description: "" },
  { title: "RETIRO CÓRDOBA — 12 de JUNIO de 2026", description: "" },
  { title: "RETIRO MADRID — 12 de JUNIO de 2026", description: "" },
  { title: "RETIRO NOVIOS BUENOS AIRES (ARGENTINA) — 5 de JUNIO de 2026", description: "" },
  { title: "RETIRO PUNTA DEL ESTE (URUGUAY) — 5 de JUNIO de 2026", description: "" },
  { title: "RETIRO JAVIER (PAMPLONA) — 5 de JUNIO de 2026", description: "" },
  { title: "RETIRO HERENCIA (CIUDAD REAL) — 29 de MAYO de 2026", description: "" },
];
