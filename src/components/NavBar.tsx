"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/logo_energia_social.png";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Quiénes Somos" },
  { href: "/impacto", label: "Nuestro Impacto" },
  { href: "/areas", label: "Áreas de Acción" },
  { href: "/transparencia", label: "Transparencia" },
  // { href: "/historias", label: "Historias y Noticias" }, // temporalmente oculto
  { href: "/contacto", label: "Contacto" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/5">
      <div className="container flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3">
          <Image src={Logo} alt="Fundación Energía Social" className="h-[72px] w-auto" priority />
          <span className="sr-only">Energía Social</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm hover:text-primary transition-colors ${
                pathname === item.href ? "text-primary" : "text-gray-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/unete"
            className="ml-2 inline-flex items-center rounded-full bg-primary text-white text-sm font-medium px-4 py-2 hover:opacity-90"
          >
            Únete
          </Link>
        </nav>
        <MobileMenu pathname={pathname} />
      </div>
    </header>
  );
}

function MobileMenu({ pathname }: { pathname: string }) {
  return (
    <details className="md:hidden relative">
      <summary className="list-none select-none cursor-pointer inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm">
        Menú
        <span className="ml-1">▾</span>
      </summary>
      <div className="absolute right-0 mt-2 w-52 rounded-xl border border-black/10 bg-white shadow-lg p-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block rounded px-3 py-2 text-sm hover:bg-muted ${
              pathname === item.href ? "text-primary" : "text-gray-700"
            }`}
          >
            {item.label}
          </Link>
        ))}
        <div className="border-t border-black/10 my-1" />
        <Link href="/unete" className="block rounded bg-primary text-white text-sm px-3 py-2 text-center">
          Únete
        </Link>
      </div>
    </details>
  );
}
