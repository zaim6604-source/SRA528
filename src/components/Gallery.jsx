import { useState } from 'react'

const PHOTOS = [
  { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', alt: 'Business office' },
  { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80', alt: 'Team collaboration' },
  { src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80', alt: 'Document processing' },
  { src: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80', alt: 'Travel arrangements' },
  { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80', alt: 'Client consultation' },
  { src: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=80', alt: 'Business meeting' },
]

export default function Gallery() {
  const [errored, setErrored] = useState({})

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section pill */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-5 py-2 rounded-full">
            <i className="fas fa-camera" />
            Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mt-4 mb-3">
            Our Office & Team
          </h2>
        </div>

        {/* Photo strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {PHOTOS.map((photo) => (
            <div key={photo.src} className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
              {!errored[photo.src] ? (
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={() => setErrored((prev) => ({ ...prev, [photo.src]: true }))}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <i className="fas fa-image text-3xl text-primary/40" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}