import type { Metadata } from "next";
import SevenDayChallenge from "@/components/experience/seven-day-challenge";

export const metadata: Metadata = {
  title: "Reto de 7 Días",
  description:
    "Una semana para fortalecer tu matrimonio. Cada día, una acción, una reflexión y una oración para crecer juntos en el amor.",
};

export default function SevenDayChallengePage() {
  return (
    <>
      <SevenDayChallenge />
    </>
  );
}
