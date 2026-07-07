import { useState } from 'react';

const images = [
  { src: '/images/gallery-1.jpg', alt: 'Office team collaboration' },
  { src: '/images/gallery-2.jpg', alt: 'Client handshake and interview' },
  { src: '/images/gallery-3.jpg', alt: 'Modern workspace' },
  { src: '/images/gallery-4.jpg', alt: 'Travel and airport' },
];

export default function Gallery() {
  const [imgErrors, setImgErrors] = useState({});

  const handleError = (index) => {
    setImgErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section className="py-12 md:py-16" style={{ background: '#FFF0F4' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-[#E0115F]/10 text-[#E0115F] mb-4">
            <i className="fas fa-camera text-xs"></i>
            GALLERY
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-[#2E0A1C]">
            A Glimpse of <span className="text-[#E0115F]">Our Work</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden group">
              <div className="aspect-[4/3] overflow-hidden">
                {imgErrors[i] ? (
                  <div className="w-full h-full bg-[#E0115F]/10 flex items-center justify-center">
                    <i className="fas fa-image text-2xl text-[#E0115F]/30"></i>
                  </div>
                ) : (
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    onError={() => handleError(i)}
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}