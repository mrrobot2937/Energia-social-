export const metadata = { title: "Contacto | Fundación Energía Social" };

export default function ContactoPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-semibold">Contáctanos</h1>
      <div className="mt-6 grid gap-8 md:grid-cols-2 items-start">
        <div className="rounded-xl border border-black/5 bg-white p-6">
          <h2 className="text-lg font-semibold text-gray-900 ">Información de contacto</h2>
          <ul className="mt-3 space-y-1 text-sm text-gray-700">
            <li>Email: gerencia@energiasocial.com.co</li>
            <li>Tel: +57 3107997715 / +57 3155520833</li>
            <li>Dirección: Bogotá, Colombia</li>
          </ul>
        </div>
        <form className="rounded-xl border border-black/5 bg-white p-6 grid gap-3">
          <h2 className="text-lg text-gray-900 font-semibold">Escríbenos</h2>
          <input className="border border-black/10 text-gray-900 rounded px-3 py-2" placeholder="Nombre" required />
          <input className="border border-black/10 text-gray-900  rounded px-3 py-2" type="email" placeholder="Email" required />
          <textarea className="border border-black/10 text-gray-900 rounded px-3 py-2 min-h-32" placeholder="Mensaje" required />
          <button type="submit" className="inline-flex items-center justify-center rounded bg-primary text-white px-4 py-2 text-sm font-medium">Enviar</button>
        </form>
      </div>
    </div>
  );
}
