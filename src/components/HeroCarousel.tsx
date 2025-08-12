"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  images: { url: string; alt?: string }[];
  intervalMs?: number;
};

export default function HeroCarousel({ images, intervalMs = 4500 }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0.2, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src={images[index].url}
            alt={images[index].alt || "Imagen de proyectos"}
            fill
            className="object-cover"
            sizes="(min-width:1024px) 50vw, 100vw"
            priority
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-x-0 bottom-0 p-2 flex items-center justify-between">
        <div className="flex gap-1">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir a imagen ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 w-6 rounded-full ${i === index ? "bg-white/90" : "bg-white/50"}`}
            />)
          )}
        </div>
        <div className="flex gap-2">
          <button onClick={prev} aria-label="Anterior" className="rounded bg-white/70 px-2 py-1 text-xs">←</button>
          <button onClick={next} aria-label="Siguiente" className="rounded bg-white/70 px-2 py-1 text-xs">→</button>
        </div>
      </div>
    </div>
  );
}


