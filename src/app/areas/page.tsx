import Link from "next/link";

export const metadata = { title: "Áreas de Acción | Fundación Energía Social" };

export default function AreasPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-semibold">Áreas de Acción</h1>
      <p className="mt-2 text-gray-400 max-w-prose">
        Organizamos nuestro trabajo en tres enfoques que se conectan entre sí para transformar realidades locales.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[
          { title: "Desarrollo Social y Comunitario", href: "/areas/desarrollo-social", desc: "Capacidades, derechos, cultura y cohesión social." },
          { title: "Transición Energética y Equidad Ambiental", href: "/areas/transicion-energetica", desc: "Soluciones limpias, mitigación y conocimiento." },
          { title: "Economía Social e Inclusiva", href: "/areas/economia-social", desc: "Empleo, emprendimiento y alianzas territoriales." },
        ].map((a) => (
          <Link key={a.href} href={a.href} className="rounded-xl border border-black/5 bg-white p-6 hover:shadow-sm">
            <div className="text-lg font-medium text-gray-900">{a.title}</div>
            <p className="mt-1 text-sm text-gray-700">{a.desc}</p>
            <div className="mt-2 text-sm text-primary">Explorar →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
