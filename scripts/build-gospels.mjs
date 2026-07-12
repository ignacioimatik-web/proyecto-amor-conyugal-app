import { existsSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";

const localSource = "/private/tmp/open-bibles/spa-rv1909.usfx.xml";
const source = existsSync(localSource)
  ? readFileSync(localSource, "utf8")
  : await fetch("https://raw.githubusercontent.com/seven1m/open-bibles/master/spa-rv1909.usfx.xml").then(async (response) => {
      if (!response.ok) throw new Error("No se pudo descargar el corpus bíblico de dominio público.");
      return response.text();
    });
const names = { MAT: "Mateo", MRK: "Marcos", LUK: "Lucas", JHN: "Juan" };
const output = {};

for (const [id, name] of Object.entries(names)) {
  const start = source.indexOf(`<book id="${id}">`);
  const end = source.indexOf("<book id=", start + 1);
  const book = source.slice(start, end === -1 ? undefined : end);
  const chapters = {};
  const chunks = book.split(/<c id="(\d+)"\s*\/>/g);

  for (let i = 1; i < chunks.length; i += 2) {
    const chapter = chunks[i];
    const verses = {};
    const verseChunks = chunks[i + 1].split(/<v id="(\d+)"\s*\/>/g);
    for (let j = 1; j < verseChunks.length; j += 2) {
      const verse = verseChunks[j];
      const text = verseChunks[j + 1]
        .split("<ve />")[0]
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
      if (text) verses[verse] = text;
    }
    chapters[chapter] = verses;
  }
  output[id] = { name, chapters };
}

mkdirSync("src/data", { recursive: true });
writeFileSync("src/data/gospels-rv1909.json", JSON.stringify(output));

mkdirSync("public", { recursive: true });
writeFileSync(
  "public/proyecto-amor-conyugal-logo.webp",
  Buffer.from(readFileSync("scripts/assets/proyecto-amor-conyugal-logo.b64", "utf8").replace(/\s/g, ""), "base64"),
);

const officialImages = [
  ["https://proyectoamorconyugal.es/wp-content/uploads/2026/07/IMG-20260712-WA0000.jpg", "public/proyecto-amor-oficial-1.jpg"],
  ["https://proyectoamorconyugal.es/wp-content/uploads/2026/07/030625-holanda-2026-07-12T063530.157.png", "public/proyecto-amor-oficial-2.png"],
  ["https://proyectoamorconyugal.es/wp-content/uploads/2026/07/Portugal-2026-07-10T002504.558.png", "public/proyecto-amor-oficial-3.png"],
];
for (const [url, file] of officialImages) {
  if (!existsSync(file)) {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`No se pudo descargar una imagen oficial: ${url}`);
    writeFileSync(file, Buffer.from(await response.arrayBuffer()));
  }
}
