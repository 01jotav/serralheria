"use client";

import { useState, useEffect } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { Phone, Menu, X } from "lucide-react";

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
          ? "bg-zinc-900/95 backdrop-blur-sm shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-orange-500 rounded flex items-center justify-center font-black text-white text-lg group-hover:bg-orange-400 transition-colors">
              L
            </div>
            <div className="leading-tight">
              <span className="block text-white font-bold text-sm tracking-wide">LUKANN</span>
              <span className="block text-orange-400 text-[10px] tracking-widest uppercase">Serralheria</span>
            </div>
          </a>

          {/* Nav Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-zinc-300 hover:text-orange-400 text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+5551982829390"
              className="flex items-center gap-2 text-zinc-300 hover:text-white text-sm transition-colors"
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
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-zinc-900 border-t border-zinc-800 pb-4">
            <nav className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-zinc-300 hover:text-orange-400 px-4 py-3 text-sm font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-3 flex flex-col gap-2">
                <a
                  href="tel:+5551982829390"
                  className="flex items-center gap-2 text-zinc-300 text-sm"
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
