export const metadata = { title: "Desarrollo Social y Comunitario | Fundación Energía Social" };

export default function DesarrolloSocialPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-semibold">Desarrollo Social y Comunitario</h1>
      <p className="mt-2 text-gray-400 max-w-prose">
        Transformamos vidas fortaleciendo capacidades y mejorando condiciones básicas: educación informal y salud comunitaria; vivienda digna y servicios; equidad de género, inclusión y justicia social; identidad cultural; resiliencia y autonomía local.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {[
          "Educación informal y salud comunitaria",
          "Vivienda digna y acceso a servicios básicos",
          "Equidad de género, inclusión y justicia social",
          "Preservación de la identidad cultural",
          "Resiliencia y autonomía local",
        ].map((i) => (
          <div key={i} className="rounded-xl border border-black/5 bg-white p-6">
            <div className="font-medium text-gray-900">{i}</div>
            <p className="mt-1 text-sm text-gray-700">Programas y acompañamientos con enfoque territorial y participativo.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
