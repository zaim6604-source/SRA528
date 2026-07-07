import useInView from '../hooks/useInView';
import { useState, useEffect, useRef } from 'react';

function AnimatedCounter({ end, suffix = '', label, icon }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView();
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 2000;
    const steps = 30;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, end]);

  const display = end >= 1000 ? `${count}+` : `${count}${suffix}`;

  return (
    <div ref={ref} className="text-center px-4 py-6">
      <div className="text-3xl md:text-4xl font-extrabold font-heading text-white mb-1">
        <i className={`fas ${icon} text-[#FFD700] mr-2 text-2xl`}></i>
        {display}
      </div>
      <div className="text-sm md:text-base text-white/80 font-medium">{label}</div>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-[#E0115F] py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <AnimatedCounter end={5000} label="Workers Deployed" icon="fa-users" />
          <AnimatedCounter end={12} suffix="+" label="Countries Served" icon="fa-globe" />
          <AnimatedCounter end={150} suffix="+" label="Foreign Recruiters Served" icon="fa-handshake" />
          <AnimatedCounter end={100} suffix="%" label="Govt.-Compliant Process" icon="fa-check-circle" />
        </div>
      </div>
    </section>
  );
}