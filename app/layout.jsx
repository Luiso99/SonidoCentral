import { Archivo, IBM_Plex_Mono, Karla } from "next/font/google";
import { estudio, SITE_URL } from "./data/estudio";
import "./globals.css";

const display = Archivo({
  subsets: ["latin"],
  weight: ["400", "600", "800", "900"],
  variable: "--font-display",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});
const body = Karla({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${estudio.nombre} — Sonido de estudio, directo e instalaciones · ${estudio.ciudad}`,
  description:
    "Grabación, producción y mezcla en estudio, sonido en directo e instalación de sistemas de sonido en locales. Madrid.",
  openGraph: {
    title: `${estudio.nombre} · ${estudio.ciudad}`,
    description: "Sonido de estudio, sonido de directo e instalación de sistemas.",
    type: "website",
    locale: "es_ES",
  },
};

export const viewport = {
  themeColor: "#0A0B0C",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${display.variable} ${mono.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
