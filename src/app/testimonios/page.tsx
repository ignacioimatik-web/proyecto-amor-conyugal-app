import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Testimonios",
  description:
    "Testimonios reales de parejas que han transformado su matrimonio con la gracia de Dios. Descubre lo que Cristo ha hecho en sus vidas.",
};

const testimonials = [
  {
    title: "Hagan Lío",
    description:
      "«Hagan Lío #2» — La receta para vivir el AMOR VERDADERO en tu matrimonio.",
    videoId: "0Mio4WxlUC4",
  },
  {
    title: "Presentación Taller Proyecto Amor Conyugal",
    description:
      "Una presentación completa del taller del Proyecto Amor Conyugal. Conoce el método que está transformando matrimonios.",
    videoId: "om3iZDYbFA8",
  },
  {
    title: "Testimonio María & Álvaro",
    description:
      "María y Álvaro comparten cómo el Proyecto Amor Conyugal transformó su relación.",
    videoId: "GY0egGQXG2s",
  },
  {
    title: "Testimonio Ana & Carlos",
    description:
      "Ana y Carlos nos cuentan su experiencia de renovación matrimonial.",
    videoId: "kxar0DAxNQE",
  },
  {
    title: "Testimonio Águeda & Alejandro",
    description:
      "Águeda y Alejandro testifican el poder de la gracia del sacramento del matrimonio.",
    videoId: "bNXbsFmOcPw",
  },
  {
    title: "Testimonio Nunchy & Arturo",
    description:
      "Nunchy y Arturo comparten su camino de conversión y amor renovado.",
    videoId: "YA3_yhK7ccM",
  },
  {
    title: "Testimonio Blanca & Néstor",
    description:
      "Blanca y Néstor nos cuentan cómo Dios restauró su matrimonio.",
    videoId: "fK7ZRHbGUvM",
  },
  {
    title: "Testimonio Mª Oliva y Miguel (Novios)",
    description:
      "Mª Oliva y Miguel, en su etapa de noviazgo, descubren la vocación matrimonial.",
    videoId: "-f1x8dxZsSw",
  },
];

export default function TestimoniosPage() {
  return (
    <>
      <PageHero
        title="Testimonios"
        description="El testimonio ha sido el medio preferido para el Señor para dar a conocer su obra."
      />

      <section className="py-12 lg:py-16">
        <div className="container-narrow mx-auto px-4 lg:px-6">
          {/* Intro */}
          <div className="mb-10 rounded-xl bg-surface-alt p-6 sm:p-8">
            <p className="text-base leading-relaxed text-muted">
              Nosotros tenemos claro que no somos ejemplo de nada, que sólo somos testigos de lo
              que <strong className="text-foreground">CRISTO</strong> ha hecho en nuestro matrimonio,
              de la mano de nuestra Madre en nuestra vida. Son muchos los que después de haber
              conocido en profundidad su sacramento, están experimentando la{" "}
              <strong className="text-foreground">VERDAD</strong> del amor en su matrimonio y en su
              familia. Cambiando la lógica del mundo, por la lógica de Dios. Viviendo el matrimonio
              como <strong className="text-foreground">DIOS LO PENSÓ</strong>.
            </p>
          </div>

          {/* Videos Grid */}
          <div className="grid gap-8 sm:grid-cols-2">
            {testimonials.map((t) => (
              <article
                key={t.title}
                className="rounded-xl border border-border bg-surface p-4 transition-all hover:shadow-sm sm:p-6"
              >
                <div className="aspect-video overflow-hidden rounded-lg">
                  <iframe
                    src={`https://www.youtube.com/embed/${t.videoId}`}
                    title={t.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{t.title}</h3>
                <p className="mt-2 text-sm text-muted">{t.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
