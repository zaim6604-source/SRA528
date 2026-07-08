import FadeUp from './FadeUp';

const stats = [
  { num: '1,500+', label: 'Workers Placed', icon: 'fa-briefcase' },
  { num: '9', label: 'Countries', icon: 'fa-flag' },
  { num: '10+', label: 'Years Experience', icon: 'fa-calendar' },
  { num: '97%', label: 'Success Rate', icon: 'fa-chart-line' },
];

export default function StatBand() {
  return (
    <section className="bg-primary py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <FadeUp key={s.label} delay={i * 100}>
              <div className="text-center text-white">
                <i className={`fas ${s.icon} text-2xl md:text-3xl mb-2 opacity-70`} />
                <div className="counter-value">{s.num}</div>
                <div className="text-sm text-white/80 mt-1 font-semibold">{s.label}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
