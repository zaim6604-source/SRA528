import useInView from '../hooks/useInView';

export default function MAFHHGradientCta() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section className="relative py-20 md:py-24 overflow-hidden" style={{
      background: 'linear-gradient(135deg, var(--color-primary) 0%, #247BA0 100%)',
    }}>
      {/* Wavy SVG divider top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,30 C360,60 720,0 1440,30 L1440,0 L0,0 Z" fill="var(--color-background)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center" ref={ref}>
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Need Reliable Help at Home?<br />
            <span style={{ color: '#FFD400' }}>We'll Find the Right Person.</span>
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            From housekeeping to elder care, our verified staff are ready to support your family. Get started today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/923319767633" target="_blank" rel="noopener noreferrer" className="btn-primary !bg-white !text-[#FF1654] !shadow-xl hover:!shadow-2xl !text-base !px-8 !py-3.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#FF1654"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Hire Staff
            </a>
            <a href="https://wa.me/923319767633" target="_blank" rel="noopener noreferrer" className="btn-outline-light !text-base !px-8 !py-3.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.163 5.336 5.498 0 12.053 0c3.182 0 6.172 1.24 8.42 3.49a11.83 11.83 0 013.488 8.41c-.003 6.557-5.338 11.892-11.89 11.892h-.005c-1.99 0-3.948-.52-5.664-1.491L.057 24z"/></svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Wavy SVG divider bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,30 C360,60 720,0 1440,30 L1440,0 L0,0 Z" fill="var(--color-background)" />
        </svg>
      </div>
    </section>
  );
}