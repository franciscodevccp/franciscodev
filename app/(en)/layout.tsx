/**
 * Layout raíz de la versión en inglés (/en). Existe aparte del de (es) porque
 * el atributo lang del <html>, la metadata y el JSON-LD son por idioma, y en
 * App Router eso solo se puede cambiar con un layout raíz por grupo de rutas.
 */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://franciscodev.cl'),
  title: "Francisco Dev | Custom Software for Growing Businesses",
  description: "I turn manual chaos into digital control: online stores, admin systems, and custom software for businesses across the Americas. 100% remote, async-first.",
  keywords: ["custom software", "online store", "admin system", "ERP", "web and mobile apps", "remote software development", "US", "Latin America"],
  authors: [{ name: "Francisco Dev" }],
  alternates: {
    canonical: '/en',
    languages: {
      'es-419': '/',
      'en': '/en',
      'x-default': '/',
    },
  },
  openGraph: {
    title: "Francisco Dev | From Manual Chaos to Digital Control",
    description: "Online stores, admin systems, and custom software for businesses across the US and Latin America.",
    url: 'https://franciscodev.cl/en',
    siteName: 'Francisco Dev',
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Francisco Dev | Custom Software for Growing Businesses',
    description: 'Online stores, admin systems, and custom software for businesses across the US and Latin America.',
  },
};

// Schema.org JSON-LD para SEO (versión en inglés)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Francisco Dev',
  description: 'Tech consulting and custom software development for businesses.',
  url: 'https://franciscodev.cl/en',
  telephone: '+56985541349',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CL',
  },
  areaServed: ['United States', 'Latin America', 'Chile'],
  serviceType: ['Online stores', 'Admin systems and ERP', 'Web and mobile apps', 'Custom software'],
  priceRange: '$$',
};

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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
