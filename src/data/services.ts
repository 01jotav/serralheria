export interface Servico {
  id: string;
  icone: string;
  titulo: string;
  descricao: string;
  itens: string[];
}

export const servicos: Servico[] = [
  {
    id: "grades",
    icone: "🔒",
    titulo: "Grades de Proteção",
    descricao:
      "Segurança e estética para portas, janelas e sacadas. Fabricamos sob medida com acabamento de alta qualidade.",
    itens: ["Grades para janelas", "Grades para portas", "Sacadas e varandas", "Designs personalizados"],
  },
  {
    id: "portoes",
    icone: "🚗",
    titulo: "Portões",
    descricao:
      "Portões residenciais e comerciais com acabamento profissional. Modelos deslizantes, de abrir e pivotantes.",
    itens: ["Portões de garagem", "Portões sociais", "Portões deslizantes", "Automatização"],
  },
  {
    id: "escadas",
    icone: "🪜",
    titulo: "Escadas Metálicas",
    descricao:
      "Escadas internas e externas em ferro, aço inox e alumínio. Projeto personalizado com corrimões e guarda-corpos.",
    itens: ["Escadas internas", "Escadas externas", "Corrimões em inox", "Guarda-corpos"],
  },
  {
    id: "estruturas",
    icone: "🏗️",
    titulo: "Estruturas Metálicas",
    descricao:
      "Coberturas, pergolados, mezaninos e estruturas industriais. Solução completa do projeto à instalação.",
    itens: ["Coberturas metálicas", "Pergolados", "Mezaninos", "Estruturas industriais"],
  },
  {
    id: "reformas",
    icone: "🔧",
    titulo: "Reformas e Restaurações",
    descricao:
      "Recuperação e modernização de estruturas de ferro e aço existentes. Devolvemos vida útil e beleza às suas peças.",
    itens: ["Restauração de grades", "Reforma de portões", "Solda e reforço", "Substituição de peças"],
  },
  {
    id: "pinturas",
    icone: "🎨",
    titulo: "Pintura e Acabamento",
    descricao:
      "Pintura antiferrugem, eletrostática e esmalte sintético. Acabamento duradouro que protege e embeleza.",
    itens: ["Pintura antiferrugem", "Pintura eletrostática", "Esmalte sintético", "Tratamento de superfícies"],
  },
];
