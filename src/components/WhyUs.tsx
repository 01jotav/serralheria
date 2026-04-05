import { Shield, Clock, Ruler, Award } from "lucide-react";

const motivos = [
  {
    icone: Shield,
    titulo: "Garantia no Serviço",
    descricao:
      "Todos os nossos trabalhos têm garantia. Usamos materiais de primeira linha e técnicas aprovadas para durabilidade máxima.",
  },
  {
    icone: Clock,
    titulo: "Prazo Cumprido",
    descricao:
      "Cumprimos rigorosamente os prazos combinados. Respeitamos o seu tempo e o cronograma da sua obra.",
  },
  {
    icone: Ruler,
    titulo: "Feito sob Medida",
    descricao:
      "Cada projeto é único. Fabricamos tudo conforme as medidas e especificações do seu espaço, sem gambiarras.",
  },
  {
    icone: Award,
    titulo: "Mais de 15 Anos",
    descricao:
      "Uma trajetória de excelência em Porto Alegre e região. Experiência que se traduz em qualidade e confiança.",
  },
];

export function WhyUs() {
  return (
    <section id="sobre" className="bg-navy-900 py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <div>
            <span className="text-orange-400 text-sm font-bold uppercase tracking-widest">
              Por que nos escolher
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-6 leading-tight text-pretty">
              A serralheria que Porto Alegre confia
            </h2>
            <p className="text-navy-200 text-lg leading-relaxed mb-8 text-pretty">
              A Serralheria LUKANN nasceu com o compromisso de entregar o melhor
              em trabalhos com ferro e aço. Atendemos residências, condomínios,
              comércio e indústria com o mesmo padrão de qualidade.
            </p>
            <p className="text-navy-300 text-lg leading-relaxed">
              Do projeto à instalação, acompanhamos cada etapa para garantir que
              o resultado final supere as suas expectativas.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {motivos.map((motivo) => {
              const Icone = motivo.icone;
              return (
                <div
                  key={motivo.titulo}
                  className="bg-navy-800 border border-navy-700 rounded-2xl p-6 hover:border-orange-500/40 transition-colors"
                >
                  <div className="w-11 h-11 bg-orange-500/15 border border-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                    <Icone size={22} className="text-orange-400" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{motivo.titulo}</h3>
                  <p className="text-navy-300 text-sm leading-relaxed">
                    {motivo.descricao}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
