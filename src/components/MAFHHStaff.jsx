import useInView from '../hooks/useInView';

const staffCategories = [
  {
    title: 'Maids',
    desc: 'Housekeeping & Cleaning',
    color: '#FF1654',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M3 21h18M6 21V7a2 2 0 012-2h8a2 2 0 012 2v14M9 7V3h6v4M9 11h6M9 15h6"/></svg>
    ),
  },
  {
    title: 'Nannies / Helpers',
    desc: 'Child Care',
    color: '#247BA0',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M12 2a3 3 0 100 6 3 3 0 000-6zM6 22v-4l-2-2 3-6 3 2 1 4 1-2 3 2 1-4 3 6-2 2v4"/></svg>
    ),
  },
  {
    title: 'Drivers',
    desc: 'Safe & Reliable Transport',
    color: '#FFD400',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M5 17h14M5 17a2 2 0 01-2-2V9a2 2 0 012-2h14a2 2 0 012 2v6a2 2 0 01-2 2M5 17v3M19 17v3M7 12h2M15 12h2"/></svg>
    ),
  },
  {
    title: 'Cooks',
    desc: 'Local & Continental Cuisine',
    color: '#70C1B3',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M12 2v4M8 6h8M6 10h12M4 14h16M3 18h18M12 14v4"/></svg>
    ),
  },
  {
    title: 'Patient Care',
    desc: 'Attendants & Support',
    color: '#D60046',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M12 8a3 3 0 100-6 3 3 0 000 6zM6 22v-4l-2-2 3-6 3 2 1 4 1-2 3 2 1-4 3 6-2 2v4"/></svg>
    ),
  },
  {
    title: 'Elder Care',
    desc: 'Compassionate Caregivers',
    color: '#247BA0',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M12 2a3 3 0 100 6 3 3 0 000-6zM4 22v-4l-2-2 3-6 3 2 1 4 1-2 3 2 1-4 3 6-2 2v4"/><path d="M18 14v4"/></svg>
    ),
  },
  {
    title: 'Domestic Couples',
    desc: 'Husband & Wife Teams',
    color: '#FF1654',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M12 2a3 3 0 100 6 3 3 0 000-6zM6 22v-4l-2-2 3-6 3 2 1 4 1-2 3 2 1-4 3 6-2 2v4"/></svg>
    ),
  },
  {
    title: 'All-Round Help',
    desc: 'Multi-Task Household Staff',
    color: '#70C1B3',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M3 21h18M6 21V7a2 2 0 012-2h8a2 2 0 012 2v14M9 7V3h6v4"/></svg>
    ),
  },
];

export default function MAFHHStaff() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="staff" className="py-20 md:py-28" style={{ background: 'var(--color-background)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-14">
          <div className="pill-badge justify-center mx-auto w-fit">
            <span className="pill-dot" />
            OUR STAFF
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: 'var(--dark-text)' }}>
            Professional Staff <span style={{ color: 'var(--color-primary)' }}>Categories</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {staffCategories.map((cat, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 text-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl`}
              style={{ background: cat.color, transitionDelay: `${i * 80}ms`, opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
            >
              <div className="mb-4">{cat.icon}</div>
              <h3 className="text-lg font-extrabold mb-1">{cat.title}</h3>
              <p className="text-sm opacity-90 font-medium">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}