import { SITE_URL } from "./data/estudio";

// Genera /robots.txt solo: permite indexar todo y apunta al sitemap.
export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
