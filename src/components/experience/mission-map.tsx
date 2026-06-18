"use client";

import { useState } from "react";
import type { Mission } from "@/lib/content";

interface MissionMapProps {
  missions: Mission[];
}

const continentColors: Record<string, string> = {
  México: "from-primary/20 to-accent/10",
  "Estados Unidos": "from-info/20 to-primary/10",
  Honduras: "from-accent/20 to-primary/10",
  "Guinea Ecuatorial": "from-primary/20 to-info/10",
  Polonia: "from-info/20 to-accent-light/20",
};

const continentFlags: Record<string, string> = {
  México: "🇲🇽",
  "Estados Unidos": "🇺🇸",
  Honduras: "🇭🇳",
  "Guinea Ecuatorial": "🇬🇶",
  Polonia: "🇵🇱",
};

function getContinent(country: string): string {
  const americas = ["México", "Estados Unidos", "Honduras"];
  const africa = ["Guinea Ecuatorial"];
  const europe = ["Polonia"];
  if (americas.includes(country)) return "América";
  if (africa.includes(country)) return "África";
  if (europe.includes(country)) return "Europa";
  return "Otros";
}

export default function MissionMap({ missions }: MissionMapProps) {
  const [selectedMission, setSelectedMission] = useState<string | null>(null);
  const [prayerMissions, setPrayerMissions] = useState<Set<string>>(new Set());

  const grouped = missions.reduce(
    (acc, m) => {
      const continent = getContinent(m.location.country);
      if (!acc[continent]) acc[continent] = [];
      acc[continent].push(m);
      return acc;
    },
    {} as Record<string, Mission[]>,
  );

  const continentOrder = ["América", "Europa", "África"];
  const totalSupporters = missions.reduce((sum, m) => sum + m.supporters, 0);

  const togglePrayer = (id: string) => {
    setPrayerMissions((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section className="py-12 lg:py-16">
      <div className="container-wide mx-auto px-4 lg:px-6">
        {/* Header stats */}
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-light text-3xl">
            🌍
          </div>
          <h2 className="text-2xl font-bold text-foreground lg:text-3xl">
            Mapa de Misiones
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-muted">
            Parejas misioneras del Proyecto Amor Conyugal llevando el Evangelio del matrimonio por todo el mundo.
          </p>

          <div className="mx-auto mt-6 flex max-w-md justify-center gap-6 text-sm">
            <div className="rounded-lg bg-surface px-4 py-3 text-center shadow-sm">
              <span className="block text-2xl font-bold text-primary">{missions.length}</span>
              <span className="text-xs text-muted">Misiones activas</span>
            </div>
            <div className="rounded-lg bg-surface px-4 py-3 text-center shadow-sm">
              <span className="block text-2xl font-bold text-accent">{totalSupporters}</span>
              <span className="text-xs text-muted">Personas orando</span>
            </div>
            <div className="rounded-lg bg-surface px-4 py-3 text-center shadow-sm">
              <span className="block text-2xl font-bold text-info">{Object.keys(grouped).length}</span>
              <span className="text-xs text-muted">Continentes</span>
            </div>
          </div>
        </div>

        {/* World grid by continent */}
        {continentOrder.map((continent) => {
          const continentMissions = grouped[continent];
          if (!continentMissions) return null;

          return (
            <div key={continent} className="mb-12 last:mb-0">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-light text-sm">
                  {continent === "América" ? "🌎" : continent === "Europa" ? "🌍" : "🌏"}
                </span>
                {continent}
                <span className="text-sm font-normal text-muted-light">
                  ({continentMissions.length} {continentMissions.length === 1 ? "misión" : "misiones"})
                </span>
              </h3>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {continentMissions.map((mission) => {
                  const isExpanded = selectedMission === mission.id;
                  const isPraying = prayerMissions.has(mission.id);

                  return (
                    <article
                      key={mission.id}
                      className={`group relative overflow-hidden rounded-xl border bg-surface p-5 transition-all duration-300 ${
                        isExpanded
                          ? "border-primary shadow-lg"
                          : "border-border hover:border-primary-light hover:shadow-sm"
                      }`}
                    >
                      {/* Background gradient */}
                      <div
                        className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 ${
                          continentColors[mission.location.country] || "from-primary/10 to-accent/5"
                        } ${isExpanded ? "opacity-100" : "group-hover:opacity-30"}`}
                      />

                      <div className="relative z-10">
                        {/* Flag + Country */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">
                              {continentFlags[mission.location.country] || "📍"}
                            </span>
                            <span className="text-sm font-medium text-muted">
                              {mission.location.country}
                            </span>
                          </div>
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              mission.active
                                ? "bg-success/15 text-success"
                                : "bg-muted-light/15 text-muted"
                            }`}
                          >
                            {mission.active ? "Activa" : "Inactiva"}
                          </span>
                        </div>

                        {/* Couple */}
                        <h4 className="mt-3 text-base font-semibold text-foreground">
                          {mission.coupleNames}
                        </h4>
                        <p className="mt-1 text-xs text-muted-light">
                          📍 {mission.location.region}
                        </p>

                        {/* Summary */}
                        <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3">
                          {mission.summary}
                        </p>

                        {/* Prayer count */}
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-xs text-muted-light">
                            🙏 {mission.supporters} orando
                          </span>

                          <button
                            type="button"
                            onClick={() => togglePrayer(mission.id)}
                            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                              isPraying
                                ? "bg-primary text-white"
                                : "border border-border text-muted hover:border-primary hover:text-primary"
                            }`}
                          >
                            {isPraying ? "🙏 Orando" : "Rezar"}
                          </button>
                        </div>

                        {/* Expand button */}
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedMission(isExpanded ? null : mission.id)
                          }
                          className="mt-3 w-full text-center text-xs text-primary hover:text-primary-dark"
                        >
                          {isExpanded ? "▲ Ver menos" : "▼ Ver historia"}
                        </button>

                        {/* Expanded story */}
                        {isExpanded && (
                          <div className="mt-4 space-y-3 border-t border-border pt-4 animate-fade-in">
                            <div className="rounded-lg bg-surface-alt p-3">
                              <p className="text-xs font-semibold uppercase tracking-wider text-primary-dark">
                                📖 Historia
                              </p>
                              <p className="mt-1 text-sm leading-relaxed text-muted whitespace-pre-line">
                                {mission.story}
                              </p>
                            </div>

                            <div className="rounded-lg bg-primary-light/30 p-3">
                              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                                🙏 Intención de Oración
                              </p>
                              <p className="mt-1 text-sm italic text-muted">
                                {mission.prayerRequest}
                              </p>
                            </div>

                            <p className="text-xs text-muted-light">
                              Sirviendo desde {new Date(mission.dateStarted).toLocaleDateString("es-ES", {
                                year: "numeric",
                                month: "long",
                              })}
                            </p>
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* No missions */}
        {missions.length === 0 && (
          <div className="rounded-xl border border-border bg-surface p-12 text-center">
            <span className="text-4xl">🌍</span>
            <p className="mt-4 text-muted">No hay misiones disponibles en este momento.</p>
          </div>
        )}
      </div>
    </section>
  );
}
