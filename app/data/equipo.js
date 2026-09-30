// Los tres perfiles del estudio.
//
// CÓMO AÑADIR LA FOTO:
//   1. Guarda la imagen en  /public/equipo/  (formato vertical 4:5, p.ej. 1200x1500 px)
//   2. Pon la ruta en "foto", por ejemplo:  foto: "/equipo/luis.jpg"
//   3. Si "foto" queda en null, se muestra el hueco con las iniciales.

export const equipo = [
  {
    slug: "luis-luben",
    nombre: "Luis Lubén",
    iniciales: "LL",
    rol: "Grabación · Mezcla · Masterización",
    foto: "/equipo/Luis_Foto.jpeg",
    bio: "Cantautor, guitarrista e ingeniero. Producción y mezcla de proyectos de autor con foco en la voz y en que el arreglo respete la canción.",
    bioLarga: [
      "Soy Luis Lubén, cantautor, guitarrista, productor e ingeniero de mezcla. A diferencia de lo que suele pasar, llegué a la producción desde el otro lado: primero fui el que escribía las canciones y las cantaba, y solo después aprendí a grabarlas y mezclarlas. Llevo más de diez años tocando la guitarra, más de diez años trabajando la voz, y desde el 2020 activo en producción y mezcla, y esa doble mirada —la del que está delante del micro y la del que está detrás de la pantalla— es la que traigo a cada sesión.",
      "En 2026 publiqué mi primer EP, La Idea de Ella, seis canciones producidas, grabadas, mezcladas y masterizadas por mí. Conozco el proceso entero porque lo he recorrido solo, desde la letra escrita en las notas del móvil hasta el máster subido a plataformas. Cuento con un Máster en Producción Musical por TAI. Además de mis propios proyectos, produzco y mezclo para otros artistas.",
      "Lo que puedo aportar es sobre todo trabajo de canción. Antes de tocar un compresor me interesa saber si la estructura aguanta, si la letra dice lo que quieres decir y si el tono es el que tu voz necesita. He escrito lo suficiente como para reconocer cuándo un estribillo entra tarde o cuándo sobra un verso, y he cantado lo suficiente como para saber lo que se siente al grabar una toma difícil y necesitar que alguien te lo ponga fácil.", 
      "Si vienes con una canción a medias, o con una idea que aún no sabes cómo sacarla adelante, ese es mi terreno. Y si quieres saber cómo suena lo que hago, lo más honesto es que escuches mis propias canciones: ahí no hay nada que no haya decidido yo."
    ],
    etiquetas: ["Voz", "Guitarra", "Pop de autor"],
    escuchas: [
      {
        enlace: "https://open.spotify.com/intl-es/track/3kqBVLPn1AL1fyuAZ7vi5l?si=b3edede0d79a48bc",
        titulo: "Siento · Luis Lubén",
      },
    ],
  },
  {
    slug: "pablo-gz-costti",
    nombre: "Pablo GZ (Costti)",
    iniciales: "GZ",
    rol: "Grabación · Producción · Mezcla en estudio y directo",
    foto: "/equipo/Pablo_Foto.jpeg",
    bio: "Productor musical y técnico de sonido con más de siete años de experiencia. Producción, arreglos y mezcla, tanto en estudio como en directo.",
    bioLarga: ["Soy Costti, productor musical, cantante, ingeniero de mezcla y técnico de sonido. Mi relación con la música viene desde pequeño. Crecí en una familia con varios músicos y empecé a tocar el piano y la guitarra desde joven. Con el tiempo, fui llevando esos conocimientos hacia la producción musical, hasta convertirla en mi profesión.",
              "Desde 2019 trabajo en canciones propias y en proyectos de otros artistas, participando en decenas de temas como productor, cantante e ingeniero de mezcla. He estudiado Producción Musical y Sonido y, además, cuento con un máster en Sonorización de Espectáculos en Vivo. Esto me ha permitido desarrollar una visión que va más allá del estudio y entender la música también desde el punto de vista del directo. Durante estos últimos años he trabajado como técnico de sonido en salas, festivales y diferentes tipos de eventos, colaborando con artistas y músicos, especialmente dentro de la escena urbana y el flamenco.",
              "Creo que toda esta experiencia puede aportar mucho a un artista que está buscando desarrollar un sonido propio. Mi objetivo no es simplemente hacer que una canción suene bien, sino trabajar junto al artista para encontrar una identidad sonora que represente quién es y que pueda mantenerse tanto en el estudio como encima de un escenario. Mi experiencia en directo también me permite plantear las producciones pensando en cómo van a funcionar fuera del estudio: qué elementos necesitan destacar, cómo trasladar la energía de la canción al escenario y cómo conseguir que la esencia del proyecto se mantenga en ambos formatos. Si quieres conocer mejor mi sonido y mi forma de trabajar, te recomiendo escuchar las canciones que encontrarás más adelante. Creo que es la mejor manera de entender el tipo de producciones y mezclas que realizo y la dirección sonora que puedo aportar a un proyecto."
    ],
    etiquetas: ["Urbano", "Modern Pop", "Directo"],
    escuchas: [
      {
        enlace: "https://open.spotify.com/intl-es/track/5RLmetRo5RPgOdX5T687bR?si=120e1d1d08d04eb3",
        titulo: "I CARE · Costti",
      },
    ],
  },
  {
    slug: "raul-villarrubia-ruvi",
    nombre: "Raúl Villarrubia (Ruvi)",
    iniciales: "RV",
    rol: "Audiovisual · Composición · Mezcla · Masterización",
    foto: "/equipo/Raul_Foto.jpg",
    bio: "Ingeniero de mezcla y mastering, compositor y multiinstrumentista. Arreglista para proyectos audiovisuales. Respeta la esencia de cada canción y la eleva desde dentro.",
    bioLarga: [
      "Soy Raúl Villarrubia, ingeniero de mezcla y mastering, productor, artista y compositor multiinstrumentista. Llevo casi 10 años creando música, a mis espaldas tengo 2 álbumes y singles autoproducidos, 6 años de mezcla y mastering para proyectos de artistas, y colaboraciones en proyectos audiovisuales, como bandas sonoras de cortos cinematográficos y postproducción de un corto animado.", 
      "Mi especialidad es el área de Mezcla y Mastering para medios digitales, al ser yo mismo un artista, he ido desarrollando un enfoque particular sobre como abordo este proceso, mi forma de trabajo es: primero buscamos la identidad de la canción, esa esencia que en un primer lugar nos enamora y nos transporta, y a partir de ese momento usamos técnicas avanzadas para llevar la canción al máximo nivel sonoro que esperan las plataformas, mientras conservamos la visión y alma original.", 
      "En cuanto a producción, tengo un grado y un máster en Music Production por la escuela CEV, toco el piano, la guitarra, el bajo y canto. Mi forma de consumir música me ha llevado a ser un creador muy versátil en cuanto a géneros, he producido reggae, afrobeat, rock, funk, soul, indie, synthwave y pop. Te invito a que escuches los ejemplos que encontrarás más adelante para que puedas escuchar que puedo aportar a tu proyecto.",
      "Mi filosofía de trabajo es:\"Si lo podemos imaginar, puedo hacerlo sonar\"."
    ],
    etiquetas: ["Mezcla", "Masterización", "Composición"],
    escuchas: [
      {
        enlace: "https://open.spotify.com/intl-es/track/51d7IFlJm2zbxAPaW9rDOQ?si=e69b82461d364401",
        titulo: "ALELUYA · RUVi REiZZ",
      },
    ],
  },
];
