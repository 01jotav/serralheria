"use client";

import { useState, useRef, type TouchEvent } from "react";
import Image from "next/image";
import type { FotoGaleria, Categoria } from "@/data/gallery";
import { categorias } from "@/data/gallery";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface GalleryClientProps {
  fotos: FotoGaleria[];
}

export function GalleryClient({ fotos }: GalleryClientProps) {
  const [categoriaAtiva, setCategoriaAtiva] = useState<Categoria>("todos");
  const [fotoAberta, setFotoAberta] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const fotosFiltradas =
    categoriaAtiva === "todos"
      ? fotos
      : fotos.filter((f) => f.categoria === categoriaAtiva);

  // Remove categorias sem fotos dos filtros
  const categoriasDisponiveis = categorias.filter(
    (cat) =>
      cat.value === "todos" ||
      fotos.some((f) => f.categoria === cat.value)
  );

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
    if (Math.abs(diff) > 50) navegar(diff > 0 ? "next" : "prev");
    touchStartX.current = null;
  }

  if (fotos.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-5xl mb-4">📁</div>
        <p className="text-navy-300 text-lg mb-2">Nenhuma foto ainda.</p>
        <p className="text-navy-500 text-sm">
          Adicione imagens em{" "}
          <code className="text-orange-400">public/gallery/&#123;categoria&#125;/</code>
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Filtros */}
      <div className="-mx-4 sm:mx-0 mb-8">
        <div className="flex gap-2 overflow-x-auto scrollbar-none px-4 sm:px-0 sm:flex-wrap pb-2 sm:pb-0">
          {categoriasDisponiveis.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategoriaAtiva(cat.value)}
              className={`flex-none px-4 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap min-h-[44px] ${
                categoriaAtiva === cat.value
                  ? "bg-orange-500 text-white"
                  : "bg-navy-800 text-navy-300 active:bg-navy-700 active:text-white"
              }`}
            >
              {cat.label}
              {cat.value !== "todos" && (
                <span className="ml-1.5 opacity-60 text-xs">
                  ({fotos.filter((f) => f.categoria === cat.value).length})
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {fotosFiltradas.length === 0 ? (
        <div className="text-center py-16 text-navy-400">
          Nenhuma foto nesta categoria.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
          {fotosFiltradas.map((foto, index) => (
            <button
              key={foto.id}
              onClick={() => setFotoAberta(index)}
              className="group relative aspect-square overflow-hidden rounded-xl bg-navy-800 focus-visible:ring-2 focus-visible:ring-orange-500 active:scale-95 transition-transform"
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Overlay desktop */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors hidden sm:flex items-center justify-center">
                <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              {/* Título */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-3 sm:translate-y-full sm:group-hover:translate-y-0 transition-transform">
                <p className="text-white text-xs font-medium leading-tight">{foto.titulo}</p>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <Dialog open={fotoAberta !== null} onOpenChange={() => setFotoAberta(null)}>
        <DialogContent
          className="w-full max-w-none sm:max-w-4xl h-dvh sm:h-auto m-0 sm:m-auto rounded-none sm:rounded-2xl bg-navy-950 border-0 sm:border-navy-800 p-0 overflow-hidden"
        >
          {fotoAberta !== null && (
            <div
              className="relative flex flex-col h-full"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              {/* Close */}
              <button
                onClick={() => setFotoAberta(null)}
                aria-label="Fechar"
                className="absolute top-3 right-3 z-20 bg-black/60 hover:bg-black/90 text-white rounded-full p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <X size={20} />
              </button>
              {/* Contador */}
              <div className="absolute top-3 left-3 z-20 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full">
                {fotoAberta + 1} / {fotosFiltradas.length}
              </div>

              {/* Imagem */}
              <div className="relative flex-1 min-h-0 bg-navy-900 sm:aspect-[4/3] sm:flex-none">
                <Image
                  src={fotosFiltradas[fotoAberta].src}
                  alt={fotosFiltradas[fotoAberta].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
                <button onClick={() => navegar("prev")} aria-label="Anterior"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white rounded-full p-3 min-w-[48px] min-h-[48px] flex items-center justify-center">
                  <ChevronLeft size={22} />
                </button>
                <button onClick={() => navegar("next")} aria-label="Próxima"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white rounded-full p-3 min-w-[48px] min-h-[48px] flex items-center justify-center">
                  <ChevronRight size={22} />
                </button>
              </div>

              {/* Info */}
              <div className="p-4 bg-navy-900 border-t border-navy-800 shrink-0">
                <p className="text-white font-semibold">{fotosFiltradas[fotoAberta].titulo}</p>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-navy-400 text-sm capitalize">{fotosFiltradas[fotoAberta].categoria}</p>
                  <p className="text-navy-600 text-xs sm:hidden">← deslize para navegar →</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
