import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { AdorationMap } from "@/components/adoration-map";

export const metadata: Metadata = {
  title: "Adoraciones",
  description:
    "Adoraciones eucarísticas por los matrimonios en toda España y el mundo. Horarios, lugares y parroquias donde orar por las familias.",
};

export default function AdoracionesPage() {
  return (
    <>
      <PageHero
        title="Adoraciones por los Matrimonios"
        description="Momentos de encuentro con Jesús Eucaristía. Adoraciones por los matrimonios en todo el mundo."
      />

      <section className="py-12 lg:py-16">
        <div className="container-wide mx-auto px-4 lg:px-6">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm leading-relaxed text-muted">
              La adoración eucarística es un momento privilegiado de encuentro con Jesús. En
              parroquias de toda España y del mundo, matrimonios se reúnen para orar ante el
              Santísimo Sacramento por la santidad y la unidad de las familias.
            </p>
          </div>
          <AdorationMap places={mapPlaces} />

          {/* España */}
          <h2 className="mb-6 text-xl font-bold text-foreground gold-line">EN ESPAÑA</h2>
          <div className="space-y-8">
            {spainCities.map((city) => (
              <div key={city.name} className="rounded-xl border border-border bg-surface p-6">
                <h3 className="text-lg font-semibold text-foreground">{city.name}</h3>
                <div className="mt-4 space-y-3">
                  {city.locations.map((loc, i) => (
                    <div key={i} className="border-l-2 border-primary-light pl-4">
                      <p className="text-sm font-medium text-foreground">{loc.parish}</p>
                      <p className="text-xs text-muted-light">{loc.schedule}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Internacional */}
          <h2 className="mb-6 mt-12 text-xl font-bold text-foreground gold-line">EN EL MUNDO</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {world.map((place) => (
              <div key={place.country} className="rounded-xl border border-border bg-surface p-6">
                <h3 className="text-lg font-semibold text-foreground">{place.country}</h3>
                {place.cities.map((city) => (
                  <div key={city.name} className="mt-3">
                    <p className="text-sm font-medium text-foreground">{city.name}</p>
                    {city.locations.map((loc, i) => (
                      <p key={i} className="text-xs text-muted-light">
                        {loc}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-primary-light bg-primary-light/10 p-6">
            <p className="text-sm text-muted">
              <strong className="text-foreground">¿Quieres añadir tu parroquia?</strong> Escríbenos a{" "}
              <a
                href="mailto:ProyectoAmorConyugal@gmail.com"
                className="text-primary underline"
              >
                ProyectoAmorConyugal@gmail.com
              </a>{" "}
              con los datos de la adoración y la incluiremos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

const spainCities = [
  {
    name: "Madrid",
    locations: [
      { parish: "Vicaría 1 — Ntra. Sra. de la Moraleja", schedule: "Tercer miércoles de mes, después de misa de 19:00" },
      { parish: "Vicaría 1 — San Antonio de las Cárcavas", schedule: "Primer viernes de mes, 20:30" },
      { parish: "Vicaría 1 — Santa María Magdalena", schedule: "Último martes de mes, 20:10" },
      { parish: "Vicaría 1 — La Asunción de Nuestra Señora", schedule: "Cuarto miércoles de mes, 21:00" },
      { parish: "Vicaría 1 — San Agustín del Guadalix", schedule: "Último jueves de mes, 22:00" },
      { parish: "Vicaría 2 y 3 — Basílica de la Concepción", schedule: "Segundo jueves de mes, 21:00" },
      { parish: "Vicaría 2 y 3 — San Emilio", schedule: "Último sábado de mes, 18:00" },
      { parish: "Vicaría 2 y 3 — Ntra. Sra. de los Apóstoles", schedule: "Cuarto miércoles de mes, 20:00" },
      { parish: "Vicaría 2 y 3 — Ntra. Sra. de la Montaña", schedule: "Cuarto viernes de mes, 20:00" },
      { parish: "Vicaría 2 y 3 — San Romualdo", schedule: "Segundo miércoles de mes, 20:30" },
      { parish: "Vicaría 2 y 3 — Santa María del Monte Carmelo", schedule: "Cuarto jueves de mes, 20:30" },
      { parish: "Vicaría 4, 5 y 6 — Santos Inocentes", schedule: "Segundo viernes de mes, 20:00" },
      { parish: "Vicaría 4, 5 y 6 — Santa Eugenia", schedule: "Segundo sábado de mes, 20:30" },
      { parish: "Vicaría 7 — Santa María de Caná (Pozuelo)", schedule: "Último miércoles de mes (cada 3 meses), 20:40" },
      { parish: "Vicaría 7 — Buen Suceso", schedule: "Últimos jueves, 21:30" },
      { parish: "Vicaría 7 — Sta. María Magdalena (Húmera)", schedule: "Segundo jueves, 20:00" },
      { parish: "Vicaría 7 — Sta. María la Blanca (Cerceda)", schedule: "Segundo viernes de mes, 18:30" },
      { parish: "Vicaría 7 — Ntra. Sra. de la Visitación (Las Rozas)", schedule: "Primer jueves de mes, 20:00" },
      { parish: "Vicaría 7 — San Miguel Arcángel (Las Rozas)", schedule: "Cuarto viernes de mes, 20:15" },
      { parish: "Vicaría 7 — Asunción de Nuestra Señora (Pozuelo)", schedule: "Último jueves de mes, 19:30" },
      { parish: "Vicaría 7 — San Juan Crisóstomo", schedule: "Tercer jueves de mes, 20:45" },
      { parish: "Vicaría 7 — San Matías (Peralejo)", schedule: "2º sábado de mes, 20:00" },
      { parish: "Vicaría 7 — Anunciación Ntra. Sra. (Pozuelo)", schedule: "Último sábado de mes, 18:30" },
      { parish: "Vicaría 7 — El Carmen (Pozuelo)", schedule: "4º sábado, 20:00" },
      { parish: "Boadilla del Monte — Sto. Cristo de la Misericordia", schedule: "Segundos viernes de mes, 21:15" },
      { parish: "Valdemoro — Santiago Apóstol", schedule: "Últimos miércoles de mes, 20:00" },
    ],
  },
  {
    name: "Sevilla",
    locations: [
      { parish: "Rotativo mensual: Corpus Christi, San Juan Pablo II (Montequinto), Espíritu Santo (Mairena), Ntra. Sra. del Buen Aire, Ntra. Sra. del Mar, Sta. Eufemia y San Sebastián (Tomares), Ntra. Sra. de las Virtudes (Puebla de Cazalla)", schedule: "Consultar calendario mensual" },
    ],
  },
  {
    name: "Córdoba",
    locations: [
      { parish: "Parroquia de Cristo Rey y Nuestra Señora del Valle", schedule: "Segundos lunes de mes, 20:30" },
    ],
  },
  {
    name: "Pamplona",
    locations: [
      { parish: "Santa María la Esperanza (Doniantzu)", schedule: "Terceros jueves de mes" },
      { parish: "San Esteban", schedule: "Segundos jueves de mes" },
    ],
  },
  {
    name: "San Sebastián",
    locations: [
      { parish: "Parroquia de San Ignacio de Gros", schedule: "Terceros viernes de mes, 20:30" },
    ],
  },
  {
    name: "Zumárraga",
    locations: [
      { parish: "Parroquia de El Salvador", schedule: "Primeros sábados de mes, 16:30" },
    ],
  },
  {
    name: "Málaga",
    locations: [
      { parish: "Un viernes al mes, rotando por cada parroquia", schedule: "Consultar calendario" },
    ],
  },
  {
    name: "Mallorca",
    locations: [
      { parish: "Convento de las Clarisas de Palma", schedule: "Día 13 de cada mes, 19:30" },
    ],
  },
  {
    name: "Granada",
    locations: [
      { parish: "Parroquia Nuestra Señora de Gracia", schedule: "Primeros o segundos lunes de mes, 20:00" },
      { parish: "Parroquia del Espíritu Santo", schedule: "Tercer viernes de mes, 20:00" },
    ],
  },
  {
    name: "Zaragoza",
    locations: [
      { parish: "Parroquia de Santa Rafaela María", schedule: "Primeros viernes de mes, 20:30" },
    ],
  },
  {
    name: "Toledo",
    locations: [
      { parish: "Toledo capital y provincia — diversas parroquias", schedule: "Consultar parroquia más cercana" },
    ],
  },
  {
    name: "Valladolid",
    locations: [
      { parish: "Diversas parroquias de la provincia", schedule: "Consultar parroquia más cercana" },
    ],
  },
  {
    name: "Valencia",
    locations: [
      { parish: "Diversas parroquias", schedule: "Consultar parroquia más cercana" },
    ],
  },
  {
    name: "Almería",
    locations: [
      { parish: "Diversas parroquias", schedule: "Consultar parroquia más cercana" },
    ],
  },
];

const world = [
  {
    country: "Argentina",
    cities: [
      { name: "Buenos Aires", locations: ["Consultar parroquias adheridas"] },
      { name: "Córdoba", locations: ["Consultar parroquias adheridas"] },
    ],
  },
  {
    country: "Uruguay",
    cities: [
      { name: "Montevideo", locations: ["Consultar parroquias adheridas"] },
      { name: "Punta del Este", locations: ["Consultar parroquias adheridas"] },
    ],
  },
  {
    country: "Portugal",
    cities: [
      { name: "Lisboa", locations: ["Consultar parroquias adheridas"] },
      { name: "Fátima", locations: ["Consultar parroquias adheridas"] },
    ],
  },
  {
    country: "Luxemburgo",
    cities: [
      { name: "Luxemburgo", locations: ["Consultar parroquias adheridas"] },
    ],
  },
  {
    country: "Estados Unidos",
    cities: [
      { name: "Miami", locations: ["Consultar parroquias adheridas"] },
    ],
  },
];

const cityCoordinates: Record<string, [number, number]> = { Madrid: [-3.704, 40.417], Sevilla: [-5.984, 37.389], Córdoba: [-4.779, 37.884], Pamplona: [-1.645, 42.816], "San Sebastián": [-1.974, 43.321], Zumárraga: [-2.023, 43.088], Málaga: [-4.421, 36.721], Mallorca: [2.650, 39.570], Granada: [-3.599, 37.177], Zaragoza: [-0.889, 41.648], Toledo: [-4.027, 39.862], Valladolid: [-4.724, 41.652], Valencia: [-0.377, 39.470], Almería: [-2.463, 36.835] };
const mapPlaces = spainCities.flatMap((city) => city.locations.map((location) => {
  const moraleja = location.parish.includes("Ntra. Sra. de la Moraleja");
  return { city: city.name, parish: location.parish, schedule: location.schedule, coordinates: moraleja ? [-3.636413, 40.530622] as [number, number] : cityCoordinates[city.name] ?? [-3.704, 40.417], query: moraleja ? "Parroquia Nuestra Señora de la Moraleja, Calle Nardo 44, 28109 Alcobendas" : `${location.parish}, ${city.name}, España`, verifiedAddress: moraleja ? "Calle del Nardo, 44 · 28109 Alcobendas, Madrid" : undefined };
}));
