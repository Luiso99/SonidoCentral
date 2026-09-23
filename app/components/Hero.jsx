import Waveform from "./Waveform";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      {/* data-par = velocidad del parallax. Mas alto, mas movimiento. */}
      <div className="hero-layer hero-rings" data-par="0.18" />
      <div className="hero-layer hero-grid" data-par="0.34" />

      <div className="hero-inner">
        <p className="eyebrow">
          Madrid <span className="dot">·</span> Estudio, directo e instalaciones
        </p>
        <h1>
          Sonido<span className="sep">Central</span>
        </h1>
        <p className="claim">
          Tres productores. Sonido de estudio, sonido de directo y sistemas instalados a medida.
        </p>
        <div className="cta-row">
          <a className="btn solid" href="#contacto">Reservar sesión</a>
          <a className="btn" href="#servicios">Ver servicios</a>
        </div>
      </div>

      <Waveform />

      <div className="hero-foot">
        <span>Est. 2026</span>
        <span>Sala propia · Equipo de directo · Instalaciones</span>
        <span>Desplázate ↓</span>
      </div>
    </section>
  );
}
