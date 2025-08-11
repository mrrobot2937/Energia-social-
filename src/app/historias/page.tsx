export const metadata = { title: "Historias y Noticias | Fundación Energía Social" };

export default function HistoriasPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-semibold">Historias y Noticias</h1>
      <p className="mt-2 text-gray-700 max-w-prose">
        Publicaciones sobre proyectos, reflexiones y noticias del sector.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <article key={i} className="rounded-xl border border-black/5 bg-white p-6">
            <div className="h-32 rounded bg-muted" />
            <h3 className="mt-3 font-medium">Artículo #{i + 1}</h3>
            <p className="text-sm text-gray-700">Resumen breve del contenido para mejorar SEO y lectura.</p>
            <button className="mt-2 text-sm text-primary">Leer más →</button>
          </article>
        ))}
      </div>
    </div>
  );
}
