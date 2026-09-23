// Los tres perfiles del estudio.
//
// CÓMO AÑADIR LA FOTO:
//   1. Guarda la imagen en  /public/equipo/  (formato vertical 4:5, p.ej. 1200x1500 px)
//   2. Pon la ruta en "foto", por ejemplo:  foto: "/equipo/luis.jpg"
//   3. Si "foto" queda en null, se muestra el hueco con las iniciales.

export const equipo = [
  {
    nombre: "Luis Lubén",
    iniciales: "LL",
    rol: "Grabación · Mezcla · Masterización",
    foto: null,
    bio: "Cantautor, guitarrista e ingeniero. Producción y mezcla de proyectos de autor con foco en la voz y en que el arreglo respete la canción.",
    etiquetas: ["Voz", "Guitarra", "Pop de autor"],
  },
  {
    nombre: "Pablo GZ (Costti)",
    iniciales: "GZ",
    rol: "Grabación · Producción · Mezcla en estudio y directo",
    foto: null,
    bio: "Productor musical y técnico de sonido con más de siete años de experiencia. Producción, arreglos y mezcla, tanto en estudio como en directo.",
    etiquetas: ["Urbano", "Modern Pop", "Directo"],
  },
  {
    nombre: "Raúl Villarrubia (Ruvi)",
    iniciales: "RV",
    rol: "Audiovisual · Composición · Mezcla · Masterización",
    foto: null,
    bio: "Ingeniero de mezcla y mastering, compositor y multiinstrumentista. Arreglista para proyectos audiovisuales. Respeta la esencia de cada canción y la eleva desde dentro.",
    etiquetas: ["Mezcla", "Masterización", "Composición"],
  },
];
