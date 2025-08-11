export const metadata = { title: "Únete | Fundación Energía Social" };

export default function UnetePage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-semibold">Únete</h1>
      <p className="mt-2 text-gray-400 max-w-prose">
        Dona, crea una alianza o comparte tu conocimiento. Juntos hacemos la diferencia.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[
          { title: "Donaciones", desc: "Contribuye a jornadas de formación, dotaciones y proyectos con impacto." },
          { title: "Alianzas Corporativas", desc: "Conecta tu empresa con proyectos sociales y ambientales de alto impacto." },
          { title: "Voluntariado / Colabora", desc: "Profesionales y aliados que aportan conocimiento y tiempo." },
        ].map((c) => (
          <div key={c.title} className="rounded-xl border text-gray-900 border-black/5 bg-white p-6">
            <div className="text-lg font-medium">{c.title}</div>
            <p className="mt-1 text-sm text-gray-700">{c.desc}</p>
            <button className="mt-3 text-sm text-primary">Quiero participar →</button>
          </div>
        ))}
      </div>
    </div>
  );
}
