"use client";

import { useRef, useState } from "react";

export function GospelPlayer({ text }: { text: string }) {
  const audio = useRef<HTMLAudioElement | null>(null);
  const url = useRef<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState("");

  async function play() {
    setError("");
    if (audio.current) { await audio.current.play(); return; }
    setLoading(true);
    try {
      const response = await fetch("/api/evangelio-audio", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text }) });
      if (!response.ok) throw new Error();
      url.current = URL.createObjectURL(await response.blob());
      const player = new Audio(url.current);
      player.onplay = () => setPlaying(true); player.onpause = () => setPlaying(false); player.onended = () => setPlaying(false);
      audio.current = player;
      await player.play();
    } catch { setError("No se ha podido preparar el audio."); }
    finally { setLoading(false); }
  }
  function pause() { audio.current?.pause(); }
  function restart() { if (!audio.current) { void play(); return; } audio.current.currentTime = 0; void audio.current.play(); }
  function stop() { if (!audio.current) return; audio.current.pause(); audio.current.currentTime = 0; }

  return <div className="rounded-2xl border border-[#d7cec2] bg-white p-3">
    <div className="flex flex-wrap items-center gap-2">
      <button onClick={() => void play()} disabled={loading} className="rounded-full bg-[#203f34] px-4 py-2 text-xs font-bold text-white disabled:opacity-60">{loading ? "Preparando voz…" : playing ? "▶ Reanudar" : "▶ Escuchar"}</button>
      <button onClick={pause} disabled={!audio.current || !playing} className="rounded-full border border-[#d7cec2] px-3 py-2 text-xs font-bold disabled:opacity-40">Ⅱ Pausa</button>
      <button onClick={restart} className="rounded-full border border-[#d7cec2] px-3 py-2 text-xs font-bold">↺ Reiniciar</button>
      <button onClick={stop} disabled={!audio.current} className="rounded-full border border-[#d7cec2] px-3 py-2 text-xs font-bold disabled:opacity-40">■ Detener</button>
    </div>
    {error && <p className="mt-2 text-xs text-[#9b4531]">{error}</p>}
  </div>;
}
