import useInView from '../hooks/useInView';

const testimonials = [
  {
    name: 'Ahmed Khan',
    origin: 'Mingora, Swat',
    destination: 'Saudi Arabia',
    role: 'Construction Supervisor',
    quote: 'Namir Brothers made the entire process smooth and transparent. From document submission to my flight, they handled everything. I landed in Riyadh within 6 weeks of registration.',
  },
  {
    name: 'Muhammad Usman',
    origin: 'Saidu Sharif, Swat',
    destination: 'UAE',
    role: 'Hotel Staff',
    quote: 'I was nervous about working abroad, but the team at Namir Brothers guided me through every step. The pre-departure orientation was especially helpful. Highly recommended!',
  },
  {
    name: 'Sadia Bibi',
    origin: 'Kabal, Swat',
    destination: 'Germany',
    role: 'Nurse',
    quote: 'As a female applicant, I was concerned about safety. Namir Brothers matched me with a verified hospital in Germany and ensured all my documentation was perfect. Forever grateful.',
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-background/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="pill-badge bg-primary/10 text-primary border border-primary/20">
            <i className="fas fa-star mr-1.5" />
            SUCCESS STORIES
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-ink text-center mb-4">
          What Our Candidates Say
        </h2>
        <p className="text-center text-ink/60 max-w-2xl mx-auto mb-12">
          Real stories from workers we have helped build better futures abroad.
        </p>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-white rounded-xl p-8 shadow-md border border-secondary/10 transition-all duration-500 hover:shadow-xl relative ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Large quote mark */}
              <div className="text-5xl text-primary/15 leading-none mb-2 font-serif">&ldquo;</div>

              <p className="text-ink/70 text-sm leading-relaxed mb-6 italic relative z-10">
                {t.quote}
              </p>

              <div className="flex items-center gap-3 pt-3 border-t border-secondary/10">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-sm font-bold text-ink">{t.name}</div>
                  <div className="text-xs text-ink/50">
                    {t.origin} &middot; {t.role} &rarr; {t.destination}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}