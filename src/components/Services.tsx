import { servicos } from "@/data/services";
import { MessageCircle } from "lucide-react";

const WHATSAPP = "5551982829390";

export function Services() {
  return (
    <section id="servicos" className="bg-navy-950 py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-orange-400 text-sm font-bold uppercase tracking-widest">
            O que fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-4 text-pretty">
            Nossos Serviços
          </h2>
          <p className="text-navy-200 text-lg text-pretty">
            Trabalhamos com ferro, aço carbono, aço inox e alumínio. Tudo
            fabricado sob medida no nosso próprio processo produtivo.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicos.map((servico) => (
            <div
              key={servico.id}
              className="group bg-navy-800 border border-navy-700 rounded-2xl p-6 hover:border-orange-500/60 hover:bg-navy-700 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{servico.icone}</div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                {servico.titulo}
              </h3>

              <p className="text-navy-200 text-sm leading-relaxed mb-5">
                {servico.descricao}
              </p>

              <ul className="space-y-1.5">
                {servico.itens.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-navy-300 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-navy-600">
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                    `Olá! Tenho interesse em ${servico.titulo}. Gostaria de um orçamento.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 text-sm font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <MessageCircle size={14} />
                  Pedir orçamento →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
