import { Resend } from "resend";
import { render } from "@react-email/render";
import ContactTemplate from "@/app/components/emails/ContactTemplate";

// Validación de variables de entorno
if (!process.env.RESEND_API_KEY) throw new Error("Falta RESEND_API_KEY en las variables de entorno");
if (!process.env.REMITENTE_RESEND) throw new Error("Falta REMITENTE_RESEND en las variables de entorno");
if (!process.env.TO_EMAIL) throw new Error("Falta TO_EMAIL en las variables de entorno");

// Usamos el non-null assertion operator '!' para que TypeScript sepa que no son undefined
const RESEND_API_KEY = process.env.RESEND_API_KEY!;
const REMITENTE_RESEND = process.env.REMITENTE_RESEND!;
const TO_EMAIL = process.env.TO_EMAIL!;

const resend = new Resend(RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, empresa, cargo, email, message } = await req.json();

    const html = await render(ContactTemplate({ name, empresa, cargo, email, message }));

    const { data, error } = await resend.emails.send({
      from: REMITENTE_RESEND,  
      to: [TO_EMAIL],          
      subject: "Nuevo mensaje de contacto",
      html,
    });

    if (error) return new Response(JSON.stringify(error), { status: 500 });

    return new Response(JSON.stringify({ message: "Email enviado correctamente", data }), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ error: "Error enviando el correo" }), { status: 500 });
  }
}
