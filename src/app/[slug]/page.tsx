import { notFound } from "next/navigation";
import { InternalMenu } from "@/components/internal-menu";
import { proxiedSlugs } from "@/lib/menu";

type OfficialPage = { title: { rendered: string }; content: { rendered: string }; link: string };

const localPages: Record<string, { title: string; content: string }> = {
  libros: { title: "Libros", content: "<p>Una biblioteca para acompañar el crecimiento del amor conyugal: propuestas para rezar, dialogar y caminar juntos.</p><p>Esta sección reunirá los recursos editoriales recomendados por Proyecto Amor Conyugal.</p>" },
  app: { title: "La app", content: "<p>Este espacio reúne el Evangelio, las reflexiones, los testimonios y las convocatorias de Proyecto Amor Conyugal en una experiencia pensada para el día a día.</p><p>Volved cada mañana, elegid un momento para escuchar juntos y guardad lo que os ayude a amar mejor.</p>" },
};

function cleanHtml(html: string) {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<iframe[^>]*>[\s\S]*?<\/iframe>/gi, "")
    .replace(/\son\w+=["'][^"']*["']/gi, "")
    .replace(/<a\b([^>]*?)>/gi, '<a$1 target="_blank" rel="noreferrer">');
}

async function loadPage(slug: string) {
  if (localPages[slug]) return localPages[slug];
  const response = await fetch(`https://proyectoamorconyugal.es/wp-json/wp/v2/pages?slug=${slug}&_fields=title,content,link`, { next: { revalidate: 3600 } });
  if (!response.ok) return null;
  const [page] = await response.json() as OfficialPage[];
  return page ? { title: page.title.rendered.replace(/<[^>]+>/g, ""), content: cleanHtml(page.content.rendered) } : null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await loadPage(slug);
  return { title: page ? `${page.title} — Amor Conyugal` : "Amor Conyugal" };
}

export default async function SectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!proxiedSlugs.includes(slug)) notFound();
  const page = await loadPage(slug);
  if (!page) notFound();
  return <main className="min-h-screen bg-[#f7f3ed] text-[#24342e]"><div className="mx-auto max-w-5xl px-5 pb-20 pt-5 sm:px-8"><header><div className="flex justify-end"><InternalMenu /></div><a href="/" className="mt-4 block overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-[#e4dbd0]"><img src="/proyecto-amor-conyugal-header.jpg" alt="Proyecto Amor Conyugal" className="block h-auto w-full" /></a></header><article className="mt-10 overflow-hidden rounded-[2rem] bg-[#fffdf9] shadow-sm"><div className="bg-[#254b3d] px-7 py-9 text-[#fffaf2] sm:px-12"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#c3d5c9]">Proyecto Amor Conyugal</p><h1 className="mt-3 font-serif text-4xl sm:text-5xl">{page.title}</h1></div><div className="official-content px-7 py-9 sm:px-12 sm:py-12" dangerouslySetInnerHTML={{ __html: page.content }} /></article></div></main>;
}
