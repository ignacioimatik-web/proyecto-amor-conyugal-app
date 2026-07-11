import { NextRequest, NextResponse } from "next/server";
import gospels from "@/data/gospels-rv1909.json";

const BOOKS: Record<string, keyof typeof gospels> = { Mt: "MAT", Mc: "MRK", Lc: "LUK", Jn: "JHN" };
const DATE = /^\d{4}-\d{2}-\d{2}$/;

function versesFor(reference: string) {
  const match = reference.match(/(Mt|Mc|Lc|Jn)\s*(\d+)\s*,\s*(\d+)[a-z]?\s*(?:[-.]\s*(?:(\d+)\s*,\s*)?(\d+)[a-z]?)?/i);
  if (!match) return null;
  const [, shortBook, startChapter, startVerse, endChapterRaw, endVerseRaw] = match;
  const book = BOOKS[`${shortBook[0].toUpperCase()}${shortBook.slice(1).toLowerCase()}`];
  if (!book) return null;
  const endChapter = Number(endChapterRaw || startChapter);
  const start = Number(startVerse);
  const end = Number(endVerseRaw || startVerse);
  const result: { number: number; text: string }[] = [];
  for (let chapter = Number(startChapter); chapter <= endChapter; chapter++) {
    const chapterVerses = gospels[book].chapters[String(chapter) as keyof typeof gospels[typeof book]["chapters"]];
    if (!chapterVerses) continue;
    const from = chapter === Number(startChapter) ? start : 1;
    const to = chapter === endChapter ? end : Number.MAX_SAFE_INTEGER;
    for (const [number, text] of Object.entries(chapterVerses)) {
      const verse = Number(number);
      if (verse >= from && verse <= to) result.push({ number: verse, text });
    }
  }
  return { book: gospels[book].name, reference, verses: result };
}

export async function GET(request: NextRequest) {
  const date = request.nextUrl.searchParams.get("date") ?? new Date().toISOString().slice(0, 10);
  if (!DATE.test(date) || date < "2026-07-11" || date > "2029-07-11") {
    return NextResponse.json({ error: "Selecciona una fecha entre hoy y el 11 de julio de 2029." }, { status: 400 });
  }

  try {
    const response = await fetch(`https://parolaviva.art/api/v1/letture/${date.slice(0, 4)}/${date.slice(5)}.json`, { next: { revalidate: 86400 } });
    if (!response.ok) throw new Error("No se pudo recuperar el calendario litúrgico.");
    const data = await response.json();
    const reference = data?.letture?.vangelo?.riferimento as string | undefined;
    const gospel = reference ? versesFor(reference) : null;
    if (!gospel?.verses.length) throw new Error("La referencia del Evangelio no está disponible en la edición local.");
    return NextResponse.json({ date, celebration: data.celebrazione, color: data.colore, gospel, source: "Calendario romano: Parola Viva (CC BY 4.0). Texto: Reina-Valera 1909, dominio público." });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "No se pudo cargar el Evangelio." }, { status: 502 });
  }
}
