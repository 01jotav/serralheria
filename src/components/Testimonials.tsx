"use client";

import { useState } from "react";
import { depoimentos } from "@/data/testimonials";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function Testimonials() {
  const [atual, setAtual] = useState(0);

  function prev() {
    setAtual((atual - 1 + depoimentos.length) % depoimentos.length);
  }

  function next() {
    setAtual((atual + 1) % depoimentos.length);
  }

  const dep = depoimentos[atual];

  return (
    <section id="depoimentos" className="bg-zinc-900 py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-500 text-sm font-bold uppercase tracking-widest">
            Depoimentos
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mt-3 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            A satisfação dos nossos clientes é a nossa maior conquista.
          </p>
        </div>

        {/* Main testimonial */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-zinc-800/50 border border-zinc-700 rounded-3xl p-8 lg:p-12 relative">
            {/* Quote icon */}
            <div className="absolute -top-4 left-8">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <Quote size={18} className="text-white" />
              </div>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6 mt-2">
              {Array.from({ length: dep.estrelas }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="text-orange-400 fill-orange-400"
                />
              ))}
            </div>

            {/* Text */}
            <p className="text-zinc-100 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 font-light italic text-pretty">
              "{dep.texto}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-full flex items-center justify-center text-orange-400 font-bold text-lg">
                  {dep.nome[0]}
                </div>
                <div>
                  <div className="text-white font-semibold">{dep.nome}</div>
                  <div className="text-zinc-400 text-sm">
                    {dep.cidade} · {dep.servico}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full bg-zinc-700 hover:bg-zinc-600 flex items-center justify-center text-white transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>
                <span className="text-zinc-500 text-sm">
                  {atual + 1} / {depoimentos.length}
                </span>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-zinc-700 hover:bg-zinc-600 flex items-center justify-center text-white transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {depoimentos.map((_, i) => (
              <button
                key={i}
                onClick={() => setAtual(i)}
                className={`rounded-full transition-all ${
                  i === atual
                    ? "w-6 h-2 bg-orange-500"
                    : "w-2 h-2 bg-zinc-600 hover:bg-zinc-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
