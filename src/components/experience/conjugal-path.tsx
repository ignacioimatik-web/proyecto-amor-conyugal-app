"use client";

import { useState } from "react";

const stages = [
  {
    id: "encuentro",
    number: 1,
    title: "Encuentro",
    subtitle: "Dios prepara los caminos",
    icon: "🌟",
    color: "border-l-primary",
    duration: "Variable",
    description:
      "El momento en que Dios cruza los caminos de dos personas llamadas a amarse. No es casualidad: es providencia. En el encuentro, el Señor siembra la semilla de una vocación al amor.",
    reflection:
      "¿Reconoces la mano de Dios en la historia de cómo se conocieron? ¿Qué señales de su amor viste al principio?",
    prayer:
      "Señor, te damos gracias por el día en que nuestros caminos se cruzaron. Bendice ese primer encuentro y todo lo que ha crecido desde entonces.",
    exercise: "Escriban juntos cómo se conocieron y anoten tres señales de la presencia de Dios en ese encuentro.",
    image: "🌅",
  },
  {
    id: "noviazgo",
    number: 2,
    title: "Noviazgo",
    subtitle: "Tiempo de discernimiento",
    icon: "💑",
    color: "border-l-accent",
    duration: "1-3 años",
    description:
      "El tiempo del noviazgo es una escuela de amor donde dos personas aprenden a conocer, respetar y complementarse. Es un período de gracia para discernir la vocación al matrimonio y prepararse para recibir el sacramento.",
    reflection:
      "¿Cómo crecieron juntos durante el noviazgo? ¿Qué momentos de oración compartida vivieron? ¿Hubo señales de que Dios los llamaba al matrimonio?",
    prayer:
      "Señor, bendice el tiempo del noviazgo, cuando todo era descubrimiento. Ayúdanos a mantener viva esa ilusión de los primeros tiempos.",
    exercise: "Recuerden un momento especial del noviazgo y compartan qué aprendieron el uno del otro en esa etapa.",
    image: "💕",
  },
  {
    id: "matrimonio",
    number: 3,
    title: "Sacramento",
    subtitle: "El sí para siempre",
    icon: "💒",
    color: "border-l-primary",
    duration: "Un día... para siempre",
    description:
      "El matrimonio no es solo una ceremonia: es un sacramento, una alianza sagrada que refleja el amor de Cristo por su Iglesia. En ese 'sí' pronunciado ante Dios, dos personas reciben la gracia de amarse como Cristo ama: hasta el extremo.",
    reflection:
      "¿Qué significó para ustedes el día de su boda? ¿Han renovado ese 'sí' en los momentos difíciles? ¿Cómo alimentan la gracia del sacramento?",
    prayer:
      "Señor, gracias por el don del sacramento del matrimonio. Renueva hoy nuestro 'sí', y concédenos la gracia de ser testimonio vivo de tu amor fiel.",
    exercise: "Busquen una foto de su boda. Mírenla juntos y renueven sus promesas en voz alta, esta vez solo ante Dios.",
    image: "💍",
  },
  {
    id: "primeros-anos",
    number: 4,
    title: "Primeros Años",
    subtitle: "Construir el hogar",
    icon: "🏠",
    color: "border-l-accent",
    duration: "1-7 años",
    description:
      "Los primeros años del matrimonio son el tiempo de aprender a vivir juntos: las rutinas, las pequeñas decisiones, los primeros desafíos. Es cuando el amor romántico se transforma en amor cotidiano, más real, más hondo.",
    reflection:
      "¿Cuáles fueron los mayores desafíos de los primeros años? ¿Qué aprendizajes les dejó esa etapa? ¿Cómo construyeron su rutina de oración como pareja?",
    prayer:
      "Señor, bendice nuestro hogar. Que en lo cotidiano sepamos encontrar tu presencia, y que las pequeñas cosas nos unan más profundamente.",
    exercise: "Recuerden una dificultad de los primeros años y agradézcanse mutuamente cómo la superaron juntos.",
    image: "🏡",
  },
  {
    id: "crisis",
    number: 5,
    title: "Crisis y Purificación",
    subtitle: "El desierto fecundo",
    icon: "🕯️",
    color: "border-l-terracotta",
    duration: "Varía",
    description:
      "Todo matrimonio atraviesa momentos de crisis: discusiones, incomprensiones, monotonía, cansancio. Pero la crisis no es el final: es un paso del desierto que purifica el amor. Dios nunca abandona en el desierto.",
    reflection:
      "¿Han atravesado alguna crisis? ¿Qué los ayudó a salir adelante? ¿Descubrieron a Dios de una manera nueva en medio de la dificultad?",
    prayer:
      "Señor, cuando el desierto se haga largo, recuérdanos que caminas con nosotros. Danos humildad para pedir ayuda y fortaleza para no rendirnos.",
    exercise: "Hablen de una crisis que hayan superado. Identifiquen qué virtud nació de esa dificultad en cada uno.",
    image: "🌵",
  },
  {
    id: "renovacion",
    number: 6,
    title: "Renovación",
    subtitle: "Un amor más maduro",
    icon: "🌿",
    color: "border-l-primary",
    duration: "Momento de gracia",
    description:
      "Después de la purificación llega un amor más auténtico, más desprendido, más parecido al de Cristo. La renovación no es volver al principio: es llegar a un lugar nuevo donde el amor es más consciente, más agradecido, más entregado.",
    reflection:
      "¿En qué aspectos sienten que su amor ha madurado? ¿Qué frutos han visto en su matrimonio después de tiempos difíciles?",
    prayer:
      "Gracias, Señor, porque tu amor renueva todas las cosas. Sana las heridas pasadas y haz de nuestro matrimonio una fuente de vida nueva.",
    exercise: "Escriban una carta breve agradeciendo a su cónyuge por las cosas que más valoran hoy de él o ella.",
    image: "🌸",
  },
  {
    id: "mision",
    number: 7,
    title: "Misión",
    subtitle: "Amar para dar fruto",
    icon: "🔥",
    color: "border-l-accent",
    duration: "Toda la vida",
    description:
      "El matrimonio cristiano no termina en la puerta de la iglesia: es el comienzo de una misión. Están llamados a ser luz, a testimoniar el amor de Dios, a servir a otros matrimonios y a construir una civilización del amor.",
    reflection:
      "¿Cómo están viviendo su misión como matrimonio? ¿Qué frutos quieren dar? ¿A qué matrimonios pueden acompañar o servir?",
    prayer:
      "Señor, haz de nuestro matrimonio un faro de esperanza. Que otros vean tu amor en nosotros y quieran conocerte. Úsanos para tu gloria y la salvación de las familias.",
    exercise: "Identifiquen un matrimonio al que puedan acompañar, o un servicio que puedan ofrecer juntos como pareja.",
    image: "🔥",
  },
];

