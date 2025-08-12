import Testimonials from "@/components/Testimonials";
import MediaGallery from "@/components/MediaGallery";
import { sampleProjects } from "@/data/sampleProjects";

export const metadata = { title: "Nuestro Impacto | Fundación Energía Social" };

export default function ImpactoPage() {
  return (
    <div>
      <section className="bg-muted">
        <div className="container py-12">
          <h1 className="text-3xl font-semibold text-gray-900">Nuestro Impacto</h1>
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
            { title: "Equidad de género con mujeres Wayuú", location: "La Guajira", tag: "Desarrollo Social", color: "bg-orange-600" },
            { title: "Gestión del riesgo comunitario", location: "Caquetá", tag: "Resiliencia", color: "bg-green-600" },
            { title: "Café con identidad: Togoima", location: "Cauca, Valle, Nariño", tag: "Economía Social", color: "bg-red-600" },
            { title: "Energía renovable comunitaria", location: "Colombia", tag: "Transición Energética", color: "bg-primary" },
          ].map((p) => (
            <div key={p.title} className="rounded-xl border border-black/5 bg-white p-0 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
              <div className={`h-2 w-full ${p.color}`} />
              <div className="p-6">
                <div className="h-32 rounded bg-muted" />
                <div className="mt-3 font-medium text-gray-900">{p.title}</div>
                <div className="text-sm text-gray-700">{p.location} · {p.tag}</div>
                <button className="mt-3 text-sm text-primary">Ver detalles →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-2xl font-semibold">Galería</h2>
        <p className="text-sm text-gray-700 mt-1">Imágenes y videos organizados por proyectos (datos de ejemplo).</p>
        <div className="mt-6">
          <MediaGallery projects={sampleProjects} imageBaseSize={220} />
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
