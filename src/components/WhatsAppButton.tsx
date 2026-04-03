"use client";

import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WHATSAPP = "5551982829390";
const WHATSAPP_MSG = "Olá! Vim pelo site e gostaria de um orçamento.";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const waUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MSG)}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      style={{
        bottom: `calc(1.5rem + env(safe-area-inset-bottom, 0px))`,
        right: `calc(1.5rem + env(safe-area-inset-right, 0px))`,
      }}
      className={`fixed z-50 flex items-center gap-3 bg-green-500 hover:bg-green-400 active:bg-green-600 text-white rounded-full shadow-lg shadow-green-500/30 transition-all duration-500 group ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* Label (aparece no hover em desktop) */}
      <span className="hidden md:block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 pl-0 group-hover:pl-4 text-sm font-semibold whitespace-nowrap">
        Falar no WhatsApp
      </span>
      <div className="w-14 h-14 flex items-center justify-center shrink-0">
        <MessageCircle size={26} />
      </div>
    </a>
  );
}
