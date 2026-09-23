import Link from "next/link";
import { notFound } from "next/navigation";
import { areas, getArea } from "../../data/servicios";
import { estudio } from "../../data/estudio";
import Topbar from "../../components/Topbar";
import ScrollFx from "../../components/ScrollFx";
import SiteFooter from "../../components/SiteFooter";

// Genera una pagina por cada area de app/data/servicios.js
export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return {
    title: `${area.titulo} · ${estudio.nombre}`,
    description: area.texto,
    alternates: { canonical: `/servicios/${area.slug}` },
  };
}

export default async function ServicioPage({ params }) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const { detalle } = area;
  const otras = areas.filter((a) => a.slug !== area.slug);

  return (
    <>
      <ScrollFx />
      <Topbar />

      <main className="servicio">
        {/* --- cabecera --- */}
        <header className="servicio-head">
          <div className="servicio-bg" data-par="0.16" />
          <Link className="volver" href="/#servicios">
            ← Servicios
          </Link>
          <p className="eyebrow">
            {estudio.nombre} <span className="dot">·</span> {area.lugar}
          </p>
          <h1>{area.titulo}</h1>
          <p className="claim">{detalle.intro}</p>
          <div className="cta-row">
            <Link className="btn solid" href="/#contacto">
              Pedir presupuesto
            </Link>
          </div>
        </header>

        {/* --- proceso: aqui el orden si es real, por eso van numerados --- */}
        <section className="bloque">
          <p className="eyebrow rv">Cómo trabajamos</p>
          <h2 className="title rv d1">El proceso</h2>
          <ol className="pasos">
            {detalle.proceso.map((p, i) => (
              <li key={p.titulo} className="paso rv">
                <span className="paso-n">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{p.titulo}</h3>
                  <p>{p.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* --- que incluye y con que --- */}
        <section className="bloque dos-col">
          <div className="rv">
            <p className="eyebrow">Qué incluye</p>
            <ul className="incluye grande">
              {area.incluye.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="rv d1">
            <p className="eyebrow">Con qué contamos</p>
            <ul className="incluye grande">
              {detalle.material.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- preguntas frecuentes --- */}
        <section className="bloque">
          <p className="eyebrow rv">Dudas habituales</p>
          <h2 className="title rv d1">Preguntas<br />frecuentes</h2>
          <div className="faq">
            {detalle.faq.map((f) => (
              <details key={f.q} className="rv">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* --- cierre --- */}
        <section className="cierre">
          <div className="band-bg" data-par="0.2" />
          <div className="cierre-inner">
            <h2 className="title rv">¿Lo hablamos?</h2>
            <p className="lede rv d1">
              Cuéntanos el proyecto y te respondemos en 48 horas con disponibilidad y
              presupuesto.
            </p>
            <div className="cta-row rv d2">
              <Link className="btn solid" href="/#contacto">
                Escribirnos
              </Link>
              <a className="btn" href={`mailto:${estudio.email}`}>
                {estudio.email}
              </a>
            </div>
          </div>
        </section>

        {/* --- las otras dos areas --- */}
        <section className="bloque otras">
          <p className="eyebrow rv">Otros servicios</p>
          <div className="otras-grid">
            {otras.map((o, i) => (
              <Link key={o.slug} href={`/servicios/${o.slug}`} className={`area rv${i ? " d1" : ""}`}>
                <div className="area-head">
                  <span className="pin" />
                  <span className="lugar">{o.lugar}</span>
                </div>
                <h3>{o.titulo}</h3>
                <p className="area-txt">{o.texto}</p>
                <span className="area-mas">Ver en detalle →</span>
              </Link>
            ))}
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}
