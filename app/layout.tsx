import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://franciscodev.cl'),
  title: "Francisco Dev | Software a Medida para Negocios de LATAM",
  description: "Transformo el caos manual en control digital: tiendas online, sistemas administrativos y software a medida para negocios de toda Latinoamérica. Trabajo 100% remoto.",
  keywords: ["software a medida", "tienda online", "sistema administrativo", "ERP", "aplicaciones web y móviles", "desarrollo de software LATAM", "trabajo remoto"],
  authors: [{ name: "Francisco Dev" }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Francisco Dev | Del Caos Manual al Control Digital",
    description: "Tiendas online, sistemas administrativos y software a medida para negocios de toda Latinoamérica.",
    url: 'https://franciscodev.cl',
    siteName: 'Francisco Dev',
    type: "website",
    locale: "es_419",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Francisco Dev | Software a Medida para Negocios de LATAM',
    description: 'Tiendas online, sistemas administrativos y software a medida para negocios de toda Latinoamérica.',
  },
};

// Schema.org JSON-LD para SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Francisco Dev',
  description: 'Consultoría tecnológica y desarrollo de software a medida para empresas.',
  url: 'https://franciscodev.cl',
  telephone: '+56985541349',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CL',
  },
  areaServed: ['Chile', 'México', 'Colombia', 'Perú', 'Argentina', 'América Latina'],
  serviceType: ['Tiendas online', 'Sistemas administrativos y ERP', 'Aplicaciones web y móviles', 'Software a medida'],
  priceRange: '$$',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
