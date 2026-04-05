import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/Logo";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-800 pb-safe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Logo size="md" className="mb-4" />
            <p className="text-navy-400 text-sm leading-relaxed mt-3">
              Qualidade e precisão em trabalhos com ferro e aço. Atendemos Porto
              Alegre e região metropolitana há mais de 15 anos.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-navy-400 hover:text-orange-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contato
            </h4>
            <div className="space-y-2 text-sm text-navy-400">
              <p>
                <a
                  href="https://wa.me/5551982829390"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-colors"
                >
                  📱 (51) 98282-9390
                </a>
              </p>
              <p>📍 Porto Alegre e Região Metropolitana</p>
              <p>🕐 Seg–Sex: 8h–18h · Sáb: 8h–12h</p>
            </div>
          </div>
        </div>

        <Separator className="bg-navy-800 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-navy-500 text-sm">
          <p>© {new Date().getFullYear()} Serralheria LUKANN. Todos os direitos reservados.</p>
          <p>Porto Alegre, RS — Brasil</p>
        </div>
      </div>
    </footer>
  );
}
