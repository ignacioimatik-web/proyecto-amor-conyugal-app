"use client";

import { useState } from "react";
import type { GospelReflection } from "@/lib/content";

interface DailyGospelCardProps {
  reflection: GospelReflection;
}

export default function DailyGospelCard({ reflection }: DailyGospelCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [shared, setShared] = useState(false);

  return (
    <div className="perspective-1000 mx-auto w-full max-w-lg">
      <div
        className={`relative min-h-[28rem] cursor-pointer transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
        onClick={() => setFlipped(!flipped)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setFlipped(!flipped);
        }}
      >
        {/* Front: Gospel Card */}
        <div className="absolute inset-0 rounded-xl border border-border bg-surface p-6 shadow-sm [backface-visibility:hidden] sm:p-8">
          {/* Ribbon */}
          <div className="absolute -top-2 right-6 rounded-b-lg bg-primary px-4 py-1 text-xs font-semibold text-white shadow-sm">
            Evangelio del Día
          </div>

          {/* Header */}
          <div className="mt-1 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {new Date(reflection.date).toLocaleDateString("es-ES", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="mt-0.5 text-sm text-muted-light">
              {reflection.liturgicalDay}
            </p>
          </div>

          <hr className="my-4 border-border" />

          {/* Gospel Reference */}
          <h2 className="text-center text-xl font-bold text-foreground">
            {reflection.gospelReference}
          </h2>

          {/* Gospel text (shortened) */}
          <div className="mt-4 text-sm leading-relaxed text-muted">
            <p>
              {reflection.gospelText.length > 280
                ? `${reflection.gospelText.slice(0, 280)}...`
                : reflection.gospelText}
            </p>
          </div>

          <hr className="my-4 border-border" />

          {/* Meditation (shortened) */}
          <div className="rounded-lg bg-surface-alt p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              💭 Meditación
            </p>
            <p className="mt-1 text-sm italic leading-relaxed text-muted">
              {reflection.meditation.length > 200
                ? `${reflection.meditation.slice(0, 200)}...`
                : reflection.meditation}
            </p>
          </div>

          {/* Footer hint */}
          <p className="mt-4 text-center text-xs text-muted-light">
            Toca para ver la oración →
          </p>
        </div>

        {/* Back: Prayer */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl border border-primary-light bg-primary-light/20 p-6 shadow-sm [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-8">
          <span className="text-4xl">🙏</span>
          <h3 className="mt-4 text-lg font-semibold text-foreground">
            Oración de los Esposos
          </h3>
          <p className="mt-3 text-center text-base italic leading-relaxed text-muted">
            {reflection.couplesPrayer}
          </p>

          {reflection.saintOfTheDay && (
            <p className="mt-4 text-xs text-muted-light">
              🕯️ Conmemoración: {reflection.saintOfTheDay}
            </p>
          )}

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setFlipped(false);
            }}
            className="mt-6 text-sm text-primary hover:text-primary-dark"
          >
            ← Volver al Evangelio
          </button>
        </div>
      </div>

      {/* Share Button */}
      <div className="mt-4 flex justify-center">
        <button
          type="button"
          onClick={() => {
            setShared(true);
            setTimeout(() => setShared(false), 2000);
          }}
          className="flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium text-muted transition-all hover:border-primary hover:text-primary"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          {shared ? "¡Compartido!" : "Compartir esta reflexión"}
        </button>
      </div>
    </div>
  );
}
