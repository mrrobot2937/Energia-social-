'use client';

import dynamic from "next/dynamic";

// Importar el mapa de forma dinámica para evitar problemas con SSR
const ColombiaMap = dynamic(() => import("./ColombiaMap"), {
  ssr: false,
  loading: () => <div className="w-full h-[500px] bg-gray-100 animate-pulse rounded-xl" />
});

export default function ColombiaMapWrapper() {
  return <ColombiaMap />;
}
