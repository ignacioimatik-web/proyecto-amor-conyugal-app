import { notFound, redirect } from "next/navigation";
import { InternalMenu } from "@/components/internal-menu";
import { proxiedSlugs } from "@/lib/menu";

type OfficialPage = { title: { rendered: string }; content: { rendered: string }; link: string };

const localPages: Record<string, { title: string; content: string }> = {
  libros: { title: "Libros", content: "<p>Una biblioteca para acompañar el crecimiento del amor conyugal: propuestas para rezar, dialogar y caminar juntos.</p><h2>Para seguir creciendo</h2><p>Los libros y materiales del Proyecto ayudan a profundizar en la vocación matrimonial, a abrir conversaciones importantes y a llevar la oración a la vida cotidiana.</p><ul><li>Lecturas para el matrimonio y la familia.</li><li>Materiales para talleres y grupos.</li><li>Recursos para preparar y prolongar un retiro.</li></ul><p>Para conocer las novedades y los materiales disponibles, consultad los canales oficiales del Proyecto.</p>" },
  tutores: { title: "Pastorcillos", content: "<p>Los Pastorcillos acompañan a los matrimonios en su camino, ayudándoles a cuidar la fidelidad a la oración, al diálogo y a la vida de comunidad.</p><h2>Un servicio de acompañamiento</h2><p>No se trata de dar recetas, sino de caminar cerca: escuchar, animar y recordar que Cristo está en el centro del sacramento del matrimonio.</p><h2>Para matrimonios y comunidades</h2><ul><li>Encuentro periódico para compartir el camino.</li><li>Apoyo para vivir la espiritualidad conyugal en lo concreto.</li><li>Vínculo con la comunidad local de Proyecto Amor Conyugal.</li></ul><p>Si queréis saber cómo participar o necesitáis acompañamiento, escribidnos desde la sección de contacto.</p>" },
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
  if (slug === "app") redirect("https://app.proyectoamorconyugal.es/ords/r/pac/pac/login");
  if (!proxiedSlugs.includes(slug)) notFound();
  const page = await loadPage(slug);
  if (!page) notFound();
  return <main className="min-h-screen bg-[#f7f3ed] text-[#24342e]"><div className="mx-auto max-w-6xl px-5 pb-20 pt-5 sm:px-8"><header><a href="/" className="block overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-[#e4dbd0]"><img src="/proyecto-amor-conyugal-logo.webp" alt="Proyecto Amor Conyugal" className="block h-auto w-full" /></a><InternalMenu /></header><article className="mt-8 overflow-hidden rounded-[2rem] bg-[#fffdf9] shadow-sm"><div className="bg-[#254b3d] px-7 py-9 text-[#fffaf2] sm:px-12"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#c3d5c9]">Proyecto Amor Conyugal</p><h1 className="mt-3 font-serif text-4xl sm:text-5xl">{page.title}</h1></div><div className="official-content px-7 py-9 sm:px-12 sm:py-12" dangerouslySetInnerHTML={{ __html: page.content }} /></article></div></main>;
}
