"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { estudio } from "../data/estudio";

const SECCIONES = ["Inicio", "Servicios", "Equipo", "Contacto"];

export default function Topbar() {
  const pathname = usePathname();
  const [abierto, setAbierto] = useState(false);
  const enPortada = pathname === "/";

  // En la portada los enlaces son anclas (#servicios) para que el scroll sea
  // suave. Dentro de una subpagina apuntan a la portada (/#servicios).
  const href = (s) => `${enPortada ? "" : "/"}#${s.toLowerCase()}`;

  // Al abrir el menu en movil, bloqueamos el scroll del fondo.
  useEffect(() => {
    document.body.style.overflow = abierto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [abierto]);

  // Cerrar con la tecla Escape.
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setAbierto(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`topbar${abierto ? " open" : ""}`} id="topbar">
      <Link className="brand" href={enPortada ? "#inicio" : "/"} onClick={() => setAbierto(false)}>
        <span className="brand-mark">
          <i />
        </span>
        <span className="brand-txt">{estudio.nombre}</span>
      </Link>

      {/* navegacion de escritorio */}
      <nav className="mainnav">
        {SECCIONES.map((s) => (
          <a key={s} href={href(s)}>
            {s}
          </a>
        ))}
      </nav>

      {/* boton de movil */}
      <button
        className="navbtn"
        type="button"
        aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={abierto}
        onClick={() => setAbierto((v) => !v)}
      >
        <span />
        <span />
      </button>

      {/* panel de movil */}
      <nav className="navpanel" hidden={!abierto}>
        {SECCIONES.map((s) => (
          <a key={s} href={href(s)} onClick={() => setAbierto(false)}>
            {s}
          </a>
        ))}
        <span className="navpanel-foot">
          {estudio.nombre} · {estudio.ciudad}
        </span>
      </nav>
    </header>
  );
}
