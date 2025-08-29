"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import HeroCarousel from "@/components/HeroCarousel";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-earth/40 to-muted">
      <div className="container py-16 md:py-24 grid gap-8 md:grid-cols-2 items-center">
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold leading-tight text-gray-900"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          >
            Transformamos territorios con energía humana
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-gray-700 max-w-prose leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            Somos una fundación que acompaña a comunidades indígenas, campesinas, negras y urbanas en Colombia y Latinoamérica, construyendo desarrollo sostenible a través de la equidad social, la transición energética justa y el fortalecimiento de economías locales.
          </motion.p>
          <motion.div
            className="mt-6 flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/quienes-somos" className="inline-flex items-center rounded-full bg-primary text-white px-5 py-2.5 text-sm font-medium">
              Conócenos
            </Link>
            <Link href="/unete" className="inline-flex items-center rounded-full border border-primary text-primary px-5 py-2.5 text-sm font-medium">
              Únete
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <HeroCarousel
            images={[
              { 
                url: "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/principales/45-1024x768.jpeg",
                alt: "Comunidad indígena reunida en asamblea - Fortalecimiento del tejido social"
              },
              { 
                url: "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/principales/F6-1024x577.jpeg",
                alt: "Proyecto de energía solar comunitaria - Transición energética justa"
              },
              { 
                url: "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/principales/oro-miel-apoyo3.jpeg",
                alt: "Apicultura sostenible Oromiel - Economía social e inclusiva"
              },
              { 
                url: "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/principales/21-1024x473.jpeg",
                alt: "Trabajo comunitario en territorio - Construcción colectiva"
              },
              {
                url: "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/principales/20191201_103709-1024x498.jpg",
                alt: "Educación y capacitación comunitaria - Transformación social"
              }
            ]}
          />
          <p className="mt-2 text-xs text-foreground/70">Imágenes recientes de procesos y territorios.</p>
        </motion.div>
      </div>
    </section>
  );
}
