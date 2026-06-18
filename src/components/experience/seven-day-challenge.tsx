"use client";

import { useState } from "react";

interface DayChallenge {
  day: number;
  title: string;
  icon: string;
  action: string;
  description: string;
  verse: string;
  prayer: string;
}

const challenges: DayChallenge[] = [
  {
    day: 1,
    title: "El Lenguaje del Amor",
    icon: "💬",
    action: "Expresa tres cualidades que admiras de tu cónyuge",
    description:
      "Hoy dedicarán tiempo a reconocerse mutuamente. Las palabras tienen poder: pueden construir o destruir. Elijan palabras que edifiquen, que reconozcan lo bueno que ven el uno en el otro. No se trata de halagar, sino de ver con ojos de gratitud.",
    verse: "«La muerte y la vida están en poder de la lengua» (Proverbios 18, 21)",
    prayer:
      "Señor, pon en nuestros labios palabras que sanen, que eleven, que bendigan. Que hoy nuestras palabras sean un reflejo de tu amor.",
  },
  {
    day: 2,
    title: "El Silencio que Escucha",
    icon: "👂",
    action: "Siéntense 10 minutos a escucharse sin interrumpir",
    description:
      "En un mundo ruidoso, escuchar es un acto de amor. Hoy se regalarán 10 minutos de atención plena: uno habla, el otro solo escucha sin interrumpir, sin juzgar, sin preparar la respuesta. Después intercambian. Este ejercicio revela cuánto necesitamos ser escuchados.",
    verse: "«El que responde antes de escuchar, cosecha su propia vergüenza» (Proverbios 18, 13)",
    prayer:
      "Señor, danos un corazón que sepa escuchar. Que aprendamos a callar nuestros pensamientos para acoger los del otro.",
  },
  {
    day: 3,
    title: "La Caricia Cotidiana",
    icon: "🤲",
    action: "Ofrece un gesto físico de cariño sin motivo",
    description:
      "El contacto físico es un lenguaje sagrado en el matrimonio. Hoy se regalarán caricias sin motivo: una mano en el hombro, un abrazo sorpresa, un beso al pasar. El cuerpo también ora, también ama, también perdona. Que el afecto no sea solo para momentos especiales.",
    verse: "«Por eso el hombre dejará a su padre y a su madre y se unirá a su mujer, y serán una sola carne» (Génesis 2, 24)",
    prayer:
      "Señor, bendice nuestro lenguaje corporal. Que nuestras manos, nuestros abrazos, nuestras caricias sean sacramentos de tu amor.",
  },
  {
    day: 4,
    title: "Memoria Agradecida",
    icon: "📖",
    action: "Escriban una carta de agradecimiento mutuo",
    description:
      "La gratitud es la memoria del corazón. Hoy escribirán una carta breve agradeciendo lo que han recibido el uno del otro: gestos, palabras, sacrificios, paciencia. No hace falta que sea larga, pero sí sincera. Lean las cartas juntos al final del día.",
    verse: "«Den gracias en toda situación» (1 Tesalonicenses 5, 18)",
    prayer:
      "Gracias, Señor, por cada gesto de amor que hemos recibido. Abre nuestros ojos para ver tu mano en el amor cotidiano.",
  },
  {
    day: 5,
    title: "Perdón y Reconciliación",
    icon: "🕊️",
    action: "Pide perdón por algo sin esperar a que te lo pidan",
    description:
      "El perdón es el oxígeno del matrimonio. No esperes a que tu cónyuge dé el primer paso. Acércate hoy y pide perdón por algo específico, aunque te parezca pequeño. La humildad de pedir perdón abre las compuertas de la gracia. Y si no hay nada pendiente, perdona en tu corazón alguna herida pasada.",
    verse: "«Soportándoos unos a otros y perdonándoos mutuamente si alguno tiene queja contra otro» (Colosenses 3, 13)",
    prayer:
      "Señor, danos la gracia de pedir perdón y de perdonar. Que no pase un día sin reconciliarnos, para que no se ponga el sol sobre nuestro enfado.",
  },
  {
    day: 6,
    title: "Oración a Dos Voces",
    icon: "🙏",
    action: "Recen juntos en voz alta durante 5 minutos",
    description:
      "Rezar juntos en voz alta puede ser incómodo al principio, pero es una de las experiencias más íntimas del matrimonio cristiano. Hoy se tomarán de las manos y cada uno dirá una oración espontánea: agradecimiento, petición, intercesión. No importa si las palabras no son perfectas; Dios escucha el corazón.",
    verse: "«Donde dos o tres están reunidos en mi nombre, allí estoy yo en medio de ellos» (Mateo 18, 20)",
    prayer:
      "Señor Jesús, prometiste estar donde dos se reúnen en tu nombre. Hoy estamos aquí, en tu presencia. Háblanos, escúchanos, bendícenos.",
  },
  {
    day: 7,
    title: "Mirar Juntos al Futuro",
    icon: "🌟",
    action: "Compartan un sueño o meta que quieran alcanzar juntos",
    description:
      "El amor no solo mira al pasado con gratitud, sino al futuro con esperanza. Hoy compartirán un sueño: un proyecto de servicio, una meta espiritual, un deseo para su familia. Escríbanlo y pónganlo ante Dios. Un matrimonio con visión es un matrimonio que camina con dirección y propósito.",
    verse: "«Porque yo sé muy bien los planes que tengo para ustedes, planes de bienestar y no de calamidad, para darles un futuro y una esperanza» (Jeremías 29, 11)",
    prayer:
      "Señor, camina con nosotros hacia el futuro. Ilumina nuestros sueños y hazlos instrumentos de tu amor. Que nuestra historia sea una alabanza a tu fidelidad.",
  },
];

