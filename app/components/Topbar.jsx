"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { estudio } from "../data/estudio";

const SECCIONES = ["Inicio", "Servicios", "Equipo", "Contacto"];

export default function Topbar() {
  const pathname = usePathname();
  const enPortada = pathname === "/";
  // En la portada los enlaces son anclas (#servicios) para que el scroll sea suave.
  // Dentro de una subpagina apuntan a la portada (/#servicios).
  const href = (s) => `${enPortada ? "" : "/"}#${s.toLowerCase()}`;

  return (
    <header className="topbar" id="topbar">
      <Link className="brand" href={enPortada ? "#inicio" : "/"}>
        <span className="brand-mark">
          <i />
        </span>
        <span className="brand-txt">{estudio.nombre}</span>
      </Link>
      <nav className="mainnav">
        {SECCIONES.map((s) => (
          <a key={s} href={href(s)}>
            {s}
          </a>
        ))}
      </nav>
    </header>
  );
}
