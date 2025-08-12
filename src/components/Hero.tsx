"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { realMediaUrls } from "@/data/realMediaUrls";

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
            className="text-3xl md:text-5xl font-semibold leading-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          >
            Energía Social: Transformando comunidades, construyendo futuro
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-foreground max-w-prose"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            Nuestra misión: «Transformar con energía humana». Promovemos la vida, la dignidad y el protagonismo de las comunidades a través de la educación, la participación, el fortalecimiento cultural y la defensa activa de la naturaleza.
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
          <div className="aspect-[4/3] w-full rounded-xl bg-white shadow-sm ring-1 ring-black/5 overflow-hidden">
            <Image
              src={realMediaUrls[0]}
              alt="Energía Social en territorio"
              fill
              className="object-cover"
              sizes="(min-width:1024px) 50vw, 100vw"
              priority
            />
          </div>
          <p className="mt-2 text-xs text-foreground/70">Imagen de referencia de nuestros procesos en territorio.</p>
        </motion.div>
      </div>
    </section>
  );
}
