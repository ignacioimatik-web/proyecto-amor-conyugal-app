// ============================================================================
// AG7 — Retreats Data Access & Filtering
// Typed helpers for filtering, sorting, and deriving display info
// ============================================================================

import type { Retreat } from "@/lib/content";
import retreatsData from "@/data/retreats.json";

// Re-export the Retreat type for convenience
export type { Retreat } from "@/lib/content";

// ---- Derived display types ----

export type RetreatType = "matrimonios" | "novios" | "jovenes" | "con-ninos";

export interface RetreatFilters {
  type: RetreatType | "todos";
  country: string;
  city: string;
  showPast: boolean;
}

export interface FilterOptions {
  countries: string[];
  cities: string[];
  types: { id: RetreatType | "todos"; label: string }[];
}

// ---- Mapping: category string → RetreatType ----

const CATEGORY_TO_TYPE: Record<string, RetreatType> = {
  "retiro-matrimonios": "matrimonios",
  "retiro-novios": "novios",
  "retiro-jovenes": "jovenes",
  "retiro-con-ninos": "con-ninos",
};

const TYPE_LABELS: Record<RetreatType | "todos", string> = {
  todos: "Todos",
  matrimonios: "Matrimonios",
  novios: "Novios",
  jovenes: "Jóvenes",
  "con-ninos": "Con niños",
};

// ---- Helpers ----

function getRetreatType(category: string): RetreatType {
  return CATEGORY_TO_TYPE[category] ?? "matrimonios";
}

function getCountry(location: Retreat["location"]): string {
  // region is our best proxy for country; some are Spanish regions
  const region = location.region;
  const countryMap: Record<string, string> = {
    Norte: "España",
    Centro: "España",
    Sur: "España",
    Argentina: "Argentina",
    Internacional: "Internacional",
    España: "España",
  };
  return countryMap[region] ?? region;
}

function getCity(location: Retreat["location"]): string {
  return location.name.split("—")[0]?.trim() ?? location.name;
}

function isPast(retreat: Retreat): boolean {
  if (retreat.status === "past") return true;
  const today = new Date();
  // Normalize to date only for comparison
  const endDate = new Date(retreat.dateEnd);
  return endDate < today;
}

function isOngoing(retreat: Retreat): boolean {
  if (retreat.status === "ongoing") return true;
  const today = new Date();
  const startDate = new Date(retreat.dateStart);
  const endDate = new Date(retreat.dateEnd);
  return startDate <= today && endDate >= today;
}

function statusLabel(retreat: Retreat): "Próximo" | "En curso" | "Pasado" {
  if (isOngoing(retreat)) return "En curso";
  if (isPast(retreat)) return "Pasado";
  return "Próximo";
}

// ---- Load all retreats ----

const allRetreats: Retreat[] = retreatsData as Retreat[];

// Normalise dates for sorting
function parseDate(str: string): Date {
  const d = new Date(str);
  return isNaN(d.getTime()) ? new Date(0) : d;
}

// ---- Public API ----

export { getRetreatType, getCountry, getCity, isPast, isOngoing, statusLabel, TYPE_LABELS };

export function getFilterOptions(retreats: Retreat[] = allRetreats): FilterOptions {
  const countrySet = new Set<string>();
  const citySet = new Set<string>();

  for (const r of retreats) {
    countrySet.add(getCountry(r.location));
    citySet.add(getCity(r.location));
  }

  return {
    countries: Array.from(countrySet).sort(),
    cities: Array.from(citySet).sort(),
    types: [
      { id: "todos", label: "Todos" },
      { id: "matrimonios", label: "Matrimonios" },
      { id: "novios", label: "Novios" },
      { id: "jovenes", label: "Jóvenes" },
      { id: "con-ninos", label: "Con niños" },
    ],
  };
}

export interface FilteredResult {
  upcoming: Retreat[];
  past: Retreat[];
  total: number;
}

export function filterRetreats(filters: RetreatFilters): FilteredResult {
  let filtered = [...allRetreats];

  // Filter by type
  if (filters.type !== "todos") {
    filtered = filtered.filter((r) => getRetreatType(r.category) === filters.type);
  }

  // Filter by country
  if (filters.country) {
    filtered = filtered.filter((r) => getCountry(r.location) === filters.country);
  }

  // Filter by city
  if (filters.city) {
    filtered = filtered.filter((r) => getCity(r.location) === filters.city);
  }

  // Sort by date (closest first)
  filtered.sort((a, b) => parseDate(a.dateStart).getTime() - parseDate(b.dateStart).getTime());

  // Split into upcoming (including ongoing) and past
  const upcoming = filtered.filter((r) => !isPast(r));
  const past = filtered.filter((r) => isPast(r));

  return { upcoming, past, total: filtered.length };
}

export function getFeaturedRetreats(): Retreat[] {
  return allRetreats.filter((r) => r.featured && !isPast(r));
}

export default allRetreats;
