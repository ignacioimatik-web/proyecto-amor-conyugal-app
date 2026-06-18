import type { Metadata } from "next";
import PrayerMode from "@/components/experience/prayer-mode";

export const metadata: Metadata = {
  title: "Modo Oración",
  description:
    "Un espacio de silencio y encuentro con Dios para la pareja. Respiración guiada, oraciones para matrimonio y ambiente minimalista.",
};

export default function PrayerModePage() {
  return (
    <>
      <PrayerMode />
    </>
  );
}
