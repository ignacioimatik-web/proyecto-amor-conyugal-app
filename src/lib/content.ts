// ============================================================================
// Ama a Dios — Content Type Definitions
// AG5 Content Engine / Data Layer
// ============================================================================
// These interfaces define the shape of all content types consumed by the
// frontend. Each maps to a corresponding JSON file in /data/.
// ============================================================================

// ---------------------------------------------------------------------------
// 1. Gospel / Daily Reflection  → data/reflections.json
// ---------------------------------------------------------------------------
export interface Location {
  name: string;
  address: string;
  region: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface GospelReflection {
  id: string;                     // "evangelio-2026-06-17"
  title: string;
  summary: string;
  sourceUrl: string;
  date: string;                   // "2026-06-17" (ISO date)
  category: string;               // "evangelio-diario"
  tags: string[];
  liturgicalDay: string;          // "Miércoles de la XI Semana del Tiempo Ordinario"
  gospelReference: string;        // "Mt 6, 1-6. 16-18"
  gospelText: string;             // Full text of the gospel
  meditation: string;             // Couple-focused meditation (markdown)
  couplesPrayer: string;          // Closing prayer (markdown)
  saintOfTheDay?: string;         // Optional saint
  imageUrl?: string;              // Optional hero image
}

// ---------------------------------------------------------------------------
// 2. Retreat  → data/retreats.json
// ---------------------------------------------------------------------------
export type RetreatStatus = "upcoming" | "ongoing" | "past" | "cancelled";

export interface Retreat {
  id: string;                     // "retiro-001"
  title: string;
  summary: string;
  sourceUrl: string;
  date: string;
  category: string;               // "retiro-matrimonios", "retiro-novios", "retiro-con-ninos"
  tags: string[];
  description: string;            // Full description (markdown)
  dateStart: string;              // "2026-08-15"
  dateEnd: string;                // "2026-08-17"
  location: Location;
  facilitator: string;            // "P. Juan Pérez y matrimonio García"
  capacity: number;
  registered: number;
  cost: string;                   // "Donación sugerida $50" or "Gratuito"
  categoryType?: string;          // "fin-de-semana", "taller", "convivencia"
  imageUrl: string;
  featured: boolean;
  status: RetreatStatus;
}

// ---------------------------------------------------------------------------
// 3. Testimonial  → data/testimonials.json
// ---------------------------------------------------------------------------
export type TestimonialCategory = "crisis" | "renovacion" | "formacion" | "mision";

export interface Testimonial {
  id: string;                     // "testimonio-001"
  title: string;
  summary: string;
  sourceUrl: string;
  date: string;
  category: string;
  tags: string[];
  coupleNames: string;            // "Ana y Pedro"
  photoUrl?: string;              // Couple photo (optional for privacy)
  excerpt: string;                // Short pull-quote (1 sentence)
  body: string;                   // Full testimony (markdown)
  categoryType: TestimonialCategory;
  yearsMarried: number;
  featured: boolean;
  videoUrl?: string;              // Optional video testimony
}

// ---------------------------------------------------------------------------
// 4. Formation Resource  → data/formation-path.json
// ---------------------------------------------------------------------------
export type FormationCategory = "comunicacion" | "espiritualidad" | "sexualidad" | "finanzas" | "crianza";
export type FormationType = "articulo" | "video" | "curso" | "guia" | "podcast";
export type DifficultyLevel = "inicial" | "intermedio" | "avanzado";

export interface FormationResource {
  id: string;                     // "formacion-001"
  title: string;
  summary: string;
  sourceUrl: string;
  date: string;
  category: FormationCategory;
  tags: string[];
  body: string;                   // Markdown content
  categoryType: FormationCategory;
  type: FormationType;
  duration?: string;              // "10 min", "3 días", "2 horas"
  author: string;                 // "P. Juan Pérez"
  imageUrl?: string;
  difficulty: DifficultyLevel;
  relatedIds: string[];           // Related resource IDs
}

// ---------------------------------------------------------------------------
// 5. Mission  → data/missions.json
// ---------------------------------------------------------------------------
export interface MissionLocation {
  country: string;
  region: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Mission {
  id: string;                     // "mision-001"
  title: string;
  summary: string;
  sourceUrl: string;
  date: string;
  category: string;               // "mision-activa", "mision-reciente"
  tags: string[];
  coupleNames: string;            // "María y José García"
  story: string;                  // Full story (markdown)
  location: MissionLocation;
  photoUrls: string[];            // Gallery
  prayerRequest: string;          // Specific prayer need
  supporters: number;             // People praying
  dateStarted: string;            // "2024-09-01"
  active: boolean;
}

// ---------------------------------------------------------------------------
// 6. Links & Navigation  → data/links.json
// ---------------------------------------------------------------------------
export type LinkGroup = "header" | "footer" | "social";

export interface SiteLink {
  id: string;
  label: string;                  // "Aviso Legal"
  href: string;                   // "/legal"
  group: LinkGroup;
  order: number;
  icon?: string;
  external?: boolean;
}

export type SocialPlatform = "facebook" | "instagram" | "youtube" | "whatsapp";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label: string;
}

export interface LinksCollection {
  siteLinks: SiteLink[];
  socialLinks: SocialLink[];
}

// ---------------------------------------------------------------------------
// 7. Legal Notes  → data/legal-notes.json
// ---------------------------------------------------------------------------
export interface LegalNote {
  id: string;                     // "legal-aviso"
  title: string;                  // "Aviso Legal"
  slug: string;                   // "aviso-legal"
  body: string;                   // Markdown content
  lastUpdated: string;            // "2026-01-01"
  sourceUrl: string;
  date: string;
  category: string;               // "legal"
  tags: string[];
}

// ---------------------------------------------------------------------------
// 8. Itinerary Stage           → (data/itinerary-stages.json planned)
// ---------------------------------------------------------------------------
export interface ItineraryStage {
  id: string;                     // "etapa-01"
  title: string;                  // "Fundamentos del Amor Cristiano"
  stageNumber: number;            // 1
  summary: string;
  content: string;                // Markdown — reflections, exercises, prayers
  estimatedDuration: string;      // "1 semana"
  resources: string[];            // Related formation resource IDs
  prayerForStage: string;         // Closing prayer
  completed: boolean;             // Client-side tracking only
}

// ---------------------------------------------------------------------------
// Utility: content type registry for dynamic imports
// ---------------------------------------------------------------------------
export type ContentTypeName =
  | "reflections"
  | "retreats"
  | "testimonials"
  | "formation-path"
  | "missions"
  | "links"
  | "legal-notes"
  | "itinerary-stages";

export interface ContentRegistryEntry<T = unknown> {
  name: ContentTypeName;
  path: string;                   // Relative path in /data/
  schema: new () => T;
  description: string;
}

export const contentRegistry: Record<string, ContentRegistryEntry> = {
  reflections: {
    name: "reflections",
    path: "/data/reflections.json",
    schema: null as unknown as new () => GospelReflection,
    description: "Daily Gospel reflections with meditation and couples prayer",
  },
  retreats: {
    name: "retreats",
    path: "/data/retreats.json",
    schema: null as unknown as new () => Retreat,
    description: "Retreats calendar with dates, locations, and registration",
  },
  testimonials: {
    name: "testimonials",
    path: "/data/testimonials.json",
    schema: null as unknown as new () => Testimonial,
    description: "Couple testimonies of faith, renewal, and mission",
  },
  "formation-path": {
    name: "formation-path",
    path: "/data/formation-path.json",
    schema: null as unknown as new () => FormationResource,
    description: "Formation resources: articles, courses, guides",
  },
  missions: {
    name: "missions",
    path: "/data/missions.json",
    schema: null as unknown as new () => Mission,
    description: "Active missionary couples around the world",
  },
  links: {
    name: "links",
    path: "/data/links.json",
    schema: null as unknown as new () => LinksCollection,
    description: "Site navigation and social media links",
  },
  "legal-notes": {
    name: "legal-notes",
    path: "/data/legal-notes.json",
    schema: null as unknown as new () => LegalNote,
    description: "Legal pages: terms, privacy, cookies",
  },
  "itinerary-stages": {
    name: "itinerary-stages",
    path: "/data/itinerary-stages.json",
    schema: null as unknown as new () => ItineraryStage,
    description: "Marriage itinerary stages (planned for v1.5)",
  },
};
