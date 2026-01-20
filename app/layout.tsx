import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://franciscodev.cl'),
  title: "Francisco Dev | Consultoría y Desarrollo Web",
  description: "Transformo el caos manual en control digital. ERPs, aplicaciones web a medida y consultoría tecnológica para pymes.",
  keywords: ["desarrollo web", "ERP", "consultoría IT", "Chile", "software a medida"],
  authors: [{ name: "Francisco Dev" }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Francisco Dev | Del Caos Manual al Control Digital",
    description: "ERPs, aplicaciones web a medida y consultoría tecnológica para pymes",
    url: 'https://franciscodev.cl',
    siteName: 'Francisco Dev',
    type: "website",
    locale: "es_CL",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Francisco Dev | Consultoría y Desarrollo Web',
    description: 'ERPs, aplicaciones web a medida y consultoría tecnológica para pymes',
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
  areaServed: {
    '@type': 'Country',
    name: 'Chile',
  },
  serviceType: ['Desarrollo Web', 'Sistemas ERP', 'Consultoría IT', 'Aplicaciones a Medida'],
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
