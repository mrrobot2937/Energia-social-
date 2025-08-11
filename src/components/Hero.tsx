import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-earth/40 to-muted">
      <div className="container py-16 md:py-24 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Energía Social: Transformando comunidades, construyendo futuro
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-prose">
            Nuestra misión: «Transformar con energía humana». Promovemos la vida, la dignidad y el protagonismo de las comunidades a través de la educación, la participación, el fortalecimiento cultural y la defensa activa de la naturaleza.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/quienes-somos" className="inline-flex items-center rounded-full bg-primary text-white px-5 py-2.5 text-sm font-medium">
              Conócenos
            </Link>
            <Link href="/unete" className="inline-flex items-center rounded-full border border-primary text-primary px-5 py-2.5 text-sm font-medium">
              Únete
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-xl bg-white shadow-sm ring-1 ring-black/5 overflow-hidden">
            <div className="h-full w-full grid grid-cols-3 gap-2 p-2 bg-muted">
              <div className="rounded bg-green/70" />
              <div className="rounded bg-orange/70" />
              <div className="rounded bg-red/70" />
              <div className="col-span-3 rounded bg-primary/20" />
              <div className="col-span-2 rounded bg-primary/10" />
              <div className="rounded bg-earth" />
            </div>
          </div>
          <p className="mt-2 text-xs text-gray-500">Imágenes y video de proyectos podrán ir aquí.</p>
        </div>
      </div>
    </section>
  );
}
