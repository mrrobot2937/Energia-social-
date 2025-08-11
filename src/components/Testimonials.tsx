type Testimonial = {
  quote: string;
  author: string;
  role?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Una alianza que conjuga conocimiento técnico con sensibilidad social para una transición energética justa en la región.",
    author: "Roberto Roca Perea",
    role: "CEO BEP Advisors",
  },
  {
    quote:
      "Gracias al acompañamiento fortalecimos nuestra comercialización justa con identidad y origen.",
    author: "Víctor y Edwin Lis",
    role: "Togoima Café Ancestral",
  },
  {
    quote:
      "Su enfoque pedagógico de 'enseñar a enseñar' fortaleció capacidades locales y salvó vidas.",
    author: "Gustavo Ortega",
    role: "Asesor Gestión del Riesgo, Caquetá",
  },
  {
    quote:
      "Un pilar de transformación social, económica y ambiental para nuestras familias y territorio.",
    author: "Deysi Cabezas",
    role: "Apícola Oromiel",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Testimonios</h2>
        <div className="mt-6 overflow-x-auto">
          <div className="flex gap-4 snap-x snap-mandatory">
            {testimonials.map((t, idx) => (
              <figure
                key={idx}
                className="min-w-[320px] max-w-sm snap-center rounded-xl bg-white border border-black/5 p-6"
              >
                <blockquote className="text-gray-800">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm text-gray-600">
                  <span className="font-medium text-foreground text-gray-500">{t.author}</span>
                  {t.role ? ` · ${t.role}` : null}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
