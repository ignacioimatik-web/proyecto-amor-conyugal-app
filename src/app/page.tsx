import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-surface-alt via-background to-background">
        <div className="container-wide mx-auto px-4 py-20 sm:py-28 lg:px-6 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="animate-fade-in text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Amar es el camino.
              <br />
              <span className="text-primary">Vivirlo es la misión.</span>
            </h1>
            <p className="animate-fade-in-up mt-6 text-lg leading-relaxed text-muted sm:text-xl">
              Acompañamos tu matrimonio desde el amor de Cristo.
              Evangelio diario, retiros, formación y una comunidad que camina contigo.
            </p>
            <div className="animate-fade-in-up mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/evangelio"
                className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md"
              >
                Evangelio de Hoy
              </Link>
              <Link
                href="/retiros"
                className="rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-surface-alt"
              >
                Ver Retiros
              </Link>
              <Link
                href="/que-ofrecemos"
                className="rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-surface-alt"
              >
                Qué Ofrecemos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="border-t border-border bg-surface">
        <div className="container-wide mx-auto px-4 py-16 lg:px-6 lg:py-24">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Un camino de fe para tu matrimonio
            </h2>
            <p className="mt-3 text-muted">
              Descubre todos los recursos que tenemos para acompañarte en cada etapa.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <Link
                key={f.href}
                href={f.href}
                className="group rounded-xl border border-border bg-surface p-6 transition-all hover:border-primary-light hover:shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light text-primary-dark">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary-dark">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="border-t border-border bg-surface-alt">
        <div className="container-wide mx-auto px-4 py-16 lg:px-6 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <blockquote className="text-lg italic leading-relaxed text-foreground sm:text-xl">
              &ldquo;Dios nos encontró en la tormenta y nos devolvió la esperanza.&rdquo;
            </blockquote>
            <p className="mt-4 text-sm text-muted">— Ana y Pedro, 14 años de casados</p>
            <Link
              href="/testimonios"
              className="mt-6 inline-block text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
            >
              Leer más testimonios &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Colabora CTA */}
      <section className="border-t border-border bg-foreground py-16 lg:py-20">
        <div className="container-wide mx-auto px-4 text-center lg:px-6">
          <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl">
            Ayúdanos a seguir acompañando matrimonios
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-light">
            Todos los que colaboramos somos voluntarios. Tu donación, por pequeña que sea,
            nos permite llegar a más parejas que necesitan este camino.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/colabora"
              className="rounded-lg bg-primary px-8 py-4 text-lg font-medium text-white shadow-lg transition-all hover:bg-primary-dark"
            >
              Colabora Ahora
            </Link>
            <Link
              href="/contacto"
              className="rounded-lg border-2 border-primary-light bg-transparent px-8 py-4 text-lg font-medium text-white transition-all hover:bg-white/10"
            >
              Contacta con Nosotros
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const features = [
  {
    title: "Evangelio del Día",
    description: "La Palabra de Dios meditada desde el amor conyugal. Un momento diario para crecer juntos.",
    href: "/evangelio",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Retiros para Matrimonios",
    description: "Encuentra el retiro perfecto para renovar tu alianza. Fechas, lugares y facilitadores en España y el mundo.",
    href: "/retiros",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: "Formación Continua",
    description: "Catequesis de San Juan Pablo II, artículos y guías sobre comunicación, espiritualidad, sexualidad y vida conyugal.",
    href: "/formacion",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
      </svg>
    ),
  },
  {
    title: "Testimonios",
    description: "Historias reales de parejas que han transformado su matrimonio con la gracia de Dios.",
    href: "/testimonios",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    title: "Adoraciones",
    description: "Momentos de oración y adoración eucarística para parejas en parroquias de toda España y el mundo.",
    href: "/adoraciones",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Misiones",
    description: "Parejas misioneras que llevan el amor de Dios a los confines del mundo. Conoce su labor y cómo apoyarles.",
    href: "/misiones",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Qué Ofrecemos",
    description: "Descubre todo lo que el Proyecto Amor Conyugal ofrece: retiros, catequesis, acompañamiento y pastoral familiar.",
    href: "/que-ofrecemos",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Colabora",
    description: "Ayúdanos a continuar nuestra labor. Donaciones, cuotas mensuales y cómo puedes apoyar esta misión.",
    href: "/colabora",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
];
