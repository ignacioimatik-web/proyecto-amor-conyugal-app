"use client";

export default function ContactForm() {
  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        alert(
          "Gracias por tu mensaje. Te responderemos pronto a la mayor brevedad."
        );
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground">
            Nombre *
          </label>
          <input
            id="name"
            type="text"
            required
            className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-light focus:border-primary focus:outline-none"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground">
            Email *
          </label>
          <input
            id="email"
            type="email"
            required
            className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-light focus:border-primary focus:outline-none"
            placeholder="tu@email.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground">
          Teléfono
        </label>
        <input
          id="phone"
          type="tel"
          className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-light focus:border-primary focus:outline-none"
          placeholder="+34 ..."
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-foreground">
          Asunto *
        </label>
        <input
          id="subject"
          type="text"
          required
          className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-light focus:border-primary focus:outline-none"
          placeholder="¿En qué podemos ayudarte?"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Mensaje *
        </label>
        <textarea
          id="message"
          rows={5}
          required
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
  );
}
