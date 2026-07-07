import { useEffect, useState, useRef } from 'react';
import { FaSmile, FaGlobeAsia, FaCalendarCheck, FaShieldAlt } from 'react-icons/fa';

const STATS = [
  { icon: FaSmile, label: 'Happy Travellers', value: 5000, suffix: '+' },
  { icon: FaGlobeAsia, label: 'Destinations', value: 15, suffix: '+' },
  { icon: FaCalendarCheck, label: 'Years of Service', value: 8, suffix: '+' },
  { icon: FaShieldAlt, label: 'Trusted Clients', value: 2000, suffix: '+' },
];

function Counter({ end, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className="font-display font-extrabold text-3xl md:text-4xl text-white">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-10 md:py-14 px-5" style={{ background: '#F4A100' }}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {STATS.map((s, i) => (
          <div key={i} className="text-center text-white">
            <s.icon size={28} className="mx-auto mb-2 opacity-80" />
            <Counter end={s.value} suffix={s.suffix} />
            <div className="text-sm font-medium mt-1 opacity-85">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}