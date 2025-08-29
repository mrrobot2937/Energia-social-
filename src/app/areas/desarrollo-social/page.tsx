export const metadata = { title: "Desarrollo Social y Comunitario | Fundación Energía Social" };

export default function DesarrolloSocialPage() {
  const servicios = [
    {
      titulo: "Educación comunitaria y salud preventiva",
      descripcion: "Implementamos programas de formación adaptados a las necesidades locales, promoviendo el autocuidado, la medicina tradicional y el acceso a servicios de salud básica. Capacitamos promotores comunitarios y fortalecemos redes de apoyo.",
      impacto: "15,000+ personas capacitadas en salud preventiva"
    },
    {
      titulo: "Mejoramiento integral de vivienda y hábitat",
      descripcion: "Acompañamos procesos de mejoramiento de vivienda rural y urbana, acceso a agua potable, saneamiento básico y energía. Promovemos tecnologías apropiadas y construcción sostenible con materiales locales.",
      impacto: "3,500+ familias con vivienda mejorada"
    },
    {
      titulo: "Equidad de género y derechos humanos",
      descripcion: "Fortalecemos el liderazgo de mujeres, jóvenes y poblaciones vulnerables. Prevenimos violencias, promovemos la equidad en la toma de decisiones y acompañamos procesos de justicia comunitaria y reconciliación.",
      impacto: "8,000+ mujeres empoderadas como líderes"
    },
    {
      titulo: "Fortalecimiento cultural e identidad territorial",
      descripcion: "Apoyamos la recuperación de saberes ancestrales, lenguas nativas, prácticas culturales y sistemas de gobierno propio. Facilitamos diálogos intergeneracionales y procesos de memoria colectiva.",
      impacto: "50+ procesos de recuperación cultural"
    },
    {
      titulo: "Gestión del riesgo y adaptación al cambio climático",
      descripcion: "Construimos capacidades locales para la prevención y atención de emergencias. Implementamos sistemas de alerta temprana y planes comunitarios de gestión del riesgo con enfoque diferencial.",
      impacto: "120+ comunidades con planes de gestión del riesgo"
    }
  ];

  return (
    <div className="container py-16">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900">Desarrollo Social y Comunitario</h1>
        <p className="mt-4 text-xl text-gray-700 leading-relaxed">
          Fortalecemos el tejido social de las comunidades mediante procesos participativos que mejoran la calidad de vida, respetan la diversidad cultural y promueven la autonomía territorial.
        </p>
        
        <div className="mt-12 grid gap-8">
          {servicios.map((servicio, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{servicio.titulo}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{servicio.descripcion}</p>
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-green-600 font-medium">{servicio.impacto}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-primary/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestro enfoque diferencial</h2>
          <ul className="grid gap-3">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-gray-700">Metodologías participativas que reconocen el saber local</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-gray-700">Acompañamiento permanente con equipos interdisciplinarios</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-gray-700">Respeto por los tiempos y dinámicas comunitarias</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-gray-700">Articulación con autoridades tradicionales y organizaciones de base</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
