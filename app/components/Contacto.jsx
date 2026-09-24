"use client";

import { useState } from "react";
import { estudio } from "../data/estudio";

const SERVICIOS = [
  "Sonido en estudio",
  "Sonido en directo",
  "Instalación en local",
  "Otra cosa",
];

export default function Contacto() {
  const [estado, setEstado] = useState({ tipo: "", texto: "" });
  const [enviando, setEnviando] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const datos = Object.fromEntries(fd.entries());

    if (!datos.nombre?.trim() || !datos.email?.trim() || !datos.mensaje?.trim()) {
      setEstado({ tipo: "err", texto: "Rellena nombre, email y proyecto." });
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(datos.email)) {
      setEstado({ tipo: "err", texto: "Revisa el email." });
      return;
    }

    setEnviando(true);
    setEstado({ tipo: "", texto: "Enviando…" });

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });
      if (!res.ok) throw new Error("fallo");
      e.target.reset();
      setEstado({ tipo: "ok", texto: "Mensaje enviado. Te respondemos en 48 horas." });
    } catch {
      setEstado({
        tipo: "err",
        texto: `No se ha podido enviar. Escríbenos a ${estudio.email}.`,
      });
    } finally {
      setEnviando(false);
    }
  }

  return (
    <section className="contacto" id="contacto">
      <p className="eyebrow rv">Contacto</p>
      <h2 className="title rv d1">
        Cuéntanos
        <br />
        la canción
      </h2>
      <p className="lede rv d2">
        Escríbenos con lo que tengas: una maqueta, las fechas de la gira o los metros del
        local. Respondemos en 48 horas con disponibilidad y presupuesto.
      </p>

      <div className="contact-grid">
        <form className="rv" onSubmit={onSubmit} noValidate>
          <div className="field">
            <label htmlFor="nombre">Nombre</label>
            <input id="nombre" name="nombre" type="text" autoComplete="name" />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" />
          </div>
          <div className="field">
            <label htmlFor="servicio">Qué necesitas</label>
            <select id="servicio" name="servicio" defaultValue={SERVICIOS[0]}>
              {SERVICIOS.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="mensaje">Cuéntanos el proyecto</label>
            <textarea id="mensaje" name="mensaje" rows={4} />
          </div>
          <button className="btn solid" type="submit" disabled={enviando}>
            {enviando ? "Enviando…" : "Enviar mensaje"}
          </button>
          <p className={`form-note ${estado.tipo}`} role="status">
            {estado.texto}
          </p>
        </form>

        <div className="rv d1">
          <div className="info-block">
            <p className="k">Email</p>
            <p className="v">
              <a href={`mailto:${estudio.email}`}>{estudio.email}</a>
            </p>
          </div>
          <div className="info-block">
            <p className="k">Estudio</p>
            <p className="v">{estudio.direccion}</p>
            <p className="sub">{estudio.horario}</p>
          </div>
          <div className="info-block">
            <p className="k">Teléfono</p>
            <p className="v">{estudio.telefono}</p>
          </div>
          <div className="info-block">
            <p className="k">Redes</p>
            <p className="v">
              {estudio.redes.length > 0 && (
            <div className="info-block">
              <p className="k">Redes</p>
              <p className="v">
                {estudio.redes.map((r, i) => (
                  <span key={r.nombre}>
                    {i > 0 && "\u00a0 "}
                    <a href={r.url} target="_blank" rel="noreferrer">
                      {r.nombre}
                    </a>
                  </span>
                ))}
              </p>
            </div>
          )}
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
