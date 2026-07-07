import { useState } from "react";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
    alt: "Workshop testing area",
  },
  {
    src: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&q=80",
    alt: "Welding equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80",
    alt: "Tools and machinery",
  },
  {
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80",
    alt: "Skilled worker testing",
  },
];

function ImgWithFallback({ src, alt, className }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`${className} bg-gray-100 flex items-center justify-center rounded-xl`}>
        <i className="fas fa-image text-gray-300 text-3xl"></i>
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} loading="lazy" />;
}

export default function Gallery() {
  return (
    <section id="facility" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-10">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
            OUR FACILITY
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <ImgWithFallback
                src={photo.src}
                alt={photo.alt}
                className="w-full h-48 sm:h-56 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}