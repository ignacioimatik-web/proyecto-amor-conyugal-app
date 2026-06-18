import type { Metadata } from "next";
import ConjugalPath from "@/components/experience/conjugal-path";

export const metadata: Metadata = {
  title: "Camino Conyugal",
  description:
    "Recorre las etapas del amor conyugal: desde el encuentro hasta la misión. Una guía interactiva para crecer juntos en el matrimonio.",
};

export default function CaminoConyugalPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-light/20 to-background py-16 lg:py-20">
        <div className="container-narrow mx-auto px-4 text-center lg:px-6">
          <h1 className="text-3xl font-bold text-foreground lg:text-4xl">
            Camino Conyugal
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted">
            El matrimonio es un camino que se recorre juntos, etapa por etapa, bajo la mirada amorosa de Dios. Explora, reflexiona y ora en cada estación de este viaje.
          </p>
        </div>
      </section>

      <ConjugalPath />
    </>
  );
}
