import type { Metadata } from "next";
import TimeWheelsLandingPage from "@/components/landing/TimeWheelsLandingPage";

export const metadata: Metadata = {
  title: {
    absolute: "Time Wheels · Transporte terrestre nacional · Time Group",
  },
  description:
    "Time Wheels: línea de transporte de Time Group. Equipo propio (3.5 t, rabón), red administrada para carga pesada (tortón y tráiler 48′ y 53′). Carta Porte y rastreo.",
};

export default function TimeWheelsPage() {
  const whatsAppPhoneRaw =
    process.env.NEXT_TIME_WHATS_APP?.trim() ||
    process.env.NEXT_PUBLIC_NEXT_TIME_WHATS_APP?.trim();
  return <TimeWheelsLandingPage whatsAppPhoneRaw={whatsAppPhoneRaw} />;
}
