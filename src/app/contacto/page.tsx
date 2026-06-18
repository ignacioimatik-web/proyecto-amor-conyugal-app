"use client";

import { useEffect } from "react";
import PageHero from "@/components/PageHero";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contacto — Ama a Dios";
  }, []);

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
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Gracias por tu mensaje. Te responderemos pronto.");
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-light focus:border-primary focus:outline-none"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-light focus:border-primary focus:outline-none"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground">
                  Asunto
                </label>
                <input
                  id="subject"
                  type="text"
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-light focus:border-primary focus:outline-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-light focus:border-primary focus:outline-none"
                  placeholder="Escribe aquí tu mensaje..."
                />
              </div>
              <button
                type="submit"
                className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Información de Contacto</h3>
              <div className="mt-4 space-y-4 text-sm text-muted">
                <p>
                  <strong className="text-foreground">Email:</strong>{" "}
                  hola@amaadios.org
                </p>
                <p>
                  <strong className="text-foreground">Teléfono:</strong> +34 123 456 789
                </p>
                <p>
                  <strong className="text-foreground">Dirección:</strong> Calle del Amor, 1, 28001 Madrid, España
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground">Redes Sociales</h3>
              <p className="mt-2 text-sm text-muted">
                Síguenos en Instagram, Facebook y YouTube para contenido diario.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
