import { useState } from 'react'
import { GALLERY } from '../data/siteData'
import ScrollReveal from './ScrollReveal'
import FallbackImage from './FallbackImage'

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full">
              <i className="fas fa-images" />
              Gallery
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-ink mt-4 mb-3">
              A Glimpse of Our Work
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {GALLERY.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 60}>
              <div
                className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer aspect-[4/3]"
                onClick={() => setLightbox(item)}
              >
                <FallbackImage
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                  icon="fa-image"
                  bgClass="from-primary/20 to-secondary/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white text-xs font-semibold">{item.label}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
            >
              <i className="fas fa-times text-xl" />
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.label}
              className="lightbox-image w-full"
            />
            <p className="text-white/80 text-center mt-3 text-sm font-medium">{lightbox.label}</p>
          </div>
        </div>
      )}
    </section>
  )
}