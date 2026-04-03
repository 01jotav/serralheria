import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
    { media: "(prefers-color-scheme: light)", color: "#09090b" },
  ],
};

export const metadata: Metadata = {
  title: "Serralheria LUKANN | Grades, Portões e Estruturas Metálicas em Porto Alegre",
  description:
    "Serralheria LUKANN — especialistas em grades, portões, escadas e estruturas metálicas em Porto Alegre e região. Orçamento gratuito. Ligue: (51) 98282-9390",
  keywords: "serralheria porto alegre, grades ferro, portões metálicos, escadas metálicas, estruturas metálicas, serralheria lukann",
  openGraph: {
    title: "Serralheria LUKANN | Porto Alegre",
    description: "Grades, portões, escadas e estruturas metálicas sob medida. Mais de 15 anos de experiência.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
