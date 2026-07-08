import useInView from '../hooks/useInView';

const services = [
  { icon: 'fa-briefcase', title: 'Overseas Job Placement', desc: 'Connecting skilled workers with verified international employers across multiple industries.', color: 'from-primary to-highlight' },
  { icon: 'fa-passport', title: 'Visa Processing', desc: 'Complete visa application support from document preparation to submission and follow-up.', color: 'from-secondary to-primary' },
  { icon: 'fa-file-signature', title: 'Document Attestation', desc: 'Professional attestation and legalization of educational and professional credentials.', color: 'from-accent to-amber-400 text-ink' },
  { icon: 'fa-stethoscope', title: 'Medical & Trade Tests', desc: 'Coordination of medical examinations and trade skill assessments at authorized centers.', color: 'from-highlight to-primary' },
  { icon: 'fa-plane-departure', title: 'Pre-Departure Orientation', desc: 'Comprehensive briefings on workplace culture, legal rights, and travel essentials.', color: 'from-cta to-rose-600' },
  { icon: 'fa-ticket-alt', title: 'Air Ticketing & Travel', desc: 'Affordable flight arrangements and travel coordination for a smooth departure.', color: 'from-secondary to-highlight' },
  { icon: 'fa-shield-check', title: 'Employer Verification', desc: 'Thorough vetting of overseas employers to ensure legitimate and safe placements.', color: 'from-primary to-cyan-700' },
  { icon: 'fa-hard-hat', title: 'Manpower Supply', desc: 'Skilled and unskilled manpower recruitment tailored to global industry demands.', color: 'from-cta to-primary' },
];

export default function ServicesPage() {
  const [ref, inView] = useInView();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-ink">Our Services</h1>
        <p className="text-ink/60 mt-2">
          Comprehensive recruitment services from I-10/4, Islamabad — trusted by thousands.
        </p>
      </div>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <div
            key={s.title}
            className={`bg-gradient-to-br ${s.color} rounded-2xl p-6 text-white shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-xl mb-4">
              <i className={`fas ${s.icon}`} />
            </div>
            <h3 className="text-lg font-bold mb-2">{s.title}</h3>
            <p className="text-white/80 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}