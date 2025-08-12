import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documento | Transparencia | Fundación Energía Social",
};

const titles: Record<string, string> = {
  estatutos: "Estatutos Fundación Energía Social",
  "resolucion-0019-2018": "Resolución 000019 de 2018 (DIAN)",
  "informe-gestion-2024": "Informe de Gestión 2024",
  "declaracion-renta-2023": "Declaración de Renta 2023",
  "acta-asamblea-3-2025": "Acta No. 3 Asamblea General (23 mayo 2025)",
  "certificacion-requisitos-364-5": "Certificación requisitos (Art. 364-5 ET)",
  "certificacion-antecedentes-miembros": "Certificación antecedentes y caducidad (Art. 364-3 ET)",
  "acta-constitucion-2024": "Acta de Constitución (15 agosto 2024)",
  "certificado-existencia-ccb-2025": "Certificado de Existencia (CCB)",
};

// Placeholder de URLs (reemplazar por URLs reales cuando las tengas)
const urls: Record<string, string> = {
  estatutos: "",
  "resolucion-0019-2018": "",
  "informe-gestion-2024": "",
  "declaracion-renta-2023": "",
  "acta-asamblea-3-2025": "",
  "certificacion-requisitos-364-5": "",
  "certificacion-antecedentes-miembros": "",
  "acta-constitucion-2024": "",
  "certificado-existencia-ccb-2025": "",
};

export default async function DocumentoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = titles[slug] || "Documento";
  const url = urls[slug] || "";

  return (
    <div className="container py-12">
      <h1 className="text-2xl font-semibold text-gray-400">{title}</h1>
      <p className="mt-1 text-sm text-gray-600">Formato PDF</p>
      {url ? (
        <div className="mt-4 rounded-xl border border-black/5 overflow-hidden">
          <iframe src={url} className="w-full" style={{ height: 800 }} title={title} />
        </div>
      ) : (
        <div className="mt-4 rounded-xl border border-dashed border-black/10 bg-muted p-6 text-sm text-gray-700">
          Aún no se ha cargado la URL del documento. Comparteme el enlace para actualizarlo.
        </div>
      )}
    </div>
  );
}
