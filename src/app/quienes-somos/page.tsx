export const metadata = { title: "Quiénes Somos | Fundación Energía Social" };

import QuienesSomosContent from "@/components/QuienesSomosContent";
import Image from "next/image";
import { realMediaUrls } from "@/data/realMediaUrls";
import HeroCarousel from "@/components/HeroCarousel";

export default function QuienesSomosPage() {
  return (
    <>
      <div className="container mt-8">
        <HeroCarousel
          images={[
            { url: "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/principales/20191201_103709-1024x498.jpg", alt: "Trabajo en territorio" },
            { url: "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/principales/21-1024x473.jpeg", alt: "Diálogo comunitario" },
            { url: "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/principales/F6-1024x577.jpeg", alt: "Acompañamiento técnico" },
          ]}
        />
      </div>
      <QuienesSomosContent />
      <div className="container mt-10">
        <h2 className="text-xl font-semibold">Nuestro Equipo </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            { name: "Nelsy Cabrera Valencia", url: "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/principales/nelsy.jpeg" },
            { name: "Alexander Bances Gómez", url: "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/principales/alex.jpeg" },
            { name: "Guillermo Valderrama Ochoa", url: "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/principales/guillermo.jpeg" },
          ].map((m) => (
            <figure key={m.name} className="rounded-xl border border-black/5 bg-white overflow-hidden">
              <div className="relative aspect-[4/3] w-full">
                <Image src={m.url} alt={m.name} fill className="object-cover" sizes="(min-width:1024px) 33vw, 50vw" />
              </div>
              <figcaption className="p-3 text-sm text-gray-800">
                <div className="font-medium">{m.name}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </>
  );
}
