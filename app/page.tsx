"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  MapPin,
  Sparkles,
  AlertTriangle,
  FileSpreadsheet,
  TrendingDown,
  X
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
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

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

              Consultoría Tecnológica en Concepción
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
            Ayudo a empresas en Concepción a implementar tecnología real:
            <span className="text-cyan-400 font-medium"> ERPs, Apps a medida </span>
            y automatización que funciona.
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
                  { icon: FileSpreadsheet, text: "Inventario que nunca cuadra con la realidad" },
                  { icon: TrendingDown, text: "Ventas registradas en papel o Excel infinitos" },
                  { icon: AlertTriangle, text: "Cero visibilidad de tu negocio en tiempo real" },
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

          {/* CTA */}
          <div className="text-center mt-16 reveal">
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
              Proyectos en Desarrollo
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Portafolio de <span className="gradient-text">Desarrollos</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Soluciones tecnológicas en las que estoy trabajando actualmente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Proyecto 1: Lavado de Oído CCP */}
            <div className="reveal group">
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-200 hover:shadow-2xl transition-all duration-500">
                {/* Image */}
                <div className="relative overflow-hidden cursor-pointer" onClick={() => setLightboxImage("/proyectos/proyecto1.webp")}>
                  <Image
                    src="/proyectos/proyecto1.webp"
                    alt="Lavado de Oído CCP - Sistema de Reservas"
                    width={700}
                    height={450}
                    className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-semibold">
                      Salud
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Lavado de Oído CCP
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Sistema completo de reservas online con calendario interactivo,
                    formulario de pacientes y panel administrativo.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-500">
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-green-500" />
                      Reservas automatizadas 24/7
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-green-500" />
                      Panel de administración
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-green-500" />
                      Confirmación por email
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Proyecto 2: Innovautos */}
            <div className="reveal delay-200 group">
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-200 hover:shadow-2xl transition-all duration-500">
                {/* Image */}
                <div className="relative overflow-hidden cursor-pointer" onClick={() => setLightboxImage("/proyectos/proyecto2.webp")}>
                  <Image
                    src="/proyectos/proyecto2.webp"
                    alt="Innovautos - Plataforma de Vehículos"
                    width={700}
                    height={450}
                    className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-red-500 text-white text-xs font-semibold">
                      Automotriz
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Innovautos Concepción
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Plataforma web moderna para venta de vehículos usados con
                    catálogo interactivo, financiamiento y tasación online.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-500">
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-green-500" />
                      Catálogo de vehículos dinámico
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-green-500" />
                      Integración WhatsApp
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-green-500" />
                      Diseño premium responsive
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Proyecto 3: ERP Innovautos */}
            <div className="reveal delay-300 group md:col-span-2 lg:col-span-1">
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-200 hover:shadow-2xl transition-all duration-500">
                {/* Image */}
                <div className="relative overflow-hidden cursor-pointer" onClick={() => setLightboxImage("/proyectos/proyecto3.webp")}>
                  <Image
                    src="/proyectos/proyecto3.webp"
                    alt="ERP Innovautos - Panel de Administración"
                    width={700}
                    height={450}
                    className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-purple-500 text-white text-xs font-semibold">
                      ERP / Dashboard
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    ERP Taller Innovautos
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Sistema de gestión integral para taller mecánico con control
                    de servicios, trabajadores y finanzas en tiempo real.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-500">
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-green-500" />
                      Control de servicios y calidad
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-green-500" />
                      Gestión de trabajadores
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-green-500" />
                      Estadísticas e ingresos
                    </li>
                  </ul>
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
                <span>Concepción, Chile</span>
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
                  <span>Concepción, Chile</span>
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
            <span>© {new Date().getFullYear()} Francisco Dev. Todos los derechos reservados.</span>
            <div className="flex items-center gap-6">
              <span className="hover:text-cyan-400 transition-colors cursor-pointer">Términos</span>
              <span className="hover:text-cyan-400 transition-colors cursor-pointer">Privacidad</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ============================================
          LIGHTBOX MODAL
          ============================================ */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 animate-fade-in cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X size={24} />
          </button>

          {/* Image */}
          <div
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage}
              alt="Proyecto expandido"
              width={1400}
              height={900}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </main>
  );
}
