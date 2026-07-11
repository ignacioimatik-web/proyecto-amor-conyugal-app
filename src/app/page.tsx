"use client";

import { useEffect, useMemo, useState } from "react";
import { InternalMenu } from "@/components/internal-menu";

type Gospel = { book: string; reference: string; verses: { number: number; text: string }[] };
type Reading = { date: string; celebration: string; color: string; gospel: Gospel; source: string };
type OfficialPost = { title: string; date: string; excerpt: string; link: string; audio: string | null };
type Retreat = { title: string; date: string; country: string; excerpt: string; link: string; image: string | null };
type RetreatGroup = { country: string; items: Retreat[] };
type OfficialResource = { title: string; excerpt: string; link: string; image: string | null };
type OfficialContent = { commentaries: OfficialPost[]; retreats: { upcoming: RetreatGroup[]; past: RetreatGroup[] }; resources: { testimonies: OfficialResource | null; adorations: OfficialResource | null }; source: string };

const START = "2026-07-11";
const END = "2029-07-11";
const DAY = 86_400_000;

function addDays(date: string, amount: number) {
  const value = new Date(`${date}T12:00:00`);
  value.setDate(value.getDate() + amount);
  return value.toISOString().slice(0, 10);
}

function displayDate(date: string) {
  return new Intl.DateTimeFormat("es-ES", { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(new Date(`${date}T12:00:00`));
}

function ceeUrl(date: string) {
  const [year, month, day] = date.split("-");
  return `https://www.conferenciaepiscopal.es/?cid=mc-948a6a8e8cd15db324902317a630b853&dy=${Number(day)}&format=list&mcat=1&month=${month}&time=day&tmpl=component&yr=${year}`;
}

export default function Home() {
  const [date, setDate] = useState(START);
  const [reading, setReading] = useState<Reading | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);
  const [official, setOfficial] = useState<OfficialContent | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true); setError(""); setSaved(false);
    fetch(`/api/evangelio?date=${date}`, { signal: controller.signal })
      .then(async (response) => {
        const payload = await response.json();
        if (!response.ok) throw new Error(payload.error);
        setReading(payload);
      })
      .catch((reason) => { if (reason.name !== "AbortError") setError(reason.message || "No se pudo cargar la lectura."); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, [date]);

  useEffect(() => {
    fetch("/api/proyecto-amor")
      .then(async (response) => {
        if (!response.ok) throw new Error();
        setOfficial(await response.json());
      })
      .catch(() => setOfficial(null));
  }, []);

  const progress = useMemo(() => Math.round(((new Date(`${date}T12:00:00`).getTime() - new Date(`${START}T12:00:00`).getTime()) / DAY / 1095) * 100), [date]);
  const previous = date > START ? addDays(date, -1) : null;
  const next = date < END ? addDays(date, 1) : null;

  return <main className="min-h-screen bg-[#f7f3ed] text-[#24342e]">
    <section className="mx-auto max-w-6xl px-5 pb-16 pt-5 sm:px-8">
      <nav className="flex items-center justify-end py-3"><InternalMenu /></nav>
      <a href="https://proyectoamorconyugal.es/" target="_blank" rel="noreferrer" className="mt-2 block overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-[#e4dbd0] transition hover:shadow-md" aria-label="Proyecto Amor Conyugal, web oficial"><img src="/proyecto-amor-conyugal-logo.webp" alt="Proyecto Amor Conyugal" className="block h-auto w-full" /></a>

      <div className="mt-10 grid items-start gap-10 lg:grid-cols-[.88fr_1.12fr] lg:gap-16">
        <div className="lg:sticky lg:top-8"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#d96c4a]">La Palabra cada día</p><h1 className="mt-4 font-serif text-5xl leading-[.98] tracking-tight text-[#20342c] sm:text-6xl">Tres años para volver a encontrarnos.</h1><p className="mt-6 max-w-md text-lg leading-8 text-[#5e6a63]">Elegid un día, leed el Evangelio despacio y dejaos mirar por el Señor.</p>
          <p className="mt-9 text-xs font-bold uppercase tracking-[.16em] text-[#66736b]">Evangelio para matrimonios · 2026 — 2029</p><div className="mt-3 rounded-3xl border border-[#e4dbd0] bg-[#fffdf9] p-5 shadow-sm"><label className="block text-xs font-bold uppercase tracking-[.15em] text-[#8a847c]" htmlFor="date">Elegir fecha</label><input id="date" value={date} min={START} max={END} onChange={(e) => setDate(e.target.value)} type="date" className="mt-3 w-full rounded-2xl border border-[#dbd3c8] bg-white px-4 py-3 text-sm font-semibold outline-none focus:border-[#d96c4a]" />
            <div className="mt-4 flex gap-2"><button disabled={!previous} onClick={() => previous && setDate(previous)} className="flex-1 rounded-xl border border-[#ddd5ca] py-2 text-sm disabled:opacity-35">← Anterior</button><button disabled={!next} onClick={() => next && setDate(next)} className="flex-1 rounded-xl border border-[#ddd5ca] py-2 text-sm disabled:opacity-35">Siguiente →</button></div>
            <div className="mt-5"><div className="flex justify-between text-xs text-[#7a817c]"><span>Camino disponible</span><span>{progress}%</span></div><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#ece5dc]"><div className="h-full rounded-full bg-[#d96c4a]" style={{ width: `${Math.max(1, progress)}%` }} /></div></div>
          </div>
          <div className="mt-7 rounded-3xl bg-[#254b3d] p-6 text-[#fffaf2]"><p className="text-xs font-bold tracking-[.18em] text-[#c3d5c9]">UN RITUAL SENCILLO</p><ol className="mt-4 space-y-3 text-sm leading-6 text-[#dce8df]"><li><b className="text-white">01</b> Leed el texto sin prisa.</li><li><b className="text-white">02</b> Compartid qué palabra os toca.</li><li><b className="text-white">03</b> Terminad con una oración breve.</li></ol></div>
        </div>

        <article className="overflow-hidden rounded-[2.3rem] border border-[#e6ddd2] bg-[#fffdf9] shadow-xl shadow-[#2d4638]/5"><div className="bg-[#254b3d] px-7 py-8 text-[#fffaf2] sm:px-10"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#c3d5c9]">Evangelio del día</p><h2 className="mt-3 font-serif text-3xl capitalize sm:text-4xl">{displayDate(date)}</h2>{reading && <p className="mt-4 text-sm text-[#d0dfd4]">{reading.celebration} · <b>{reading.gospel.reference}</b></p>}</div>
          <div className="px-7 py-8 sm:px-10 sm:py-10">
            {loading && <div className="space-y-4"><div className="h-5 w-1/3 animate-pulse rounded bg-[#eee7de]" /><div className="h-4 animate-pulse rounded bg-[#f0ebe4]" /><div className="h-4 animate-pulse rounded bg-[#f0ebe4]" /><div className="h-4 w-4/5 animate-pulse rounded bg-[#f0ebe4]" /></div>}
            {error && <div className="rounded-2xl bg-[#fbebe6] p-5 text-sm leading-6 text-[#9b4531]">{error}</div>}
            {!loading && reading && <><p className="font-serif text-2xl text-[#243d32]">Lectura del santo Evangelio según san {reading.gospel.book}</p><div className="mt-7 space-y-5 text-[17px] leading-8 text-[#45534b]">{reading.gospel.verses.map((verse) => <p key={verse.number}><sup className="mr-2 text-xs font-bold text-[#d96c4a]">{verse.number}</sup>{verse.text}</p>)}</div><div className="mt-10 flex flex-wrap gap-3 border-t border-[#ece5dc] pt-6"><button onClick={() => setSaved(!saved)} className="rounded-full bg-[#203f34] px-5 py-3 text-sm font-bold text-white">{saved ? "✓ Guardado para orar juntos" : "♡ Guardar para esta noche"}</button><a href={ceeUrl(date)} target="_blank" rel="noreferrer" className="rounded-full border border-[#d7cec2] px-5 py-3 text-sm font-bold">Contrastar con la CEE ↗</a></div><p className="mt-6 text-xs leading-5 text-[#879087]">{reading.source} La selección litúrgica se sirve como orientación y debe contrastarse con la CEE cuando exista una celebración propia de España.</p></>}
          </div>
        </article>
      </div>
    </section>
    <section className="border-y border-[#e2dbd0] bg-[#fffaf3] py-16"><div className="mx-auto max-w-6xl px-5 sm:px-8"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#d96c4a]">En comunión con la fuente</p><h2 className="mt-3 font-serif text-4xl">Proyecto Amor Conyugal, hoy.</h2></div><a href="https://proyectoamorconyugal.es/" target="_blank" rel="noreferrer" className="rounded-full border border-[#d7cec2] bg-white px-5 py-3 text-sm font-bold">Visitar web oficial ↗</a></div>
      {!official && <div className="mt-9 grid gap-5 md:grid-cols-3">{[1, 2, 3].map((item) => <div key={item} className="h-44 animate-pulse rounded-3xl bg-[#f0e9df]" />)}</div>}
      {official && <><div className="mt-9">{official.commentaries[0] && <FeaturedReflection post={official.commentaries[0]} />}</div>{official.commentaries.length > 1 && <><p className="mt-8 text-xs font-bold uppercase tracking-[.16em] text-[#8b8176]">También esta semana</p><div className="mt-3 grid gap-5 md:grid-cols-2">{official.commentaries.slice(1).map((post) => <ReflectionCard key={post.link} post={post} />)}</div></>
      }
      {(official.resources.testimonies || official.resources.adorations) && <div className="mt-10 grid gap-6 lg:grid-cols-2">{official.resources.testimonies && <OfficialResource resource={official.resources.testimonies} kind="testimonios" />}{official.resources.adorations && <OfficialResource resource={official.resources.adorations} kind="adoraciones" />}</div>}
      {official.retreats.upcoming.length > 0 && <RetreatCollection title="Próximos retiros y misiones" subtitle="Las 5 próximas convocatorias, ordenadas por país." groups={official.retreats.upcoming} />}
      {official.retreats.past.length > 0 && <RetreatCollection title="Retiros ya celebrados" subtitle="Las 3 convocatorias más recientes, como memoria de comunidad." groups={official.retreats.past} past />}
      <p className="mt-6 text-xs leading-5 text-[#879087]">{official.source}</p></>}
    </div></section>
    <footer className="border-t border-[#ded7cd] px-5 py-8 text-center text-xs leading-5 text-[#748078]">Amor Conyugal · Evangelios en castellano de dominio público · Calendario romano con atribución CC BY 4.0.</footer>
  </main>;
}

function RetreatCollection({ title, subtitle, groups, past = false }: { title: string; subtitle: string; groups: RetreatGroup[]; past?: boolean }) {
  return <section className={`mt-10 rounded-[2rem] p-7 sm:p-8 ${past ? "bg-[#f0ece5]" : "bg-[#e8ddd0]"}`}><p className="text-xs font-bold uppercase tracking-[.15em] text-[#b75e42]">Retiros y misiones</p><div className="mt-2"><h3 className="font-serif text-3xl">{title}</h3><p className="mt-1 text-sm text-[#68736b]">{subtitle}</p></div><div className="mt-7 grid gap-6 md:grid-cols-2">{groups.map((group) => <section key={group.country} className="rounded-3xl bg-[#ffffff75] p-4"><div className="mb-4 flex items-center gap-3"><span className="h-px flex-1 bg-[#cfc2b4]" /><p className="text-xs font-bold uppercase tracking-[.18em] text-[#8b5d49]">{group.country}</p><span className="h-px flex-1 bg-[#cfc2b4]" /></div><div className="space-y-4">{group.items.map((retreat) => <article key={retreat.link} className="overflow-hidden rounded-3xl bg-[#fffaf2] shadow-sm"><div className="relative h-40 bg-[#d4c7b9]">{retreat.image ? <img src={retreat.image} alt={retreat.title} className="h-full w-full object-cover" /> : <div className="grid h-full place-items-center text-3xl text-[#b8795d]">♡</div>}<span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold ${past ? "bg-[#f0ebe4] text-[#7a7267]" : "bg-[#254b3d] text-white"}`}>{displayDate(retreat.date)}</span></div><div className="p-5"><h4 className="font-serif text-xl leading-tight">{retreat.title}</h4><p className="mt-3 line-clamp-3 text-sm leading-6 text-[#69766f]">{retreat.excerpt}</p><a href={retreat.link} target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-full bg-[#203f34] px-4 py-2 text-xs font-bold text-white">Ver información oficial ↗</a></div></article>)}</div></section>)}</div></section>;
}

function FeaturedReflection({ post }: { post: OfficialPost }) {
  return <article className="overflow-hidden rounded-[2rem] bg-[#254b3d] p-7 text-[#fffaf2] shadow-xl shadow-[#254b3d]/10 sm:p-9"><div className="grid gap-7 lg:grid-cols-[1.15fr_.85fr] lg:items-end"><div><p className="inline-flex rounded-full bg-[#d96c4a] px-3 py-1 text-xs font-bold uppercase tracking-[.14em] text-white">Reflexión de hoy</p><p className="mt-4 text-sm font-semibold text-[#c9d9cf] capitalize">{displayDate(post.date)}</p><h3 className="mt-3 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">{post.title}</h3><p className="mt-5 max-w-2xl text-sm leading-6 text-[#d5e2d9]">{post.excerpt}</p></div><div className="rounded-3xl bg-[#fffaf2] p-5 text-[#243d32]"><p className="text-xs font-bold uppercase tracking-[.14em] text-[#557265]">Orad juntos</p>{post.audio ? <><p className="mt-2 font-serif text-xl">Escuchad la reflexión</p><audio controls preload="metadata" className="mt-4 h-10 w-full accent-[#d96c4a]"><source src={post.audio} type="audio/mpeg" />Tu navegador no admite audio integrado.</audio></> : <p className="mt-2 text-sm text-[#68736b]">La reflexión está disponible en la fuente oficial.</p>}<a href={post.link} target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-full bg-[#203f34] px-4 py-2 text-xs font-bold text-white">Leer en la fuente ↗</a></div></div></article>;
}

function ReflectionCard({ post }: { post: OfficialPost }) {
  return <article className="flex flex-col rounded-3xl border border-[#e8dfd4] bg-white p-6"><p className="text-xs font-bold uppercase tracking-[.13em] text-[#bb6649]">Reflexión oficial · {displayDate(post.date)}</p><h3 className="mt-3 font-serif text-2xl leading-tight">{post.title}</h3><p className="mt-4 line-clamp-3 text-sm leading-6 text-[#69766f]">{post.excerpt}</p>{post.audio && <div className="mt-6 rounded-2xl bg-[#edf3ed] p-4"><div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[.13em] text-[#456454]"><span className="grid h-6 w-6 place-items-center rounded-full bg-[#254b3d] text-[10px] text-white">▶</span> Escuchar reflexión</div><audio controls preload="metadata" className="h-9 w-full accent-[#d96c4a]"><source src={post.audio} type="audio/mpeg" />Tu navegador no admite audio integrado.</audio></div>}<div className="mt-auto flex flex-wrap gap-2 pt-6"><a href={post.link} target="_blank" rel="noreferrer" className="rounded-full bg-[#203f34] px-4 py-2 text-xs font-bold text-white">Leer en la fuente ↗</a></div></article>;
}

function OfficialResource({ resource, kind }: { resource: OfficialResource; kind: "testimonios" | "adoraciones" }) {
  const isTestimony = kind === "testimonios";
  return <article className={`overflow-hidden rounded-[2rem] ${isTestimony ? "bg-[#d96c4a]" : "bg-[#254b3d]"} text-[#fffaf2]`}><div className="grid h-full sm:grid-cols-[.85fr_1.15fr]">{resource.image && <img src={resource.image} alt={resource.title} className="h-48 w-full object-cover sm:h-full" />}<div className="p-7 sm:p-8"><p className="text-xs font-bold uppercase tracking-[.16em] text-white/75">{isTestimony ? "Historias que dan esperanza" : "Un lugar para volver al centro"}</p><h3 className="mt-3 font-serif text-3xl">{resource.title}</h3><p className="mt-4 line-clamp-5 text-sm leading-6 text-white/85">{resource.excerpt}</p><a href={resource.link} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-[#fffaf2] px-4 py-2 text-xs font-bold text-[#254b3d]">{isTestimony ? "Leer testimonios ↗" : "Descubrir adoraciones ↗"}</a></div></div></article>;
}
