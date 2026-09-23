import { estudio } from "../data/estudio";

export default function SiteFooter() {
  return (
    <footer className="sitefoot">
      <span>
        {estudio.nombre} · {estudio.ciudad}
      </span>
      <span>Aviso legal · Privacidad</span>
    </footer>
  );
}
