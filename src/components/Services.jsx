import useInView from '../hooks/useInView';

const services = [
  { icon: 'fa-briefcase', title: 'Overseas Job Placement', desc: 'Connecting qualified candidates with trusted employers across Gulf and European countries.', color: 'from-rose-500 to-rose-700' },
  { icon: 'fa-passport', title: 'Visa Processing', desc: 'End-to-end visa application assistance for work visas to Saudi Arabia, UAE, Qatar, and more.', color: 'from-fuchsia-500 to-fuchsia-700' },
  { icon: 'fa-file-alt', title: 'Document Attestation', desc: 'Professional attestation of educational certificates, experience letters, and personal documents.', color: 'from-purple-500 to-purple-700' },
  { icon: 'fa-stethoscope', title: 'Medical & Trade Test Coordination', desc: 'Scheduling and coordination of medical examinations and trade tests required for overseas employment.', color: 'from-teal-500 to-teal-700' },
  { icon: 'fa-chalkboard-teacher', title: 'Pre-Departure Orientation', desc: 'Comprehensive orientation sessions covering cultural awareness, workplace rights, and travel tips.', color: 'from-orange-500 to-orange-700' },
  { icon: 'fa-plane-departure', title: 'Air Ticketing & Travel Support', desc: 'Affordable airfare booking and travel logistics support for a smooth journey to your destination.', color: 'from-cyan-500 to-cyan-700' },
  { icon: 'fa-search', title: 'Employer Verification', desc: 'Thorough verification of overseas employers to ensure legitimate and safe job opportunities.', color: 'from-green-500 to-green-700' },
  { icon: 'fa-users-gear', title: 'Skilled & Unskilled Manpower Supply', desc: 'Reliable workforce solutions for employers across construction, hospitality, healthcare, and industry.', color: 'from-amber-500 to-amber-700' },
];

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="services" className="py-16 lg:py-24 bg-background/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="pill-badge bg-primary/10 text-primary border border-primary/20">
            <i className="fas fa-concierge-bell mr-1.5" />
            OUR SERVICES
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-ink text-center mb-4">
          What We Offer
        </h2>
        <p className="text-center text-ink/60 max-w-2xl mx-auto mb-12">
          Comprehensive recruitment and support services tailored to your overseas employment journey.
        </p>

        <div ref={ref} className="masonry-grid">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`masonry-item rounded-xl overflow-hidden shadow-lg text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-xl cursor-default ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`bg-gradient-to-br ${svc.color} p-6`}>
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <i className={`fas ${svc.icon} text-xl`} />
                </div>
                <h3 className="text-lg font-bold mb-2">{svc.title}</h3>
                <p className="text-white/85 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}