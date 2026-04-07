// ============================================================
// GERENCIAMENTO DE FOTOS — Serralheria LUKANN
// ============================================================
//
// Como adicionar novas fotos:
//
// 1. Coloque o arquivo de imagem na pasta correta:
//    public/gallery/grades/       → grades de ferro
//    public/gallery/portoes/      → portões
//    public/gallery/escadas/      → escadas metálicas
//    public/gallery/estruturas/   → coberturas, pergolados
//    public/gallery/reformas/     → reformas e restaurações
//    public/gallery/pinturas/     → pinturas e acabamentos
//
// 2. Adicione uma entrada no array `fotos` abaixo:
//    {
//      id: "grade-03",                          // único, sem espaços
//      src: "/gallery/grades/minha-foto.jpg",   // caminho a partir de public/
//      alt: "Descrição da foto para acessibilidade",
//      categoria: "grades",
//      titulo: "Nome que aparece na galeria",
//      destaque: true,   // opcional — aparece em destaque
//    }
//
// 3. Salve. O deploy sobe automaticamente com git push.
// ============================================================

export type Categoria =
  | "todos"
  | "grades"
  | "portoes"
  | "escadas"
  | "estruturas"
  | "reformas"
  | "pinturas";

export interface FotoGaleria {
  id: string;
  src: string;
  alt: string;
  categoria: Exclude<Categoria, "todos">;
  titulo: string;
  destaque?: boolean;
}

// ── Adicione as fotos aqui ────────────────────────────────────
export const fotos: FotoGaleria[] = [

  // EXEMPLO (descomente e edite):
  // {
  //   id: "grade-01",
  //   src: "/gallery/grades/grade-01.jpg",
  //   alt: "Grade de proteção residencial",
  //   categoria: "grades",
  //   titulo: "Grade Residencial",
  //   destaque: true,
  // },

];
// ─────────────────────────────────────────────────────────────

export const categorias: { value: Categoria; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "grades", label: "Grades" },
  { value: "portoes", label: "Portões" },
  { value: "escadas", label: "Escadas" },
  { value: "estruturas", label: "Estruturas" },
  { value: "reformas", label: "Reformas" },
  { value: "pinturas", label: "Pinturas" },
];
