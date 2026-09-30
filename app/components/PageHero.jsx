import Link from "next/link";

/* Cabecera grande para las paginas internas.
   Mismo lenguaje que el hero de la portada (capas con parallax, rejilla,
   titular a dos lineas con la segunda en rojo) pero un escalon por debajo:
   la onda y la altura completa se quedan solo en la portada.

   Necesita que ScrollFx este montado en la pagina para el parallax. */

export default function PageHero({
  volverA = "/",
  volverTexto = "Inicio",
  eyebrow,
  titulo,
  tituloRojo,
  claim,
  children,
}) {
  return (
    <header className="pagehero">
      <div className="hero-layer hero-rings" data-par="0.16" />
      <div className="hero-layer hero-grid" data-par="0.3" />

      <div className="pagehero-inner">
        <Link className="volver" href={volverA}>
          ← {volverTexto}
        </Link>

        {eyebrow && <p className="eyebrow">{eyebrow}</p>}

        <h1>
          {titulo}
          {tituloRojo && <span className="sep">{tituloRojo}</span>}
        </h1>

        {claim && <p className="claim">{claim}</p>}

        {children}
      </div>
    </header>
  );
}
