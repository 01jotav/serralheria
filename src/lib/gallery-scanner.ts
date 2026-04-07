import fs from "fs";
import path from "path";
import type { Categoria, FotoGaleria } from "@/data/gallery";

const GALLERY_DIR = path.join(process.cwd(), "public", "gallery");
const EXTENSOES_VALIDAS = /\.(jpg|jpeg|png|webp|avif|gif)$/i;

const CATEGORIAS: Exclude<Categoria, "todos">[] = [
  "grades",
  "portoes",
  "escadas",
  "estruturas",
  "reformas",
  "pinturas",
];

// Converte nome de arquivo em título legível
// Ex: "portao-garagem-01.jpg" → "Portão Garagem 01"
function nomeParaTitulo(nomeArquivo: string): string {
  return nomeArquivo
    .replace(/\.[^.]+$/, "")   // remove extensão
    .replace(/[-_]/g, " ")     // hífens e underscores viram espaços
    .replace(/\b\w/g, (c) => c.toUpperCase()); // capitaliza cada palavra
}

export function scanGallery(): FotoGaleria[] {
  const fotos: FotoGaleria[] = [];

  for (const categoria of CATEGORIAS) {
    const dir = path.join(GALLERY_DIR, categoria);

    // Pula se a pasta não existir
    if (!fs.existsSync(dir)) continue;

    const arquivos = fs
      .readdirSync(dir)
      .filter((f) => EXTENSOES_VALIDAS.test(f))
      .sort(); // ordem alfabética = ordem de exibição

    for (const arquivo of arquivos) {
      const titulo = nomeParaTitulo(arquivo);
      const id = `${categoria}-${arquivo.replace(/\.[^.]+$/, "").replace(/\s+/g, "-")}`;

      fotos.push({
        id,
        src: `/gallery/${categoria}/${arquivo}`,
        alt: `${titulo} — Serralheria LUKANN`,
        categoria,
        titulo,
      });
    }
  }

  return fotos;
}
