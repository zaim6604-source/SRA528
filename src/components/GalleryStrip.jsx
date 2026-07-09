import { useState } from 'react';
import FadeUp from './FadeUp';
import SafeImage from './SafeImage';

const galleryItems = [
  { label: 'Office', seed: 'Office' },
  { label: 'Briefing', seed: 'Briefing' },
  { label: 'Documentation', seed: 'Documentation' },
  { label: 'Departure', seed: 'Departure' },
  { label: 'Partners', seed: 'Partners' },
  { label: 'Licensing', seed: 'Licensing' },
];

export default function GalleryStrip() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className='flex flex-col justify-center items-center'>
          <div className="pill-badge bg-primary text-white mb-4 mx-auto" style={{ width: 'fit-content' }}>
            <i className="fas fa-images" />
            Gallery
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink text-center leading-tight">
            A Glimpse of Our Work
          </h2>
        </FadeUp>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-10">
          {galleryItems.map((item, i) => (
            <FadeUp key={item.label} delay={i * 60}>
              <div
                className="group relative rounded-xl overflow-hidden shadow-md aspect-square cursor-pointer"
                onClick={() => setLightbox({ index: i, item })}
              >
                <SafeImage
                  src={`/images/gallery-${i}.jpg`}
                  alt={item.label}
                  className="w-full h-full object-cover"
                  fallbackType="gallery"
                  fallbackSeed={item.seed}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 flex items-end">
                  <span className="text-white text-xs font-bold">{item.label}</span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox-backdrop" onClick={() => setLightbox(null)}>
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-white/80 hover:text-white text-lg z-10"
            >
              <i className="fas fa-times" />
            </button>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <SafeImage
                src={`/images/gallery-${lightbox.index}.jpg`}
                alt={lightbox.item.label}
                className="w-full h-auto max-h-[80vh] object-contain"
                fallbackType="gallery"
                fallbackSeed={lightbox.item.seed}
              />
            </div>
            <p className="text-white/70 text-sm text-center mt-3 font-semibold">
              {lightbox.item.label}
            </p>
            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={() => {
                  const prev = lightbox.index === 0 ? galleryItems.length - 1 : lightbox.index - 1;
                  setLightbox({ index: prev, item: galleryItems[prev] });
                }}
                className="text-white/70 hover:text-white text-xl"
              >
                <i className="fas fa-chevron-left" />
              </button>
              <button
                onClick={() => {
                  const next = lightbox.index === galleryItems.length - 1 ? 0 : lightbox.index + 1;
                  setLightbox({ index: next, item: galleryItems[next] });
                }}
                className="text-white/70 hover:text-white text-xl"
              >
                <i className="fas fa-chevron-right" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}