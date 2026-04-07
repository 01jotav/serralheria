import { scanGallery } from "@/lib/gallery-scanner";
import { GalleryClient } from "@/components/GalleryClient";

export function Gallery() {
  const fotos = scanGallery();

  return (
    <section id="galeria" className="bg-navy-900 py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <span className="text-orange-500 text-sm font-bold uppercase tracking-widest">
            Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-4 text-pretty">
            Nossos Trabalhos
          </h2>
          <p className="text-navy-200 text-base sm:text-lg text-pretty">
            Cada projeto é único. Confira alguns dos trabalhos que realizamos em
            Porto Alegre e região metropolitana.
          </p>
        </div>

        <GalleryClient fotos={fotos} />
      </div>
    </section>
  );
}
