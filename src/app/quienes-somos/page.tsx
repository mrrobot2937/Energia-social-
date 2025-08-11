export const metadata = { title: "Quiénes Somos | Fundación Energía Social" };

export default function QuienesSomosPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-semibold">Quiénes Somos</h1>
      <section className="mt-6 grid gap-6 md:grid-cols-2 items-start">
        <div>
          <h2 className="text-xl font-semibold">Nuestra Historia</h2>
          <p className="mt-2 text-gray-500 max-w-prose">
            Fundación Energía Social nació con una convicción profunda: que la energía no solo transforma territorios, sino también vidas. Promovemos un desarrollo social más justo, inclusivo y participativo.
          </p>
          <p className="mt-2 text-gray-500 max-w-prose">
            Trabajamos para fortalecer el tejido social, impulsar el respeto por los derechos humanos y acompañar a las comunidades hacia el progreso social y económico, de la mano de una transición energética con rostro humano.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-earth bg-green-400 p-6">
          <h3 className="text-lg font-semibold text-gray-900 ">Compromiso</h3>
          <ul className="mt-3 grid gap-2 text-sm text-gray-800 list-disc pl-5">
            <li>Vida, educación y participación</li>
            <li>Desarrollo cultural de los pueblos</li>
            <li>Diversidad cultural y ancestral</li>
            <li>Preservación de la naturaleza</li>
            <li>Conocimiento de los territorios</li>
            <li>Trabajo social, solidario, ético y productivo</li>
          </ul>
        </div>
      </section>
      <section className="mt-10 grid gap-6 md:grid-cols-2 text-gray-900  ">
        <div className="rounded-xl border border-black/5 bg-yellow-500 p-6 ">
          <h3 className="text-lg text-gray-900 font-semibold">Misión</h3>
          <p className="mt-2 text-gray-700 max-w-prose">
            Promover el desarrollo integral y sostenible de comunidades en Colombia, fortaleciendo capacidades, liderazgos y alianzas que impulsen la inclusión social, la equidad, la protección ambiental y el acceso justo a los beneficios de la transición energética.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-red-400 p-6">
          <h3 className="text-lg font-semibold text-gray-900 ">Visión</h3>
          <p className="mt-2 text-gray-700 max-w-prose">
            Ser referente en América Latina por nuestra capacidad de transformar realidades locales, tejiendo vínculos entre comunidades, sector privado y sociedad civil para construir territorios más justos, resilientes y sostenibles.
          </p>
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Nuestro Equipo</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            { name: "Nelsy Cabrera Valencia", role: "Gerente General" },
            { name: "Alexander Bances Gómez", role: "Director de Proyectos y Gestión financiera" },
            { name: "Guillermo Valderrama Ochoa", role: "Coordinador Derechos Humanos y cultura de Paz · Director de Recursos Humanos" },
          ].map((p) => (
            <div key={p.name} className="rounded-xl border border-black/5 p-4 bg-white">
              <div className="h-32 rounded bg-muted" />
              <div className="mt-3 font-medium text-gray-900 ">{p.name}</div>
              <div className="text-sm text-gray-600">{p.role}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
