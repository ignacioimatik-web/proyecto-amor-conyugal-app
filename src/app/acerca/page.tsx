import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Acerca de",
  description: "Conoce Ama a Dios: nuestra historia, misión y el equipo detrás de este proyecto de acompañamiento matrimonial.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Acerca de Ama a Dios"
        description="Nuestra historia, nuestra misión, nuestro camino."
      />

      <section className="py-12 lg:py-16">
        <div className="container-narrow mx-auto px-4 lg:px-6">
          <div className="space-y-6 text-base leading-relaxed text-muted">
            <div className="rounded-xl bg-surface-alt p-6 sm:p-8">
              <h2 className="text-xl font-bold text-foreground">Nuestra Historia</h2>
              <p className="mt-3">
                Ama a Dios nace del corazón del <strong>Proyecto Amor Conyugal</strong>, un
                ministerio católico fundado en 2002 por José Luis y Magüi que acompaña a
                matrimonios en su vocación. Inspirados por más de dos décadas de experiencia
                acompañando a parejas en España y el mundo, creamos esta plataforma digital
                para llevar ese acompañamiento a cada hogar.
              </p>
            </div>

            <div className="rounded-xl bg-surface-alt p-6 sm:p-8">
              <h2 className="text-xl font-bold text-foreground">Nuestra Misión</h2>
              <p className="mt-3">
                Acompañar a las parejas en su vocación matrimonial proporcionando herramientas
                digitales accesibles, bellas y espiritualmente ricas que fomenten la oración
                diaria, la formación continua, la conexión comunitaria y el impulso misionero
                —todo ello arraigado en la fe católica.
              </p>
            </div>

            <div className="rounded-xl bg-surface-alt p-6 sm:p-8">
              <h2 className="text-xl font-bold text-foreground">Qué Ofrecemos</h2>
              <ul className="mt-3 list-inside space-y-2">
                <li>📖 Evangelio diario con meditación para parejas</li>
                <li>🗓️ Calendario de retiros y convivencias</li>
                <li>📚 Recursos de formación continua</li>
                <li>💬 Testimonios de parejas reales</li>
                <li>🌍 Mapa de misiones en el mundo</li>
                <li>🙏 Itinerario espiritual para matrimonios</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
