// Rail lateral: el camino de la senal. Se oculta por CSS por debajo de 1180px.
const puntos = ["Inicio", "Servicios", "Equipo", "Contacto"];

export default function Rail() {
  return (
    <aside className="rail" aria-hidden="true">
      <div className="rail-line" />
      <div className="rail-fill" id="railFill" />
      {puntos.map((p) => (
        <a key={p} className="patch" href={`#${p.toLowerCase()}`}>
          <b />
          <span>{p}</span>
        </a>
      ))}
    </aside>
  );
}
