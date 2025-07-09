import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { name, empresa, cargo, email, message, subject } = req.body;

  // Caso 1: Solicitud de consultoría (desde QuienSomos)
  const isConsultingRequest = !!(subject && message && !name && !empresa && !cargo && !email);

  // Caso 2: Formulario de contacto completo
  const isFullContactForm = !!(name && empresa && cargo && email && message);

  if (!isConsultingRequest && !isFullContactForm) {
    return res.status(400).json({ message: 'Faltan campos requeridos' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.ZOHOMAIL_HOST,
    port: Number(process.env.ZOHOMAIL_PORT),
    secure: process.env.ZOHOMAIL_SECURE === 'true',
    auth: {
      user: process.env.ZOHOMAIL_USER,
      pass: process.env.ZOHOMAIL_PASS,
    },
  });

  try {
    if (isConsultingRequest) {
      await transporter.sendMail({
        from: `"Net3 Web" <${process.env.ZOHOMAIL_USER}>`,
        to: process.env.TO_EMAIL,
        subject,
        html: `<p>${message}</p>`,
      });
    } else {
      await transporter.sendMail({
        from: `"Net3 Web" <${process.env.ZOHOMAIL_USER}>`,
        to: process.env.TO_EMAIL,
        subject: 'NUEVO MENSAJE ENVIADO DESDE LA WEB DE N3',
        html: `
          <h2>Nuevo mensaje desde la web de N3</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Empresa:</strong> ${empresa}</p>
          <p><strong>Cargo:</strong> ${cargo}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong><br/>${message}</p>
        `,
      });
    }

    return res.status(200).json({ message: 'Correo enviado correctamente' });
  } catch (error) {
    console.error('Error enviando correo:', error);
    return res.status(500).json({ message: 'Error enviando el correo' });
  }
}
