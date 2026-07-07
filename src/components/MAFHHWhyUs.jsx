import useInView from '../hooks/useInView';

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    title: 'Verified & Screened',
    desc: 'Every candidate undergoes thorough background checks and identity verification before placement.',
    color: '#70C1B3',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
    ),
    title: 'Trained Staff',
    desc: 'Our domestic staff are trained in their respective roles, ensuring professional and reliable service.',
    color: '#FF1654',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
    ),
    title: 'Replacement Guarantee',
    desc: 'If a staff member does not meet your expectations, we provide a replacement at no extra cost.',
    color: '#247BA0',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ),
    title: 'Quick Placement',
    desc: 'We understand urgency. Most placements are completed within days, not weeks.',
    color: '#FFD400',
  },
];

export default function MAFHHWhyUs() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="why-us" className="py-20 md:py-28" style={{ background: 'var(--color-background)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-14">
          <div className="pill-badge justify-center mx-auto w-fit">
            <span className="pill-dot" />
            WHY MAFHH
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: 'var(--dark-text)' }}>
            Why Families Choose <span style={{ color: 'var(--color-primary)' }}>Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 text-center transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg`}
              style={{
                background: '#fff',
                border: '1px solid rgba(0,0,0,.06)',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: f.color, color: '#fff' }}>
                {f.icon}
              </div>
              <h3 className="text-lg font-extrabold mb-2" style={{ color: f.color }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--subtle-text)' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}