import Topbar from "./components/Topbar";
import Rail from "./components/Rail";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Band from "./components/Band";
import Equipo from "./components/Equipo";
import Contacto from "./components/Contacto";
import SiteFooter from "./components/SiteFooter";
import ScrollFx from "./components/ScrollFx";

export default function Home() {
  return (
    <>
      {/* ScrollFx no pinta nada: instala el parallax, el revelado y la
          deteccion de seccion activa. Debe ir siempre montado. */}
      <ScrollFx />
      <Topbar />
      <Rail />
      <main>
        <Hero />
        <Servicios />
        <Band />
        <Equipo />
        <Contacto />
        <SiteFooter />
      </main>
    </>
  );
}
