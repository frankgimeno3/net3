// emails/ContactTemplate.tsx
import { Body, Container, Head, Html, Preview, Text, Section, Hr, } from "@react-email/components";
import * as React from "react";

interface ContactTemplateProps {
  name: string | null;
  empresa: string | null;
  cargo: string | null;
  email: string | null;
  message: string | null;
}

export const ContactTemplate = ({
  name,
  empresa,
  cargo,
  email,
  message,
}: ContactTemplateProps) => (
  <Html>
    <Head />
    <Preview>Nuevo mensaje de contacto</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={paragraph}>Tienes un nuevo mensaje:</Text>
        <Text style={paragraph}><strong>Nombre:</strong> {name}</Text>
        <Text style={paragraph}><strong>Empresa:</strong> {empresa}</Text>
        <Text style={paragraph}><strong>Cargo:</strong> {cargo}</Text>
        <Text style={paragraph}><strong>Email:</strong> {email}</Text>
        <Hr style={hr} />
        <Section>
          <Text style={paragraph}><strong>Mensaje:</strong></Text>
          <Text style={paragraph}>{message}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const paragraph = {
  fontSize: "14px",
  lineHeight: "24px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};
