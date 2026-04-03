export interface Depoimento {
  id: string;
  nome: string;
  cidade: string;
  texto: string;
  estrelas: number;
  servico: string;
}

export const depoimentos: Depoimento[] = [
  {
    id: "dep-01",
    nome: "Carlos M.",
    cidade: "Porto Alegre",
    texto:
      "Serviço impecável! Instalaram as grades da minha casa em um dia, com acabamento perfeito e preço justo. Recomendo demais!",
    estrelas: 5,
    servico: "Grades Residenciais",
  },
  {
    id: "dep-02",
    nome: "Ana Paula S.",
    cidade: "Canoas",
    texto:
      "Fiz meu portão de garagem com a LUKANN e ficou incrível. Atendimento rápido, profissionais educados e o resultado superou minhas expectativas.",
    estrelas: 5,
    servico: "Portão de Garagem",
  },
  {
    id: "dep-03",
    nome: "Roberto F.",
    cidade: "Gravataí",
    texto:
      "Pedi uma cobertura metálica para minha área gourmet. O pessoal da LUKANN fez um trabalho de excelente qualidade, dentro do prazo combinado.",
    estrelas: 5,
    servico: "Cobertura Metálica",
  },
  {
    id: "dep-04",
    nome: "Mariana L.",
    cidade: "Novo Hamburgo",
    texto:
      "Empresa séria e comprometida. A escada que fizeram para minha casa ficou linda e resistente. Com certeza vou indicar para amigos e família.",
    estrelas: 5,
    servico: "Escada Metálica",
  },
  {
    id: "dep-05",
    nome: "Paulo R.",
    cidade: "São Leopoldo",
    texto:
      "Reformaram todas as grades da minha residência com pintura nova. Trabalho bem feito, limpeza do ambiente garantida e prazo cumprido.",
    estrelas: 5,
    servico: "Reforma e Pintura",
  },
];
