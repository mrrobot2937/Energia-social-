"use client";

import CountUp from "@/components/CountUp";
import { motion } from "framer-motion";

type Stat = {
  label: string;
  value: number;
  prefix?: string;
};

const stats: Stat[] = [
  { label: "Comunidades acompañadas", value: 50, prefix: "+" },
  { label: "Proyectos en desarrollo", value: 20, prefix: "+" },
  { label: "Departamentos con presencia", value: 10, prefix: "+" },
];

export default function ImpactStats() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container grid gap-6 sm:grid-cols-3 ">
        {stats.map((s, idx) => (
          <motion.div
            key={s.label}
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="rounded-xl border border-black/5 bg-white p-6 text-center shadow-sm"
          >
            <div className="text-3xl font-semibold text-primary text-gray-900">
              <CountUp target={s.value} prefix={s.prefix} />
            </div>
            <div className="mt-1 text-sm text-foreground text-gray-900">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
