import Testimonials from "@/components/Testimonials";

export const metadata = { title: "Nuestro Impacto | Fundación Energía Social" };

export default function ImpactoPage() {
  return (
    <div>
      <section className="bg-muted">
        <div className="container py-12">
          <h1 className="text-3xl font-semibold">Nuestro Impacto</h1>
          <p className="mt-2 text-gray-700 max-w-prose">
            Trabajamos en múltiples territorios del país acompañando procesos sociales, ambientales y productivos con enfoque participativo y humano.
          </p>
          <div className="mt-6 rounded-xl border border-black/5 bg-white p-6">
            <div className="aspect-[16/9] w-full rounded bg-earth grid place-content-center text-sm text-gray-600">
              Mapa interactivo de Colombia (placeholder)
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-2xl font-semibold">Proyectos Destacados</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { title: "Equidad de género con mujeres Wayuú", location: "La Guajira", tag: "Desarrollo Social" },
            { title: "Gestión del riesgo comunitario", location: "Caquetá", tag: "Resiliencia" },
            { title: "Café con identidad: Togoima", location: "Cauca, Valle, Nariño", tag: "Economía Social" },
            { title: "Energía renovable comunitaria", location: "Colombia", tag: "Transición Energética" },
          ].map((p) => (
            <div key={p.title} className="rounded-xl border border-black/5 bg-white p-6">
              <div className="h-32 rounded bg-muted" />
              <div className="mt-3 font-medium">{p.title}</div>
              <div className="text-sm text-gray-600">{p.location} · {p.tag}</div>
              <button className="mt-3 text-sm text-primary">Ver detalles →</button>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
