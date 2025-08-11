export const metadata = { title: "Economía Social e Inclusiva | Fundación Energía Social" };

export default function EconomiaSocialPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-semibold">Economía Social e Inclusiva</h1>
      <p className="mt-2 text-gray-700 max-w-prose">
        Fomentamos oportunidades de empleo, emprendimiento y crecimiento económico con enfoque territorial: iniciativas productivas sostenibles, negocios verdes y economía circular, formación para el trabajo, y alianzas público-comunitarias.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {[
          "Apoyo a iniciativas productivas sostenibles",
          "Promoción de negocios verdes y economía circular",
          "Formación para el trabajo y habilidades",
          "Alianzas público-comunitarias para el desarrollo",
        ].map((i) => (
          <div key={i} className="rounded-xl border border-black/5 bg-white p-6">
            <div className="font-medium">{i}</div>
            <p className="mt-1 text-sm text-gray-700">Modelos de negocio con sentido humano e identidad territorial.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
