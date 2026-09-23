# Sonido Central — web del estudio

Next.js (App Router) + Resend para el formulario. Diseño en negro con un único rojo.

---

## 1. Arrancar en tu ordenador

Necesitas **Node.js 18.18 o superior** (`node -v` para comprobarlo; si no lo tienes, descárgalo de nodejs.org).

```bash
cd sonido-central
npm install
npm run dev
```

Abre **http://localhost:3000**. Cada vez que guardes un archivo, el navegador se actualiza solo.

---

## 2. Qué toca cada archivo

| Quiero cambiar… | Archivo |
|---|---|
| Textos de Servicios | `app/data/servicios.js` |
| Los tres perfiles y sus fotos | `app/data/equipo.js` |
| Email, teléfono, dirección, redes | `app/data/estudio.js` |
| **El rojo, los negros, todo el color** | `app/globals.css` (bloque `:root`, arriba del todo) |
| Titular y frase del hero | `app/components/Hero.jsx` |
| La frase grande de la banda | `app/components/Band.jsx` |
| Título de la pestaña y descripción en Google | `app/layout.jsx` |

**Cambiar el rojo entero** son tres líneas en `app/globals.css`:

```css
--red:#DE3B2F;      /* rojo pleno   */
--red-hi:#F2564A;   /* rojo brillante: picos y hover */
--red-deep:#7E241C; /* rojo apagado: bordes y halos  */
```

Si cambias `--red`, cambia también su versión RGB justo debajo (`--red-rgb`), que es la que usan los degradados y la onda.

**Ajustes finos:**
- Cuántos picos brillantes tiene la onda → `UMBRAL` en `app/components/Waveform.jsx` (0.72 ahora; menos = más picos).
- Velocidad del parallax → atributos `data-par` en `Hero.jsx`, `Band.jsx` y `Equipo.jsx`.
- Parpadeo del piloto REC → `@keyframes rec` en `globals.css`.

---

## 3. Fotos del equipo

1. Guarda las tres en `public/equipo/` en vertical 4:5 (1200×1500 px va bien).
2. En `app/data/equipo.js`, cambia `foto: null` por `foto: "/equipo/luis.jpg"`.

Mientras `foto` sea `null` se ve el hueco con las iniciales, así que puedes lanzar sin fotos y añadirlas después.

---

## 4. Activar el formulario (Resend)

1. Crea una cuenta en resend.com y verifica el dominio del estudio (te pedirá añadir unos registros DNS en Namecheap).
2. Genera una API key.
3. Duplica `.env.local.example` y renómbralo a **`.env.local`**:

```
RESEND_API_KEY=re_tu_clave
CONTACT_TO=hola@sonidocentral.com
CONTACT_FROM=web@sonidocentral.com
```

`CONTACT_FROM` tiene que ser del dominio verificado. `.env.local` no se sube a GitHub nunca.

4. Reinicia `npm run dev` y prueba el formulario.

---

## 5. Publicar

1. Sube el proyecto a un repositorio de GitHub.
2. En Vercel: *Add New → Project* → importa el repo. Detecta Next.js solo.
3. En *Settings → Environment Variables*, mete las tres variables del `.env.local`.
4. Deploy.
5. En *Settings → Domains*, añade el dominio y copia los registros que te dé en el DNS de Namecheap.

A partir de ahí, cada `git push` publica los cambios.

---

## 6. Pendiente antes de lanzar

- [ ] Nombre, rol, bio y etiquetas de los otros dos productores
- [ ] Las tres fotos
- [ ] Email, teléfono y dirección reales
- [ ] Enlaces de Instagram / YouTube / Spotify
- [ ] Aviso legal y política de privacidad (obligatorio en España si recoges datos por formulario)
- [ ] Imagen para compartir en redes (`og:image`)
