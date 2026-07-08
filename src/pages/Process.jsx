import useInView from '../hooks/useInView';

const steps = [
  { num: 1, icon: 'fa-handshake', title: 'Register & Consult', desc: 'Visit our office in I-10/4, Islamabad or contact us via WhatsApp. Share your background and career goals.', color: 'bg-primary' },
  { num: 2, icon: 'fa-file-alt', title: 'Documents & Visa', desc: 'Submit your educational certificates, passport, and experience letters. We handle visa application and attestation.', color: 'bg-secondary' },
  { num: 3, icon: 'fa-stethoscope', title: 'Medical & Trade Test', desc: 'Complete your medical examination and trade skill assessment at our authorized centers.', color: 'bg-accent text-ink' },
  { num: 4, icon: 'fa-check-circle', title: 'Employer Confirmation', desc: 'Receive your job offer, review the contract terms, and confirm your acceptance with our guidance.', color: 'bg-highlight' },
  { num: 5, icon: 'fa-plane-departure', title: 'Ticketing & Departure', desc: 'We coordinate your flight booking, pre-departure orientation, and travel logistics for a smooth journey.', color: 'bg-cta' },
];

export default function ProcessPage() {
  const [ref, inView] = useInView();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-ink">How It Works</h1>
        <p className="text-ink/60 mt-2">
          Your journey to international employment in 5 simple steps.
        </p>
      </div>

      <div ref={ref} className="relative">
        {/* Vertical connector line */}
        <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-secondary/20 hidden md:block" />

        <div className="space-y-8">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`relative flex flex-col md:flex-row gap-6 items-start transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Step marker */}
              <div className={`flex-shrink-0 w-14 h-14 rounded-2xl ${s.color} flex items-center justify-center text-white font-extrabold text-lg shadow-lg relative z-10`}>
                <i className={`fas ${s.icon}`} />
              </div>

              {/* Content card */}
              <div className="flex-1 bg-white rounded-2xl p-6 shadow-md md:ml-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`w-7 h-7 rounded-full ${s.color} text-white text-xs font-bold flex items-center justify-center`}>
                    {s.num}
                  </span>
                  <h3 className="text-lg font-bold text-ink">{s.title}</h3>
                </div>
                <p className="text-sm text-ink/60 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center bg-white rounded-2xl p-8 shadow-md">
        <h3 className="text-xl font-bold text-ink mb-2">Ready to Begin?</h3>
        <p className="text-ink/60 text-sm mb-5">Start your application today — it only takes a few minutes.</p>
        <a
          href="https://wa.me/923333312207"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-cta text-white px-6 py-3 rounded-xl font-bold text-sm hover:brightness-110 transition-all shadow-lg"
        >
          <i className="fab fa-whatsapp" /> Start Your Application
        </a>
      </div>
    </div>
  );
}