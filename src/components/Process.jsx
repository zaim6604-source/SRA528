import useInView from '../hooks/useInView';

const steps = [
  { number: 1, title: 'Demand & Consultation', desc: 'We receive manpower demand from foreign recruiters and consult on requirements, timelines, and compliance.', icon: 'fa-comments' },
  { number: 2, title: 'Sourcing & Screening', desc: 'Our team sources and screens candidates through our extensive network of skilled Pakistani workers.', icon: 'fa-search' },
  { number: 3, title: 'Documents & Visa', desc: 'Complete documentation, attestation, and visa processing handled end-to-end by our experts.', icon: 'fa-file-alt' },
  { number: 4, title: 'Medical & Trade Test', desc: 'Medical examinations and trade tests arranged as per the destination country\'s requirements.', icon: 'fa-stethoscope' },
  { number: 5, title: 'Deployment & Departure', desc: 'Final deployment with travel arrangements, pre-departure orientation, and ongoing support.', icon: 'fa-plane-departure' },
];

export default function Process() {
  const [ref, inView] = useInView();

  return (
    <section id="process" className="relative py-20 md:py-28">
      {/* Diagonal background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #E0115F 0%, #7B2D8E 100%)',
            transform: 'skewY(-3deg)',
            transformOrigin: 'top left',
            top: '-10%',
            bottom: '-10%',
          }}
        />
      </div>

      <div className="relative z-10 container-pad" ref={ref}>
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-white/20 text-white mb-4 backdrop-blur-sm">
            <i className="fas fa-list-ol text-xs"></i>
            HOW IT WORKS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white">
            Our Recruitment{' '}
            <span className="text-[#FFD700]">Process</span>
          </h2>
          <p className="text-white/80 text-base md:text-lg mt-3 max-w-2xl mx-auto">
            A streamlined, transparent process from demand to deployment.
          </p>
        </div>

        <div className={`max-w-4xl mx-auto space-y-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex items-start gap-5 md:gap-8 bg-white/10 backdrop-blur-md rounded-2xl p-5 md:p-7 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div
                className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl md:text-2xl font-extrabold font-heading shadow-lg"
                style={{
                  background: i % 2 === 0 ? '#FFD700' : '#E0115F',
                  color: i % 2 === 0 ? '#2E0A1C' : 'white',
                }}
              >
                {step.number}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <i className={`fas ${step.icon} text-[#FFD700] text-lg`}></i>
                  <h3 className="font-heading font-bold text-lg md:text-xl text-white">{step.title}</h3>
                </div>
                <p className="text-white/75 text-sm md:text-base leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}