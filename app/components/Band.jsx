import { estudio } from "../data/estudio";

export default function Band() {
  return (
    <section className="band">
      <div className="band-bg" data-par="0.22" />
      <q className="rv">Nada sale de aquí hasta que suena como te lo imaginaste</q>
      <p className="eyebrow sig rv d1">
        {estudio.nombre} <span className="dot">·</span> {estudio.ciudad}
      </p>
    </section>
  );
}
