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
  { href: "/historias", label: "Historias y Noticias" },
  { href: "/contacto", label: "Contacto" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/5">
      <div className="container flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3">
          <Image src={Logo} alt="Fundación Energía Social" className="h-18 w-auto" priority />
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
        <div className="md:hidden">
          {/* Simple mobile menu as a placeholder */}
          <Link
            href="/unete"
            className="inline-flex items-center rounded-full bg-primary text-white text-sm font-medium px-3 py-1.5"
          >
            Únete
          </Link>
        </div>
      </div>
    </header>
  );
}
