import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Formatos modernos: WebP e AVIF carregam ~30-50% mais rápido no mobile
    formats: ["image/avif", "image/webp"],
    // Tamanhos de dispositivo (breakpoints de mobile → desktop)
    deviceSizes: [390, 414, 430, 640, 768, 1024, 1280, 1440, 1920],
    // Tamanhos de imagem para o atributo sizes
    imageSizes: [16, 32, 64, 128, 256, 384],
  },
  // Compressão de resposta — melhora tempo de carregamento no 4G/3G
  compress: true,
};

export default nextConfig;
