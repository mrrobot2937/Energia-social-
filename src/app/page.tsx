import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <section className="py-16 bg-gray-50">
        <div className="container grid gap-8 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Por qué existimos</h2>
            <p className="mt-4 text-gray-700 max-w-prose leading-relaxed">
              Creemos en el poder transformador de las comunidades cuando son protagonistas de su propio desarrollo. Durante más de dos décadas, hemos acompañado procesos de cambio social en territorios vulnerables, demostrando que es posible construir alternativas de vida digna respetando la identidad cultural y el equilibrio con la naturaleza.
            </p>
            <p className="mt-4 text-gray-700 max-w-prose leading-relaxed">
              Nuestra experiencia nos ha enseñado que la verdadera transformación surge cuando se combinan el conocimiento ancestral con innovación apropiada, la organización comunitaria con gestión eficiente, y la conservación ambiental con desarrollo económico inclusivo.
            </p>
          </div>
          <div className="rounded-2xl bg-white shadow-lg p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Nuestros pilares de acción</h3>
            <ul className="grid gap-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-gray-900">Protagonismo comunitario:</strong>
                  <span className="text-gray-700"> Las comunidades lideran su transformación, nosotros acompañamos y fortalecemos sus capacidades.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-gray-900">Sostenibilidad integral:</strong>
                  <span className="text-gray-700"> Equilibramos lo social, económico y ambiental en cada intervención territorial.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-gray-900">Diálogo de saberes:</strong>
                  <span className="text-gray-700"> Integramos conocimiento ancestral con innovación tecnológica apropiada.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-gray-900">Impacto medible:</strong>
                  <span className="text-gray-700"> Generamos cambios concretos y duraderos que mejoran la calidad de vida.</span>
                </div>
              </li>
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
                className: "bg-green-600 text-white",
              },
              {
                title: "Transición Energética y Equidad Ambiental",
                href: "/areas/transicion-energetica",
                className: "bg-primary text-white",
              },
              {
                title: "Economía Social e Inclusiva",
                href: "/areas/economia-social",
                className: "bg-orange-600 text-white",
              },
            ].map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className={`rounded-xl border border-black/5 p-6 transition-transform duration-200 hover:scale-[1.02] hover:shadow-md ${a.className}`}
              >
                <div className="text-lg font-medium">{a.title}</div>
                <div className="mt-1 text-sm opacity-90">Ver más →</div>
              </Link>
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/principales/oro-miel-apoyo3.jpeg",
              "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/principales/oromiel-apoyo.jpeg",
              "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/principales/oromiel-apoyo2.jpeg",
            ].map((url, i) => (
              <div key={i} className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-black/5">
                <Image src={url} alt="Oromiel - proyectos recientes" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
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
