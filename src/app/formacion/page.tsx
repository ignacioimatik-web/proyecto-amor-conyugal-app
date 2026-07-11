import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Formación",
  description:
    "Recursos de formación para matrimonios: catequesis de San Juan Pablo II, artículos, cursos y guías sobre comunicación, espiritualidad y vida conyugal.",
};

export default function FormationPage() {
  return (
    <>
      <PageHero
        title="Formación Conyugal"
        description="Conocer en profundidad la grandeza de nuestro sacramento a través de las catequesis de San Juan Pablo II."
      />

      {/* Catequesis SJPII */}
      <section id="catequesis" className="py-12 lg:py-16">
        <div className="container-wide mx-auto px-4 lg:px-6">
          <h2 className="text-xl font-bold text-foreground gold-line">
            Catequesis de San Juan Pablo II
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            En esta sección compartimos algunas catequesis de San Juan Pablo II comentadas y
            aterrizadas a la vida matrimonial. Para acceder a todas las publicadas, visita la
            web oficial.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {catequesis.map((cat) => (
              <a
                key={cat.title}
                href={cat.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-border bg-surface p-5 transition-all hover:border-primary-light hover:shadow-sm"
              >
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary-dark">
                  {cat.title}
                </h3>
                <p className="mt-1 text-xs text-muted-light">{cat.date}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section className="border-t border-border bg-surface-alt py-12 lg:py-16">
        <div className="container-wide mx-auto px-4 lg:px-6">
          <h2 className="text-xl font-bold text-foreground gold-line">
            Recursos para el Matrimonio
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            El camino de formación incluye también estas áreas fundamentales para la vida en pareja.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((r) => (
              <article
                key={r.title}
                className="rounded-xl border border-border bg-surface p-6 transition-all hover:shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light text-primary-dark">
                  {r.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{r.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cita */}
      <section className="py-12 lg:py-16">
        <div className="container-narrow mx-auto px-4 text-center lg:px-6">
          <blockquote className="text-lg italic leading-relaxed text-foreground sm:text-xl">
            &ldquo;El matrimonio no es solo una institución humana, sino una vocación divina
            a la santidad.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-muted">— San Juan Pablo II</p>
        </div>
      </section>
    </>
  );
}

const catequesis = [
  {
    title: "Diálogo con Jesucristo sobre los fundamentos del matrimonio (5-9-79)",
    date: "5 septiembre 1979",
    url: "https://proyectoamorconyugal.es/it/catechesi-san-giovanni-paolo-ii-5-9-79-a-colloquio-con-cristo-sui-fondamenti-del-matrimonio/",
  },
  {
    title: "Las primeras páginas del libro del Génesis (12-9-79)",
    date: "12 septiembre 1979",
    url: "https://proyectoamorconyugal.es/catequesis-790912-las-primeras-paginas-del-libro-del-genesis/",
  },
  {
    title: "El relato bíblico de la creación del hombre (19-9-79)",
    date: "19 septiembre 1979",
    url: "https://proyectoamorconyugal.es/jpii-catequesis-790919-el-relato-biblico-de-la-creacion-del-hombre/",
  },
  {
    title: "La respuesta de Cristo a los fariseos sobre la indisolubilidad del matrimonio (26-9-79)",
    date: "26 septiembre 1979",
    url: "https://proyectoamorconyugal.es/pa-sjpii-catequesis-790926-la-respuesta-de-cristo-a-los-farieos-sobre-la-indisolubilidad-del-matrimonio/",
  },
  {
    title: "El significado de la soledad originaria del hombre (10-10-79)",
    date: "10 octubre 1979",
    url: "https://proyectoamorconyugal.es/pa-sjpii-catequesis-791010-el-significado-de-la-soledad-originaria-del-hombre/",
  },
  {
    title: "El misterio del estado originario del hombre (30-1-80)",
    date: "30 enero 1980",
    url: "https://proyectoamorconyugal.es/675/",
  },
];

const resources = [
  {
    title: "Comunicación en Pareja",
    description:
      "Aprende a escuchar verdaderamente a tu cónyuge, a expresar tus necesidades con amor y a resolver conflictos desde la comprensión mutua.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    title: "Espiritualidad Conyugal",
    description:
      "Cómo rezar juntos, hacer de la oración un pilar del matrimonio y crecer espiritualmente como pareja.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: "Sexualidad conyugal",
    description:
      "Una visión cristiana de la sexualidad desde la teología del cuerpo de San Juan Pablo II. Descubre la dignidad y la belleza del amor conyugal.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Finanzas del Hogar",
    description:
      "Consejos prácticos para gestionar el dinero en familia desde la confianza, la transparencia y la responsabilidad compartida.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m0 0v-1.5c0-.621-.504-1.125-1.125-1.125H2.25" />
      </svg>
    ),
  },
  {
    title: "Crianza de los Hijos",
    description:
      "Educar en la fe, transmitir valores y criar hijos felices desde el amor y la autoridad responsable.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Vida Misionera",
    description:
      "Descubre el llamado a ser matrimonio misionero. Cómo vivir la dimensión evangelizadora del sacramento del matrimonio.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
];
