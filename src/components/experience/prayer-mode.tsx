"use client";

import { useState, useEffect, useCallback, useRef } from "react";

type BreathingPhase = "in" | "hold" | "out" | "rest";

interface PhaseConfig {
  phase: BreathingPhase;
  duration: number; // seconds
  label: string;
  instruction: string;
}

const phases: PhaseConfig[] = [
  { phase: "in", duration: 4, label: "Inhalar", instruction: "Toma el amor de Dios" },
  { phase: "hold", duration: 4, label: "Retener", instruction: "Descansa en Su presencia" },
  { phase: "out", duration: 6, label: "Exhalar", instruction: "Entrega tus cargas" },
  { phase: "rest", duration: 2, label: "Pausa", instruction: "Silencio que habla" },
];

const prayers = [
  "Señor, aquí estamos ante Ti.",
  "Danos un corazón humilde y disponible.",
  "Que nuestro amor refleje tu amor fiel.",
  "Sana las heridas que compartimos.",
  "Renueva en nosotros la gracia del sacramento.",
  "Enséñanos a perdonarnos como Tú nos perdonas.",
  "Abre nuestros oídos a tu Palabra.",
  "Fortalece nuestra unión en los días difíciles.",
  "Haz de nuestra casa un hogar de paz.",
  "Que sepamos amarnos sin medida.",
  "Te ofrecemos nuestras alegrías y fatigas.",
  "Danos la gracia de la perseverancia.",
  "Bendice a nuestros hijos y familiares.",
  "Multiplica el amor que compartimos.",
  "Úsanos para llevar tu luz a otros matrimonios.",
  "Gracias por caminar con nosotros, siempre.",
];

const PRAYER_INTERVAL = 8000; // ms

