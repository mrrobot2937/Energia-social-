import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <section className="py-12">
        <div className="container grid gap-6 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Nuestra inspiración</h2>
            <p className="mt-3 text-gray-300 max-w-prose">
              Nos inspira la riqueza ancestral, la sabiduría de los pueblos y el poder transformador de la acción colectiva. Caminamos junto a comunidades campesinas, indígenas, negras y urbanas en la construcción de territorios sostenibles, donde el desarrollo sea sinónimo de equidad, inclusión y respeto por la vida.
            </p>
          </div>
          <div className="rounded-xl bg-earth p-6 border border-black/5">
            <h3 className="text-lg font-semibold text-gray-900">Compromisos</h3>
            <ul className="mt-3 grid gap-2 text-sm text-gray-800 list-disc pl-5">
              <li>Vida, educación y participación de las comunidades</li>
              <li>Diversidad cultural y ancestral</li>
              <li>Preservación de la naturaleza y conocimiento de los territorios</li>
              <li>Trabajo social, solidario, concertado, ético, digno y productivo</li>
            </ul>
          </div>
        </div>
      </section>
      <ImpactStats />
      <section className="py-12 bg-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Áreas de Acción</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Desarrollo Social y Comunitario",
                href: "/areas/desarrollo-social",
                color: "bg-green/10",
              },
              {
                title: "Transición Energética y Equidad Ambiental",
                href: "/areas/transicion-energetica",
                color: "bg-primary/10",
              },
              {
                title: "Economía Social e Inclusiva",
                href: "/areas/economia-social",
                color: "bg-orange/10",
              },
            ].map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className={`rounded-xl border border-black/5 p-6 hover:shadow-sm transition ${a.color}`}
              >
                <div className="text-lg font-medium text-gray-900">{a.title}</div>
                <div className="mt-1 text-sm text-primary">Ver más →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
      <section className="py-16 bg-primary text-white">
        <div className="container grid gap-4 md:grid-cols-[1fr_auto] items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Juntos podemos hacer la diferencia</h2>
            <p className="mt-2 text-white/90 max-w-prose">
              Descubre cómo puedes ser parte: dona, crea una alianza o comparte tu conocimiento.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/unete" className="inline-flex items-center rounded-full bg-white text-primary px-5 py-2.5 text-sm font-medium">Dona o Alíate</Link>
            <Link href="/contacto" className="inline-flex items-center rounded-full border border-white text-white px-5 py-2.5 text-sm font-medium">Contáctanos</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
