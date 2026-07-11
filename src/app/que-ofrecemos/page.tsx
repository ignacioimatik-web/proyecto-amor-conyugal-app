import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Qué Ofrecemos",
  description:
    "Descubre todo lo que Proyecto Amor Conyugal ofrece a los matrimonios: retiros, catequesis, evangelio diario, acompañamiento y más.",
};

const offers = [
  {
    title: "Retiros de Matrimonios",
    description:
      "Experiencias únicas donde los matrimonios cambian, se ilusionan y descubren un nuevo camino. Miles de matrimonios lo han experimentado ya. Supone un antes y un después en el matrimonio. Se viven experiencias donde descubrimos que hay una manera totalmente diferente de vivir el matrimonio. Se produce una «bomba atómica del Amor». Se experimenta renovar el amor como nunca habíamos soñado.",
    href: "/retiros",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Retiro de Novios",
    description:
      "Conocer en profundidad el camino y la vocación a la que creemos haber sido llamados. Se profundiza en la vocación y el sacramento del matrimonio mediante un discernimiento profundo y experiencial.",
    href: "/retiros",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Catequesis para Matrimonios",
    description:
      "Para vivir tu matrimonio como Dios lo pensó es imprescindible recorrer el camino de las catequesis de San Juan Pablo II con otros matrimonios. Conocer, encarnar, aterrizar a la vida. Los grupos se reúnen en las parroquias una vez al mes. Abierto a todas las realidades de la Iglesia.",
    href: "/formacion",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Evangelio Diario en Clave Conyugal",
    description:
      "Para que los esposos oremos juntos y hagamos realidad el Evangelio en nuestra vida de esposos. Se comparte diariamente en esta web con una imagen y un reto. También disponible en versión audio y traducido al inglés.",
    href: "/evangelio",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: "Matrimonios Tutores",
    description:
      "Acompañamiento personalizado a matrimonios que así lo requieren. Estos matrimonios están en formación continua para ofrecer de forma voluntaria su tiempo y su vida a quienes desean profundizar de forma más periódica.",
    href: "/contacto",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Jornadas y Adoraciones",
    description:
      "Uno o dos encuentros especiales al año con formación, adoración eucarística, experiencias y comida en común. Además, adoraciones por los matrimonios en parroquias de toda España y del mundo.",
    href: "/adoraciones",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "Pastoral Familiar",
    description:
      "Colaboramos activamente con la Pastoral Familiar de cada diócesis donde nos encontramos, participando en encuentros, formaciones y jornadas.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
];

export default function QueOfrecemosPage() {
  return (
    <>
      <PageHero
        title="Qué Ofrecemos"
        description="Un camino, un itinerario de fe y formación, ascendente, efectivo pero sobre todo ilusionante, para conocer cómo Dios pensó el matrimonio."
      />

      {/* Grid de servicios */}
      <section className="py-12 lg:py-16">
        <div className="container-wide mx-auto px-4 lg:px-6">
          <div className="grid gap-8 sm:grid-cols-2">
            {offers.map((offer) => (
              <article
                key={offer.title}
                className="group rounded-xl border border-border bg-surface p-6 transition-all hover:border-primary-light hover:shadow-sm sm:p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light text-primary-dark">
                  {offer.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{offer.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{offer.description}</p>
                {offer.href && (
                  <Link
                    href={offer.href}
                    className="mt-4 inline-block text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                  >
                    {offer.title.includes("Evangelio")
                      ? "Ir al Evangelio de Hoy →"
                      : offer.title.includes("Tutores")
                      ? "Solicitar acompañamiento →"
                      : `Ver ${offer.title.toLowerCase()} →`}
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cita */}
      <section className="border-t border-border bg-surface-alt py-12 lg:py-16">
        <div className="container-narrow mx-auto px-4 text-center lg:px-6">
          <blockquote className="text-lg italic leading-relaxed text-foreground sm:text-xl">
            &ldquo;Proyecto Amor Conyugal es un método para matrimonios que se ha hecho
            diocesano en Málaga y se está extendiendo por multitud de diócesis por España,
            parte de Europa y Sudamérica.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-muted">
            — Con la supervisión de los párrocos, delegados de pastoral familiar y obispos de cada diócesis.
          </p>
        </div>
      </section>
    </>
  );
}
