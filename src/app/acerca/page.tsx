import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Acerca de",
  description:
    "Conoce el Proyecto Amor Conyugal: nuestra historia, misión, los tres pilares y el equipo de esposos misioneros que acompañan matrimonios en todo el mundo.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Acerca de Proyecto Amor Conyugal"
        description="Un proyecto misionero de María para el Matrimonio y la Familia."
      />

      {/* Qué somos */}
      <section className="py-12 lg:py-16">
        <div className="container-narrow mx-auto px-4 lg:px-6">
          <div className="space-y-8 text-base leading-relaxed text-muted">
            <div className="rounded-xl bg-surface-alt p-6 sm:p-8">
              <p>
                Somos matrimonios católicos que profundizamos en nuestra vocación conyugal como
                camino de santidad y que, movidos por la compasión de Cristo por el sufrimiento
                de muchos matrimonios y familias —sufrimiento que nosotros hemos padecido
                primero—, ponemos nuestros dones al servicio de María para hacerles llegar Su
                mano misericordiosa. Descubrimos que en la mayoría de los casos son{" "}
                <em>«como ovejas sin pastor»</em> (Mc 6, 34) y necesitan orientación y
                acompañamiento para convertir su matrimonio en algo grande.
              </p>
            </div>

            {/* Video: ¿Qué es Proyecto Amor Conyugal? */}
            <div>
              <h2 className="mb-4 text-center text-lg font-bold text-foreground gold-line-center">
                CONOCE MÁS EN 15 MINUTOS
              </h2>
              <div className="aspect-video overflow-hidden rounded-xl">
                <iframe
                  src="https://www.youtube.com/embed/sa2ESLQ1Xj8"
                  title="¿Qué es Proyecto Amor Conyugal?"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>

            {/* Historia */}
            <div className="rounded-xl bg-surface-alt p-6 sm:p-8">
              <h2 className="text-xl font-bold text-foreground gold-line">Nuestra Historia</h2>
              <p className="mt-3">
                <strong>Proyecto Amor Conyugal comenzó en 2002</strong> cuando, en una oración en
                Fátima, <strong>la Virgen se lo encomendó a un matrimonio de Málaga: José Luis y Magüi</strong>.
                Tras comenzar unos cuantos pequeños grupos de catequesis, en 2016 se iniciaron los
                retiros y desde entonces se está extendiendo a gran velocidad por toda España y
                parte del mundo.
              </p>
              <p className="mt-3">
                Es un método diocesano para el matrimonio y la familia cuyo fundamento principal
                es conocer en profundidad la grandeza de nuestro sacramento, a través de las
                catequesis de San Juan Pablo II, llevándolas a la experiencia de la vida.
              </p>
              <p className="mt-3">
                Proyecto Amor Conyugal se ha hecho diocesano en Málaga y se está extendiendo por
                multitud de diócesis en España, parte de Europa y Sudamérica, con la supervisión
                de los párrocos respectivos, los delegados de pastoral familiar y los obispos de
                cada diócesis.
              </p>
            </div>

            {/* Video: testimonio Magüi y José Luis */}
            <div>
              <h2 className="mb-4 text-center text-lg font-bold text-foreground gold-line-center">
                TESTIMONIO MAGÜI Y JOSÉ LUIS
              </h2>
              <div className="aspect-video overflow-hidden rounded-xl">
                <iframe
                  src="https://www.youtube.com/embed/ZEHTWZY0hyM"
                  title="Asalto al Cielo: testimonio de conversión de un matrimonio en crisis"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Los Tres Pilares */}
      <section className="border-t border-border bg-surface-alt py-12 lg:py-16">
        <div className="container-narrow mx-auto px-4 lg:px-6">
          <h2 className="text-center text-2xl font-bold text-foreground gold-line-center">
            «LOS TRES PILARES»<br />
            <span className="text-base font-normal text-muted">DE PROYECTO AMOR CONYUGAL</span>
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {pilares.map((p, i) => (
              <div
                key={p.titulo}
                className="rounded-xl border border-border bg-surface p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-light text-xl font-bold text-primary-dark">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-foreground">{p.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frutos que pedimos a Dios */}
      <section className="py-12 lg:py-16">
        <div className="container-narrow mx-auto px-4 lg:px-6">
          <h2 className="text-xl font-bold text-foreground gold-line">
            Frutos que pedimos a Dios
          </h2>
          <div className="mt-6 space-y-6 text-base leading-relaxed text-muted">
            <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-semibold text-foreground">Acercamiento a Dios</h3>
              <p className="mt-2">
                Haciendo su voluntad con Cristo y a imitación de Cristo, lo que conlleva un
                crecimiento espiritual y perfecciona nuestra comunión.
              </p>
              <blockquote className="mt-3 border-l-4 border-primary-light pl-4 text-sm italic text-muted">
                «El sacramento del Matrimonio significa la unión de Cristo con la Iglesia. Da a los
                esposos la gracia de amarse con el amor con que Cristo amó a su Iglesia; la gracia
                del sacramento perfecciona así el amor humano de los esposos, reafirma su unidad
                indisoluble y los santifica en el camino de la vida eterna.»
                <footer className="mt-1 text-xs not-italic text-muted-light">— Catecismo de la Iglesia Católica, 1661</footer>
              </blockquote>
            </div>

            <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-semibold text-foreground">Sanación de las heridas</h3>
              <p className="mt-2">
                El Señor quiere sanar las heridas de nuestro corazón para que podamos amar
                libremente. Muchos matrimonios llevan heridas de su infancia, de relaciones
                pasadas o de la misma vida en pareja. Cristo quiere restaurar todo eso.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-semibold text-foreground">Unidad y fecundidad</h3>
              <p className="mt-2">
                Que cada matrimonio sea un testimonio vivo del amor de Dios, una «iglesia
                doméstica» que irradie fecundidad espiritual y humana, siendo luz para sus
                hijos y para el mundo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formación */}
      <section className="border-t border-border bg-surface-alt py-12 lg:py-16">
        <div className="container-narrow mx-auto px-4 text-center lg:px-6">
          <p className="text-sm text-muted">
            Para reforzar nuestra formación, algunos hemos realizado el máster en Pastoral Familiar
            del Instituto Juan Pablo II. También algunos trabajamos en la Pastoral Familiar de
            nuestra diócesis.
          </p>
        </div>
      </section>
    </>
  );
}

const pilares = [
  {
    titulo: "Formación",
    descripcion:
      "«Comprender» el matrimonio: aprender de la revelación. Más de 2000 años de revelación sobre el matrimonio, de Dios a través de su Espíritu, recogidos en el Magisterio de la Iglesia. No es una ideología, es un compendio de la Verdad.",
  },
  {
    titulo: "Oración",
    descripcion:
      "«Con la ayuda de Cristo»: amarnos con el Amor de Cristo. Cuanto más entre Él en nosotros, más actuará Su amor y no el nuestro. Oración en común y Sacramentos como fuente de gracia.",
  },
  {
    titulo: "Amor (Vida)",
    descripcion:
      "«Vivir» el sacramento: prácticas cotidianas de entrega para alimentar nuestro Sacramento Matrimonial. No se puede amar si no hay un compromiso, si no hay esfuerzo y si no hay sufrimiento.",
  },
];
