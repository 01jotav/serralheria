import { ButtonLink } from "@/components/ui/button-link";
import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP = "5551982829390";
const WHATSAPP_MSG = "Olá! Gostaria de solicitar um orçamento gratuito.";

export function CtaBanner() {
  const waUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MSG)}`;

  return (
    <section className="bg-orange-500 py-16 lg:py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
          Pronto para transformar seu espaço?
        </h2>
        <p className="text-orange-100 text-xl mb-10 max-w-xl mx-auto">
          Entre em contato agora e receba um orçamento gratuito e sem compromisso.
          Atendemos Porto Alegre e toda a região metropolitana.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ButtonLink
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="bg-white text-orange-500 hover:bg-orange-50 font-bold h-14 text-base px-8 shadow-lg border-transparent"
          >
            <MessageCircle size={20} className="mr-2" />
            Chamar no WhatsApp
          </ButtonLink>

          <ButtonLink
            href="tel:+5551982829390"
            variant="outline"
            size="lg"
            className="border-white/50 text-white hover:bg-white/10 h-14 text-base"
          >
            <Phone size={18} className="mr-2" />
            (51) 98282-9390
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
