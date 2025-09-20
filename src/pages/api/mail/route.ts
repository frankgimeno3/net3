// pages/api/mail/route.ts
import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { render } from "@react-email/render";
import ContactTemplate from "@/app/components/emails/ContactTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, empresa, cargo, email, message } = req.body;

    // 👇 OJO: en tu versión, render es async → hay que await
    const html = await render(
      ContactTemplate({ name, empresa, cargo, email, message })
    );

    const { data, error } = await resend.emails.send({
      from: "Tu Proyecto <info@net3.es>", // usa dominio verificado en Resend
      to: ["frank@vidrioperfil.com"], // destinatario(s)
      subject: "Nuevo mensaje de contacto",
      html,
    });

    if (error) {
      console.error("Error enviando correo:", error);
      return res.status(500).json({ error });
    }

    return res.status(200).json({ message: "Email enviado correctamente", data });
  } catch (err) {
    console.error("Error inesperado:", err);
    return res.status(500).json({ error: "Error enviando el correo" });
  }
}
