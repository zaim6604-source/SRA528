import useReveal from '../hooks/useReveal';

const IMAGES = [
  { src: '/images/gallery-1.jpg', alt: 'Rimsha Travels Office' },
  { src: '/images/gallery-2.jpg', alt: 'Team at Work' },
  { src: '/images/gallery-3.jpg', alt: 'Client Meeting' },
  { src: '/images/gallery-4.jpg', alt: 'Travel Group' },
];

export default function Gallery() {
  useReveal('.ga-reveal');

  return (
    <section className="py-[clamp(60px,8vw,100px)] px-5" style={{ background: '#FFF6E0' }}>
      <div className="max-w-6xl mx-auto">
        <div className="ga-reveal reveal text-center mb-12">
          <span className="section-pill">GALLERY</span>
          <h2 className="font-display font-extrabold mt-4" style={{ fontSize: 'clamp(24px,4vw,36px)', color: '#2A1A00' }}>
            Our Moments
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {IMAGES.map((img, i) => (
            <div key={i} className="ga-reveal reveal rounded-2xl overflow-hidden" style={{ transitionDelay: `${i * 0.1}s`, aspectRatio: '1' }}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                onError={(e) => { e.target.style.display = 'none'; }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}