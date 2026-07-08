const steps = [
  { num: '01', icon: 'fa-clipboard-list', title: 'Register', desc: 'Submit your application online or visit our office at Al-Mustafa Plaza, 6th Road, Rawalpindi.' },
  { num: '02', icon: 'fa-file-contract', title: 'Documents & Visa', desc: 'Submit required documents; we handle visa processing and attestation from start to finish.' },
  { num: '03', icon: 'fa-stethoscope', title: 'Medical & Trade Test', desc: 'Complete medical examination and any required trade tests coordinated by our team.' },
  { num: '04', icon: 'fa-check-double', title: 'Employer Confirmation', desc: 'Receive your job offer and employment contract directly from the overseas employer.' },
  { num: '05', icon: 'fa-plane-departure', title: 'Ticketing & Departure', desc: 'We arrange your flight and provide comprehensive pre-departure orientation.' },
];

export default function Process() {
  return (
    <div className="space-y-8">
      <div className="text-center sm:text-left">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 mb-3">
          <i className="fas fa-arrow-right" />
          HOW IT WORKS
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink mt-2">
          Your Journey Starts Here
        </h1>
        <p className="text-ink/60 mt-2 max-w-2xl">
          A simple, transparent process from registration to departure.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line (desktop: horizontal) */}
        <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-primary/20" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <div key={step.num} className="relative bg-white rounded-xl p-6 shadow-sm border border-secondary/10 hover:shadow-md transition-all">
              {/* Step number badge */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-white font-extrabold text-lg">{step.num}</span>
              </div>

              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <i className={`fas ${step.icon} text-xl text-primary`} />
              </div>

              <h3 className="text-center font-bold text-ink text-base mb-2">{step.title}</h3>
              <p className="text-center text-ink/60 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-secondary/10 text-center">
        <h2 className="text-xl font-bold text-ink mb-2">Ready to Begin?</h2>
        <p className="text-ink/60 text-sm mb-5">
          Start your journey today. Call us or submit your application.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="tel:+920514410484"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-cta text-white hover:bg-cta/90 transition-all shadow-md"
          >
            <i className="fas fa-phone-alt" />
            Call 051-4410484
          </a>
          <a
            href="mailto:info@fejarenterprises.pk?subject=Application%20Inquiry&body=Please%20replace%20this%20with%20your%20application%20details."
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
          >
            <i className="fas fa-paper-plane" />
            Apply via Email
          </a>
        </div>
      </div>
    </div>
  );
}