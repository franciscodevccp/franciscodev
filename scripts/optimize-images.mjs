import sharp from "sharp";
import { stat, unlink } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(process.cwd());
const kb = (n) => `${(n / 1024).toFixed(0)} KB`;

async function size(p) {
  try { return (await stat(p)).size; } catch { return 0; }
}

// [origen, destino, ancho, calidad, borrarOrigen]
const jobs = [
  ["public/sobremi.png", "public/sobremi.webp", 600, 82, true],
  ["public/proyectos/reserva-public.png", "public/proyectos/reserva-public.webp", 1600, 80, true],
  ["public/proyectos/login-admin.png", "public/proyectos/login-admin.webp", 1600, 80, true],
];

for (const [src, dest, width, quality, removeSrc] of jobs) {
  const srcPath = path.join(root, src);
  const destPath = path.join(root, dest);
  const before = await size(srcPath);
  await sharp(srcPath)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(destPath);
  const after = await size(destPath);
  console.log(`${src}  ${kb(before)} -> ${dest}  ${kb(after)}`);
  if (removeSrc && srcPath !== destPath) await unlink(srcPath);
}

// Favicon: Next usa app/icon.png. Lo reducimos a 512x512 y optimizamos compresión PNG.
{
  const p = path.join(root, "app/icon.png");
  const before = await size(p);
  const buf = await sharp(p)
    .resize({ width: 512, height: 512, fit: "cover" })
    .png({ compressionLevel: 9, quality: 90, effort: 10 })
    .toBuffer();
  await sharp(buf).toFile(p);
  const after = await size(p);
  console.log(`app/icon.png  ${kb(before)} -> ${kb(after)}`);
}

console.log("OK");
