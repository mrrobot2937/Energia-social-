export const metadata = { title: "Transición Energética y Equidad Ambiental | Fundación Energía Social" };

export default function TransicionEnergeticaPage() {
  const servicios = [
    {
      titulo: "Energización rural sostenible",
      descripcion: "Diseñamos e implementamos soluciones de energía renovable adaptadas a las necesidades locales: sistemas solares fotovoltaicos, micro hidroeléctricas, biodigestores y cocinas eficientes. Priorizamos tecnologías apropiadas que las comunidades puedan mantener.",
      impacto: "25,000+ personas con acceso a energía limpia",
      icono: "☀️"
    },
    {
      titulo: "Justicia climática y transición justa",
      descripcion: "Acompañamos a comunidades afectadas por proyectos extractivos en su transición hacia alternativas sostenibles. Fortalecemos la gobernanza territorial y promovemos diálogos multiactor para una transición energética equitativa.",
      impacto: "40+ procesos de transición justa acompañados",
      icono: "⚖️"
    },
    {
      titulo: "Formación técnica y transferencia tecnológica",
      descripcion: "Capacitamos técnicos locales en instalación, operación y mantenimiento de sistemas renovables. Creamos centros demostrativos y facilitamos el intercambio de experiencias entre comunidades para escalar soluciones exitosas.",
      impacto: "500+ técnicos comunitarios formados",
      icono: "🎓"
    },
    {
      titulo: "Modelos comunitarios de gestión energética",
      descripcion: "Desarrollamos esquemas asociativos y empresas comunitarias para la gestión sostenible de sistemas energéticos. Fortalecemos capacidades administrativas y técnicas para garantizar la sostenibilidad a largo plazo.",
      impacto: "80+ organizaciones energéticas comunitarias",
      icono: "🤝"
    },
    {
      titulo: "Conservación y restauración ecosistémica",
      descripcion: "Integramos la protección de bosques, fuentes hídricas y biodiversidad en todos los proyectos energéticos. Implementamos pagos por servicios ambientales y alternativas productivas que reducen la presión sobre los ecosistemas.",
      impacto: "15,000+ hectáreas en conservación",
      icono: "🌳"
    }
  ];

  return (
    <div className="container py-16">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900">Transición Energética y Equidad Ambiental</h1>
        <p className="mt-4 text-xl text-gray-700 leading-relaxed">
          Democratizamos el acceso a energías limpias y promovemos la justicia climática, garantizando que la transición energética beneficie prioritariamente a las comunidades más vulnerables y respete los derechos territoriales.
        </p>
        
        <div className="mt-12 grid gap-6">
          {servicios.map((servicio, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex">
                <div className="flex-shrink-0 w-20 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-3xl">
                  {servicio.icono}
                </div>
                <div className="flex-grow p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{servicio.titulo}</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">{servicio.descripcion}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-primary font-medium">{servicio.impacto}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-green-50 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Principios de nuestra intervención</h2>
            <ul className="grid gap-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Soberanía energética comunitaria</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Tecnologías apropiadas y apropiables</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Respeto por los territorios sagrados</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Economía circular y cero residuos</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-blue-50 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Alianzas estratégicas</h2>
            <p className="text-gray-700 mb-4">
              Trabajamos con universidades, centros de investigación, empresas sociales y cooperación internacional para escalar soluciones innovadoras que combinen sostenibilidad ambiental con justicia social.
            </p>
            <a href="/contacto" className="inline-flex items-center text-primary font-medium hover:underline">
              Conoce cómo ser aliado
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
