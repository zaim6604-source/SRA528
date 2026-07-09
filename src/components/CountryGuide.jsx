import { useState } from 'react'
import { COUNTRIES, COUNTRY_CHIPS, COMPANY } from '../data/siteData'
import ScrollReveal from './ScrollReveal'
import FallbackImage from './FallbackImage'

export default function CountryGuide() {
  const [modal, setModal] = useState(null)
  const [activeChip, setActiveChip] = useState(null)

  const filtered = activeChip
    ? COUNTRIES.filter((c) => c.label === activeChip)
    : COUNTRIES

  return (
    <section id="countries" className="py-16 lg:py-24 bg-white">
      <div className="wavy-divider -mb-1 -mt-16 lg:-mt-24">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="text-white fill-current">
          <path d="M0,30 C360,60 720,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full">
              <i className="fas fa-globe-asia" />
              Country Guide
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-ink mt-4 mb-3">
              Destinations We Serve
            </h2>
            <p className="text-ink/60 max-w-2xl mx-auto">
              From the Gulf to Europe and Southeast Asia — opportunities across the globe.
            </p>
          </div>
        </ScrollReveal>

        {/* Chip grid */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {COUNTRY_CHIPS.map((chip) => (
              <button
                key={chip}
                onClick={() => setActiveChip(activeChip === chip ? null : chip)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeChip === chip
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-primary/10 text-primary hover:bg-primary/20'
                }`}
              >
                {chip}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Country cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((country, i) => (
            <ScrollReveal key={country.slug} delay={i * 60}>
              <div
                className="bg-background rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => setModal(country)}
              >
                <div className="relative h-36 bg-gradient-to-br from-primary to-secondary overflow-hidden">
                  <FallbackImage
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                    icon="fa-globe"
                    bgClass="from-primary/30 to-secondary/30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <h3 className="text-white font-extrabold text-lg">{country.name}</h3>
                    <p className="text-white/80 text-xs">{country.cities}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {country.sectors.split(', ').map((sector) => (
                      <span
                        key={sector}
                        className="text-[10px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full"
                      >
                        {sector}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-ink/50 mt-2">
                    <i className="fas fa-map-pin text-primary/60" />
                    <span>Key cities: {country.cities}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Country Detail Modal */}
      {modal && (
        <div className="modal-overlay" onClick={() => setModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setModal(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-ink/60 hover:text-primary transition-colors"
            >
              <i className="fas fa-times" />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{modal.flag}</span>
              <div>
                <h3 className="text-2xl font-extrabold text-ink">{modal.name}</h3>
                <p className="text-sm text-ink/50">{modal.landmark}</p>
              </div>
            </div>
            <p className="text-ink/70 text-sm mb-4">{modal.description}</p>

            {modal.salaryRange && (
              <div className="bg-primary/5 rounded-xl p-3 mb-4 flex items-center gap-2">
                <i className="fas fa-money-bill-wave text-primary" />
                <span className="text-sm font-semibold text-ink">Salary Range: {modal.salaryRange}</span>
              </div>
            )}

            <div className="mb-4">
              <h4 className="font-bold text-sm text-ink mb-2 flex items-center gap-2">
                <i className="fas fa-briefcase text-primary text-xs" />
                Available Roles
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {modal.roles.map((role) => (
                  <span key={role} className="text-xs font-medium bg-secondary/10 text-secondary px-2.5 py-1 rounded-full">
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-sm text-ink mb-2 flex items-center gap-2">
                <i className="fas fa-clipboard-check text-primary text-xs" />
                Requirements
              </h4>
              <ul className="space-y-1">
                {modal.requirements.map((req) => (
                  <li key={req} className="text-xs text-ink/60 flex items-start gap-2">
                    <i className="fas fa-check-circle text-green-500 mt-0.5" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={COMPANY.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-cta text-white py-3 rounded-full font-bold text-center hover:brightness-110 transition-all shadow-lg"
            >
              <i className="fab fa-whatsapp mr-2" />
              Apply for {modal.name}
            </a>
          </div>
        </div>
      )}

      <div className="wavy-divider -mt-1 rotate-180">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="text-white fill-current">
          <path d="M0,30 C360,60 720,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  )
}