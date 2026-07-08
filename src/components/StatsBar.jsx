import { useState, useEffect, useRef } from 'react';

const stats = [
  { icon: 'fa-users', end: 3000, suffix: '+', label: 'Workers Placed' },
  { icon: 'fa-globe-asia', end: 10, suffix: '+', label: 'Countries' },
  { icon: 'fa-certificate', end: 100, suffix: '%', label: 'Govt. Licensed' },
  { icon: 'fa-star', end: 15, suffix: '+', label: 'Trusted in Lahore' },
];

function AnimatedCounter({ end, suffix, icon, label, inView, delay }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = Math.max(1, Math.floor(end / 60));
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      setCount(current);
    }, 20);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <div className="text-center" style={{ animationDelay: `${delay}ms` }}>
      <i className={`fas ${icon} text-3xl md:text-4xl text-cta mb-3`} />
      <div className="text-3xl md:text-4xl font-extrabold text-white">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm md:text-base text-white/80 font-medium mt-1">{label}</div>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.unobserve(el); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-primary py-14 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <AnimatedCounter key={s.label} {...s} inView={inView} delay={i * 150} />
        ))}
      </div>
    </div>
  );
}