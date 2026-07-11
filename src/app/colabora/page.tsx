import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Colabora",
  description:
    "Colabora con Proyecto Amor Conyugal. Tus donativos nos permiten continuar nuestra labor misionera acompañando a matrimonios y familias.",
};

export default function ColaboraPage() {
  return (
    <>
      <PageHero
        title="Colabora"
        description="«La batalla final entre el Señor y el reino de Satanás será acerca del matrimonio y de la familia» — Sor Lucía"
      />

      <section className="py-12 lg:py-16">
        <div className="container-narrow mx-auto px-4 lg:px-6">
          {/* Intro */}
          <div className="rounded-xl bg-surface-alt p-6 sm:p-8">
            <p className="text-base leading-relaxed text-muted">
              Hay muchos matrimonios que aún no conocen este camino. Muchos que no pueden
              permitírselo, por eso necesitamos donativos económicos que nos permitan continuar
              nuestra labor.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Todos los que colaboramos somos voluntarios, y ofrecemos nuestros propios recursos
              para llevar a cabo cada misión, pero hay veces que no es suficiente.{" "}
              <strong className="text-foreground">
                Colabora con María en la expansión de Proyecto Amor Conyugal
              </strong>
              . Nuestra Madre te lo agradecerá.
            </p>
          </div>

          {/* Razones */}
          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-bold text-foreground gold-line">¿Por qué colaborar?</h2>
            <ul className="space-y-3 text-base leading-relaxed text-muted">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-light text-xs font-bold text-primary-dark">1</span>
                <span>Quieres <strong className="text-foreground">proteger a tu familia</strong> del mayor ataque que pretende <strong className="text-foreground">destruir la familia</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-light text-xs font-bold text-primary-dark">2</span>
                <span>Quieres <strong className="text-foreground">que tus hijos sean felices</strong> viendo a sus padres amar.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-light text-xs font-bold text-primary-dark">3</span>
                <span>Quieres que dejen de sufrir el desgarro en sus hogares y <strong className="text-foreground">puedan volver a amar</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-light text-xs font-bold text-primary-dark">4</span>
                <span>Quieres <strong className="text-foreground">luchar contra la mayor pobreza</strong>, que es la falta de amor, y ayudar a que la <strong className="text-foreground">Buena Nueva del Amor</strong> llegue al mundo entero.</span>
              </li>
            </ul>
          </div>

          {/* Donation Methods */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Transferencia */}
            <div className="rounded-xl border border-border bg-surface p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light text-primary-dark">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m0 0v-1.5c0-.621-.504-1.125-1.125-1.125H2.25" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Transferencia Bancaria</h3>
              <p className="mt-2 text-sm text-muted">
                ASOC.PRIV. DE FIELES ESPOSOS MISIONEROS DE PROYECTO AMOR CONYUGAL
              </p>
              <div className="mt-4 rounded-lg bg-surface-alt p-4">
                <p className="text-sm font-semibold text-foreground">ES90 0081 5240 0700 0307 1910</p>
                <p className="mt-1 text-xs text-muted-light">
                  SWIFT/BIC: <span className="font-mono">BSABESBB</span>
                </p>
              </div>
              <p className="mt-3 text-xs text-muted-light">
                (Agradecemos especialmente las cuotas mensuales aunque sean pequeñas. Lo importante es el amor con el que se hacen.)
              </p>
            </div>

            {/* PayPal */}
            <div className="rounded-xl border border-border bg-surface p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light text-primary-dark">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground">PayPal</h3>
              <p className="mt-2 text-sm text-muted">
                Donar a través de PayPal de forma segura.
              </p>
              <a
                href="https://www.paypal.com/donate/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-lg bg-[#0070ba] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#003087]"
              >
                Donar con PayPal
              </a>
            </div>

            {/* Bizum */}
            <div className="rounded-xl border border-border bg-surface p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light text-primary-dark">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Bizum</h3>
              <p className="mt-2 text-sm text-muted">
                Donación rápida desde tu móvil.
              </p>
              <p className="mt-4 text-sm text-muted">
                Contacta con nosotros para obtener el código de Bizum:
              </p>
              <a
                href="mailto:ProyectoAmorConyugal@gmail.com"
                className="mt-2 inline-block text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
              >
                ProyectoAmorConyugal@gmail.com
              </a>
            </div>
          </div>

          {/* Ventajas fiscales */}
          <div className="mt-10 rounded-xl border border-primary-light bg-primary-light/10 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-foreground">
              Beneficios fiscales
            </h3>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <p>
                Si quieres beneficiarte de las <strong className="text-foreground">ventajas fiscales de entre el 45% y el 80%</strong>,
                envía un email a{" "}
                <a href="mailto:ProyectoAmorConyugal@gmail.com" className="text-primary underline">
                  ProyectoAmorConyugal@gmail.com
                </a>{" "}
                con tus datos para que te enviemos el recibo correspondiente.
              </p>
              <p>
                Puedes fijarte una <strong className="text-foreground">pequeña cuota mensual</strong> si así te viene mejor.
                Nada es poco, todo es mucho. Lo importante es el amor con que lo haces.
              </p>
              <hr className="border-border" />
              <p className="text-xs text-muted-light">
                <strong className="text-foreground">Deducciones fiscales:</strong> En el IRPF los donantes se podrán deducir el
                80% del importe de sus cuotas y/o donativos íntegros por aportaciones de hasta 250€ al año.
                A partir de esa cantidad la deducción será del 45% si lleva colaborando con nosotros al menos
                3 años seguidos, con un límite del 10% de la base liquidable (Real Decreto-Ley 2/2023).
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
