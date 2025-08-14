import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/5 bg-muted">
      <div className="container py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="text-sm font-semibold text-primary">Fundación Energía Social</h4>
          <p className="mt-2 text-sm text-foreground text-gray-900 max-w-prose">
            Transformamos con energía humana: educación, inclusión, transición energética justa y economía social.
          </p>
        </div>
        <div>
          <h5 className="text-sm font-semibold mb-2 text-primary">Contacto</h5>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>Email: <Link href="mailto:gerencia@energiasocial.com.co" className="text-primary hover:underline">gerencia@energiasocial.com.co</Link></li>
            <li>Tel: +57 3107997715 / +57 3155520833</li>
            <li>Bogotá, Colombia</li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-semibold mb-2">Enlaces</h5>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><Link href="/quienes-somos" className="hover:text-primary">Quiénes Somos</Link></li>
            <li><Link href="/impacto" className="hover:text-primary">Nuestro Impacto</Link></li>
            <li><Link href="/areas" className="hover:text-primary">Áreas de Acción</Link></li>
            <li><Link href="/historias" className="hover:text-primary">Historias y Noticias</Link></li>
            <li><Link href="/contacto" className="hover:text-primary">Contacto</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/5">
        <div className="container py-4 text-xs text-gray-600 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Fundación Energía Social.</span>
          
        </div>
      </div>
    </footer>
  );
}
