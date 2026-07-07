import useInView from '../hooks/useInView';

const services = [
  { title: 'Verified Staff Placement', desc: 'Thoroughly vetted domestic staff matched to your household requirements.', color: '#FF1654' },
  { title: 'Background Screening', desc: 'Comprehensive background checks and identity verification for every candidate.', color: '#247BA0' },
  { title: 'Trial & Replacement Guarantee', desc: 'Not satisfied? We offer a trial period and free replacement within the guarantee window.', color: '#70C1B3' },
  { title: 'Live-in & Live-out Options', desc: 'Flexible arrangements to suit your family\'s lifestyle and home setup.', color: '#FFD400' },
  { title: 'Short-Term & Full-Time Hiring', desc: 'Whether you need help for a week or year-round, we have the right solution.', color: '#D60046' },
  { title: 'Trained & Experienced Candidates', desc: 'All staff come with relevant training and hands-on experience in their role.', color: '#247BA0' },
];

export default function MAFHHOurServices() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="services" className="py-20 md:py-28" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-14">
          <div className="pill-badge justify-center mx-auto w-fit">
            <span className="pill-dot" />
            OUR SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: 'var(--dark-text)' }}>
            Comprehensive <span style={{ color: 'var(--color-primary)' }}>Staffing Solutions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 border transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg`}
              style={{
                borderColor: 'rgba(0,0,0,.06)',
                background: '#fff',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: s.color }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h3 className="text-lg font-extrabold mb-2" style={{ color: s.color }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--subtle-text)' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}