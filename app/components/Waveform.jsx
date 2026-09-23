"use client";

import { useEffect, useRef } from "react";

/* Onda del hero.
   Un solo rojo: las barras normales van en --red con opacidad segun nivel,
   y las que superan el umbral saltan a --red-hi a plena opacidad.
   Sube UMBRAL para tener menos picos brillantes, bajalo para tener mas. */
const UMBRAL = 0.72;

export default function Waveform() {
  const ref = useRef(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const cs = getComputedStyle(document.documentElement);
    const base = cs.getPropertyValue("--red-rgb").trim() || "222,59,47";
    const hot = cs.getPropertyValue("--red-hi-rgb").trim() || "242,86,74";

    let W = 0, H = 0, t = 0, raf = 0;

    const size = () => {
      W = cv.clientWidth;
      H = cv.clientHeight;
      cv.width = W * dpr;
      cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const bw = 3, gap = 4, step = bw + gap;
      const n = Math.ceil(W / step);
      const mid = H / 2;
      for (let i = 0; i < n; i++) {
        const x = i * step;
        const p = i / n;
        const env = Math.pow(Math.sin(Math.PI * p), 0.55);
        const a =
          Math.sin(p * 13 + t) *
          Math.sin(p * 31 - t * 0.7) *
          Math.sin(p * 4.5 + t * 0.35);
        const lvl = Math.abs(a) * env;
        const h = lvl * (H * 0.44) + 1.2;
        const pico = lvl > UMBRAL;
        const alpha = pico ? 0.95 : 0.1 + lvl * 0.55;
        ctx.fillStyle = `rgba(${pico ? hot : base},${alpha.toFixed(3)})`;
        ctx.fillRect(x, mid - h, bw, h * 2);
      }
    };

    const loop = () => {
      t += 0.012;
      draw();
      raf = requestAnimationFrame(loop);
    };

    const onResize = () => { size(); draw(); };

    size();
    if (reduce) draw();
    else loop();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas id="wave" ref={ref} aria-hidden="true" />;
}
