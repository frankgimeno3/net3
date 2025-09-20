// /app/api/mail/route.ts
import { Resend } from "resend";
import { render } from "@react-email/render";
import ContactTemplate from "@/app/components/emails/ContactTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, empresa, cargo, email, message } = await req.json();

    const html = await render(ContactTemplate({ name, empresa, cargo, email, message }));

    const { data, error } = await resend.emails.send({
      from: "NET3.es <info@net3.es>", // dominio verificado en Resend
      to: ["frank@vidrioperfil.com"],     // destinatario
      subject: "Nuevo mensaje de contacto",
      html,
    });

    if (error) return new Response(JSON.stringify(error), { status: 500 });

    return new Response(JSON.stringify({ message: "Email enviado correctamente", data }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Error enviando el correo" }), { status: 500 });
  }
}
