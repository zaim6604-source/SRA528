import { useState } from 'react'
import { SERVICES, COMPANY } from '../data/siteData'
import ScrollReveal from './ScrollReveal'

export default function Services() {
  const [modal, setModal] = useState(null)

  return (
    <section id="services" className="py-16 lg:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full">
              <i className="fas fa-briefcase" />
              Our Services
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-ink mt-4 mb-3">
              Comprehensive Recruitment Services
            </h2>
            <p className="text-ink/60 max-w-2xl mx-auto">
              From visa processing to post-placement care — we handle everything.
            </p>
          </div>
        </ScrollReveal>

        <div className="masonry-grid">
          {SERVICES.map((svc, i) => (
            <ScrollReveal key={svc.title} delay={i * 50}>
              <div
                className={`bg-gradient-to-br ${svc.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
                onClick={() => setModal(svc)}
              >
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center text-2xl mb-4">
                  <i className={`fas ${svc.icon}`} />
                </div>
                <h3 className="text-lg font-bold mb-2">{svc.title}</h3>
                <p className="text-sm text-white/80 leading-relaxed">{svc.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      {modal && (
        <div className="modal-overlay" onClick={() => setModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setModal(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-ink/60 hover:text-primary transition-colors"
            >
              <i className="fas fa-times" />
            </button>
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${modal.color} flex items-center justify-center text-white text-3xl mb-4`}>
              <i className={`fas ${modal.icon}`} />
            </div>
            <h3 className="text-2xl font-extrabold text-ink mb-3">{modal.title}</h3>
            <p className="text-ink/70 leading-relaxed mb-6">{modal.desc}</p>
            <p className="text-ink/60 text-sm mb-6">
              At {COMPANY.name}, we ensure that every step of the {modal.title.toLowerCase()} process is handled professionally and transparently. Our team of experienced professionals works closely with you to achieve the best outcomes.
            </p>
            <a
              href={COMPANY.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cta text-white px-6 py-3 rounded-full font-bold hover:brightness-110 transition-all shadow-lg"
            >
              <i className="fab fa-whatsapp" />
              Inquire About {modal.title}
            </a>
          </div>
        </div>
      )}
    </section>
  )
}