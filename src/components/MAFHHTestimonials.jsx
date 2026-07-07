import useInView from '../hooks/useInView';

const testimonials = [
  {
    name: 'Fatima A.',
    area: 'F-11, Islamabad',
    role: 'Hired a Nanny',
    quote: 'MAFHH found us a wonderful nanny who is wonderful with our children. The screening process gave us complete peace of mind.',
  },
  {
    name: 'Ahmed R.',
    area: 'E-7, Islamabad',
    role: 'Hired a Cook',
    quote: 'Our cook from MAFHH is fantastic — she prepares delicious local and continental dishes. Highly recommend their service.',
  },
  {
    name: 'Saima K.',
    area: 'G-10, Islamabad',
    role: 'Hired a Driver',
    quote: 'Professional, punctual, and trustworthy. Our driver has been with us for 6 months now. MAFHH made the process effortless.',
  },
  {
    name: 'Nadia H.',
    area: 'F-8, Islamabad',
    role: 'Hired Elder Care',
    quote: 'The caregiver they provided for my mother is compassionate and trained. I am so grateful to MAFHH Helpmates.',
  },
];

export default function MAFHHTestimonials() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="testimonials" className="py-20 md:py-28" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-14">
          <div className="pill-badge justify-center mx-auto w-fit">
            <span className="pill-dot" />
            HAPPY FAMILIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: 'var(--dark-text)' }}>
            What Our <span style={{ color: 'var(--color-primary)' }}>Clients Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg`}
              style={{
                background: 'var(--color-background)',
                border: '1px solid rgba(255,22,84,.1)',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: `${i * 120}ms`,
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3" style={{ color: 'var(--color-secondary)' }}>
                {[...Array(5)].map((_, j) => (
                  <svg key={j} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-4 italic" style={{ color: 'var(--subtle-text)' }}>"{t.quote}"</p>
              <div>
                <div className="font-extrabold text-sm" style={{ color: 'var(--color-primary)' }}>{t.name}</div>
                <div className="text-xs font-semibold" style={{ color: 'var(--subtle-text)' }}>{t.area} · {t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}