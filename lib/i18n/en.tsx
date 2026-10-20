/**
 * Diccionario en inglés (/en), tomado de landing-en-copy.md (19-10-2026):
 * adaptación al mercado de EE. UU., no traducción literal. Donde el documento
 * no daba texto (CTA del FAQ, viñetas de algunos proyectos, encabezado del
 * stack) se tradujo espejando el español.
 */
import { Fragment } from "react";
import type { Dict } from "./types";

export const en: Dict = {
  wa: {
    contact: "Hi Francisco, I saw your website and I'd like to know more about your services.",
    assessment: "Hi Francisco, I'd like a free assessment for my business.",
    quote: "Hi Francisco, I'd like a quote for a project.",
    project: "Hi Francisco, I have a project in mind and I'd like to discuss it.",
    sell: "Hi Francisco, I want to sell online: a store or sales site with integrated payments.",
    ops: "Hi Francisco, I want to organize and control my operation with an admin system.",
    software: "Hi Francisco, I need custom web and mobile software.",
  },
  email: {
    subject: "Software project — Francisco Dev",
    body: "Hi Francisco:\n\nAbout my project:\n- What I need:\n- My business / country:\n- Approximate timeline:\n",
  },
  emailCta: "Send an Email",
  nav: { cta: "Let's talk" },
  hero: {
    eyebrow: "Tech Consulting",
    t1: "From ",
    g1: "Manual Chaos",
    t2: "to ",
    g2: "Digital Control",
    subtitle: (
      <>
        I help you sell online, run your operation in one place, and take your software to any device.
        <span className="text-cyan-400 font-medium"> Technology that adapts to your business</span> — not the other way around.
      </>
    ),
    ctaPrimary: "Get a Free Assessment",
    ctaSecondary: "See Solutions",
    alt: "Modern tech desk",
  },
  problem: {
    eyebrow: "The Problem",
    titleTop: "Does your desk",
    titleRed: "look like this?",
    subtitle: "Administrative chaos is costing you money, time, and opportunities. These problems are more common than you think:",
    items: [
      "Manual processes slowing down your operation",
      "Data scattered across spreadsheets and disconnected tools",
      "No real-time visibility to make decisions",
    ],
    alt: "Cluttered desk with scattered paperwork",
  },
  process: {
    eyebrow: "My Process",
    t: "Technology That Adapts to",
    g: " Your Business",
    tagline: "Not the other way around.",
    subtitle: "No generic templates. Every solution is designed from scratch, listening to how your business actually works and building exactly what you need.",
    steps: [
      {
        title: "Free Assessment",
        description: "I listen to your real problem and pinpoint where you're losing time and money today.",
        deliverable: "Summary of your main problem",
      },
      {
        title: "Custom Design",
        description: "I design how the solution will work. You get a visual mockup for FREE before paying a dime.",
        deliverable: "Demo mockup + fixed quote",
      },
      {
        title: "Development",
        description: "I build your solution with weekly progress updates in writing. No disappearing for weeks.",
        deliverable: "System working at 100%",
      },
      {
        title: "Onboarding & Support",
        description: "I train you and your team, with how-to videos and initial support included.",
        deliverable: "Guides + warranty",
      },
    ],
    freeBadge: "FREE!",
    noRiskBold: "Zero risk:",
    noRiskRest: "you see the mockup before committing a single dollar",
    cta: "Get My Free Assessment",
  },
  services: {
    eyebrow: "How I can help",
    t: "Three Ways to",
    g: " Grow Your Business",
    subtitle: "Every solution is tailored to your operation. Technology that adapts to your business, not the other way around.",
    cards: [
      {
        title: "Sell Online",
        description: "Stores and sales websites with integrated payments, ready to take orders and get you paid — no middlemen.",
        features: ["Catalog and shopping cart", "Online payments built in", "Selling 24/7"],
      },
      {
        title: "Run Your Operation in One Place",
        description: "Admin systems, inventory, bookings, and ERP — everything under control in a single dashboard.",
        features: ["Inventory and bookings", "Your whole operation centralized", "Real-time reports"],
      },
      {
        title: "Software on Any Device",
        description: "Web and mobile apps that look and work great on any screen, nothing extra to install.",
        features: ["Custom web and mobile", "Adapts to any screen", "Access from anywhere"],
      },
    ],
    sectorsLabel: "Sectors I've worked in",
    sectors: ["Tourism & Hospitality", "Healthcare", "Automotive", "Retail", "Trades & Services", "Startups & Tech", "and more"],
    cta: "Request a Quote",
  },
  about: {
    eyebrow: "About Me",
    badge: "IT Consultant",
    titlePre: "Hi, I'm ",
    titleName: "Francisco",
    p1: (
      <>
        More than a software developer, I&rsquo;m a <span className="text-slate-900 font-medium">consultant obsessed</span> with turning operational chaos into efficient, profitable digital solutions.
      </>
    ),
    quote: "Technology that adapts to your business, not the other way around.",
    paragraphs: [
      <Fragment key="cookie-cutter">
        I don&rsquo;t sell cookie-cutter software. I <span className="text-slate-900 font-medium">listen first and understand</span> the unique challenges of your organization — whether you run a restaurant, a hotel, a clinic, or an established company — before writing a single line of code.
      </Fragment>,
      <Fragment key="goal">
        My end goal is simple: <span className="text-slate-900 font-medium">free you and your team</span> from repetitive manual work, so you can focus on what actually matters — <span className="gradient-text font-semibold">growing the business</span>.
      </Fragment>,
      <Fragment key="timezone">
        <span className="text-slate-900 font-medium">Based in Chile, working in US time zones.</span> My workday overlaps with yours in real time (Eastern/Central) — you message me, I answer today, not tomorrow.
      </Fragment>,
    ],
    ctaWa: "Let's Chat",
    ctaEmail: "Email Me",
    alt: "Francisco — IT Consultant",
  },
  portfolio: {
    eyebrow: "Real Projects",
    t: "Project ",
    g: "Portfolio",
    subtitle: "Solutions shipped across different industries",
    featuredBadge: "★ Featured Project",
    igLabel: "@domoseltabo · 206K followers",
    featured: {
      badge: "Tourism",
      alt: "Domos El Tabo — Booking System",
      title: "Domos El Tabo",
      lead: "Direct bookings, 24/7.",
      rest: "Guests book and pay online on their own — no phone calls, no spreadsheets. Zero double bookings, and an AI WhatsApp assistant answering around the clock.",
      bullets: [
        "Online bookings and payments, no middlemen",
        "Zero double bookings — calendar always up to date",
        "Automated AI chat support, 24/7",
      ],
      chips: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "WhatsApp API", "Cloudflare"],
      liveCta: "See it live",
      caseStudy: { label: "Read the full case study", href: "/en/case-study/domos-el-tabo" },
    },
    hotel: {
      badge: "Hospitality",
      title: "Hotel de la Costa",
      lead: "The whole front desk on one screen.",
      rest: "Staff manage bookings, rooms, and payments without loose spreadsheets or double entries.",
      bullets: [
        "Room availability at a glance",
        "Payments and guest history in one place",
        "Clear reports for decisions",
      ],
    },
    ehq: {
      badge: "Food & Retail",
      devBadge: "In development",
      title: "Entre Huevos y Quesos",
      lead: "A catalog that's always open.",
      rest: "Customers browse products and reach out instantly, without depending on social media alone.",
      bullets: [
        "Product catalog always within reach",
        "Customers find you and contact you directly",
        "A brand that looks professional",
      ],
    },
    archiva: {
      badge: "Cloud / SaaS",
      title: "ArchivaCloud",
      lead: "Share files without exposing your data.",
      rest: "Upload and share heavy documents securely, with per-user access control and end-to-end encryption.",
      bullets: [
        "Share heavy files without risk",
        "Per-user access control",
        "Data encrypted end to end",
      ],
    },
    data: {
      badge: "Data / ETL",
      title: "Data Cleaner",
      lead: "Clean, reliable data.",
      rest: "Turns messy spreadsheets into ready-to-use information — no errors, no duplicates.",
      bullets: [
        "No more duplicates and data errors",
        "Validated, consistent information",
        "Ready to export and decide",
      ],
    },
    ctaQuestion: "Want to see your business here?",
    cta: "Start My Project",
    lightboxAlt: "Expanded project screenshot",
  },
  stack: {
    eyebrow: "Modern Technologies",
    t: "Development ",
    g: "Stack",
    subtitle: "I work with the most current, battle-tested tools on the market",
  },
  faq: {
    eyebrow: "Common Questions",
    t: "Frequently Asked ",
    g: "Questions",
    subtitle: "The most common questions business owners ask before going digital",
    items: [
      {
        question: "Do I need to be tech-savvy to use what you build?",
        answer: "No. My job is turning complex processes into simple screens. I design intuitive interfaces (think: your banking app) so you and your team can use them from day one.",
      },
      {
        question: "Can I see my information from my phone, outside the office?",
        answer: "Absolutely. Everything I build is responsive web technology. Check inventory, reports, or orders from your phone, tablet, or computer — anywhere, nothing to install.",
      },
      {
        question: "Do you work with US businesses remotely?",
        answer: "Yes. I work 100% remote with clients across the US and Latin America. Every project starts with a clear scope, an English contract, and milestone-based payments. You get weekly written progress updates and references on request. I invoice in USD.",
      },
      {
        question: "How do we communicate if we're in different countries?",
        answer: "In writing, and fast. I work async-first: everything over chat and email, with short screen-recorded video updates (Loom) showing real progress — so every decision and commitment is documented, and nothing gets lost in a phone call. I'm based in Chile, which overlaps with US Eastern/Central business hours, so you get same-day responses.",
      },
      {
        question: "What happens if something breaks after delivery?",
        answer: "You're not left alone. Every project includes a warranty period and post-delivery support. If a technical bug shows up in that window, I fix it at no cost. Long-term support plans are also available.",
      },
      {
        question: "Can I expense this for my business?",
        answer: "Yes. Every project comes with a professional services invoice for consulting and development, so the investment is properly documented for your books.",
      },
    ],
    ctaQuestion: "Have another question?",
    cta: "Ask me directly",
  },
  footer: {
    blurb: "Tech consulting and custom software for businesses ready to digitize their operations.",
    remoteBrand: "Remote · US & Latin America",
    helpTitle: "How I help",
    helpLinks: ["Sell online", "Run your operation", "Custom software"],
    contactTitle: "Contact",
    remoteContact: "Remote · US & LATAM",
    projectTitle: "Have a project?",
    projectText: "Let's talk about digitizing your business.",
    waCta: "Chat on WhatsApp",
    emailCta: "Send an Email",
    rights: "All rights reserved.",
  },
};
