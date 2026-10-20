/**
 * Textos de la landing, un diccionario por idioma (`es.tsx` y `en.tsx`).
 * El componente es uno solo (`components/landing.tsx`): ambas rutas renderizan
 * el mismo JSX y solo cambia el diccionario, para que las dos versiones no
 * puedan desalinearse en estructura, estilos ni imágenes.
 *
 * Los campos ReactNode existen porque el copy trae énfasis en medio de la
 * frase (spans con clases); el resto son strings planos.
 */
import type { ReactNode } from "react";

export interface ProcessStep {
  title: string;
  description: string;
  deliverable: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  features: [string, string, string];
}

export interface ProjectCard {
  badge: string;
  title: string;
  lead: string;
  rest: string;
  bullets: [string, string, string];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Dict {
  /** Mensajes prellenados de los enlaces wa.me, en el idioma de la página. */
  wa: {
    contact: string;
    assessment: string;
    quote: string;
    project: string;
    sell: string;
    ops: string;
    software: string;
  };
  /** Asunto y cuerpo del mailto de contacto. */
  email: { subject: string; body: string };
  /**
   * Etiqueta del botón de correo que acompaña a cada botón de WhatsApp.
   * Solo /en lo define: en EE. UU. no todos usan WhatsApp.
   */
  emailCta?: string;
  nav: { cta: string };
  hero: {
    eyebrow: string;
    t1: string;
    g1: string;
    t2: string;
    g2: string;
    subtitle: ReactNode;
    ctaPrimary: string;
    ctaSecondary: string;
    alt: string;
  };
  problem: {
    eyebrow: string;
    titleTop: string;
    titleRed: string;
    subtitle: string;
    items: [string, string, string];
    alt: string;
  };
  process: {
    eyebrow: string;
    t: string;
    g: string;
    tagline: string;
    subtitle: string;
    steps: [ProcessStep, ProcessStep, ProcessStep, ProcessStep];
    freeBadge: string;
    noRiskBold: string;
    noRiskRest: string;
    cta: string;
  };
  services: {
    eyebrow: string;
    t: string;
    g: string;
    subtitle: string;
    cards: [ServiceCard, ServiceCard, ServiceCard];
    sectorsLabel: string;
    sectors: [string, string, string, string, string, string, string];
    cta: string;
  };
  about: {
    eyebrow: string;
    badge: string;
    titlePre: string;
    titleName: string;
    p1: ReactNode;
    quote: string;
    paragraphs: ReactNode[];
    ctaWa: string;
    ctaEmail: string;
    alt: string;
  };
  portfolio: {
    eyebrow: string;
    t: string;
    g: string;
    subtitle: string;
    featuredBadge: string;
    igLabel: string;
    featured: ProjectCard & {
      alt: string;
      chips: string[];
      liveCta: string;
      /** Enlace al case study. Solo /en lo define; sin él no se muestra nada. */
      caseStudy?: { label: string; href: string };
    };
    hotel: ProjectCard;
    ehq: ProjectCard & { devBadge: string };
    archiva: ProjectCard;
    data: ProjectCard;
    ctaQuestion: string;
    cta: string;
    lightboxAlt: string;
  };
  stack: { eyebrow: string; t: string; g: string; subtitle: string };
  faq: {
    eyebrow: string;
    t: string;
    g: string;
    subtitle: string;
    items: FaqItem[];
    ctaQuestion: string;
    cta: string;
  };
  footer: {
    blurb: string;
    remoteBrand: string;
    helpTitle: string;
    helpLinks: [string, string, string];
    contactTitle: string;
    remoteContact: string;
    projectTitle: string;
    projectText: string;
    waCta: string;
    emailCta: string;
    rights: string;
  };
}
