"use client";

import { useState, useRef, useCallback } from "react";

interface BeforeAfterStory {
  id: string;
  couple: string;
  yearsMarried: number;
  before: string;
  after: string;
  beforeLabel: string;
  afterLabel: string;
  category: string;
  imageLeft: string; // emoji placeholder for visual
  imageRight: string;
}

const stories: BeforeAfterStory[] = [
  {
    id: "ba-001",
    couple: "Ana y Pedro",
    yearsMarried: 12,
    before: "Discutíamos por todo. El trabajo, los hijos, el dinero. Éramos dos desconocidos durmiendo en la misma cama. Llegué a pensar que el matrimonio era solo una carga que soportar. Habíamos perdido la capacidad de mirarnos a los ojos sin juicio.",
    after: "Dios nos encontró en el silencio de un retiro. Aprendimos a escucharnos, a pedir perdón, a rezar juntos. Hoy nuestro matrimonio es el lugar más seguro del mundo. No ha desaparecido el conflicto, pero ahora sabemos que el amor de Cristo sostiene nuestra fragilidad.",
    beforeLabel: "Antes: Silencio y distancia",
    afterLabel: "Después: Encuentro y renovación",
    category: "renovacion",
    imageLeft: "🌧️",
    imageRight: "🌈",
  },
  {
    id: "ba-002",
    couple: "María y José",
    yearsMarried: 25,
    before: "Después de 20 años, la rutina nos había ganado. Vivíamos en paralelo: cada uno con su trabajo, sus preocupaciones, su mundo. La chispa se había apagado tanto que ni siquiera peleábamos. Éramos como compañeros de piso, no esposos.",
    after: "El cuestionario de diagnóstico del PAC nos abrió los ojos. Empezamos con pequeños gestos: una nota en la almohada, un café preparado con amor, una caminata juntos los sábados. Descubrimos que el amor no había muerto, solo necesitaba ser regado de nuevo. Hoy celebramos 25 años con más amor que el primer día.",
    beforeLabel: "Antes: Rutina y distancia",
    afterLabel: "Después: Un amor reencontrado",
    category: "renovacion",
    imageLeft: "🍂",
    imageRight: "🌺",
  },
  {
    id: "ba-003",
    couple: "Laura y Carlos",
    yearsMarried: 6,
    before: "Una infidelidad sacudió nuestro matrimonio cuando apenas llevábamos 4 años casados. El dolor era insoportable. No podía mirarlo sin sentir nauseas. Pensé en separarme, en huir, en borrar esos años de mi vida. La confianza estaba hecha añicos.",
    after: "Fue el sacerdote quien nos recordó que la gracia del sacramento no se agota. Empezamos una terapia de pareja con acompañamiento espiritual. Carlos pidió perdón sinceramente y yo tuve que aprender a perdonar de verdad, no solo de palabra. Han pasado 2 años y puedo decir que nuestro amor es más auténtico que antes. Perdonar no es olvidar, es elegir amar a pesar de todo.",
    beforeLabel: "Antes: Dolor y ruptura",
    afterLabel: "Después: Perdón y sanación",
    category: "crisis",
    imageLeft: "💔",
    imageRight: "❤️‍🩹",
  },
  {
    id: "ba-004",
    couple: "Sofía y Miguel",
    yearsMarried: 18,
    before: "Cuando nos diagnosticaron infertilidad, sentí que Dios nos había dado la espalda. Veía a otras parejas con hijos y me preguntaba qué habíamos hecho mal. Nuestra vida sexual se volvió mecánica, obsesionada con la procreación. Dejamos de disfrutarnos.",
    after: "Un retiro del PAC nos ayudó a redescubrir que el matrimonio es vocación al amor, no solo a la procreación. Empezamos a servir como voluntarios acompañando a otras parejas en crisis. Nuestra casa se llenó de 'hijos espirituales'. Hoy entendemos que nuestra fecundidad es otra: hemos acompañado a más de 30 parejas a renovar su matrimonio.",
    beforeLabel: "Antes: Frustración y vacío",
    afterLabel: "Después: Fecundidad espiritual",
    category: "crisis",
    imageLeft: "😢",
    imageRight: "🌟",
  },
  {
    id: "ba-005",
    couple: "Carmen y Luis",
    yearsMarried: 30,
    before: "Siempre fuimos 'buenos católicos': misa dominical, familia numerosa, trabajo estable. Pero nuestro matrimonio era funcional, no apasionado. Rezábamos juntos de labios, pero nuestro corazón estaba lejos. Éramos correctos, pero no felices.",
    after: "El kerigma nos transformó. Entendimos que Dios no quiere un matrimonio correcto, quiere un matrimonio vivo. Empezamos un grupo de oración de parejas en casa. Hoy, a los 30 años, nuestra relación es más vibrante que nunca. Nos hemos lanzado a la misión y acompañamos a novios en preparación al matrimonio. La jubilación llegó pero nosotros estamos más activos que nunca en el amor.",
    beforeLabel: "Antes: Fe rutinaria, amor funcional",
    afterLabel: "Después: Kerigma vivo, misión compartida",
    category: "mision",
    imageLeft: "⛪",
    imageRight: "🔥",
  },
];

