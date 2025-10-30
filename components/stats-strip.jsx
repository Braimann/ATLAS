export default function StatsStrip({ stats }) {
  if (!stats?.length) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-center shadow-soft transition-transform duration-200 hover:-translate-y-1"
        >
          <p className="text-3xl font-semibold text-atlas-gold">{stat.value}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-gray-400">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
