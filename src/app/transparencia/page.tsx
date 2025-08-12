export const metadata = { title: "Transparencia | Fundación Energía Social" };

const docs = [
  {
    slug: "estatutos",
    title: "Estatutos Fundación Energía Social",
    description: "Marco legal y estatutario de la entidad (PDF).",
    url: "", // pendiente: URL real
  },
  {
    slug: "resolucion-0019-2018",
    title: "Resolución 000019 de 2018 (DIAN)",
    description: "Adopción del SIE RTE y lineamientos para ESAL (PDF).",
    url: "",
  },
  {
    slug: "informe-gestion-2024",
    title: "Informe de Gestión 2024",
    description: "Resultados, reinversión y transparencia de la gestión (PDF).",
    url: "",
  },
  {
    slug: "declaracion-renta-2023",
    title: "Declaración de Renta 2023 (Formulario 110)",
    description: "Información tributaria año gravable 2023 (PDF).",
    url: "",
  },
  {
    slug: "acta-asamblea-3-2025",
    title: "Acta No. 3 Asamblea General (23 mayo 2025)",
    description: "Autorización calificación ESAL y decisiones (PDF).",
    url: "",
  },
  {
    slug: "certificacion-requisitos-364-5",
    title: "Certificación cumplimiento requisitos (Art. 364-5 ET)",
    description: "Cumplimiento de requisitos para RTE (PDF).",
    url: "",
  },
  {
    slug: "certificacion-antecedentes-miembros",
    title: "Certificación antecedentes y caducidad (Art. 364-3 ET)",
    description: "Acreditación de no sanciones y no caducidades (PDF).",
    url: "",
  },
  {
    slug: "acta-constitucion-2024",
    title: "Acta de Constitución (15 agosto 2024)",
    description: "Constitución y aprobación de estatutos (PDF).",
    url: "",
  },
  {
    slug: "certificado-existencia-ccb-2025",
    title: "Certificado de Existencia y Representación Legal (CCB)",
    description: "Expedido 19 de junio de 2025 (PDF).",
    url: "",
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
          <a
            key={d.slug}
            href={d.url || `transparencia/${d.slug}`}
            className="rounded-xl border border-black/5 bg-white p-6 hover:shadow-md transition"
          >
            <div className="text-lg font-medium text-gray-900">{d.title}</div>
            <p className="mt-1 text-sm text-gray-700">{d.description}</p>
            <div className="mt-2 text-sm text-primary">Ver documento →</div>
          </a>
        ))}
      </div>
    </div>
  );
}
