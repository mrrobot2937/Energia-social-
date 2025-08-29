import Image from "next/image";

type Testimonial = {
  quote: string;
  author: string;
  role?: string;
  organization?: string;
  image?: string;
  location?: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "Energía Social no solo trajo paneles solares a nuestra comunidad, nos enseñó que podíamos ser dueños de nuestro desarrollo. Hoy, 15 familias vivimos con dignidad gracias a la energía limpia y los proyectos productivos que surgieron.",
    author: "María Elena Tascón",
    role: "Lideresa comunitaria",
    organization: "Vereda La Esperanza",
    location: "Cauca, Colombia",
    image: "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/principales/45-1024x768.jpeg"
  },
  {
    quote: "Pasamos de vender café convencional a $3.000 el kilo, a exportar café especial a $15.000. Pero lo más valioso fue recuperar nuestra identidad Misak y demostrar que la tradición y la innovación pueden caminar juntas.",
    author: "Víctor y Edwin Lis",
    role: "Productores de café ancestral",
    organization: "Togoima Café",
    location: "Guambía, Cauca",
    image: "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/principales/21-1024x473.jpeg"
  },
  {
    quote: "Como mujer afro del Pacífico, nunca imaginé liderar una empresa. Hoy, Apícola Oromiel genera empleo para 25 familias y exportamos miel orgánica. Energía Social creyó en nosotras cuando nadie más lo hacía.",
    author: "Deysi Cabezas",
    role: "Gerente y fundadora",
    organization: "Apícola Oromiel",
    location: "Chocó, Colombia",
    image: "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/principales/oro-miel-apoyo3.jpeg"
  },
  {
    quote: "En plena pandemia, su metodología 'enseñar a enseñar' nos permitió formar 200 gestores comunitarios del riesgo. Cuando llegó la emergencia invernal, estábamos preparados. Salvamos vidas y protegimos nuestros territorios.",
    author: "Gustavo Ortega",
    role: "Coordinador de emergencias",
    organization: "Gobernación del Caquetá",
    location: "Florencia, Caquetá",
    image: "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/principales/F6-1024x577.jpeg"
  },
  {
    quote: "Esta alianza demuestra que la transición energética justa no es una utopía. Combinan rigor técnico con sensibilidad social, logrando que las comunidades más vulnerables lideren su propia transformación energética.",
    author: "Roberto Roca Perea",
    role: "CEO y fundador",
    organization: "BEP Advisors",
    location: "República Dominicana",
    image: "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/principales/20191201_103709-1024x498.jpg"
  },
  {
    quote: "Después del conflicto armado, creíamos que no había futuro aquí. El programa de jóvenes constructores de paz nos dio herramientas, pero sobre todo esperanza. Hoy somos 150 jóvenes liderando el cambio en nuestros municipios.",
    author: "Andrés Muñoz",
    role: "Coordinador juvenil",
    organization: "Red de Jóvenes del Putumayo",
    location: "Puerto Asís, Putumayo",
    image: "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/principales/oromiel-apoyo2.jpeg"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Voces del territorio
          </h2>
          <p className="mt-3 text-lg text-gray-700 max-w-2xl mx-auto">
            Las comunidades hablan sobre el impacto real de nuestro trabajo conjunto
          </p>
        </div>
        
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 snap-x snap-mandatory">
            {testimonials.map((t, idx) => (
              <figure
                key={idx}
                className="min-w-[380px] max-w-md snap-center bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {t.image && (
                  <div className="relative h-48 bg-gray-100">
                    <Image
                      src={t.image}
                      alt={`${t.author} - ${t.organization || t.role}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                )}
                
                <div className="p-6">
                  <blockquote className="text-gray-800 leading-relaxed mb-6">
                    <span className="text-4xl text-primary/30 font-serif leading-none">"</span>
                    <span className="text-base">{t.quote}</span>
                    <span className="text-4xl text-primary/30 font-serif leading-none ml-1">"</span>
                  </blockquote>
                  
                  <figcaption className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{t.author}</div>
                    {t.role && (
                      <div className="text-sm text-gray-600">{t.role}</div>
                    )}
                    {t.organization && (
                      <div className="text-sm font-medium text-primary">{t.organization}</div>
                    )}
                    {t.location && (
                      <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {t.location}
                      </div>
                    )}
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">
            Estas son solo algunas de las miles de historias de transformación
          </p>
          <a 
            href="/historias" 
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            Ver más historias de impacto
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
