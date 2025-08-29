export const metadata = { title: "Economía Social e Inclusiva | Fundación Energía Social" };

export default function EconomiaSocialPage() {
  const servicios = [
    {
      titulo: "Fortalecimiento de emprendimientos comunitarios",
      descripcion: "Acompañamos iniciativas productivas locales con asistencia técnica, capital semilla y acceso a mercados. Priorizamos cadenas de valor que generan empleo digno: café especial, cacao fino, apicultura, artesanías, turismo comunitario y productos del bosque.",
      impacto: "1,200+ emprendimientos fortalecidos",
      casos: ["Togoima Café Ancestral", "Apícola Oromiel", "Artesanas del Pacífico"]
    },
    {
      titulo: "Economía circular y negocios verdes",
      descripcion: "Promovemos modelos de negocio que transforman residuos en recursos, reducen impactos ambientales y generan valor compartido. Implementamos sistemas de reciclaje, compostaje, bioeconomía y producción limpia.",
      impacto: "200+ negocios verdes en operación",
      casos: ["Recicladores de Bogotá", "Bioabonos del Cauca", "Ecoturismo Chocó"]
    },
    {
      titulo: "Formación técnica y empleabilidad",
      descripcion: "Desarrollamos programas de capacitación en oficios demandados localmente, habilidades digitales y competencias empresariales. Conectamos jóvenes y mujeres con oportunidades laborales y apoyo para el autoempleo.",
      impacto: "5,000+ personas formadas y empleadas",
      casos: ["Jóvenes Constructores de Paz", "Mujeres TIC", "Escuela de Oficios Verdes"]
    },
    {
      titulo: "Comercio justo y mercados inclusivos",
      descripcion: "Facilitamos el acceso directo a mercados locales, nacionales e internacionales con precios justos. Desarrollamos sellos de origen, certificaciones participativas y plataformas de comercialización que valoran la identidad territorial.",
      impacto: "USD 8M+ en ventas con precio justo",
      casos: ["Red de Mercados Campesinos", "Tienda Virtual Solidaria", "Exportaciones Comunitarias"]
    },
    {
      titulo: "Finanzas solidarias y fondos rotatorios",
      descripcion: "Creamos mecanismos financieros adaptados a las economías locales: fondos rotatorios, grupos de ahorro, microcrédito solidario y seguros comunitarios. Fortalecemos la cultura financiera y el ahorro colectivo.",
      impacto: "USD 2M+ en créditos solidarios",
      casos: ["Fondo Mujeres Emprendedoras", "Banca Comunitaria", "Seguros Agrícolas"]
    }
  ];

  return (
    <div className="container py-16">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900">Economía Social e Inclusiva</h1>
        <p className="mt-4 text-xl text-gray-700 leading-relaxed">
          Construimos alternativas económicas que ponen la vida en el centro, generando prosperidad compartida a través del trabajo digno, la cooperación y el respeto por la naturaleza. Nuestro modelo combina viabilidad económica con impacto social y ambiental positivo.
        </p>
        
        <div className="mt-12 grid gap-8">
          {servicios.map((servicio, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{servicio.titulo}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{servicio.descripcion}</p>
              
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-orange-600 font-medium">{servicio.impacto}</span>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <p className="text-sm text-gray-600 mb-2">Casos de éxito:</p>
                <div className="flex flex-wrap gap-2">
                  {servicio.casos.map((caso, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                      {caso}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Nuestro modelo de intervención</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Principios rectores</h3>
              <ul className="grid gap-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">→</span>
                  <span>Economía al servicio de la vida</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">→</span>
                  <span>Distribución equitativa de beneficios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">→</span>
                  <span>Valoración del trabajo de cuidados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">→</span>
                  <span>Respeto por los ciclos naturales</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Resultados esperados</h3>
              <ul className="grid gap-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Ingresos dignos y estables</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Autonomía económica territorial</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Reducción de brechas de género</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Regeneración ecosistémica</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-700 mb-4">
            ¿Tienes una iniciativa productiva que necesita apoyo?
          </p>
          <a href="/contacto" className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition-colors">
            Cuéntanos tu proyecto
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
