type Stat = {
  label: string;
  value: string;
};

const stats: Stat[] = [
  { label: "Comunidades acompañadas", value: "+50" },
  { label: "Proyectos en desarrollo", value: "+20" },
  { label: "Departamentos con presencia", value: "+10" },
];

export default function ImpactStats() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container grid gap-6 sm:grid-cols-3 ">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border bg-gray-900 border-black/5 bg-muted p-6 text-center">
            <div className="text-3xl font-semibold text-primary">{s.value}</div>
            <div className="mt-1 text-sm text-gray-700">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
