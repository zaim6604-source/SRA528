import { useState } from 'react'
import COUNTRIES from '../data/countries'

export default function CountryGuide() {
  return (
    <section id="countries" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section pill */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-5 py-2 rounded-full">
            <i className="fas fa-globe" />
            Country Guide
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mt-4 mb-3">
            Destinations We Cover
          </h2>
          <p className="text-ink/60 max-w-xl mx-auto">
            Work visas processed for top destinations across the Middle East, Europe, and Asia.
          </p>
        </div>

        {/* Landmark cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {COUNTRIES.map((c) => (
            <CountryCard key={c.slug} country={c} />
          ))}
        </div>

        {/* Chip grid */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {COUNTRIES.map((c) => (
            <span
              key={c.slug}
              className="inline-flex items-center gap-2 bg-white border border-primary/15 text-ink/80 text-sm font-medium px-4 py-2 rounded-full shadow-sm hover:border-primary/40 hover:text-primary transition-colors"
            >
              <span className="text-lg">{c.flag}</span>
              {c.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function CountryCard({ country: c }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        {!imgError ? (
          <img
            src={c.image}
            alt={c.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary to-secondary" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-4 flex items-center gap-2">
          <span className="text-2xl">{c.flag}</span>
          <div>
            <h3 className="text-white font-bold text-lg">{c.name}</h3>
            <p className="text-white/70 text-xs">{c.landmark}</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {c.roles.slice(0, 2).map((role) => (
            <span
              key={role}
              className="inline-flex items-center gap-1 bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full"
            >
              <i className="fas fa-briefcase text-[10px]" />
              {role}
            </span>
          ))}
        </div>
        <a
          href={`https://wa.me/923064712919?text=Hello%20Abu%20Bakar%20Bilal%20Travel%20International!%20I%20am%20interested%20in%20${encodeURIComponent(c.name)}.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-cta hover:text-teal-700 transition-colors"
        >
          <i className="fa-brands fa-whatsapp" />
          Apply for {c.name}
        </a>
      </div>
    </div>
  )
}