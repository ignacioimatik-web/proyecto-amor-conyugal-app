import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const key = process.env.DEEPGRAM_API_KEY;
  if (!key) return NextResponse.json({ error: "El narrador está configurándose." }, { status: 503 });
  const { text } = await request.json() as { text?: string };
  if (!text || text.length > 15000) return NextResponse.json({ error: "Texto no válido." }, { status: 400 });
  const response = await fetch("https://api.deepgram.com/v1/speak?model=aura-2-nestor-es&speed=0.92", {
    method: "POST",
    headers: { Authorization: `Token ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  if (!response.ok) return NextResponse.json({ error: "No se pudo generar el audio." }, { status: 502 });
  return new Response(response.body, { headers: { "Content-Type": response.headers.get("content-type") ?? "audio/mpeg", "Cache-Control": "private, max-age=3600" } });
}
