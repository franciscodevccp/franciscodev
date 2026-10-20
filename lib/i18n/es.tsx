/**
 * Diccionario en español: los textos que la landing mostraba antes de existir
 * /en, movidos aquí sin cambios para que la versión en español quede idéntica.
 * El orden de las claves sigue el orden de las secciones del componente.
 */
import { Fragment } from "react";
import type { Dict } from "./types";

export const es: Dict = {
  wa: {
    contact: "Hola Francisco, vi tu página web y me gustaría más información sobre tus servicios.",
    assessment: "Hola Francisco, me gustaría agendar una asesoría gratuita para mi negocio.",
    quote: "Hola Francisco, me interesa solicitar una cotización para un proyecto.",
    project: "Hola Francisco, tengo un proyecto en mente y me gustaría conversarlo contigo.",
    sell: "Hola Francisco, quiero vender online: una tienda o sitio de venta con pagos integrados.",
    ops: "Hola Francisco, quiero ordenar y controlar mi operación con un sistema administrativo.",
    software: "Hola Francisco, necesito software a medida para web y móvil.",
  },
  email: {
    subject: "Proyecto de software — Francisco Dev",
    body: "Hola Francisco:\n\nCuéntame sobre mi proyecto:\n- Qué necesito:\n- Mi negocio / país:\n- Plazo aproximado:\n",
  },
  nav: { cta: "Hablemos" },
  hero: {
    eyebrow: "Consultoría Tecnológica",
    t1: "Del ",
    g1: "Caos Manual",
    t2: "al ",
    g2: "Control Digital",
    subtitle: (
      <>
        Te ayudo a vender online, ordenar tu operación y llevar tu software a cualquier dispositivo.
        <span className="text-cyan-400 font-medium"> Tecnología que se adapta a tu negocio</span>, no al revés.
      </>
    ),
    ctaPrimary: "Agendar Asesoría Gratis",
    ctaSecondary: "Ver Soluciones",
    alt: "Escritorio tech moderno",
  },
  problem: {
    eyebrow: "El Problema",
    titleTop: "¿Tu escritorio",
    titleRed: "se ve así?",
    subtitle: "El desorden administrativo te está costando dinero, tiempo y oportunidades. Estos problemas son más comunes de lo que crees:",
    items: [
      "Procesos manuales que ralentizan tu operación",
      "Datos fragmentados en hojas de cálculo y sistemas desconectados",
      "Sin visibilidad en tiempo real para tomar decisiones",
    ],
    alt: "Escritorio caótico con papeles desorganizados",
  },
  process: {
    eyebrow: "Mi Proceso",
    t: "Tecnología que se Adapta a",
    g: " Tu Negocio",
    tagline: "No al revés.",
    subtitle: "Nada de plantillas genéricas. Cada solución se diseña desde cero, escuchando tu realidad y construyendo exactamente lo que tu negocio necesita.",
    steps: [
      {
        title: "Diagnóstico Gratuito",
        description: "Escucho tu problema real. Identifico dónde pierdes tiempo y dinero hoy.",
        deliverable: "Resumen de tu problema principal",
      },
      {
        title: "Diseño a Medida",
        description: "Dibujo cómo funcionará la solución. Recibes una maqueta visual GRATIS antes de pagar.",
        deliverable: "Maqueta demo + Presupuesto",
      },
      {
        title: "Desarrollo Tecnológico",
        description: "Desarrollo tu solución con avances semanales. Sin desaparecer por semanas.",
        deliverable: "Sistema funcionando al 100%",
      },
      {
        title: "Acompañamiento",
        description: "Te capacito a ti y tu equipo. Incluye videos explicativos y soporte inicial.",
        deliverable: "Manuales + Garantía",
      },
    ],
    freeBadge: "¡GRATIS!",
    noRiskBold: "Sin riesgo:",
    noRiskRest: "Ves la maqueta antes de comprometerte",
    cta: "Agendar Diagnóstico Gratis",
  },
  services: {
    eyebrow: "En qué te ayudo",
    t: "Tres formas de",
    g: " impulsar tu negocio",
    subtitle: "Cada solución se diseña a la medida de tu operación. Tecnología que se adapta a tu negocio, no al revés.",
    cards: [
      {
        title: "Vender online",
        description: "Tiendas y sitios de venta con pagos integrados, listos para recibir clientes y cobrar sin intermediarios.",
        features: ["Catálogo y carrito de compra", "Pagos online integrados", "Listo para vender 24/7"],
      },
      {
        title: "Ordenar y controlar tu operación",
        description: "Sistemas administrativos, inventario, reservas y ERP para tener todo bajo control en un solo lugar.",
        features: ["Inventario y reservas", "Toda tu operación centralizada", "Reportes en tiempo real"],
      },
      {
        title: "Software en cualquier dispositivo",
        description: "Apps web y móviles que se ven y funcionan bien en cualquier pantalla, sin instalar nada extra.",
        features: ["Web y móvil a medida", "Se adapta a cualquier pantalla", "Acceso desde donde estés"],
      },
    ],
    sectorsLabel: "Sectores donde he trabajado",
    sectors: ["Turismo y Hotelería", "Salud", "Automotriz", "Retail y Comercio", "Talleres y Servicios", "Startups y Tech", "Más sectores"],
    cta: "Solicitar Cotización",
  },
  about: {
    eyebrow: "Sobre Mí",
    badge: "Consultor IT",
    titlePre: "Hola, soy ",
    titleName: "Francisco",
    p1: (
      <>
        Más que un desarrollador de software, soy un <span className="text-slate-900 font-medium">consultor apasionado</span> por transformar el caos operativo en soluciones digitales eficientes y rentables.
      </>
    ),
    quote: "Tecnología que se adapta a tu negocio, no al revés.",
    paragraphs: [
      <Fragment key="enlatados">
        No creo en vender &ldquo;enlatados&rdquo;. Me dedico a <span className="text-slate-900 font-medium">escuchar y entender a fondo</span> los desafíos únicos de tu organización —ya seas una startup, un hotel, una clínica o una empresa establecida— antes de escribir una sola línea de código.
      </Fragment>,
      <Fragment key="objetivo">
        Mi objetivo final es simple: <span className="text-slate-900 font-medium">liberar a ti y a tu equipo</span> de las tareas manuales y repetitivas, devolviéndoles el tiempo valioso para enfocarse en lo que realmente importa: <span className="gradient-text font-semibold">hacer crecer el negocio</span>.
      </Fragment>,
    ],
    ctaWa: "Conversemos",
    ctaEmail: "Escríbeme un correo",
    alt: "Francisco - Consultor IT",
  },
  portfolio: {
    eyebrow: "Casos Reales",
    t: "Portafolio de ",
    g: "Proyectos",
    subtitle: "Soluciones implementadas en distintos sectores e industrias",
    featuredBadge: "★ Proyecto Destacado",
    igLabel: "@domoseltabo · 206K seguidores",
    featured: {
      badge: "Turismo",
      alt: "Domos El Tabo - Sistema de Reservas",
      title: "Domos El Tabo",
      lead: "Reservas directas 24/7.",
      rest: "Los huéspedes reservan y pagan online por su cuenta, sin llamadas ni planillas. Cero dobles reservas y atención automática por WhatsApp a toda hora.",
      bullets: [
        "Reservas y pagos online sin intermediarios",
        "Cero dobles reservas, agenda siempre al día",
        "Atención automática por WhatsApp 24/7",
      ],
      chips: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Flow", "WhatsApp API", "Cloudflare"],
      liveCta: "Ver sitio en vivo",
    },
    hotel: {
      badge: "Hotelería",
      title: "Hotel de la Costa",
      lead: "Toda la recepción en una pantalla.",
      rest: "El equipo opera reservas, habitaciones y pagos sin planillas sueltas ni dobles registros.",
      bullets: [
        "Disponibilidad de habitaciones al instante",
        "Pagos e historial de cada huésped en un lugar",
        "Reportes claros para decidir",
      ],
    },
    ehq: {
      badge: "Alimentos",
      devBadge: "En desarrollo",
      title: "Entre Huevos y Quesos",
      lead: "Catálogo siempre visible.",
      rest: "Los clientes ven los productos y contactan al instante, sin depender solo de las redes sociales.",
      bullets: [
        "Catálogo de productos siempre a mano",
        "Clientes que llegan y contactan directo",
        "Una marca que se ve profesional",
      ],
    },
    archiva: {
      badge: "Cloud / SaaS",
      title: "ArchivaCloud",
      lead: "Archivos compartidos sin exponer tus datos.",
      rest: "Sube y comparte documentos pesados de forma segura, con acceso controlado para cada persona.",
      bullets: [
        "Compartir archivos pesados sin riesgo",
        "Acceso controlado por usuario",
        "Datos cifrados de punta a punta",
      ],
    },
    data: {
      badge: "Datos / ETL",
      title: "Data Cleaner",
      lead: "Datos ordenados y confiables.",
      rest: "Convierte planillas desordenadas en información lista para usar, sin errores ni duplicados.",
      bullets: [
        "Adiós a los datos duplicados y con errores",
        "Información validada y consistente",
        "Lista para exportar y decidir",
      ],
    },
    ctaQuestion: "¿Quieres ver tu empresa aquí?",
    cta: "Comenzar mi Proyecto",
    lightboxAlt: "Proyecto expandido",
  },
  stack: {
    eyebrow: "Tecnologías Modernas",
    t: "Stack ",
    g: "de Desarrollo",
    subtitle: "Trabajo con las herramientas más actuales y robustas del mercado",
  },
  faq: {
    eyebrow: "Resolviendo Dudas",
    t: "Preguntas ",
    g: "Frecuentes",
    subtitle: "Las dudas más comunes que tienen los empresarios antes de dar el salto digital",
    items: [
      {
        question: "¿Tengo que ser experto en computación para usar lo que construyes?",
        answer: "No. Mi trabajo es traducir procesos complejos en pantallas simples. Diseño interfaces intuitivas (similares a usar una App bancaria) para que tú y tu equipo las usen desde el primer día sin complicaciones.",
      },
      {
        question: "¿Puedo ver la información desde mi celular o fuera de la oficina?",
        answer: "Sí, totalmente. Todo lo que desarrollo es tecnología web responsiva. Podrás controlar tu inventario, ver reportes o gestionar pedidos desde tu celular, tablet o computador, estés donde estés, sin instalar nada extra.",
      },
      {
        question: "¿Trabajas con empresas de cualquier tamaño e industria?",
        answer: "Sí. He trabajado con startups, clínicas, hoteles, talleres mecánicos y empresas establecidas. Mi enfoque modular permite adaptarme a cualquier presupuesto y sector: construimos lo que necesitas hoy y escalamos después según tu crecimiento.",
      },
      {
        question: "¿Trabajas con empresas de otros países de forma remota?",
        answer: "Sí. Trabajo 100% remoto con clientes de toda Latinoamérica. Cada proyecto parte con un proceso claro y un contrato que define alcance, plazos y pagos por etapas. Tendrás avances semanales, comunicación directa por WhatsApp y videollamada, y referencias disponibles a pedido.",
      },
      {
        question: "¿Qué pasa si algo falla después de la entrega?",
        answer: "No te dejo solo. Todos mis desarrollos incluyen un periodo de garantía y acompañamiento posterior a la entrega. Si aparece un error técnico en ese lapso, lo soluciono sin costo. Además, ofrezco planes de soporte para tu tranquilidad a largo plazo.",
      },
      {
        question: "¿Puedo justificar este gasto en mi empresa?",
        answer: "Sí. Por cada proyecto emito un comprobante por servicios profesionales de consultoría y desarrollo, para que respaldes la inversión en la contabilidad de tu empresa.",
      },
    ],
    ctaQuestion: "¿Tienes otra pregunta?",
    cta: "Pregúntame directamente",
  },
  footer: {
    blurb: "Consultoría tecnológica y desarrollo de software a medida para empresas que buscan digitalizar sus operaciones.",
    remoteBrand: "Trabajo remoto · LATAM",
    helpTitle: "En qué te ayudo",
    helpLinks: ["Vender online", "Ordenar tu operación", "Software a medida"],
    contactTitle: "Contacto",
    remoteContact: "Trabajo remoto · LATAM",
    projectTitle: "¿Tienes un proyecto?",
    projectText: "Conversemos sobre cómo puedo ayudarte a digitalizar tu negocio.",
    waCta: "Escribir por WhatsApp",
    emailCta: "Escribir un correo",
    rights: "Todos los derechos reservados.",
  },
};
