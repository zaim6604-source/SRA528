import useInView from '../hooks/useInView';

const photos = [
  { src: 'https://picsum.photos/seed/namir-gallery-1/600/450', alt: 'Office consultation' },
  { src: 'https://picsum.photos/seed/namir-gallery-2/600/450', alt: 'Team meeting' },
  { src: 'https://picsum.photos/seed/namir-gallery-3/600/450', alt: 'Business handshake' },
  { src: 'https://picsum.photos/seed/namir-gallery-4/600/450', alt: 'People collaboration' },
];

export default function Gallery() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="pill-badge bg-primary/10 text-primary border border-primary/20">
            <i className="fas fa-camera mr-1.5" />
            OUR GALLERY
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-ink text-center mb-12">
          A Glimpse Into Our Work
        </h2>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`rounded-xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="aspect-[4/3] bg-secondary/10">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover gallery-img"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="flex items-center justify-center h-full bg-gradient-to-br from-primary/5 to-secondary/5"><i class="fas fa-image text-3xl text-secondary"></i></div>`;
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}