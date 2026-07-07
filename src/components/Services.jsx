import useInView from '../hooks/useInView';

const services = [
  { icon: 'fa-users', title: 'Overseas Manpower Recruitment', desc: 'End-to-end recruitment of skilled and semi-skilled Pakistani workers for international employers.', color: '#E0115F' },
  { icon: 'fa-globe', title: 'International Labor Supply', desc: 'Reliable supply of competent, cost-effective human resources to the global labor market.', color: '#FF5C8A' },
  { icon: 'fa-handshake', title: 'Foreign Recruiter Support', desc: 'Demand-based hiring assistance for foreign recruiters targeting Pakistani workforce.', color: '#FFD700' },
  { icon: 'fa-passport', title: 'Visa Processing', desc: 'Complete visa application assistance, documentation, and embassy liaison services.', color: '#7B2D8E' },
  { icon: 'fa-file-signature', title: 'Document Attestation', desc: 'Educational and professional document attestation from all relevant authorities.', color: '#B8004F' },
  { icon: 'fa-stethoscope', title: 'Medical & Trade Test Coordination', desc: 'Arranging medical examinations and trade tests as per destination country requirements.', color: '#E0115F' },
  { icon: 'fa-chalkboard', title: 'Pre-Departure Orientation', desc: 'Comprehensive orientation sessions preparing workers for their new roles and environments.', color: '#FF5C8A' },
  { icon: 'fa-plane-departure', title: 'Air Ticketing & Travel Support', desc: 'Complete travel arrangements including air ticketing and airport assistance.', color: '#7B2D8E' },
];

export default function Services() {
  const [ref, inView] = useInView();

  return (
    <section id="services" className="section-pad" style={{ background: '#FFF0F4' }}>
      <div className="container-pad" ref={ref}>
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-[#E0115F]/10 text-[#E0115F] mb-4">
            <i className="fas fa-cogs text-xs"></i>
            OUR SERVICES
          </div>
          <h2 className="section-heading">
            Comprehensive{' '}
            <span className="text-[#E0115F]">Manpower Solutions</span>
          </h2>
          <p className="section-subheading">
            End-to-end services covering every stage of the overseas recruitment process.
          </p>
        </div>

        {/* Masonry/uneven grid */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-min transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {services.map((svc, i) => {
            const isTall = i === 0 || i === 4 || i === 7;
            return (
              <div
                key={i}
                className={`rounded-2xl p-6 md:p-8 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default ${isTall ? 'sm:row-span-2' : ''}`}
                style={{ background: svc.color }}
              >
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5 backdrop-blur-sm">
                  <i className={`fas ${svc.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3">{svc.title}</h3>
                <p className="text-white/85 text-sm leading-relaxed mt-auto">{svc.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}