// ============================================================
// GERENCIAMENTO DE FOTOS - Serralheria LUKANN
// ============================================================
// Como adicionar novas fotos:
//
// 1. Coloque a foto na pasta: public/gallery/{categoria}/
//    Categorias: grades | portoes | escadas | estruturas | reformas | pinturas
//
// 2. Adicione uma entrada no array abaixo seguindo o modelo:
//    {
//      id: "id-unico",           // identificador único
//      src: "/gallery/grades/nome-do-arquivo.jpg",
//      alt: "Descrição da foto",
//      categoria: "grades",
//      titulo: "Grade Frontal - Residência", // aparece na galeria
//      destaque: false,          // true = aparece nos destaques
//    }
//
// 3. Salve o arquivo. A galeria atualiza automaticamente.
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

export const fotos: FotoGaleria[] = [
  // ── GRADES ──────────────────────────────────────────────
  {
    id: "grade-01",
    src: "/gallery/grades/grade-residencial-01.jpg",
    alt: "Grade de ferro residencial com design moderno",
    categoria: "grades",
    titulo: "Grade Residencial Moderna",
    destaque: true,
  },
  {
    id: "grade-02",
    src: "/gallery/grades/grade-janela-01.jpg",
    alt: "Grade para janela com acabamento em preto fosco",
    categoria: "grades",
    titulo: "Grade para Janela",
    destaque: false,
  },

  // ── PORTÕES ─────────────────────────────────────────────
  {
    id: "portao-01",
    src: "/gallery/portoes/portao-social-01.jpg",
    alt: "Portão social de ferro forjado",
    categoria: "portoes",
    titulo: "Portão Social Forjado",
    destaque: true,
  },
  {
    id: "portao-02",
    src: "/gallery/portoes/portao-garagem-01.jpg",
    alt: "Portão de garagem deslizante",
    categoria: "portoes",
    titulo: "Portão Garagem Deslizante",
    destaque: false,
  },

  // ── ESCADAS ─────────────────────────────────────────────
  {
    id: "escada-01",
    src: "/gallery/escadas/escada-interna-01.jpg",
    alt: "Escada interna com corrimão em aço inox",
    categoria: "escadas",
    titulo: "Escada Interna Aço Inox",
    destaque: true,
  },
  {
    id: "escada-02",
    src: "/gallery/escadas/escada-externa-01.jpg",
    alt: "Escada externa em estrutura metálica",
    categoria: "escadas",
    titulo: "Escada Externa Metálica",
    destaque: false,
  },

  // ── ESTRUTURAS ──────────────────────────────────────────
  {
    id: "estrutura-01",
    src: "/gallery/estruturas/cobertura-01.jpg",
    alt: "Cobertura metálica para área gourmet",
    categoria: "estruturas",
    titulo: "Cobertura Área Gourmet",
    destaque: true,
  },
  {
    id: "estrutura-02",
    src: "/gallery/estruturas/pergolado-01.jpg",
    alt: "Pergolado em estrutura metálica",
    categoria: "estruturas",
    titulo: "Pergolado Metálico",
    destaque: false,
  },

  // ── REFORMAS ────────────────────────────────────────────
  {
    id: "reforma-01",
    src: "/gallery/reformas/reforma-grade-01.jpg",
    alt: "Reforma e restauração de grades antigas",
    categoria: "reformas",
    titulo: "Restauração de Grades",
    destaque: false,
  },

  // ── PINTURAS ────────────────────────────────────────────
  {
    id: "pintura-01",
    src: "/gallery/pinturas/pintura-portao-01.jpg",
    alt: "Pintura antiferrugem em portão",
    categoria: "pinturas",
    titulo: "Pintura Antiferrugem",
    destaque: false,
  },

  // ── ADICIONE NOVAS FOTOS ABAIXO ─────────────────────────
];

export const categorias: { value: Categoria; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "grades", label: "Grades" },
  { value: "portoes", label: "Portões" },
  { value: "escadas", label: "Escadas" },
  { value: "estruturas", label: "Estruturas" },
  { value: "reformas", label: "Reformas" },
  { value: "pinturas", label: "Pinturas" },
];
