import useInView from '../hooks/useInView';

export default function MAFHHHero() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="home" className="relative overflow-hidden" style={{ background: 'var(--color-background)' }}>
      {/* Golden accent line */}
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'linear-gradient(90deg, var(--color-secondary), var(--color-primary), var(--color-secondary))' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center" ref={ref}>
          {/* Left content */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="pill-badge !mb-5">
              <span className="pill-dot" />
              Verified Household Staff
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6" style={{ color: 'var(--dark-text)' }}>
              Trusted Hands<br />
              <span style={{ color: 'var(--color-primary)' }}>for Every Home</span>
            </h1>
            <p className="text-lg sm:text-xl mb-8 leading-relaxed" style={{ color: 'var(--subtle-text)' }}>
              MAFHH Helpmates places verified maids, nannies, cooks, drivers, and caregivers with Islamabad families — reliable, screened, and ready to help.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/923319767633" target="_blank" rel="noopener noreferrer" className="btn-primary !text-base !px-7 !py-3.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Hire Staff Now
              </a>
              <a href="https://wa.me/923319767633" target="_blank" rel="noopener noreferrer" className="btn-outline !text-base !px-7 !py-3.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.163 5.336 5.498 0 12.053 0c3.182 0 6.172 1.24 8.42 3.49a11.83 11.83 0 013.488 8.41c-.003 6.557-5.338 11.892-11.89 11.892h-.005c-1.99 0-3.948-.52-5.664-1.491L.057 24zM5.46 19.87l.356.221a9.87 9.87 0 005.234 1.482h.004c5.475 0 9.93-4.453 9.933-9.928a9.86 9.86 0 00-2.895-6.997 9.82 9.82 0 00-6.993-2.898c-5.475 0-9.93 4.456-9.932 9.93 0 1.865.52 3.688 1.508 5.275l.247.376-.997 3.637 3.64-.956zM5.46 19.87z"/></svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className={`relative transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ borderRadius: '20px' }}>
              <div className="img-hover-zoom">
                <img
                  src="/images/mafhh-hero.jpg"
                  alt="Trusted household staff"
                  className="w-full h-[400px] md:h-[480px] object-cover"
                  loading="lazy"
                  onError={e => { e.target.src = '/images/fallback.svg'; }}
                />
              </div>
              {/* Arc frame overlay */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
            {/* Floating trust chips */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-2.5 flex items-center gap-2 float">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--color-cta)' }} />
              <span className="text-sm font-bold" style={{ color: 'var(--dark-text)' }}>Verified</span>
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg px-4 py-2.5 flex items-center gap-2 float" style={{ animationDelay: '1s' }}>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--color-primary)' }} />
              <span className="text-sm font-bold" style={{ color: 'var(--dark-text)' }}>Screened</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}