import { useState } from 'react'
import { TESTIMONIALS, COMPANY } from '../data/siteData'
import ScrollReveal from './ScrollReveal'

export default function Testimonials() {
  const [popup, setPopup] = useState(null)

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full">
              <i className="fas fa-comments" />
              Testimonials
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-ink mt-4 mb-3">
              What Our Candidates Say
            </h2>
            <p className="text-ink/60 max-w-2xl mx-auto">
              Real stories from workers we have placed abroad.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 80}>
              <div
                className="bg-white rounded-2xl p-6 shadow-lg border border-primary/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer"
                onClick={() => setPopup(t)}
              >
                <div className="flex items-center gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <i
                      key={si}
                      className={`fas fa-star ${si < t.rating ? 'text-accent' : 'text-gray-200'}`}
                    />
                  ))}
                </div>
                <p className="text-ink/70 text-sm leading-relaxed flex-1 mb-4 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-primary/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-ink">{t.name}</div>
                    <div className="text-xs text-ink/50">{t.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Testimonial Popup */}
      {popup && (
        <div className="modal-overlay" onClick={() => setPopup(null)}>
          <div className="modal-content text-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setPopup(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-ink/60 hover:text-primary transition-colors"
            >
              <i className="fas fa-times" />
            </button>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
              {popup.initials}
            </div>
            <div className="flex items-center justify-center gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, si) => (
                <i
                  key={si}
                  className={`fas fa-star ${si < popup.rating ? 'text-accent' : 'text-gray-200'}`}
                />
              ))}
            </div>
            <p className="text-ink/70 leading-relaxed mb-4 italic">&ldquo;{popup.quote}&rdquo;</p>
            <div className="font-bold text-ink">{popup.name}</div>
            <div className="text-sm text-ink/50">{popup.role}</div>
            <a
              href={COMPANY.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cta text-white px-6 py-3 rounded-full font-bold hover:brightness-110 transition-all shadow-lg mt-6"
            >
              <i className="fab fa-whatsapp" />
              Start Your Journey Too
            </a>
          </div>
        </div>
      )}
    </section>
  )
}