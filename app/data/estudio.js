// Datos del estudio: se usan en Contacto, en el pie y en los metadatos de la web.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://sonidocentral.com";

export const estudio = {
  nombre: "Sonido Central",
  ciudad: "Madrid",
  email: "hola@sonidocentral.com",
  telefono: "+34 000 000 000",
  direccion: "Barrio de Acacias (Embajadores), Madrid",
  horario: "Sesiones con cita previa, de lunes a viernes.",
  redes: [
    { nombre: "Instagram", url: "#" },
    { nombre: "YouTube", url: "#" },
    { nombre: "Spotify", url: "#" },
  ],
};
