import useInView from '../hooks/useInView';

function AnimatedCounter({ end, suffix, label }) {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const val = inView ? end : 0;

  return (
    <div ref={ref} className="text-center px-4">
      <div className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <span style={inView ? { animation: 'countUp .6s ease-out' } : {}}>{val.toLocaleString()}</span>
        {suffix}
      </div>
      <div className="text-sm font-semibold opacity-85">{label}</div>
    </div>
  );
}

const stats = [
  { end: 1000, suffix: '+', label: 'Placements' },
  { end: 6, suffix: '', label: 'Staff Categories' },
  { end: 100, suffix: '%', label: 'Verified & Screened' },
  { end: 1, suffix: '', label: 'Islamabad-Wide' },
];

export default function MAFHHStats() {
  return (
    <section className="w-full py-12" style={{ background: 'var(--color-primary)' }}>
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center">
            <AnimatedCounter end={s.end} suffix={s.suffix} label={s.label} />
            <div className="w-10 h-0.5 rounded-full mt-2" style={{ background: 'var(--color-secondary)' }} />
          </div>
        ))}
      </div>
    </section>
  );
}