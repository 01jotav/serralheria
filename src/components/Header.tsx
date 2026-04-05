"use client";

import { useState, useEffect } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { Phone, Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";

const WHATSAPP = "5551982829390";
const WHATSAPP_MSG = "Olá! Gostaria de solicitar um orçamento.";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#servicos", label: "Serviços" },
    { href: "#galeria", label: "Galeria" },
    { href: "#sobre", label: "Sobre" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato" },
  ];

  const waUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MSG)}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/95 backdrop-blur-sm shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" aria-label="Serralheria LUKANN — início">
            <Logo size="sm" />
          </a>

          {/* Nav Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-navy-100 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+5551982829390"
              className="flex items-center gap-2 text-navy-200 hover:text-white text-sm transition-colors"
            >
              <Phone size={14} />
              (51) 98282-9390
            </a>
            <ButtonLink
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              className="bg-orange-500 hover:bg-orange-400 text-white font-semibold border-transparent"
            >
              Orçamento Grátis
            </ButtonLink>
          </div>

          {/* Menu Mobile */}
          <button
            className="lg:hidden text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-navy-900 border-t border-navy-700 pb-4">
            <nav className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-navy-100 hover:text-white px-4 py-3 text-sm font-medium transition-colors min-h-[44px] flex items-center"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-3 flex flex-col gap-2">
                <a
                  href="tel:+5551982829390"
                  className="flex items-center gap-2 text-navy-200 text-sm min-h-[44px]"
                >
                  <Phone size={14} />
                  (51) 98282-9390
                </a>
                <ButtonLink
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-400 text-white font-semibold w-full justify-center border-transparent"
                >
                  Solicitar Orçamento
                </ButtonLink>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
