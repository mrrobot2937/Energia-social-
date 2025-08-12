"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function QuienesSomosContent() {
  return (
    <div className="container py-12">
      <motion.h1
        className="text-3xl font-semibold"
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Quiénes Somos
      </motion.h1>

      <section className="mt-6 grid gap-6 md:grid-cols-2 items-start">
        <motion.div
          initial={{ x: -24, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-xl font-semibold">Nuestra Historia</h2>
          <p className="mt-2 text-gray-500 max-w-prose">
            Fundación Energía Social nació con una convicción profunda: que la energía no solo transforma territorios, sino también vidas. Promovemos un desarrollo social más justo, inclusivo y participativo.
          </p>
          <p className="mt-2 text-gray-500 max-w-prose">
            Trabajamos para fortalecer el tejido social, impulsar el respeto por los derechos humanos y acompañar a las comunidades hacia el progreso social y económico, de la mano de una transición energética con rostro humano.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-[120px_1fr] items-start gap-4"
          initial={{ x: 24, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <div className="relative h-[90px] w-full overflow-hidden rounded-md">
            <Image
              src="https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/principales/21-1024x473.jpeg"
              alt="Compromiso en territorio"
              fill
              className="object-cover"
              sizes="200px"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-200">Compromiso</h3>
            <p className="mt-2 text-sm text-gray-400">
              Vida, educación y participación; diversidad cultural; preservación de la naturaleza; conocimiento de los territorios y trabajo social con ética.
            </p>
    
          </div>
        </motion.div>
      </section>

      <section className="mt-10 grid gap-6">
        {["Misión", "Visión"].map((title, idx) => (
          <motion.div
            key={title}
            className="grid grid-cols-[120px_1fr] items-start gap-4"
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
          >
            <div className="relative h-[90px] w-full overflow-hidden rounded-md">
              <Image
                src={
                  title === "Misión"
                    ? "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/principales/20191201_103709-1024x498.jpg"
                    : "https://terrazaedenfiles.s3.us-east-2.amazonaws.com/energiasoial/principales/F6-1024x577.jpeg"
                }
                alt={title}
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-200">{title}</h3>
              <p className="mt-2 max-w-prose text-gray-400">
                {title === "Misión"
                  ? "Promover el desarrollo integral y sostenible de comunidades en Colombia, fortaleciendo capacidades, liderazgos y alianzas que impulsen la inclusión social, la equidad, la protección ambiental y el acceso justo a los beneficios de la transición energética."
                  : "Ser referente en América Latina por nuestra capacidad de transformar realidades locales, tejiendo vínculos entre comunidades, sector privado y sociedad civil para construir territorios más justos, resilientes y sostenibles."}
              </p>
              {/* <button className="mt-2 text-sm text-primary">Explorar →</button> */}
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
