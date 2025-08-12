export const metadata = { title: "Transparencia | Fundación Energía Social" };
import Link from "next/link";

const docs = [
  {
    slug: "rut",
    title: "RUT Fundación Energía Social",
    description: "Registro Único Tributario actualizado.",
    url: "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/pdf/141188183962 RUT ENERGIA SOCIAL JUNIO 27 DE 2025.pdf",
  },
  {
    slug: "estatutos",
    title: "Estatutos Fundación Energía Social",
    description: "Marco legal y estatutario de la entidad (PDF).",
    url: "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/pdf/ESTATUTOS FUNDACIÓN ENERGIA SOCIAL.pdf",
  },
  {
    slug: "resolucion-0019-2018",
    title: "Resolución 000019 de 2018 (DIAN)",
    description: "Adopción del SIE RTE y lineamientos para ESAL (PDF).",
    url: "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/pdf/Resolución 000019 de 28-03-2018.pdf",
  },
  {
    slug: "informe-gestion-2024",
    title: "Informe de Gestión 2024",
    description: "Resultados, reinversión y transparencia de la gestión (PDF).",
    url: "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/pdf/Informe Gestion 2024 Fundacion Energia Social.pdf",
  },
  {
    slug: "declaracion-renta-2024",
    title: "Declaración de Renta 2024 (Formulario 110)",
    description: "Información tributaria año gravable 2024 (PDF).",
    url: "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/pdf/declaracion de renta 2024 ajustado.pdf",
  },
  {
    slug: "acta-asamblea-3-2025",
    title: "Acta No. 3 Asamblea General (23 mayo 2025)",
    description: "Autorización calificación ESAL y decisiones (PDF).",
    url: "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/pdf/ACTA NÚMERO 3.pdf",
  },
  {
    slug: "certificacion-requisitos-364-5",
    title: "Certificación cumplimiento requisitos (Art. 364-5 ET)",
    description: "Cumplimiento de requisitos para RTE (PDF).",
    url: "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/pdf/CERTIFICACION DE CUMPLIMIENTO DE REQUISITOS DE LA ENTIDAD CONTENIDO EN EL NUMERAL 13 DEL PARAGRAFO 2 DEL ARTICULO 364.pdf",
  },
  {
    slug: "certificacion-antecedentes-miembros",
    title: "Certificación antecedentes y caducidad (Art. 364-3 ET)",
    description: "Acreditación de no sanciones y no caducidades (PDF).",
    url: "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/pdf/CERTIFICACION DEL REPRESENTANTE LEGAL DE LOS ANTECEDENTES JUDICIALES Y DE DECLARACIONES DE CADUCIDAD DE CONTRATOS ESTATALES DE LOS MIEMBROS DE LA JUNTA DIRECTIVA.pdf",
  },
  {
    slug: "acta-constitucion-2024",
    title: "Acta de Constitución (15 agosto 2024)",
    description: "Constitución y aprobación de estatutos (PDF).",
    url: "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/pdf/ACTA DE CONSTITUCIÓN FUNDACION ENERGIA SOCIAL.pdf",
  },
  {
    slug: "certificado-existencia-ccb-2025",
    title: "Certificado de Existencia y Representación Legal (CCB)",
    description: "Expedido 19 de junio de 2025 (PDF).",
    url: "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/pdf/certificado de existencia y representacion legal ENERGIA SOCIAL FUNDACION.pdf",
  },
];

export default function TransparenciaPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-semibold">Transparencia</h1>
      <p className="mt-2 text-gray-400 max-w-prose">
        Consulta los documentos institucionales requeridos por la DIAN y la normatividad vigente.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {docs.map((d) => (
          <Link
            key={d.slug}
            href={`/transparencia/${d.slug}`}
            className="rounded-xl border border-black/5 bg-white p-6 hover:shadow-md transition"
          >
            <div className="text-lg font-medium text-gray-900">{d.title}</div>
            <p className="mt-1 text-sm text-gray-700">{d.description}</p>
            <div className="mt-2 text-sm text-primary">Ver documento →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
