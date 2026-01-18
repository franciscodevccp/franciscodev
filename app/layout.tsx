import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Francisco Dev | Consultoría y Desarrollo Web en Concepción",
  description: "Transformo el caos manual en control digital. ERPs, aplicaciones web a medida y consultoría tecnológica para pymes en Concepción, Chile.",
  keywords: ["desarrollo web", "ERP", "consultoría IT", "Concepción", "Chile", "software a medida"],
  authors: [{ name: "Francisco Dev" }],
  openGraph: {
    title: "Francisco Dev | Del Caos Manual al Control Digital",
    description: "ERPs, aplicaciones web a medida y consultoría tecnológica para pymes",
    type: "website",
    locale: "es_CL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
