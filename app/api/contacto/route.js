import { Resend } from "resend";

// Endpoint del formulario. Recibe el JSON del cliente y manda el email.
// Necesita las variables de .env.local (ver .env.local.example).

export async function POST(req) {
  try {
    const { nombre, email, servicio, mensaje } = await req.json();

    if (!nombre?.trim() || !email?.trim() || !mensaje?.trim()) {
      return Response.json({ error: "Faltan campos" }, { status: 400 });
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return Response.json({ error: "Email no válido" }, { status: 400 });
    }

    const key = process.env.RESEND_API_KEY;
    if (!key) {
      console.error("Falta RESEND_API_KEY en .env.local");
      return Response.json({ error: "Servidor sin configurar" }, { status: 500 });
    }

    const resend = new Resend(key);

    await resend.emails.send({
      from: process.env.CONTACT_FROM,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `Web · ${servicio || "Consulta"} · ${nombre}`,
      text: [
        `Nombre:    ${nombre}`,
        `Email:     ${email}`,
        `Servicio:  ${servicio || "-"}`,
        "",
        mensaje,
      ].join("\n"),
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Error enviando el formulario:", err);
    return Response.json({ error: "No se pudo enviar" }, { status: 500 });
  }
}
