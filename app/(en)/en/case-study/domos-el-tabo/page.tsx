import type { Metadata } from "next";
import CaseStudyDomos from "@/components/case-study-domos";

export const metadata: Metadata = {
  title: "Case Study: Domos El Tabo — Bookings on Autopilot | Francisco Dev",
  description: "How a glamping business with 206K Instagram followers went from managing every booking by chat to guests booking, paying, and getting answers on their own — 24/7.",
  alternates: {
    canonical: '/en/case-study/domos-el-tabo',
  },
  openGraph: {
    title: "Case Study: Domos El Tabo — Bookings on Autopilot",
    description: "Direct booking engine, admin panel, and an AI WhatsApp assistant for a glamping business with 206K Instagram followers.",
    url: 'https://franciscodev.cl/en/case-study/domos-el-tabo',
    siteName: 'Francisco Dev',
    type: "article",
    locale: "en_US",
    images: ['/proyectos/reserva-public.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Study: Domos El Tabo — Bookings on Autopilot',
    description: 'Direct booking engine, admin panel, and an AI WhatsApp assistant for a glamping business with 206K Instagram followers.',
    images: ['/proyectos/reserva-public.webp'],
  },
};

export default function CaseStudyDomosPage() {
  return <CaseStudyDomos />;
}
