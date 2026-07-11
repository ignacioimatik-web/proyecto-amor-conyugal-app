"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

type Place = { city: string; parish: string; schedule: string; coordinates: [number, number]; query: string; verifiedAddress?: string };

const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export function AdorationMap({ places }: { places: Place[] }) {
  const node = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const searchSession = useRef(typeof crypto !== "undefined" ? crypto.randomUUID() : Math.random().toString(36).slice(2));
  const [selected, setSelected] = useState(places[0]);
  const [address, setAddress] = useState("Selecciona una parroquia para validar su dirección.");
  const [destination, setDestination] = useState<[number, number] | null>(null);

  useEffect(() => {
    if (!node.current || mapRef.current || !token) return;
    mapboxgl.accessToken = token;
    const map = new mapboxgl.Map({ container: node.current, style: "mapbox://styles/mapbox/standard", center: [-3.7, 40.2], zoom: 4.8, pitch: 45, bearing: -12, config: { basemap: { lightPreset: "dusk", show3dObjects: true } } });
    map.addControl(new mapboxgl.NavigationControl({ visualizePitch: true }), "top-right");
    map.on("style.load", () => {
      map.setFog({});
      places.forEach((place) => {
        const marker = new mapboxgl.Marker({ color: "#d96c4a", scale: 0.82 }).setLngLat(place.coordinates).addTo(map);
        marker.getElement().addEventListener("click", () => focus(place));
      });
    });
    mapRef.current = map;
    return () => { map.remove(); mapRef.current = null; };
  }, [places]);

  async function focus(place: Place) {
    setSelected(place);
    setAddress("Buscando dirección real…");
    setDestination(null);
    mapRef.current?.flyTo({ center: place.coordinates, zoom: 14.5, pitch: 62, bearing: -20, essential: true });
    if (place.verifiedAddress) {
      setAddress(place.verifiedAddress);
      setDestination(place.coordinates);
      mapRef.current?.flyTo({ center: place.coordinates, zoom: 16, pitch: 65, bearing: -22, essential: true });
      return;
    }
    try {
      const query = place.query.replace(/^Vicaría[^—]*—\s*/, "");
      const suggest = await fetch(`https://api.mapbox.com/search/searchbox/v1/suggest?q=${encodeURIComponent(query)}&limit=1&session_token=${searchSession.current}&access_token=${token}`);
      const suggestion = (await suggest.json() as { suggestions?: { mapbox_id: string; full_address?: string }[] }).suggestions?.[0];
      if (!suggestion) throw new Error();
      const retrieve = await fetch(`https://api.mapbox.com/search/searchbox/v1/retrieve/${suggestion.mapbox_id}?session_token=${searchSession.current}&access_token=${token}`);
      const feature = (await retrieve.json() as { features?: { geometry?: { coordinates?: [number, number] }; properties?: { full_address?: string; place_formatted?: string } }[] }).features?.[0];
      const coordinates = feature?.geometry?.coordinates;
      if (!coordinates) throw new Error();
      setAddress(feature.properties?.full_address ?? feature.properties?.place_formatted ?? "Dirección encontrada");
      setDestination(coordinates);
      mapRef.current?.flyTo({ center: coordinates, zoom: 16, pitch: 65, bearing: -22, essential: true });
    } catch { setAddress("No se ha encontrado una dirección exacta; prueba el enlace de búsqueda."); }
  }

  const directions = destination ? `https://www.google.com/maps/dir/?api=1&destination=${destination[1]},${destination[0]}` : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${selected.parish}, ${selected.city}`)}`;
  if (!token) return <div className="rounded-[2rem] border border-[#e4dbd0] bg-[#fffdf9] p-6 text-sm text-[#5e6a63]">El mapa se está preparando. Mientras tanto, consulta las adoraciones por ciudad más abajo.</div>;
  return <div className="overflow-hidden rounded-[2rem] border border-[#e4dbd0] bg-[#fffdf9] shadow-sm">
    <div className="grid lg:h-[min(60vh,46rem)] lg:grid-cols-[1fr_19rem]">
      <div ref={node} className="h-[34rem] lg:h-full" aria-label="Mapa interactivo de adoraciones" />
      <aside className="flex min-h-0 flex-col border-t border-[#e4dbd0] p-5 lg:h-full lg:border-l lg:border-t-0">
        <p className="text-xs font-bold uppercase tracking-[.16em] text-[#d96c4a]">Mapa 3D</p>
        <h3 className="mt-2 font-serif text-2xl text-[#20342c]">{selected.city}</h3>
        <p className="mt-4 text-sm font-bold text-[#254b3d]">{selected.parish}</p>
        <p className="mt-2 text-sm leading-6 text-[#5e6a63]">{selected.schedule}</p>
        <p className="mt-2 text-xs leading-5 text-[#68736b]">{address}</p>
        <a href={directions} target="_blank" rel="noreferrer" className="mt-5 block rounded-full bg-[#254b3d] px-4 py-3 text-center text-sm font-bold text-white">Cómo llegar ↗</a>
        <div className="mt-5 min-h-0 flex-1 space-y-1 overflow-y-auto border-t border-[#ece5dc] pt-4">{places.map((place) => <button type="button" onClick={() => void focus(place)} key={`${place.city}-${place.parish}`} className={`block w-full rounded-xl px-3 py-2 text-left text-xs font-semibold ${place === selected ? "bg-[#f1e8dc] text-[#254b3d]" : "text-[#66736b] hover:bg-[#f7f3ed]"}`}>{place.city} · {place.parish}</button>)}</div>
      </aside>
    </div>
  </div>;
}
