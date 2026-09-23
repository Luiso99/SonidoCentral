// Las tres areas de Sonido Central.
//
// Cada una genera automaticamente su propia pagina en  /servicios/<slug>
// No hay que crear archivos: anadir o quitar aqui crea o borra la pagina.
//
//   slug     -> la direccion web. Sin acentos, sin espacios, en minusculas.
//   lugar    -> etiqueta pequena de contexto
//   texto    -> resumen corto (el que sale en la tarjeta de la portada)
//   incluye  -> lista de lo que entra (sale en la tarjeta y en la pagina)
//   detalle  -> todo lo que solo se ve al entrar en la pagina
//
// AVISO: el contenido de "detalle" es una propuesta. Revisadlo entre los tres
// antes de publicar, sobre todo precios, material y plazos.

export const areas = [
  {
    slug: "estudio",
    lugar: "Sala",
    titulo: "Sonido profesional en estudio",
    texto:
      "Grabamos, producimos y terminamos discos en sala tratada. Puedes entrar en cualquier punto: con la canción en la cabeza o con las tomas ya hechas.",
    incluye: [
      "Grabación de voces e instrumentos",
      "Producción y arreglos",
      "Mezcla",
      "Masterización para plataformas, CD y vinilo",
      "Edición vocal y afinación",
    ],
    detalle: {
      intro:
        "La sala está pensada para que una canción entre en cualquier estado y salga terminada. Si traes las tomas hechas, mezclamos. Si traes una nota de voz, empezamos por la canción y no por el sonido.",
      proceso: [
        {
          titulo: "Escuchamos la maqueta",
          texto:
            "Antes de reservar nada, nos mandas lo que tengas. Te decimos qué haría falta, cuántas sesiones y qué presupuesto, sin compromiso.",
        },
        {
          titulo: "Preproducción",
          texto:
            "Estructura, tempo, tonalidad y arreglos. Es la fase más barata del proceso y la que más cambia el resultado final.",
        },
        {
          titulo: "Grabación",
          texto:
            "Sesiones de sala con el micro y el previo elegidos para cada fuente. Grabamos por bloques para que no se pierda energía.",
        },
        {
          titulo: "Mezcla",
          texto:
            "Primera versión, ronda de comentarios y cierre. Incluimos dos revisiones; a partir de ahí se factura aparte.",
        },
        {
          titulo: "Máster y entrega",
          texto:
            "Máster para plataformas, más instrumental, versión para directo y los archivos originales. Todo tuyo.",
        },
      ],
      material: [
        "Sala de grabación y mezcla tratados acústicamente",
        "Micrófonos de condensador y dinámicos",
        "Monitoraje de referencia y cascos independientes por músico",
        "Guitarras, bajos de estudio y amplificadores",
        "Manejo en todos los DAWS (Pro Tools, Logic, FL Studio, Ableton Live)",
      ],
      faq: [
        {
          q: "¿Cuánto cuesta grabar una canción?",
          a: "Depende de cuántas sesiones necesite y de dónde entres en el proceso. Mándanos la maqueta y te damos un presupuesto cerrado antes de empezar.",
        },
        {
          q: "¿Puedo llevar solo la mezcla?",
          a: "Sí. Nos mandas las pistas exportadas desde el primer compás y nosotros nos encargamos del resto.",
        },
        {
          q: "¿De quién son los derechos de la canción?",
          a: "Tuyos. Nosotros firmamos la producción y la mezcla, y los archivos originales se te entregan al terminar.",
        },
      ],
    },
  },
  {
    slug: "directo",
    lugar: "Escenario",
    titulo: "Sonido profesional en directo",
    texto:
      "Llevamos el concierto de principio a fin: montaje, prueba de sonido y función. Trabajamos con tu equipo o aportamos el nuestro.",
    incluye: [
      "Técnico de sala y de monitores",
      "Alquiler y montaje de P.A.",
      "Pistas y playback sincronizado",
      "Grabación multipista del directo",
      "Ensayos de producción antes de gira",
    ],
    detalle: {
      intro:
        "Un concierto se gana antes de que suene la primera nota. Preparamos el directo desde el local de ensayo hasta la función, para que en la prueba de sonido no haya sorpresas.",
      proceso: [
        {
          titulo: "Hablamos del bolo",
          texto:
            "Aforo, sala, backline y qué equipo hay en casa. Con eso montamos el rider técnico y el plano de escenario.",
        },
        {
          titulo: "Ensayos de producción",
          texto:
            "Repasamos el set completo con el mismo monitorado y las mismas pistas que vas a llevar a la sala.",
        },
        {
          titulo: "Montaje y prueba",
          texto:
            "Llegamos con margen, montamos, hacemos línea por línea y dejamos las mezclas de monitores cerradas antes de abrir puertas.",
        },
        {
          titulo: "Función",
          texto:
            "Técnico de sala y, si el formato lo pide, técnico de monitores. Grabamos el multipista sin coste añadido.",
        },
      ],
      material: [
        "Rider técnico y plano de escenario a medida",
        "P.A. y monitorado propio para salas pequeñas y medianas",
        "Grabación multipista de la mesa",
        "Cableado, microfonía y racks de escenario",
      ],
      faq: [
        {
          q: "¿Trabajáis fuera de Madrid?",
          a: "Sí. Fuera de la Comunidad de Madrid se añaden dietas y desplazamiento al presupuesto.",
        },
        {
          q: "¿Qué necesitáis para llevar pistas?",
          a: "Las pistas de audio en una sesión y el click. Nosotros nos encargamos de sincronizarlo con la mesa y los monitores.",
        },
        {
          q: "¿Con cuánta antelación hay que reservar?",
          a: "Cuanto antes mejor, sobre todo en temporada de festivales. Escríbenos con las fechas aunque aún no estén cerradas.",
        },
      ],
    },
  },
  {
    slug: "instalaciones",
    lugar: "Local",
    titulo: "Instalación de sistemas en locales",
    texto:
      "Diseñamos e instalamos el sonido de bares, salas, restaurantes y estudios. Medimos el espacio antes de recomendar nada.",
    incluye: [
      "Estudio acústico del espacio",
      "Diseño y dimensionado del sistema",
      "Instalación, cableado y racks",
      "Calibración y ecualización de sala",
      "Mantenimiento y soporte posterior",
    ],
    detalle: {
      intro:
        "La mayoría de los locales no tienen un problema de altavoces, tienen un problema de sala. Por eso medimos antes de presupuestar: así no pagas por potencia que tu espacio no necesita.",
      proceso: [
        {
          titulo: "Visita y medición",
          texto:
            "Vamos al local, medimos la respuesta de la sala y hablamos de para qué se va a usar: música ambiente, conciertos, o las dos cosas.",
        },
        {
          titulo: "Propuesta",
          texto:
            "Te entregamos el diseño del sistema, dónde va cada altavoz y el presupuesto desglosado en material y mano de obra.",
        },
        {
          titulo: "Instalación",
          texto:
            "Montaje, cableado y rack ordenado y etiquetado. Coordinamos con tu electricista o tu obra si hace falta.",
        },
        {
          titulo: "Calibración y entrega",
          texto:
            "Ajustamos el sistema al local y dejamos los ajustes bloqueados, con un mando sencillo para el personal.",
        },
      ],
      material: [
        "Medición acústica del espacio",
        "Diseño de cobertura y dimensionado de potencia",
        "Zonificación con control independiente por sala",
        "Tratamiento acústico cuando el espacio lo pide",
      ],
      faq: [
        {
          q: "¿Cuánto cuesta sonorizar un local?",
          a: "Depende de los metros, de la altura y de para qué se use. La visita y la medición te dan una cifra realista.",
        },
        {
          q: "¿Cumple con la normativa de ruido?",
          a: "Diseñamos pensando en el límite legal del local y podemos dejar el sistema limitado para que no se supere.",
        },
        {
          q: "¿Trabajáis con el material que ya tengo?",
          a: "Si funciona, sí. A veces basta con recolocar y calibrar lo que ya hay antes de comprar nada.",
        },
        {
          q: "¿Dais mantenimiento después?",
          a: "Sí, con revisiones periódicas o por aviso. Lo acordamos al cerrar la instalación.",
        },
      ],
    },
  },
];

export const auxiliares = [
  "Composición y letras",
  "Músicos de sesión",
  "Sonido para audiovisual",
  "Formación y talleres",
  "Asesoría de lanzamiento",
];

export const getArea = (slug) => areas.find((a) => a.slug === slug);
