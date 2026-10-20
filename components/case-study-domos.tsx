"use client";

/**
 * Case study de Domos El Tabo (/en/case-study/domos-el-tabo). Solo en inglés:
 * es la página que se enlaza desde Fiverr, r/forhire y correos fríos. Reutiliza
 * las clases y patrones de la landing (navbar, reveal, btn-primary, glass-dark)
 * para que se sienta parte del mismo sitio, y toma del diccionario /en los
 * textos compartidos (navbar, mailto) para no duplicarlos.
 */
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock,
  CreditCard,
  Globe,
  Mail,
  MessagesSquare,
  AlertTriangle,
} from "lucide-react";
import { en } from "@/lib/i18n/en";

// WhatsApp official icon component (mismo de la landing)
const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function CaseStudyDomos() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll reveal effect (mismo de la landing)
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [mounted]);

  const whatsappBase = "https://wa.me/56985541349";
  const wa = (text: string) => `${whatsappBase}?text=${encodeURIComponent(text)}`;
  const whatsappContacto = wa(en.wa.contact);
  const whatsappAsesoria = wa("Hi Francisco, I read the Domos El Tabo case study and I'd like a free assessment for my business.");

  const emailContacto = "mailto:franciscosaldivia87@gmail.com?subject=" +
    encodeURIComponent(en.email.subject) +
    "&body=" +
    encodeURIComponent(en.email.body);

  return (
    <main className="overflow-hidden">
      {/* ============================================
          NAVBAR (misma de la landing /en)
          ============================================ */}
      <nav className={`navbar flex items-center justify-between ${scrolled ? "scrolled" : ""}`}>
        <Link
          href="/en"
          className={`flex items-center gap-3 ${mounted ? "animate-fade-in-down" : "opacity-0"}`}
        >
          <Image
            src="/logo.webp"
            alt="Francisco Dev Logo"
            width={40}
            height={40}
            className="object-contain rounded-full"
          />
          <span className="text-white font-bold text-xl tracking-tight">
            Francisco Dev
          </span>
        </Link>
        <div className={`flex items-center gap-4 ${mounted ? "animate-fade-in-down delay-200" : "opacity-0"}`}>
          <div className="flex items-center gap-1.5 text-sm font-semibold">
            <Link href="/" className="text-slate-400 hover:text-white transition-colors">
              ES
            </Link>
            <span className="text-slate-600" aria-hidden="true">|</span>
            <Link href="/en" aria-current="page" className="text-white">
              EN
            </Link>
          </div>
          <a
            href={emailContacto}
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
          >
            <Mail size={16} />
            {en.emailCta}
          </a>
          <a
            href={whatsappContacto}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            <WhatsAppIcon size={18} />
            {en.nav.cta}
          </a>
        </div>
      </nav>

      {/* ============================================
          HERO
          ============================================ */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%)"
          }}
        />
        <div
          className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)"
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className={`${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-cyan-400 text-sm font-medium mb-6">
              Case Study · Tourism &amp; Hospitality
            </span>
          </div>

          <h1 className={`text-4xl md:text-6xl font-bold text-white leading-tight mb-6 ${mounted ? "animate-fade-in-up delay-100" : "opacity-0"}`}>
            Domos El Tabo: <span className="gradient-text">bookings on autopilot</span>
          </h1>

          <p className={`text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 ${mounted ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
            How a glamping business with 206K Instagram followers went from managing every booking by chat to guests booking, paying, and getting answers on their own — 24/7.
          </p>

          <div className={`${mounted ? "animate-fade-in-up delay-300" : "opacity-0"}`}>
            <a
              href="https://reserva.cabañaseneltabo.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Globe size={18} />
              See it live
              <ArrowRight size={18} />
            </a>
          </div>

          <div className={`relative mt-12 max-w-4xl mx-auto rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl ${mounted ? "animate-fade-in-up delay-400" : "opacity-0"}`}>
            <Image
              src="/proyectos/reserva-public.webp"
              alt="Domos El Tabo — direct booking engine"
              width={1200}
              height={750}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* ============================================
          AT A GLANCE
          ============================================ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="reveal rounded-2xl border border-slate-200 bg-slate-50 p-8 md:p-10">
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">
              At a glance
            </p>
            <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
              <div>
                <dt className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Client</dt>
                <dd className="text-slate-800 font-medium">Domos El Tabo — glamping domes on the Chilean coast</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Audience</dt>
                <dd>
                  <a
                    href="https://www.instagram.com/domoseltabo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white text-xs font-semibold hover:opacity-90 transition-opacity"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    @domoseltabo · 206K followers
                  </a>
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Scope</dt>
                <dd className="text-slate-800 font-medium">Direct booking engine with online payments · Admin panel · AI WhatsApp assistant</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Stack</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "WhatsApp API", "Cloudflare"].map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600 text-[11px] font-medium">{tech}</span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Delivered by</dt>
                <dd className="text-slate-800 font-medium">Francisco Dev — 100% remote</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ============================================
          THE CHALLENGE
          ============================================ */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--slate-800) 1px, transparent 0)`,
            backgroundSize: "40px 40px"
          }}
        />
        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 text-red-500 font-semibold text-sm uppercase tracking-wider mb-4">
              <AlertTriangle size={18} />
              The Challenge
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              206K followers is a great problem to have —
              <span className="block text-red-500">until every booking lives inside a chat thread.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Before the system, the operation ran the way most successful lodging businesses do:
            </p>
            <ul className="space-y-4">
              {[
                { icon: Clock, text: "Availability questions arriving at all hours through Instagram and WhatsApp — including nights and weekends, exactly when people plan their trips" },
                { icon: CalendarDays, text: "A calendar kept by hand, with the risk of double bookings every busy weekend" },
                { icon: CreditCard, text: "Payments confirmed manually, one by one" },
                { icon: MessagesSquare, text: "Hours every day spent answering the same questions: dates, prices, what’s included" },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-red-50 border border-red-100 hover:bg-red-100 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-500 text-white flex items-center justify-center">
                    <item.icon size={20} />
                  </div>
                  <span className="text-slate-700 font-medium pt-2">{item.text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-lg font-medium text-blue-600 border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r-lg">
              The business wasn&rsquo;t broken — it was growing faster than a human inbox can handle.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          THE SOLUTION
          ============================================ */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 60%)"
          }}
        />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-14 reveal">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-cyan-400 text-sm font-semibold mb-4">
              The Solution
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Three pieces, built to <span className="gradient-text">work as one</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                step: "01",
                title: "Direct booking engine",
                description: "Guests pick their dates, see real availability and prices, and pay online on their own. No back-and-forth, no middlemen, no commissions to third-party platforms.",
                color: "from-blue-500 to-blue-600"
              },
              {
                step: "02",
                title: "Admin panel",
                description: "One calendar, always up to date. Payments, guest history, and bookings in a single place — zero double bookings, and the owners run everything from their phones.",
                color: "from-cyan-500 to-cyan-600"
              },
              {
                step: "03",
                title: "AI WhatsApp assistant",
                description: "Answers availability, prices, and frequently asked questions instantly, 24/7, in the channel guests already use — and hands the conversation to a human when it matters.",
                color: "from-purple-500 to-purple-600"
              }
            ].map((item, index) => (
              <div key={index} className={`reveal delay-${(index + 1) * 100} group`}>
                <div className="h-full p-6 rounded-2xl border bg-slate-800/50 border-slate-700/50 hover:border-slate-600 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} text-white font-bold text-lg mb-4 group-hover:scale-110 transition-transform`}>
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/*
            Slots para capturas futuras del panel admin y del asistente en accion.
            Antes de subirlas: difuminar datos reales de huespedes (nombres,
            telefonos, montos). Guardarlas en public/proyectos/ y descomentar.

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="reveal rounded-2xl overflow-hidden border border-slate-700/50 shadow-xl">
                <Image
                  src="/proyectos/domos-admin.webp"
                  alt="Admin panel — one calendar, always in sync"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div className="reveal delay-100 rounded-2xl overflow-hidden border border-slate-700/50 shadow-xl">
                <Image
                  src="/proyectos/domos-asistente.webp"
                  alt="AI WhatsApp assistant answering availability in real time"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          */}
        </div>
      </section>

      {/* ============================================
          HOW IT WAS BUILT
          ============================================ */}
      <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14 reveal">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
              The Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How it was <span className="gradient-text">built</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The same process every Francisco Dev project follows:
            </p>
          </div>

          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Free assessment", description: "Understanding where the hours were actually going.", color: "from-blue-500 to-blue-600" },
              { step: "02", title: "Free visual mockup", description: "The client saw the system’s design before paying a dime.", color: "from-cyan-500 to-cyan-600" },
              { step: "03", title: "Development with weekly written updates", description: "No disappearing for weeks.", color: "from-purple-500 to-purple-600" },
              { step: "04", title: "Onboarding & support", description: "Training, how-to videos, and a warranty period.", color: "from-green-500 to-green-600" },
            ].map((item, index) => (
              <li key={index} className={`reveal delay-${(index + 1) * 100} bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-200 transition-colors`}>
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} text-white font-bold mb-4`}>
                  {item.step}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================
          THE RESULTS
          ============================================ */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14 reveal">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
              The Results
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              What changed for <span className="gradient-text">the business</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { lead: "Guests book and pay online on their own", rest: "no phone calls, no spreadsheets." },
              { lead: "Zero double bookings", rest: "one calendar, always in sync." },
              { lead: "Instant answers, 24/7", rest: "the AI assistant absorbs the repetitive questions; the team focuses on the guests." },
              { lead: "Direct bookings, no commissions", rest: "the business keeps what platforms would take." },
            ].map((item, index) => (
              <div key={index} className={`reveal delay-${(index + 1) * 100} flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-green-200 transition-colors`}>
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500 text-white flex items-center justify-center">
                  <Check size={20} />
                </div>
                <p className="text-slate-600 pt-1.5">
                  <span className="font-semibold text-slate-900">{item.lead}</span> — {item.rest}
                </p>
              </div>
            ))}
          </div>

          {/*
            Testimonio del cliente: activar cuando llegue la cita real (pedirla
            por WhatsApp, puede venir en espanol y se traduce). NO publicar con
            el placeholder visible.

            <blockquote className="reveal mt-12 max-w-3xl mx-auto rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <p className="text-lg text-slate-700 italic leading-relaxed">
                &ldquo;AQUI LA CITA DE 2-3 LINEAS DEL CLIENTE&rdquo;
              </p>
              <footer className="mt-4 text-sm font-semibold text-slate-900">
                — Nombre, Domos El Tabo
              </footer>
            </blockquote>
          */}
        </div>
      </section>

      {/* ============================================
          CTA FINAL
          ============================================ */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)"
          }}
        />
        <div className="max-w-4xl mx-auto px-6 relative text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want this for <span className="gradient-text">your business</span>?
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            Same process, your operation: free assessment → free visual mockup → fixed quote. You see everything before committing a single dollar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappAsesoria}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg animate-pulse-glow"
            >
              <WhatsAppIcon size={20} />
              Get a Free Assessment
            </a>
            <a href={emailContacto} className="btn-outline text-lg">
              <Mail size={20} />
              {en.emailCta}
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          FOOTER COMPACTO
          ============================================ */}
      <footer className="bg-slate-950 py-12 border-t border-slate-800/60">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/en" className="flex items-center gap-3">
            <Image
              src="/logo.webp"
              alt="Francisco Dev"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-white font-bold text-lg">Francisco Dev</span>
          </Link>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <Globe size={14} className="text-cyan-400" />
            <span>{en.footer.remoteBrand}</span>
          </div>
          <span className="text-slate-500 text-sm">© {new Date().getFullYear()} Francisco Dev. {en.footer.rights}</span>
        </div>
      </footer>
    </main>
  );
}
