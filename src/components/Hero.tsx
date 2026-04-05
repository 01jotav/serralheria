import { ButtonLink } from "@/components/ui/button-link";
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react";
import { Logo } from "@/components/Logo";

const WHATSAPP = "5551982829390";
const WHATSAPP_MSG = "Olá! Gostaria de solicitar um orçamento gratuito.";

export function Hero() {
  const waUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MSG)}`;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      {/* Background — grade metálica sutil */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Glow azul marinho */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-navy-600/20 rounded-full blur-3xl pointer-events-none" />
      {/* Glow laranja sutil */}
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-3xl">
          {/* Badge localização */}
          <div className="inline-flex items-center gap-2 bg-navy-700/60 border border-navy-500/40 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-navy-100 text-sm font-medium">
              Porto Alegre e Região Metropolitana
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 text-pretty">
            Qualidade em{" "}
            <span className="text-orange-400">ferro e aço</span>{" "}
            para a sua obra
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-navy-200 mb-8 max-w-2xl leading-relaxed text-pretty">
            Grades, portões, escadas e estruturas metálicas sob medida.
            Atendemos residências, comércio e indústria com{" "}
            <span className="text-white font-medium">
              qualidade garantida e prazo cumprido.
            </span>
          </p>

          {/* Trust items */}
          <div className="flex flex-wrap gap-3 mb-8 sm:mb-10">
            {[
              "Orçamento 100% gratuito",
              "Atendimento rápido",
              "Garantia no serviço",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-navy-200">
                <CheckCircle size={16} className="text-orange-400 shrink-0" />
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
              className="bg-orange-500 hover:bg-orange-400 active:bg-orange-600 text-white font-bold text-base px-8 h-14 shadow-lg shadow-orange-500/25 border-transparent justify-center"
            >
              <MessageCircle size={20} className="mr-2" />
              Solicitar Orçamento Grátis
            </ButtonLink>

            <ButtonLink
              href="#galeria"
              variant="outline"
              size="lg"
              className="border-navy-500 text-white hover:bg-navy-700 hover:border-navy-400 h-14 text-base justify-center"
            >
              Ver Nossos Trabalhos
              <ArrowRight size={18} className="ml-2" />
            </ButtonLink>
          </div>

          {/* Social proof */}
          <div className="mt-8 sm:mt-10 flex items-center gap-4 text-navy-400 text-sm">
            <div className="flex -space-x-2">
              {["C", "A", "R", "M", "P"].map((letter, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-navy-700 border-2 border-navy-950 flex items-center justify-center text-xs font-bold text-navy-100"
                >
                  {letter}
                </div>
              ))}
            </div>
            <span className="text-navy-300">
              +500 clientes satisfeitos em Porto Alegre e região
            </span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-950 to-transparent" />
    </section>
  );
}
