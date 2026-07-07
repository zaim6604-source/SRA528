import useInView from '../hooks/useInView';

const galleryImages = [
  { src: '/images/mafhh-caregiver.jpg', alt: 'Household care' },
  { src: '/images/mafhh-cooking.jpg', alt: 'Cooking' },
  { src: '/images/mafhh-elder.jpg', alt: 'Elder care' },
  { src: '/images/mafhh-family.jpg', alt: 'Family home' },
];

export default function MAFHHCtaBand() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="gallery" className="py-20 md:py-28" style={{ background: 'var(--color-background)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-14">
          <div className="pill-badge justify-center mx-auto w-fit">
            <span className="pill-dot" />
            GALLERY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: 'var(--dark-text)' }}>
            Real Moments <span style={{ color: 'var(--color-primary)' }}>from Our Work</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`rounded-2xl overflow-hidden shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl ${i === 0 ? 'row-span-2' : ''}`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: `${i * 120}ms`,
              }}
            >
              <div className="img-hover-zoom h-full">
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover ${i === 0 ? 'h-[400px]' : 'h-[190px]'}`}
                  loading="lazy"
                  onError={e => { e.target.src = '/images/fallback.svg'; }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}