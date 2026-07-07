import useInView from '../hooks/useInView';

export default function MAFHHAbout() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="py-20 md:py-28" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center" ref={ref}>
          {/* Image */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ borderRadius: '20px' }}>
              <div className="img-hover-zoom">
                <img
                  src="/images/mafhh-caregiver.jpg"
                  alt="MAFHH Helpmates team"
                  className="w-full h-[380px] md:h-[440px] object-cover"
                  loading="lazy"
                  onError={e => { e.target.src = '/images/fallback.svg'; }}
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="pill-badge">
              <span className="pill-dot" />
              WHO WE ARE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6" style={{ color: 'var(--dark-text)' }}>
              Islamabad's Trusted<br />
              <span style={{ color: 'var(--color-primary)' }}>Domestic Staffing Agency</span>
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--subtle-text)' }}>
              Based in F-11, Islamabad, MAFHH Employment Company (MAFHH Helpmates) connects families with skilled, verified domestic staff. We understand that inviting someone into your home is a big decision — which is why every candidate is thoroughly screened, trained, and matched to your specific needs.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--subtle-text)' }}>
              Whether you need a live-in nanny, a part-time cook, a reliable driver, or compassionate elder care, we make the process seamless and stress-free. Your peace of mind is our priority.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Background-Checked', 'Trained', 'Replacement Guarantee'].map((chip, i) => (
                <span key={i}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold rounded-full"
                  style={{ background: 'rgba(255,22,84,.08)', color: 'var(--color-primary)' }}
                >
                  <span className="w-2 h-2 rounded-full" style={{ background: 'var(--color-cta)' }} />
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}