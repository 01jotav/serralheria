"use client";

import { useState, useRef, type TouchEvent } from "react";
import Image from "next/image";
import { fotos, categorias, type Categoria } from "@/data/gallery";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export function Gallery() {
  const [categoriaAtiva, setCategoriaAtiva] = useState<Categoria>("todos");
  const [fotoAberta, setFotoAberta] = useState<number | null>(null);

  // Suporte a swipe no lightbox (mobile)
  const touchStartX = useRef<number | null>(null);

  const fotosFiltradas =
    categoriaAtiva === "todos"
      ? fotos
      : fotos.filter((f) => f.categoria === categoriaAtiva);

  function abrirFoto(index: number) {
    setFotoAberta(index);
  }

  function fecharFoto() {
    setFotoAberta(null);
  }

  function navegar(direcao: "prev" | "next") {
    if (fotoAberta === null) return;
    const total = fotosFiltradas.length;
    setFotoAberta(
      direcao === "prev"
        ? (fotoAberta - 1 + total) % total
        : (fotoAberta + 1) % total
    );
  }

  function onTouchStart(e: TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: TouchEvent) {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      navegar(diff > 0 ? "next" : "prev");
    }
    touchStartX.current = null;
  }

  return (
    <section id="galeria" className="bg-zinc-900 py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <span className="text-orange-500 text-sm font-bold uppercase tracking-widest">
            Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-4 text-pretty">
            Nossos Trabalhos
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg text-pretty">
            Cada projeto é único. Confira alguns dos trabalhos que realizamos em
            Porto Alegre e região metropolitana.
          </p>
        </div>

        {/* Filtros — scroll horizontal no mobile */}
        <div className="-mx-4 sm:mx-0 mb-8 sm:mb-10">
          <div className="flex gap-2 overflow-x-auto scrollbar-none px-4 sm:px-0 sm:flex-wrap pb-2 sm:pb-0">
            {categorias.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setCategoriaAtiva(cat.value)}
                className={`flex-none px-4 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap min-h-[44px] ${
                  categoriaAtiva === cat.value
                    ? "bg-orange-500 text-white"
                    : "bg-zinc-800 text-zinc-400 active:bg-zinc-700 active:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de fotos */}
        {fotosFiltradas.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-zinc-500 text-lg mb-2">
              Nenhuma foto nesta categoria ainda.
            </p>
            <p className="text-zinc-600 text-sm">
              Adicione fotos seguindo as instruções em{" "}
              <code className="text-orange-500">src/data/gallery.ts</code>
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
            {fotosFiltradas.map((foto, index) => (
              <button
                key={foto.id}
                onClick={() => abrirFoto(index)}
                className="group relative aspect-square overflow-hidden rounded-xl bg-zinc-800 focus-visible:ring-2 focus-visible:ring-orange-500 active:scale-95 transition-transform"
              >
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* Placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-600 pointer-events-none">
                  <div className="text-3xl mb-1">📷</div>
                  <div className="text-xs text-center px-2 leading-tight">{foto.titulo}</div>
                </div>
                {/* Overlay desktop */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors hidden sm:flex items-center justify-center">
                  <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                {/* Título hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-3 sm:translate-y-full sm:group-hover:translate-y-0 transition-transform">
                  <p className="text-white text-xs font-medium leading-tight">{foto.titulo}</p>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Lightbox — full screen no mobile */}
        <Dialog open={fotoAberta !== null} onOpenChange={fecharFoto}>
          <DialogContent
            className="
              w-full max-w-none sm:max-w-4xl
              h-dvh sm:h-auto
              m-0 sm:m-auto
              rounded-none sm:rounded-2xl
              bg-zinc-950 border-0 sm:border-zinc-800
              p-0 overflow-hidden
            "
          >
            {fotoAberta !== null && (
              <div
                className="relative flex flex-col h-full"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
              >
                {/* Close */}
                <button
                  onClick={fecharFoto}
                  aria-label="Fechar"
                  className="absolute top-3 right-3 z-20 bg-black/60 hover:bg-black/90 text-white rounded-full p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors"
                >
                  <X size={20} />
                </button>

                {/* Contador */}
                <div className="absolute top-3 left-3 z-20 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full">
                  {fotoAberta + 1} / {fotosFiltradas.length}
                </div>

                {/* Image */}
                <div className="relative flex-1 min-h-0 bg-zinc-900 sm:aspect-[4/3] sm:flex-none">
                  <Image
                    src={fotosFiltradas[fotoAberta].src}
                    alt={fotosFiltradas[fotoAberta].alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                  {/* Placeholder */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-600 pointer-events-none">
                    <div className="text-6xl mb-3">📷</div>
                    <p className="text-zinc-500 text-sm text-center px-4">
                      {fotosFiltradas[fotoAberta].titulo}
                    </p>
                  </div>

                  {/* Nav — botões grandes para toque */}
                  <button
                    onClick={() => navegar("prev")}
                    aria-label="Foto anterior"
                    className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white rounded-full p-3 min-w-[48px] min-h-[48px] flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    onClick={() => navegar("next")}
                    aria-label="Próxima foto"
                    className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white rounded-full p-3 min-w-[48px] min-h-[48px] flex items-center justify-center transition-colors"
                  >
                    <ChevronRight size={22} />
                  </button>
                </div>

                {/* Info + dica de swipe no mobile */}
                <div className="p-4 bg-zinc-900 border-t border-zinc-800 shrink-0">
                  <p className="text-white font-semibold">
                    {fotosFiltradas[fotoAberta].titulo}
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-zinc-400 text-sm capitalize">
                      {fotosFiltradas[fotoAberta].categoria}
                    </p>
                    <p className="text-zinc-600 text-xs sm:hidden">
                      ← deslize para navegar →
                    </p>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
