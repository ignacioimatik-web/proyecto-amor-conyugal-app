import { NextResponse } from "next/server";

type WordPressPost = { date: string; title: { rendered: string }; excerpt: { rendered: string }; content: { rendered: string }; link: string };
type WordPressPage = { title: { rendered: string }; content: { rendered: string }; link: string };
type Retreat = { title: string; date: string; country: string; excerpt: string; link: string; image: string | null };

const months: Record<string, string> = { ENERO: "01", FEBRERO: "02", MARZO: "03", ABRIL: "04", MAYO: "05", JUNIO: "06", JULIO: "07", AGOSTO: "08", SEPTIEMBRE: "09", OCTUBRE: "10", NOVIEMBRE: "11", DICIEMBRE: "12" };
const countries: [RegExp, string][] = [[/\bSEVILLA\b|\bBILBAO\b|\bASTURIAS\b|\bGIJ[ÓO]N\b|\bESPAÑA\b/i, "España"], [/\bCHILE\b/i, "Chile"], [/\bM[ÉE]XICO\b/i, "México"], [/\bCOLOMBIA\b/i, "Colombia"], [/\bARGENTINA\b|\bBUENOS AIRES\b/i, "Argentina"], [/\bPER[ÚU]\b/i, "Perú"], [/\bECUADOR\b/i, "Ecuador"], [/\bURUGUAY\b/i, "Uruguay"], [/\bPARAGUAY\b/i, "Paraguay"], [/\bBOLIVIA\b/i, "Bolivia"], [/\bPORTUGAL\b|\bLISBOA\b/i, "Portugal"], [/\bITALIA\b/i, "Italia"], [/\bFRANCIA\b/i, "Francia"], [/\bHOLANDA\b|\bPA[ÍI]SES BAJOS\b/i, "Países Bajos"], [/\bESTADOS UNIDOS\b|\bUSA\b/i, "Estados Unidos"]];

function stripHtml(value: string) {
  return value
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[^;]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function publicPost(post: WordPressPost) {
  const audio = post.content.rendered.match(/https?:[^"'\s<>]+\.mp3[^"'\s<>]*/i)?.[0]?.replace(/&amp;/g, "&") ?? null;
  return {
    title: stripHtml(post.title.rendered),
    date: post.date.slice(0, 10),
    excerpt: stripHtml(post.excerpt.rendered).slice(0, 240),
    content: stripHtml(post.content.rendered).slice(0, 12000),
    link: post.link,
    audio,
  };
}

function eventDate(title: string) {
  const match = title.toUpperCase().match(/(\d{1,2})(?:\s*(?:-|–|A|AL)?\s*\d{1,2})?\s+(ENERO|FEBRERO|MARZO|ABRIL|MAYO|JUNIO|JULIO|AGOSTO|SEPTIEMBRE|OCTUBRE|NOVIEMBRE|DICIEMBRE)\s+(20\d{2})/);
  if (!match) return null;
  return `${match[3]}-${months[match[2]]}-${match[1].padStart(2, "0")}`;
}

function originalImage(content: string) {
  const sourceSet = content.match(/srcset=["']([^"']+)["']/i)?.[1];
  const candidates = sourceSet?.split(",").map((item) => item.trim().split(" ")[0]) ?? [];
  const source = candidates[0] ?? content.match(/<img[^>]+src=["']([^"']+)["']/i)?.[1];
  return source?.replace(/&amp;/g, "&") ?? null;
}

function publicRetreat(post: WordPressPost): Retreat | null {
  const title = stripHtml(post.title.rendered);
  const date = eventDate(title);
  if (!date) return null;
  const combined = `${title} ${stripHtml(post.content.rendered)}`;
  return { title, date, country: countries.find(([pattern]) => pattern.test(combined))?.[1] ?? "Otros países", excerpt: stripHtml(post.excerpt.rendered).slice(0, 300), link: post.link, image: originalImage(post.content.rendered) };
}

function publicPage(page: WordPressPage) {
  return { title: stripHtml(page.title.rendered), excerpt: stripHtml(page.content.rendered).slice(0, 420), link: page.link, image: originalImage(page.content.rendered) };
}

function grouped(retreats: Retreat[]) {
  return Object.entries(retreats.reduce<Record<string, Retreat[]>>((groups, retreat) => {
    (groups[retreat.country] ??= []).push(retreat);
    return groups;
  }, {})).sort(([a], [b]) => a.localeCompare(b, "es")).map(([country, items]) => ({ country, items }));
}

export async function GET() {
  try {
    const [pages, resourcePages] = await Promise.all([Promise.all(Array.from({ length: 12 }, async (_, index) => {
      const response = await fetch(`https://proyectoamorconyugal.es/wp-json/wp/v2/posts?per_page=100&page=${index + 1}&_fields=date,title,excerpt,content,link`, { next: { revalidate: 3600 } });
      if (!response.ok) throw new Error("La web oficial no está disponible ahora.");
      return response.json() as Promise<WordPressPost[]>;
    })), Promise.all(["testimonios", "adoraciones-por-los-matrimonios"].map(async (slug) => {
      const response = await fetch(`https://proyectoamorconyugal.es/wp-json/wp/v2/pages?slug=${slug}&_fields=title,content,link`, { next: { revalidate: 3600 } });
      if (!response.ok) throw new Error("La sección oficial no está disponible ahora.");
      const [page] = await response.json() as WordPressPage[];
      return page ? publicPage(page) : null;
    }))]);
    const all = pages.flat();
    const spanish = all.filter((post) => !/proyectoamorconyugal\.es\/(en|fr|it|nl|pt)\//.test(post.link));
    const commentaries = spanish.filter((post) => /comentario para matrimonios/i.test(stripHtml(post.title.rendered))).slice(0, 3).map(publicPost);
    const today = new Date().toISOString().slice(0, 10);
    const allRetreats = spanish.filter((post) => /retiro matrimonios/i.test(stripHtml(post.title.rendered))).map(publicRetreat).filter((retreat): retreat is Retreat => retreat !== null);
    const upcoming = allRetreats.filter((retreat) => retreat.date >= today).sort((a, b) => a.date.localeCompare(b.date)).slice(0, 5);
    const past = allRetreats.filter((retreat) => retreat.date < today).sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
    return NextResponse.json({ commentaries, retreats: { upcoming: grouped(upcoming), past: grouped(past) }, resources: { testimonies: resourcePages[0], adorations: resourcePages[1] }, source: "Las tres últimas reflexiones y sus audios se actualizan desde Proyecto Amor Conyugal cada hora. Se muestran con atribución y enlace a la fuente oficial." });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "No se pudo cargar la fuente oficial." }, { status: 502 });
  }
}
