import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Aviso legal, política de privacidad y política de cookies de Ama a Dios.",
};

export default function LegalPage() {
  return (
    <>
      <PageHero
        title="Aviso Legal"
        description="Términos legales, privacidad y cookies."
      />

      <section className="py-12 lg:py-16">
        <div className="container-narrow mx-auto space-y-10 px-4 lg:px-6">
          <div>
            <h2 className="text-xl font-bold text-foreground" id="aviso-legal">Aviso Legal</h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <p>
                <strong>Ama a Dios</strong> es un proyecto digital del Proyecto Amor Conyugal,
                asociación canónica con domicilio en Madrid, España.
              </p>
              <p>
                El acceso y uso del sitio web atribuye la condición de usuario e implica la
                aceptación plena de las condiciones aquí recogidas.
              </p>
              <p>
                Los contenidos de este sitio web tienen fines meramente informativos y
                formativos, sin que en ningún caso deriven efectos jurídicos vinculantes.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground" id="privacidad">Política de Privacidad</h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <p>
                En Ama a Dios nos tomamos muy en serio tu privacidad. No recopilamos datos
                personales sin tu consentimiento explícito.
              </p>
              <p>
                Los datos que puedas proporcionar a través del formulario de contacto se
                utilizarán únicamente para responder a tu consulta y no serán cedidos a
                terceros.
              </p>
              <p>
                Este sitio web no requiere registro ni cuenta de usuario para su navegación.
                Puedes acceder a todos los contenidos de forma anónima.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground" id="cookies">Política de Cookies</h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <p>
                Este sitio web utiliza únicamente cookies técnicas necesarias para el
                funcionamiento de la plataforma. No utilizamos cookies de rastreo,
                publicitarias ni de terceros.
              </p>
              <p>
                Al navegar por el sitio, aceptas el uso de estas cookies técnicas. Puedes
                configurar tu navegador para rechazar todas las cookies, aunque algunas
                funcionalidades podrían verse afectadas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
