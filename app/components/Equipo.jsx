import Image from "next/image";
import { equipo } from "../data/equipo";

export default function Equipo() {
  return (
    <section className="equipo" id="equipo">
      <div className="equipo-bg" data-par="0.14" />
      <p className="eyebrow rv">Equipo</p>
      <h2 className="title rv d1">
        Tres formas
        <br />
        de escuchar
      </h2>
      <p className="lede rv d2">
        Cada proyecto lo lleva quien mejor encaja con él. Puedes elegir tú o dejar que lo
        decidamos después de escuchar la maqueta.
      </p>

      <div className="crew">
        {equipo.map((m, i) => (
          <article key={m.nombre} className={`member rv${i ? ` d${i}` : ""}`}>
            <div className="portrait">
              {m.foto ? (
                <Image src={m.foto} alt={m.nombre} width={1200} height={1500} />
              ) : (
                <>
                  <span className="initials">{m.iniciales}</span>
                  <span className="ph-tag">Foto pendiente</span>
                </>
              )}
            </div>
            <div className="member-body">
              <p className="role">{m.rol}</p>
              <h3>{m.nombre}</h3>
              <p>{m.bio}</p>
              <div className="tags">
                {m.etiquetas.map((t, j) => (
                  <span key={`${m.nombre}-${j}`}>{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
