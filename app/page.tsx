"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Sparkles,
  AlertTriangle,
  Clock,
  Database,
  BarChart3,
  X,
  Building2,
  HeartPulse,
  Car,
  ShoppingBag,
  Wrench,
  Globe,
  Layers,
  Cloud
} from "lucide-react";

// WhatsApp official icon component
const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);


export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images: string | string[], index = 0) => {
    setLightboxImages(Array.isArray(images) ? images : [images]);
    setLightboxIndex(index);
  };
  const closeLightbox = () => setLightboxImages([]);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll reveal effect
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

  // WhatsApp links con mensajes personalizados
  const whatsappBase = "https://wa.me/56985541349";
  const whatsappAsesoria = `${whatsappBase}?text=${encodeURIComponent("Hola Francisco, me gustaría agendar una asesoría gratuita para mi negocio.")}`;
  const whatsappCotizacion = `${whatsappBase}?text=${encodeURIComponent("Hola Francisco, me interesa solicitar una cotización para un proyecto.")}`;
  const whatsappProyecto = `${whatsappBase}?text=${encodeURIComponent("Hola Francisco, tengo un proyecto en mente y me gustaría conversarlo contigo.")}`;
  const whatsappContacto = `${whatsappBase}?text=${encodeURIComponent("Hola Francisco, vi tu página web y me gustaría más información sobre tus servicios.")}`;

  // WhatsApp links para servicios
  const whatsappConsultoria = `${whatsappBase}?text=${encodeURIComponent("Hola Francisco, me interesa el servicio de Consultoría IT para mi empresa.")}`;
  const whatsappDesarrollo = `${whatsappBase}?text=${encodeURIComponent("Hola Francisco, necesito un desarrollo web para mi negocio.")}`;
  const whatsappERP = `${whatsappBase}?text=${encodeURIComponent("Hola Francisco, me interesa implementar un Sistema ERP en mi empresa.")}`;
  const whatsappApps = `${whatsappBase}?text=${encodeURIComponent("Hola Francisco, necesito una App a Medida para mi negocio.")}`;

  return (
    <main className="overflow-hidden">
      {/* ============================================
          NAVBAR
          ============================================ */}
      <nav
        className={`navbar flex items-center justify-between ${scrolled ? "scrolled" : ""
          }`}
      >
        <div
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
        </div>
        <a
          href={whatsappContacto}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn-primary text-sm ${mounted ? "animate-fade-in-down delay-200" : "opacity-0"}`}
        >
          <WhatsAppIcon size={18} />
          Hablemos
        </a>
      </nav>

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/header.webp"
            alt="Escritorio tech moderno"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-slate-900" />
        </div>

        {/* Decorative Animated Elements */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          {/* Circuit dots */}
          <div className="circuit-dot absolute top-[20%] left-[10%] animate-pulse-soft" />
          <div className="circuit-dot absolute top-[30%] right-[15%] animate-pulse-soft delay-300" />
          <div className="circuit-dot absolute bottom-[25%] left-[20%] animate-pulse-soft delay-500" />
          <div className="circuit-dot absolute top-[60%] right-[25%] animate-pulse-soft delay-700" />

          {/* Glow orbs */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full animate-rotate-slow"
            style={{
              background: "radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%)"
            }}
          />
          <div
            className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full animate-rotate-slow"
            style={{
              background: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)",
              animationDirection: "reverse",
              animationDuration: "30s"
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
          <div className={`${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-cyan-400 text-sm font-medium mb-6">

              Consultoría Tecnológica
            </span>
          </div>

          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 ${mounted ? "animate-fade-in-up delay-100" : "opacity-0"
              }`}
          >
            Del <span className="gradient-text">Caos Manual</span>
            <br />
            al <span className="gradient-text">Control Digital</span>
          </h1>

          <p
            className={`text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 ${mounted ? "animate-fade-in-up delay-200" : "opacity-0"
              }`}
          >
            Diseño e implemento soluciones tecnológicas a medida para
            <span className="text-cyan-400 font-medium"> cualquier industria</span>:
            desde sistemas de reservas hasta ERPs y automatización que funciona.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center ${mounted ? "animate-fade-in-up delay-300" : "opacity-0"
              }`}
          >
            <a href={whatsappAsesoria} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg animate-pulse-glow">
              Agendar Asesoría Gratis
              <ArrowRight size={20} />
            </a>
            <a href="#servicios" className="btn-outline text-lg">
              Ver Soluciones
              <ChevronDown size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          SECCIÓN "EL PROBLEMA"
          ============================================ */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--slate-800) 1px, transparent 0)`,
            backgroundSize: "40px 40px"
          }}
        />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Copy */}
            <div className="reveal">
              <span className="inline-flex items-center gap-2 text-red-500 font-semibold text-sm uppercase tracking-wider mb-4">
                <AlertTriangle size={18} />
                El Problema
              </span>

              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                ¿Tu escritorio
                <span className="block text-red-500">se ve así?</span>
              </h2>

              <p className="text-lg text-slate-600 mb-8">
                El desorden administrativo te está costando dinero, tiempo y oportunidades.
                Estos problemas son más comunes de lo que crees:
              </p>

              <ul className="space-y-4">
                {[
                  { icon: Clock, text: "Procesos manuales que ralentizan tu operación" },
                  { icon: Database, text: "Datos fragmentados en hojas de cálculo y sistemas desconectados" },
                  { icon: BarChart3, text: "Sin visibilidad en tiempo real para tomar decisiones" },
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
            </div>

            {/* Right: Image */}
            <div className="reveal delay-200">
              <div className="relative overflow-hidden rounded-2xl">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl blur-2xl" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-2xl" />

                <Image
                  src="/problema.webp"
                  alt="Escritorio caótico con papeles desorganizados"
                  width={700}
                  height={470}
                  className="relative rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-500 w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECCIÓN "MI PROCESO"
          ============================================ */}
      <section id="proceso" className="py-24 md:py-32 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
        {/* Background elements */}
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 60%)"
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, transparent 60%)"
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Header */}
          <div className="text-center mb-16 reveal">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-cyan-400 text-sm font-semibold mb-4">
              Mi Proceso
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Tecnología que se Adapta a
              <span className="gradient-text"> Tu Negocio</span>
            </h2>
            <p className="text-xl text-cyan-400 font-medium mb-4">
              No al revés.
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Nada de plantillas genéricas. Cada solución se diseña desde cero,
              escuchando tu realidad y construyendo exactamente lo que tu negocio necesita.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                step: "01",
                title: "Diagnóstico Gratuito",
                description: "Escucho tu problema real. Identifico dónde pierdes tiempo y dinero hoy.",
                deliverable: "Resumen de tu problema principal",
                color: "from-blue-500 to-blue-600"
              },
              {
                step: "02",
                title: "Diseño a Medida",
                description: "Dibujo cómo funcionará la solución. Recibes una maqueta visual GRATIS antes de pagar.",
                deliverable: "Maqueta demo + Presupuesto",
                color: "from-cyan-500 to-cyan-600",
                highlight: true
              },
              {
                step: "03",
                title: "Desarrollo Tecnológico",
                description: "Desarrollo tu solución con avances semanales. Sin desaparecer por semanas.",
                deliverable: "Sistema funcionando al 100%",
                color: "from-purple-500 to-purple-600"
              },
              {
                step: "04",
                title: "Acompañamiento",
                description: "Te capacito a ti y tu equipo. Incluye videos explicativos y soporte inicial.",
                deliverable: "Manuales + Garantía",
                color: "from-green-500 to-green-600"
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`reveal delay-${(index + 1) * 100} group relative`}
              >
                <div className={`h-full p-6 rounded-2xl border transition-all duration-300 ${item.highlight
                  ? "bg-gradient-to-b from-cyan-500/10 to-blue-500/10 border-cyan-500/30 hover:border-cyan-400/50"
                  : "bg-slate-800/50 border-slate-700/50 hover:border-slate-600"
                  }`}>
                  {/* Step number */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} text-white font-bold text-lg mb-4 group-hover:scale-110 transition-transform`}>
                    {item.step}
                  </div>

                  {/* Highlight badge */}
                  {item.highlight && (
                    <span className="absolute top-4 right-4 px-2 py-1 rounded-full bg-cyan-500 text-white text-xs font-semibold">
                      ¡GRATIS!
                    </span>
                  )}

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Deliverable */}
                  <div className="flex items-center gap-2 text-sm">
                    <ArrowRight size={14} className="text-cyan-400" />
                    <span className="text-cyan-400 font-medium">{item.deliverable}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom message */}
          <div className="text-center mt-16 reveal">
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 mb-8">
              <Check size={20} className="text-green-500" />
              <span className="text-slate-300">
                <span className="text-white font-semibold">Sin riesgo:</span> Ves la maqueta antes de comprometerte
              </span>
            </div>
            <div className="block">
              <a
                href={whatsappAsesoria}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg animate-pulse-glow"
              >
                Agendar Diagnóstico Gratis
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECCIÓN "SERVICIOS"
          ============================================ */}
      <section id="servicios" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 60%)"
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16 reveal">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">

              Soluciones a tu Medida
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              La Tecnología que tu
              <span className="gradient-text"> Negocio Necesita</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Implemento soluciones tecnológicas que transforman la forma en que operas,
              dándote control total sobre tu empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "/consultoria.webp",
                title: "Consultoría IT",
                description: "Analizo tu negocio y diseño la estrategia tecnológica perfecta para tus objetivos.",
                features: ["Diagnóstico gratuito", "Plan personalizado", "Implementación guiada"]
              },
              {
                image: "/Desarrollo.webp",
                title: "Desarrollo a Medida",
                description: "Creo aplicaciones web y móviles que se adaptan exactamente a tus procesos.",
                features: ["Apps web modernas", "Integraciones API", "Soporte continuo"]
              },
              {
                image: "/Sistemas.webp",
                title: "Sistemas ERP",
                description: "Implemento sistemas de gestión que unifican todas tus operaciones en un solo lugar.",
                features: ["Control de inventario", "Facturación automática", "Reportes en tiempo real"]
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`reveal delay-${(index + 1) * 100} card-3d bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-200`}
              >
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="w-20 h-20 relative animate-float" style={{ animationDelay: `${index * 200}ms` }}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-slate-600">
                      <Check size={16} className="text-blue-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Sectores */}
          <div className="mt-14 reveal">
            <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">
              Sectores donde he trabajado
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { icon: Building2, label: "Turismo y Hotelería" },
                { icon: HeartPulse, label: "Salud" },
                { icon: Car, label: "Automotriz" },
                { icon: ShoppingBag, label: "Retail y Comercio" },
                { icon: Wrench, label: "Talleres y Servicios" },
                { icon: Globe, label: "Startups y Tech" },
                { icon: Layers, label: "Más sectores" },
              ].map((sector, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium shadow-sm hover:border-blue-300 hover:text-blue-600 transition-colors">
                  <sector.icon size={15} className="text-blue-500 flex-shrink-0" />
                  {sector.label}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-14 reveal">
            <a
              href={whatsappCotizacion}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              Solicitar Cotización
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          SECCIÓN "SOBRE MÍ"
          ============================================ */}
      <section id="sobre-mi" className="py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--slate-800) 1px, transparent 0)`,
            backgroundSize: "40px 40px"
          }}
        />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Left: Image */}
            <div className="lg:col-span-2 reveal">
              <div className="relative flex justify-center lg:justify-end">
                {/* Decorative ring */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-72 h-72 md:w-80 md:h-80 rounded-full border-2 border-dashed border-blue-200 animate-rotate-slow" />
                </div>

                {/* Profile image */}
                <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src="/sobremi.png"
                    alt="Francisco - Consultor IT"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold rounded-full shadow-lg">
                  Consultor IT
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-3 reveal delay-200">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-6">
                Sobre Mí
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Hola, soy <span className="gradient-text">Francisco</span>
              </h2>

              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Más que un desarrollador de software, soy un <span className="text-slate-900 font-medium">consultor apasionado</span> por transformar el caos operativo en soluciones digitales eficientes y rentables.
                </p>

                <p className="text-lg font-medium text-blue-600 border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r-lg">
                  &ldquo;Tecnología que se adapta a tu negocio, no al revés.&rdquo;
                </p>

                <p>
                  No creo en vender &ldquo;enlatados&rdquo;. Me dedico a <span className="text-slate-900 font-medium">escuchar y entender a fondo</span> los desafíos únicos de tu organización —ya seas una startup, un hotel, una clínica o una empresa establecida— antes de escribir una sola línea de código.
                </p>

                <p>
                  Mi objetivo final es simple: <span className="text-slate-900 font-medium">liberar a ti y a tu equipo</span> de las tareas manuales y repetitivas mediante automatización inteligente, devolviéndoles el tiempo valioso para enfocarse en lo que realmente importa: <span className="gradient-text font-semibold">hacer crecer el negocio</span>.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href={whatsappContacto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <WhatsAppIcon size={20} />
                  Conversemos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ============================================
          SECCIÓN "CASOS DE ÉXITO"
          ============================================ */}
      <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--slate-800) 1px, transparent 0)`,
            backgroundSize: "40px 40px"
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16 reveal">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
              Casos Reales
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Portafolio de <span className="gradient-text">Proyectos</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Soluciones implementadas en distintos sectores e industrias
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* ★ PROYECTO DESTACADO: Domos El Tabo */}
            <div className="reveal md:col-span-2 group">

              <div className="bg-white rounded-2xl overflow-hidden border-2 border-cyan-200 hover:border-cyan-400 hover:shadow-2xl transition-all duration-500 relative">
                <div className="flex flex-col md:flex-row">

                  {/* Image — 60% ancho en desktop, altura fija */}
                  <div
                    className="relative overflow-hidden cursor-pointer md:w-3/5 flex-shrink-0 h-56 md:h-64"
                    onClick={() => openLightbox(["/proyectos/reserva-public.png", "/proyectos/login-admin.png"])}
                  >
                    <Image
                      src="/proyectos/reserva-public.png"
                      alt="Domos El Tabo - Sistema de Reservas"
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-cyan-500 text-white text-xs font-semibold">
                        Turismo
                      </span>
                    </div>
                    {/* Indicador de carrusel */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-white shadow"></span>
                      <span className="w-2 h-2 rounded-full bg-white/50 shadow"></span>
                    </div>
                  </div>

                  {/* Content — 40% */}
                  <div className="p-5 flex flex-col justify-center md:w-2/5">
                    {/* Badge destacado — alineado con el badge Turismo */}
                    <div className="mb-3">
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold shadow-md tracking-wide">
                        ★ Proyecto Destacado
                      </span>
                    </div>
                    {/* Followers badge Instagram */}
                    <a
                      href="https://www.instagram.com/domoseltabo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white text-xs font-semibold w-fit hover:opacity-90 transition-opacity"
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                      @domoseltabo · 206K seguidores
                    </a>

                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      Domos El Tabo
                    </h3>
                    <p className="text-slate-600 mb-4 text-sm">
                      <span className="font-semibold text-slate-800">Sistema de Reservas Completo.</span> Plataforma full-stack con portal de reservas para huéspedes, panel administrativo, pagos online vía Flow.cl y chatbot de WhatsApp con IA para atención 24/7.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-500">
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-green-500" />
                        Reservas online con pago de abono (Flow.cl)
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-green-500" />
                        Panel admin + chatbot WhatsApp con IA
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-green-500" />
                        Check-in por QR y gestión de huéspedes
                      </li>
                    </ul>

                    {/* Stack tecnológico */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Flow", "WhatsApp API", "Cloudflare"].map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-medium">{tech}</span>
                      ))}
                    </div>

                    {/* Sitio en vivo */}
                    <a
                      href="https://reserva.cabañaseneltabo.cl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-cyan-600 hover:text-cyan-700 w-fit"
                    >
                      <Globe size={15} />
                      Ver sitio en vivo
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Proyecto 2: Hotel de la Costa */}
            <div className="reveal delay-100 group">
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                {/* Portada estilo mockup de producto: dashboard admin */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <div className="absolute inset-0" style={{ background: "radial-gradient(120% 80% at 50% 0%, #ffffff 0%, #eef2f7 100%)" }} />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-white text-slate-600 text-xs font-semibold border border-slate-200 shadow-sm">Hotelería</span>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-3 w-[86%] bg-white rounded-lg border border-slate-200 shadow-xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500" style={{ transformOrigin: "center bottom" }}>
                    <div className="h-6 bg-slate-800 flex items-center gap-1.5 px-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <Building2 size={11} className="text-cyan-300 ml-1.5" />
                      <span className="h-1.5 flex-1 bg-slate-600 rounded-full"></span>
                    </div>
                    <div className="flex h-24 bg-white">
                      <div className="w-[26%] bg-slate-900 p-2 flex flex-col gap-1.5">
                        <span className="h-1.5 w-4/5 rounded-full bg-cyan-400"></span>
                        <span className="h-1.5 w-3/5 rounded-full bg-slate-600"></span>
                        <span className="h-1.5 w-3/4 rounded-full bg-slate-600"></span>
                        <span className="h-1.5 w-2/3 rounded-full bg-slate-600"></span>
                      </div>
                      <div className="flex-1 p-2.5">
                        <div className="flex gap-1.5 mb-2">
                          <span className="flex-1 h-7 rounded bg-slate-100"></span>
                          <span className="flex-1 h-7 rounded bg-cyan-50"></span>
                          <span className="flex-1 h-7 rounded bg-slate-100"></span>
                        </div>
                        <div className="space-y-1.5">
                          <span className="block h-1.5 w-full rounded-full bg-slate-100"></span>
                          <span className="block h-1.5 w-5/6 rounded-full bg-slate-100"></span>
                          <span className="block h-1.5 w-11/12 rounded-full bg-slate-100"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-slate-900 mb-1">Hotel de la Costa</h3>
                  <p className="text-slate-600 mb-3 text-sm">
                    <span className="font-semibold text-slate-800">Sistema administrativo para hotel.</span> Panel de gestión para operar reservas, habitaciones, pagos e historial de huéspedes.
                  </p>
                  <ul className="space-y-1 text-xs text-slate-500 mb-3">
                    <li className="flex items-center gap-2"><Check size={12} className="text-green-500" />Reservas y estado de habitaciones</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-green-500" />Pagos e historial de huéspedes</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-green-500" />Reportes de gestión</li>
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma"].map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-medium">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Proyecto 3: Entre Huevos y Quesos */}
            <div className="reveal delay-200 group">
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-amber-200 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                {/* Portada estilo mockup de producto: sitio con catálogo */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <div className="absolute inset-0" style={{ background: "radial-gradient(120% 80% at 50% 0%, #ffffff 0%, #eef2f7 100%)" }} />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-white text-slate-600 text-xs font-semibold border border-slate-200 shadow-sm">Alimentos</span>
                  </div>
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 text-[11px] font-semibold border border-amber-200">En desarrollo</span>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-3 w-[86%] bg-white rounded-lg border border-slate-200 shadow-xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500" style={{ transformOrigin: "center bottom" }}>
                    <div className="h-6 bg-slate-800 flex items-center gap-1.5 px-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <ShoppingBag size={11} className="text-cyan-300 ml-1.5" />
                      <span className="h-1.5 flex-1 bg-slate-600 rounded-full"></span>
                    </div>
                    <div className="h-24 bg-white p-2.5">
                      <div className="flex items-center gap-1.5 mb-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                        <span className="h-1.5 w-10 rounded-full bg-slate-300"></span>
                        <span className="ml-auto h-1.5 w-5 rounded-full bg-slate-200"></span>
                        <span className="h-1.5 w-5 rounded-full bg-slate-200"></span>
                        <span className="h-1.5 w-5 rounded-full bg-slate-200"></span>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5">
                        <span className="h-7 rounded bg-slate-100"></span>
                        <span className="h-7 rounded bg-cyan-50"></span>
                        <span className="h-7 rounded bg-slate-100"></span>
                        <span className="h-7 rounded bg-slate-100"></span>
                        <span className="h-7 rounded bg-slate-100"></span>
                        <span className="h-7 rounded bg-cyan-50"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-slate-900 mb-1">Entre Huevos y Quesos</h3>
                  <p className="text-slate-600 mb-3 text-sm">
                    <span className="font-semibold text-slate-800">Sitio para distribuidora de alimentos.</span> Presentación de marca, catálogo de productos y canal de contacto directo.
                  </p>
                  <ul className="space-y-1 text-xs text-slate-500 mb-3">
                    <li className="flex items-center gap-2"><Check size={12} className="text-green-500" />Presentación de marca</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-green-500" />Catálogo de productos</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-green-500" />Contacto directo</li>
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {["Next.js", "React"].map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-medium">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Proyecto 4: ArchivaCloud */}
            <div className="reveal delay-300 group">
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-cyan-200 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                {/* Portada estilo mockup de producto: gestor de archivos */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <div className="absolute inset-0" style={{ background: "radial-gradient(120% 80% at 50% 0%, #ffffff 0%, #eef2f7 100%)" }} />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-white text-slate-600 text-xs font-semibold border border-slate-200 shadow-sm">Cloud / SaaS</span>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-3 w-[86%] bg-white rounded-lg border border-slate-200 shadow-xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500" style={{ transformOrigin: "center bottom" }}>
                    <div className="h-6 bg-slate-800 flex items-center gap-1.5 px-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <Cloud size={11} className="text-cyan-300 ml-1.5" />
                      <span className="h-1.5 flex-1 bg-slate-600 rounded-full"></span>
                    </div>
                    <div className="flex h-24 bg-white">
                      <div className="w-[28%] bg-slate-50 border-r border-slate-100 p-2 flex flex-col gap-1.5">
                        <span className="h-1.5 w-4/5 rounded-full bg-cyan-400"></span>
                        <span className="h-1.5 w-3/5 rounded-full bg-slate-200"></span>
                        <span className="h-1.5 w-2/3 rounded-full bg-slate-200"></span>
                        <span className="h-1.5 w-1/2 rounded-full bg-slate-200"></span>
                      </div>
                      <div className="flex-1 p-2 flex flex-col gap-1.5">
                        <div className="flex items-center gap-1.5"><span className="w-4 h-4 rounded bg-cyan-100"></span><span className="h-1.5 flex-1 rounded-full bg-slate-100"></span></div>
                        <div className="flex items-center gap-1.5"><span className="w-4 h-4 rounded bg-slate-100"></span><span className="h-1.5 flex-1 rounded-full bg-slate-100"></span></div>
                        <div className="flex items-center gap-1.5"><span className="w-4 h-4 rounded bg-slate-100"></span><span className="h-1.5 flex-1 rounded-full bg-slate-100"></span></div>
                        <div className="flex items-center gap-1.5"><span className="w-4 h-4 rounded bg-cyan-100"></span><span className="h-1.5 flex-1 rounded-full bg-slate-100"></span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-slate-900 mb-1">ArchivaCloud</h3>
                  <p className="text-slate-600 mb-3 text-sm">
                    <span className="font-semibold text-slate-800">Portal de archivos en la nube.</span> Carga y descarga seguras mediante URLs prefirmadas, con un enfoque de seguridad de mínimo privilegio.
                  </p>
                  <ul className="space-y-1 text-xs text-slate-500 mb-3">
                    <li className="flex items-center gap-2"><Check size={12} className="text-green-500" />URLs prefirmadas (S3)</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-green-500" />IAM de mínimo privilegio</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-green-500" />Cifrado y TLS extremo a extremo</li>
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {["FastAPI", "Python", "React", "AWS S3", "DynamoDB", "IAM"].map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-medium">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Proyecto 5: Data Cleaner */}
            <div className="reveal delay-400 group">
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-violet-200 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                {/* Portada estilo mockup de producto: tabla de datos */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <div className="absolute inset-0" style={{ background: "radial-gradient(120% 80% at 50% 0%, #ffffff 0%, #eef2f7 100%)" }} />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-white text-slate-600 text-xs font-semibold border border-slate-200 shadow-sm">Datos / ETL</span>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-3 w-[86%] bg-white rounded-lg border border-slate-200 shadow-xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500" style={{ transformOrigin: "center bottom" }}>
                    <div className="h-6 bg-slate-800 flex items-center gap-1.5 px-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <Database size={11} className="text-cyan-300 ml-1.5" />
                      <span className="h-1.5 flex-1 bg-slate-600 rounded-full"></span>
                    </div>
                    <div className="h-24 bg-white p-2.5">
                      <div className="grid grid-cols-4 gap-1 mb-1.5">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <span key={i} className="h-3 rounded-sm bg-cyan-100"></span>
                        ))}
                      </div>
                      <div className="space-y-1">
                        {Array.from({ length: 4 }).map((_, r) => (
                          <div key={r} className="grid grid-cols-4 gap-1">
                            {Array.from({ length: 4 }).map((_, c) => (
                              <span key={c} className="h-2.5 rounded-sm bg-slate-100"></span>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-slate-900 mb-1">Data Cleaner</h3>
                  <p className="text-slate-600 mb-3 text-sm">
                    <span className="font-semibold text-slate-800">Plataforma de limpieza de datos (ETL).</span> Pipeline para cargar, normalizar, validar y exportar datasets de forma consistente.
                  </p>
                  <ul className="space-y-1 text-xs text-slate-500 mb-3">
                    <li className="flex items-center gap-2"><Check size={12} className="text-green-500" />Carga y normalización</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-green-500" />Validación de datos</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-green-500" />Exportación de datasets</li>
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {["Next.js", "TypeScript"].map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-medium">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className="text-center mt-16 reveal">
            <p className="text-slate-600 mb-6">
              ¿Quieres ver tu empresa aquí?
            </p>
            <a
              href={whatsappProyecto}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              Comenzar mi Proyecto
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          SECCIÓN "TECH STACK"
          ============================================ */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
        {/* Subtle glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)"
          }}
        />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-cyan-400 text-sm font-medium mb-4">
              Tecnologías Modernas
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Stack <span className="gradient-text">de Desarrollo</span>
            </h3>
            <p className="text-slate-400 mt-2 max-w-lg mx-auto text-sm">
              Trabajo con las herramientas más actuales y robustas del mercado
            </p>
          </div>

          {/* Tech logos grid with infinite scroll animation */}
          <div className="relative overflow-hidden">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

            {/* Scrolling container */}
            <div className="flex animate-scroll-tech gap-12 py-6">
              {/* First set */}
              {[
                { name: "Next.js", file: "Next.js.svg" },
                { name: "React", file: "React.svg" },
                { name: "TypeScript", file: "TypeScript.svg" },
                { name: "Node.js", file: "Node.js.svg" },
                { name: "PostgreSQL", file: "PostgresSQL.svg" },
                { name: "Python", file: "Python.svg" },
                { name: "Tailwind CSS", file: "Tailwind CSS.svg" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 min-w-[100px] group"
                >
                  <div className="w-16 h-16 relative flex items-center justify-center p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 group-hover:border-cyan-500/50 group-hover:bg-slate-800 transition-all duration-300">
                    <Image
                      src={`/stacks/${tech.file}`}
                      alt={tech.name}
                      width={40}
                      height={40}
                      className="object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                    />
                  </div>
                  <span className="text-xs text-slate-500 group-hover:text-cyan-400 transition-colors font-medium">
                    {tech.name}
                  </span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[
                { name: "Next.js", file: "Next.js.svg" },
                { name: "React", file: "React.svg" },
                { name: "TypeScript", file: "TypeScript.svg" },
                { name: "Node.js", file: "Node.js.svg" },
                { name: "PostgreSQL", file: "PostgresSQL.svg" },
                { name: "Python", file: "Python.svg" },
                { name: "Tailwind CSS", file: "Tailwind CSS.svg" },
              ].map((tech, index) => (
                <div
                  key={`dup-${index}`}
                  className="flex flex-col items-center gap-3 min-w-[100px] group"
                >
                  <div className="w-16 h-16 relative flex items-center justify-center p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 group-hover:border-cyan-500/50 group-hover:bg-slate-800 transition-all duration-300">
                    <Image
                      src={`/stacks/${tech.file}`}
                      alt={tech.name}
                      width={40}
                      height={40}
                      className="object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                    />
                  </div>
                  <span className="text-xs text-slate-500 group-hover:text-cyan-400 transition-colors font-medium">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECCIÓN "PREGUNTAS FRECUENTES"
          ============================================ */}
      <section id="faq" className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="text-center mb-16 reveal">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
              Resolviendo Dudas
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Preguntas <span className="gradient-text">Frecuentes</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Las dudas más comunes que tienen los empresarios antes de dar el salto digital
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "¿Tengo que ser experto en computación para usar lo que construyes?",
                answer: "No. Mi trabajo es traducir procesos complejos en pantallas simples. Diseño interfaces intuitivas (similares a usar una App bancaria) para que tú y tu equipo las usen desde el primer día sin complicaciones."
              },
              {
                question: "¿Puedo ver la información desde mi celular o estando en obra?",
                answer: "Sí, totalmente. Todo lo que desarrollo es tecnología web responsiva. Podrás controlar tu inventario, ver reportes o gestionar pedidos desde tu celular, tablet o computador, estés donde estés, sin instalar nada extra."
              },
              {
                question: "¿Trabajas con empresas de cualquier tamaño e industria?",
                answer: "Sí. He trabajado con startups, clínicas, hoteles, talleres mecánicos y empresas establecidas. Mi enfoque modular permite adaptarme a cualquier presupuesto y sector: construimos lo que necesitas hoy y escalamos después según tu crecimiento."
              },
              {
                question: "¿Qué pasa si algo falla después de la entrega?",
                answer: "No te dejo solo. Todos mis desarrollos incluyen un periodo de garantía y acompañamiento (Marcha Blanca). Si aparece un error técnico en ese lapso, lo soluciono sin costo. Además, ofrezco planes de soporte para tu tranquilidad a largo plazo."
              },
              {
                question: "¿Puedo justificar este gasto en mi empresa?",
                answer: "Sí. Estoy formalizado ante el SII. Por cada proyecto emito Boleta de Honorarios Electrónica por servicios profesionales de consultoría y desarrollo, lo que te permite respaldar la inversión y deducirla de los gastos de tu empresa."
              }
            ].map((faq, index) => (
              <details
                key={index}
                className="reveal group bg-white rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-0">
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 reveal">
            <p className="text-slate-600 mb-6">
              ¿Tienes otra pregunta?
            </p>
            <a
              href={whatsappContacto}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              <WhatsAppIcon size={20} />
              Pregúntame directamente
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          FOOTER
          ============================================ */}
      <footer className="bg-slate-950 py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Column 1: Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/logo.webp"
                  alt="Francisco Dev"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <span className="text-white font-bold text-xl">Francisco Dev</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Consultoría tecnológica y desarrollo de software a medida para empresas
                que buscan digitalizar sus operaciones.
              </p>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <MapPin size={14} className="text-cyan-400" />
                <span>Chile</span>
              </div>
            </div>

            {/* Column 2: Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Servicios</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li>
                  <a href={whatsappConsultoria} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <ArrowRight size={12} />
                    Consultoría IT
                  </a>
                </li>
                <li>
                  <a href={whatsappDesarrollo} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <ArrowRight size={12} />
                    Desarrollo Web
                  </a>
                </li>
                <li>
                  <a href={whatsappERP} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <ArrowRight size={12} />
                    Sistemas ERP
                  </a>
                </li>
                <li>
                  <a href={whatsappApps} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <ArrowRight size={12} />
                    Apps a Medida
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contacto</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                    <WhatsAppIcon size={16} />
                  </div>
                  <span>+56 9 8554 1349</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400">
                    <MapPin size={16} />
                  </div>
                  <span>Chile</span>
                </li>
              </ul>
            </div>

            {/* Column 4: CTA */}
            <div>
              <h4 className="text-white font-semibold mb-4">¿Tienes un proyecto?</h4>
              <p className="text-slate-400 text-sm mb-4">
                Conversemos sobre cómo puedo ayudarte a digitalizar tu negocio.
              </p>
              <a
                href={whatsappContacto}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-lg transition-all hover:scale-105 text-sm"
              >
                <WhatsAppIcon size={18} />
                Escribir por WhatsApp
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8" />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-slate-500 text-sm">
            <span>© {new Date().getFullYear()} Francisco Dev. Todos los derechos reservados.</span>
          </div>
        </div>
      </footer>

      {/* ============================================
          LIGHTBOX MODAL CON CARRUSEL
          ============================================ */}
      {lightboxImages.length > 0 && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 animate-fade-in cursor-pointer"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>

          {/* Flecha izquierda */}
          {lightboxImages.length > 1 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-10 disabled:opacity-30"
              disabled={lightboxIndex === 0}
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(i => Math.max(0, i - 1)); }}
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {/* Flecha derecha */}
          {lightboxImages.length > 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-10 disabled:opacity-30"
              disabled={lightboxIndex === lightboxImages.length - 1}
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(i => Math.min(lightboxImages.length - 1, i + 1)); }}
            >
              <ChevronRight size={32} />
            </button>
          )}

          {/* Imagen */}
          <div
            className="relative max-w-6xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImages[lightboxIndex]}
              alt="Proyecto expandido"
              width={1400}
              height={900}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
          </div>

          {/* Dots indicadores */}
          {lightboxImages.length > 1 && (
            <div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {lightboxImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    i === lightboxIndex ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </main>
  );
}
