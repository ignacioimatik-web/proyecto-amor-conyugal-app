import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import MissionMap from "@/components/experience/mission-map";
import missionsData from "../../../public/data/missions.json";

export const metadata: Metadata = {
  title: "Misiones",
  description:
    "Misiones para matrimonios. Conoce a las parejas misioneras del Proyecto Amor Conyugal por todo el mundo.",
};

export default function MissionsPage() {
  return (
    <>
      <PageHero
        title="Misiones"
        description="Conoce a las parejas misioneras que llevan el amor de Dios al mundo."
      />

      <MissionMap missions={missionsData} />
    </>
  );
}
