import useInView from '../hooks/useInView';

const steps = [
  { num: 1, title: 'Tell Us Your Needs', desc: 'Share your requirements — staff type, schedule, experience level, and any special needs.' },
  { num: 2, title: 'We Shortlist Verified Staff', desc: 'We match you with pre-screened, verified candidates from our database.' },
  { num: 3, title: 'Interview & Select', desc: 'Meet your shortlisted candidates, ask questions, and choose the best fit.' },
  { num: 4, title: 'Trial Period', desc: 'Your selected staff works with your family on a trial basis to ensure compatibility.' },
  { num: 5, title: 'Hire with Confidence', desc: 'Satisfied? Proceed with the hire. Backed by our replacement guarantee.' },
];

export default function MAFHHProcess() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="process" className="relative py-20 md:py-28 overflow-hidden">
      {/* Angled background */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, var(--color-primary) 0%, #247BA0 100%)',
        transform: 'skewY(-3deg)',
        transformOrigin: 'top left',
      }} />
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, var(--color-primary) 0%, #247BA0 100%)',
        transform: 'skewY(3deg)',
        transformOrigin: 'bottom right',
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-14">
          <div className="pill-badge justify-center mx-auto w-fit" style={{ background: 'rgba(255,255,255,.15)', borderColor: 'rgba(255,255,255,.3)', color: '#fff' }}>
            <span className="w-2 h-2 rounded-full" style={{ background: '#FFD400' }} />
            HOW IT WORKS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Your Hiring <span style={{ color: '#FFD400' }}>Journey</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-4 md:gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`text-center transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-extrabold shadow-lg"
                style={{
                  background: i % 2 === 0 ? '#FFD400' : '#70C1B3',
                  color: i % 2 === 0 ? '#1a1a2e' : '#fff',
                }}
              >
                {step.num}
              </div>
              <h3 className="text-white font-extrabold text-base mb-2">{step.title}</h3>
              <p className="text-sm text-white/80 leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[calc(80%)] h-0.5 opacity-30" style={{ background: '#FFD400' }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}