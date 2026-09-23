import Link from "next/link";
import { areas, auxiliares } from "../data/servicios";

export default function Servicios() {
  return (
    <section className="servicios" id="servicios">
      <p className="eyebrow rv">Servicios</p>
      <h2 className="title rv d1">
        Donde haga
        <br />
        falta sonido
      </h2>
      <p className="lede rv d2">
        Tres frentes con el mismo criterio: sala, escenario y local. Puedes contratarlos
        por separado o encadenarlos en un mismo proyecto.
      </p>

      <div className="areas">
        {areas.map((a, i) => (
          <Link
            key={a.slug}
            href={`/servicios/${a.slug}`}
            className={`area rv${i ? ` d${i}` : ""}`}
          >
            <div className="area-head">
              <span className="pin" />
              <span className="lugar">{a.lugar}</span>
            </div>
            <h3>{a.titulo}</h3>
            <p className="area-txt">{a.texto}</p>
            <ul className="incluye">
              {a.incluye.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <span className="area-mas">Ver en detalle →</span>
          </Link>
        ))}
      </div>

      <div className="aux rv">
        <h4>También hacemos</h4>
        <ul>
          {auxiliares.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
