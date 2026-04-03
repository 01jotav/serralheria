import { ButtonLink } from "@/components/ui/button-link";
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";

const WHATSAPP = "5551982829390";
const WHATSAPP_MSG = "Olá! Gostaria de solicitar um orçamento.";

const infos = [
  {
    icone: MessageCircle,
    titulo: "WhatsApp",
    valor: "(51) 98282-9390",
    link: `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MSG)}`,
    externo: true,
  },
  {
    icone: Phone,
    titulo: "Telefone",
    valor: "(51) 98282-9390",
    link: "tel:+5551982829390",
    externo: false,
  },
  {
    icone: MapPin,
    titulo: "Atendimento",
    valor: "Porto Alegre e Região Metropolitana",
    link: null,
    externo: false,
  },
  {
    icone: Clock,
    titulo: "Horário",
    valor: "Seg–Sex: 8h–18h · Sáb: 8h–12h",
    link: null,
    externo: false,
  },
];

export function Contact() {
  const waUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MSG)}`;

  return (
    <section id="contato" className="bg-zinc-950 py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <span className="text-orange-500 text-sm font-bold uppercase tracking-widest">
              Contato
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-6">
              Fale conosco
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              Solicite seu orçamento gratuito. Retornamos em até 2 horas durante
              o horário comercial. O atendimento mais rápido é pelo WhatsApp!
            </p>

            <div className="space-y-5">
              {infos.map((info) => {
                const Icone = info.icone;
                const inner = (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icone size={18} className="text-orange-500" />
                    </div>
                    <div>
                      <div className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-0.5">
                        {info.titulo}
                      </div>
                      <div className="text-white font-medium">{info.valor}</div>
                    </div>
                  </div>
                );
                return info.link ? (
                  <a
                    key={info.titulo}
                    href={info.link}
                    target={info.externo ? "_blank" : undefined}
                    rel={info.externo ? "noopener noreferrer" : undefined}
                    className="block hover:opacity-80 transition-opacity"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={info.titulo}>{inner}</div>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 lg:p-10 flex flex-col justify-center">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-2xl font-bold text-white mb-3">
              A forma mais rápida de falar conosco
            </h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Manda uma mensagem pelo WhatsApp com fotos do local e descrição
              do que precisa. Fazemos a avaliação e retornamos com o orçamento
              rapidinho!
            </p>

            <ButtonLink
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="bg-green-500 hover:bg-green-400 text-white font-bold h-14 text-base shadow-lg shadow-green-500/20 w-full justify-center border-transparent"
            >
              <MessageCircle size={20} className="mr-2" />
              Abrir WhatsApp Agora
            </ButtonLink>

            <p className="text-zinc-600 text-xs text-center mt-4">
              Sem compromisso · Resposta em até 2 horas
            </p>

            <div className="mt-8 pt-8 border-t border-zinc-800 grid grid-cols-3 gap-4 text-center">
              {[
                { v: "500+", l: "Projetos" },
                { v: "15+", l: "Anos" },
                { v: "⭐ 5.0", l: "Avaliação" },
              ].map((item) => (
                <div key={item.l}>
                  <div className="text-orange-400 font-black text-xl">{item.v}</div>
                  <div className="text-zinc-500 text-xs">{item.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
