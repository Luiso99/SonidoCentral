"use client";

import { useEffect } from "react";

/* Efectos de scroll de toda la web:
   1. barra superior solida al bajar
   2. parallax de las capas marcadas con data-par
   3. relleno del rail segun el progreso de lectura
   4. revelado de los bloques .rv
   5. seccion activa en la navegacion y en el rail
   Todo se desactiva solo si el sistema pide menos movimiento. */

const SECCIONES = ["inicio", "servicios", "equipo", "contacto"];

export default function ScrollFx() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const topbar = document.getElementById("topbar");
    const railFill = document.getElementById("railFill");
    const layers = Array.from(document.querySelectorAll("[data-par]"));
    let ticking = false;

    const frame = () => {
      const y = window.scrollY || window.pageYOffset;
      const vh = window.innerHeight;

      if (topbar) topbar.classList.toggle("stuck", y > 40);

      if (!reduce) {
        for (const el of layers) {
          const r = el.getBoundingClientRect();
          const mid = r.top + r.height / 2 - vh / 2;
          el.style.transform = `translate3d(0,${-mid * parseFloat(el.dataset.par)}px,0)`;
        }
      }

      const max = document.documentElement.scrollHeight - vh;
      const pct = max > 0 ? Math.min(1, y / max) : 0;
      if (railFill) railFill.style.height = `${pct * 100}%`;

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(frame);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    frame();

    // revelado
    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));

    // seccion activa
    const navLinks = document.querySelectorAll(".mainnav a");
    const patches = document.querySelectorAll(".patch");
    const spy = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (!en.isIntersecting) continue;
          const i = SECCIONES.indexOf(en.target.id);
          if (i < 0) continue;
          navLinks.forEach((a, k) => a.classList.toggle("active", k === i));
          patches.forEach((p, k) => p.classList.toggle("on", k === i));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    SECCIONES.forEach((id) => {
      const s = document.getElementById(id);
      if (s) spy.observe(s);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      io.disconnect();
      spy.disconnect();
    };
  }, []);

  return null;
}
