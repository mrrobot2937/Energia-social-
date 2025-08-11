export const metadata = { title: "Transición Energética y Equidad Ambiental | Fundación Energía Social" };

export default function TransicionEnergeticaPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-semibold">Transición Energética y Equidad Ambiental</h1>
      <p className="mt-2 text-gray-700 max-w-prose">
        Impulsamos el acceso justo a energías limpias para proteger el planeta y reducir la pobreza energética: proyectos renovables, mitigación del cambio climático, transferencia de conocimiento e innovación, y empoderamiento local en gestión de recursos energéticos.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {[
          "Soluciones de energía renovable en comunidades vulnerables",
          "Mitigación del cambio climático y reducción de huella",
          "Transferencia de conocimiento e innovación tecnológica",
          "Empoderamiento para la gestión local de recursos",
        ].map((i) => (
          <div key={i} className="rounded-xl border border-black/5 bg-white p-6">
            <div className="font-medium">{i}</div>
            <p className="mt-1 text-sm text-gray-700">Implementación con altos estándares sociales y ambientales.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
