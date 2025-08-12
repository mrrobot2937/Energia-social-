import type { Metadata } from "next";
import PasswordGate from "@/components/PasswordGate";

export const metadata: Metadata = {
  title: "Documento | Transparencia | Fundación Energía Social",
};

const titles: Record<string, string> = {
  rut: "RUT Fundación Energía Social",
  estatutos: "Estatutos Fundación Energía Social",
  "resolucion-0019-2018": "Resolución 000019 de 2018 (DIAN)",
  "informe-gestion-2024": "Informe de Gestión 2024",
  "declaracion-renta-2024": "Declaración de Renta 2024",
  "acta-asamblea-3-2025": "Acta No. 3 Asamblea General (23 mayo 2025)",
  "certificacion-requisitos-364-5": "Certificación requisitos (Art. 364-5 ET)",
  "certificacion-antecedentes-miembros": "Certificación antecedentes y caducidad (Art. 364-3 ET)",
  "acta-constitucion-2024": "Acta de Constitución (15 agosto 2024)",
  "certificado-existencia-ccb-2025": "Certificado de Existencia (CCB)",
};

// Placeholder de URLs (reemplazar por URLs reales cuando las tengas)
const urls: Record<string, string> = {
  rut: "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/pdf/141188183962 RUT ENERGIA SOCIAL JUNIO 27 DE 2025.pdf",
  estatutos: "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/pdf/ESTATUTOS FUNDACIÓN ENERGIA SOCIAL.pdf",
  "resolucion-0019-2018": "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/pdf/Resolución 000019 de 28-03-2018.pdf",
  "informe-gestion-2024": "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/pdf/Informe Gestion 2024 Fundacion Energia Social.pdf",
  "declaracion-renta-2024": "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/pdf/declaracion de renta 2024 ajustado.pdf",
  "acta-asamblea-3-2025": "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/pdf/ACTA NÚMERO 3.pdf",
  "certificacion-requisitos-364-5": "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/pdf/CERTIFICACION DE CUMPLIMIENTO DE REQUISITOS DE LA ENTIDAD CONTENIDO EN EL NUMERAL 13 DEL PARAGRAFO 2 DEL ARTICULO 364.pdf",
  "certificacion-antecedentes-miembros": "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/pdf/CERTIFICACION DEL REPRESENTANTE LEGAL DE LOS ANTECEDENTES JUDICIALES Y DE DECLARACIONES DE CADUCIDAD DE CONTRATOS ESTATALES DE LOS MIEMBROS DE LA JUNTA DIRECTIVA.pdf",
  "acta-constitucion-2024": "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/pdf/ACTA DE CONSTITUCIÓN FUNDACION ENERGIA SOCIAL.pdf",
  "certificado-existencia-ccb-2025": "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/pdf/certificado de existencia y representacion legal ENERGIA SOCIAL FUNDACION.pdf",
};

export default async function DocumentoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = titles[slug] || "Documento";
  const url = urls[slug] || "";

  return (
    <div className="container py-12">
      <h1 className="text-2xl font-semibold text-gray-400">{title}</h1>
      <p className="mt-1 text-sm text-gray-600">Formato PDF</p>
      <PasswordGate url={url} title={title} />
    </div>
  );
}
