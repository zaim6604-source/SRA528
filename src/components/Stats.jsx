import { useState, useEffect } from 'react';
import useInView from '../hooks/useInView';

function AnimatedCounter({ end, suffix = '', label, icon }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.max(1, Math.floor(end / 60));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, duration / 60);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <div ref={ref} className="text-center p-6">
      <i className={`fas ${icon} text-3xl text-secondary mb-3`} />
      <div className="text-4xl sm:text-5xl font-extrabold text-white mb-1">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-white/80 text-sm font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-gradient-to-r from-primary to-highlight py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <AnimatedCounter icon="fa-user-check" end={5000} suffix="+" label="Workers Placed" />
          <AnimatedCounter icon="fa-building" end={200} suffix="+" label="Partner Employers" />
          <AnimatedCounter icon="fa-globe-asia" end={9} label="Countries" />
          <AnimatedCounter icon="fa-calendar-check" end={15} suffix="+" label="Years Experience" />
        </div>
      </div>
    </section>
  );
}