import SectionWrapper from './SectionWrapper';

const steps = [
  { icon: 'fa-clipboard-list', label: 'Register & Consult', desc: 'Walk in or WhatsApp us for a free career consultation.' },
  { icon: 'fa-file-alt', label: 'Documents & Visa', desc: 'We prepare your documents and handle visa applications.' },
  { icon: 'fa-stethoscope', label: 'Medical & Trade Test', desc: 'Coordinated medical exams and skill assessments.' },
  { icon: 'fa-handshake', label: 'Employer Confirmation', desc: 'Receive your formal offer and employment contract.' },
  { icon: 'fa-plane-departure', label: 'Ticketing & Departure', desc: 'We book your flight and brief you before departure.' },
];

export default function Process() {
  return (
    <SectionWrapper id="process" badge="HOW IT WORKS" badgeColor="cta">
      <h2 className="text-3xl md:text-4xl font-extrabold text-ink font-heading mb-2">
        Your Journey, Simplified
      </h2>
      <p className="text-ink/60 mb-10 max-w-2xl">
        Five simple steps from registration to departure.
      </p>

      <div className="hidden md:flex items-center justify-center py-12">
        <div className="relative w-[500px] h-[500px] lg:w-[600px] lg:h-[600px]">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-secondary/40" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-xl z-10">
            <i className="fas fa-rocket text-2xl" />
          </div>

          {steps.map((step, i) => {
            const angle = (i * 360) / steps.length - 90;
            const rad = (angle * Math.PI) / 180;
            const radius = 220;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;

            return (
              <div
                key={step.label}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white shadow-lg border-2 border-secondary flex items-center justify-center text-secondary text-xl mb-2 hover:scale-110 transition-transform">
                    <i className={`fas ${step.icon}`} />
                  </div>
                  <span className="text-xs font-bold text-primary bg-cta/20 px-3 py-0.5 rounded-full mb-1">
                    Step {i + 1}
                  </span>
                  <span className="text-sm font-bold text-ink max-w-[120px] leading-tight">{step.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="md:hidden space-y-6">
        {steps.map((step, i) => (
          <div key={step.label} className="flex gap-5 items-start">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg flex-shrink-0">
                <i className={`fas ${step.icon}`} />
              </div>
              {i < steps.length - 1 && <div className="w-0.5 h-10 bg-secondary/30" />}
            </div>
            <div className="pt-1">
              <span className="text-xs font-bold text-accent">Step {i + 1}</span>
              <h3 className="text-lg font-bold text-ink">{step.label}</h3>
              <p className="text-ink/60 text-sm">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}