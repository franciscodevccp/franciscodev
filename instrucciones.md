# INSTRUCCIONES DEL PROYECTO: Francisco Dev Landing Page

## 1. Contexto del Proyecto
Sitio web de portafolio y servicios para "Francisco Dev", un desarrollador de software y consultor tecnológico en Concepción, Chile.
**Objetivo:** Vender servicios de modernización digital (ERPs, Desarrollo Web, Consultoría) a pymes que sufren de desorden administrativo.
**Estilo:** Minimalista, "Tech", Alto contraste (Dark Hero -> Light Content), uso de iconos 3D.

## 2. Tech Stack (Estricto)
* **Framework:** Next.js 14+ (App Router).
* **Lenguaje:** TypeScript.
* **Estilos:** Tailwind CSS.
* **Iconos UI:** Lucide React (para iconos pequeños como flechas o checkmarks).
* **Imágenes:** Componente `<Image />` de Next.js (optimizado).

## 3. Mapeo de Activos (Assets)
Las imágenes YA existen en la carpeta `/public`. No usar placeholders. Usar exactamente estos nombres de archivo:

| Ubicación en UI | Nombre de Archivo | Descripción Visual |
| :--- | :--- | :--- |
| **Hero Background** | `/header.webp` | Escritorio minimalista limpio (requiere overlay oscuro). |
| **Sección Problema** | `/problema.webp` | Escritorio caótico/desordenado. |
| **Icono Servicio 1** | `/consultoria.webp` | Bombilla 3D sobre chip. |
| **Icono Servicio 2** | `/Desarrollo.webp` | Corchetes de código `< >` estilo neón. |
| **Icono Servicio 3** | `/Sistemas.webp` | Bloques de datos apilados 3D. |
| **Logo** | `/logo.webp` | Logo de la marca (si aplica) o Favicon. |

## 4. Estructura de la Página (`src/app/page.tsx`)

### A. Navbar (Flotante o Simple)
* Texto/Logo: "Francisco Dev" (Tipografía Bold).
* Botón de acción: "Hablemos" (Link a WhatsApp).

### B. Hero Section (La Promesa)
* **Diseño:** Full viewport height (`h-screen`).
* **Fondo:** Imagen `/header.webp` con un overlay negro al 70% (`bg-black/70`) para legibilidad.
* **Texto Principal (H1):** "Del Caos Manual al Control Digital".
* **Subtítulo:** "Ayudo a empresas en Concepción a implementar tecnología real: ERPs, Apps a medida y automatización."
* **CTA Principal:** Botón Azul "Agendar Asesoría Gratis".
* **CTA Secundario:** Botón Outline "Ver Soluciones".

### C. Sección "El Problema" (El Contraste)
* **Diseño:** Fondo Blanco Puro (`bg-white`). Layout dividido (Split Screen).
* **Lado Izquierdo (Copy):**
    * Título: "¿Tu escritorio se ve así?"
    * Lista de dolores: "Inventario que no cuadra", "Ventas en papel", "Cero control".
* **Lado Derecho (Imagen):** Imagen `/problema.webp`. Debe tener bordes redondeados y sombra suave (`rounded-2xl shadow-xl`).

### D. Sección "Servicios" (La Solución)
* **Diseño:** Fondo Gris Muy Claro (`bg-slate-50`). Grid de 3 columnas.
* **Tarjetas (Cards):** Fondo blanco, sombra hover, borde sutil.
    * **Card 1:** Imagen `/consultoria.webp` (tamaño icon) + Título "Consultoría IT".
    * **Card 2:** Imagen `/Desarrollo.webp` + Título "Desarrollo a Medida".
    * **Card 3:** Imagen `/Sistemas.webp` + Título "Sistemas ERP".

### E. Footer
* Fondo Oscuro (`bg-slate-900`).
* Texto: "Francisco Dev • Concepción, Chile".
* Enlace grande a WhatsApp: `https://wa.me/56985541349`.

## 5. Reglas de Diseño (Tailwind)
* **Colores Primarios:** Cyan-400 y Blue-600 (usar para gradientes de texto y botones).
* **Tipografía:** Inter (Default de Next.js).
* **Espaciado:** Usar `py-20` o `py-24` entre secciones para dar aire.
* **Responsividad:** Mobile-first. En móvil las columnas pasan a ser filas (`flex-col`).

## 6. Comandos
* Correr servidor: `pnpm dev`