export default function BeforeAfterSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const story = stories[activeIndex]!;

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      setSliderPosition((x / rect.width) * 100);
    },
    [isDragging],
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.touches[0]!.clientX - rect.left, rect.width));
      setSliderPosition((x / rect.width) * 100);
    },
    [],
  );

  const goNext = () => setActiveIndex((prev) => (prev + 1) % stories.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + stories.length) % stories.length);

  return (
    <section className="py-12 lg:py-16">
      <div className="container-narrow mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-light text-3xl">
            🔄
          </div>
          <h2 className="text-2xl font-bold text-foreground lg:text-3xl">
            Antes y Después
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-muted">
            Historias reales de transformación. Matrimonios que atravesaron el desierto y encontraron la tierra prometida del amor renovado.
          </p>
        </div>

        {/* Story selector */}
        <div className="mb-6 flex justify-center gap-2">
          {stories.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                i === activeIndex
                  ? "bg-primary text-white"
                  : "border border-border text-muted hover:border-primary hover:text-primary"
              }`}
            >
              {s.couple}
            </button>
          ))}
        </div>

        {/* Before/After Slider */}
        <div
          ref={containerRef}
          className="relative mx-auto h-64 w-full max-w-2xl cursor-ew-resize overflow-hidden rounded-xl border border-border bg-surface shadow-sm sm:h-72"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* "After" side (right) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary-light/30 to-accent-light/20 p-6 text-center">
            <span className="text-5xl">{story.imageRight}</span>
            <p className="mt-3 text-sm font-semibold text-foreground">{story.afterLabel}</p>
            <p className="mt-2 max-w-sm text-xs leading-relaxed text-muted line-clamp-4">
              {story.after}
            </p>
          </div>

          {/* "Before" side (left) — clipped */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-accent-light/30 to-surface-alt p-6 text-center">
              <span className="text-5xl">{story.imageLeft}</span>
              <p className="mt-3 text-sm font-semibold text-foreground">{story.beforeLabel}</p>
              <p className="mt-2 max-w-sm text-xs leading-relaxed text-muted line-clamp-4">
                {story.before}
              </p>
            </div>
          </div>

          {/* Slider handle */}
          <div
            className="absolute top-0 z-10 h-full w-1 bg-primary"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-surface shadow-md transition-shadow ${
                  isDragging ? "shadow-lg" : ""
                }`}
              >
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Story details */}
        <div className="mx-auto mt-8 max-w-2xl">
          {/* Couple info */}
          <div className="mb-4 text-center">
            <h3 className="text-xl font-bold text-foreground">
              {story.couple}
            </h3>
            <p className="text-sm text-muted">
              {story.yearsMarried} años de matrimonio ·{' '}
              {story.category === "renovacion" ? "Renovación" :
               story.category === "crisis" ? "Sanación" : "Misión"}
            </p>
          </div>

          {/* Full story */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-accent-light bg-accent-light/20 p-5">
              <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                <span>{story.imageLeft}</span> Antes
              </p>
              <p className="text-sm leading-relaxed text-muted">
                {story.before}
              </p>
            </div>
            <div className="rounded-xl border border-primary-light bg-primary-light/20 p-5">
              <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary-dark">
                <span>{story.imageRight}</span> Después
              </p>
              <p className="text-sm leading-relaxed text-muted">
                {story.after}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-between">
            <button
              type="button"
              onClick={goPrev}
              className="flex items-center gap-1 text-sm text-muted hover:text-primary"
            >
              ← {stories[(activeIndex - 1 + stories.length) % stories.length]!.couple}
            </button>
            <span className="text-xs text-muted-light">
              {activeIndex + 1} / {stories.length}
            </span>
            <button
              type="button"
              onClick={goNext}
              className="flex items-center gap-1 text-sm text-muted hover:text-primary"
            >
              {stories[(activeIndex + 1) % stories.length]!.couple} →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
