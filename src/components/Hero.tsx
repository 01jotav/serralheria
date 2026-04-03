import { ButtonLink } from "@/components/ui/button-link";
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react";

const WHATSAPP = "5551982829390";
const WHATSAPP_MSG = "Olá! Gostaria de solicitar um orçamento gratuito.";

export function Hero() {
  const waUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MSG)}`;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-zinc-950">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-orange-400 text-sm font-medium">
              Porto Alegre e Região Metropolitana
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 text-pretty">
            Qualidade em{" "}
            <span className="text-orange-500">ferro e aço</span>{" "}
            para a sua obra
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-zinc-400 mb-8 max-w-2xl leading-relaxed text-pretty">
            Grades, portões, escadas e estruturas metálicas sob medida.
            Atendemos residências, comércio e indústria com{" "}
            <span className="text-zinc-200 font-medium">qualidade garantida e prazo cumprido.</span>
          </p>

          {/* Trust items */}
          <div className="flex flex-wrap gap-3 mb-8 sm:mb-10">
            {["Orçamento 100% gratuito", "Atendimento rápido", "Garantia no serviço"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-zinc-400">
                <CheckCircle size={16} className="text-orange-500 shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonLink
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="bg-orange-500 hover:bg-orange-400 text-white font-bold text-base px-8 h-14 shadow-lg shadow-orange-500/25 border-transparent"
            >
              <MessageCircle size={20} className="mr-2" />
              Solicitar Orçamento Grátis
            </ButtonLink>

            <ButtonLink
              href="#galeria"
              variant="outline"
              size="lg"
              className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white h-14 text-base"
            >
              Ver Nossos Trabalhos
              <ArrowRight size={18} className="ml-2" />
            </ButtonLink>
          </div>

          {/* Social proof mini */}
          <div className="mt-8 sm:mt-10 flex items-center gap-4 text-zinc-500 text-sm">
            <div className="flex -space-x-2">
              {["C", "A", "R", "M", "P"].map((letter, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-zinc-700 border-2 border-zinc-950 flex items-center justify-center text-xs font-bold text-zinc-300"
                >
                  {letter}
                </div>
              ))}
            </div>
            <span>+500 clientes satisfeitos em Porto Alegre e região</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-950 to-transparent" />
    </section>
  );
}
