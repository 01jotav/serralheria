import { Separator } from "@/components/ui/separator";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pb-safe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-orange-500 rounded flex items-center justify-center font-black text-white text-lg">
                L
              </div>
              <div className="leading-tight">
                <span className="block text-white font-bold text-sm tracking-wide">LUKANN</span>
                <span className="block text-orange-400 text-[10px] tracking-widest uppercase">Serralheria</span>
              </div>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
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
                    className="text-zinc-500 hover:text-orange-400 text-sm transition-colors"
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
            <div className="space-y-2 text-sm text-zinc-500">
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

        <Separator className="bg-zinc-900 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-600 text-sm">
          <p>© {new Date().getFullYear()} Serralheria LUKANN. Todos os direitos reservados.</p>
          <p>Porto Alegre, RS — Brasil</p>
        </div>
      </div>
    </footer>
  );
}
