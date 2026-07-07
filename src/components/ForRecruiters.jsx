import useInView from '../hooks/useInView';

const steps = [
  { icon: 'fa-file-invoice', title: 'Submit Demand', desc: 'Send us your manpower requirements, job descriptions, and desired qualifications.' },
  { icon: 'fa-users-gear', title: 'We Source & Screen', desc: 'Our team identifies and vets candidates matching your specific requirements.' },
  { icon: 'fa-file-contract', title: 'Documents & Processing', desc: 'We handle all documentation, attestation, visa processing, and compliance.' },
  { icon: 'fa-plane-up', title: 'Deployment', desc: 'Candidates are deployed to your organization with full travel and orientation support.' },
];

export default function ForRecruiters() {
  const [ref, inView] = useInView();

  return (
    <section className="section-pad" style={{ background: '#FFF0F4' }}>
      <div className="container-pad" ref={ref}>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-[#7B2D8E]/10 text-[#7B2D8E] mb-4">
            <i className="fas fa-building text-xs"></i>
            EMPLOYERS
          </div>
          <h2 className="section-heading">
            For{' '}
            <span className="text-[#7B2D8E]">Foreign Recruiters</span>
          </h2>
          <p className="section-subheading">
            A streamlined demand-based recruitment service for international employers.
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 md:p-7 border border-[#7B2D8E]/10 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#7B2D8E]/10 flex items-center justify-center mb-4">
                <i className={`fas ${step.icon} text-2xl text-[#7B2D8E]`}></i>
              </div>
              <h3 className="font-heading font-bold text-lg text-[#2E0A1C] mb-2">{step.title}</h3>
              <p className="text-sm text-[#2E0A1C]/70 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://wa.me/923212188000?text=Hello%20Bridge%20Global%20Resource%2C%20I%20would%20like%20to%20submit%20a%20manpower%20demand."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#7B2D8E] hover:bg-[#9B3DAE] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 text-base"
          >
            <i className="fas fa-file-export"></i>
            Submit a Demand
          </a>
        </div>
      </div>
    </section>
  );
}