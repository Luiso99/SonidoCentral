import { Source_Serif_4 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { equipo } from "../data/equipo";
import { estudio } from "../data/estudio";
import Topbar from "../components/Topbar";
import ScrollFx from "../components/ScrollFx";
import SiteFooter from "../components/SiteFooter";
import SpotifyEmbed from "../components/SpotifyEmbed";
import PageHero from "../components/PageHero";

// Serif solo para las bios de esta pagina: el resto de la web no la carga.
const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  title: `Equipo · ${estudio.nombre}`,
  description: `Los tres productores de ${estudio.nombre}: quiénes somos, cómo trabajamos y qué hemos producido.`,
  alternates: { canonical: "/equipo" },
};

export default function EquipoPage() {
  return (
    <>
      <ScrollFx />
      <Topbar />

      <main className="servicio">
        {/* --- cabecera --- */}
        <PageHero
          eyebrow={`${estudio.nombre} · Equipo`}
          titulo="Quién lo"
          tituloRojo="hace"
          claim="Tres productores con la misma sala y tres formas distintas de escuchar. Aquí está el recorrido de cada uno y algo de lo que hemos producido."
        >
          {/* indice: salta a la seccion de cada uno dentro de esta pagina */}
          <nav className="indice">
            {equipo.map((m) => (
              <a key={m.slug} href={`#${m.slug}`}>
                {m.nombre}
              </a>
            ))}
          </nav>
        </PageHero>

        {/* --- una seccion por persona --- */}
        {equipo.map((m, i) => (
          <section key={m.slug} id={m.slug} className={`perfil ${serif.variable}${i % 2 ? " alt" : ""}`}>
            <div className="perfil-grid">
              {/* columna fija: acompaña mientras se lee la bio */}
              <aside className="perfil-lado">
                <div className="perfil-foto">
                  {m.foto ? (
                    <Image
                      src={m.foto}
                      alt={m.nombre}
                      width={1200}
                      height={1500}
                      sizes="(max-width: 900px) 90vw, 380px"
                      priority={i === 0}
                    />
                  ) : (
                    <span className="initials">{m.iniciales}</span>
                  )}
                </div>

                {m.trayectoria?.length > 0 && (
                  <div className="perfil-datos">
                    <p className="eyebrow">Trayectoria</p>
                    <ul className="incluye">
                      {m.trayectoria.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <Link className="btn perfil-btn" href="/#contacto">
                  Trabajar con {m.nombre.split(" ")[0]}
                </Link>
              </aside>

              {/* columna de lectura */}
              <div className="perfil-texto">
                <p className="eyebrow">{m.rol}</p>
                <h2>{m.nombre}</h2>

                {/* la bio corta hace de entradilla, en cuerpo mayor */}
                <p className="perfil-lead rv">{m.bio}</p>

                <div className="perfil-prosa rv">
                  {m.bioLarga?.map((p, k) => (
                    <p key={k}>{p}</p>
                  ))}
                </div>

                {m.escuchas?.length > 0 && (
                  <div className="perfil-escucha rv">
                    <p className="eyebrow">Escucha</p>
                    <div className="spots">
                      {m.escuchas.map((e) => (
                        <SpotifyEmbed key={e.enlace} enlace={e.enlace} titulo={e.titulo} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}

        {/* --- cierre --- */}
        <section className="cierre">
          <div className="band-bg" data-par="0.2" />
          <div className="cierre-inner">
            <h2 className="title rv">¿Con quién encaja tu proyecto?</h2>
            <p className="lede rv d1">
              Si no lo tienes claro, mándanos la maqueta y lo decidimos nosotros. Para eso
              somos tres.
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

        <SiteFooter />
      </main>
    </>
  );
}