export default function PrayerMode() {
  const [isActive, setIsActive] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [phaseProgress, setPhaseProgress] = useState(0);
  const [prayerIndex, setPrayerIndex] = useState(0);
  const [timerMode, setTimerMode] = useState<number | "infinite">(5); // minutes
  const [secondsLeft, setSecondsLeft] = useState(5 * 60);
  const startTimeRef = useRef<number>(0);
  const frameRef = useRef<number>(0);

  const currentPhaseConfig = phases[currentPhase]!;

  // Prayer rotation
  useEffect(() => {
    if (!isActive) return;
    const interval = setInterval(() => {
      setPrayerIndex((prev) => (prev + 1) % prayers.length);
    }, PRAYER_INTERVAL);
    return () => clearInterval(interval);
  }, [isActive]);

  // Breathing animation loop
  const animateBreathing = useCallback(() => {
    if (!startTimeRef.current) return;

    const elapsed = (Date.now() - startTimeRef.current) / 1000;
    const totalCycleDuration = phases.reduce((sum, p) => sum + p.duration, 0);
    const cycleTime = elapsed % totalCycleDuration;
    let accumulated = 0;

    for (let i = 0; i < phases.length; i++) {
      const p = phases[i]!;
      if (cycleTime < accumulated + p.duration) {
        if (currentPhase !== i) setCurrentPhase(i);
        const phaseElapsed = cycleTime - accumulated;
        setPhaseProgress(phaseElapsed / p.duration);
        break;
      }
      accumulated += p.duration;
    }

    frameRef.current = requestAnimationFrame(animateBreathing);
  }, [currentPhase]);

  useEffect(() => {
    if (isActive) {
      startTimeRef.current = Date.now();
      frameRef.current = requestAnimationFrame(animateBreathing);
    } else {
      cancelAnimationFrame(frameRef.current);
      setCurrentPhase(0);
      setPhaseProgress(0);
    }
    return () => cancelAnimationFrame(frameRef.current);
  }, [isActive, animateBreathing]);

  // Timer countdown
  useEffect(() => {
    if (!isActive || timerMode === "infinite") return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setIsActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isActive, timerMode]);

  // Circle scale based on phase
  const getScale = () => {
    switch (currentPhaseConfig.phase) {
      case "in":
        return 0.8 + 0.4 * phaseProgress;
      case "hold":
        return 1.2;
      case "out":
        return 1.2 - 0.4 * phaseProgress;
      case "rest":
        return 0.8;
    }
  };

  const getOpacity = () => {
    switch (currentPhaseConfig.phase) {
      case "in":
        return 0.6 + 0.4 * phaseProgress;
      case "hold":
        return 1;
      case "out":
        return 1 - 0.3 * phaseProgress;
      case "rest":
        return 0.6;
    }
  };

  const startSession = () => {
    setSecondsLeft(timerMode === "infinite" ? 0 : timerMode * 60);
    setIsActive(true);
    setPrayerIndex(Math.floor(Math.random() * prayers.length));
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <section className={`min-h-[70vh] transition-all duration-1000 ${isActive ? "" : ""}`}>
      <div className="container-narrow mx-auto px-4 py-12 lg:py-16">
        {!isActive ? (
          <>
            {/* Idle State — Settings */}
            <div className="mx-auto max-w-md text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary-light text-4xl">
                🕯️
              </div>
              <h2 className="text-2xl font-bold text-foreground lg:text-3xl">
                Modo Oración
              </h2>
              <p className="mt-2 text-muted">
                Un espacio de silencio y encuentro con Dios para la pareja. Respira, ora, descansa en Su presencia.
              </p>

              {/* Timer Selector */}
              <div className="mt-8">
                <p className="mb-3 text-sm font-medium text-muted">Duración de la oración</p>
                <div className="flex justify-center gap-3">
                  {[3, 5, 10, 15, "∞"].map((t) => (
                    <button
                      key={String(t)}
                      type="button"
                      onClick={() => setTimerMode(t === "∞" ? "infinite" : (t as number))}
                      className={`rounded-lg border px-5 py-2.5 text-sm font-medium transition-all ${
                        timerMode === t || (timerMode === "infinite" && t === "∞")
                          ? "border-primary bg-primary text-white"
                          : "border-border text-muted hover:border-primary hover:text-primary"
                      }`}
                    >
                      {t === "∞" ? "∞" : `${t} min`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Start Button */}
              <button
                type="button"
                onClick={startSession}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl active:scale-95"
              >
                🕯️ Comenzar Oración
              </button>

              <div className="mt-6 space-y-3 text-left">
                <div className="rounded-lg border border-border bg-surface p-4">
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    🌬️ Respiración Guiada
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    Sigue el ritmo de la respiración: 4 segundos inhalando, 4 reteniendo, 6 exhalando, 2 de pausa.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-surface p-4">
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    🙏 Oraciones Rotativas
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    Pequeñas oraciones para matrimonio aparecerán durante la sesión.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-surface p-4">
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    🎵 Ambiente de Silencio
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    Una interfaz minimalista para enfocarse solo en Dios y en su pareja.
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Active Prayer Mode */
          <div className="flex flex-col items-center justify-center text-center">
            {/* Timer */}
            <div className="mb-8">
              {timerMode !== "infinite" ? (
                <span className="font-mono text-4xl font-light text-primary">
                  {formatTime(secondsLeft)}
                </span>
              ) : (
                <span className="text-sm text-muted-light">Sin límite de tiempo</span>
              )}
            </div>

            {/* Breathing Circle */}
            <div className="relative flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72">
              {/* Outer glow */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 transition-all duration-300"
                style={{
                  transform: `scale(${getScale()})`,
                  opacity: getOpacity(),
                }}
              />
              {/* Inner circle */}
              <div
                className="relative z-10 flex h-40 w-40 flex-col items-center justify-center rounded-full border-2 border-primary-light bg-surface shadow-lg transition-all duration-300 sm:h-48 sm:w-48"
                style={{
                  transform: `scale(${getScale()})`,
                }}
              >
                <span className="text-2xl">
                  {currentPhaseConfig.phase === "in" ? "🌬️" :
                   currentPhaseConfig.phase === "hold" ? "💜" :
                   currentPhaseConfig.phase === "out" ? "🌊" : "✨"}
                </span>
                <span className="mt-1 text-sm font-semibold text-primary">
                  {currentPhaseConfig.label}
                </span>
                <span className="mt-0.5 text-xs text-muted-light">
                  {currentPhaseConfig.instruction}
                </span>
              </div>
            </div>

            {/* Current Prayer */}
            <div className="mt-10 max-w-md animate-fade-in">
              <div className="rounded-xl border border-primary-light bg-primary-light/20 p-6">
                <p className="text-lg italic leading-relaxed text-foreground">
                  &ldquo;{prayers[prayerIndex]}&rdquo;
                </p>
              </div>
            </div>

            {/* Phase indicator dots */}
            <div className="mt-8 flex gap-2">
              {phases.map((p, i) => (
                <div
                  key={p.phase}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === currentPhase
                      ? "w-8 bg-primary"
                      : i < currentPhase
                        ? "w-2 bg-primary-light"
                        : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>

            {/* End Button */}
            <button
              type="button"
              onClick={() => setIsActive(false)}
              className="mt-8 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent"
            >
              Finalizar Oración
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
