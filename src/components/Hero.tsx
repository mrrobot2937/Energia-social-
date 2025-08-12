"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
            <motion.div
              className="h-full w-full grid grid-cols-3 gap-2 p-2 bg-muted"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.06 },
                },
              }}
            >
              {["bg-green/70", "bg-orange/70", "bg-red/70", "col-span-3 bg-primary/20", "col-span-2 bg-primary/10", "bg-earth"].map(
                (cls, i) => (
                  <motion.div
                    key={i}
                    className={`rounded ${cls}`}
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.05 }}
                  />
                )
              )}
            </motion.div>
          </div>
          <p className="mt-2 text-xs text-foreground/70">Imágenes y video de proyectos podrán ir aquí.</p>
        </motion.div>
      </div>
    </section>
  );
}
