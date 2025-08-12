export const metadata = { title: "Quiénes Somos | Fundación Energía Social" };

import QuienesSomosContent from "@/components/QuienesSomosContent";
import Image from "next/image";
import { realMediaUrls } from "@/data/realMediaUrls";

export default function QuienesSomosPage() {
  return (
    <>
      <div className="container mt-8">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl border border-black/5">
          <Image src={realMediaUrls[5]} alt="Quiénes somos" fill className="object-cover" sizes="100vw" />
        </div>
      </div>
      <QuienesSomosContent />
    </>
  );
}
