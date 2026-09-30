/* Reproductor de Spotify.
   No necesita JavaScript propio: es el iframe oficial.
   Acepta el enlace tal cual lo copias de Spotify, incluidos los enlaces
   con idioma (/intl-es/) y los URI del tipo spotify:track:ID. */

const ALTURAS = {
  track: 152,   // canción suelta, vista compacta
  album: 352,
  playlist: 352,
  artist: 352,
  episode: 352,
  show: 352,
};

export function leerEnlace(enlace) {
  if (!enlace) return null;

  // spotify:track:4uLU6hMCjMI75M1A2tKUQC
  const uri = enlace.match(/^spotify:(track|album|playlist|artist|episode|show):([A-Za-z0-9]+)/);
  if (uri) return { tipo: uri[1], id: uri[2] };

  // https://open.spotify.com/intl-es/track/4uLU6hMCjMI75M1A2tKUQC?si=...
  const url = enlace.match(
    /open\.spotify\.com\/(?:intl-[a-z]{2}\/)?(track|album|playlist|artist|episode|show)\/([A-Za-z0-9]+)/
  );
  if (url) return { tipo: url[1], id: url[2] };

  return null;
}

export default function SpotifyEmbed({ enlace, titulo }) {
  const ref = leerEnlace(enlace);

  // Si el enlace no se entiende, no rompemos la pagina: avisamos y seguimos.
  if (!ref) {
    return (
      <p className="spot-fallo">
        Enlace de Spotify no válido. Copia el enlace desde Spotify con
        “Compartir → Copiar enlace”.
      </p>
    );
  }

  const alto = ALTURAS[ref.tipo] || 352;
  const src = `https://open.spotify.com/embed/${ref.tipo}/${ref.id}?utm_source=generator&theme=0`;

  return (
    <div className="spot" style={{ "--spot-alto": `${alto}px` }}>
      <iframe
        src={src}
        title={titulo || "Reproductor de Spotify"}
        width="100%"
        height={alto}
        frameBorder="0"
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      />
    </div>
  );
}
