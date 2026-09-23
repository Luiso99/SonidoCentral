import Link from "next/link";
import Topbar from "./components/Topbar";
import SiteFooter from "./components/SiteFooter";

export default function NotFound() {
  return (
    <>
      <Topbar />
      <main className="servicio">
        <header className="servicio-head">
          <p className="eyebrow">Error 404</p>
          <h1>Esta página no existe</h1>
          <p className="claim">
            Puede que el enlace esté mal escrito o que hayamos movido la página.
          </p>
          <div className="cta-row">
            <Link className="btn solid" href="/">
              Volver al inicio
            </Link>
          </div>
        </header>
        <SiteFooter />
      </main>
    </>
  );
}
