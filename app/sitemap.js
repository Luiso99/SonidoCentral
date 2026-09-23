import { areas } from "./data/servicios";
import { SITE_URL } from "./data/estudio";

// Genera /sitemap.xml solo. Google lo usa para descubrir las paginas.
// Si anades un area nueva en data/servicios.js, entra aqui automaticamente.
export default function sitemap() {
  const ahora = new Date();
  return [
    { url: SITE_URL, lastModified: ahora, priority: 1 },
    ...areas.map((a) => ({
      url: `${SITE_URL}/servicios/${a.slug}`,
      lastModified: ahora,
      priority: 0.8,
    })),
  ];
}