export default function ConjugalPath() {
  const [activeStage, setActiveStage] = useState<string | null>(null);
  const [completedStages, setCompletedStages] = useState<Set<string>>(new Set());

  const toggleStage = (id: string) => {
    setActiveStage((prev) => (prev === id ? null : id));
  };

  const markComplete = (id: string) => {
    setCompletedStages((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const progress = Math.round((completedStages.size / stages.length) * 100);

  return (
    <section className="py-12 lg:py-16">
      <div className="container-narrow mx-auto px-4 lg:px-6">
        {/* Progress Header */}
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-light text-3xl">
            🗺️
          </div>
          <h2 className="text-2xl font-bold text-foreground lg:text-3xl">
            Camino Conyugal
          </h2>
          <p className="mt-2 text-muted">
            Recorre las etapas del amor conyugal. Cada etapa te invita a reflexionar, orar y crecer juntos.
          </p>

          {/* Progress Bar */}
          <div className="mx-auto mt-6 max-w-md">
            <div className="flex items-center justify-between text-xs text-muted">
              <span>{completedStages.size} de {stages.length} etapas</span>
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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[1.125rem] top-0 h-full w-0.5 bg-border-light md:left-1/2 md:-translate-x-px" />

          {stages.map((stage, idx) => {
            const isActive = activeStage === stage.id;
            const isEven = idx % 2 === 0;

            return (
              <div key={stage.id} className="relative mb-8 last:mb-0">
                {/* Timeline node */}
                <button
                  type="button"
                  onClick={() => toggleStage(stage.id)}
                  className={`absolute left-0 z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 text-base transition-all duration-300 md:left-1/2 md:-translate-x-1/2 ${
                    completedStages.has(stage.id)
                      ? "border-primary bg-primary text-white shadow-md"
                      : isActive
                        ? "border-primary bg-primary-light text-primary-dark shadow-sm"
                        : "border-border bg-surface text-muted hover:border-primary-light"
                  }`}
                  aria-label={`${completedStages.has(stage.id) ? "✓ " : ""}${stage.title}`}
                >
                  {completedStages.has(stage.id) ? "✓" : stage.number}
                </button>

                {/* Content card — alternating left/right on desktop */}
                <div
                  className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isEven ? "md:pr-8 md:text-right" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div
                    className={`cursor-pointer rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:shadow-md ${
                      isActive ? "shadow-lg ring-1 ring-primary-light" : ""
                    }`}
                    onClick={() => toggleStage(stage.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") toggleStage(stage.id);
                    }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3">
                      <div className={isEven ? "md:order-2" : ""}>
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{stage.icon}</span>
                          <h3 className="text-lg font-semibold text-foreground">
                            {stage.title}
                          </h3>
                        </div>
                        <p className="mt-0.5 text-sm italic text-muted-light">
                          {stage.subtitle}
                        </p>
                      </div>
                      <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium text-muted bg-surface-alt ${isEven ? "md:order-1" : ""}`}>
                        {stage.duration}
                      </span>
                    </div>

                    {/* Expandable content */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isActive ? "mt-4 max-h-[50rem] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <hr className="mb-4 border-border" />

                      <div className={`space-y-4 ${isEven ? "md:text-left" : ""}`}>
                        <p className="text-sm leading-relaxed text-muted">
                          {stage.description}
                        </p>

                        {/* Reflection */}
                        <div className="rounded-lg bg-surface-alt p-4">
                          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                            💭 Reflexión
                          </p>
                          <p className="mt-1 text-sm italic text-muted">
                            {stage.reflection}
                          </p>
                        </div>

                        {/* Prayer */}
                        <div className="rounded-lg bg-primary-light/30 p-4">
                          <p className="text-xs font-semibold uppercase tracking-wider text-primary-dark">
                            🙏 Oración
                          </p>
                          <p className="mt-1 text-sm italic text-muted">
                            {stage.prayer}
                          </p>
                        </div>

                        {/* Exercise */}
                        <div className="rounded-lg border border-accent-light bg-accent-light/20 p-4">
                          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                            ✍️ Ejercicio para la Pareja
                          </p>
                          <p className="mt-1 text-sm text-muted">
                            {stage.exercise}
                          </p>
                        </div>

                        {/* Mark complete */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            markComplete(stage.id);
                          }}
                          className={`w-full rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                            completedStages.has(stage.id)
                              ? "border-primary bg-primary text-white hover:bg-primary-dark"
                              : "border-border text-muted hover:border-primary hover:text-primary"
                          }`}
                        >
                          {completedStages.has(stage.id)
                            ? "✓ Completado"
                            : "Marcar como completado"}
                        </button>
                      </div>
                    </div>

                    {/* Collapsed hint */}
                    {!isActive && (
                      <p className="mt-2 text-xs text-muted-light">
                        Haz clic para explorar esta etapa
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Completion Celebration */}
        {completedStages.size === stages.length && (
          <div className="mt-12 animate-fade-in rounded-xl border border-primary-light bg-primary-light/20 p-8 text-center">
            <span className="text-4xl">🎉</span>
            <h3 className="mt-3 text-xl font-bold text-foreground">
              ¡Han completado el Camino Conyugal!
            </h3>
            <p className="mt-2 text-muted">
              Han recorrido todas las etapas del amor conyugal. Que este camino siga creciendo cada día bajo la mirada amorosa de Dios.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
