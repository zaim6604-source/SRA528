const TESTIMONIALS = [
  {
    name: 'Ahmed Khan',
    role: 'Saudi Arabia — Driver',
    text: 'Abu Bakar Bilal Travel made my visa process incredibly smooth. From document submission to final departure, they handled everything. I was in Riyadh within 3 weeks!',
    rating: 5,
  },
  {
    name: 'Muhammad Usman',
    role: 'UAE — Labour',
    text: 'Very professional and trustworthy team. They guided me through every step and made sure all my documents were in order. Highly recommended for anyone looking to work abroad.',
    rating: 5,
  },
  {
    name: 'Sajid Ali',
    role: 'Qatar — Construction',
    text: 'I had tried other agencies before but none were as efficient. Fast processing, clear communication, and no hidden charges. The best in Vehari!',
    rating: 5,
  },
  {
    name: 'Bilal Ahmed',
    role: 'Germany — Skilled Worker',
    text: 'Excellent service for European work visas too! They handled my Germany work permit application flawlessly. The travel assistance was very helpful.',
    rating: 4,
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section pill */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-5 py-2 rounded-full">
            <i className="fas fa-star" />
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mt-4 mb-3">
            What Our Clients Say
          </h2>
          <p className="text-ink/60 max-w-xl mx-auto">
            Real stories from people we have helped place in jobs around the world.
          </p>
        </div>

        {/* Chat-bubble thread */}
        <div className="max-w-3xl mx-auto space-y-6">
          {TESTIMONIALS.map((t, idx) => {
            const isLeft = idx % 2 === 0
            return (
              <div
                key={idx}
                className={`flex items-start gap-4 ${isLeft ? '' : 'flex-row-reverse'}`}
              >
                {/* Avatar */}
                <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm shadow-md">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>

                {/* Bubble */}
                <div
                  className={`relative max-w-lg ${
                    isLeft
                      ? 'bg-background rounded-2xl rounded-tl-sm'
                      : 'bg-primary/5 rounded-2xl rounded-tr-sm'
                  } p-5 shadow-sm`}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`fas fa-star text-xs ${
                          i < t.rating ? 'text-amber-400' : 'text-gray-200'
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-ink/70 text-sm leading-relaxed mb-3 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <span className="text-ink/30 text-xs">|</span>
                    <p className="text-xs text-ink/50">{t.role}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}