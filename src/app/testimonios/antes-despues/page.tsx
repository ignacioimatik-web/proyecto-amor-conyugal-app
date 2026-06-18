import type { Metadata } from "next";
import BeforeAfterSlider from "@/components/experience/before-after-slider";

export const metadata: Metadata = {
  title: "Antes y Después",
  description:
    "Historias reales de transformación en el matrimonio. Testimonios de parejas que atravesaron la crisis y encontraron la renovación.",
};

export default function AntesDespuesPage() {
  return (
    <>
      <BeforeAfterSlider />
    </>
  );
}
