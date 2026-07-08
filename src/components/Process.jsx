import useInView from '../hooks/useInView';

const steps = [
  { num: '01', icon: 'fa-clipboard-list', title: 'Register', desc: 'Submit your application online or visit our office at Bacha Plaza, Mingora, Swat.' },
  { num: '02', icon: 'fa-file-contract', title: 'Documents & Visa', desc: 'Submit required documents; we handle visa processing and attestation.' },
  { num: '03', icon: 'fa-stethoscope', title: 'Medical & Trade Test', desc: 'Complete medical examination and any required trade tests.' },
  { num: '04', icon: 'fa-check-double', title: 'Employer Confirmation', desc: 'Receive your job offer and employment contract from the employer.' },
  { num: '05', icon: 'fa-plane-departure', title: 'Ticketing & Departure', desc: 'We arrange your flight and provide pre-departure orientation.' },
];

export default function Process() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="process" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Diagonal band background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-highlight to-cta transform -skew-y-3 scale-110" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-highlight to-cta" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="pill-badge bg-white/20 text-white border border-white/30 backdrop-blur-sm">
            <i className="fas fa-arrow-right mr-1.5" />
            HOW IT WORKS
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-4">
          Your Journey Starts Here
        </h2>
        <p className="text-center text-white/80 max-w-2xl mx-auto mb-12">
          A simple, transparent process from registration to departure.
        </p>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 transition-all duration-500 hover:bg-white/20 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Step number */}
              <div className="w-12 h-12 rounded-full bg-accent text-ink font-extrabold text-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                {step.num}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                <i className={`fas ${step.icon} text-2xl text-white`} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{step.desc}</p>

              {/* Connector arrow (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-accent/60 text-2xl">
                  <i className="fas fa-chevron-right" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}