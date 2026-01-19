import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exportación estática para Cloudflare Pages
  output: "export",

  // Configurar imágenes para exportación estática
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
  