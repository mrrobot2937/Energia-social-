"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  images: { url: string; alt?: string }[];
  intervalMs?: number;
};

export default function HeroCarousel({ images, intervalMs = 5000 }: Props) {
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
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Image
            src={images[index].url}
            alt={images[index].alt || "Imagen de proyectos"}
            fill
            className="object-cover"
            sizes="(min-width:1024px) 60vw, 100vw"
            priority
          />
          {/* Overlay con gradiente para mejorar legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>
      
      {/* Descripción de la imagen */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`alt-${index}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-0 left-0 right-0 p-6 text-white"
        >
          <p className="text-sm md:text-base font-medium drop-shadow-lg">
            {images[index].alt || "Transformando comunidades, construyendo futuro"}
          </p>
        </motion.div>
      </AnimatePresence>
      
      {/* Controles mejorados */}
      <div className="absolute inset-x-0 bottom-4 px-6 flex items-center justify-between">
        <div className="flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir a imagen ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 transition-all duration-300 rounded-full ${
                i === index ? "bg-white w-8" : "bg-white/60 w-2 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button 
            onClick={prev} 
            aria-label="Anterior" 
            className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors p-2 text-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={next} 
            aria-label="Siguiente" 
            className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors p-2 text-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}


