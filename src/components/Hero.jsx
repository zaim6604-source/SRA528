import { useState } from 'react'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&q=80'

const BENTO_TILES = [
  { icon: 'fa-globe', label: '50+ Countries', color: 'from-primary/20 to-secondary/20' },
  { icon: 'fa-ticket', label: 'Air Ticketing', color: 'from-cta/20 to-primary/20' },
  { icon: 'fa-building', label: 'License 2224/MTN', color: 'from-secondary/20 to-cta/20' },
  { icon: 'fa-users', label: '5k+ Placed', color: 'from-highlight/20 to-primary/20' },
]

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-0">
      {/* Background */}
      <div className="absolute inset-0">
        {!imgError ? (
          <img
            src={HERO_IMAGE}
            alt=""
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary to-highlight" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-cta/50" />
        <div className="absolute inset-0 bg-dot-pattern" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left: Main hero text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-5 border border-white/20">
              <i className="fas fa-check-circle text-accent" />
              Licensed Agency · 2224/MTN
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] mb-4">
              Your Gateway to{' '}
              <span className="text-accent">Global Opportunities</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/85 max-w-lg mb-8 leading-relaxed">
              Abu Bakar Bilal Travel International — trusted overseas recruitment and travel services from Pakhi More, Vehari to the world.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/923064712919"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-cta text-white px-7 py-3.5 rounded-full text-base font-semibold hover:bg-teal-600 transition-all shadow-xl shadow-cta/40 hover:shadow-cta/60 hover:-translate-y-0.5"
              >
                <i className="fa-brands fa-whatsapp text-lg" />
                Apply via WhatsApp
              </a>
              <a
                href="https://wa.me/923064712919"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 border-2 border-white/40 text-white px-7 py-3.5 rounded-full text-base font-semibold hover:bg-white/10 hover:border-white/60 transition-all"
              >
                <i className="fa-brands fa-whatsapp text-lg" />
                Inquire Now
              </a>
            </div>
          </div>

          {/* Right: Bento tile grid */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {BENTO_TILES.map((tile) => (
              <div
                key={tile.label}
                className={`rounded-2xl p-5 md:p-6 bg-gradient-to-br ${tile.color} backdrop-blur-sm border border-white/20 text-center flex flex-col items-center justify-center gap-2 min-h-[120px] md:min-h-[140px]`}
              >
                <i className={`fas ${tile.icon} text-white text-2xl md:text-3xl`} />
                <span className="text-white font-semibold text-sm md:text-base">{tile.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}