export default function SevenDayChallenge() {
  const [completedDays, setCompletedDays] = useState<Set<number>>(new Set());
  const [activeDay, setActiveDay] = useState<number | null>(null);
  const [started, setStarted] = useState(false);

  const toggleDay = (day: number) => {
    setActiveDay((prev) => (prev === day ? null : day));
  };

  const markDayComplete = (day: number) => {
    setCompletedDays((prev) => {
      const next = new Set(prev);
      if (next.has(day)) next.delete(day);
      else next.add(day);
      return next;
    });
  };

  const progress = Math.round((completedDays.size / 7) * 100);
  const allDone = completedDays.size === 7;

  if (!started) {
    return (
      <section className="py-12 lg:py-16">
        <div className="container-narrow mx-auto px-4 text-center lg:px-6">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary-light text-4xl">
            🔥
          </div>
          <h2 className="text-2xl font-bold text-foreground lg:text-3xl">
            Reto de 7 Días
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-muted">
            Una semana para fortalecer tu matrimonio. Cada día, una acción concreta, una reflexión y una oración. ¿Aceptas el desafío?
          </p>

          <div className="mx-auto mt-8 grid max-w-sm gap-4 text-left">
            {challenges.slice(0, 3).map((c) => (
              <div key={c.day} className="flex items-center gap-3 rounded-lg border border-border bg-surface p-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-light text-lg">
                  {c.icon}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Día {c.day}: {c.title}</p>
                  <p className="text-xs text-muted">{c.action}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setStarted(true)}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl active:scale-95"
          >
            🔥 ¡Comenzar el Reto!
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 lg:py-16">
      <div className="container-narrow mx-auto px-4 lg:px-6">
        {/* Progress */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-foreground">
            Reto de 7 Días
          </h2>
          <div className="mx-auto mt-4 max-w-sm">
            <div className="flex items-center justify-between text-xs text-muted">
              <span>Día {completedDays.size + 1}/7</span>
              <span>{progress}%</span>
            </div>
            <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-surface-alt">
              <div
                className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Day cards */}
        <div className="space-y-4">
          {challenges.map((c) => {
            const isActive = activeDay === c.day;
            const isDone = completedDays.has(c.day);

            return (
              <div
                key={c.day}
                className={`rounded-xl border bg-surface transition-all duration-300 ${
                  isActive
                    ? "border-primary shadow-lg"
                    : isDone
                      ? "border-success/30 bg-success/5"
                      : "border-border hover:border-primary-light"
                }`}
              >
                {/* Day header */}
                <button
                  type="button"
                  onClick={() => toggleDay(c.day)}
                  className="flex w-full items-center gap-4 p-5 text-left"
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl transition-all ${
                      isDone
                        ? "bg-success text-white"
                        : "bg-primary-light text-primary-dark"
                    }`}
                  >
                    {isDone ? "✓" : c.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className={`text-base font-semibold ${isDone ? "text-success line-through" : "text-foreground"}`}>
                        Día {c.day}: {c.title}
                      </h3>
                    </div>
                    <p className="mt-0.5 text-sm text-muted">{c.action}</p>
                  </div>
                  <svg
                    className={`h-5 w-5 shrink-0 text-muted-light transition-transform ${
                      isActive ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Expanded content */}
                {isActive && (
                  <div className="border-t border-border px-5 pb-5 pt-4 animate-fade-in">
                    <div className="space-y-4">
                      <p className="text-sm leading-relaxed text-muted">
                        {c.description}
                      </p>

                      {/* Verse */}
                      <div className="rounded-lg bg-surface-alt p-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-info">
                          📖 Palabra de Dios
                        </p>
                        <p className="mt-1 text-sm italic text-muted">{c.verse}</p>
                      </div>

                      {/* Prayer */}
                      <div className="rounded-lg bg-primary-light/30 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary-dark">
                          🙏 Oración del Día
                        </p>
                        <p className="mt-1 text-sm italic text-muted">{c.prayer}</p>
                      </div>

                      {/* Complete button */}
                      <button
                        type="button"
                        onClick={() => markDayComplete(c.day)}
                        className={`w-full rounded-lg border px-4 py-2.5 text-sm font-medium transition-all ${
                          isDone
                            ? "border-success bg-success text-white"
                            : "border-border text-muted hover:border-primary hover:text-primary"
                        }`}
                      >
                        {isDone ? "✓ Día completado" : "Marcar día como completado"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Completion celebration */}
        {allDone && (
          <div className="mt-10 animate-fade-in rounded-xl border border-primary-light bg-primary-light/20 p-8 text-center">
            <span className="text-4xl">🎉</span>
            <h3 className="mt-3 text-xl font-bold text-foreground">
              ¡Felicidades! ¡Completaron los 7 Días!
            </h3>
            <p className="mt-2 text-muted">
              Han fortalecido su matrimonio día a día. Que este hábito de amor, oración y atención mutua siga creciendo siempre.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
