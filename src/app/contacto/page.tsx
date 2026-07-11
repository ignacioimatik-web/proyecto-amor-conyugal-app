import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Ponte en contacto con el Proyecto Amor Conyugal. Escríbenos y te responderemos pronto.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contacto"
        description="Estamos aquí para acompañarte. Escríbenos y te responderemos pronto."
      />

      <section className="py-12 lg:py-16">
        <div className="container-wide mx-auto grid gap-10 px-4 lg:grid-cols-2 lg:px-6">
          {/* Form */}
          <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
            <ContactForm />
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Información de Contacto</h3>
              <div className="mt-4 space-y-4 text-sm text-muted">
                <p>
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a
                    href="mailto:ProyectoAmorConyugal@gmail.com"
                    className="text-primary underline transition-colors hover:text-primary-dark"
                  >
                    ProyectoAmorConyugal@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-primary-light bg-primary-light/10 p-6">
              <h3 className="text-lg font-semibold text-foreground">
                ¿Quieres colaborar?
              </h3>
              <p className="mt-2 text-sm text-muted">
                Puedes ayudarnos con una donación o cuota mensual. Cada aportación, por
                pequeña que sea, nos permite seguir llevando el amor de Dios a más matrimonios.
              </p>
              <a
                href="/colabora"
                className="mt-4 inline-block rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Ver cómo colaborar
              </a>
            </div>

            <div className="rounded-xl bg-surface-alt p-6">
              <h3 className="text-lg font-semibold text-foreground">Redes Sociales</h3>
              <p className="mt-2 text-sm text-muted">
                Síguenos en Instagram, Facebook y YouTube para contenido diario sobre el
                evangelio en clave conyugal.
              </p>
              <div className="mt-4 flex gap-4">
                <a
                  href="https://www.instagram.com/proyectoamorconyugal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                >
                  Instagram →
                </a>
                <a
                  href="https://www.facebook.com/ProyectoAmorConyugal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                >
                  Facebook →
                </a>
                <a
                  href="https://www.youtube.com/@ProyectoAmorConyugal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                >
                  YouTube →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
